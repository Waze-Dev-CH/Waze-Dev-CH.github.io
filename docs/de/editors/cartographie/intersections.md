---
title: Leitfaden für Kreuzungen
order: 6
---

<img class="banner-img is-narrow" src="/img/editors/map-city.png" alt="">

# Leitfaden für Kreuzungen

Diese Seite fasst den Schweizer Leitfaden für Kreuzungen zusammen. Das Leitprinzip ist einfach: Eine gut gezeichnete Kreuzung erzeugt korrekte Navigationsanweisungen. Eine Kreuzung muss die logische Realität des Verkehrs darstellen, nicht nur seine exakte Geometrie.

::: abstract Zusammenfassung
Je einfacher, desto besser. Man zeichnet so wenige Elemente wie möglich und erhält trotzdem die richtigen Navigationsanweisungen.
:::

## Je einfacher, desto besser

Die Grundregel des Leitfadens: eine Kreuzung nicht überladen. Man fügt Segmente, Knoten oder Geometrie nur dann hinzu, wenn es nötig ist, um die erwartete Navigationsanweisung zu erhalten. Eine einfachere Kreuzung ist leichter zu pflegen und erzeugt ein zuverlässigeres Routing.

## Die Grundlagen

::: reminder Zuerst lesen
Dieser Abschnitt legt die Grundlagen. Sie zuerst verstehen, bevor man alles andere angeht.
:::

### Eine Kreuzung in Waze

In Waze besteht eine Kreuzung mindestens aus:

- mindestens zwei Strassensegmenten,
- einem oder mehreren Verbindungsknoten,
- Abbiegeerlaubnissen oder Abbiegeverboten an diesen Knoten.

Es sind diese kombinierten Elemente, die die möglichen Bewegungen und die dem Fahrer gegebenen Anweisungen bestimmen.

### T-Kreuzung

Eine T-Kreuzung verbindet eine Strasse, die auf einer anderen Strasse endet. Die Segmente müssen in Winkeln nahe 90° zusammentreffen. Wenn die Strassen in einem spitzen Winkel zusammentreffen, Geometriepunkte hinzufügen, um die Kreuzung auf 90° zu begradigen. Ohne das kann der Router ein "rechts halten / links halten" statt eines "abbiegen" erzeugen, eine Anweisung auslassen oder automatische Kartenfehler erzeugen.

### Kreuzung in +

Eine Kreuzung in + (kreuzförmig) verbindet vier Äste an einem Knoten. Wie bei der T-Kreuzung hilft das Anstreben von Winkeln nahe 90° dem Router, "geradeaus" von den Abbiegungen zu unterscheiden. Bei starkem Zoom arbeiten: die Winkelkorrekturen werden bei normalem Zoom nahezu unsichtbar.

## Die Navigationsanweisungen steuern

Der Abbiegewinkel bestimmt die dem Fahrer gegebene Anweisung.

| Winkel | Bereich | Strassentyp | Anweisung |
| --- | --- | --- | --- |
| 22° | 0° bis 44° | Gewöhnliche Strassen | Links / rechts halten |
| 22° | 0° bis 44° | Rampen / Autobahnen | Links / rechts ausfahren |
| 90° | 45° bis 150° | Alle Typen | Links / rechts abbiegen |

::: important Zu vermeidende Winkel
- Um 45°: ein Fehler von 0,5° kann ausreichen, um die falsche Anweisung auszulösen.
- Unter 10°: die Pfeile werden im Editor schwer auswählbar und die Segmente in der App schwer antippbar.
:::

### Benennung der internen Segmente

Die innerhalb einer Kreuzung gelegenen Segmente bleiben ohne Namen, ausser wenn alle möglichen Richtungen ohnehin eine korrekte Anweisung erhalten würden. Ein internes Segment zu benennen ist nur dann akzeptabel, wenn keine Richtung (Wendemanöver eingeschlossen) einen Routing-Fehler erzeugen kann.

## Zwischen Fahrspuren

### Gabelung

Der Routing-Server betrachtet zwei Segmente mit gleichem Namen, die in einem Winkel von etwa 0° verbunden sind, als eine Fahrt "geradeaus".

