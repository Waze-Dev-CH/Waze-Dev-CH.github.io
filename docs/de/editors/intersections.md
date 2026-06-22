---
title: Leitfaden für Kreuzungen
---

# Leitfaden für Kreuzungen

Diese Seite fasst den Schweizer Leitfaden für Kreuzungen zusammen. Das Leitprinzip ist einfach: Eine gut gezeichnete Kreuzung erzeugt korrekte Führungsanweisungen. Eine Kreuzung muss die logische Realität des Verkehrs darstellen, nicht nur seine exakte Geometrie.

::: abstract Zusammenfassung
Je einfacher, desto besser. Man zeichnet so wenige Elemente wie möglich und erhält dabei dennoch die richtigen Navigationsanweisungen.
:::

## Je einfacher, desto besser

Die Grundregel des Leitfadens: eine Kreuzung nicht überladen. Man fügt Segmente, Knoten oder Geometrie nur dann hinzu, wenn es notwendig ist, um die erwartete Führungsanweisung zu erhalten. Eine einfachere Kreuzung ist leichter zu pflegen und erzeugt ein zuverlässigeres Routing.

## Die Grundlagen

::: reminder Zuerst zu lesen
Dieser Abschnitt legt die Grundlagen. Diese vor allem anderen verstehen.
:::

### Eine Kreuzung in Waze

In Waze besteht eine Kreuzung mindestens aus:

- mindestens zwei Strassensegmenten,
- einem oder mehreren Knotenpunkten,
- Abbiegeerlaubnissen oder -verboten an diesen Knoten.

Es sind diese kombinierten Elemente, die die möglichen Bewegungen und die dem Fahrer gegebenen Anweisungen bestimmen.

### T-Kreuzung

Eine T-Kreuzung verbindet eine Strasse, die auf einer anderen Strasse endet. Die Segmente müssen sich in Winkeln nahe 90° treffen. Wenn sich die Strassen in einem spitzen Winkel treffen, Geometriepunkte hinzufügen, um die Kreuzung in Richtung 90° zu begradigen. Ohne dies kann der Router ein "rechts halten / links halten" anstelle eines "abbiegen" erzeugen, eine Anweisung auslassen oder automatische Kartenfehler erzeugen.

### +-Kreuzung

Eine +-Kreuzung (kreuzförmig) verbindet vier Äste an einem Knoten. Wie bei der T-Kreuzung hilft das Anstreben von Winkeln nahe 90° dem Router, "geradeaus" von Abbiegungen zu unterscheiden. Bei starkem Zoom arbeiten: Die Winkelkorrekturen werden bei normalem Zoom nahezu unsichtbar.

## Führungsanweisungen steuern

Der Abbiegewinkel bestimmt die dem Fahrer gegebene Anweisung.

| Winkel | Bereich | Strassentyp | Anweisung |
| --- | --- | --- | --- |
| 22° | 0° bis 44° | Gewöhnliche Strassen | Links / rechts halten |
| 22° | 0° bis 44° | Rampen / Autobahnen | Links / rechts ausfahren |
| 90° | 45° bis 150° | Alle Typen | Links / rechts abbiegen |

::: important Zu vermeidende Winkel
- Um die 45°: Ein Fehler von 0,5° kann genügen, um die falsche Anweisung auszulösen.
- Unter 10°: Die Pfeile werden im Editor schwer auswählbar und die Segmente in der App schwer berührbar.
:::

### Benennung der internen Segmente

Die Segmente innerhalb einer Kreuzung bleiben ohne Namen, ausser wenn alle möglichen Richtungen ohnehin eine korrekte Anweisung erhalten würden. Ein internes Segment zu benennen ist nur akzeptabel, wenn keine Richtung (Wende inbegriffen) einen Routingfehler erzeugen kann.

## Zwischen Strassen

### Gabelung

Der Routing-Server geht davon aus, dass zwei Segmente desselben Namens, die in einem Winkel von etwa 0° verbunden sind, eine "geradeaus"-Fahrt darstellen.

Beispiel: eine Allee, die geradeaus weiterführt, während sich eine Strasse abzweigt.

