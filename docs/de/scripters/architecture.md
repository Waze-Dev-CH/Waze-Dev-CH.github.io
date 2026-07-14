---
title: Architektur des Helpers
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/scene-editor.png" alt="">

# Architektur des Helpers

Ein Code-Überblick zur Orientierung vor dem Beitragen. Der Einstiegspunkt ist `main.user.ts`; alles andere lebt in `src/`. Die genannten Dateien sind die Quelle der Wahrheit; diese Seite kartiert sie nur.

## Ablauf beim Start

`main.user.ts` wartet auf die Initialisierung des SDK und führt dann aus:

1. `unsafeWindow.SDK_INITIALIZED` → holt die Instanz via `unsafeWindow.getWmeSdk({ scriptId, scriptName })`.
2. `activateLanguage()`: liest die WME-Locale und richtet i18next darauf aus.
3. `createLayers()`: instanziiert jede Ebene und legt sie in einer `Map<string, Layer>` ab.
4. `addScriptTab()`: registriert den Skript-Tab (`wmeSDK.Sidebar.registerScriptTab()`) und füllt ihn.
5. Beim Ereignis `wme-ready`: `restoreState()` für jede Ebene (stellt angehakte Kästchen und Renderings wieder her).

## Das Ebenenmodell

Die gesamte Kartenlogik ist um eine Ebenenhierarchie organisiert. Jede Ebene besitzt ihr Kästchen im Ebenenwähler, ihre Ereignisse und ihre Persistenz.

| Klasse | Datei | Rolle |
| --- | --- | --- |
| `Layer` (abstrakt) | `src/layer.ts` | Fundament: fügt das Kästchen hinzu (`LayerSwitcher.addLayerCheckbox`), verwaltet den Toggle (`wme-layer-checkbox-toggled` → speichern + `addToMap`/`removeFromMap`), stellt den Zustand wieder her. |
| `TileLayer` | `src/tileLayer.ts` | **Raster**-Ebene (swisstopo-WMTS-Kacheln). Konfigurationsgesteuert: `name`, `servers`, `tileWidth/Height`, `fileName`, `zIndex`. |
| `FeatureLayer` (abstrakt) | `src/featureLayer.ts` | **Vektor**-Ebene. Verwaltet `render` / Neufilterung / Klicks / `wme-map-move-end`. Unterklassen implementieren: `fetchData` (async Generator), `mapRecordToFeature`, `getRecordId`, `shouldDrawRecord`, `featureClicked`. |

Zustand persistiert via `src/storage.ts` (`saveLayerState`, `isLayerEnabled`).

## Seitenleiste

Die Tab-UI ist ein Baum von Elementen (`src/sidebar.ts`): `SidebarTab` enthält `SidebarSection`, `Paragraph` und `SidebarItem`. Jedes Element hat eine `render()`-Methode, die HTML erzeugt; das Ganze wird in `tabPane.innerHTML` eingefügt.

## Übersetzungen

i18next, Namespace `common`. Schlüssel werden über `i18next.t("common:...", "fallback")` aufgelöst und leben in `locales/<lang>/common.json` (de, en, fr, it), verdrahtet über `locales/i18n`.

## Build-Kette

```
main.user.ts + src/  →  Rollup  →  .out/main.user.js  →  + header.js  →  releases/*.user.js
```

`npm run watch` lässt diese Kette fortlaufend laufen; `npm run build` einmal.

## Karte von `src/`

- **Ebenen**: `layer.ts`, `tileLayer.ts`, `featureLayer.ts`, `sbbDataLayer.ts`, `publicTransportStopsLayer.ts`, `clusterManager.ts`
- **Pipeline ÖV-Haltestellen**: `stopCityMatcher.ts`, `stopGeometry.ts`, `stopNameCleaner.ts`, `stopNameFormatter.ts`, `stopValidity.ts` (+ ihre `*.test.ts`)
- **POIs / Venues**: `venueMatcher.ts`, `wazeVenueFetcher.ts`
- **Strassennamen-Prüfung**: `street-name-checker/` (separates Modul)
- **Infra**: `storage.ts`, `utils.ts`, `reloadButton.ts`

## Separate Module

Der Strassennamen-Prüfer (`initStreetNameChecker`) läuft mit seinem **eigenen `scriptId`** und seinem eigenen Tab; `registerScriptTab()` wirft einen Fehler, wenn der `scriptId` des Hosts bereits einen Tab besitzt.

::: quote Quellen
- Repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Projektkonventionen: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/blob/main/.github/copilot-instructions.md
:::
