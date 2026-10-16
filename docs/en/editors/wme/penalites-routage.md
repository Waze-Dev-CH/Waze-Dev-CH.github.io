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

A private road (Private Road), a parking lot (Parking Lot Road), or an unmaintained road apply their penalty on the transition out to another road type, not on entry. See [Parking lot mapping](/en/editors/cartographie/parkings). For a private road crossed by a street, see [Exceptions](#exceptions).

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

## Exceptions

### Private road crossed by a street

When a private road is crossed by a street, its two sections must not meet at the intersection node. On at least one side, insert a short segment of at least 5 meters, **of the same type as the street crossing the private road**, between the intersection and the start of the private road. One side is enough: in both directions, crossing then involves this segment. In the examples below, the street is of type Street.

<svg class="diagram" viewBox="0 0 760 380" role="img" aria-label="Three cases of a private road crossing a street. Without a Street segment, the private road passes directly through the intersection node: no private road penalty, avoid this. With a Street segment on one side: correct, exiting the private road triggers the penalty. With a Street segment on each side: also correct.">
  <rect class="d-panel" x="16" y="16" width="236" height="348" rx="16" />
  <rect class="d-panel" x="262" y="16" width="236" height="348" rx="16" />
  <rect class="d-panel" x="508" y="16" width="236" height="348" rx="16" />

  <text class="d-cap" x="36" y="52">No Street segment</text>
  <text class="d-penalty" x="36" y="76">Avoid</text>
  <text class="d-cap" x="282" y="52">One Street segment</text>
  <text class="d-sub" x="282" y="76">Correct, sufficient</text>
  <text class="d-cap" x="528" y="52">Two Street segments</text>
  <text class="d-sub" x="528" y="76">Also correct</text>

  <line class="d-casing" x1="38" y1="235" x2="230" y2="235" />
  <line class="d-casing" x1="134" y1="120" x2="134" y2="340" />
  <line class="d-road d-private" x1="38" y1="235" x2="230" y2="235" />
  <line class="d-road d-street" x1="134" y1="120" x2="134" y2="340" />

  <line class="d-casing" x1="284" y1="235" x2="476" y2="235" />
  <line class="d-casing" x1="380" y1="120" x2="380" y2="340" />
  <line class="d-road d-private" x1="284" y1="235" x2="336" y2="235" />
  <line class="d-road d-street" x1="336" y1="235" x2="380" y2="235" />
  <line class="d-road d-private" x1="380" y1="235" x2="476" y2="235" />
  <line class="d-road d-street" x1="380" y1="120" x2="380" y2="340" />

  <line class="d-casing" x1="530" y1="235" x2="722" y2="235" />
  <line class="d-casing" x1="626" y1="120" x2="626" y2="340" />
  <line class="d-road d-private" x1="530" y1="235" x2="582" y2="235" />
  <line class="d-road d-street" x1="582" y1="235" x2="670" y2="235" />
  <line class="d-road d-private" x1="670" y1="235" x2="722" y2="235" />
  <line class="d-road d-street" x1="626" y1="120" x2="626" y2="340" />

  <circle class="d-end" cx="38" cy="235" r="5" />
  <circle class="d-end" cx="230" cy="235" r="5" />
  <circle class="d-end" cx="134" cy="120" r="5" />
  <circle class="d-end" cx="134" cy="340" r="5" />
  <circle class="d-junction" cx="134" cy="235" r="9" />

  <circle class="d-end" cx="284" cy="235" r="5" />
  <circle class="d-end" cx="476" cy="235" r="5" />
  <circle class="d-end" cx="380" cy="120" r="5" />
  <circle class="d-end" cx="380" cy="340" r="5" />
  <circle class="d-junction" cx="336" cy="235" r="7" />
  <circle class="d-junction" cx="380" cy="235" r="9" />

  <circle class="d-end" cx="530" cy="235" r="5" />
  <circle class="d-end" cx="722" cy="235" r="5" />
  <circle class="d-end" cx="626" cy="120" r="5" />
  <circle class="d-end" cx="626" cy="340" r="5" />
  <circle class="d-junction" cx="582" cy="235" r="7" />
  <circle class="d-junction" cx="626" cy="235" r="9" />
  <circle class="d-junction" cx="670" cy="235" r="7" />

  <text class="d-sub" x="40" y="272">Private road</text>
  <text class="d-sub" x="146" y="140">Street</text>
  <text class="d-sub" x="286" y="272">Private road</text>
  <text class="d-sub" x="392" y="140">Street</text>
  <text class="d-sub" x="532" y="272">Private road</text>
  <text class="d-sub" x="638" y="140">Street</text>

  <text class="d-sub" x="120" y="180" text-anchor="end">no</text>
  <text class="d-sub" x="120" y="197" text-anchor="end">penalty</text>
  <line class="d-lead" x1="114" y1="204" x2="126" y2="225" />
  <line class="d-arrow" x1="42" y1="214" x2="74" y2="214" />
  <polyline class="d-arrow" points="67,209 74,214 67,219" />

  <text class="d-penalty" x="336" y="196" text-anchor="middle">penalty</text>
  <line class="d-lead" x1="336" y1="203" x2="336" y2="224" />
  <line class="d-arrow" x1="288" y1="214" x2="320" y2="214" />
  <polyline class="d-arrow" points="313,209 320,214 313,219" />

  <text class="d-penalty" x="582" y="196" text-anchor="middle">penalty</text>
  <line class="d-lead" x1="582" y1="203" x2="582" y2="224" />
  <line class="d-arrow" x1="534" y1="214" x2="566" y2="214" />
  <polyline class="d-arrow" points="559,209 566,214 559,219" />

</svg>

**Why.** The private road penalty applies on **exit** to another road type, not on entry. If both private sections connect directly to the node, crossing straight ahead remains a transition from private to private: no private road penalty at the intersection. A series of private roads then triggers only one penalty, at the final exit to another road type, and Waze may select it as a shortcut for through traffic.

With a Street segment, each crossing of the street from a private road triggers a penalty on exiting the private section. These penalties add up and make the shortcut less advantageous in route calculation.

![Chemin de Sorécot and Chemin de Pre-Louis: here a Street segment on each side of the intersection (dotted selection)](/penalites/voie-privee-croisement.jpg)

::: important Why not a turn restriction
A hard turn restriction prohibits the manoeuvre for everyone, including authorized users and drivers who want to reach a destination on the road. The penalty keeps the manoeuvre possible while making it less favourable in route calculation.
:::

::: warning Warning
- Respect the minimum of 5 meters per segment ([micro-segments](/en/editors/cartographie/geometrie-segments#micro-segments)).
- Give the intermediate segment or segments the same type as the street crossing the private road.
:::

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
