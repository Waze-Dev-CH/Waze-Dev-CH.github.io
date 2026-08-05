---
title: Intersection guide
order: 6
---

<img class="banner-img is-narrow" src="/img/editors/map-city.png" alt="">

# Intersection guide

This page summarizes the Swiss intersection guide. The guiding principle is simple: a well-drawn intersection produces correct guidance instructions. An intersection must represent the logical reality of traffic, not just its exact geometry.

::: abstract Summary
The simpler, the better. Draw as few elements as possible while still getting the correct navigation instructions.
:::

## The simpler, the better

The basic rule of the guide: do not overload an intersection. Only add segments, nodes or geometry when it is necessary to obtain the expected guidance instruction. A simpler intersection is easier to maintain and produces more reliable routing.

## The basics

::: reminder Read this first
This section lays the foundations. Understand it before everything else.
:::

### An intersection in Waze

In Waze, an intersection consists at minimum of:

- at least two road segments,
- one or more junction nodes,
- turn allowances or restrictions at those nodes.

It is these combined elements that determine the possible movements and the instructions given to the driver.

### T intersection

A T intersection connects a road that ends on another road. The segments must meet at angles close to 90°. When roads meet at an acute angle, add geometry points to straighten the intersection toward 90°. Without this, the router may produce a "keep right / keep left" instead of a "turn", omit an instruction, or generate automatic map errors.

### + intersection

A + intersection (cross-shaped) connects four branches at one node. As with the T intersection, aiming for angles close to 90° helps the router distinguish "straight ahead" from turns. Work at high zoom: angle corrections become almost invisible at normal zoom.

## Controlling guidance instructions

The turn angle determines the instruction given to the driver.

| Angle | Range | Road type | Instruction |
| --- | --- | --- | --- |
| 22° | 0° to 44° | Ordinary roads | Keep left / right |
| 22° | 0° to 44° | Ramps / freeways | Exit left / right |
| 90° | 45° to 150° | All types | Turn left / right |

::: important Angles to avoid
- Around 45°: a 0.5° error can be enough to trigger the wrong instruction.
- Below 10°: the arrows become hard to select in the editor and the segments hard to tap in the app.
:::

### Naming internal segments

Segments located inside an intersection remain unnamed, unless every possible direction would receive a correct instruction anyway. Naming an internal segment is only acceptable if no direction (including U-turns) can produce a routing error.

## Between lanes

### Fork

The routing server considers that two segments with the same name connected at an angle of about 0° represent a "straight ahead" path.

Example: an avenue that continues straight ahead while a street branches off.

- The two avenue segments (before and after): same name, angle of about 0° at the crossing.
- The street that branches off: 90° angle relative to the avenue.
- Result: the router correctly identifies the turn onto the street.

### Dead ends

- A dead end is represented by a single segment, with no connection at its end, with a junction node at the terminus, placed where the driver can physically reach it. Do not extend it to the absolute edge.
- A circular cul-de-sac is generally drawn like a standard dead end, with the node placed near the center of the loop to remain accessible regardless of the direction of arrival.
- Exception: if a small island occupies the center, place the segment on the outer edge of the loop so that the end remains accessible.

### Loops

A segment cannot connect to itself through a single node. A loop must have **at least 3 segments**: a 2-segment loop produces guidance errors ("same endpoint drivable segments"). In practice, create a 3-branch intersection roughly midway along the loop so that routing works.

### Offset roads

When two roads cross almost without being perfectly aligned:

1. True 4-branch crossing: convert it into a real 4-branch intersection.
2. Near-alignment: slightly offset the roads off the axis and add geometry points to obtain 90° angles at the node.
3. Genuinely distinct approaches: keep separate junctions with "turn left" then "turn right" guidance.

::: important Very short segments
A very short segment between two offset approaches triggers automatic map errors and route recalculations. Maximize the distance between the approach points.
:::

### Roundabouts

The guide refers to a dedicated page for roundabouts.

::: note Roundabouts
See the dedicated page: [Roundabouts](./ronds-points.md).
:::

### Transition nodes

Transition nodes are junctions that are invisible on the app side. They serve for street name changes, locality boundaries, direction changes and loop components. Only delete them when you are certain they are no longer used: they simplify the map and reduce unnecessary routing factors.

### Bowtie intersection

The bowtie intersection simplifies the crossing between a divided road and a single-carriageway road by reducing the crossing to a single logical point. This construction improves the control of U-turns at that point, without depending on segment length.

## Soft and hard turns

Connections generated automatically by WME are soft turns (purple question mark); the editor's manual decisions are hard turns. Four states exist, from most to least penalizing: hard restricted (red arrow), soft restricted (purple question mark), soft allowed (green arrow), hard allowed (confirmed green arrow).

::: example Quick method at a new intersection
First check the directions, then "Q" to restrict all turns, then "W" to allow them all, and finally set to hard restricted only the turns that are genuinely forbidden.
:::

## Ramps

Ramps are used to connect Highway or Freeway segments at grade-separated interchanges (crossings at separate levels).

On the drawing side, the "simpler, the better" principle applies: a single ramp segment is usually enough, with a single junction if the distances are short. Splitting into several segments is only justified if the ends are clearly spaced apart. Keep a departure angle of 20 to 30° to produce the "Exit" instruction.

## Highway and Freeway intersections

### Exits

Exit ramps must diverge from the main road at an angle of 20 to 30°. This angle produces the "Exit right" instruction. The segments before and after the junction remain Highway or Freeway type, with the same name, at an angle of about 0°; the ramp is Ramp type.

### Highway / Freeway split

When three Highway segments meet without an obvious "straight ahead", different names and angles of 20 to 30° produce a "Keep right" or "Keep left" instruction with the branch name.

### Guidance segments

Guidance segments must be 15 to 20 meters long. They serve to warn the driver in case of lane reduction, inconsistent signage or non-obvious routing (for example exit on the left then merge to the right). The three segments involved must carry distinct names, and the two surrounding segments must be of identical type.

### Ramp split

The source also details splitting a ramp. The same principle of angles and naming applies to obtain the expected instruction.

## Bridges and tunnels

Roads that overlap without actually crossing (bridges, overpasses, underpasses, tunnels) must be separated by segment elevation levels.

- By default, every segment is at level 0.
- The bridge function assigns the upper segment a level one unit above the higher of the two selected segments.
- A tunnel gets level -1, so that Waze recognizes it as a tunnel and excludes automatic map errors.

::: important Conditions of the bridge function
The bridge function acts on two segments at a time and requires matching properties: country, canton, locality and street name. It does not work if a segment has no defined direction of traffic ("Unknown"). Road type and locking have no effect.
:::

After applying it, manually correct the resulting levels and remove the geometry points that have become unnecessary where an intersection previously existed.

## Interchanges

For interchanges, the guide refers to a dedicated external resource.

::: note Limited Access Interchange Style Guide
The details of interchanges are not reproduced here. Refer to the "Limited Access Interchange Style Guide" indicated in the source.
:::

::: quote Sources
- Kreuzungen: https://www.waze.com/discuss/t/kreuzungen/377258
- Intersection guide (Switzerland): https://www.waze.com/discuss/t/guide-des-intersections/377286
- Unterführungen und Brücken: https://www.waze.com/discuss/t/unterfuhrungen-und-brucken/377274
- Soft und Hard Turns: https://www.waze.com/discuss/t/soft-und-hard-turns/377271
:::
