---
title: Helper architecture
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/scene-editor.png" alt="">

# Helper architecture

A code overview to get your bearings before contributing. The entry point is `main.user.ts`; everything else lives in `src/`. The files cited are the source of truth; this page only maps them.

## Startup flow

`main.user.ts` waits for the SDK to initialize, then runs:

1. `unsafeWindow.SDK_INITIALIZED` → gets the instance via `unsafeWindow.getWmeSdk({ scriptId, scriptName })`.
2. `activateLanguage()`: reads the WME locale and aligns i18next with it.
3. `createLayers()`: instantiates each layer and stores it in a `Map<string, Layer>`.
4. `addScriptTab()`: registers the script tab (`wmeSDK.Sidebar.registerScriptTab()`) and fills it.
5. On the `wme-ready` event: `restoreState()` for each layer (restores checked boxes and renders).

## The layer model

All map logic is organized around a layer hierarchy. Each layer owns its checkbox in the layer switcher, its events and its persistence.

| Class | File | Role |
| --- | --- | --- |
| `Layer` (abstract) | `src/layer.ts` | Foundation: adds the checkbox (`LayerSwitcher.addLayerCheckbox`), handles the toggle (`wme-layer-checkbox-toggled` → save + `addToMap`/`removeFromMap`), restores state. |
| `TileLayer` | `src/tileLayer.ts` | **Raster** layer (swisstopo WMTS tiles). Config-driven: `name`, `servers`, `tileWidth/Height`, `fileName`, `zIndex`. |
| `FeatureLayer` (abstract) | `src/featureLayer.ts` | **Vector** layer. Handles `render` / re-filtering / clicks / `wme-map-move-end`. Subclasses implement: `fetchData` (async generator), `mapRecordToFeature`, `getRecordId`, `shouldDrawRecord`, `featureClicked`. |

State persisted via `src/storage.ts` (`saveLayerState`, `isLayerEnabled`).

## Sidebar

The tab UI is a tree of elements (`src/sidebar.ts`): `SidebarTab` contains `SidebarSection`, `Paragraph` and `SidebarItem`. Each element has a `render()` method producing HTML; the whole thing is injected into `tabPane.innerHTML`.

## Translations

i18next, namespace `common`. Keys are resolved by `i18next.t("common:...", "fallback")` and live in `locales/<lang>/common.json` (de, en, fr, it), wired through `locales/i18n`.

## Build chain

```
main.user.ts + src/  →  Rollup  →  .out/main.user.js  →  + header.js  →  releases/*.user.js
```

`npm run watch` runs this chain continuously; `npm run build` runs it once.

## Map of `src/`

- **Layers**: `layer.ts`, `tileLayer.ts`, `featureLayer.ts`, `sbbDataLayer.ts`, `publicTransportStopsLayer.ts`, `clusterManager.ts`
- **Public-transport stops pipeline**: `stopCityMatcher.ts`, `stopGeometry.ts`, `stopNameCleaner.ts`, `stopNameFormatter.ts`, `stopValidity.ts` (+ their `*.test.ts`)
- **POIs / venues**: `venueMatcher.ts`, `wazeVenueFetcher.ts`
- **Street-name checking**: `street-name-checker/` (separate module)
- **Infra**: `storage.ts`, `utils.ts`, `reloadButton.ts`

## Separate modules

The street-name checker (`initStreetNameChecker`) runs with its **own `scriptId`** and its own tab; `registerScriptTab()` throws if the host's `scriptId` already owns a tab.

::: quote Sources
- Repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Project conventions: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/blob/main/.github/copilot-instructions.md
:::
