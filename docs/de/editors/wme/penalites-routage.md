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

Bei einer privaten Strasse (Private Road), einem Parkplatzweg (Parking Lot Road) oder einem ungepflegten Weg gilt die Strafe beim Übergang von diesem Typ zu einem anderen Strassentyp, also bei der Ausfahrt, nicht bei der Einfahrt. Siehe [Kartierung von Parkplätzen](/de/editors/cartographie/parkings).

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
