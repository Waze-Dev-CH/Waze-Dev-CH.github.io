---
title: Naming roads and cities
description: Naming conventions for segments, on/off ramps and localities in Switzerland.
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/city.png" alt="">

# Naming roads and cities

::: tip Accessible to everyone: Level L1
This page is aimed at all editors, including beginners.
:::

This page summarises the rules for naming streets, roads and cities when editing in Switzerland. The Swiss reference always takes precedence over the guides of neighbouring countries.

::: important The Swiss reference takes precedence
In case of doubt, missing information or a similar situation, never make a change in WME in Switzerland based on the editing rules of neighbouring countries. First consult the Swiss community sources.
:::

## Classification of road types

The Waze classification corresponds to the following types of roads in Switzerland:

| Waze type | Swiss equivalent |
|-----------|------------------|
| Freeway | Motorway |
| Major Highway | Semi-motorway |
| Minor Highway | National and main road |
| Ramp | Motorway ramps |
| Primary Street | Main road (blue sign / yellow square) |
| Street | All other streets (white sign) |
| Dirt Road / 4x4 | Unpaved road, forest track |
| Parking Lot Road | Large parking area |
| Private Road | Private path |
| Ferry | Ferry crossing |

## Naming principles

Use the official and complete name of the road, as it appears on the signage. Capital letters and accents are part of the official name and must be respected.

::: failure Abbreviations to avoid
Do not abbreviate road types. Write the name in full:

- "Chemin" and not "Ch."
- "Route" and not "Rte"
- "Avenue" and not "Av."
:::

::: success Correct case and accents
- "Rue de la Paix" (and not "rue de la paix")
- Keep the accents: é, è, à, ç
:::

## Pedestrian paths: WT vs PB

Two types exist, with different routing behaviour:

- **Walking Trail (WT), routable pedestrian path**: if connected to a drivable road and closest to a destination, Waze may route through this path to reach the destination
- **Pedestrian Boardwalk (PB), non-routable pedestrian zone**: ignored for routing, Waze guides towards the closest drivable segment regardless of its class

## Naming roads

### Motorways
Name them **A1**, **A2**, **A3**, **E60**, etc.

### Semi-motorways
Name them **A1L**, **A52**, etc. (according to the official signage).

### National roads (N1-N30)

- **In built-up areas**: main street name + "Alt Street/Alias" entry with the number (N1, N2...)
- **Outside built-up areas**: number only (**N1**, **N2**, etc.), unless the national road runs on a motorway, in which case use the street name

### Numbered main roads (H1-...)

- **In built-up areas**: street name + alias H1, H2...
- **Outside built-up areas**: number only if no street name is present

### On and off ramps

Name them according to the road signs. Use the `>` sign to indicate the direction (spoken by the voice synthesis) and `/` to separate cities:

```
Ausfahrt 43 > Niederbipp / Langenthal
A2 > Basel
Sortie 14 > Berne-Nord
```

### Interchanges (Kreuze)

Interchanges and motorway junctions must be given a **landmark** in the WME, named with the number and the name of the interchange:

```
17 Frick
8 Liestal
```

## Bilingual names

For a road with a name in two languages, enter the second name via the alternative name field ("Add a different name"). The primary name remains the road's main official name.

## Railways

Railways never bear a city name or a street name. Leave the name field empty (or put the name of the company there, without a city, see [Map legend](/en/editors/wme/legende-carte)).

## Naming cities and villages

Use **only the names appearing in the official list of Swiss localities**. Only places with their **own postal code (NPA)** should be entered.

Important rules:

- No "terra nullius": all streets must have a City field filled in (**except** motorways, ramps and slip roads)
- Some large cities have several NPAs and are divided into districts (Lausanne, Lucerne, Zurich, etc.)
- A given name must exist only **once**: check the list before creating a new entry

::: important Important
Street names must be spelled without abbreviation and with the correct capital letters. Example: "Chemin de la Paix" and not "Ch. de la Paix" nor "chemin de la paix".
:::

## Fahrspuren / Traffic lanes

- **Motorways**: as a general rule, two lanes (simplifies the mapping of ramps)
- **Other roads**: split into two directions only if the physical separation is ≥ 5 metres or if special markings justify it

## Road signs: reminder

| Sign | Segment type |
|---------|----------------|
| Blue or yellow square | Primary street |
| White | Street |
| Green | Motorway / Semi-motorway |

## French rules, not Swiss

The French naming guide contains conventions that do not apply in Switzerland. Do not transpose them as they are:

::: important French rules, not Swiss
The following items belong to the France guide and do not apply in Switzerland:

- The French road nomenclature (motorways A, national roads N, departmental roads D, communal roads C): Switzerland uses its own classifications (motorways A, national roads N1 to N30, etc.).
- The formats specific to French ring roads and bypasses (for example "A86 - Intérieure").
- The European numbering format specific to the French network (for example "E72").
- The French format for motorway exits and entrances ("Sortie 18: Valensole", "A6a: Paris"): in Switzerland, the ">" and "/" signs are used (see above).

What remains valid in Switzerland from this guide: the principle of the official and complete name based on the signage, respect for capital letters, accents and hyphens, and the prohibition of common abbreviations.
:::

## Official references

- [List of Swiss motorways (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Autobahnen_in_der_Schweiz)
- [List of semi-motorways (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Autostrassen_in_der_Schweiz)
- [List of national roads (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Nationalstrassen_der_Schweiz)
- [List of numbered main roads (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Hauptstrassen_der_Schweiz)

::: quote Sources
- How to name roads and cities in Switzerland: https://www.waze.com/discuss/t/comment-nommer-les-routes-et-les-villes-en-suisse/377240
- Information in French: https://www.waze.com/discuss/t/informations-en-francais/377254
- Editing rules in French-speaking Switzerland: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
- Naming segments, streets, roads (France, to be adapted): https://www.waze.com/discuss/t/nommage-des-segments-des-rues-des-routes/375658
:::
