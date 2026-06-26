---
title: Bases du routing
description: Comment les types de segments influencent le calcul d'itinéraire dans Waze, le pruning et les niveaux de verrouillage attendus.
order: 4
---

# Bases du routing

::: note Niveau L2
Une bonne compréhension du routing est nécessaire pour classifier correctement les segments.
:::

Le WME classe les segments selon une hiérarchie qui influence directement l'algorithme de navigation, particulièrement pour les trajets longue distance.

## Hiérarchie des types de routes

Du plus important au moins important :

1. Autoroutes et voies rapides (Freeway / Major Highway)
2. Bretelles (cas particulier)
3. Routes majeures (Minor Highway)
4. Rues primaires (Primary Street)
5. Rues (Street)

## Principe de continuité

> La continuité des types est essentielle dans le WME : on ne doit jamais interrompre une séquence de segments d'un type donné par des segments d'un type inférieur.

Exemple : une route nationale ne doit pas être interrompue par un segment classé « Rue ». Cela brise la cohérence du réseau et perturbe le calcul des itinéraires longs.

## Mécanisme de pruning (élagage)

Waze utilise un système d'**élagage progressif** : plus on s'éloigne du départ ou de la destination, plus les routes de faible priorité sont exclues du calcul.

| Type de route | Comportement |
|--------------|-------------|
| Rue / Rue primaire | Exclues au-delà d'un certain seuil de distance |
| Routes majeures / mineures | Seuil d'exclusion plus élevé |
| Autoroutes / Bretelles | **Jamais exclues** |

## Trajets courts vs longs

**Trajet court** (ex. Genève → Lausanne) : tous les types de routes sont considérés, y compris les rues locales.

**Trajet long** (ex. Genève → Zurich) : seules les autoroutes et routes majeures sont utilisées. Les routes secondaires n'interviennent qu'à proximité du départ/destination ou lors d'un recalcul.

## Préférences de routing

::: warning Idée reçue
Les préférences « Éviter » dans l'application n'empêchent **pas** l'utilisation locale d'un segment. Elles ajustent uniquement les **seuils de pruning** pour les trajets longue distance. Un segment « défavorisé » reste utilisable localement.
:::

::: example
Une route classée « défavorisée » sera toujours empruntée si elle est la seule option pour rejoindre une destination dans le quartier. L'effet ne se manifeste que sur les gros calculs d'itinéraire.
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

Verrouiller avec modération. Le verrouillage vise surtout les types structurants : autoroutes, routes, bretelles et ronds-points. Il ne faut pas tout verrouiller sans raison, car un verrou trop large freine inutilement les autres éditeurs.

Un éditeur ne peut modifier un segment verrouillé que si son rang est au moins égal au niveau de verrou. Choisir le niveau de verrou en fonction de l'importance du segment, pas par excès de précaution.

::: quote Sources
- Bases du Routing : types de segments dans WME et effets sur les trajets longs/courts : https://www.waze.com/discuss/t/bases-du-routing-types-de-segments-dans-wme-et-effets-sur-les-trajets-longs-courts/389975
- Informations en français : https://www.waze.com/discuss/t/informations-en-francais/377254
- Niveaux de verrouillage : règles communautaires suisses condensées dans le script WME Switzerland Helper.
:::
