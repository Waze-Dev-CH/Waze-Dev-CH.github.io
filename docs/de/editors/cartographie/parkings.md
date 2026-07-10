---
title: Kartierung von Parkplätzen
description: Offizielle Richtlinien zum Kartieren von Parkplätzen und Parkflächen in Waze in der Schweiz.
order: 8
---

<img class="banner-img is-narrow" src="/img/editors/location.png" alt="">

# Kartierung von Parkplätzen

::: tip Für alle zugänglich: Niveau L1
Diese Regeln gelten für alle Editoren.
:::

Parkplätze spielen eine Schlüsselrolle im Projekt Waze Parking, das darauf abzielt, ein vollständiges Navigationserlebnis bis zum Parkplatz zu bieten. Eine korrekte Kartierung im WME ist notwendig, damit diese Funktion funktioniert. Das Ziel bleibt, die Karte lesbar und für die Autonavigation nützlich zu halten, nicht jeden Stellplatz nachzubilden.

## Allgemeines Prinzip

Diese Richtlinien gelten für **alle Parkplätze** (öffentliche und private), aber **nicht** für Stellplätze am Strassenrand (Strasse).

Ein Parkplatz wird unter zwei ergänzenden Aspekten kartiert:

- ein **Ort (Place) in Form eines Polygons**, der ihn auf der Karte darstellt und das Routing bis zu ihm ermöglicht;
- gegebenenfalls **interne Fahrwege (Parking Lot Road)**, wenn der Verkehr im Inneren es rechtfertigt, eingezeichnet zu werden.

## Der Ort des Parkplatzes (Polygon)

Jeder Parkplatz muss als **Ort in Form eines Polygons** (Place vom Typ Polygon) mit einem Eingangspunkt erstellt werden, der am tatsächlichen Eingang des Parkplatzes positioniert wird.

### Einen Parkplatz im WME erstellen

1. Über die Schaltfläche **Ort hinzufügen** fahren
2. **Autoservices** auswählen → die Option **Polygon** wählen
3. Klicken, um die Knoten des Polygons zu erstellen: auf den letzten Punkt doppelklicken, um abzuschliessen
4. Den Eingangsmarker am **tatsächlichen Eingang** des Parkplatzes platzieren
5. Im Menü Kategorien **Parking Lot** auswählen
6. Speichern

Das Polygon muss der tatsächlichen Form des Parkplatzes bestmöglich entsprechen und die Ein- und Ausfahrtsbereiche einschliessen.

Benennung des Ortes (Regeln Westschweiz):

- die Kategorie Parking Lot verwenden, nicht Park
- den genauen Namen des Parkplatzes übernehmen, falls vorhanden, mit dem Symbol P
- generische Begriffe wie « Parking » oder Abkürzungen vermeiden

## Die internen Fahrwege (Parking Lot Road)

Wenn der interne Verkehr es verdient, eingezeichnet zu werden, zeichnet man nur die Segmente, die einen Navigationsvorteil bringen.

Zu kartieren:

- die Ein- und Ausfahrten, verbunden mit dem benachbarten Strassennetz
- die Umfangswege (die Runde um den Parkplatz), um eine falsche Staudetektion zu vermeiden
- die Hauptfahrwege in grossen Anlagen
- die Fahrwege entlang der Geschäftsgebäude

Nicht zu kartieren:

- die einzelnen Stellplätze
- die Nebengassen zwischen den Reihen von Stellplätzen

::: important Wichtig
Das Vervielfachen von Nebengassen überlastet die Anzeige auf dem Smartphone und macht die App schwerfälliger, ohne einen Nutzen für die Navigation. Man bleibt beim Hauptverkehr. Die internen Fahrwege verwenden den Typ Parking Lot Road, und die Ein- und Ausfahrten müssen korrekt mit dem Strassennetz verbunden sein, um das Routing bis zum Parkplatz zu ermöglichen.
:::

## Sonderfälle

### Parkplatz in einem Gewerbegebiet oder einer Infrastruktur

**Zwei getrennte Orte** erstellen: einen für den Komplex/das Gebäude, einen für seinen Parkplatz. Den bestehenden Ort nicht ändern, um ihm die Kategorie Parkplatz hinzuzufügen.

### Tiefgarage

- Ein Polygon um den geschätzten Umfang erstellen (basierend auf lokaler Kenntnis)
- Den oder die Eingangspunkte präzise positionieren
- Wenn sich ein bestehender Ort an dieser Stelle befindet, ein separates Polygon erstellen, anstatt die Kategorie dem bestehenden Ort hinzuzufügen

## Wichtige Punkte

::: important Wichtig
Der Eingangspunkt muss am tatsächlichen physischen Eingang des Parkplatzes platziert werden, nicht in der Mitte des Polygons. Dieser Punkt wird für das finale Routing verwendet.
:::

::: note Notiz
Parkplätze am Strassenrand (Parken auf der Strasse entlang der Trottoirs) sind von diesen Richtlinien **nicht betroffen**: Sie werden anders kartiert.
:::

::: quote Quellen
- Waze Discuss, Parking Lots, new mapping guidelines (2016): https://www.waze.com/discuss/t/parking-lots-new-mapping-guidelines-2016/232237
- Waze Discuss, Règles d'édition en Suisse romande: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
:::
