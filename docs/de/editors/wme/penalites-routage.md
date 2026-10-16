---
title: Routing-Strafen
description: Wie Waze bestimmte Manöver und Strassentypen bei der Routenberechnung benachteiligt und welche Beschränkungen absolut sind.
order: 4.5
---

<img class="banner-img is-narrow" src="/img/editors/traffic.png" alt="">

# Routing-Strafen

## Konzept der Strafen

Eine Routing-Strafe ist eine zusätzliche Zeit, die der Routing-Server zu einer Kandidatenroute hinzufügt, um eine unerwünschte Situation zu vermeiden. Sie bleibt in der geschätzten Ankunftszeit (ETA) unsichtbar. Die Strafe blockiert keine Route: Sie führt dazu, dass eine Alternative bevorzugt wird, wenn es eine gibt.

::: important Wichtig
Die genauen Werte der Strafen sind proprietär und nicht öffentlich. Genaue Zahlen zu den angewendeten Strafen dürfen nicht verbreitet werden.
:::

Historisch hat Waze lange zwei Kartenumgebungen unterstützt (manuell bearbeitete Karten und importierte Karten ohne Korrektur). Diese Architektur führte zu einem System mit Strafen statt absoluter Verbote, um nicht überprüfte oder unsichere Fälle abzudecken.

## Strafen für Segmenteigenschaften

### Weich eingeschränktes und weich erlaubtes Abbiegen

Ein "weich" eingeschränktes Abbiegen (soft restricted turn, roter Pfeil mit violettem Fragezeichen im WME) erhält eine hohe Strafe. Diese Strafe ermöglicht trotzdem das Routing über nie überprüfte Abbiegungen, wenn keine Alternative existiert.

Ein "weich" erlaubtes Abbiegen (soft allowed turn, grüner Pfeil mit violettem Fragezeichen) erhält eine sehr geringe Strafe.

Für Abbiegebeschränkungen allgemein siehe [Abbiegebeschränkungen](/de/editors/wme/restrictions-virage).

### Schwierige Abbiegungen

Schwierige Abbiegungen (difficult turn) werden gemäss der Präferenz des Fahrers bestraft; die Option ist in der Waze-App standardmässig aktiviert. Siehe [Schwierige Abbiegungen](/de/editors/wme/virages-difficiles) für weitere Informationen zu ihrer Konfiguration.

### Unbefestigte Strassen

Eine unbefestigte Strasse (Unpaved) wird gemäss den Präferenzen des Fahrers bestraft: Option "unbefestigte Strassen vermeiden" (standardmässig aktiviert) und Option "lange Abschnitte vermeiden" ab etwa 300 Metern. Siehe [Landwirtschaftliche Wege](/de/editors/cartographie/chemins-agricoles).

### Mautstrassen

Mautstrassen (Toll) erhalten eine erhöhte Strafe für Fahrer, welche die Option "Mautstrassen vermeiden" aktiviert haben.

### Autobahnen

Autobahnen (Freeway) werden nur bestraft, wenn der Fahrer "Autobahnen vermeiden" aktiviert hat, eine standardmässig deaktivierte Option.

### Fähren

Fähren erhalten nur eine Strafe, wenn der Fahrer "Fähren vermeiden" aktiviert hat, eine standardmässig deaktivierte Option.

### Private Strassen, Parkplätze und ungepflegte Wege

