---
title: Segment geometry
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Segment geometry

This page gathers the geometry rules for editing segments in Switzerland: micro-segments, loops, dead ends, U-turns, narrow streets, private driveways, transitions and offset roads.

## Micro-segments

::: failure Avoid micro-segments
A segment must be at least 5 meters long for optimal operation. Shorter segments prevent efficient route calculation.
:::

Roundabouts are excluded from this rule: their segments can be shorter.

## Loops

A loop must be made up of at least 3 road segments. In other words, two segments must not share two junctions in common.

::: failure 2-segment loop
A 2-segment loop creates routing errors ("same endpoint drivable segments"). Add a junction node to split it into 3 or more segments, without creating a micro-segment.
:::

::: note Large loop
If the loop is very large, add a walking trail or an alley to prevent it from being deleted by accident.
:::

## Dead ends

Do not map loops or turnaround roundabouts. Simply extend the end of the segment to the farthest point reachable by driving.

- Place the final junction node near the end, at the center of the roadway.
- The distance from the node to the ends matches the distance to the edges.
- For a central island, place the node outside the perimeter of the island.

::: reminder Reminder
If, when standing at the end of the road, you clearly see a simple dead end, do not create a loop.
:::

## U-turns

Set a U-turn maneuver to green (allowed) only if:

1. a two-way segment connected to a one-way creates a dead end, or
2. the maneuver can be done without reversing, is legal and is indicated by a marking, a sign or a traffic light.

## Narrow street / Alley

The "Narrow street / Alley" type (type 22) is only used if the road is two-way, longer than 50 meters and only wide enough for a single standard vehicle.

::: failure Do not use for
- one-way streets;
- short bridges and passages;
- dead ends;
- other road types with penalties;
- crossings that are impossible except for heavy vehicles;
- permanent traffic lights;
- narrowings meant to slow down traffic;
- entire villages.
:::

## Private residential driveways

Do not map individual private driveways, unless:

- the road serves at least 2 dwellings, or
- the road is particularly long, or the dwelling is more than 100 meters from the road, or
- not mapping it would cause routing problems.

## Transitions and offset roads

### Transitions

A transition represents the absence of an intersection between two segments. It is used for:

- a road name change;
- a change in direction of travel (two-way to one-way);
- making a loop navigable.

Remove unnecessary junction nodes to simplify the map.

### Offset roads

Three cases to consider:

1. Roads aligned in reality: change to a 4-segment intersection.
2. Roads almost aligned: force the junction close to 90 degrees to get the "straight ahead" instruction.
3. Genuine separation: leave the sides unaligned and maximize the length of the small segment between the roads.

::: quote Sources
- Editing rules in French-speaking Switzerland: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
- Intersections guide: https://www.waze.com/discuss/t/guide-des-intersections/377286
- Information in French: https://www.waze.com/discuss/t/informations-en-francais/377254
:::
