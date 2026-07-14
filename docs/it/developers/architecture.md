---
title: Architettura del Helper
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/scene-editor.png" alt="">

# Architettura del Helper

Una panoramica del codice per orientarsi prima di contribuire. Il punto d'ingresso è `main.user.ts`; tutto il resto vive in `src/`. I file citati sono la fonte di verità; questa pagina si limita a mapparli.

## Flusso all'avvio

`main.user.ts` attende l'inizializzazione dell'SDK, poi esegue:

1. `unsafeWindow.SDK_INITIALIZED` → ottiene l'istanza tramite `unsafeWindow.getWmeSdk({ scriptId, scriptName })`.
2. `activateLanguage()`: legge la locale del WME e allinea i18next su di essa.
3. `createLayers()`: istanzia ogni livello e lo inserisce in una `Map<string, Layer>`.
4. `addScriptTab()`: registra la scheda dello script (`wmeSDK.Sidebar.registerScriptTab()`) e la riempie.
5. All'evento `wme-ready`: `restoreState()` per ogni livello (ripristina le caselle spuntate e i rendering).

## Il modello a livelli

Tutta la logica della mappa è organizzata attorno a una gerarchia di livelli. Ogni livello possiede la sua casella nel selettore di livelli, i suoi eventi e la sua persistenza.

| Classe | File | Ruolo |
| --- | --- | --- |
| `Layer` (astratta) | `src/layer.ts` | Base: aggiunge la casella (`LayerSwitcher.addLayerCheckbox`), gestisce il toggle (`wme-layer-checkbox-toggled` → salvataggio + `addToMap`/`removeFromMap`), ripristina lo stato. |
| `TileLayer` | `src/tileLayer.ts` | Livello **raster** (tile WMTS swisstopo). Guidato dalla configurazione: `name`, `servers`, `tileWidth/Height`, `fileName`, `zIndex`. |
| `FeatureLayer` (astratta) | `src/featureLayer.ts` | Livello **vettoriale**. Gestisce `render` / rifiltraggio / clic / `wme-map-move-end`. Le sottoclassi implementano: `fetchData` (generatore async), `mapRecordToFeature`, `getRecordId`, `shouldDrawRecord`, `featureClicked`. |

Stato persistito tramite `src/storage.ts` (`saveLayerState`, `isLayerEnabled`).

## Barra laterale

L'UI della scheda è un albero di elementi (`src/sidebar.ts`): `SidebarTab` contiene `SidebarSection`, `Paragraph` e `SidebarItem`. Ogni elemento ha un metodo `render()` che produce HTML; il tutto viene iniettato in `tabPane.innerHTML`.

## Traduzioni

i18next, namespace `common`. Le chiavi sono risolte da `i18next.t("common:...", "fallback")` e vivono in `locales/<lang>/common.json` (de, en, fr, it), collegate tramite `locales/i18n`.

## Catena di build

```
main.user.ts + src/  →  Rollup  →  .out/main.user.js  →  + header.js  →  releases/*.user.js
```

`npm run watch` esegue questa catena in continuo; `npm run build` la esegue una volta.

## Mappa di `src/`

- **Livelli**: `layer.ts`, `tileLayer.ts`, `featureLayer.ts`, `sbbDataLayer.ts`, `publicTransportStopsLayer.ts`, `clusterManager.ts`
- **Pipeline fermate TP**: `stopCityMatcher.ts`, `stopGeometry.ts`, `stopNameCleaner.ts`, `stopNameFormatter.ts`, `stopValidity.ts` (+ i loro `*.test.ts`)
- **POI / venue**: `venueMatcher.ts`, `wazeVenueFetcher.ts`
- **Verifica nomi delle vie**: `street-name-checker/` (modulo separato)
- **Infra**: `storage.ts`, `utils.ts`, `reloadButton.ts`

## Moduli separati

Il verificatore dei nomi delle vie (`initStreetNameChecker`) gira con il **proprio `scriptId`** e la propria scheda; `registerScriptTab()` solleva un errore se lo `scriptId` dell'host possiede già una scheda.

::: quote Fonti
- Repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Convenzioni del progetto: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/blob/main/.github/copilot-instructions.md
:::
