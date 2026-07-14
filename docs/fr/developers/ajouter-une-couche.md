---
title: Ajouter une couche au Helper
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Ajouter une couche au Helper

Exemple concret de bout en bout : ajouter une **couche raster** (tuiles WMTS swisstopo) au Helper. C'est le type de contribution le plus courant. Pour une couche de **données** (points, géométries), voir la section en bas.

::: reminder À lire d'abord
Cette page suppose un environnement de dev qui tourne. Sinon, commencer par [Contribuer](/fr/developers/contribuer) puis les [conventions de code](/fr/developers/conventions).
:::

## 1. Déclarer la couche

Dans `main.user.ts`, fonction `createLayers()`, ajouter une instance de `TileLayer` au tableau `layerList` :

```typescript
new TileLayer({
  wmeSDK,
  name: i18next.t("common:layers.hiking", "Chemins de randonnée"),
  tileHeight: 256,
  tileWidth: 256,
  fileName: "${z}/${x}/${y}.png",
  servers: [
    "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.<identifiant-couche>/default/current/3857",
  ],
  zIndex: 2035,
}),
```

Reprendre les couches existantes comme modèle. L'identifiant de couche swisstopo se trouve dans le [géocatalogue geo.admin.ch](https://www.geo.admin.ch/). Choisir un `zIndex` libre (les couches actuelles vont de 2036 à 2039).

## 2. Ajouter la traduction

La clé i18n passée à `i18next.t()` doit exister pour **les quatre langues**. Ajouter `layers.hiking` dans chaque `locales/<lang>/common.json` :

```json
{
  "layers": {
    "hiking": "Chemins de randonnée"
  }
}
```

(Traduire la valeur pour `de`, `en`, `it`.)

## 3. Mettre à jour le changelog

Ajouter une entrée *Added* dans la section Changelog de **tous** les README (`README.md`, `README.fr.md`, `README.de.md`, `README.it.md`), voir [conventions](/fr/developers/conventions#changelog).

## 4. Construire et tester

```bash
npm run build
```

Puis smoke test dans le WME : charger le build local, cocher la nouvelle couche, vérifier que les tuiles s'affichent et se rechargent au déplacement de la carte.

## 5. Ouvrir la PR

Suivre le [flux de contribution](/fr/developers/contribuer) : branche, checklist, PR avec review.

## Couche de données (vecteur)

Pour afficher des points ou des géométries (et pas des tuiles), étendre `FeatureLayer` (`src/featureLayer.ts`) au lieu de `TileLayer` et implémenter ses méthodes abstraites :

- `fetchData()` : générateur async qui récupère les enregistrements (par lots).
- `mapRecordToFeature()` : transforme un enregistrement en `SdkFeature`.
- `getRecordId()` : identifiant stable d'un enregistrement.
- `shouldDrawRecord()` : filtre (zoom, zone, validité…).
- `featureClicked()` : réaction au clic sur une entité.

`FeatureLayer` s'occupe du rendu, du re-filtrage et des événements carte. **Référence à copier** : `src/publicTransportStopsLayer.ts` et `src/sbbDataLayer.ts`. Les étapes 2 à 5 (i18n, changelog, build, PR) sont identiques.

::: quote Sources
- Dépôt : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Géocatalogue swisstopo : https://www.geo.admin.ch/
- Documentation du SDK WME : https://www.waze.com/editor/sdk/index.html
:::
