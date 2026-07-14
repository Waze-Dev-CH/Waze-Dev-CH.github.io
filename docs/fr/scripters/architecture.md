---
title: Architecture du Helper
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/scene-editor.png" alt="">

# Architecture du Helper

Vue d'ensemble du code pour s'orienter avant de contribuer. Le point d'entrée est `main.user.ts` ; tout le reste vit dans `src/`. Les fichiers cités sont la source de vérité ; cette page ne fait qu'en dessiner la carte.

## Flux au démarrage

`main.user.ts` attend l'initialisation du SDK puis enchaîne :

1. `unsafeWindow.SDK_INITIALIZED` → récupère l'instance via `unsafeWindow.getWmeSdk({ scriptId, scriptName })`.
2. `activateLanguage()` : lit la locale du WME et cale i18next dessus.
3. `createLayers()` : instancie chaque couche et la range dans une `Map<string, Layer>`.
4. `addScriptTab()` : enregistre l'onglet du script (`wmeSDK.Sidebar.registerScriptTab()`) et le remplit.
5. Sur l'événement `wme-ready` : `restoreState()` de chaque couche (rétablit les cases cochées et les rendus).

## Le modèle de couches

Toute la logique carte s'organise autour d'une hiérarchie de couches. Chaque couche possède sa case dans le sélecteur de couches, ses événements et sa persistance.

| Classe | Fichier | Rôle |
| --- | --- | --- |
| `Layer` (abstraite) | `src/layer.ts` | Socle : ajoute la case (`LayerSwitcher.addLayerCheckbox`), gère le toggle (`wme-layer-checkbox-toggled` → sauvegarde + `addToMap`/`removeFromMap`), restaure l'état. |
| `TileLayer` | `src/tileLayer.ts` | Couche **raster** (tuiles WMTS swisstopo). Piloté par la config : `name`, `servers`, `tileWidth/Height`, `fileName`, `zIndex`. |
| `FeatureLayer` (abstraite) | `src/featureLayer.ts` | Couche **vecteur**. Gère `render` / re-filtrage / clics / `wme-map-move-end`. Sous-classes à implémenter : `fetchData` (générateur async), `mapRecordToFeature`, `getRecordId`, `shouldDrawRecord`, `featureClicked`. |

État persisté via `src/storage.ts` (`saveLayerState`, `isLayerEnabled`).

## Barre latérale

L'UI de l'onglet est un arbre d'éléments (`src/sidebar.ts`) : `SidebarTab` contient des `SidebarSection`, `Paragraph` et `SidebarItem`. Chaque élément a une méthode `render()` qui produit du HTML ; le tout est injecté dans `tabPane.innerHTML`.

## Traductions

i18next, namespace `common`. Les clés sont résolues par `i18next.t("common:...", "fallback")` et vivent dans `locales/<lang>/common.json` (de, en, fr, it), câblées par `locales/i18n`.

## Chaîne de build

```
main.user.ts + src/  →  Rollup  →  .out/main.user.js  →  + header.js  →  releases/*.user.js
```

`npm run watch` fait tourner cette chaîne en continu ; `npm run build` la fait une fois.

## Carte de `src/`

- **Couches** : `layer.ts`, `tileLayer.ts`, `featureLayer.ts`, `sbbDataLayer.ts`, `publicTransportStopsLayer.ts`, `clusterManager.ts`
- **Pipeline arrêts TP** : `stopCityMatcher.ts`, `stopGeometry.ts`, `stopNameCleaner.ts`, `stopNameFormatter.ts`, `stopValidity.ts` (+ leurs `*.test.ts`)
- **POI / venues** : `venueMatcher.ts`, `wazeVenueFetcher.ts`
- **Vérif noms de rue** : `street-name-checker/` (module à part)
- **Infra** : `storage.ts`, `utils.ts`, `reloadButton.ts`

## Modules à part

Le vérificateur de noms de rue (`initStreetNameChecker`) tourne avec son **propre `scriptId`** et son propre onglet ; `registerScriptTab()` lève une erreur si le `scriptId` de l'hôte possède déjà un onglet.

::: quote Sources
- Dépôt : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Conventions du projet : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/blob/main/.github/copilot-instructions.md
:::