Beispiel: eine Allee, die geradeaus weiterführt, während sich eine Strasse abzweigt.

- Die beiden Segmente der Allee (davor und danach): gleicher Name, Winkel von etwa 0° an der Kreuzung.
- Die abzweigende Strasse: Winkel von 90° gegenüber der Allee.
- Ergebnis: der Router erkennt die Abbiegung in die Strasse korrekt.

### Sackgassen

- Eine Sackgasse wird durch ein einfaches Segment dargestellt, ohne Verbindung an seinem Ende, mit einem Verbindungsknoten am Endpunkt, dort platziert, wo der Fahrer ihn physisch erreichen kann. Nicht bis zum absoluten Rand ausdehnen.
- Eine kreisförmige Sackgasse wird in der Regel wie eine Standard-Sackgasse gezeichnet, mit dem Knoten nahe der Mitte der Schleife platziert, um unabhängig von der Anfahrtsrichtung erreichbar zu bleiben.
- Ausnahme: wenn eine kleine Insel die Mitte einnimmt, das Segment am äusseren Rand der Schleife platzieren, damit das Ende erreichbar bleibt.

### Schleifen

Ein Segment kann sich nicht über einen einzigen Knoten mit sich selbst verbinden. Eine Schleife muss durch einen zusätzlichen Knoten unterbrochen oder mit zwei Segmenten gezeichnet werden. In der Praxis eine Kreuzung mit 3 Ästen etwa auf halber Strecke der Schleife erstellen, damit das Routing funktioniert.

### Versetzte Strassen

Wenn sich zwei Strassen fast kreuzen, ohne perfekt ausgerichtet zu sein:

1. Echte Kreuzung mit 4 Ästen: sie in eine echte Kreuzung mit 4 Ästen umwandeln.
2. Quasi-Ausrichtung: die Strassen leicht aus der Achse versetzen und Geometriepunkte hinzufügen, um Winkel von 90° am Knoten zu erhalten.
3. Wirklich getrennte Zufahrten: getrennte Verbindungen mit einer Führung "links abbiegen" und dann "rechts abbiegen" beibehalten.

::: important Sehr kurze Segmente
Ein sehr kurzes Segment zwischen zwei versetzten Zufahrten löst automatische Kartenfehler und Neuberechnungen der Route aus. Die Distanz zwischen den Zufahrtspunkten maximieren.
:::

### Kreisverkehre und Kreisel

Der Leitfaden verweist für Kreisverkehre und Kreisel auf eine eigene Seite.

::: note Notiz
Siehe die eigene Seite: [Kreisverkehre und Kreisel](./ronds-points.md).
:::

### Übergangsknoten

Übergangsknoten sind app-seitig unsichtbare Verbindungen. Sie dienen für Strassennamenwechsel, Ortsgrenzen, Richtungswechsel und Schleifenkomponenten. Sie nur dann löschen, wenn man sicher ist, dass sie nicht mehr genutzt werden: sie vereinfachen die Karte und reduzieren unnötige Routing-Faktoren.

### Kreuzung als Fliegerknoten (Bowtie)

Die Kreuzung als Fliegerknoten vereinfacht die Kreuzung zwischen einer Strasse mit getrennten Fahrbahnen und einer einspurigen Strasse, indem sie die Kreuzung auf einen einzigen logischen Punkt reduziert. Diese Konstruktion verbessert die Steuerung der Wendemanöver an diesem Punkt, ohne von der Länge der Segmente abzuhängen.

## Soft und Hard Turns

Die von WME automatisch erzeugten Verbindungen sind Soft-Turns (violettes Fragezeichen); die manuellen Entscheidungen des Editors sind Hard-Turns. Es gibt vier Zustände, vom am meisten bestrafenden zum am wenigsten bestrafenden: Hard verboten (roter Pfeil), Soft verboten (violettes Fragezeichen), Soft erlaubt (grüner Pfeil), Hard erlaubt (bestätigter grüner Pfeil).

::: example Beispiel
Schnelle Methode an einer neuen Kreuzung: zuerst die Richtungen prüfen, dann "Q", um alle Abbiegungen zu verbieten, dann "W", um sie alle zu erlauben, und schliesslich nur die wirklich verbotenen Abbiegungen auf Hard verboten setzen.
:::