Bei einer privaten Strasse (Private Road), einem Parkplatzweg (Parking Lot Road) oder einem ungepflegten Weg gilt die Strafe beim Übergang von diesem Typ zu einem anderen Strassentyp, also bei der Ausfahrt, nicht bei der Einfahrt. Siehe [Kartierung von Parkplätzen](/de/editors/cartographie/parkings). Für eine private Strasse, die von einer Strasse gekreuzt wird, siehe [Ausnahmen](#ausnahmen).

### Enge Durchgänge

Ein enger Durchgang (Passageway) erhält eine hohe Strafe, ausser für Motorräder. Hinweis: In den USA unterliegt die Verwendung dieses Typs seit Oktober 2018 einer Genehmigungspflicht (lokale US-Regel).

## Strafen für die Netzkonfiguration

### Wendemanöver

Historisch wurden Wendemanöver (U-turns) über doppeltes Links- oder Rechtsabbiegen am Ende kurzer Segmente bestraft. In den USA wurde diese Strafe im Dezember 2021 deaktiviert. Die aktuelle Empfehlung ist, eine Junction Box zu verwenden, um unerwünschte Wendemanöver auf Strassen mit getrennten Fahrbahnen zu verhindern.

![Segment zu kurz, um zwei aufeinanderfolgende Linksabbiegungen zu erlauben](/penalites/segment-trop-court.png)

### Vermeidung von Umwegen

Der Mechanismus zur Vermeidung von Umwegen (detour prevention) bestraft Routen, die eine Autobahn verlassen, um sofort wieder auf sie zurückzukehren, die zweimal denselben Knoten oder dieselbe Junction Box durchfahren, oder die Schleifen bilden.

![Korrekt kartierte Auf- und Abfahrten verhindern eine Ausfahrt mit sofortiger Rückkehr](/penalites/detour-bretelles.png)

### Viele kurze Segmente

Eine geringe Strafe gilt für Routen mit vielen kurzen Segmenten, insbesondere kürzlich erstellten Segmenten ohne verfügbare historische Verkehrsdaten.

## Ausnahmen

### Private Strasse von einer Strasse gekreuzt

Wenn eine private Strasse von einer Strasse gekreuzt wird, dürfen sich ihre beiden Abschnitte nicht am Kreuzungsknoten berühren. Auf mindestens einer Seite wird zwischen der Kreuzung und dem Beginn der privaten Strasse ein kurzes Segment von mindestens 5 Metern eingefügt, **mit demselben Typ wie die Strasse, die die private Strasse kreuzt**. Eine Seite genügt: In beiden Richtungen führt die Querung dann über dieses Segment. In den folgenden Beispielen ist die kreuzende Strasse vom Typ Strasse (Street).

<svg class="diagram" viewBox="0 0 760 380" role="img" aria-label="Drei Fälle einer Kreuzung zwischen einer privaten Strasse und einer Strasse. Ohne Strasse-Segment führt die private Strasse direkt durch den Kreuzungsknoten: keine Strafe für die private Strasse, zu vermeiden. Mit einem Strasse-Segment auf einer Seite: korrekt, die Ausfahrt aus der privaten Strasse löst die Strafe aus. Mit einem Strasse-Segment auf jeder Seite: ebenfalls korrekt.">
  <rect class="d-panel" x="16" y="16" width="236" height="348" rx="16" />
  <rect class="d-panel" x="262" y="16" width="236" height="348" rx="16" />
  <rect class="d-panel" x="508" y="16" width="236" height="348" rx="16" />

  <text class="d-cap" x="36" y="52">Kein Strasse-Segment</text>
  <text class="d-penalty" x="36" y="76">Vermeiden</text>
  <text class="d-cap" x="282" y="52">Ein Strasse-Segment</text>
  <text class="d-sub" x="282" y="76">Korrekt, ausreichend</text>
  <text class="d-cap" x="528" y="52">Zwei Strasse-Segmente</text>
  <text class="d-sub" x="528" y="76">Auch korrekt</text>

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

  <text class="d-sub" x="40" y="272">Private</text>
  <text class="d-sub" x="40" y="289">Strasse</text>
  <text class="d-sub" x="146" y="140">Strasse</text>
  <text class="d-sub" x="286" y="272">Private</text>
  <text class="d-sub" x="286" y="289">Strasse</text>
  <text class="d-sub" x="392" y="140">Strasse</text>
  <text class="d-sub" x="532" y="272">Private</text>
  <text class="d-sub" x="532" y="289">Strasse</text>
  <text class="d-sub" x="638" y="140">Strasse</text>

  <text class="d-sub" x="120" y="180" text-anchor="end">keine</text>
  <text class="d-sub" x="120" y="197" text-anchor="end">Strafe</text>
  <line class="d-lead" x1="114" y1="204" x2="126" y2="225" />
  <line class="d-arrow" x1="42" y1="214" x2="74" y2="214" />
  <polyline class="d-arrow" points="67,209 74,214 67,219" />

  <text class="d-penalty" x="336" y="196" text-anchor="middle">Strafe</text>
  <line class="d-lead" x1="336" y1="203" x2="336" y2="224" />
  <line class="d-arrow" x1="288" y1="214" x2="320" y2="214" />
  <polyline class="d-arrow" points="313,209 320,214 313,219" />

  <text class="d-penalty" x="582" y="196" text-anchor="middle">Strafe</text>
  <line class="d-lead" x1="582" y1="203" x2="582" y2="224" />
  <line class="d-arrow" x1="534" y1="214" x2="566" y2="214" />
  <polyline class="d-arrow" points="559,209 566,214 559,219" />

</svg>

**Warum.** Die Strafe für eine private Strasse gilt bei der **Ausfahrt** zu einem anderen Strassentyp, nicht bei der Einfahrt. Wenn beide privaten Abschnitte direkt an den Knoten anschliessen, bleibt die gerade Querung ein Übergang von privat zu privat: keine Strafe für die private Strasse an der Kreuzung. Eine Folge privater Strassen löst dann nur eine einzige Strafe aus, bei der letzten Ausfahrt zu einem anderen Strassentyp, und Waze kann sie als Abkürzung für den Durchgangsverkehr wählen.

Mit einem Strasse-Segment löst jede Querung der Strasse von einer privaten Strasse aus eine Strafe bei der Ausfahrt aus dem privaten Abschnitt aus. Diese Strafen summieren sich und machen die Abkürzung bei der Routenberechnung weniger vorteilhaft.

![Chemin de Sorécot und Chemin de Pre-Louis: hier ein Strasse-Segment auf jeder Seite der Kreuzung (gestrichelte Auswahl)](/penalites/voie-privee-croisement.jpg)

::: important Warum keine Abbiegebeschränkung
Eine «harte» Abbiegebeschränkung verbietet das Manöver für alle, auch für Berechtigte und Fahrer, die ein Ziel an der Strasse erreichen möchten. Die Strafe lässt das Manöver zu, benachteiligt es aber bei der Routenberechnung.
:::

::: warning Warnung
- Halten Sie die Mindestlänge von 5 Metern pro Segment ein ([Mikrosegmente](/de/editors/cartographie/geometrie-segments#mikrosegmente)).
- Geben Sie dem oder den Zwischensegmenten denselben Typ wie der Strasse, die die private Strasse kreuzt.
:::

## Absolute Beschränkungen

Im Gegensatz zu den Strafen verbieten bestimmte Situationen die Durchfahrt vollständig und ohne Ausnahme:

- **Strassenschliessung**: siehe [Strassenschliessungen](/de/editors/wme/fermetures)
- **"Hart" eingeschränktes Abbiegen** (roter Pfeil ohne Fragezeichen): absolutes Verbot. Historisch war dies eine Strafe, dieses Verhalten hat sich jedoch geändert.
- **Zeitliche Beschränkungen** für Abbiegevorgänge oder Segmente: gemäss ihren Bedingungen
- **Verbotene Fahrtrichtung** auf einer Einbahnstrasse
- **Nicht befahrbare Typen**: Bahnstrecke (Railroad), Landepiste (Runway), Fussgängerwege
- **Vom Netz getrenntes Segment**

::: important Wichtig
Seit die "harten" Abbiegebeschränkungen absolut sind, ist es nutzlos und schädlich, Segmente zu trennen oder zu löschen, um das Routing zu verhindern. Stattdessen bei Bedarf eine Abbiegebeschränkung oder eine Strassenschliessung konfigurieren.
:::

## Siehe auch

- [Grundlagen des Routings](/de/editors/wme/routing)
- [Abbiegebeschränkungen](/de/editors/wme/restrictions-virage)
- [Schwierige Abbiegungen](/de/editors/wme/virages-difficiles)
- [Landwirtschaftliche Wege](/de/editors/cartographie/chemins-agricoles)
- [Strassenschliessungen](/de/editors/wme/fermetures)
- [Kartierung von Parkplätzen](/de/editors/cartographie/parkings)

::: quote Quellen
- Routing penalties (offizielles Waze-Forum): https://www.waze.com/discuss/t/routing-penalties/377968
:::
