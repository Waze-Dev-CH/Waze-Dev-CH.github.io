---
title: Map legend
description: Segment types available in the Waze Map Editor and how they are used in Switzerland.
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/map-city.png" alt="">

# Swiss map legend

::: tip Accessible to everyone: Level L1
This page is intended for all editors, including beginners.
:::

The legend describes the segment types used in Switzerland and how they are displayed in the Waze editor (WME). The type is chosen based on the official signage visible on the ground. The colored dot below each type corresponds to its current display in WME.

::: important Classification is specific to each country
Road classification differs from one country to another. Before editing in Switzerland, read the national Wiki. Do not apply the rules of a neighboring country by analogy.
:::

## Segments and junctions

A segment is a line bounded by two points. In WME, segments are used to draw streets. In our case, a segment is delimited by a junction.

<svg class="diagram" viewBox="0 0 760 360" role="img" aria-label="A network of segments of different types connected by nodes, at various angles.">
  <rect class="d-panel" x="16" y="16" width="728" height="328" rx="16" />

  <polyline class="d-casing" points="70,225 255,285 475,150 690,190" />
  <polyline class="d-casing" points="150,70 255,285" />
  <polyline class="d-casing" points="475,150 560,330" />
  <polyline class="d-casing" points="255,285 95,330" />

  <polyline class="d-road d-major" points="70,225 255,285 475,150 690,190" />
  <polyline class="d-road d-minor" points="150,70 255,285" />
  <polyline class="d-road d-primary" points="475,150 560,330" />
  <polyline class="d-road d-street" points="255,285 95,330" />

  <circle class="d-end" cx="70" cy="225" r="5" />
  <circle class="d-end" cx="690" cy="190" r="5" />
  <circle class="d-end" cx="150" cy="70" r="5" />
  <circle class="d-end" cx="560" cy="330" r="5" />
  <circle class="d-end" cx="95" cy="330" r="5" />
  <circle class="d-junction" cx="255" cy="285" r="10" />
  <circle class="d-junction" cx="475" cy="150" r="10" />

  <line class="d-lead" x1="120" y1="150" x2="198" y2="178" />
  <text class="d-cap" x="60" y="145">Segment</text>
  <line class="d-lead" x1="548" y1="108" x2="486" y2="142" />
  <text class="d-cap" x="556" y="104">Node (junction)</text>
</svg>

## Segment types

The original WME name (in English) is shown in parentheses, since it stays the same regardless of the editor language.

### Freeway

<span class="road-chip" style="background:#C577D2" title="Freeway"></span>

A Freeway has separated carriageways, with no traffic lights or stop signs. It is accessible only through entrances and exits. Other streets must not be connected to it (except emergency service lanes). Many national roads follow a freeway: in that case, the freeway signage takes priority. The signs are green.

<div class="sign-row">
<img src="/img/legende-carte/c16ea2fbd7a1396bc1c982fb08168e48879a8b93.png" alt="Swiss freeway sign">
<img src="/img/legende-carte/c0699c9cb1ff4a95b48d1fd9b00b2fab9542ff9b.png" alt="End of freeway sign">
<img src="/img/legende-carte/d935b7ab6b128977a2e3517fb92afee4f1dc6785.png" alt="Freeway direction sign">
</div>

### Major Highway

<span class="road-chip" style="background:#46B8D2" title="Major Highway"></span>

A Major Highway is an expressway. Expressway signs in Switzerland are green.

<div class="sign-row">
<img src="/img/legende-carte/e827a9907ac2e5a5bd1adf16e1184070c5187877.png" alt="Swiss expressway sign">
<img src="/img/legende-carte/ef5e9ee47fe2f256fc82cf6cf53710c5952b53d3.png" alt="End of expressway sign">
</div>

### Minor Highway

<span class="road-chip" style="background:#69BF88" title="Minor Highway"></span>

A Minor Highway is a national road. All other yellow roads are classified as Primary Street.

<div class="sign-row">
<img src="/img/legende-carte/10794e9459bcfc37b4036320fd123d30bf65a528.png" alt="National road sign">
<img src="/img/legende-carte/e7143b3bfcdafe2a61239b2e5e8fc9c2375ab9f7.png" alt="National road sign">
<img src="/img/legende-carte/6cea032b690ba2c8ff03c282525635b04008f887.png" alt="National road sign">
</div>

### Ramp

<span class="road-chip" style="background:#B3BFB3" title="Ramp"></span>

Ramps are used for freeway and expressway entrances and exits.

