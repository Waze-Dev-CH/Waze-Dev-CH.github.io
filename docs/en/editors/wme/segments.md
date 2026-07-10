---
title: Segments
order: 5
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Segments

A segment is the basic unit of the Waze map: it is a stretch of road between two junctions. Every road is made up of one or more segments.

## Create a segment{#creer-un-segment}

1. Press <kbd>I</kbd> (or click the pencil tool in the top bar)
2. Click on the map to place the first point
3. Click to add intermediate geometry points
4. Double-click to finish the segment
5. Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save

::: important Important
Any new segment must be connected to the existing map. An isolated segment (not connected to others) will not be routable.
:::

## Segment properties

Select a segment to display its properties in the right-hand panel:

| Property | Description |
|-----------|-------------|
| **Type** | Road classification (Freeway, Primary Street, Street…): affects routing. See [Routing basics](/en/editors/wme/routing) |
| **Name** | Official road name, without abbreviation. See [Road naming](/en/editors/cartographie/nommage-routes) |
| **City** | Official locality (postal code required). See [Road naming](/en/editors/cartographie/nommage-routes) |
| **Direction** | Two-way, one-way A→B, one-way B→A |
| **Speed** | Speed limit. See [Speed limits](/en/editors/cartographie/limites-vitesse) |
| **Level** | Segment elevation (0 = ground, +1 = bridge, -1 = tunnel) |
| **Lock** | Minimum level required to edit this segment |

## Edit the geometry

- Select a segment, then drag the **white points** to adjust the shape
- Click a white point + press <kbd>D</kbd> to delete it
- Click on the line between two points to insert a new point

## Connect segments (junctions)

To join two segments, the end point of one must coincide exactly with a point of the other. The WME displays a blue or red point on junctions.

- **Blue point** = valid junction
- **Red point** = incomplete or problematic junction

## Delete a segment{#supprimer-un-segment}

Select the segment, then press <kbd>Delete</kbd>. Confirm the deletion. Orphaned junctions must also be deleted.

::: important Important
Never delete an existing segment without a valid reason: it holds valuable speed data and routing history. See [Editing rules](/en/editors/cartographie/regles-edition).
:::


## Split a segment

To split a segment in two, simply [create a segment](#creer-un-segment) perpendicular to the segment you want to split, attach it to the segment at the spot you want to cut, then [delete](#supprimer-un-segment) the segment you just added.
