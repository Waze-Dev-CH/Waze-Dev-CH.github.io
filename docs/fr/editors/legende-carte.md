---
title: Légende de la carte
description: Types de segments disponibles dans le Waze Map Editor et leur usage en Suisse.
---

# Légende de la carte

::: tip Accessible à tous — Niveau L1
Cette page s'adresse à tous les éditeurs, débutants compris.
:::

Un **segment** est une ligne délimitée par deux points (intersections). Chaque segment a un type qui influence directement le routage. La classification varie selon les pays — suivez toujours les règles suisses, pas celles d'un pays voisin.

## Routes (Highway)

### Autoroute (Freeway)

Voie rapide divisée, sans feux ni stops, accessible uniquement via des bretelles d'entrée/sortie. Les panneaux suisses sont **verts**.

Aucune rue ne peut se connecter directement à une autoroute, sauf les routes de service d'urgence.

### Semi-autoroute (Major Highway)

Semi-autoroutes à signalisation verte en Suisse.

### Route nationale (Minor Highway)

Routes nationales. Les autres routes jaunes sont classées en *Rue primaire*.

### Bretelle (Ramp)

Entrées et sorties d'autoroutes et de semi-autoroutes.


## Rues (Urban)

### Rue primaire (Primary Street)

Voies urbaines principales, correspondant aux panneaux de signalisation bleus ou carrés jaunes.

### Rue (Street)

Voies secondaires et de quartier. Panneau blanc. Peut être à sens unique ou bidirectionnel.

### Chemin de terre / 4x4 Trail

Routes non goudronnées, chemins forestiers, pistes agricoles, pistes 4x4.

### Air de stationnement (Parking Lot Road)

Grandes aires de stationnement, aires de repos, accès aux stations-service.

### Voie privée (Private Road)

Chemins explicitement marqués comme privés.


## Non carrossables

| Type | Usage |
|------|-------|
| Chemin piéton (routable) | Chemins pédestres navigables |
| Zone piétonne (non routable) | Zones piétonnes, rives lacustres |
| Escaliers | Escaliers |
| Voie ferrée | Rails — peut se connecter aux routes aux passages à niveau |
| Piste aéroport | Pistes d'atterrissage (complétude visuelle uniquement) |

::: note
Le type de segment a un impact direct sur le calcul d'itinéraire. Un mauvais classement peut induire des routes incohérentes. En cas de doute, consultez les [règles d'édition suisses](/fr/editors/regles-edition).
:::
