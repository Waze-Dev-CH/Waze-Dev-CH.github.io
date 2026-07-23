---
title: Routing penalties
description: How Waze penalizes certain manoeuvres and road types in route calculation, and what constitutes an absolute restriction.
order: 4.5
---

<img class="banner-img is-narrow" src="/img/editors/traffic.png" alt="">

# Routing penalties

## Concept of penalties

A routing penalty is additional time, invisible in the estimated time of arrival (ETA), added by the routing server to a candidate route to avoid an undesirable situation. The penalty does not block a route: it makes an alternative preferred when one exists.

::: important Important
The exact values of penalties are proprietary and not public. You must not disseminate precise figures on penalties applied.
:::

Historically, Waze supported two map environments for a long time (manually edited maps and imported maps without correction). This architecture led to a penalties system rather than an absolute restrictions system, to handle unverified or uncertain cases.

## Penalties related to segment properties

### Restricted and allowed turns

A soft restricted turn (red arrow with a purple question mark in WME) applies a high penalty. This penalty still allows routing on never-verified turns when no alternative exists.

A soft allowed turn (green arrow with a purple question mark) applies a very low penalty.

For turn restrictions in general, consult the [Turn restrictions](/en/editors/wme/restrictions-virage) page.

### Difficult turns

Difficult turns are penalized according to driver preference and are enabled by default in the Waze app. See the [Difficult turns](/en/editors/wme/virages-difficiles) page for more information about their configuration.

### Unpaved roads

An unpaved road (Unpaved) is penalized according to driver preferences: "avoid unpaved roads" option (enabled by default) and "avoid long sections" option beyond approximately 300 meters. See [Farm roads](/en/editors/cartographie/chemins-agricoles).

### Toll roads

Toll roads (Toll) receive an increased penalty for drivers who have enabled the "avoid tolls" option.

### Freeways

Freeways (Freeway) are penalized only if the driver has enabled "avoid freeways", an option disabled by default.

### Ferries

Ferries receive a penalty only if the driver has enabled "avoid ferries", an option disabled by default.

### Private roads, parking lots and unmaintained roads

A private road (Private Road), a parking lot (Parking Lot Road), or an unmaintained road apply their penalty on the transition out to another road type, not on entry. See [Parking lot mapping](/en/editors/cartographie/parkings).

### Passageways

A passageway (Passageway) receives a high penalty, except for motorcycles. Note: in the United States, use of this type has been subject to approval since October 2018 (US local rule).

## Penalties related to network configuration

### U-turns

Historically, U-turns were penalized on double left or right turns at the end of short segments. In the United States, this penalty was disabled in December 2021. The current recommendation is to use a junction box to prevent unwanted U-turns on divided highways.

![Segment too short to allow two successive left turns](/penalites/segment-trop-court.png)

### Detour prevention

The detour prevention mechanism penalizes routes that exit a freeway to return to it immediately, that pass through the same node or junction box twice, or that make loops.

![Correctly mapped ramps prevent a detour exit and immediate return](/penalites/detour-bretelles.png)

### Many short segments

A slight penalty applies to routes containing many short segments, particularly recently created segments without available historical traffic data.

## Absolute restrictions

Unlike penalties, certain situations completely prohibit passage without exception:

- **Road closure**: see [Road closures](/en/editors/wme/fermetures)
- **Hard restricted turn** (red arrow without question mark): absolute prohibition. Historically, this was a penalty, but this behavior evolved.
- **Turn or segment time restrictions**: according to their conditions
- **Driving against the direction** of a one-way road
- **Non-drivable types**: railroad (Railroad), runway (Runway), pedestrian paths
- **Segment disconnected** from the network

::: important Important
Since hard turn restrictions became absolute, it is useless and harmful to disconnect or delete segments to prevent routing. Instead, configure a turn restriction or closure if necessary.
:::

## See also

- [Routing basics](/en/editors/wme/routing)
- [Turn restrictions](/en/editors/wme/restrictions-virage)
- [Difficult turns](/en/editors/wme/virages-difficiles)
- [Farm roads](/en/editors/cartographie/chemins-agricoles)
- [Road closures](/en/editors/wme/fermetures)
- [Parking lot mapping](/en/editors/cartographie/parkings)

::: quote Sources
- Routing penalties (official Waze forum): https://www.waze.com/discuss/t/routing-penalties/377968
:::
