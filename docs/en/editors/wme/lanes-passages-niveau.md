---
title: Traffic lanes and level crossings
description: Editing rules for lanes and level crossings in Switzerland (L3+).
order: 8
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Traffic lanes and level crossings

::: warning Level L3+
Configuring lane guidance and arrow instructions is reserved for editors of level 3 and above. If you do not have the required level, do not edit these objects.
:::

Lane guidance, arrow instructions and level crossings follow editing rules specific to Switzerland.

## Lane guidance (lanes)

Lane guidance tells the driver which lane or lanes to use when approaching an intersection. In Switzerland, it follows the KISS principle ("Keep It Simple, Stupid"): as a general rule, **do not map turn lanes**. Most intersections do not need them, and unnecessary lane segments clutter the map, make validation heavier and slow down route calculations.

Mapping turn lanes is only justified in specific cases:

- The lane starts well before the intersection and is physically separated from it (median, island), so that changing lanes becomes impossible.
- There is a risk that the turn instruction arrives too late to reach the correct lane before the intersection.
- A map error ("Map problem") requires a lane segment as a workaround.
- Feedback from users or area managers reports late voice announcements.

When in doubt, do not map the lane: simplicity serves users better than complexity. For setting up intersections, see [Intersections](/en/editors/cartographie/intersections).

Detailed guidelines for configuring lanes in Switzerland are available in the official community document:

→ [Read the full guidelines (published Google Doc)](https://docs.google.com/document/d/e/2PACX-1vTbD9nEIrEABLDrGcWlyXDd9wzhHpYrksS8_yCxkcRRxvmRAsjy_1b1NZHjSeT4Lyhq63vvEtV5tCLR/pub)

## Arrow instructions (Abbiegeanweisungen)

Arrow instructions are a complementary way to **force or suppress a voice announcement** when the standard settings do not produce the expected result. Main uses:

- Force or suppress a turn instruction at an intersection.
- Generate a **U-turn** instruction on a one-way street where turning back is possible, instead of a "turn left".
- Produce a **simplified wayfinder** (keep left / keep right) that announces the next segment and helps avoid unwanted route detours.

A modified instruction can be recognized by the color of the loudspeaker symbol on the arrow: it changes from **cyan to orange**. Cyan corresponds to a non-forced announcement, determined by Waze algorithms; orange indicates an instruction forced by an editor.

::: important Caution for junior editors
New editors and junior editors should consult an experienced editor before using these additional announcement options.
:::

## Level crossings

::: note Level crossings: Level L4+
Since June 2024, the rules relating to level crossings have been moved into Waze's "Permanent Hazards" guidelines. See [Permanent hazards](/en/editors/wme/dangers-permanents) (L4+).
:::

::: note Detailed content to be completed
The Swiss community source points the detailed rules to an external document that is not reproduced here. This page will be completed when these detailed guidelines become available. In the meantime, refer to the Permanent Hazards guidelines and the Waze Discuss thread below.
:::

## Community resources

- [waze-switzerland.ch](https://www.waze-switzerland.ch/)

::: quote Sources
- Abbiegespuren: https://www.waze.com/discuss/t/abbiegespuren/377228
- Abbiegeanweisungen über Pfeile: https://www.waze.com/discuss/t/abbiegeanweisungen-uber-pfeile/377232
- Lanes / Railroad crossings editing rules for Switzerland: https://www.waze.com/discuss/t/lanes-railroad-crossings-editing-rules-for-switzerland/101939
:::
