---
title: Segment types and routing
---

# Segment types and routing

This page explains the segment types in WME, their effect on route calculation, and the lock levels expected by road type in Switzerland.

## Road hierarchy

WME uses a strict classification. From the highest rank to the lowest: freeway and express lane, then ramps, major highways, minor highways, then primary streets and streets.

::: important Continuity principle
The sequence of segments of a given type must never be interrupted by segments of a lower type. This rule ensures the consistency of the network.
:::

## Effect on routing

Waze uses "pruning" to progressively discard lower types according to distance.

- Streets are pruned quickly.
- Freeways and ramps are never pruned: they are always considered.

### Short trips versus long trips

- Short trip (for example Genève to Lausanne): all road types are considered, including secondary segments.
- Long trip (for example Genève to Zürich): only the higher types (freeways, major highways) are considered for most of the route.

::: note Routing preferences
Routing preferences only come into play in the pruning of long-distance trips. They do not affect local trips, contrary to a widespread belief.
:::

## Lock levels (locks)

Swiss standard: lock level expected by road type.

| Road type | Lock level |
| --- | --- |
| Autoroute (Freeway) | L5 |
| Route majeure (Major Highway) | L4 |
| Route mineure (Minor Highway) | L3 |
| Rue primaire (Primary Street) | L2 |
| Rue (Street) | L1 |

::: reminder Reminder
The higher the road type is in the hierarchy, the higher the expected lock level. This protects the structuring segments of the network against unintended changes.
:::

### Locking

Lock in moderation. Locking mainly targets the structuring types: freeways, highways, ramps and roundabouts. Do not lock everything without reason, because too broad a lock needlessly hinders the other editors.

An editor can only modify a locked segment if their rank is at least equal to the lock level. Choose the lock level according to the importance of the segment, not out of excessive caution.

::: quote Sources
- Routing basics: segment types in WME and effects on long/short trips: https://www.waze.com/discuss/t/bases-du-routing-types-de-segments-dans-wme-et-effets-sur-les-trajets-longs-courts/389975
- Information in French: https://www.waze.com/discuss/t/informations-en-francais/377254
- Lock levels: Swiss community rules condensed in the WME Switzerland Helper script.
:::
