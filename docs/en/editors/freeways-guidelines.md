---
title: "Freeways Mapping Guidelines 2024"
---

# Freeways Mapping Guidelines 2024

By vince1612  
Swiss co-coordinator and Global Champ  
Waze volunteers community

## Overview

The Swiss freeways have been widely edited by a rogue editor who has made many edits rendering the current situation of freeways not uniform.

Conscious that the old guidelines need a review anyway, due to the evolutions of the App and WME, we will present new guidelines to apply whilst checking and correcting the rogue edits.

## General Notes

### Ramp road-type

Unlike other road types, ramps are never ignored for long-distance routes. They are considered essential for connecting highways and other major roads.

Ramps don't have a specific routing preference setting (like "preferred" or "unfavored") applied to them by default. Their routing priority is inherent in their function as connectors.

Ramp names do not appear on the client application map, which helps reduce clutter. However, they do appear in the text for routing directions when needed. Therefore, it can be useful to name their branches differently in WME when they split into a Y, without having to consider keeping a continuous name or alternative name.

### Sortie / Ausfahrt / Uscita - naming

Should be written in the local language, TTS voices are already setup to read it or pronounce it correctly based on the language used in the client.

E.g. Someone using Waze in french will hear "Sortie" even if "Ausfahrt is written, and someone using Waze in german will hear "Ausfahrt" even if "Uscita" is written.

### ">" symbol

This symbol is widely used across Europe and TTS for most languages know that they should read it as "towards" / "richtung" / "direction" / etc…

Even if not displayed visually, it can be used in the TTS field of a turn instruction to be pronounced correctly in a multitude of languages automatically.

### Wayfinders

Before shields or turn instructions existed, wayfinders were common in mapping. They consisted of small segments (5-20m) to force a TTS instruction to be something else than the road's name. If you find any, remove them and use a turn instruction instead.

![](/freeways/image3.png)

## Mapping Instructions

### Exit ramps

#### Segments naming

We won't change much of the previous method, based on the Notes about "Ramp road-type" (see previous section), and for simplicity because it currently works well when "reading" the junction by looking at it in WME.

Ramps exiting the freeway should already look like this:

* Ramp from the Freeway  
  [**Sortie**/**Ausfahrt**/**Uscita** **##** **>** **Junction name** **/** **City** **1 / 2 / 3**…]
* Optional or situational Y split  
  [**>** **City name 1 / City name 2**] and [**> City name 3**] for example

![](/freeways/image4.png)

![](/freeways/image5.png)

##### Rogue edits warning

Some of the rogue edits we've seen by a former Country manager consisted in removing the ">" symbol after the ramp's Y split. If you see that, please re-add it. It is better visually in WME (not shown in the App anyway) and serves to have the TTS turn instruction already correct without needing to manually edit it.

#### Turn instruction

The turn instructions will have a slight change from previous mapping guidelines.

In the past, we used to put everything in the "Visual instructions" field, and would sometimes use ">" in the "Towards" field.

Because of Android Auto and CarPlay, that automatically insert a bullet point between visual instructions and towards, which we cannot remove and have no control over, it's best to drop the ">" to avoid having strange visuals like below:

![](/freeways/image6.png)

However it must be kept on segments and in the TTS.

##### Y-splits (at the end of an exit ramp)

If applicable (when it exists), for the Y split, do not add or force any instructions, leave everything according to default, the ramp's name will be used for TTS instructions.

![](/freeways/image7.png)

##### Turn instructions from freeway to exit ramp (new mapping)

1. **Visual instructions**: Type the **junction's name** (either according to [https://map.geo.admin.ch/](https://map.geo.admin.ch/) or a cantonal geo portal)
2. **Towards**: Type the remaining directions, separated with / , without repeating the city name corresponding to the junction's name a second time.
3. **Exit signs**: Insert the exit symbol (shield) and its number
4. **TTS**: Everything should already be correct and according to the ramp segment's main name.

   **Voice prompt** can be left as default.

![](/freeways/image8.png)

### Entry ramps

#### Checking and removing shields

In early shield addition to WME, many ramp segments have had shields added onto them.

This is not necessary and the shields should only be applied to the actual Freeway segments. If you find any entry ramps with shields, you can remove them.

![](/freeways/image9.png)

#### Segments naming

Similarly to exits, the ramps names will be only visible on WME, so they can be left like the old method and already serve to get a correct TTS instruction without needing any further editing.

Example: [**Axx** **>** **Direction city** (or cities separated with a **/** )]

![](/freeways/image10.png)

#### Turn instruction

Long ago, all turn instructions have already been mapped like in the example below according to the original method. It is not necessary to change them unless they have been altered or modified with rogue edits.

![](/freeways/image11.png)

##### Optional use of shields for directions on entry turns

Now that we've added all Axx and Exx numbers during project Nexus, we can make use of shields for directions on Freeway entry segments.

HOWEVER, as this required a huge amount of manual editing, I advise to use it only where and if it improves routing in any way.

The original mapping method (above) does not pose any problems, so it doesn't have to be changed.

An example: Only shields in Visual instructions / Direction in Towards  
(See image below)

![](/freeways/image12.png)

This works well mostly where Exx numbers exist, because they take space in the "Visual instructions" field, leaving no room for text, so we place the city/direction in the "Towards" field. It may also help where the city/direction after Axx is too long to display.

Where there is no Exx number, the space next to the Axx shield is usually sufficient to display a city/direction, like in the original mapping above.

### Freeway interchanges

#### Examples

![](/freeways/image13.png)

![](/freeways/image14.png)

![](/freeways/image15.png)

#### Segments naming

Within the "Spaghetti" twists of the interchange, to make segments easily distinguishable on WME, name the same way as directions on Entry ramps.

Of course these segments should have all Axx and Exx alternative names setup, as was the goal of Project Nexus, so this should already be correct.

![](/freeways/image16.png)

![](/freeways/image17.png)

#### Turn instructions

**Visual instructions**: Use shields only

**Towards**: Use the cities/directions

**Exit signs**: Should be empty

**Waze prompt**: Adapt to what is best, as continuous road names may suppress any instructions and one may have to be forced

**TTS**: Should already be correct based on the segment's name.

![](/freeways/image18.png)

### Geometry

*Priority for long ramps - small/regular ramps not a priority*

Switzerland previously adopted the following mapping rule:

![](/freeways/image19.png)

However it was pointed out by staff at meetups that mapping the ramp's node at the A-point is not recommended nor optimal for routing and Falcon (the road GPS snapper).

Based on **staff recommendations**, we will be progressively switching to placing the node at the last legal exit point (illustrated by the C-point in the screenshot above).

*[Call with staff recording: Off ramps – 2024_09_26 16_26 BST – Recording.mp4](https://drive.google.com/file/d/1eCMVwhmgbLBHPeZY6tYVySE6O9Y4NI-3/view?usp=sharing) (30min, English)*

Additionally, for non-standard long exits, we can make use of the new "Far turn" feature to add an early instruction. But not use it on smaller or standard ramps.

Higher priority will be given to long ramps, and lower priority to standard exits with short ramps, rather than a mapraid, we will encourage editors to review and correct them on their own time and progressively throughout the following months.
