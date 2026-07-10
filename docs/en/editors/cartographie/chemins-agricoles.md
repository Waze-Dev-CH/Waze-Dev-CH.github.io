---
title: Farm tracks and roads through fields
description: Swiss agreement on mapping Feldwege, forest tracks and farm roads.
order: 9
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Farm tracks and roads through fields

::: tip Accessible to everyone: Level L1
These rules apply to all editors.
:::

::: note Note
Agreement approved by the Swiss community (DE: Feldwege, FR: Routes à travers champs / chemins agricoles).
:::

Waze is **above all an application for motorists**. It is not an off-road GPS, nor a tool for hikers or cyclists. Public drivable roads remain the main priority of mapping.

## Road types and attributes

| WME type | Penalty | Usage |
|----------|---------|-------|
| **Street** | None | Normal, accessible road |
| Street + **Unpaved** attribute | Slight: the user can choose to avoid it | Dirt track accessible to normal vehicles |
| **Private Road** | Strong: routing impossible except in special cases | Private track closed to normal traffic |
| **Dirt Road / 4x4 Trail (Off-road)** | Very strong: routing impossible | 4x4 track, road impassable for normal cars |

::: warning "Unpaved" attribute
The *Unpaved* attribute is designed to work **only on types with no base penalty**.

✅ Usable on: Street, Primary Street, Minor/Major Highway, Freeway
❌ Useless on: Parking Lot Road, Private Road, Narrow Street, Off-road
:::

## Scenarios

### Case 1: Dirt track with a prohibition sign (except certain vehicles)

Two acceptable options:
1. **Street + Unpaved**: the user can decide via the app settings whether to take this track
2. **Off-road / Not maintained**: avoids routing in 99% of cases, even for users who accept unpaved tracks

### Case 2: Small paved road with a prohibition sign (except certain vehicles)

→ **Private Road**

### Case 3: Small paved road without a prohibition sign

Two acceptable options:
1. **Street**: users who have the legal right to pass can be routed there
2. **Narrow Street**: preferred for single-lane passages, allows more flexibility in routing

::: note About the Unpaved attribute
The Unpaved attribute adds to any Street and adds a penalty that the user can choose to avoid or not. Applied to a segment that already carries a type penalty (Private Road, Off-road), it has no effect.
:::

::: quote Sources
- Waze Discuss, Field Roads / Feldwege / Routes à travers champs (2017): https://www.waze.com/discuss/t/field-roads-feldwege-routes-a-travers-champs-new-2017/64680
:::
