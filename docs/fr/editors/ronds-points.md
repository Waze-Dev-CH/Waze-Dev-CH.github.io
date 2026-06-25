---
title: Ronds-points et giratoires
---

# Ronds-points et giratoires

Cette page décrit la création et l'édition d'un rond-point dans WME, ainsi que le standard suisse de verrouillage.

## Principes généraux

- Le rond-point conserve toujours le type de route le plus élevé parmi ses branches. Exception : si une autoroute débute dans un rond-point en localité, prendre le type le plus élevé hors autoroute, pour éviter les erreurs de routage.
- Pas de nom de rue : un nom s'affiche mal dans l'application. Cocher "Sans nom". Si le rond-point porte un nom propre, créer un Place nommé à l'intérieur.
- Pas de limite de vitesse sur un rond-point.
- Diamètre maximum d'environ 100 m (limite technique).

## Ce qui n'est PAS un rond-point

- Un croisement sans îlot central.
- Une intersection non signalée.
- Un cul-de-sac se terminant en boucle : dessiner une boucle plutôt qu'un rond-point.
- Une très grande zone au-delà de 100 m.
- Une intersection résidentielle avec chicanes.

::: note En cas de doute
Consulter le Country Manager (CM) ou le State Manager (SM).
:::

## Création pas à pas

Prérequis : une intersection existante, un fond de carte calé et la couche de points GPS visible.

1. Déplacer la jonction au centre du futur rond-point.
2. Détacher ou prolonger les segments qui se connecteront.
3. Ajouter les segments manquants pour toutes les entrées et sorties, même mineures.
4. Activer l'outil rond-point : survoler l'icône de courbe et choisir "Rond-point", ou appuyer sur la touche "o".
5. Placer le curseur (croix) au centre, cliquer puis tirer : un cercle orange apparaît avec son rayon. Maintenir Shift pour un ovale. Cliquer une seconde fois pour valider.
6. Les segments sont créés en orange (non enregistrés) puis passent en rouge. Ils sont tous en sens unique et les connexions sont automatiquement en soft-turns.
7. Convertir les soft-turns en hard-turns avec "Q" puis "W" (voir [Soft et Hard turns](./intersections.md#soft-et-hard-turns)).
8. Dans les propriétés, cocher "Sans nom". Ajouter un Place nommé à l'intérieur si le rond-point a un nom propre.
9. Enregistrer, supprimer les anciennes rues internes, puis vérifier le résultat.

## Corriger un faux rond-point

Supprimer tous ses segments, prolonger les segments à connecter, recaler le centre à l'aide de la couche GPS, redessiner le rond-point, l'éditer puis enregistrer.

## Éditer un rond-point existant

Pour modifier des connexions, supprimer entièrement le rond-point et le redessiner. La suppression ne peut se faire que sur l'ensemble des segments à la fois, jamais partiellement.

## Attribution du type

Un type bien choisi évite les pénalités de routage. La hiérarchie est : fédérale > nationale > principale > rue. Les rampes prennent le type du segment connecté. Les routes locales, privées et parkings sont des rues standard.

Méthode : repérer les deux segments de plus haut type connectés au rond-point (une rue scindée en deux sens uniques compte comme un seul segment), puis attribuer au rond-point le type le PLUS BAS des deux.

| Branches | Type attribué |
| --- | --- |
| 2 principales + 2 standard | Principale |
| 1 federale + 3 principales + 2 standard | Federale |
| 1 federale + 2 principales + 1 standard | Principale |

## Entrées et sorties

Les entrées et sorties se connectent comme des rues simples, à angle droit (90°) avec le périmètre du rond-point. Pour des entrées et sorties très espacées, envisager deux segments en sens unique.

## Instructions de navigation

Un rond-point est dit "normal" lorsqu'il a 4 branches, qu'il est centré et que les sorties se situent dans 90° plus ou moins 30° et 180° plus ou moins 30° depuis l'entrée. Dans ce cas, l'instruction est "tournez à droite / à gauche" ou "tout droit".

Sinon, le rond-point est "non-normal" et l'instruction devient "prenez la Xe sortie".

::: important Bascule en non-normal
Un même rond-point peut être normal depuis une entrée et non-normal depuis une autre. Si UNE seule entrée le rend non-normal, tout le rond-point bascule en non-normal.
:::

## Standard suisse : verrouillage minimum L3

::: important Règle communautaire suisse
En Suisse, le niveau de verrouillage minimum recommandé pour un rond-point est L3.
:::

Cette règle est appliquée par la communauté suisse et vérifiée par le script WME Switzerland Helper, qui signale les ronds-points dont le niveau de verrouillage est inférieur à L3. Verrouiller un rond-point à L3 protège une géométrie souvent éditée et évite les modifications accidentelles par des éditeurs de bas niveau.

::: quote Sources
- Erstellen und bearbeiten eines Kreisverkehrs : https://www.waze.com/discuss/t/erstellen-und-bearbeiten-eines-kreisverkehrs/377246
- Guide des intersections (Suisse), section "Rond-Point et Giratoire" : https://www.waze.com/discuss/t/guide-des-intersections/377286
- Standard de verrouillage L3 : règle communautaire suisse, vérifiée par le script WME Switzerland Helper.
:::