<div class="sign-row">
<img src="/img/legende-carte/d9070357827ee97cf0a53169eabc2f847a48fe57.png" alt="Freeway ramp">
<img src="/img/legende-carte/70783028364b5d3f68db9abbbbf21552db61b405.png" alt="Exit sign">
</div>

### Primary Street

<span class="road-chip" style="background:#F1EA58" title="Primary Street"></span>

Primary Street corresponds to the main roads within a locality, according to the following signage.

<div class="sign-row">
<img src="/img/legende-carte/8f0a4ee76b3c5ad73da36ba0fda31c01b14259f0.png" alt="Main road sign">
<img src="/img/legende-carte/7155655a75375a0a720489cd5f4b16718aa6e9b7.png" alt="Main road sign">
<img src="/img/legende-carte/db96e5269c6f2137de9197ee3754048ca647c028.png" alt="Primary Street example">
<img src="/img/legende-carte/acda4aed89c392695c374d21ce3a6c588c76e3e8.png" alt="Primary Street example">
<img src="/img/legende-carte/70a24d49a5c45652cc13e58c85ad7dd7ad785bea.png" alt="Primary Street example">
</div>

### Street

<span class="road-chip" style="background:#ffffff" title="Street, displayed in white"></span>

Under Street, we classify all secondary and neighborhood roads open to normal traffic, whether one-way or two-way. Secondary roads have white signs.

::: note Displayed in white
Street is displayed in white in WME. The dot above is outlined with a thin border to remain visible.
:::

<div class="sign-row">
<img src="/img/legende-carte/60652f5793f16bb5865b17c20dea5f1f0b411131.png" alt="White secondary street sign">
<img src="/img/legende-carte/5ad955f94b7166d6f0f58ccf9101719283867581.png" alt="White secondary street sign">
<img src="/img/legende-carte/1669f4b889bbecbb00c50f3cd49943a7f2ba669c.png" alt="White secondary street sign">
</div>

![Example of a normal road](/img/legende-carte/d645bf0e83126c958200db92665ce0cbd6c8a335.jpeg)

### Narrow Street

<span class="road-chip" style="background:#64799A" title="Narrow Street"></span>

Narrow two-way lane. The usage rules are described in [Segment geometry](/en/editors/cartographie/geometrie-segments).

### Dirt Road / 4x4

<span class="road-chip" style="background:#867342" title="Dirt Road"></span>

Dirt Roads are unpaved roads: forest roads, tractor tracks and 4x4 trails.

![Example of an unpaved road](/img/legende-carte/b9e0b12d4547e855f420bcd99e7691ff405ceb9d.jpeg)

### Parking Lot Road

<span class="road-chip" style="background:#ABABAB" title="Parking Lot Road"></span>

Parking Lot Roads are large parking lots, highway rest area parking lots, internal parking lanes and access roads to gas stations.

![Example of a parking lot](/img/legende-carte/2a31cdf4f51fee24022961453bb0dcbe33e61bc0.jpeg)

### Private Road

<span class="road-chip" style="background:#B8B56A" title="Private Road"></span>

Private Roads are all private streets displayed as such.

### Walking Trail

Walking Trails are all pedestrian paths. They must never connect two routable roads together.

![Example of a pedestrian path](/img/legende-carte/a859600785f35f6a691f5dff4d99dfe3d30c4648.jpeg)

### Pedestrian Boardwalk

Pedestrian Boardwalks are pedestrian zones, including lakeside promenades. Same non-connection rule as Walking Trails.

![Example of a pedestrian zone](/img/legende-carte/b43e72f3de0029121a7a6e5fea0daf4eb6e37923.jpeg)

### Stairway

Stairways are staircases. Same connection restriction.

![Example of a staircase](/img/legende-carte/28e8a2412a6b5835e4a45f08dfdcfec9f646cf42.jpeg)

### Railroad

Railroads are railway lines. In general, do not record them via the client but in the editor. They can be connected to other streets for level crossings. Enter the company name as the street name, without a city. Lock at level L5.

### Runway/Taxiway

Runway/Taxiway are landing strips. They complete the map, but it is not advisable to map every airport: a landmark (a Place of type Airport) is enough.

::: note Note
The segment type has a direct impact on route calculation. An incorrect classification can lead to inconsistent routes. When in doubt, refer to the [Swiss editing rules](/en/editors/cartographie/regles-edition).
:::

::: quote Source(s)
- Swiss Map Legend: https://www.waze.com/discuss/t/legende-de-la-carte-suisse/377261
- Road type colors: WME palette verified by the Swiss community.
:::
