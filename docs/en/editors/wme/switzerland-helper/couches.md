---
title: Map layers
description: The five Swiss base maps added to WME by the Switzerland Helper.
order: 1
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Map layers

The Helper adds five official Swiss base maps to the WME layer selector, at the bottom of the
right-hand bar.

## The five layers

| Checkbox | What it shows |
| --- | --- |
| **Municipal boundaries** | The division into municipalities |
| **Cantonal boundaries** | The division into cantons |
| **Geographical Names swissNAMES3D** | The official place names: localities, summits, watercourses |
| **National Maps (color)** | The Swiss national map, the classic topographic background |
| **SWISSIMAGE Background** | The federal aerial imagery, in high resolution |

Several can be enabled at the same time, and the checked boxes are found just as they were
when the editor is reloaded. These backgrounds are always drawn **below the segments and the
places**: they never hide what you are editing.

## When to use which

- **SWISSIMAGE Background** is the most useful working background day to day: much sharper
  than WME's default imagery over Switzerland, it makes drawing geometries far more reliable.
- **National Maps (color)** helps where the aerial photo is ambiguous: dense forest, mountain,
  a path under the trees.
- **Geographical Names swissNAMES3D** is used to check the spelling of a place name before
  entering it.
- **Municipal boundaries** and **Cantonal boundaries** are used to check the city assigned to
  a segment, especially when a street changes municipality along the way.

::: help Finding out when the aerial photo was taken
Imagery is not renewed everywhere at the same time: an old image can miss a recent housing
development or roundabout. The **WME Switzerland Helper** tab contains a link to a map that
shows, region by region, the year the picture was taken.
:::

## If a layer does not show up

- Check that the box is ticked, right at the bottom of the layer selector.
- These backgrounds only cover **Switzerland**: outside the borders, there is nothing to show.
- The boundary layers are hard to read from very far away. Zoom in if the rendering looks
  uniform.

::: quote Sources
- Script repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Maps and imagery: swisstopo, https://www.geo.admin.ch
:::
