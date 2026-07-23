---
title: Routing basics
description: How segment types influence route calculation in Waze, pruning, and the expected lock levels.
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Routing basics

::: note Level L2
A good understanding of routing is necessary to correctly classify segments.
:::

The WME classifies segments according to a hierarchy that directly influences the navigation algorithm, particularly for long-distance trips.

## Road type hierarchy

From most important to least important:

1. Freeways and expressways (Freeway / Major Highway)
2. Ramps (special case)
3. Major roads (Minor Highway)
4. Primary streets (Primary Street)
5. Streets (Street)

## Continuity principle

> Type continuity is essential in the WME: you must never interrupt a sequence of segments of a given type with segments of a lower type.

Example: a national road must not be interrupted by a segment classified as "Street". This breaks the consistency of the network and disrupts the calculation of long routes.

## Pruning mechanism

Waze uses a system of **progressive pruning**: the further you move away from the origin or the destination, the more low-priority roads are excluded from the calculation.

| Road type | Behavior |
|--------------|-------------|
| Street / Primary street | Excluded beyond a certain distance threshold |
| Major / minor roads | Higher exclusion threshold |
| Freeways / Ramps | **Never excluded** |

## Short vs long trips

**Short trip** (e.g. Genève to Lausanne): all road types are considered, including local streets.

**Long trip** (e.g. Genève to Zurich): only freeways and major roads are used. Secondary roads come into play only near the origin/destination or during a recalculation.

## Routing preferences

::: warning Misconception
The "Avoid" preferences in the app do **not** prevent the local use of a segment. They only adjust the **pruning thresholds** for long-distance trips. A "penalized" segment remains usable locally.
:::

::: example Example
A road classified as "penalized" will always be used if it is the only option to reach a destination in the neighborhood. The effect only appears on large route calculations.
:::

Beyond preferences, the routing algorithm also applies penalty times to certain manoeuvres and segment properties: see [Routing penalties](/en/editors/wme/penalites-routage).

## Lock levels

Swiss standard: expected lock level by road type.

| Road type | Lock level |
| --- | --- |
| Freeway | L5 |
| Major Highway | L4 |
| Minor Highway | L3 |
| Primary Street | L2 |
| Street | L1 |

::: reminder Reminder
The higher a road type is in the hierarchy, the higher the expected lock level. This protects the structuring segments of the network against unintentional modifications.
:::

Lock in moderation. Locking mainly targets structuring types: freeways, roads, ramps and roundabouts. You should not lock everything without reason, because an overly broad lock needlessly slows down other editors.

An editor can only modify a locked segment if their rank is at least equal to the lock level. Choose the lock level according to the importance of the segment, not out of excessive caution.

::: quote Sources
- Routing basics: segment types in WME and effects on long/short trips: https://www.waze.com/discuss/t/bases-du-routing-types-de-segments-dans-wme-et-effets-sur-les-trajets-longs-courts/389975
- Information in French: https://www.waze.com/discuss/t/informations-en-francais/377254
- Lock levels: Swiss community rules condensed in the WME Switzerland Helper script.
:::
