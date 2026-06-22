---
title: Parkings et aires de stationnement
---

# Parkings et aires de stationnement

Les parkings et aires de stationnement se cartographient avec les Parking Lot Roads (routes de parking). L'objectif est de garder la carte lisible et utile à la navigation automobile, pas de reproduire chaque place.

## Principe : ne cartographier que l'essentiel

Sur un parking, on ne trace que les segments qui apportent un bénéfice de navigation.

À cartographier :

- les entrées et sorties, connectées au réseau routier voisin
- les voies périmétriques (le tour du parking), pour éviter une fausse détection de congestion
- les voies de circulation principales dans les grandes installations
- les voies longeant les bâtiments commerciaux

À ne pas cartographier :

- les places de stationnement individuelles
- les allées secondaires entre les rangées de places

::: important
Multiplier les allées secondaires surcharge l'affichage sur smartphone et alourdit l'application sans bénéfice pour la navigation. On reste sur la circulation principale.
:::

## Type de segment

Les voies internes du parking utilisent le type Parking Lot Road. Les entrées et sorties doivent être correctement connectées au réseau routier pour permettre le routing jusqu'au parking.

## Lieu (POI) du parking

Quand le parking justifie un lieu, on l'ajoute comme Place distincte.

::: note
La directive Waze de 2016 recommande de cartographier un parking comme un Place de forme surfacique (polygone) avec un point d'entrée à l'emplacement réel d'accès. Un parking rattaché à un commerce se cartographie comme un lieu à part entière, sans modifier le lieu d'origine.
:::

Nommage du lieu (règles Suisse romande) :

- utiliser la catégorie Parking Lot, pas Park
- reprendre le nom exact du parking s'il existe, avec le symbole P
- éviter les termes génériques comme « Parking » ou les abréviations

## Cas particuliers

::: example Parking souterrain
Tracer un polygone estimé avec un ou plusieurs points d'entrée correctement positionnés.
:::

::: quote Sources
- Waze Discuss, Parking Lots, new mapping guidelines (2016) : https://www.waze.com/discuss/t/parking-lots-new-mapping-guidelines-2016/232237
- Waze Discuss, Règles d'édition en Suisse romande : https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
:::