## Rampen

Rampen dienen dazu, Segmente vom Typ Highway oder Freeway auf Höhe von höhenversetzten Anschlussstellen (Kreuzungen mit getrennten Ebenen) zu verbinden.

Beim Tracé gilt das Prinzip "je einfacher, desto besser": ein einziges Rampensegment reicht in der Regel aus, mit einer einzigen Verbindung, wenn die Distanzen gering sind. Eine Aufteilung in mehrere Segmente ist nur gerechtfertigt, wenn die Enden deutlich voneinander entfernt sind. Einen Abgangswinkel von 20 bis 30° beibehalten, um die Anweisung "Ausfahren" zu erzeugen.

## Highway- und Freeway-Kreuzungen

### Ausfahrten

Die Ausfahrtsrampen müssen von der Hauptstrasse in einem Winkel von 20 bis 30° abzweigen. Dieser Winkel erzeugt die Anweisung "Rechts ausfahren". Die Segmente vor und nach der Verbindung bleiben vom Typ Highway oder Freeway, mit gleichem Namen, in einem Winkel von etwa 0°; die Rampe ist vom Typ Ramp.

### Highway- / Freeway-Aufteilung

Wenn drei Highway-Segmente ohne offensichtliches "geradeaus" zusammentreffen, erzeugen unterschiedliche Namen und Winkel von 20 bis 30° eine Anweisung "Rechts halten" oder "Links halten" mit dem Namen des Astes.

### Führungssegmente

Die Führungssegmente sollten 15 bis 20 Meter lang sein. Sie dienen dazu, den Fahrer bei einer Fahrspurreduktion, bei inkonsistenter Beschilderung oder bei nicht offensichtlichem Routing (zum Beispiel links ausfahren und dann rechts einordnen) vorzuwarnen. Die drei betroffenen Segmente müssen unterschiedliche Namen tragen, und die beiden umgebenden Segmente vom gleichen Typ sein.

### Rampenaufteilung

Die Quelle beschreibt ausserdem die Aufteilung einer Rampe. Das gleiche Prinzip von Winkeln und Benennung gilt, um die erwartete Anweisung zu erhalten.

## Brücken und Tunnel

Strassen, die sich überlagern, ohne sich wirklich zu kreuzen (Brücken, Überführungen, Unterführungen, Tunnel), müssen durch Höhenniveaus der Segmente getrennt werden.

- Standardmässig ist jedes Segment auf Niveau 0.
- Die Brückenfunktion (Bridge) weist dem oberen Segment ein Niveau eine Einheit über dem höheren der beiden ausgewählten Segmente zu.
- Ein Tunnel erhält das Niveau -1, damit Waze ihn als Tunnel erkennt und automatische Kartenfehler ausschliesst.

::: important Bedingungen der Brückenfunktion
Die Brückenfunktion wirkt auf zwei Segmente gleichzeitig und verlangt übereinstimmende Eigenschaften: Land, Kanton, Ort und Strassenname. Sie funktioniert nicht, wenn ein Segment keine definierte Fahrtrichtung hat ("Unbekannt"). Der Strassentyp und die Sperrung sind ohne Bedeutung.
:::

Nach der Anwendung die erhaltenen Niveaus manuell korrigieren und die unnötig gewordenen Geometriepunkte dort löschen, wo zuvor eine Kreuzung bestand.

## Anschlussstellen

Für Anschlussstellen verweist der Leitfaden auf eine eigene externe Ressource.

::: note Limited Access Interchange Style Guide
Die Details der Anschlussstellen werden hier nicht wiedergegeben. Sich auf den in der Quelle angegebenen "Limited Access Interchange Style Guide" beziehen.
:::

::: quote Quellen
- Kreuzungen: https://www.waze.com/discuss/t/kreuzungen/377258
- Leitfaden für Kreuzungen (Schweiz): https://www.waze.com/discuss/t/guide-des-intersections/377286
- Unterführungen und Brücken: https://www.waze.com/discuss/t/unterfuhrungen-und-brucken/377274
- Soft und Hard Turns: https://www.waze.com/discuss/t/soft-und-hard-turns/377271
:::
