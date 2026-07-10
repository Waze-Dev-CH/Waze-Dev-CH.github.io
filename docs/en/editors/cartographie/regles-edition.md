---
title: "Editing rules: French-speaking Switzerland"
description: Rules specific to French-speaking Switzerland for editing the Waze map.
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/checkmark.png" alt="">

# Editing rules: French-speaking Switzerland

::: note Level L2
These rules apply as soon as you make significant changes to the map.
:::

## Fundamental objectives

Every map edit must aim for three objectives:

1. **User-friendliness**: simple maps with clear navigation instructions, given only when needed
2. **Simplicity**: avoid excessive detail (too many lanes, unnecessary segments) that creates complexity and maintenance
3. **Preservation**: do not delete existing segments without reason: they contain valuable data (speeds, routing history)

## Naming segments

See [Naming roads and cities](/en/editors/cartographie/nommage-routes): the reference page for casing, abbreviations and road types.

## Parking lots and parking areas

### Roads to map

Map only the elements essential to navigation:

- Entrances and exits connected to the road network
- Lanes running along commercial buildings
- Perimeter roads of large parking lots
- Main circulation routes of large sites

Do not map individual parking spaces or secondary lanes with no routing value.

### POIs and parking areas

Reserve these for parking lots with dedicated access roads. Use the **Parking Lot** category and the exact name with the **P** symbol if available. Leave the field empty when in doubt. Avoid generic terms such as "Parc" or abbreviations.

## Pedestrian paths

See [Pedestrian paths](/en/editors/cartographie/chemins-pietons): when to include them and when not to draw them.

## Private roads

Do not map residential private roads, unless they:
- Serve several dwellings
- Exceed 100 metres
- Create a proven routing problem

## U-turns

Allow only when:
- The maneuver creates a dead end
- It is legal, safe and marked by official signage

## Splitting into one-way streets

A two-way street should only be split into two one-way segments if:
- The physical separation is **≥ 5 metres**
- The GPS points are far enough apart at **100-metre zoom**

Freeways and expressways with roadways separated by a central median always deserve two one-way segments.

## Bridges and levels

Do not change the level of an entire street. Assign different levels only to the **individual segments** concerned (bridge, underpass, viaduct). The level is local, not global.

## Unfinished segments

Unfinished segments are not locked. Complete the work properly before the updates propagate to users.

## Micro-segments

Minimum length: **5 metres**. Below that, speed and navigation calculations are disrupted.

## Loops

Every loop requires **at least 3 segments**. A 2-segment loop generates routing errors. A 1-segment loop must be restructured or deleted.

## Dead ends

Do not map a roundabout or turning loop at the end of a road. Simply extend the segment to the farthest reachable point.

## Narrow Street

Apply this type only to lanes that are:
- **Two-way**
- **Longer than 50 metres**
- Allowing **only a single standard vehicle** through at a time

Exclude: one-way streets, bridges, dead ends, passages with traffic lights or traffic-calming features.

::: important Important
If you are unsure about a rule, do not make the change. Ask your question on the [French-speaking forum](https://www.waze.com/discuss/c/editors/switzerland/romandie/4797) or on Discord.
:::
