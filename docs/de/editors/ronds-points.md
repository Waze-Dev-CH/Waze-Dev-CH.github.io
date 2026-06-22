---
title: Kreisverkehre und Kreisel
---

# Kreisverkehre und Kreisel

Diese Seite beschreibt das Erstellen und Bearbeiten eines Kreisverkehrs in WME sowie den Schweizer Sperrstandard.

## Allgemeine Grundsätze

- Ein Kreisverkehr behält immer den höchsten Strassentyp unter seinen Ästen. Ausnahme: Wenn eine Autobahn innerhalb einer Ortschaft in einem Kreisverkehr beginnt, den höchsten Typ ausser Autobahn nehmen, um Routingfehler zu vermeiden.
- Kein Strassenname: Ein Name wird in der App schlecht angezeigt. "Kein Name" ankreuzen. Wenn der Kreisverkehr einen Eigennamen trägt, einen benannten Place im Inneren erstellen.
- Keine Geschwindigkeitsbegrenzung auf einem Kreisverkehr.
- Maximaler Durchmesser von etwa 100 m (technische Grenze).

## Was KEIN Kreisverkehr ist

- Eine Kreuzung ohne Mittelinsel.
- Eine nicht signalisierte Kreuzung.
- Eine Sackgasse, die in einer Schleife endet: eine Schleife statt eines Kreisverkehrs zeichnen.
- Eine sehr grosse Fläche über 100 m.
- Eine Wohnstrassenkreuzung mit Schikanen.

::: note Im Zweifelsfall
Den Country Manager (CM) oder den State Manager (SM) konsultieren.
:::

## Schrittweise Erstellung

Voraussetzungen: eine bestehende Kreuzung, eine ausgerichtete Hintergrundkarte und die GPS-Punkte-Ebene sichtbar.

1. Den Knotenpunkt in die Mitte des zukünftigen Kreisverkehrs verschieben.
2. Die Segmente, die sich verbinden werden, lösen oder verlängern.
3. Die fehlenden Segmente für alle Ein- und Ausfahrten hinzufügen, auch die untergeordneten.
4. Das Kreisverkehr-Werkzeug aktivieren: über das Kurven-Symbol fahren und "Kreisverkehr" wählen, oder die Taste "o" drücken.
5. Den Cursor (Kreuz) in die Mitte setzen, klicken und ziehen: Ein orangefarbener Kreis erscheint mit seinem Radius. Shift halten für ein Oval. Ein zweites Mal klicken, um zu bestätigen.
6. Die Segmente werden in Orange erstellt (nicht gespeichert) und wechseln dann zu Rot. Sie sind alle in Einbahn und die Verbindungen sind automatisch Soft-Turns.
7. Die Soft-Turns mit "Q" und dann "W" in Hard-Turns umwandeln (siehe [Soft und Hard turns](/de/editors/intersections#soft-et-hard-turns)).
8. In den Eigenschaften "Kein Name" ankreuzen. Einen benannten Place im Inneren hinzufügen, wenn der Kreisverkehr einen Eigennamen hat.
9. Speichern, die alten internen Strassen löschen, dann das Ergebnis überprüfen.

## Einen falschen Kreisverkehr korrigieren

Alle seine Segmente löschen, die zu verbindenden Segmente verlängern, die Mitte mithilfe der GPS-Ebene neu ausrichten, den Kreisverkehr neu zeichnen, ihn bearbeiten und dann speichern.

## Einen bestehenden Kreisverkehr bearbeiten

Um Verbindungen zu ändern, den gesamten Kreisverkehr löschen und neu zeichnen. Das Löschen kann nur für alle Segmente auf einmal erfolgen, niemals teilweise.

## Zuweisung des Typs

Ein gut gewählter Typ vermeidet Routing-Strafen. Die Hierarchie ist: föderal > national > Haupt > Strasse. Rampen übernehmen den Typ des verbundenen Segments. Lokale Strassen, Privatstrassen und Parkplätze sind Standardstrassen.

Methode: die beiden Segmente mit dem höchsten Typ identifizieren, die mit dem Kreisverkehr verbunden sind (eine in zwei Einbahnsegmente geteilte Strasse zählt als ein einziges Segment), dann dem Kreisverkehr den NIEDRIGSTEN Typ der beiden zuweisen.

| Äste | Zugewiesener Typ |
| --- | --- |
| 2 Haupt + 2 Standard | Haupt |
| 1 föderal + 3 Haupt + 2 Standard | Föderal |
| 1 föderal + 2 Haupt + 1 Standard | Haupt |

## Ein- und Ausfahrten

Ein- und Ausfahrten verbinden sich wie einfache Strassen, im rechten Winkel (90°) zum Umfang des Kreisverkehrs. Für sehr weit auseinanderliegende Ein- und Ausfahrten zwei Einbahnsegmente in Betracht ziehen.

## Navigationsanweisungen

Ein Kreisverkehr gilt als "normal", wenn er 4 Äste hat, zentriert ist und die Ausfahrten innerhalb von 90° plus oder minus 30° und 180° plus oder minus 30° von der Einfahrt liegen. In diesem Fall lautet die Anweisung "rechts / links abbiegen" oder "geradeaus".

Andernfalls ist der Kreisverkehr "nicht normal" und die Anweisung wird "nehmen Sie die X. Ausfahrt".

::: important Umschalten auf nicht normal
Ein und derselbe Kreisverkehr kann von einer Einfahrt aus normal und von einer anderen aus nicht normal sein. Wenn nur EINE Einfahrt ihn nicht normal macht, schaltet der gesamte Kreisverkehr auf nicht normal um.
:::

## Schweizer Standard: Mindestsperrung L3

::: important Schweizer Community-Regel
In der Schweiz ist die empfohlene Mindestsperrstufe für einen Kreisverkehr L3.
:::

Diese Regel wird von der Schweizer Community angewendet und vom Skript WME Switzerland Helper überprüft, das Kreisverkehre meldet, deren Sperrstufe unter L3 liegt. Das Sperren eines Kreisverkehrs auf L3 schützt eine häufig bearbeitete Geometrie und verhindert versehentliche Änderungen durch Editoren mit niedrigem Rang.

::: quote Quellen
- Erstellen und bearbeiten eines Kreisverkehrs: https://www.waze.com/discuss/t/erstellen-und-bearbeiten-eines-kreisverkehrs/377246
- Guide des intersections (Schweiz), Abschnitt "Rond-Point et Giratoire": https://www.waze.com/discuss/t/guide-des-intersections/377286
- L3-Sperrstandard: Schweizer Community-Regel, überprüft vom Skript WME Switzerland Helper.
:::
