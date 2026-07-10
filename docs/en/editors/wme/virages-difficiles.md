---
title: Difficult turns
description: How to mark and configure difficult turns in the WME in Switzerland.
order: 7
---

<img class="banner-img is-narrow" src="/img/editors/stressed.png" alt="">

# Difficult turns

::: note L2 level
Only editors at level 2 and above can modify this feature.
:::

The "difficult turns" feature allows the community, rather than the Waze algorithm, to flag a complicated movement at an intersection, so that Waze can avoid it according to the driver's preferences.

## What it is for

This feature targets intersections without traffic lights where turning right is easy, but where crossing or turning left can be very difficult to perform due to priority traffic. The movement remains allowed, but Waze penalizes it according to the defined settings (permanently or based on day / time ranges).

On the driver side, the preference is set in the app under Settings, then Navigation, to indicate whether they want to avoid this type of turn.

## How to use it in WME

It is up to the local community to indicate difficult turns, via a checkbox in the editor. Only editors at level L2 and above can modify this feature. If the segment is locked at a higher level, request the unlock from an editor of the required rank before making changes.

The checkbox is located in the same menu as the turn restrictions, that is, by clicking on the permission arrows that connect two segments at an intersection. Once the movement is selected, the "difficult turn" checkbox lets you activate the penalty.

Three types of penalty are available:

- Permanent: the turn is penalized continuously.
- Weekdays: the penalty applies according to the chosen days.
- Time ranges: the penalty applies according to defined time slots.

## Best practices

::: important Impact on drivers
On the driver side, the setting that avoids these turns is **enabled by default**. A new marking will therefore impact about **95% of users**. Use with discernment.
:::

- Designed primarily for **intersections without traffic lights** where a left turn or a crossing is dangerous due to priority.
- **Do not use** for personal purposes to negatively influence a route.
- **Do not mark** intersections equipped with traffic lights: the algorithm already takes waiting times into account.
- Apply only when the turn is **objectively difficult** for the majority of drivers.

::: help When in doubt
When in doubt, open a discussion on the forum before marking a turn as difficult.
:::

::: note Driver-side setting
The individual setting remains accessible in the app under Settings, then Navigation. The details of this driver-side interface are not reproduced here. Refer to the source page.
:::

::: quote Sources
- Difficult turns (Switzerland): https://www.waze.com/discuss/t/virages-difficiles/377280
- French-speaking hub (information in French): https://www.waze.com/discuss/t/informations-en-francais/377254
:::
