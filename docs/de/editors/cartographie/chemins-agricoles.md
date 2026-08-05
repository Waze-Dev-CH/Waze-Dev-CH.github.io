---
title: Feldwege und Wege durch Felder
description: Schweizer Vereinbarung zur Kartierung von Feldwegen, Waldwegen und landwirtschaftlichen Strassen.
order: 9
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Feldwege und Wege durch Felder

::: tip Für alle zugänglich: Niveau L1
Diese Regeln gelten für alle Editoren.
:::

::: note Notiz
Von der Schweizer Community genehmigte Vereinbarung (DE: Feldwege, FR: Routes à travers champs / chemins agricoles).
:::

Waze ist **in erster Linie eine Anwendung für Autofahrer**. Es ist kein Gelände-GPS und auch kein Werkzeug für Wanderer oder Radfahrer. Öffentliche befahrbare Strassen bleiben die oberste Priorität beim Mapping.

## Strassentypen und Attribute

| WME-Typ | Strafe | Verwendung |
|----------|---------|-------|
| **Strasse (Street)** | Keine | Normale, zugängliche Strasse |
| Strasse + Attribut **Unbefestigt (Unpaved)** | Gering: der Nutzer kann sich entscheiden, sie zu vermeiden | Unbefestigter Weg, für normale Fahrzeuge zugänglich |
| **Privatstrasse (Private Road)** | Stark: Routing unmöglich, ausser in Ausnahmefällen | Privatweg, für normalen Verkehr gesperrt |
| **Feldweg / 4x4 Trail (Off-road)** | Sehr stark: Routing unmöglich | 4x4-Piste, für normale Autos unpassierbarer Weg |

::: warning Attribut "Unbefestigt"
Das Attribut *Unpaved* ist so konzipiert, dass es **nur bei Typen ohne Grundstrafe** funktioniert.

✅ Verwendbar bei: Street, Primary Street, Minor/Major Highway, Freeway
❌ Nutzlos bei: Parking Lot Road, Private Road, Narrow Street, Off-road
:::

## Fallbeispiele

### Fall 1: Unbefestigter Weg mit Fahrverbotsschild (ausser bestimmte Fahrzeuge)

Zwei akzeptable Optionen:
1. **Street + Unpaved**: der Nutzer kann über die App-Einstellungen entscheiden, ob er diesen Weg nutzen möchte
2. **Off-road / Not maintained**: vermeidet das Routing in 99 % der Fälle, selbst für Nutzer, die unbefestigte Wege akzeptieren

### Fall 2: Kleine asphaltierte Strasse mit Fahrverbotsschild (ausser bestimmte Fahrzeuge)

→ **Private Road**

### Fall 3: Kleine asphaltierte Strasse ohne Fahrverbotsschild

Zwei akzeptable Optionen:
1. **Street**: Nutzer mit gesetzlicher Durchfahrtsberechtigung können dorthin geroutet werden
2. **Narrow Street** (Schmale Strasse): bevorzugt für einspurige Durchfahrten, ermöglicht mehr Flexibilität beim Routing

::: note Zum Attribut Unpaved
Das Attribut Unpaved wird zu jeder beliebigen Street hinzugefügt und fügt eine Strafe hinzu, die der Nutzer vermeiden kann oder nicht. Auf ein Segment angewendet, das bereits eine typbedingte Strafe trägt (Private Road, Off-road), hat es keine Wirkung.
:::

::: quote Quellen
- Waze Discuss, Field Roads / Feldwege / Routes à travers champs (2017): https://www.waze.com/discuss/t/field-roads-feldwege-routes-a-travers-champs-new-2017/64680
:::
