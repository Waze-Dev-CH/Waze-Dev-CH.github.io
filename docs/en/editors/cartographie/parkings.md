---
title: Parking lot mapping
description: Official guidelines for mapping parking lots and parking areas in Waze in Switzerland.
order: 8
---

<img class="banner-img is-narrow" src="/img/editors/location.png" alt="">

# Parking lot mapping

::: tip Accessible to everyone: Level L1
These rules apply to all editors.
:::

Parking lots play a key role in the Waze Parking project, which aims to offer a complete navigation experience all the way to the parking space. Correct mapping in WME is required for this feature to work. The goal remains to keep the map readable and useful for car navigation, not to reproduce every single space.

## General principle

These guidelines apply to **all parking lots** (public and private), but **not** to on-street parking spaces (curbside).

A parking lot is mapped through two complementary aspects:

- a **Place in polygon form** that represents it on the map and enables routing to it;
- possibly some **internal roads (Parking Lot Road)** when the traffic inside justifies being drawn.

## The parking lot Place (polygon)

Each parking lot must be created as a **Place in polygon form** (polygon-type Place) with an entry point positioned at the actual entrance of the parking lot.

### Creating a parking lot in WME

1. Hover over the **Add a place** button
2. Select **Car services** → choose the **Polygon** option
3. Click to create the polygon nodes: double-click on the last point to finish
4. Place the entry marker at the **actual entrance** of the parking lot
5. Select **Parking Lot** in the Categories menu
6. Save

The polygon should match the actual shape of the parking lot as closely as possible, including the entry/exit locations.

Naming the Place (Suisse romande rules):

- use the Parking Lot category, not Park
- reuse the exact name of the parking lot if one exists, with the P symbol
- avoid generic terms such as "Parking" or abbreviations

## Internal roads (Parking Lot Road)

When internal traffic is worth drawing, only draw the segments that provide a navigation benefit.

To map:

- entrances and exits, connected to the neighboring road network
- perimeter roads (the loop around the parking lot), to avoid a false congestion detection
- the main circulation lanes in large facilities
- the lanes running alongside commercial buildings

Not to map:

- individual parking spaces
- secondary aisles between rows of spaces

::: important Important
Adding many secondary aisles overloads the display on smartphones and bloats the app without any navigation benefit. We stick to the main circulation. Internal roads use the Parking Lot Road type, and entrances/exits must be correctly connected to the road network to allow routing to the parking lot.
:::

## Special cases

### Parking lot in a commercial area or an infrastructure

Create **two separate Places**: one for the complex/building, one for its parking lot. Do not modify the existing Place to add the parking category to it.

### Underground parking lot

- Create a polygon around the estimated perimeter (based on local knowledge)
- Position the entry point(s) precisely
- If an existing Place is at that location, create a separate polygon rather than adding the category to the existing Place

## Important points

::: important Important
The entry point must be placed at the true physical entrance of the parking lot, not at the center of the polygon. This point is the one used for final routing.
:::

::: note Note
On-street parking lots (curbside parking along sidewalks) are **not covered** by these guidelines: they are mapped differently.
:::

::: quote Sources
- Waze Discuss, Parking Lots, new mapping guidelines (2016): https://www.waze.com/discuss/t/parking-lots-new-mapping-guidelines-2016/232237
- Waze Discuss, Règles d'édition en Suisse romande: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
:::
