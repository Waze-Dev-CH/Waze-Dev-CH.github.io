---
title: Cartographie des parkings
description: Guidelines officielles pour mapper les parkings et aires de stationnement dans Waze en Suisse.
---

# Cartographie des parkings

::: tip Accessible à tous — Niveau L1
Ces règles s'appliquent à tous les éditeurs.
:::

Les parkings jouent un rôle clé dans le projet Waze Parking, qui vise à offrir une expérience de navigation complète jusqu'à la place de parking. Un mapping correct dans le WME est nécessaire pour que cette fonctionnalité fonctionne.

## Principe général

Ces guidelines s'appliquent à **tous les parkings** — publics et privés — mais **pas** aux places de stationnement en voirie (rue).

Chaque parking doit être créé comme un **lieu en forme de polygone** (Place de type polygone) avec un point d'entrée positionné à l'entrée réelle du parking.

## Créer un parking dans le WME

1. Survoler le bouton **Ajouter un lieu**
2. Sélectionner **Services automobiles** → choisir l'option **Polygone**
3. Cliquer pour créer les nœuds du polygone — double-cliquer sur le dernier point pour terminer
4. Placer le marqueur d'entrée à l'**entrée réelle** du parking
5. Sélectionner **Parking Lot** dans le menu Catégories
6. Sauvegarder

Le polygone doit correspondre au mieux à la forme réelle du parking, en incluant les emplacements d'entrée/sortie.

## Cas particuliers

### Parking dans une zone commerciale ou une infrastructure

Créer **deux lieux séparés** : un pour le complexe/bâtiment, un pour son parking. Ne pas modifier le lieu existant pour y ajouter la catégorie parking.

### Parking souterrain

- Créer un polygone autour du périmètre estimé (basé sur la connaissance locale)
- Positionner le point d'entrée avec précision
- Si un lieu existant est à cet emplacement, créer un polygone séparé plutôt que d'ajouter la catégorie au lieu existant

## Points importants

::: important
Le point d'entrée doit être placé à la véritable entrée physique du parking, pas au centre du polygone. C'est ce point qui est utilisé pour le routage final.
:::

::: note
Les parkings en voirie (parking sur rue le long des trottoirs) **ne sont pas concernés** par ces guidelines — ils se cartographient différemment.
:::
