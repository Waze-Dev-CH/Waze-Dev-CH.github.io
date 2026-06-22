---
title: Legende der Schweizer Karte
---

# Legende der Schweizer Karte

Die Legende beschreibt die in der Schweiz verwendeten Segmenttypen und wie sie im Waze Map Editor (WME) dargestellt werden. Der Typ wird anhand der vor Ort sichtbaren offiziellen Beschilderung gewählt. Die Farbmarke unter jedem Typ entspricht seiner aktuellen Darstellung in WME.

::: important Die Klassifizierung ist länderspezifisch
Die Strassenklassifizierung unterscheidet sich von Land zu Land. Bevor Sie in der Schweiz bearbeiten, lesen Sie das nationale Wiki. Wenden Sie nicht die Regeln eines Nachbarlandes per Analogie an.
:::

## Segmente und Kreuzungen

Ein Segment ist eine Linie, die durch zwei Punkte begrenzt wird. In WME dienen Segmente dazu, Strassen zu zeichnen. Ein Segment wird in unserem Fall durch eine Kreuzung begrenzt.

<svg class="diagram" viewBox="0 0 760 360" role="img" aria-label="Ein Netz von Segmenten unterschiedlicher Typen, an Knoten in verschiedenen Winkeln verbunden.">
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
  <text class="d-cap" x="556" y="104">Knoten (Kreuzung)</text>
</svg>

## Segmenttypen

Der ursprüngliche WME-Name (auf Englisch) steht in Klammern, da er unabhängig von der Sprache des Editors gleich bleibt.

### Autobahn (Freeway)

<span class="road-chip" style="background:#C577D2" title="Autobahn (Freeway)"></span>

Eine Autobahn hat getrennte Fahrbahnen, ohne Ampeln und ohne Stoppschilder. Sie ist nur über Ein- und Ausfahrten zugänglich. Andere Strassen dürfen nicht damit verbunden werden (ausser Rettungswegen). Viele Nationalstrassen folgen einer Autobahn: in diesem Fall hat die Autobahn-Beschilderung Vorrang. Die Schilder sind grün.

<div class="sign-row">
<img src="/img/legende-carte/c16ea2fbd7a1396bc1c982fb08168e48879a8b93.png" alt="Schweizer Autobahnschild">
<img src="/img/legende-carte/c0699c9cb1ff4a95b48d1fd9b00b2fab9542ff9b.png" alt="Schild Autobahnende">
<img src="/img/legende-carte/d935b7ab6b128977a2e3517fb92afee4f1dc6785.png" alt="Autobahn-Wegweiser">
</div>

### Bundesstrasse (Major Highway)

<span class="road-chip" style="background:#46B8D2" title="Bundesstrasse (Major Highway)"></span>

Eine Bundesstrasse ist eine Autostrasse. Die Schilder der Autostrassen in der Schweiz sind grün.

<div class="sign-row">
<img src="/img/legende-carte/e827a9907ac2e5a5bd1adf16e1184070c5187877.png" alt="Schweizer Autostrassenschild">
<img src="/img/legende-carte/ef5e9ee47fe2f256fc82cf6cf53710c5952b53d3.png" alt="Schild Ende Autostrasse">
</div>

### Landesstrasse (Minor Highway)

<span class="road-chip" style="background:#69BF88" title="Landesstrasse (Minor Highway)"></span>

Eine Landesstrasse ist eine Nationalstrasse. Alle anderen gelben Strassen werden als Hauptstrasse klassiert.

<div class="sign-row">
<img src="/img/legende-carte/10794e9459bcfc37b4036320fd123d30bf65a528.png" alt="Nationalstrassenschild">
<img src="/img/legende-carte/e7143b3bfcdafe2a61239b2e5e8fc9c2375ab9f7.png" alt="Nationalstrassenschild">
<img src="/img/legende-carte/6cea032b690ba2c8ff03c282525635b04008f887.png" alt="Nationalstrassenschild">
</div>

### Rampe (Ramp)

<span class="road-chip" style="background:#B3BFB3" title="Rampe (Ramp)"></span>

Rampen werden für Ein- und Ausfahrten von Autobahnen und Autostrassen verwendet.

<div class="sign-row">
<img src="/img/legende-carte/d9070357827ee97cf0a53169eabc2f847a48fe57.png" alt="Autobahnrampe">
<img src="/img/legende-carte/70783028364b5d3f68db9abbbbf21552db61b405.png" alt="Ausfahrtsschild">
</div>

### Hauptstrasse (Primary Street)

<span class="road-chip" style="background:#F1EA58" title="Hauptstrasse (Primary Street)"></span>

Die Hauptstrasse entspricht den Hauptstrassen innerhalb einer Ortschaft, gemäss der folgenden Beschilderung.

