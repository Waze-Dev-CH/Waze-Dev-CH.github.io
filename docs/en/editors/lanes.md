---
title: Lanes and railroad crossings
---

# Lanes and railroad crossings

Lane guidance, arrow-based instructions and railroad crossings follow editing rules specific to Switzerland.

::: important Reserved for L3 editors and above
Configuring lane guidance and arrow-based instructions is reserved for editors of level L3 and above. Railroad crossings require an even higher level. If you do not have the required level, do not edit these objects.
:::

## Lane guidance (lanes)

Lane guidance tells the driver which lane or lanes to use when approaching an intersection. In Switzerland, it follows the KISS principle ("Keep It Simple, Stupid"): as a general rule, **do not draw turn lanes**. Most intersections do not need them, and unnecessary lane segments clutter the map, make validation heavier and slow down route calculations.

Drawing turn lanes is only justified in specific cases:

- The lane starts well before the intersection and is physically separated from it (median, island), so that changing lanes becomes impossible.
- There is a risk that the turn instruction arrives too late to reach the correct lane before the intersection.
- A mapping error ("Map problem") requires a lane segment as a workaround.
- Feedback from users or area managers reports late voice announcements.

In case of doubt, do not draw the lane: simplicity serves users better than complexity. For setting up intersections, see [Intersections](/en/editors/intersections).

## Arrow-based instructions (Abbiegeanweisungen)

Arrow-based instructions are a complementary way to **force or suppress a voice announcement** when the standard settings do not produce the expected result. Main uses:

- Force or suppress a turn instruction at an intersection.
- Generate a **U-turn** instruction on a one-way street where turning back is possible, instead of a "turn left".
- Produce a **simplified wayfinder** (keep left / keep right) that announces the next segment and helps avoid undesirable route detours.

A modified instruction can be recognized by the color of the speaker symbol on the arrow: it changes from **cyan to orange**. Cyan corresponds to a non-forced announcement, determined by Waze's algorithms; orange indicates an instruction forced by an editor.

::: important Caution for junior editors
New editors and junior editors should consult an experienced editor before using these additional announcement options.
:::

## Railroad crossings

::: note Note
Since June 2024, the rules relating to railroad crossings have been moved into Waze's "Permanent Hazards" guidelines. See [Permanent hazards](/en/editors/dangers-permanents).
:::

::: note Detailed content to be completed
The Swiss community source points the detailed rules to an external document that is not reproduced here. This page will be completed when these detailed guidelines become available. In the meantime, refer to the Permanent Hazards guidelines and to the Waze Discuss thread below.
:::

::: quote Sources
- Abbiegespuren: https://www.waze.com/discuss/t/abbiegespuren/377228
- Abbiegeanweisungen über Pfeile: https://www.waze.com/discuss/t/abbiegeanweisungen-uber-pfeile/377232
- Lanes / Railroad crossings editing rules for Switzerland: https://www.waze.com/discuss/t/lanes-railroad-crossings-editing-rules-for-switzerland/101939
:::
