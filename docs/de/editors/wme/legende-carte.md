---
title: Kartenlegende
description: Verfügbare Segmenttypen im Waze Map Editor und ihre Verwendung in der Schweiz.
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/map-city.png" alt="">

# Legende der Schweizer Karte

::: tip Für alle zugänglich: Stufe L1
Diese Seite richtet sich an alle Editoren, auch an Anfänger.
:::

Die Legende beschreibt die in der Schweiz verwendeten Segmenttypen und wie sie im Waze Map Editor (WME) angezeigt werden. Der Typ wird anhand der offiziellen Beschilderung vor Ort gewählt. Der Farbpunkt unter jedem Typ entspricht seiner aktuellen Darstellung im WME.

::: important Die Klassifizierung ist länderspezifisch
Die Strassenklassifizierung unterscheidet sich von Land zu Land. Bevor Sie in der Schweiz editieren, lesen Sie das nationale Wiki. Wenden Sie die Regeln eines Nachbarlandes nicht per Analogie an.
:::

## Segmente und Kreuzungen

Ein Segment ist eine durch zwei Punkte begrenzte Linie. Im WME dienen Segmente dazu, Strassen zu zeichnen. Ein Segment wird in unserem Fall durch eine Kreuzung begrenzt.

<svg class="diagram" viewBox="0 0 760 360" role="img" aria-label="Ein Netz aus Segmenten unterschiedlicher Typen, verbunden durch Knoten in verschiedenen Winkeln.">
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

Der ursprüngliche WME-Name (auf Englisch) wird in Klammern angegeben, da er unabhängig von der Sprache des Editors gleich bleibt.

### Autobahn (Freeway)

<span class="road-chip" style="background:#C577D2" title="Autobahn (Freeway)"></span>

Eine Autobahn hat getrennte Fahrbahnen, ohne Ampeln oder Stoppschilder. Sie ist nur über Ein- und Ausfahrten zugänglich. Andere Strassen dürfen nicht mit ihr verbunden werden (ausser Notdienst-Zufahrten). Viele Nationalstrassen verlaufen entlang einer Autobahn: In diesem Fall hat die Autobahn-Beschilderung Vorrang. Die Schilder sind grün.

<div class="sign-row">
<img src="/img/legende-carte/c16ea2fbd7a1396bc1c982fb08168e48879a8b93.png" alt="Schweizer Autobahnschild">
<img src="/img/legende-carte/c0699c9cb1ff4a95b48d1fd9b00b2fab9542ff9b.png" alt="Schild Ende der Autobahn">
<img src="/img/legende-carte/d935b7ab6b128977a2e3517fb92afee4f1dc6785.png" alt="Autobahn-Wegweiser">
</div>

### Hauptstrasse (Major Highway)

<span class="road-chip" style="background:#46B8D2" title="Hauptstrasse (Major Highway)"></span>

Eine Major Highway ist eine Autostrasse. Die Schilder für Autostrassen in der Schweiz sind grün.

<div class="sign-row">
<img src="/img/legende-carte/e827a9907ac2e5a5bd1adf16e1184070c5187877.png" alt="Schweizer Autostrassenschild">
<img src="/img/legende-carte/ef5e9ee47fe2f256fc82cf6cf53710c5952b53d3.png" alt="Schild Ende der Autostrasse">
</div>

### Nebenstrasse (Minor Highway)

<span class="road-chip" style="background:#69BF88" title="Nebenstrasse (Minor Highway)"></span>

Eine Minor Highway ist eine Nationalstrasse. Alle anderen gelben Strassen werden als Primary Street klassifiziert.

<div class="sign-row">
<img src="/img/legende-carte/10794e9459bcfc37b4036320fd123d30bf65a528.png" alt="Nationalstrassenschild">
<img src="/img/legende-carte/e7143b3bfcdafe2a61239b2e5e8fc9c2375ab9f7.png" alt="Nationalstrassenschild">
<img src="/img/legende-carte/6cea032b690ba2c8ff03c282525635b04008f887.png" alt="Nationalstrassenschild">
</div>

### Auffahrt (Ramp)

<span class="road-chip" style="background:#B3BFB3" title="Auffahrt (Ramp)"></span>

Die Auffahrten dienen den Ein- und Ausfahrten von Autobahnen und Autostrassen.

<div class="sign-row">
<img src="/img/legende-carte/d9070357827ee97cf0a53169eabc2f847a48fe57.png" alt="Autobahnauffahrt">
<img src="/img/legende-carte/70783028364b5d3f68db9abbbbf21552db61b405.png" alt="Ausfahrtsschild">
</div>

### Hauptstrasse in Ortschaft (Primary Street)

<span class="road-chip" style="background:#F1EA58" title="Hauptstrasse in Ortschaft (Primary Street)"></span>

Die Primary Street entspricht den Hauptstrassen innerorts, gemäss der folgenden Beschilderung.

