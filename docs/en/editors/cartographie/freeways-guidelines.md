---
title: "Freeway Mapping: Guidelines 2024"
order: 12
---

<img class="macaron" src="/img/editors/badge-freeway.png" alt="" width="128" height="128">

# Freeway Mapping: Guidelines 2024

By vince1612  
Swiss Co-coordinator and Global Champ  
Waze volunteer community

::: note Required level
These guidelines mainly concern **level 5 and above** editors: freeway editing is neither useful nor accessible to beginners. If you are just starting out, you can safely skip this page.
:::

## Overview

Swiss freeways have been heavily edited by a non-compliant contributor who made numerous changes, leaving the current state of the freeways inconsistent.

Aware that the old guidelines need a revision anyway, due to the evolution of the app and WME, we will present new guidelines to apply when checking and fixing non-compliant edits.

## General notes

### Road type: ramp

Unlike other road types, ramps are never ignored for long-distance routing. They are considered essential for connecting freeways and other main roads.

Ramps do not have a specific routing preference setting (such as "preferred" or "not preferred") applied by default. Their routing priority is inherent to their function as connectors.

Ramp names do not appear on the client app map, which helps reduce clutter. However, they do appear in the text of turn instructions when needed. Therefore, it can be useful to name their branches differently in WME when they split into a Y, without having to maintain a continuous name or an alternate name.

### Sortie / Ausfahrt / Uscita - naming

It must be written in the local language; the TTS voices are already set up to read or pronounce it correctly according to the language used in the client.

For example, a person using Waze in French will hear "Sortie" even if "Ausfahrt" is written, and someone using Waze in German will hear "Ausfahrt" even if "Uscita" is written.

### The ">" symbol

This symbol is widely used in Europe, and TTS for most languages knows to read it as "towards" / "richtung" / "direction" / etc…

Even if it is not displayed visually, it can be used in the TTS field of a turn instruction to be pronounced correctly in many languages automatically.

### Wayfinders

Before shields or turn instructions existed, wayfinders were common in mapping. They consisted of small segments (5-20m) to force a TTS instruction to be something other than the road name. If you find any, remove them and use a turn instruction instead.

![](/freeways/image3.png)

## Mapping instructions

### Exit ramps

#### Segment naming

We will not change much from the previous method, based on the notes on "Road type: ramp" (see previous section), and for simplicity because it currently works well when "reading" the junction by looking at it in WME.

Ramps exiting the freeway should already look like this:

* Ramp from the freeway  
  [**Sortie**/**Ausfahrt**/**Uscita** **##** **>** **Junction name** **/** **City** **1 / 2 / 3**…]
* Optional or situational Y split  
  [**>** **City name 1 / City name 2**] and [**> City name 3**] for example

![](/freeways/image4.png)

![](/freeways/image5.png)

##### Warning: non-compliant edits

Some of the non-compliant edits we saw from a former country manager consisted of removing the ">" symbol after the ramp's Y split. If you see this, please re-add it. It is better visually in WME (not displayed in the app anyway) and serves to have the TTS turn instruction already correct without having to edit it manually.

#### Turn instruction

Turn instructions will undergo a slight change compared to the previous mapping guidelines.

In the past, we used to put everything in the "Visual instructions" field, and we sometimes used ">" in the "Towards" field.

Because of Android Auto and CarPlay, which automatically insert a dot between the visual and towards instructions, which we cannot remove and over which we have no control, it is better to remove the ">" to avoid having strange visuals like below:

![](/freeways/image6.png)

However, it must be kept on the segments and in the TTS.

##### Y splits (at the end of an exit ramp)

Where applicable (when it exists), for the Y split, do not add or force instructions; leave everything at the default value, the ramp name will be used for the TTS instructions.

![](/freeways/image7.png)

##### Turn instructions freeway → exit ramp (new mapping)

1. **Visual instructions**: Type the **junction name** (either according to [https://map.geo.admin.ch/](https://map.geo.admin.ch/) or a cantonal geographic portal)
2. **Towards**: Type the remaining directions, separated with / , without repeating a second time the city name corresponding to the junction name.
3. **Exit signs**: Insert the exit symbol (shield) and its number
4. **TTS**: Everything should already be correct and according to the ramp segment's primary name.

   **Voice prompt** can be left at the default.

![](/freeways/image8.png)

### Entrance ramps

#### Checking and removing shields

During the early addition of shields to WME, many ramp segments had shields added.

This is not necessary, and shields should only be applied on the actual freeway segments. If you find entrance ramps with shields, you can remove them.

![](/freeways/image9.png)

#### Segment naming

Similarly to exits, ramp names will only be visible on WME, so they can be left as the old method and already serve to get a correct TTS instruction without needing any further editing.

Example: [**Axx** **>** **Direction city** (or cities separated with a **/** )]

![](/freeways/image10.png)

#### Turn instruction

A long time ago, all turn instructions were already mapped as in the example below according to the original method. There is no need to modify them unless they have been altered or changed by non-compliant edits.

![](/freeways/image11.png)

##### Optional use of shields for entrance instructions

Now that we have added all the Axx and Exx numbers during the Nexus project, we can make use of shields for the directions on freeway entrance segments.

HOWEVER, since this required a huge amount of manual editing, I advise you to use it only where and if it improves routing in some way.

The original mapping method (above) causes no problems, so it does not need to be changed.

An example: Only the shields in the visual instructions / Direction in Towards  
(See the image below)

![](/freeways/image12.png)

This works well mainly where Exx numbers exist, because they take up space in the "Visual instructions" field, leaving no room for text, so we place the city/direction in the "Towards" field. This can also help where the city/direction after Axx is too long to display.

Where there is no Exx number, the space next to the Axx shield is usually enough to display a city/direction, as in the original mapping above.

### Freeway interchanges

#### Examples

![](/freeways/image13.png)

![](/freeways/image14.png)

![](/freeways/image15.png)

#### Segment naming

Within the "Spaghetti" curves of the interchange, to make the segments easily distinguishable on WME, name them the same way as the directions on the entrance ramps.

Of course, these segments must have all the Axx and Exx alternate names set up, as was the goal of the Nexus project; this should already be correct.

![](/freeways/image16.png)

![](/freeways/image17.png)

#### Turn instructions

**Visual instructions**: Use only the shields

**Towards**: Use the cities/directions

**Exit signs**: Must be empty

**Voice prompt**: Adapt it to what is best, as continuous road names can remove any instruction and it may be necessary to force one

**TTS**: Should already be correct according to the segment name.

![](/freeways/image18.png)

### Geometry

*Priority for long ramps - small/regular ramps are not a priority*

Switzerland previously adopted the following mapping rule:

![](/freeways/image19.png)

However, it was reported by staff during the meetings that mapping the ramp node at point A is not recommended nor optimal for routing and Falcon (the roads GPS corrector).

Based on **staff recommendations**, we will gradually switch to placing the node at the last legal exit point (illustrated by point C in the screenshot above).

*[Call with staff recording: Off ramps – 2024_09_26 16_26 BST – Recording.mp4](https://drive.google.com/file/d/1eCMVwhmgbLBHPeZY6tYVySE6O9Y4NI-3/view?usp=sharing) (30 min, English)*

Additionally, for non-standard long exits, we can make use of the new "Far turn" feature to add an early instruction. But do not use it on smaller or standard ramps.

Higher priority will be given to long ramps, and lower priority to standard exits with short ramps; rather than a mapraid, we will encourage contributors to check and fix these at their leisure and gradually over the following months.
