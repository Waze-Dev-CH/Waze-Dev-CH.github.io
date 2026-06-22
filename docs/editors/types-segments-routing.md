---
title: Types de segments et routing
---

# Types de segments et routing

Cette page explique les types de segments dans WME, leur effet sur le calcul d'itinéraire, et les niveaux de verrouillage attendus par type de route en Suisse.

## Hiérarchie des routes

WME utilise une classification stricte. Du rang le plus élevé au plus bas : autoroute et voie express, puis bretelles, routes majeures, routes mineures, puis rues primaires et rues.

::: important Principe de continuité
On ne doit jamais interrompre l'enchaînement des segments d'un type donné par des segments d'un type inférieur. Cette règle assure la cohérence du réseau.
:::

## Effet sur le routing

Waze utilise le "pruning" (élagage) pour écarter progressivement les types inférieurs selon la distance.

- Les rues sont élaguées rapidement.
- Les autoroutes et les bretelles ne sont jamais élaguées : elles sont toujours considérées.

### Trajets courts contre trajets longs

- Trajet court (par exemple Genève vers Lausanne) : tous les types de routes sont considérés, y compris les segments secondaires.
- Trajet long (par exemple Genève vers Zurich) : seuls les types supérieurs (autoroutes, routes majeures) sont considérés pour la majeure partie du parcours.

::: note Préférences de routing
Les préférences de routing n'interviennent que dans le pruning des trajets longue distance. Elles n'affectent pas les trajets locaux, contrairement à une croyance répandue.
:::

## Niveaux de verrouillage (locks)

Standard suisse : niveau de verrouillage attendu par type de route.

| Type de route | Niveau de lock |
| --- | --- |
| Autoroute (Freeway) | L5 |
| Route majeure (Major Highway) | L4 |
| Route mineure (Minor Highway) | L3 |
| Rue primaire (Primary Street) | L2 |
| Rue (Street) | L1 |

::: reminder
Plus le type de route est élevé dans la hiérarchie, plus le niveau de verrouillage attendu est élevé. Cela protège les segments structurants du réseau contre les modifications involontaires.
:::

::: quote Sources
- Bases du Routing : types de segments dans WME et effets sur les trajets longs/courts : https://www.waze.com/discuss/t/bases-du-routing-types-de-segments-dans-wme-et-effets-sur-les-trajets-longs-courts/389975
- Informations en français : https://www.waze.com/discuss/t/informations-en-francais/377254
- Niveaux de verrouillage : règles communautaires suisses condensées dans le script WME Switzerland Helper.
:::
