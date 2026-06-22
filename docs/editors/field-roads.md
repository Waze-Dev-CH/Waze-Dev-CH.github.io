---
title: Routes à travers champs (Feldwege)
---

# Routes à travers champs (Feldwege)

Les routes à travers champs (Feldwege, routes agricoles) suivent un accord unifié pour la Suisse. La classification dépend de deux critères : l'existence d'une interdiction de circuler et l'état du revêtement.

## Principe

Waze est une application de trafic communautaire, pas un outil de navigation tout-terrain. La classification privilégie les besoins du trafic ordinaire plutôt que les usages spécialisés.

## Classification

### Route en terre avec interdiction de circuler

Pour les chemins non revêtus interdits à la circulation (sauf riverains ou véhicules autorisés) :

- type de segment : Private Road
- effet : bloque tout le trafic, sauf pour rejoindre une destination située sur ce segment

### Route en terre sans interdiction de circuler

Deux options selon le terrain :

- Street avec l'attribut Unpaved (non revêtu) : ajoute une pénalité que l'utilisateur peut régler dans ses préférences (autoriser, éviter, éviter les longues portions). Recommandé quand le choix peut être laissé à l'utilisateur.
- Off-road / Not Maintained : applique une très forte pénalité, le routing est bloqué dans presque tous les cas. Réservé aux terrains réellement impraticables (vraies pistes 4x4).

### Route de campagne revêtue sans interdiction de circuler

Deux options :

- type Street
- type Narrow Road, préféré pour les passages à voie unique

## À propos de l'attribut Unpaved

::: note
L'attribut Unpaved s'ajoute à n'importe quelle Street et ajoute une pénalité que l'utilisateur peut choisir d'éviter ou non. Appliqué à un segment qui porte déjà une pénalité de type (Private Road, Off-road), il n'a aucun effet.
:::

::: quote Sources
- Waze Discuss, Field Roads / Feldwege / Routes à travers champs (2017) : https://www.waze.com/discuss/t/field-roads-feldwege-routes-a-travers-champs-new-2017/64680
:::
