---
title: Roundabouts and traffic circles
---

# Roundabouts and traffic circles

This page describes how to create and edit a roundabout in WME, as well as the Swiss locking standard.

## General principles

- A roundabout always keeps the highest road type among its branches. Exception: if a freeway starts inside a roundabout within a town, take the highest type other than freeway, to avoid routing errors.
- No street name: a name displays poorly in the app. Tick "No name". If the roundabout has a proper name, create a named Place inside it.
- No speed limit on a roundabout.
- Maximum diameter of about 100 m (technical limit).

## What is NOT a roundabout

- A junction without a central island.
- An unsignalized intersection.
- A dead end ending in a loop: draw a loop rather than a roundabout.
- A very large area beyond 100 m.
- A residential intersection with chicanes.

::: note When in doubt
Consult the Country Manager (CM) or the State Manager (SM).
:::

## Step-by-step creation

Prerequisites: an existing intersection, an aligned base map and the GPS points layer visible.

1. Move the junction to the centre of the future roundabout.
2. Detach or extend the segments that will connect.
3. Add the missing segments for all entries and exits, even minor ones.
4. Activate the roundabout tool: hover over the curve icon and choose "Roundabout", or press the "o" key.
5. Place the cursor (cross) at the centre, click then drag: an orange circle appears with its radius. Hold Shift for an oval. Click a second time to confirm.
6. The segments are created in orange (unsaved) then turn red. They are all one-way and the connections are automatically soft-turns.
7. Convert the soft-turns into hard-turns with "Q" then "W" (see [Soft and Hard turns](/en/editors/intersections#soft-et-hard-turns)).
8. In the properties, tick "No name". Add a named Place inside if the roundabout has a proper name.
9. Save, delete the old internal streets, then check the result.

## Fixing a false roundabout

Delete all its segments, extend the segments to connect, re-align the centre using the GPS layer, redraw the roundabout, edit it then save.

## Editing an existing roundabout

To change connections, delete the whole roundabout and redraw it. Deletion can only be done on all the segments at once, never partially.

## Assigning the type

A well-chosen type avoids routing penalties. The hierarchy is: federal > national > main > street. Ramps take the type of the connected segment. Local roads, private roads and parking lots are standard streets.

Method: identify the two highest-type segments connected to the roundabout (a street split into two one-way segments counts as a single segment), then assign the roundabout the LOWEST type of the two.

| Branches | Assigned type |
| --- | --- |
| 2 main + 2 standard | Main |
| 1 federal + 3 main + 2 standard | Federal |
| 1 federal + 2 main + 1 standard | Main |

## Entries and exits

Entries and exits connect like simple streets, at a right angle (90°) to the roundabout perimeter. For very widely spaced entries and exits, consider two one-way segments.

## Navigation instructions

A roundabout is said to be "normal" when it has 4 branches, is centred, and the exits lie within 90° plus or minus 30° and 180° plus or minus 30° from the entry. In this case, the instruction is "turn right / left" or "go straight".

Otherwise, the roundabout is "non-normal" and the instruction becomes "take the Xth exit".

::: important Switch to non-normal
A single roundabout can be normal from one entry and non-normal from another. If just ONE entry makes it non-normal, the whole roundabout switches to non-normal.
:::

## Swiss standard: minimum L3 lock

::: important Swiss community rule
In Switzerland, the recommended minimum lock level for a roundabout is L3.
:::

This rule is enforced by the Swiss community and checked by the WME Switzerland Helper script, which flags roundabouts whose lock level is below L3. Locking a roundabout at L3 protects an often-edited geometry and prevents accidental changes by low-level editors.

::: quote Sources
- Erstellen und bearbeiten eines Kreisverkehrs: https://www.waze.com/discuss/t/erstellen-und-bearbeiten-eines-kreisverkehrs/377246
- Guide des intersections (Switzerland), "Rond-Point et Giratoire" section: https://www.waze.com/discuss/t/guide-des-intersections/377286
- L3 locking standard: Swiss community rule, checked by the WME Switzerland Helper script.
:::
