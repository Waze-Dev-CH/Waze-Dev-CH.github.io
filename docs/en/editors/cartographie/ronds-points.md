---
title: Roundabouts and mini-roundabouts
order: 7
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Roundabouts and mini-roundabouts

This page describes how to create and edit a roundabout in WME, as well as the Swiss locking standard.

## General principles

- A roundabout always keeps the highest road type among its branches. Exception: if a freeway starts inside a roundabout within a built-up area, use the highest type excluding freeway, to avoid routing errors.
- No street name: a name displays poorly in the app. Check "None". If the roundabout has a proper name, create a named Place inside it.
- No speed limit on a roundabout. See [Speed limits](/en/editors/cartographie/limites-vitesse).
- Maximum diameter of about 100 m (technical limit).

## What is NOT a roundabout

- A junction without a central island.
- An unmarked intersection.
- A dead end ending in a loop: draw nothing at all, neither loop nor roundabout. Simply extend the segment to the furthest drivable point.
- A very large area beyond 100 m.
- A residential intersection with chicanes.

::: note When in doubt
Consult the Country Manager (CM) or the State Manager (SM).
:::

## Step-by-step creation

Prerequisites: an existing intersection, an aligned base map, and the GPS points layer visible.

1. Move the junction to the center of the future roundabout.
2. Detach or extend the segments that will connect.
3. Add the missing segments for all entries and exits, even minor ones.
4. Activate the roundabout tool: hover over the curve icon and choose "Roundabout", or press the "o" key.
5. Place the cursor (cross) at the center, click and then drag: an orange circle appears with its radius. Hold Shift for an oval. Click a second time to confirm.
6. The segments are created in orange (not saved) and then turn red. They are all one-way and the connections are automatically set to soft-turns.
7. Convert the soft-turns into hard-turns with "Q" then "W" (see [Soft and Hard turns](./intersections.md#soft-et-hard-turns)).
8. In the properties, check "None". Add a named Place inside if the roundabout has a proper name.
9. Save, delete the old internal streets, then check the result.

## Fixing a fake roundabout

Delete all its segments, extend the segments to connect, realign the center using the GPS layer, redraw the roundabout, edit it, then save.

## Editing an existing roundabout

To modify connections, delete the roundabout entirely and redraw it. Deletion can only be done on all the segments at once, never partially.

## Assigning the type

A well-chosen type avoids routing penalties. The hierarchy is: federal > national > major > street. Ramps take the type of the connected segment. Local roads, private roads, and parking lots are standard streets.

Method: identify the highest type among the segments connected to the roundabout (a street split into two one-way segments counts as a single segment), then assign it to the roundabout.

| Branches | Assigned type |
| --- | --- |
| 2 major + 2 standard | Major |
| 1 federal + 3 major + 2 standard | Federal |
| 1 federal + 2 major + 1 standard | Federal |

## Entries and exits

Entries and exits connect like simple streets, at a right angle (90°) to the perimeter of the roundabout. For entries and exits that are far apart, consider two one-way segments.

## Navigation instructions

A roundabout is considered "normal" when it has 4 branches, is centered, and the exits are located within 90° plus or minus 30° and 180° plus or minus 30° from the entry. In this case, the instruction is "turn right / left" or "go straight".

Otherwise, the roundabout is "non-normal" and the instruction becomes "take the Xth exit".

::: important Switching to non-normal
The same roundabout can be normal from one entry and non-normal from another. If a SINGLE entry makes it non-normal, the entire roundabout switches to non-normal.
:::

## Swiss standard: minimum L3 locking

::: important Swiss community rule
In Switzerland, the recommended minimum locking level for a roundabout is L3.
:::

This rule is applied by the Swiss community and verified by the WME Switzerland Helper script, which flags roundabouts whose locking level is below L3. Locking a roundabout at L3 protects a frequently edited geometry and prevents accidental modifications by low-level editors.

::: quote Sources
- Erstellen und bearbeiten eines Kreisverkehrs: https://www.waze.com/discuss/t/erstellen-und-bearbeiten-eines-kreisverkehrs/377246
- Intersections guide (Switzerland), section "Rond-Point et Giratoire": https://www.waze.com/discuss/t/guide-des-intersections/377286
- L3 locking standard: Swiss community rule, verified by the WME Switzerland Helper script.
:::
