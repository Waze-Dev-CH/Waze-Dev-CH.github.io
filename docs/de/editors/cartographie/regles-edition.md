---
title: "Bearbeitungsregeln: Westschweiz"
description: Spezifische Regeln für die Westschweiz zur Bearbeitung der Waze-Karte.
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/checkmark.png" alt="">

# Bearbeitungsregeln: Westschweiz

::: note Stufe L2
Diese Regeln gelten, sobald Sie wesentliche Änderungen an der Karte vornehmen.
:::

## Grundlegende Ziele

Jede Kartenbearbeitung muss drei Ziele verfolgen:

1. **Benutzerfreundlichkeit**: einfache Karten mit klaren Navigationsanweisungen, die nur dann gegeben werden, wenn es nötig ist
2. **Einfachheit**: übermässige Detailtiefe vermeiden (zu viele Fahrspuren, unnötige Segmente), die Komplexität und Wartungsaufwand erzeugt
3. **Erhaltung**: bestehende Segmente nicht ohne Grund löschen, denn sie enthalten wertvolle Daten (Geschwindigkeiten, Routing-Verlauf)

## Benennung der Segmente

Siehe [Benennung von Strassen und Städten](/de/editors/cartographie/nommage-routes): die Referenzseite für Gross- und Kleinschreibung, Abkürzungen und Strassentypen.

## Parkplätze und Parkflächen

### Zu kartierende Wege

Nur die für die Navigation wesentlichen Elemente kartieren:

- An das Strassennetz angeschlossene Ein- und Ausfahrten
- Wege entlang von Geschäftsgebäuden
- Umfahrungswege grosser Parkplätze
- Hauptverkehrsachsen grosser Anlagen

Einzelne Parkbuchten sowie Nebenwege ohne Routing-Relevanz nicht kartieren.

### POIs und Parkzonen

Nur für Parkplätze mit eigenen Zufahrtswegen vorbehalten. Die Kategorie **Parking Lot** und den genauen Namen mit dem Symbol **P** verwenden, sofern verfügbar. Das Feld im Zweifelsfall leer lassen. Generische Begriffe wie «Parc» oder Abkürzungen vermeiden.

## Fusswege

Siehe [Fusswege](/de/editors/cartographie/chemins-pietons): wann sie einzubeziehen sind und wann sie nicht gezeichnet werden sollen.

## Private Wege

Private Wohnwege nicht kartieren, ausser wenn sie:
- Mehrere Wohnungen erschliessen
- Länger als 100 Meter sind
- Ein nachgewiesenes Routing-Problem verursachen

## Wendemanöver (U-Turns)

Nur zulassen, wenn:
- Das Manöver eine Sackgasse erzeugt
- Es legal, sicher und durch eine offizielle Beschilderung gekennzeichnet ist

## Aufteilung in Einbahnstrassen

Eine zweispurige Strasse darf nur dann in zwei Einbahnsegmente aufgeteilt werden, wenn:
- Die physische Trennung **≥ 5 Meter** beträgt
- Die GPS-Punkte beim **Zoom 100 Meter** ausreichend voneinander entfernt sind

Autobahnen und Schnellstrassen mit durch einen Mittelstreifen getrennten Fahrbahnen verdienen grundsätzlich zwei Einbahnsegmente.

## Brücken und Ebenen

Nicht die Ebene einer ganzen Strasse ändern. Unterschiedliche Ebenen nur den betroffenen **einzelnen Segmenten** zuweisen (Brücke, Unterführung, Viadukt). Die Ebene ist lokal, nicht global.

## Unfertige Segmente

Unfertige Segmente sind nicht gesperrt. Die Arbeit korrekt abschliessen, bevor die Aktualisierungen an die Nutzer weitergegeben werden.

## Mikrosegmente

Mindestlänge: **5 Meter**. Darunter wird die Berechnung von Geschwindigkeit und Navigation gestört.

## Schleifen (Loops)

Jede Schleife benötigt **mindestens 3 Segmente**. Eine Schleife mit 2 Segmenten erzeugt Routing-Fehler. Eine Schleife mit 1 Segment muss umstrukturiert oder gelöscht werden.

## Sackgassen

Keinen Kreisverkehr oder keine Wendeschleife am Ende eines Weges kartieren. Das Segment einfach bis zum am weitesten erreichbaren Punkt verlängern.

## Enge Strassen (Narrow Street)

Diesen Typ nur auf Wege anwenden, die:
- **Zweispurig** sind
- **Länger als 50 Meter** sind
- Jeweils nur **ein einziges Standardfahrzeug** passieren lassen

Ausschliessen: Einbahnstrassen, Brücken, Sackgassen, Durchfahrten mit Ampeln oder verkehrsberuhigenden Massnahmen.

::: important Wichtig
Bei Zweifeln an einer Regel keine Änderung vornehmen. Stellen Sie Ihre Frage im [Westschweizer Forum](https://www.waze.com/discuss/c/editors/switzerland/romandie/4797) oder auf Discord.
:::
