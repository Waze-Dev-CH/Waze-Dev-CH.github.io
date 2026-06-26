---
title: Géométrie des segments
order: 4
---

# Géométrie des segments

Cette page rassemble les règles de géométrie pour l'édition des segments en Suisse : micro-segments, boucles, culs-de-sac, demi-tours, rue étroite, voies privées, transitions et routes décalées.

## Micro-segments

::: failure Éviter les micro-segments
Un segment doit mesurer au moins 5 mètres pour un fonctionnement optimal. Les segments plus courts empêchent le calcul efficace des itinéraires.
:::

Les ronds-points sont exclus de cette règle : leurs segments peuvent être plus courts.

## Boucles

Une boucle doit être composée d'au moins 3 segments de route. Autrement dit, deux segments ne doivent pas avoir deux jonctions en commun.

::: failure Boucle à 2 segments
Une boucle à 2 segments crée des erreurs de guidage ("same endpoint drivable segments"). Ajouter un nœud de jonction pour la diviser en 3 segments ou plus, sans créer de micro-segment.
:::

::: note Boucle de grande taille
Si la boucle est très grande, ajouter un chemin ou une allée pour éviter sa suppression accidentelle.
:::

## Culs-de-sac

Ne pas cartographier les boucles ni les ronds-points de retournement. Étendre simplement l'extrémité du segment jusqu'au point le plus éloigné accessible en roulant.

- Placer le nœud de jonction final près de la fin, au centre de la chaussée.
- La distance du nœud aux extrémités correspond à la distance aux bords.
- Pour un îlot central, placer le nœud à l'extérieur du périmètre de l'îlot.

::: reminder
Si, en se tenant à la fin de la voie, on voit clairement un simple cul-de-sac, ne pas créer de boucle.
:::

## Demi-tours

Mettre une manœuvre de demi-tour en vert (autorisée) uniquement si :

1. un segment bidirectionnel relié à un sens unique crée une impasse, ou
2. la manœuvre se fait sans marche arrière, est légale et est indiquée par un marquage, un panneau ou un feu.

## Rue étroite / Ruelle

Le type "Rue étroite / Ruelle" (type 22) ne s'utilise que si la voie est bidirectionnelle, mesure plus de 50 mètres et n'offre la largeur que pour un seul véhicule standard.

::: failure Ne pas utiliser pour
- les sens uniques ;
- les ponts et passages courts ;
- les culs-de-sac ;
- les autres types de voies avec pénalités ;
- les croisements impossibles sauf pour véhicules lourds ;
- les feux permanents ;
- les rétrécissements destinés à ralentir le trafic ;
- des villages entiers.
:::

## Voies privées d'habitation

Ne pas cartographier les accès privés individuels, sauf si :

- la voie dessert au moins 2 habitations, ou
- la voie est particulièrement longue, ou l'habitation se trouve à plus de 100 mètres de la route, ou
- l'absence de cartographie causerait des problèmes de guidage.

## Transitions et routes décalées

### Transitions

Une transition représente l'absence d'intersection entre deux segments. Elle sert à :

- un changement de nom de route ;
- un changement de sens de circulation (double sens vers sens unique) ;
- rendre une boucle navigable.

Supprimer les nœuds de jonction superflus pour simplifier la carte.

### Routes décalées

Trois cas à considérer :

1. Routes alignées dans la réalité : modifier en croisement à 4 segments.
2. Routes presque alignées : forcer la jonction proche de 90 degrés pour obtenir l'instruction "tout droit".
3. Véritable séparation : laisser les côtés non alignés et maximiser la longueur du petit segment entre les routes.

::: quote Sources
- Règles d'édition en Suisse romande : https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
- Guide des intersections : https://www.waze.com/discuss/t/guide-des-intersections/377286
- Informations en français : https://www.waze.com/discuss/t/informations-en-francais/377254
:::
