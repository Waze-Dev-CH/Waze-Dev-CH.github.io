---
title: Map update delays
description: Understand when changes made in the WME become visible in the app and on the routing server.
order: 12
---

<img class="banner-img is-narrow" src="/img/editors/clocks.png" alt="">

# Map update delays

::: tip Accessible to everyone: Level L1
Understanding these delays prevents re-editing segments that have already been fixed.
:::

Waze updates its various components at different frequencies. Changes made in the WME are **not immediately visible** everywhere.

## Delay table

| Element | Application delay |
|---------|-------------------|
| Map updates (navigation) | **~1 day** on the routing server |
| Traffic reports (accidents, speeds) | **Real time** in the app |
| New streets | **2 to 5 days** in the app and Live Map |
| New streets on the routing server | 1 additional day after appearing in the app |
| Non-AM editing rights (after a drive) | Available within **2 days** |
| City names / boundaries | A few days |
| Points (score) | Updated **once per day** on the server side |

## Process details

### Map updates

Waze aims for **daily** updates: the current state of the map is copied, converted for navigation and sent to the routing servers. The process takes a little less than 24 hours. Under optimal conditions, a change is visible on the routing server **the next day**.

### New streets

After editing and a map update, a new street appears in the app and on the Live Map within **2 to 5 days**. The routing server may need an additional day to process the street correctly for route calculation.

### Editing rights (non Area Managers)

Editors without AM status can edit roads within a **1.6 km** radius of the streets they have driven. These rights become available within **2 days** after the recorded drive.

### Points and score

The app displays points in real time, but the server consolidates them **once per day**. There can therefore be a temporary discrepancy between the app display and the dashboard.

::: note Note
If a change does not appear after the indicated delay, check that the save in the WME actually happened before re-editing the segment.
:::
