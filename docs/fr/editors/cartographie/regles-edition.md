---
title: Règles d'édition — Suisse romande
description: Règles spécifiques à la Suisse romande pour l'édition de la carte Waze.
order: 2
---

# Règles d'édition — Suisse romande

::: note Niveau L2
Ces règles s'appliquent dès que vous effectuez des modifications significatives sur la carte.
:::

## Objectifs fondamentaux

Toute édition de carte doit viser trois objectifs :

1. **Convivialité** — des cartes simples avec des instructions de navigation claires, données uniquement quand nécessaire
2. **Simplicité** — éviter le détail excessif (trop de voies, de segments inutiles) qui génère de la complexité et de la maintenance
3. **Préservation** — ne pas supprimer des segments existants sans raison : ils contiennent des données précieuses (vitesses, historique de routing)

## Nommage des segments

Voir [Nommage des routes et des villes](/fr/editors/cartographie/nommage-routes) — la page de référence pour la casse, les abréviations et les types de voies.

## Parkings et aires de stationnement

### Voies à cartographier

Cartographier uniquement les éléments essentiels à la navigation :

- Entrées et sorties raccordées à la voirie
- Voies longeant les bâtiments commerciaux
- Routes périmètrales des grands parkings
- Axes principaux de circulation des grands sites

Ne pas cartographier les places individuelles ni les voies secondaires sans intérêt de routage.

### POIs et zones de parking

Réserver aux parkings avec voies d'accès dédiées. Utiliser la catégorie **Parking Lot** et le nom exact avec le symbole **P** si disponible. Laisser le champ vide en cas de doute. Éviter les termes génériques comme « Parc » ou les abréviations.

## Chemins piétons

Voir [Chemins piétons](/fr/editors/cartographie/chemins-pietons) — quand les inclure et quand ne pas les tracer.

## Voies privées

Ne pas cartographier les voies privées résidentielles, sauf si elles :
- Desservent plusieurs habitations
- Dépassent 100 mètres
- Créent un problème de routage avéré

## Demi-tours (U-turns)

Autoriser uniquement lorsque :
- La manœuvre crée une impasse
- Elle est légale, sûre et matérialisée par une signalisation officielle

## Séparation en sens uniques

Une rue bidirectionnelle ne doit être divisée en deux segments sens uniques que si :
- La séparation physique est **≥ 5 mètres**
- Les points GPS sont suffisamment éloignés au **zoom 100 mètres**

Les autoroutes et voies rapides à chaussées séparées par un terre-plein central méritent systématiquement deux segments sens uniques.

## Ponts et niveaux

Ne pas modifier le niveau de toute une rue. Attribuer des niveaux différents uniquement aux **segments individuels** concernés (pont, passage souterrain, viaduc). Le niveau est local, pas global.

## Segments inachevés

Les segments inachevés ne sont pas verrouillés. Terminer correctement le travail avant que les mises à jour ne se propagent aux utilisateurs.

## Micro-segments

Longueur minimale : **5 mètres**. En dessous, le calcul de vitesse et de navigation est perturbé.

## Boucles (Loops)

Toute boucle nécessite **au minimum 3 segments**. Une boucle à 2 segments génère des erreurs de routage. Une boucle à 1 segment doit être restructurée ou supprimée.

## Culs-de-sac

Ne pas cartographier de rond-point ou de boucle de retournement en bout de voie. Prolonger simplement le segment jusqu'au point le plus loin atteignable.

## Rues étroites (Narrow Street)

Appliquer ce type uniquement aux voies :
- **À double sens**
- **Supérieures à 50 mètres**
- Ne laissant passer **qu'un seul véhicule standard** à la fois

Exclure : rues à sens unique, ponts, impasses, passages avec feux ou aménagements de modération du trafic.

::: important
En cas de doute sur une règle, ne faites pas de modification. Posez votre question sur le [forum romand](https://www.waze.com/discuss/c/editors/switzerland/romandie/4797) ou sur Discord.
:::
