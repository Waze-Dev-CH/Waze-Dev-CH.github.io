---
title: Kreisverkehre und Kreisel
order: 7
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Kreisverkehre und Kreisel

Diese Seite beschreibt das Erstellen und Bearbeiten eines Kreisverkehrs im WME sowie den Schweizer Standard für die Sperrung.

## Allgemeine Grundsätze

- Der Kreisverkehr behält immer den höchsten Strassentyp unter seinen Zweigen. Ausnahme: Wenn eine Autobahn in einem Kreisverkehr innerorts beginnt, den höchsten Typ ausserhalb der Autobahn nehmen, um Routing-Fehler zu vermeiden.
- Kein Strassenname: Ein Name wird in der App schlecht angezeigt. "Ohne Namen" ankreuzen. Wenn der Kreisverkehr einen Eigennamen trägt, einen benannten Place im Inneren erstellen.
- Keine Geschwindigkeitsbegrenzung auf einem Kreisverkehr.
- Maximaler Durchmesser von etwa 100 m (technische Grenze).

## Was KEIN Kreisverkehr ist

- Eine Kreuzung ohne Mittelinsel.
- Eine nicht signalisierte Kreuzung.
- Eine Sackgasse, die in einer Schleife endet: eher eine Schleife zeichnen als einen Kreisverkehr.
- Ein sehr grosser Bereich über 100 m hinaus.
- Eine Wohnkreuzung mit Schikanen.

::: note Im Zweifelsfall
Den Country Manager (CM) oder den State Manager (SM) konsultieren.
:::

## Schritt-für-Schritt-Erstellung

Voraussetzungen: eine bestehende Kreuzung, ein ausgerichteter Kartenhintergrund und die sichtbare GPS-Punkte-Ebene.

1. Die Verbindung ins Zentrum des künftigen Kreisverkehrs verschieben.
2. Die Segmente, die verbunden werden sollen, trennen oder verlängern.
3. Die fehlenden Segmente für alle Ein- und Ausfahrten hinzufügen, auch die untergeordneten.
4. Das Kreisverkehr-Werkzeug aktivieren: das Kurven-Symbol überfahren und "Kreisverkehr" wählen, oder die Taste "o" drücken.
5. Den Cursor (Kreuz) im Zentrum platzieren, klicken und ziehen: Ein orangefarbener Kreis erscheint mit seinem Radius. Shift gedrückt halten für ein Oval. Ein zweites Mal klicken, um zu bestätigen.
6. Die Segmente werden in Orange erstellt (nicht gespeichert) und wechseln dann zu Rot. Sie sind alle Einbahnstrassen und die Verbindungen sind automatisch als Soft-Turns gesetzt.
7. Die Soft-Turns mit "Q" und dann "W" in Hard-Turns umwandeln (siehe [Soft- und Hard-Turns](./intersections.md#soft-et-hard-turns)).
8. In den Eigenschaften "Ohne Namen" ankreuzen. Einen benannten Place im Inneren hinzufügen, wenn der Kreisverkehr einen Eigennamen hat.
9. Speichern, die alten inneren Strassen löschen und dann das Ergebnis überprüfen.

## Einen falschen Kreisverkehr korrigieren

Alle seine Segmente löschen, die zu verbindenden Segmente verlängern, das Zentrum mithilfe der GPS-Ebene neu ausrichten, den Kreisverkehr neu zeichnen, ihn bearbeiten und dann speichern.

## Einen bestehenden Kreisverkehr bearbeiten

Um Verbindungen zu ändern, den Kreisverkehr vollständig löschen und neu zeichnen. Das Löschen kann nur für alle Segmente gleichzeitig erfolgen, niemals teilweise.

## Typzuweisung

Ein gut gewählter Typ vermeidet Routing-Strafen. Die Hierarchie lautet: bundesweit > national > Haupt > Strasse. Die Rampen nehmen den Typ des verbundenen Segments an. Lokale Strassen, Privatstrassen und Parkplätze sind Standardstrassen.

Methode: Die zwei Segmente mit dem höchsten Typ, die mit dem Kreisverkehr verbunden sind, ausfindig machen (eine in zwei Einbahnstrassen aufgeteilte Strasse zählt als ein einziges Segment), dann dem Kreisverkehr den NIEDRIGSTEN Typ der beiden zuweisen.

| Zweige | Zugewiesener Typ |
| --- | --- |
| 2 Haupt + 2 Standard | Haupt |
| 1 bundesweit + 3 Haupt + 2 Standard | bundesweit |
| 1 bundesweit + 2 Haupt + 1 Standard | Haupt |

## Ein- und Ausfahrten

Die Ein- und Ausfahrten verbinden sich wie einfache Strassen im rechten Winkel (90°) mit dem Umfang des Kreisverkehrs. Für sehr weit auseinanderliegende Ein- und Ausfahrten zwei Segmente als Einbahnstrasse in Betracht ziehen.

## Navigationsanweisungen

Ein Kreisverkehr gilt als "normal", wenn er 4 Zweige hat, zentriert ist und sich die Ausfahrten innerhalb von 90° plus oder minus 30° und 180° plus oder minus 30° ab der Einfahrt befinden. In diesem Fall lautet die Anweisung "rechts / links abbiegen" oder "geradeaus".

Andernfalls ist der Kreisverkehr "nicht-normal" und die Anweisung wird zu "nehmen Sie die X. Ausfahrt".

::: important Umschalten auf nicht-normal
Ein und derselbe Kreisverkehr kann von einer Einfahrt aus normal und von einer anderen aus nicht-normal sein. Wenn EINE einzige Einfahrt ihn nicht-normal macht, schaltet der gesamte Kreisverkehr auf nicht-normal um.
:::

## Schweizer Standard: Mindestsperrung L3

::: important Schweizer Community-Regel
In der Schweiz ist die empfohlene Mindestsperrstufe für einen Kreisverkehr L3.
:::

Diese Regel wird von der Schweizer Community angewendet und vom Skript WME Switzerland Helper überprüft, das Kreisverkehre meldet, deren Sperrstufe unter L3 liegt. Das Sperren eines Kreisverkehrs auf L3 schützt eine oft bearbeitete Geometrie und vermeidet versehentliche Änderungen durch Editoren niedriger Stufe.

::: quote Quellen
- Erstellen und bearbeiten eines Kreisverkehrs: https://www.waze.com/discuss/t/erstellen-und-bearbeiten-eines-kreisverkehrs/377246
- Leitfaden zu Kreuzungen (Schweiz), Abschnitt "Rond-Point et Giratoire": https://www.waze.com/discuss/t/guide-des-intersections/377286
- Sperrstandard L3: Schweizer Community-Regel, überprüft vom Skript WME Switzerland Helper.
:::
