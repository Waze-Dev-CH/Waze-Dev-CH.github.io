---
title: Parking lots and parking areas
---

# Parking lots and parking areas

Parking lots and parking areas are mapped with Parking Lot Roads. The goal is to keep the map readable and useful for car navigation, not to reproduce every parking space.

## Principle: map only what matters

In a parking lot, you only draw the segments that provide a navigation benefit.

To map:

- entrances and exits, connected to the neighbouring road network
- the perimeter lanes (the loop around the parking lot), to avoid false congestion detection
- the main circulation lanes in large facilities
- the lanes running alongside commercial buildings

Not to map:

- individual parking spaces
- secondary aisles between rows of spaces

::: important Important
Adding many secondary aisles clutters the smartphone display and bloats the app with no navigation benefit. Stick to the main circulation.
:::

## Segment type

The internal lanes of the parking lot use the Parking Lot Road type. Entrances and exits must be correctly connected to the road network to allow routing to the parking lot.

## Parking lot place (POI)

When the parking lot warrants a place, you add it as a separate Place.

::: note Note
The 2016 Waze guideline recommends mapping a parking lot as a Place with an area shape (polygon) with an entry point at the actual access location. A parking lot attached to a business is mapped as a place in its own right, without modifying the original place.
:::

Place naming (Suisse romande rules):

- use the Parking Lot category, not Park
- reproduce the exact name of the parking lot if it exists, with the P symbol
- avoid generic terms like "Parking" or abbreviations

## Special cases

::: example Underground parking
Draw an estimated polygon with one or more correctly positioned entry points.
:::

::: quote Sources
- Waze Discuss, Parking Lots, new mapping guidelines (2016): https://www.waze.com/discuss/t/parking-lots-new-mapping-guidelines-2016/232237
- Waze Discuss, Editing rules in Suisse romande: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
:::