- Die beiden Segmente der Allee (vorher und nachher): gleicher Name, Winkel von etwa 0° an der Kreuzung.
- Die Strasse, die sich abzweigt: Winkel von 90° gegenüber der Allee.
- Ergebnis: Der Router erkennt die Abbiegung in die Strasse korrekt.

### Strassen ohne Ausfahrt

- Eine Sackgasse wird durch ein einzelnes Segment dargestellt, ohne Verbindung an seinem Ende, mit einem Knotenpunkt am Endpunkt, dort platziert, wo der Fahrer ihn physisch erreichen kann. Sie nicht bis zum absoluten Rand verlängern.
- Eine kreisförmige Stichstrasse wird in der Regel wie eine standardmässige Sackgasse gezeichnet, mit dem Knoten nahe der Mitte der Schleife platziert, um unabhängig von der Anfahrtsrichtung erreichbar zu bleiben.
- Ausnahme: Wenn eine kleine Insel die Mitte einnimmt, das Segment am äusseren Rand der Schleife platzieren, damit das Ende erreichbar bleibt.

### Schleifen

Ein Segment kann sich nicht über einen einzigen Knoten mit sich selbst verbinden. Eine Schleife muss durch einen zusätzlichen Knoten unterbrochen oder mit zwei Segmenten gezeichnet werden. In der Praxis eine Kreuzung mit 3 Ästen ungefähr auf halber Strecke der Schleife erstellen, damit das Routing funktioniert.

### Versetzte Strassen

Wenn sich zwei Strassen fast kreuzen, ohne perfekt ausgerichtet zu sein:

1. Echte Kreuzung mit 4 Ästen: in eine echte Kreuzung mit 4 Ästen umwandeln.
2. Quasi-Ausrichtung: die Strassen leicht aus der Achse versetzen und Geometriepunkte hinzufügen, um Winkel von 90° am Knoten zu erhalten.
3. Wirklich getrennte Zufahrten: getrennte Knotenpunkte mit einer Führung "links abbiegen" und dann "rechts abbiegen" beibehalten.

::: important Sehr kurze Segmente
Ein sehr kurzes Segment zwischen zwei versetzten Zufahrten löst automatische Kartenfehler und Routenneuberechnungen aus. Den Abstand zwischen den Zufahrtspunkten maximieren.
:::

### Kreisverkehre und Kreisel

Der Leitfaden verweist für Kreisverkehre und Kreisel auf eine eigene Seite.

::: note Notiz
Siehe die eigene Seite: [Kreisverkehre und Kreisel](/de/editors/ronds-points).
:::

### Übergangsknoten

Übergangsknoten sind Knotenpunkte, die auf der App-Seite unsichtbar sind. Sie dienen für Strassennamenwechsel, Ortschaftsgrenzen, Richtungswechsel und Schleifenkomponenten. Sie nur löschen, wenn man sicher ist, dass sie nicht mehr verwendet werden: Sie vereinfachen die Karte und reduzieren unnötige Routingfaktoren.

### Kreuzung als Schleifenkreuz (bowtie)

Die Kreuzung als Schleifenkreuz vereinfacht die Querung zwischen einer Strasse mit getrennten Fahrbahnen und einer einbahnigen Strasse, indem sie die Querung auf einen einzigen logischen Punkt reduziert. Diese Konstruktion verbessert die Kontrolle der Wendemanöver an diesem Punkt, ohne von der Länge der Segmente abzuhängen.

## Soft und Hard turns

Die von WME automatisch erzeugten Verbindungen sind Soft-Turns (violettes Fragezeichen); die manuellen Entscheidungen des Editors sind Hard-Turns. Es existieren vier Zustände, vom strafendsten zum am wenigsten strafenden: hart eingeschränkt (roter Pfeil), soft eingeschränkt (violettes Fragezeichen), soft erlaubt (grüner Pfeil), hart erlaubt (bestätigter grüner Pfeil).

::: example Schnelle Methode an einer neuen Kreuzung
Zuerst die Richtungen prüfen, dann "Q", um alle Abbiegungen zu verbieten, dann "W", um sie alle zu erlauben, und schliesslich nur die tatsächlich verbotenen Abbiegungen auf hart eingeschränkt setzen.
:::

