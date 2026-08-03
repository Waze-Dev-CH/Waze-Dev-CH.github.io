---
title: Numéros de maison
description: Importer les numéros de maison officiels du registre fédéral des bâtiments dans le WME.
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/city.png" alt="">

# Numéros de maison

L'importateur affiche les adresses officielles du **registre fédéral des bâtiments** et
permet de créer les numéros manquants dans Waze, un par un ou par rue entière.

## Activer la fonction

La fonction est **éteinte au départ** : c'est à vous de l'allumer, par la case **Numéros de
maison suisses** du sélecteur de couches ou par l'interrupteur en haut de l'onglet
**CH · Numéros de maison**.

Les points apparaissent à partir du zoom 17, et les numéros s'écrivent à côté d'eux quand on
zoome davantage.

## Lire les points

| Point | Signification | Cliquable |
| --- | --- | --- |
| **Vert vif**, marqué d'un **+** | Numéro de la rue sélectionnée, absent de Waze | Oui |
| **Ardoise**, marqué d'une **coche** | Numéro déjà posé | Non |
| **Gris clair**, petit | Adresse d'une autre rue | Non |
| **Gris-bleu**, petit | Aucune rue sélectionnée, ou vérification en cours | Non |

Les deux premiers portent un pictogramme et ont la même taille : vous les distinguez même
sans percevoir la différence de couleur. Les deux derniers restent petits et ternes, parce
qu'il n'y a rien à y faire.

::: important Le gris-bleu veut aussi dire « patientez »
Juste après avoir sélectionné un segment, le script vérifie quels numéros existent déjà.
Pendant ce court instant les points restent gris-bleu et ne réagissent pas au clic, pour
éviter de créer un doublon. Attendez qu'ils prennent leur couleur définitive.
:::

## Importer un numéro

1. **Sélectionnez d'abord le segment de rue.**
2. Cliquez sur un point vert vif : le numéro est créé à l'emplacement officiel.

::: note Le numéro se rattache tout seul au bon segment
Une rue est découpée en plusieurs segments, un par tronçon entre intersections. Chaque numéro
est rattaché à celui devant lequel il se trouve réellement, et pas forcément à celui que vous
avez cliqué. Le script cherche aussi les doublons sur les tronçons voisins de la même rue :
le numéro 15 est souvent posé sur celui d'à côté.
:::

## Importer toute une rue

Un segment étant sélectionné, un bouton d'import apparaît dans l'onglet et dans l'encadré en
haut du panneau du segment. <kbd>Alt</kbd>+<kbd>H</kbd> fait la même chose.

L'import traite **50 numéros au maximum** à la fois : s'il en manque davantage, le bouton
l'annonce et il suffit de relancer. Une confirmation liste toujours les numéros concernés
avant de les créer.

::: important Relisez toujours le résultat sur la carte
Les coordonnées officielles visent le bâtiment, pas la porte : une entrée de cour, une maison
en retrait ou une villa dans un grand jardin donneront un point mal placé pour la navigation.
Déplacez ces numéros avant d'enregistrer.
:::

## Quand le bouton d'import n'apparaît pas

- **Aucun segment n'est sélectionné.**
- **Il ne manque aucun numéro** sur cette rue.
- **La zone est trop dense** pour que le script liste toutes les adresses. Il le dit
  clairement, et les clics point par point continuent de fonctionner normalement.

## Annuler

<kbd>Ctrl</kbd>+<kbd>Z</kbd> annule la création comme n'importe quelle autre modification, et
les points annulés redeviennent verts. Ils repassent brièvement en gris-bleu le temps que le
script revérifie la rue, ce qui est normal.

## Communes bilingues

Le script compare tous les noms officiels à tous les noms du segment, principal et
alternatifs. Un segment nommé *Zentralstrasse* est donc bien reconnu comme correspondant aux
adresses *Rue Centrale*, et inversement.

## Réglages

Les plus utiles : à partir de quel zoom les adresses se chargent, l'affichage des numéros sur
la carte, et une confirmation à chaque clic si vous la préférez. Par défaut, seules les
adresses de bâtiments réellement construits sont proposées, pas celles des projets en cours.

Si les données vous paraissent périmées, **Vider le cache et recharger** force une relecture.

Le raccourci <kbd>Alt</kbd>+<kbd>J</kbd> allume et éteint la couche, même quand la fonction
est désactivée.

::: quote Sources et origine
- Dépôt du script : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Registre fédéral des bâtiments et des logements (RegBL/GWR), https://www.geo.admin.ch
- L'idée de cette fonction vient du script « WME Quick HN Importer CH » d'Ari (Reloaded) et Gerhard, d'après le concept original de Tom 'Glodenox' Puttemans pour la Belgique.
:::
