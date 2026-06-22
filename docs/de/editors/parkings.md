---
title: Parkplätze und Parkflächen
---

# Parkplätze und Parkflächen

Parkplätze und Parkflächen werden mit Parking Lot Roads kartiert. Ziel ist es, die Karte lesbar und für die Autonavigation nützlich zu halten, nicht jeden Stellplatz nachzubilden.

## Grundsatz: nur das Wesentliche kartieren

Auf einem Parkplatz zeichnet man nur die Segmente, die einen Navigationsnutzen bringen.

Zu kartieren:

- die Ein- und Ausfahrten, mit dem benachbarten Strassennetz verbunden
- die Umfahrungsspuren (die Runde um den Parkplatz), um eine falsche Stauerkennung zu vermeiden
- die Hauptverkehrsspuren in grossen Anlagen
- die Spuren entlang von Geschäftsgebäuden

Nicht zu kartieren:

- die einzelnen Stellplätze
- die Nebengassen zwischen den Stellplatzreihen

::: important Wichtig
Viele Nebengassen überladen die Anzeige auf dem Smartphone und blähen die App ohne Navigationsnutzen auf. Man bleibt beim Hauptverkehr.
:::

## Segmenttyp

Die internen Spuren des Parkplatzes verwenden den Typ Parking Lot Road. Die Ein- und Ausfahrten müssen korrekt mit dem Strassennetz verbunden sein, um das Routing bis zum Parkplatz zu ermöglichen.

## Ort (POI) des Parkplatzes

Wenn der Parkplatz einen Ort rechtfertigt, fügt man ihn als eigenständigen Place hinzu.

::: note Notiz
Die Waze-Richtlinie von 2016 empfiehlt, einen Parkplatz als Place in Flächenform (Polygon) mit einem Einfahrtspunkt am tatsächlichen Zufahrtsort zu kartieren. Ein zu einem Geschäft gehörender Parkplatz wird als eigenständiger Ort kartiert, ohne den ursprünglichen Ort zu verändern.
:::

Benennung des Ortes (Regeln der Suisse romande):

- die Kategorie Parking Lot verwenden, nicht Park
- den genauen Namen des Parkplatzes übernehmen, falls er existiert, mit dem Symbol P
- generische Begriffe wie "Parking" oder Abkürzungen vermeiden

## Sonderfälle

::: example Tiefgarage
Ein geschätztes Polygon mit einem oder mehreren korrekt positionierten Einfahrtspunkten zeichnen.
:::

::: quote Quellen
- Waze Discuss, Parking Lots, new mapping guidelines (2016): https://www.waze.com/discuss/t/parking-lots-new-mapping-guidelines-2016/232237
- Waze Discuss, Editierregeln in der Suisse romande: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
:::
