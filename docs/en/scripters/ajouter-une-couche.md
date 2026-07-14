---
title: Adding a layer to the Helper
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Adding a layer to the Helper

A concrete end-to-end example: adding a **raster layer** (swisstopo WMTS tiles) to the Helper. This is the most common kind of contribution. For a **data** layer (points, geometries), see the section at the bottom.

::: reminder Read first
This page assumes a running dev environment. Otherwise, start with [Contributing](/en/scripters/contribuer), then the [code conventions](/en/scripters/conventions).
:::

## 1. Declare the layer

In `main.user.ts`, function `createLayers()`, add a `TileLayer` instance to the `layerList` array:

```typescript
new TileLayer({
  wmeSDK,
  name: i18next.t("common:layers.hiking", "Hiking trails"),
  tileHeight: 256,
  tileWidth: 256,
  fileName: "${z}/${x}/${y}.png",
  servers: [
    "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.<layer-identifier>/default/current/3857",
  ],
  zIndex: 2035,
}),
```

Use the existing layers as a model. The swisstopo layer identifier is found in the [geo.admin.ch geocatalogue](https://www.geo.admin.ch/). Pick a free `zIndex` (current layers run from 2036 to 2039).

## 2. Add the translation

The i18n key passed to `i18next.t()` must exist for **all four languages**. Add `layers.hiking` to each `locales/<lang>/common.json`:

```json
{
  "layers": {
    "hiking": "Hiking trails"
  }
}
```

(Translate the value for `de`, `fr`, `it`.)

## 3. Update the changelog

Add an *Added* entry in the Changelog section of **every** README (`README.md`, `README.fr.md`, `README.de.md`, `README.it.md`), see [conventions](/en/scripters/conventions#changelog).

## 4. Build and test

```bash
npm run build
```

Then smoke test in the WME: load the local build, check the new layer, and verify the tiles draw and reload as you pan the map.

## 5. Open the PR

Follow the [contribution flow](/en/scripters/contribuer): branch, checklist, PR with review.

## Data layer (vector)

To display points or geometries (not tiles), extend `FeatureLayer` (`src/featureLayer.ts`) instead of `TileLayer` and implement its abstract methods:

- `fetchData()`: async generator that fetches the records (in batches).
- `mapRecordToFeature()`: turns a record into an `SdkFeature`.
- `getRecordId()`: stable identifier for a record.
- `shouldDrawRecord()`: filter (zoom, area, validity…).
- `featureClicked()`: reaction to a click on a feature.

`FeatureLayer` handles rendering, re-filtering and map events. **Reference to copy**: `src/publicTransportStopsLayer.ts` and `src/sbbDataLayer.ts`. Steps 2 to 5 (i18n, changelog, build, PR) are identical.

::: quote Sources
- Repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- swisstopo geocatalogue: https://www.geo.admin.ch/
- WME SDK documentation: https://www.waze.com/editor/sdk/index.html
:::
