---
title: Feldwege
---

# Feldwege

Feldwege (landwirtschaftliche Wege) folgen einer einheitlichen Vereinbarung für die Schweiz. Die Klassifizierung hängt von zwei Kriterien ab: dem Bestehen eines Fahrverbots und dem Zustand des Belags.

## Grundsatz

Waze ist eine Community-Verkehrsapp, kein Werkzeug für die Geländenavigation. Die Klassifizierung bevorzugt die Bedürfnisse des gewöhnlichen Verkehrs gegenüber spezialisierten Nutzungen.

## Klassifizierung

### Erdweg mit Fahrverbot

Für unbefestigte Wege mit Fahrverbot (ausser Anwohner oder berechtigte Fahrzeuge):

- Segmenttyp: Private Road
- Wirkung: blockiert den gesamten Verkehr, ausser um ein auf diesem Segment gelegenes Ziel zu erreichen

### Erdweg ohne Fahrverbot

Zwei Optionen je nach Gelände:

- Street mit dem Attribut Unpaved (unbefestigt): fügt eine Strafe hinzu, die der Nutzer in seinen Einstellungen anpassen kann (erlauben, vermeiden, lange Abschnitte vermeiden). Empfohlen, wenn die Wahl dem Nutzer überlassen werden kann.
- Off-road / Not Maintained: wendet eine sehr hohe Strafe an, das Routing ist in fast allen Fällen blockiert. Vorbehalten für wirklich unpassierbares Gelände (echte 4x4-Pisten).

### Befestigter Landweg ohne Fahrverbot

Zwei Optionen:

- Typ Street
- Typ Narrow Road, bevorzugt für einspurige Passagen

## Zum Attribut Unpaved

::: note Notiz
Das Attribut Unpaved lässt sich jeder Street hinzufügen und fügt eine Strafe hinzu, die der Nutzer vermeiden kann oder nicht. Auf ein Segment angewendet, das bereits eine Typenstrafe trägt (Private Road, Off-road), hat es keine Wirkung.
:::

::: quote Quellen
- Waze Discuss, Field Roads / Feldwege / Routes à travers champs (2017): https://www.waze.com/discuss/t/field-roads-feldwege-routes-a-travers-champs-new-2017/64680
:::
