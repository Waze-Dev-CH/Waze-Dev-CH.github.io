---
title: Public transport stops
description: Create, merge and clean up stop venues from the official SBB data.
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/location.png" alt="">

# Public transport stops

The **Public Transport Stops** layer shows the official SBB stops. It is used to create the
ones missing from Waze, and to spot those that no longer exist.

::: important The layer only shows what needs action
A stop already mapped nearby, under the same name, is hidden. If the map looks empty in a
well-handled station, that is normal: there is nothing to do there.
:::

## Reading the map

| Symbol | Meaning | What to do with it |
| --- | --- | --- |
| **Orange** dot | Official stop missing from Waze | Create it, or merge it with a nearby place |
| **Red** dot | Waze place with no matching official stop | Check, then delete if it really has gone |
| Dot with a **number** | A cluster of stops, when zoomed out | Click to zoom in on it |

## Creating or merging a stop

Click an orange dot.

::: reminder You need to be zoomed in enough
If you are not zoomed in enough, the script simply recentres and zooms on the stop. Click the
dot a second time to open the dialog.
:::

The script then looks for an existing transport place nearby:

- **No nearby place**: it creates the place directly, with its official name and its category.
- **An existing place**: a dialog offers **Merge**, **Merge and update coordinates**, **Save
  new** or **Cancel**.
- **Several candidate places**: it first asks you which one to choose.

**Merge** applies the official information to the existing place without creating a new one.
It is almost always the right choice when the stop is already there but badly named.

The place is then selected in the editor so that you can review it, with its city already
filled in. The orange dot disappears.

## What the script does to the name

The raw SBB names cannot be used as they are. The script cleans them up before proposing
them: it removes the locality name when it already duplicates the city, sets aside the
mentions in brackets, expands the abbreviations (`Rte` becomes `Route`) and puts the other
spellings into alternate names.

## Deleting an obsolete stop

Clicking a red dot offers to delete the place.

::: important Check before deleting
A stop can disappear for good reasons (a line removed, a stop moved), but also because the
Waze place carries a name too far from the official one. In that second case, the name needs
correcting, not the place deleting.

Harbours and moorings are never flagged as obsolete.
:::

A **bus-shaped button** is added at the top of the map: it reloads the stops without moving
the view, which is handy after handling several of them.

::: quote Sources
- Script repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Stop data: SBB, https://data.sbb.ch
:::
