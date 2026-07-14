---
title: Aggiungere un livello al Helper
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Aggiungere un livello al Helper

Un esempio concreto end-to-end: aggiungere un **livello raster** (tile WMTS swisstopo) al Helper. È il tipo di contributo più comune. Per un livello di **dati** (punti, geometrie), vedi la sezione in fondo.

::: reminder Da leggere prima
Questa pagina presuppone un ambiente di sviluppo funzionante. Altrimenti, iniziare da [Contribuire](/it/scripters/contribuer), poi le [convenzioni di codice](/it/scripters/conventions).
:::

## 1. Dichiarare il livello

In `main.user.ts`, funzione `createLayers()`, aggiungere un'istanza di `TileLayer` all'array `layerList`:

```typescript
new TileLayer({
  wmeSDK,
  name: i18next.t("common:layers.hiking", "Sentieri escursionistici"),
  tileHeight: 256,
  tileWidth: 256,
  fileName: "${z}/${x}/${y}.png",
  servers: [
    "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.<identificatore-livello>/default/current/3857",
  ],
  zIndex: 2035,
}),
```

Usare i livelli esistenti come modello. L'identificatore del livello swisstopo si trova nel [geocatalogo geo.admin.ch](https://www.geo.admin.ch/). Scegliere uno `zIndex` libero (i livelli attuali vanno da 2036 a 2039).

## 2. Aggiungere la traduzione

La chiave i18n passata a `i18next.t()` deve esistere per **tutte e quattro le lingue**. Aggiungere `layers.hiking` in ogni `locales/<lang>/common.json`:

```json
{
  "layers": {
    "hiking": "Sentieri escursionistici"
  }
}
```

(Tradurre il valore per `de`, `en`, `fr`.)

## 3. Aggiornare il changelog

Aggiungere una voce *Added* nella sezione Changelog di **ogni** README (`README.md`, `README.fr.md`, `README.de.md`, `README.it.md`), vedi [convenzioni](/it/scripters/conventions#changelog).

## 4. Costruire e testare

```bash
npm run build
```

Poi smoke test nel WME: caricare la build locale, spuntare il nuovo livello e verificare che le tile vengano disegnate e ricaricate spostando la mappa.

## 5. Aprire la PR

Seguire il [flusso di contribuzione](/it/scripters/contribuer): branch, checklist, PR con review.

## Livello di dati (vettoriale)

Per visualizzare punti o geometrie (non tile), estendere `FeatureLayer` (`src/featureLayer.ts`) invece di `TileLayer` e implementare i suoi metodi astratti:

- `fetchData()`: generatore async che recupera i record (a lotti).
- `mapRecordToFeature()`: trasforma un record in un `SdkFeature`.
- `getRecordId()`: identificatore stabile di un record.
- `shouldDrawRecord()`: filtro (zoom, area, validità…).
- `featureClicked()`: reazione a un clic su un'entità.

`FeatureLayer` si occupa del rendering, del rifiltraggio e degli eventi della mappa. **Riferimento da copiare**: `src/publicTransportStopsLayer.ts` e `src/sbbDataLayer.ts`. I passi da 2 a 5 (i18n, changelog, build, PR) sono identici.

::: quote Fonti
- Repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Geocatalogo swisstopo: https://www.geo.admin.ch/
- Documentazione dell'SDK WME: https://www.waze.com/editor/sdk/index.html
:::
