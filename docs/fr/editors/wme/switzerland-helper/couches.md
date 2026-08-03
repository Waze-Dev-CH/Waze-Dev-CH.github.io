---
title: Couches cartographiques
description: Les cinq fonds de carte suisses ajoutés au WME par le Switzerland Helper.
order: 1
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Couches cartographiques

Le Helper ajoute cinq fonds de carte officiels suisses au sélecteur de couches du WME, en bas
de la barre de droite.

## Les cinq couches

| Case à cocher | Ce qu'elle affiche |
| --- | --- |
| **Limites communales** | Le découpage des communes |
| **Limites cantonales** | Le découpage des cantons |
| **Noms géographiques swissNAMES3D** | Les toponymes officiels : lieux-dits, sommets, cours d'eau |
| **Cartes nationales (couleur)** | La carte nationale suisse, le fond topographique classique |
| **Fond SWISSIMAGE** | L'imagerie aérienne fédérale, en haute résolution |

On peut en activer plusieurs à la fois, et les cases cochées sont retrouvées telles quelles
au rechargement de l'éditeur. Ces fonds se dessinent toujours **sous les segments et les
lieux** : ils ne masquent jamais ce que vous éditez.

## Quand utiliser laquelle

- **Fond SWISSIMAGE** est le fond de travail le plus utile au quotidien : bien plus net que
  l'imagerie par défaut du WME sur la Suisse, il rend le tracé des géométries beaucoup plus
  fiable.
- **Cartes nationales (couleur)** aide là où la photo aérienne est ambiguë : forêt dense,
  montagne, chemin sous les arbres.
- **Noms géographiques swissNAMES3D** sert à vérifier l'orthographe d'un lieu-dit avant de le
  saisir.
- **Limites communales** et **Limites cantonales** servent à vérifier la ville attribuée à un
  segment, notamment quand une rue change de commune en cours de route.

::: help Savoir de quand date la photo aérienne
L'imagerie n'est pas renouvelée partout en même temps : une image ancienne peut manquer un
lotissement ou un giratoire récent. L'onglet **WME Suisse Helper** contient un lien vers une
carte qui indique, région par région, l'année de la prise de vue.
:::

## Si une couche ne s'affiche pas

- Vérifiez que la case est cochée, tout en bas du sélecteur de couches.
- Ces fonds ne couvrent que la **Suisse** : hors des frontières, il n'y a rien à afficher.
- Les couches de limites sont peu lisibles de très loin. Zoomez si le rendu paraît uniforme.

::: quote Sources
- Dépôt du script : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Cartes et imagerie : swisstopo, https://www.geo.admin.ch
:::