<div class="sign-row">
<img src="/img/legende-carte/8f0a4ee76b3c5ad73da36ba0fda31c01b14259f0.png" alt="Hauptstrassenschild">
<img src="/img/legende-carte/7155655a75375a0a720489cd5f4b16718aa6e9b7.png" alt="Hauptstrassenschild">
<img src="/img/legende-carte/db96e5269c6f2137de9197ee3754048ca647c028.png" alt="Beispiel Primary Street">
<img src="/img/legende-carte/acda4aed89c392695c374d21ce3a6c588c76e3e8.png" alt="Beispiel Primary Street">
<img src="/img/legende-carte/70a24d49a5c45652cc13e58c85ad7dd7ad785bea.png" alt="Beispiel Primary Street">
</div>

### Strasse (Street)

<span class="road-chip" style="background:#ffffff" title="Strasse (Street), in Weiss dargestellt"></span>

Als Strasse werden alle Neben- und Quartierstrassen klassifiziert, die für den normalen Verkehr zugänglich sind, als Einbahnstrasse oder in beiden Richtungen. Die Nebenstrassen tragen weisse Schilder.

::: note In Weiss dargestellt
Die Strasse (Street) wird im WME in Weiss dargestellt. Der obige Punkt ist mit einem feinen Rand umgeben, damit er sichtbar bleibt.
:::

<div class="sign-row">
<img src="/img/legende-carte/60652f5793f16bb5865b17c20dea5f1f0b411131.png" alt="Weisses Schild einer Nebenstrasse">
<img src="/img/legende-carte/5ad955f94b7166d6f0f58ccf9101719283867581.png" alt="Weisses Schild einer Nebenstrasse">
<img src="/img/legende-carte/1669f4b889bbecbb00c50f3cd49943a7f2ba669c.png" alt="Weisses Schild einer Nebenstrasse">
</div>

![Beispiel einer normalen Strasse](/img/legende-carte/d645bf0e83126c958200db92665ce0cbd6c8a335.jpeg)

### Schmale Strasse (Narrow Street)

<span class="road-chip" style="background:#64799A" title="Schmale Strasse (Narrow Street)"></span>

Schmale Fahrbahn in beiden Richtungen. Die Anwendungsregeln finden sich in [Geometrie der Segmente](/de/editors/cartographie/geometrie-segments).

### Feldweg (Dirt Road / 4x4)

<span class="road-chip" style="background:#867342" title="Feldweg (Dirt Road)"></span>

Die Feldwege sind die nicht asphaltierten Strassen: Waldstrassen, Traktorwege und 4x4-Pisten.

![Beispiel einer nicht asphaltierten Strasse](/img/legende-carte/b9e0b12d4547e855f420bcd99e7691ff405ceb9d.jpeg)

### Parkplatzweg (Parking Lot Road)

<span class="road-chip" style="background:#ABABAB" title="Parkplatzweg (Parking Lot Road)"></span>

Die Parkplatzwege sind grosse Parkplätze, Raststätten-Parkplätze, interne Parkplatzwege und Zufahrten zu Tankstellen.

![Beispiel eines Parkplatzes](/img/legende-carte/2a31cdf4f51fee24022961453bb0dcbe33e61bc0.jpeg)

### Privatstrasse (Private Road)

<span class="road-chip" style="background:#B8B56A" title="Privatstrasse (Private Road)"></span>

Die Privatstrassen sind alle privaten Strassen, die als solche ausgewiesen sind.

### Walking Trail

Die Walking Trails sind alle Fusswege. Sie dürfen niemals zwei routbare Strassen miteinander verbinden.

![Beispiel eines Fusswegs](/img/legende-carte/a859600785f35f6a691f5dff4d99dfe3d30c4648.jpeg)

### Pedestrian Boardwalk

Die Pedestrian Boardwalks sind Fussgängerzonen, einschliesslich der Uferpromenaden an Seen. Es gilt dieselbe Regel der Nicht-Verbindung wie bei den Walking Trails.

![Beispiel einer Fussgängerzone](/img/legende-carte/b43e72f3de0029121a7a6e5fea0daf4eb6e37923.jpeg)

### Stairway

Die Stairways sind Treppen. Es gilt dieselbe Verbindungsbeschränkung.

![Beispiel einer Treppe](/img/legende-carte/28e8a2412a6b5835e4a45f08dfdcfec9f646cf42.jpeg)

### Bahngleis (Railroad)

Die Bahngleise sind die Eisenbahnen. Im Allgemeinen sollten sie nicht über den Client, sondern im Editor erfasst werden. Sie können für Bahnübergänge mit anderen Strassen verbunden werden. Geben Sie den Namen der Gesellschaft als Strassennamen an, ohne Ortschaft. Auf Stufe L5 sperren.

### Runway/Taxiway

Die Runway/Taxiway sind die Start- und Landebahnen. Sie ergänzen die Karte, es wird jedoch nicht empfohlen, alle Flughäfen zu kartieren: Eine Markierung (Place vom Typ Airport) genügt.

::: note Notiz
Der Segmenttyp hat einen direkten Einfluss auf die Routenberechnung. Eine falsche Klassifizierung kann zu unstimmigen Routen führen. Im Zweifelsfall konsultieren Sie die [Schweizer Editierregeln](/de/editors/cartographie/regles-edition).
:::

::: quote Quelle(n)
- Legende der Schweizer Karte: https://www.waze.com/discuss/t/legende-de-la-carte-suisse/377261
- Farben der Strassentypen: von der Schweizer Community verifizierte WME-Palette.
:::
