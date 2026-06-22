---
title: Intersection guide
---

# Intersection guide

This page synthesises the Swiss intersection guide. The guiding principle is simple: a well-drawn intersection produces correct guidance instructions. An intersection must represent the logical reality of traffic, not just its exact geometry.

::: abstract Summary
The simpler, the better. Draw as few elements as possible while still obtaining the right navigation instructions.
:::

## The simpler, the better

The basic rule of the guide: do not overload an intersection. Add segments, nodes or geometry only when necessary to obtain the expected guidance instruction. A simpler intersection is easier to maintain and generates more reliable routing.

## The basics

::: reminder To read first
This section lays the foundations. Understand them before everything else.
:::

### An intersection in Waze

In Waze, an intersection consists, at a minimum, of:

- at least two road segments,
- one or more junction nodes,
- turn allowances or restrictions at these nodes.

It is these combined elements that determine the possible movements and the instructions given to the driver.

### T-junction

A T-junction connects a road that ends on another road. The segments must meet at angles close to 90°. When the roads meet at an acute angle, add geometry points to straighten the intersection towards 90°. Without this, the router may produce a "keep right / keep left" instead of a "turn", omit an instruction, or generate automatic map errors.

### + junction

A + junction (cross-shaped) connects four branches at a node. As with the T-junction, aiming for angles close to 90° helps the router distinguish "straight ahead" from turns. Work at high zoom: angle corrections become almost invisible at normal zoom.

## Controlling guidance instructions

The turn angle determines the instruction given to the driver.

| Angle | Range | Road type | Instruction |
| --- | --- | --- | --- |
| 22° | 0° to 44° | Ordinary roads | Keep left / right |
| 22° | 0° to 44° | Ramps / freeways | Exit left / right |
| 90° | 45° to 150° | All types | Turn left / right |

::: important Angles to avoid
- Around 45°: an error of 0.5° can be enough to trigger the wrong instruction.
- Below 10°: the arrows become hard to select in the editor and the segments hard to touch in the app.
:::

### Naming internal segments

The segments located inside an intersection stay nameless, unless all possible directions would receive a correct instruction anyway. Naming an internal segment is only acceptable if no direction (including U-turn) can produce a routing error.

## Between roads

### Fork

The routing server considers that two segments of the same name connected at an angle of about 0° represent a "straight ahead" trip.

Example: an avenue that continues straight while a street branches off.

- The two segments of the avenue (before and after): same name, angle of about 0° at the junction.
- The street that branches off: 90° angle relative to the avenue.
- Result: the router correctly identifies the turn onto the street.

### Dead-end roads

- A dead end is represented by a single segment, with no connection at its end, with a junction node at the terminus, placed where the driver can physically reach it. Do not extend it to the absolute edge.
- A circular cul-de-sac is generally drawn like a standard dead end, with the node placed near the centre of the loop to stay accessible regardless of the direction of arrival.
- Exception: if a small island occupies the centre, place the segment on the outer edge of the loop so that the end stays accessible.

### Loops

A segment cannot connect to itself via a single node. A loop must be interrupted by an additional node, or drawn with two segments. In practice, create a 3-branch intersection roughly halfway along the loop so that routing works.

### Offset roads

When two roads cross almost without being perfectly aligned:

1. True 4-branch crossing: convert it into a real 4-branch intersection.
2. Near-alignment: slightly offset the roads off-axis and add geometry points to obtain 90° angles at the node.
3. Genuinely distinct approaches: keep separate junctions with a "turn left" then "turn right" guidance.

::: important Very short segments
A very short segment between two offset approaches triggers automatic map errors and route recalculations. Maximise the distance between the approach points.
:::

### Roundabouts and traffic circles

The guide refers to a dedicated page for roundabouts and traffic circles.

::: note Note
See the dedicated page: [Roundabouts and traffic circles](/en/editors/ronds-points).
:::

### Transition nodes

Transition nodes are junctions invisible on the app side. They are used for street name changes, locality limits, direction changes and loop components. Only delete them when certain they are no longer used: they simplify the map and reduce unnecessary routing factors.

### Bowtie intersection

The bowtie intersection simplifies the crossing between a divided road and a single-carriageway road by reducing the crossing to a single logical point. This construction improves the control of U-turns at that point, without depending on segment length.

## Soft and Hard turns

The connections generated automatically by WME are soft-turns (purple question mark); the editor's manual decisions are hard-turns. Four states exist, from the most penalising to the least penalising: hard restricted (red arrow), soft restricted (purple question mark), soft allowed (green arrow), hard allowed (confirmed green arrow).

::: example Quick method at a new intersection
First check the directions, then "Q" to restrict all turns, then "W" to allow them all, and finally set to hard restricted only the turns that are actually forbidden.
:::

## Ramps

Ramps are used to connect Highway or Freeway type segments at grade-separated interchanges (crossings on separate levels).

On the drawing side, the "the simpler, the better" principle applies: a single ramp segment is generally enough, with a single junction if distances are short. A split into several segments is only justified if the ends are clearly spaced. Keep a departure angle of 20 to 30° to produce the "Exit" instruction.

## Highway and Freeway intersections

### Exits

Exit ramps must diverge from the main road at an angle of 20 to 30°. This angle produces the "Exit right" instruction. The segments before and after the junction stay of Highway or Freeway type, same name, at an angle of about 0°; the ramp is of Ramp type.

### Highway / Freeway split

When three Highway segments meet without an obvious "straight ahead", different names and angles of 20 to 30° produce a "Keep right" or "Keep left" instruction with the name of the branch.

### Guidance segments

Guidance segments must be 15 to 20 metres long. They serve to warn the driver in case of a lane reduction, inconsistent signage or non-obvious routing (for example, exit left then merge right). The three segments concerned must carry distinct names, and the two framing segments be of identical type.

### Ramp split

The source also details the split of a ramp. The same principle of angles and naming applies to obtain the expected instruction.

## Bridges and tunnels

Roads that overlap without actually crossing (bridges, overpasses, underpasses, tunnels) must be separated by segment elevation levels.

- By default, every segment is at level 0.
- The bridge function assigns the upper segment a level one unit above the higher of the two selected segments.
- A tunnel receives level -1, so that Waze recognises it as a tunnel and excludes automatic map errors.

::: important Conditions of the bridge function
The bridge function acts on two segments at a time and requires matching properties: country, canton, locality and street name. It does not work if a segment has no defined direction of travel ("Unknown"). The road type and the lock have no incidence.
:::

After application, manually correct the resulting levels and delete the geometry points that have become useless where an intersection previously existed.

## Interchanges

For interchanges, the guide refers to a dedicated external resource.

::: note Limited Access Interchange Style Guide
The detail of interchanges is not reproduced here. Refer to the "Limited Access Interchange Style Guide" indicated in the source.
:::

::: quote Sources
- Kreuzungen: https://www.waze.com/discuss/t/kreuzungen/377258
- Guide des intersections (Switzerland): https://www.waze.com/discuss/t/guide-des-intersections/377286
- Unterführungen und Brücken: https://www.waze.com/discuss/t/unterfuhrungen-und-brucken/377274
- Soft und Hard Turns: https://www.waze.com/discuss/t/soft-und-hard-turns/377271
:::
