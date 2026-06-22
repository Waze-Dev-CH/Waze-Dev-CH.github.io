---
title: Segment geometry
---

# Segment geometry

This page gathers the geometry rules for editing segments in Switzerland: micro-segments, loops, dead ends, U-turns, narrow streets, private roads, transitions and offset roads.

## Micro-segments

::: failure Avoid micro-segments
A segment must be at least 5 metres long for optimal operation. Shorter segments prevent efficient route calculation.
:::

Roundabouts are excluded from this rule: their segments may be shorter.

## Loops

A loop must be made up of at least 3 road segments. In other words, two segments must not share two junctions.

::: failure 2-segment loop
A 2-segment loop creates guidance errors ("same endpoint drivable segments"). Add a junction node to split it into 3 or more segments, without creating a micro-segment.
:::

::: note Large loop
If the loop is very large, add a path or a driveway to avoid its accidental deletion.
:::

## Dead ends

Do not map turning loops or turning roundabouts. Simply extend the end of the segment to the farthest point reachable by driving.

- Place the final junction node near the end, at the centre of the carriageway.
- The distance from the node to the ends corresponds to the distance to the edges.
- For a central island, place the node outside the island's perimeter.

::: reminder Reminder
If, standing at the end of the road, you clearly see a simple dead end, do not create a loop.
:::

## U-turns

Set a U-turn manoeuvre to green (allowed) only if:

1. a two-way segment connected to a one-way creates a dead end, or
2. the manoeuvre is done without reversing, is legal and is indicated by a marking, a sign or a traffic light.

## Narrow street / Alley

The "Narrow street / Alley" type (type 22) is only used if the road is two-way, more than 50 metres long and only wide enough for a single standard vehicle.

::: failure Do not use for
- one-way streets;
- short bridges and passages;
- dead ends;
- other road types with penalties;
- crossings impossible except for heavy vehicles;
- permanent traffic lights;
- narrowings intended to slow down traffic;
- entire villages.
:::

## Private residential roads

Do not map individual private accesses, unless:

- the road serves at least 2 dwellings, or
- the road is particularly long, or the dwelling is more than 100 metres from the road, or
- the absence of mapping would cause guidance problems.

## Transitions and offset roads

### Transitions

A transition represents the absence of an intersection between two segments. It is used for:

- a change of road name;
- a change of traffic direction (two-way to one-way);
- making a loop navigable.

Remove superfluous junction nodes to simplify the map.

### Offset roads

Three cases to consider:

1. Roads aligned in reality: modify into a 4-segment crossing.
2. Roads almost aligned: force the junction close to 90 degrees to obtain the "straight ahead" instruction.
3. True separation: leave the sides non-aligned and maximise the length of the small segment between the roads.

::: quote Sources
- Editing rules in French-speaking Switzerland: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
- Intersection guide: https://www.waze.com/discuss/t/guide-des-intersections/377286
- Information in French: https://www.waze.com/discuss/t/informations-en-francais/377254
:::
