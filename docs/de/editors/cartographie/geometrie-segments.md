---
title: Segmentgeometrie
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Segmentgeometrie

Diese Seite fasst die Geometrieregeln für die Bearbeitung von Segmenten in der Schweiz zusammen: Mikrosegmente, Schleifen, Sackgassen, Wendemanöver, schmale Strassen, private Zufahrten, Übergänge und versetzte Strassen.

## Mikrosegmente

::: failure Mikrosegmente vermeiden
Ein Segment sollte für eine optimale Funktion mindestens 5 Meter lang sein. Kürzere Segmente verhindern die effiziente Berechnung von Routen.
:::

Kreisverkehre sind von dieser Regel ausgenommen: Ihre Segmente dürfen kürzer sein.

## Schleifen

Eine Schleife muss aus mindestens 3 Strassensegmenten bestehen. Mit anderen Worten: Zwei Segmente dürfen nicht zwei gemeinsame Kreuzungen haben.

::: failure Schleife mit 2 Segmenten
Eine Schleife mit 2 Segmenten erzeugt Führungsfehler ("same endpoint drivable segments"). Fügen Sie einen Kreuzungsknoten hinzu, um sie in 3 oder mehr Segmente zu teilen, ohne ein Mikrosegment zu erzeugen.
:::

::: note Grosse Schleife
Wenn die Schleife sehr gross ist, fügen Sie einen Weg oder eine Allee hinzu, um ihre versehentliche Löschung zu verhindern.
:::

## Sackgassen

Kartografieren Sie weder Schleifen noch Wendekreise. Verlängern Sie einfach das Ende des Segments bis zum am weitesten entfernten Punkt, der fahrend erreichbar ist.

- Platzieren Sie den letzten Kreuzungsknoten nahe am Ende, in der Mitte der Fahrbahn.
- Der Abstand des Knotens zu den Enden entspricht dem Abstand zu den Rändern.
- Bei einer Mittelinsel platzieren Sie den Knoten ausserhalb des Umfangs der Insel.

::: reminder Erinnerung
Wenn man am Ende der Strasse steht und deutlich eine einfache Sackgasse erkennt, keine Schleife erstellen.
:::

## Wendemanöver

Setzen Sie ein Wendemanöver nur dann auf grün (erlaubt), wenn:

1. ein bidirektionales Segment, das mit einer Einbahnstrasse verbunden ist, eine Sackgasse erzeugt, oder
2. das Manöver ohne Rückwärtsfahren möglich, legal und durch eine Markierung, ein Schild oder eine Ampel angezeigt ist.

## Schmale Strasse / Gasse

Der Typ "Schmale Strasse / Gasse" (Typ 22) wird nur verwendet, wenn die Strasse bidirektional ist, mehr als 50 Meter misst und nur Platz für ein einziges Standardfahrzeug bietet.

::: failure Nicht verwenden für
- Einbahnstrassen;
- kurze Brücken und Durchfahrten;
- Sackgassen;
- andere Strassentypen mit Strafpunkten;
- unmögliche Kreuzungen ausser für Schwerfahrzeuge;
- dauerhafte Ampeln;
- Verengungen zur Verkehrsberuhigung;
- ganze Dörfer.
:::

## Private Wohnzufahrten

Kartografieren Sie individuelle private Zufahrten nicht, ausser wenn:

- die Strasse mindestens 2 Wohnungen erschliesst, oder
- die Strasse besonders lang ist oder sich die Wohnung mehr als 100 Meter von der Strasse entfernt befindet, oder
- das Fehlen der Kartografierung Führungsprobleme verursachen würde.

## Übergänge und versetzte Strassen

### Übergänge

Ein Übergang stellt das Fehlen einer Kreuzung zwischen zwei Segmenten dar. Er dient dazu:

- einen Namenswechsel der Strasse abzubilden;
- einen Wechsel der Fahrtrichtung abzubilden (Gegenverkehr zu Einbahnstrasse);
- eine Schleife befahrbar zu machen.

Entfernen Sie überflüssige Kreuzungsknoten, um die Karte zu vereinfachen.

### Versetzte Strassen

Drei Fälle sind zu berücksichtigen:

1. In der Realität ausgerichtete Strassen: in eine Kreuzung mit 4 Segmenten umwandeln.
2. Fast ausgerichtete Strassen: die Kreuzung nahe an 90 Grad erzwingen, um die Anweisung "geradeaus" zu erhalten.
3. Echte Trennung: die Seiten nicht ausgerichtet lassen und die Länge des kleinen Segments zwischen den Strassen maximieren.

::: quote Quellen
- Bearbeitungsregeln in der Westschweiz: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
- Kreuzungsleitfaden: https://www.waze.com/discuss/t/guide-des-intersections/377286
- Informationen auf Französisch: https://www.waze.com/discuss/t/informations-en-francais/377254
:::
