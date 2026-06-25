---
title: Nommage des routes et des villes
description: Conventions de nommage des segments, entrées/sorties et localités en Suisse.
---

# Nommage des routes et des villes

::: tip Accessible à tous — Niveau L1
Cette page s'adresse à tous les éditeurs, débutants compris.
:::

## Classification des types de routes

La classification Waze correspond aux types de voies suivants en Suisse :

| Type Waze | Équivalent suisse |
|-----------|------------------|
| Freeway | Autoroute |
| Major Highway | Semi-autoroute |
| Minor Highway | Route nationale et principale |
| Ramp | Bretelles d'autoroute |
| Primary Street | Route principale (panneau bleu / carré jaune) |
| Street | Toutes les autres rues (panneau blanc) |
| Dirt Road / 4x4 | Route non goudronnée, chemin forestier |
| Parking Lot Road | Grande aire de stationnement |
| Private Road | Chemin privé |
| Ferry | Traversée en ferry |

## Chemins piétons : WT vs PB

Deux types existent, avec un comportement de routage différent :

- **Walking Trail (WT) — Chemin piéton routable** : si connecté à une route carrossable et le plus proche d'une destination, Waze peut router à travers ce chemin pour atteindre la destination
- **Pedestrian Boardwalk (PB) — Zone piétonne non routable** : ignoré pour le routage, Waze guide vers le segment carrossable le plus proche indépendamment de sa classe

## Nommage des routes

### Autoroutes
Nommer **A1**, **A2**, **A3**, **E60**, etc.

### Semi-autoroutes
Nommer **A1L**, **A52**, etc. (selon la signalisation officielle).

### Routes nationales (N1–N30)

- **En agglomération** : nom de rue principal + entrée « Alt Street/Alias » avec le numéro (N1, N2…)
- **Hors agglomération** : numéro seul (**N1**, **N2**, etc.) — sauf si la nationale passe sur une autoroute, auquel cas utiliser le nom de rue

### Routes principales numérotées (H1–…)

- **En agglomération** : nom de rue + alias H1, H2…
- **Hors agglomération** : numéro seul si aucun nom de rue n'est présent

### Bretelles d'entrée et de sortie

Nommer selon les panneaux de signalisation. Utiliser le signe `>` pour indiquer la direction :

```
Ausfahrt 43 > Niederbipp / Langenthal
A2 > Basel
Sortie 14 > Berne-Nord
```

### Échangeurs (Kreuze)

Les échangeurs et nœuds autoroutiers doivent recevoir un **point de repère (landmark)** dans le WME, nommé avec le numéro et le nom de l'échangeur :

```
17 Frick
8 Liestal
```

## Nommage des villes et villages

Utiliser **uniquement les noms figurant dans la liste officielle des localités suisses**. Seuls les lieux disposant d'un **code postal (NPA) propre** doivent être saisis.

Règles importantes :

- Pas de « terra nullius » : toutes les rues doivent avoir un champ Ville renseigné (**sauf** les autoroutes, bretelles et rampes)
- Certaines grandes villes ont plusieurs NPA et sont divisées en quartiers (Lausanne, Lucerne, Zurich, etc.)
- Un même nom ne doit exister qu'**une seule fois** — vérifier la liste avant de créer une nouvelle entrée

::: important
Les noms de rues doivent être orthographiés sans abréviation et avec les majuscules correctes. Exemple : « Chemin de la Paix » et non « Ch. de la Paix » ni « chemin de la paix ».
:::

## Fahrspuren / Voies de circulation

- **Autoroutes** : en règle générale, deux voies (simplifie le mapping des bretelles)
- **Autres routes** : séparer en deux sens uniquement si la séparation physique est ≥ 5 mètres ou si des marquages spéciaux le justifient

## Panneaux de signalisation — rappel

| Panneau | Type de segment |
|---------|----------------|
| Bleu ou carré jaune | Rue primaire |
| Blanc | Rue |
| Vert | Autoroute / Semi-autoroute |

## Références officielles

- [Liste des autoroutes suisses (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Autobahnen_in_der_Schweiz)
- [Liste des semi-autoroutes (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Autostrassen_in_der_Schweiz)
- [Liste des routes nationales (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Nationalstrassen_der_Schweiz)
- [Liste des routes principales numérotées (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Hauptstrassen_der_Schweiz)
