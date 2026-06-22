---
title: Segmentgeometrie
---

# Segmentgeometrie

Diese Seite fasst die Geometrieregeln für das Editieren von Segmenten in der Schweiz zusammen: Mikrosegmente, Schleifen, Sackgassen, Wendemanöver, schmale Strasse, Privatwege, Übergänge und versetzte Strassen.

## Mikrosegmente

::: failure Mikrosegmente vermeiden
Ein Segment muss für einen optimalen Betrieb mindestens 5 Meter lang sein. Kürzere Segmente verhindern die effiziente Routenberechnung.
:::

Kreisverkehre sind von dieser Regel ausgenommen: Ihre Segmente dürfen kürzer sein.

## Schleifen

Eine Schleife muss aus mindestens 3 Strassensegmenten bestehen. Mit anderen Worten: Zwei Segmente dürfen nicht zwei Knotenpunkte gemeinsam haben.

::: failure Schleife mit 2 Segmenten
Eine Schleife mit 2 Segmenten erzeugt Führungsfehler ("same endpoint drivable segments"). Einen Knotenpunkt hinzufügen, um sie in 3 oder mehr Segmente zu teilen, ohne ein Mikrosegment zu erzeugen.
:::

::: note Grosse Schleife
Wenn die Schleife sehr gross ist, einen Weg oder eine Zufahrt hinzufügen, um ihre versehentliche Löschung zu vermeiden.
:::

## Sackgassen

Wendeschleifen und Wendekreisverkehre nicht kartieren. Einfach das Ende des Segments bis zum am weitesten fahrend erreichbaren Punkt verlängern.

- Den letzten Knotenpunkt nahe dem Ende, in der Mitte der Fahrbahn, platzieren.
- Der Abstand des Knotens zu den Enden entspricht dem Abstand zu den Rändern.
- Bei einer Mittelinsel den Knoten ausserhalb des Inselumfangs platzieren.

::: reminder Erinnerung
Wenn man am Ende der Strasse stehend deutlich eine einfache Sackgasse sieht, keine Schleife erstellen.
:::

## Wendemanöver

Ein Wendemanöver nur dann auf Grün (erlaubt) setzen, wenn:

1. ein an eine Einbahnstrasse angeschlossenes Zweirichtungssegment eine Sackgasse erzeugt, oder
2. das Manöver ohne Rückwärtsfahren erfolgt, legal ist und durch eine Markierung, ein Schild oder eine Ampel angezeigt wird.

## Schmale Strasse / Gasse

Der Typ "Schmale Strasse / Gasse" (Typ 22) wird nur verwendet, wenn die Strasse in beide Richtungen befahrbar, mehr als 50 Meter lang ist und nur Platz für ein einzelnes Standardfahrzeug bietet.

::: failure Nicht verwenden für
- Einbahnstrassen;
- kurze Brücken und Durchfahrten;
- Sackgassen;
- andere Strassentypen mit Strafpunkten;
- Kreuzungen, die ausser für Schwerfahrzeuge unmöglich sind;
- permanente Ampeln;
- Verengungen zur Verkehrsberuhigung;
- ganze Dörfer.
:::

## Private Wohnwege

Einzelne private Zufahrten nicht kartieren, ausser wenn:

- der Weg mindestens 2 Wohnungen erschliesst, oder
- der Weg besonders lang ist oder die Wohnung mehr als 100 Meter von der Strasse entfernt liegt, oder
- das Fehlen einer Kartierung Führungsprobleme verursachen würde.

## Übergänge und versetzte Strassen

### Übergänge

Ein Übergang stellt das Fehlen einer Kreuzung zwischen zwei Segmenten dar. Er dient für:

- einen Wechsel des Strassennamens;
- einen Wechsel der Verkehrsrichtung (Zweirichtung zu Einbahn);
- eine Schleife befahrbar zu machen.

Überflüssige Knotenpunkte entfernen, um die Karte zu vereinfachen.

### Versetzte Strassen

Drei zu berücksichtigende Fälle:

1. In der Realität ausgerichtete Strassen: in eine Kreuzung mit 4 Segmenten umwandeln.
2. Fast ausgerichtete Strassen: den Knotenpunkt nahe an 90 Grad erzwingen, um die Anweisung "geradeaus" zu erhalten.
3. Echte Trennung: die Seiten nicht ausgerichtet lassen und die Länge des kleinen Segments zwischen den Strassen maximieren.

::: quote Quellen
- Editierregeln in der Westschweiz: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
- Leitfaden für Kreuzungen: https://www.waze.com/discuss/t/guide-des-intersections/377286
- Informationen auf Französisch: https://www.waze.com/discuss/t/informations-en-francais/377254
:::
