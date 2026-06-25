---
title: Cartographie des parkings
description: Guidelines officielles pour mapper les parkings et aires de stationnement dans Waze en Suisse.
---

# Cartographie des parkings

::: tip Accessible à tous — Niveau L1
Ces règles s'appliquent à tous les éditeurs.
:::

Les parkings jouent un rôle clé dans le projet Waze Parking, qui vise à offrir une expérience de navigation complète jusqu'à la place de parking. Un mapping correct dans le WME est nécessaire pour que cette fonctionnalité fonctionne. L'objectif reste de garder la carte lisible et utile à la navigation automobile, pas de reproduire chaque place.

## Principe général

Ces guidelines s'appliquent à **tous les parkings** — publics et privés — mais **pas** aux places de stationnement en voirie (rue).

Un parking se cartographie sous deux aspects complémentaires :

- un **lieu (Place) en forme de polygone** qui le matérialise sur la carte et permet le routage jusqu'à lui ;
- éventuellement des **voies internes (Parking Lot Road)** quand la circulation à l'intérieur justifie d'être tracée.

## Le lieu du parking (polygone)

Chaque parking doit être créé comme un **lieu en forme de polygone** (Place de type polygone) avec un point d'entrée positionné à l'entrée réelle du parking.

### Créer un parking dans le WME

1. Survoler le bouton **Ajouter un lieu**
2. Sélectionner **Services automobiles** → choisir l'option **Polygone**
3. Cliquer pour créer les nœuds du polygone — double-cliquer sur le dernier point pour terminer
4. Placer le marqueur d'entrée à l'**entrée réelle** du parking
5. Sélectionner **Parking Lot** dans le menu Catégories
6. Sauvegarder

Le polygone doit correspondre au mieux à la forme réelle du parking, en incluant les emplacements d'entrée/sortie.

Nommage du lieu (règles Suisse romande) :

- utiliser la catégorie Parking Lot, pas Park
- reprendre le nom exact du parking s'il existe, avec le symbole P
- éviter les termes génériques comme « Parking » ou les abréviations

## Les voies internes (Parking Lot Road)

Quand la circulation interne mérite d'être tracée, on ne dessine que les segments qui apportent un bénéfice de navigation.

À cartographier :

- les entrées et sorties, connectées au réseau routier voisin
- les voies périmétriques (le tour du parking), pour éviter une fausse détection de congestion
- les voies de circulation principales dans les grandes installations
- les voies longeant les bâtiments commerciaux

À ne pas cartographier :

- les places de stationnement individuelles
- les allées secondaires entre les rangées de places

::: important
Multiplier les allées secondaires surcharge l'affichage sur smartphone et alourdit l'application sans bénéfice pour la navigation. On reste sur la circulation principale. Les voies internes utilisent le type Parking Lot Road, et les entrées/sorties doivent être correctement connectées au réseau routier pour permettre le routing jusqu'au parking.
:::

## Cas particuliers

### Parking dans une zone commerciale ou une infrastructure

Créer **deux lieux séparés** : un pour le complexe/bâtiment, un pour son parking. Ne pas modifier le lieu existant pour y ajouter la catégorie parking.

### Parking souterrain

- Créer un polygone autour du périmètre estimé (basé sur la connaissance locale)
- Positionner le ou les points d'entrée avec précision
- Si un lieu existant est à cet emplacement, créer un polygone séparé plutôt que d'ajouter la catégorie au lieu existant

## Points importants

::: important
Le point d'entrée doit être placé à la véritable entrée physique du parking, pas au centre du polygone. C'est ce point qui est utilisé pour le routage final.
:::

::: note
Les parkings en voirie (parking sur rue le long des trottoirs) **ne sont pas concernés** par ces guidelines — ils se cartographient différemment.
:::

::: quote Sources
- Waze Discuss, Parking Lots, new mapping guidelines (2016) : https://www.waze.com/discuss/t/parking-lots-new-mapping-guidelines-2016/232237
- Waze Discuss, Règles d'édition en Suisse romande : https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
:::