## Rampen

Rampen dienen dazu, Segmente vom Typ Highway oder Freeway an niveaufreien Anschlussstellen (Kreuzungen auf getrennten Ebenen) zu verbinden.

Beim Zeichnen gilt das Prinzip "je einfacher, desto besser": Ein einziges Rampensegment genügt in der Regel, mit einem einzigen Knotenpunkt, wenn die Abstände gering sind. Eine Aufteilung in mehrere Segmente ist nur gerechtfertigt, wenn die Enden deutlich auseinanderliegen. Einen Abfahrtswinkel von 20 bis 30° beibehalten, um die Anweisung "Ausfahren" zu erzeugen.

## Highway- und Freeway-Kreuzungen

### Ausfahrten

Ausfahrtsrampen müssen in einem Winkel von 20 bis 30° von der Hauptstrasse abzweigen. Dieser Winkel erzeugt die Anweisung "Rechts ausfahren". Die Segmente vor und nach dem Knotenpunkt bleiben vom Typ Highway oder Freeway, mit demselben Namen, in einem Winkel von etwa 0°; die Rampe ist vom Typ Ramp.

### Highway-/Freeway-Aufteilung

Wenn drei Highway-Segmente ohne ein offensichtliches "geradeaus" zusammentreffen, erzeugen unterschiedliche Namen und Winkel von 20 bis 30° eine Anweisung "Rechts halten" oder "Links halten" mit dem Namen des Astes.

### Führungssegmente

Führungssegmente müssen 15 bis 20 Meter lang sein. Sie dienen dazu, den Fahrer im Fall einer Fahrspurreduzierung, einer inkonsistenten Beschilderung oder eines nicht offensichtlichen Routings zu warnen (zum Beispiel links ausfahren und dann nach rechts einordnen). Die drei betroffenen Segmente müssen unterschiedliche Namen tragen, und die beiden umrahmenden Segmente vom gleichen Typ sein.

### Rampenaufteilung

Die Quelle beschreibt auch die Aufteilung einer Rampe. Dasselbe Prinzip von Winkeln und Benennung gilt, um die erwartete Anweisung zu erhalten.

## Brücken und Tunnel

Strassen, die sich überlagern, ohne sich tatsächlich zu kreuzen (Brücken, Überführungen, Unterführungen, Tunnel), müssen durch Segment-Höhenstufen getrennt werden.

- Standardmässig liegt jedes Segment auf Stufe 0.
- Die Brückenfunktion (bridge) weist dem oberen Segment eine Stufe eine Einheit über der höheren der beiden ausgewählten Segmente zu.
- Ein Tunnel erhält die Stufe -1, damit Waze ihn als Tunnel erkennt und automatische Kartenfehler ausschliesst.

::: important Bedingungen der Brückenfunktion
Die Brückenfunktion wirkt auf zwei Segmente gleichzeitig und erfordert übereinstimmende Eigenschaften: Land, Kanton, Ortschaft und Strassenname. Sie funktioniert nicht, wenn ein Segment keine definierte Fahrtrichtung hat ("Unbekannt"). Der Strassentyp und die Sperrung sind ohne Einfluss.
:::

Nach der Anwendung die erhaltenen Stufen manuell korrigieren und die unnötig gewordenen Geometriepunkte dort löschen, wo zuvor eine Kreuzung existierte.

## Anschlussstellen

Für Anschlussstellen verweist der Leitfaden auf eine eigene externe Ressource.

::: note Limited Access Interchange Style Guide
Die Details der Anschlussstellen sind hier nicht wiedergegeben. Auf den in der Quelle angegebenen "Limited Access Interchange Style Guide" verweisen.
:::

::: quote Quellen
- Kreuzungen: https://www.waze.com/discuss/t/kreuzungen/377258
- Guide des intersections (Schweiz): https://www.waze.com/discuss/t/guide-des-intersections/377286
- Unterführungen und Brücken: https://www.waze.com/discuss/t/unterfuhrungen-und-brucken/377274
- Soft und Hard Turns: https://www.waze.com/discuss/t/soft-und-hard-turns/377271
:::
