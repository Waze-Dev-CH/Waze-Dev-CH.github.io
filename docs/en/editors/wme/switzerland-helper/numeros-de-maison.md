---
title: House numbers
description: Import the official house numbers from the federal building register into WME.
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/city.png" alt="">

# House numbers

The importer shows the official addresses from the **federal building register** and lets you
create the numbers missing from Waze, one by one or a whole street at a time.

## Enabling the feature

The feature is **off to begin with**: it is up to you to switch it on, either with the **Swiss
house numbers** box in the layer selector or with the toggle at the top of the **CH · House
numbers** tab.

The points appear from zoom 17 onwards, and the numbers are written next to them when you zoom
in further.

## Reading the points

| Point | Meaning | Clickable |
| --- | --- | --- |
| **Bright green**, large | Number of the selected street, missing from Waze | Yes |
| **Pale green**, small | Number already placed | No |
| **Grey** | Address of another street | No |
| **Grey-blue** | No street selected, or check in progress | No |

::: important Grey-blue also means "please wait"
Just after you select a segment, the script checks which numbers already exist. During that
short moment the points stay grey-blue and do not react to clicks, so as to avoid creating a
duplicate. Wait until they turn green.
:::

## Importing one number

1. **Select the street segment first.**
2. Click a bright green point: the number is created at the official location.

::: note The number attaches itself to the right segment
A street is split into several segments, one per stretch between intersections. Each number is
attached to the one it actually sits in front of, and not necessarily to the one you clicked.
The script also looks for duplicates on the neighbouring stretches of the same street: number
15 is often placed on the one next door.
:::

## Importing a whole street

With a segment selected, an import button appears in the tab and in the box at the top of the
segment panel. <kbd>Alt</kbd>+<kbd>H</kbd> does the same thing.

The import handles **50 numbers at most** at a time: if more are missing, the button says so
and you just have to run it again. A confirmation always lists the numbers concerned before
creating them.

::: important Always review the result on the map
The official coordinates aim at the building, not at the door: a courtyard entrance, a house
set back or a villa in a large garden will give a point badly placed for navigation. Move
those numbers before saving.
:::

## When the import button does not appear

- **No segment is selected.**
- **No number is missing** on this street.
- **The area is too dense** for the script to list all the addresses. It says so clearly, and
  point-by-point clicks keep working normally.

## Undoing

<kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes the creation like any other change, and the undone points
turn green again. They briefly go back to grey-blue while the script rechecks the street,
which is normal.

## Bilingual municipalities

The script compares every official name against every name of the segment, primary and
alternates. A segment named *Zentralstrasse* is therefore correctly recognised as matching the
*Rue Centrale* addresses, and the other way round.

## Settings

The most useful ones: from which zoom the addresses load, whether the numbers are shown on the
map, and a confirmation on every click if you prefer that. By default, only the addresses of
buildings that are actually built are offered, not those of projects under way.

If the data looks out of date to you, **Clear the cache and reload** forces a fresh read.

The <kbd>Alt</kbd>+<kbd>J</kbd> shortcut switches the layer on and off, even when the feature
is disabled.

::: quote Sources and origin
- Script repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Federal Register of Buildings and Dwellings (RegBL/GWR), https://www.geo.admin.ch
- The idea for this feature comes from the "WME Quick HN Importer CH" script by Ari (Reloaded) and Gerhard, after the original concept by Tom 'Glodenox' Puttemans for Belgium.
:::