<div class="sign-row">
<img src="/img/legende-carte/8f0a4ee76b3c5ad73da36ba0fda31c01b14259f0.png" alt="Hauptstrassenschild">
<img src="/img/legende-carte/7155655a75375a0a720489cd5f4b16718aa6e9b7.png" alt="Hauptstrassenschild">
<img src="/img/legende-carte/db96e5269c6f2137de9197ee3754048ca647c028.png" alt="Beispiel Hauptstrasse">
<img src="/img/legende-carte/acda4aed89c392695c374d21ce3a6c588c76e3e8.png" alt="Beispiel Hauptstrasse">
<img src="/img/legende-carte/70a24d49a5c45652cc13e58c85ad7dd7ad785bea.png" alt="Beispiel Hauptstrasse">
</div>

### Strasse (Street)

<span class="road-chip" style="background:#ffffff" title="Strasse (Street), weiss dargestellt"></span>

Als Strasse klassieren wir alle Neben- und Quartierstrassen, die dem normalen Verkehr offenstehen, als Einbahn oder im Gegenverkehr. Nebenstrassen tragen weisse Schilder.

::: note Weiss dargestellt
Der Typ Strasse erscheint in WME weiss. Die Marke oben hat einen feinen Rand, damit sie sichtbar bleibt.
:::

<div class="sign-row">
<img src="/img/legende-carte/60652f5793f16bb5865b17c20dea5f1f0b411131.png" alt="Weisses Nebenstrassenschild">
<img src="/img/legende-carte/5ad955f94b7166d6f0f58ccf9101719283867581.png" alt="Weisses Nebenstrassenschild">
<img src="/img/legende-carte/1669f4b889bbecbb00c50f3cd49943a7f2ba669c.png" alt="Weisses Nebenstrassenschild">
</div>

![Beispiel einer normalen Strasse](/img/legende-carte/d645bf0e83126c958200db92665ce0cbd6c8a335.jpeg)

### Schmale Strasse (Narrow Street)

<span class="road-chip" style="background:#64799A" title="Schmale Strasse (Narrow Street)"></span>

Schmale Strasse im Gegenverkehr. Die Anwendungsregeln stehen in [Segmentgeometrie](/de/editors/geometrie-segments).

### Schotterstrasse (Dirt Road / 4x4)

<span class="road-chip" style="background:#867342" title="Schotterstrasse (Dirt Road)"></span>

Schotterstrassen sind unbefestigte Strassen: Waldwege, Traktorwege und 4x4-Pisten.

![Beispiel einer unbefestigten Strasse](/img/legende-carte/b9e0b12d4547e855f420bcd99e7691ff405ceb9d.jpeg)

### Parkplatz (Parking Lot Road)

<span class="road-chip" style="background:#ABABAB" title="Parkplatz (Parking Lot Road)"></span>

Parkplätze sind grosse Parkflächen, Rastplatz-Parkplätze, interne Parkwege und Zufahrten zu Tankstellen.

![Beispiel eines Parkplatzes](/img/legende-carte/2a31cdf4f51fee24022961453bb0dcbe33e61bc0.jpeg)

### Privatstrasse (Private Road)

<span class="road-chip" style="background:#B8B56A" title="Privatstrasse (Private Road)"></span>

Privatstrassen sind alle privaten Strassen, die als solche dargestellt werden.

### Fussweg (Walking Trail)

Fusswege sind alle Fussgängerwege. Sie dürfen niemals zwei routbare Strassen miteinander verbinden.

![Beispiel eines Fusswegs](/img/legende-carte/a859600785f35f6a691f5dff4d99dfe3d30c4648.jpeg)

### Fussgängerzone (Pedestrian Boardwalk)

Fussgängerzonen sind Fussgängerbereiche, einschliesslich Seeuferpromenaden. Gleiche Nicht-Verbindungs-Regel wie bei Fusswegen.

![Beispiel einer Fussgängerzone](/img/legende-carte/b43e72f3de0029121a7a6e5fea0daf4eb6e37923.jpeg)

### Treppe (Stairway)

Treppen sind Treppen. Gleiche Verbindungsbeschränkung.

![Beispiel einer Treppe](/img/legende-carte/28e8a2412a6b5835e4a45f08dfdcfec9f646cf42.jpeg)

### Eisenbahn (Railroad)

Eisenbahnen sind Bahnlinien. In der Regel nicht über den Client erfassen, sondern im Editor. Sie können für Bahnübergänge mit anderen Strassen verbunden werden. Den Namen der Bahngesellschaft als Strassenname eintragen, ohne Ort. Im Level L2 sperren.

### Runway/Taxiway

Runways/Taxiways sind Landebahnen. Sie vervollständigen die Karte, aber es wird nicht empfohlen, alle Flughäfen zu erfassen: ein Place vom Typ Airport genügt.

::: quote Quellen
- Légende de la Carte Suisse: https://www.waze.com/discuss/t/legende-de-la-carte-suisse/377261
- Farben der Strassentypen: von der Schweizer Community geprüfte WME-Palette.
:::
