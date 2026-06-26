---
title: Nommage des routes et des villes
description: Conventions de nommage des segments, entrées/sorties et localités en Suisse.
order: 4
---

# Nommage des routes et des villes

::: tip Accessible à tous — Niveau L1
Cette page s'adresse à tous les éditeurs, débutants compris.
:::

Cette page résume les règles de nommage des rues, des routes et des villes pour l'édition en Suisse. La référence suisse prime toujours sur les guides des pays voisins.

::: important La référence suisse prime
En cas de doute, de manque d'information ou de situation similaire, ne jamais faire de modification sur WME en Suisse en se basant sur des règles d'édition de pays voisins. Consulter d'abord les sources communautaires suisses.
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

## Principes de nommage

Utiliser le nom officiel et complet de la voie, tel qu'il apparaît sur la signalisation. Les majuscules et les accents font partie du nom officiel et doivent être respectés.

::: failure Abréviations à proscrire
Ne pas abréger les types de voie. Écrire le nom en toutes lettres :

- "Chemin" et non "Ch."
- "Route" et non "Rte"
- "Avenue" et non "Av."
:::

::: success Casse et accents corrects
- "Rue de la Paix" (et non "rue de la paix")
- Conserver les accents : é, è, à, ç
:::

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

Nommer selon les panneaux de signalisation. Utiliser le signe `>` pour indiquer la direction (prononcé par la synthèse vocale) et `/` pour séparer les villes :

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

## Noms bilingues

Pour une voie portant un nom dans deux langues, renseigner le second nom via le champ de nom alternatif (« Ajouter un nom différent »). Le nom principal reste le nom officiel principal de la voie.

## Voies ferrées

Les voies ferrées ne portent jamais de nom de ville ni de nom de rue. Laisser le champ de nom vide (ou y indiquer le nom de la compagnie, sans ville — voir [Légende de la carte](/fr/editors/wme/legende-carte)).

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

## Règles françaises, non suisses

Le guide de nommage français contient des conventions qui ne s'appliquent pas en Suisse. À ne pas transposer telles quelles :

::: important Règles françaises, non suisses
Les éléments suivants relèvent du guide France et ne s'appliquent pas en Suisse :

- La nomenclature routière française (autoroutes A, nationales N, départementales D, voies communales C) : la Suisse utilise ses propres classifications (autoroutes A, routes nationales N1 à N30, etc.).
- Les formats spécifiques aux rocades et périphériques français (par exemple "A86 - Intérieure").
- Le format de numérotation européenne propre au réseau français (par exemple "E72").
- Le format français des sorties et entrées d'autoroute ("Sortie 18: Valensole", "A6a: Paris") : en Suisse, on utilise le signe ">" et "/" (voir ci-dessus).

Ce qui reste valable en Suisse depuis ce guide : le principe du nom officiel et complet d'après la signalisation, le respect des majuscules, des accents et des tirets, et l'interdiction des abréviations courantes.
:::

## Références officielles

- [Liste des autoroutes suisses (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Autobahnen_in_der_Schweiz)
- [Liste des semi-autoroutes (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Autostrassen_in_der_Schweiz)
- [Liste des routes nationales (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Nationalstrassen_der_Schweiz)
- [Liste des routes principales numérotées (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Hauptstrassen_der_Schweiz)

::: quote Sources
- Comment nommer les routes et les villes en Suisse : https://www.waze.com/discuss/t/comment-nommer-les-routes-et-les-villes-en-suisse/377240
- Informations en français : https://www.waze.com/discuss/t/informations-en-francais/377254
- Règles d'édition en Suisse romande : https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
- Nommage des segments, des rues, des routes (France, à adapter) : https://www.waze.com/discuss/t/nommage-des-segments-des-rues-des-routes/375658
:::
