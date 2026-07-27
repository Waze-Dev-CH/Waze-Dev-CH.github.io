---
title: Couches cartographiques
description: Les cinq fonds de carte suisses ajoutés au WME par le Switzerland Helper, servis par swisstopo.
order: 1
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Couches cartographiques

Le Helper ajoute cinq fonds de carte officiels au sélecteur de couches du WME, en bas de la
barre de droite. Ils sont servis par **swisstopo**, l'Office fédéral de topographie.

## Les cinq couches

| Case à cocher | Ce qu'elle affiche |
| --- | --- |
| **Limites communales** | Le découpage des communes suisses, en surfaces remplies |
| **Limites cantonales** | Le découpage des cantons, en surfaces remplies |
| **Noms géographiques swissNAMES3D** | Les toponymes officiels : lieux-dits, sommets, cours d'eau |
| **Cartes nationales (couleur)** | La carte nationale suisse, le fond topographique classique |
| **Fond SWISSIMAGE** | L'orthophoto aérienne fédérale, en haute résolution |

Les cases sont indépendantes : on peut en activer plusieurs à la fois. **L'état des cases est
mémorisé** et restauré au rechargement de l'éditeur, il n'y a donc rien à recocher à chaque
session.

::: note Ces couches passent sous les segments
Toutes se dessinent au-dessus du fond de carte de Waze mais **en dessous des segments, des
lieux et des nœuds**. Activer SWISSIMAGE ne masque donc jamais ce que vous êtes en train
d'éditer.
:::

## Quand utiliser laquelle

- **Fond SWISSIMAGE** est le fond de travail le plus utile au quotidien : sa résolution est
  nettement meilleure que l'imagerie par défaut du WME sur le territoire suisse, ce qui rend
  le tracé des géométries beaucoup plus fiable.
- **Cartes nationales (couleur)** aide à comprendre le terrain là où l'orthophoto est
  ambiguë : forêt dense, zone de montagne, chemin sous couvert végétal.
- **Noms géographiques swissNAMES3D** sert à nommer correctement les lieux-dits et à vérifier
  un toponyme avant de le saisir.
- **Limites communales** et **Limites cantonales** servent surtout à vérifier la ville
  attribuée à un segment, et à repérer les cas particuliers : une rue qui change de commune
  en cours de route, ou une frontière linguistique.

::: help Savoir de quand date l'imagerie
L'orthophoto n'est pas mise à jour partout en même temps : swisstopo couvre la Suisse par
régions, sur un cycle de plusieurs années. Une image ancienne peut faire manquer un
lotissement récent ou un giratoire neuf.

L'onglet **WME Suisse Helper** contient un lien vers la carte des dates de mise à jour de
SWISSIMAGE. Elle indique, région par région, l'année de la prise de vue.
:::

## Si une couche ne s'affiche pas

- Vérifiez que la case est bien cochée dans le sélecteur de couches, tout en bas de la liste.
- Les tuiles ne couvrent que le **territoire suisse** : hors des frontières, il n'y a
  simplement rien à afficher.
- Les couches de limites sont peu lisibles à très petite échelle. Zoomez si le rendu paraît
  vide ou uniforme.

::: quote Sources
- Dépôt du script : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Géodonnées : https://www.geo.admin.ch (swisstopo, service WMTS)
- Dates de mise à jour de SWISSIMAGE : https://map.geo.admin.ch
:::
