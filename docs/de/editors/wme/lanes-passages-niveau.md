---
title: Fahrspuren und Bahnübergänge
description: Bearbeitungsregeln für Fahrspuren (Lanes) und Bahnübergänge in der Schweiz (L3+).
order: 8
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Fahrspuren und Bahnübergänge

::: warning Niveau L3+
Die Konfiguration der Spurführung (Lane Guidance) und der Abbiegeanweisungen über Pfeile ist Editoren der Stufe 3 und höher vorbehalten. Wenn du nicht über das erforderliche Niveau verfügst, greife nicht auf diese Objekte zu.
:::

Die Spurführung (Lane Guidance), die Abbiegeanweisungen über Pfeile und die Bahnübergänge folgen spezifischen Bearbeitungsregeln für die Schweiz.

## Spurführung (Lanes)

Die Spurführung zeigt dem Fahrer die Spur oder die Spuren an, die er bei der Annäherung an eine Kreuzung benutzen soll. In der Schweiz folgt sie dem KISS-Prinzip (« Keep It Simple, Stupid »): in der Regel **keine Abbiegespuren einzeichnen**. Die meisten Kreuzungen benötigen keine, und unnötige Spursegmente verkomplizieren die Karte, erschweren die Validierung und verlangsamen die Routenberechnungen.

Das Einzeichnen von Abbiegespuren ist nur in besonderen Fällen gerechtfertigt:

- Die Spur beginnt deutlich vor der Kreuzung und ist physisch von ihr getrennt (Mittelstreifen, Verkehrsinsel), sodass ein Spurwechsel unmöglich wird.
- Es besteht das Risiko, dass die Abbiegeanweisung zu spät kommt, um die richtige Spur vor der Kreuzung zu erreichen.
- Ein Kartenfehler (« Map problem ») erfordert ein Spursegment als Umgehung.
- Rückmeldungen von Nutzern oder Area Managern melden verspätete Sprachansagen.

Im Zweifelsfall die Spur nicht einzeichnen: Einfachheit dient den Nutzern besser als Komplexität. Für die Einrichtung von Kreuzungen siehe [Kreuzungen](/de/editors/cartographie/intersections).

Die detaillierten Guidelines für die Konfiguration der Spuren in der Schweiz sind im offiziellen Dokument der Community verfügbar:

→ [Die vollständigen Guidelines lesen (veröffentlichtes Google Doc)](https://docs.google.com/document/d/e/2PACX-1vTbD9nEIrEABLDrGcWlyXDd9wzhHpYrksS8_yCxkcRRxvmRAsjy_1b1NZHjSeT4Lyhq63vvEtV5tCLR/pub)

## Abbiegeanweisungen über Pfeile (Abbiegeanweisungen)

Die Abbiegeanweisungen über Pfeile sind ein ergänzendes Mittel, um eine Sprachansage zu **erzwingen oder zu unterdrücken**, wenn die Standardeinstellungen nicht das erwartete Ergebnis liefern. Hauptanwendungen:

- Eine Abbiegeanweisung an einer Kreuzung erzwingen oder unterdrücken.
- Eine **Wende-Anweisung** in einer Einbahnstrasse erzeugen, in der die Rückkehr möglich ist, anstelle eines « links abbiegen ».
- Einen **vereinfachten Wayfinder** erzeugen (links / rechts halten), der das nächste Segment ankündigt und hilft, unerwünschte Routenumwege zu vermeiden.

Eine geänderte Anweisung erkennt man an der Farbe des Lautsprechersymbols auf dem Pfeil: es wechselt von **Cyan zu Orange**. Cyan entspricht einer nicht erzwungenen Ansage, die von den Waze-Algorithmen bestimmt wird; Orange signalisiert eine von einem Editor erzwungene Anweisung.

::: important Vorsicht für Junior-Editoren
Neue Editoren und Junior-Editoren sollten einen erfahrenen Editor konsultieren, bevor sie diese zusätzlichen Ansageoptionen verwenden.
:::

## Bahnübergänge

::: note Bahnübergänge: Niveau L4+
Seit Juni 2024 wurden die Regeln zu Bahnübergängen in die Richtlinien « Permanent Hazards » (permanente Gefahren) von Waze verschoben. Siehe [Permanente Gefahren](/de/editors/wme/dangers-permanents) (L4+).
:::

::: note Detaillierter Inhalt zu ergänzen
Die schweizerische Community-Quelle verweist die detaillierten Regeln auf ein externes Dokument, das hier nicht übernommen wird. Diese Seite wird ergänzt, sobald diese detaillierten Richtlinien verfügbar sind. Beziehe dich in der Zwischenzeit auf die Richtlinien Permanent Hazards und den Waze-Discuss-Thread weiter unten.
:::

## Community-Ressourcen

- [waze-switzerland.ch](https://www.waze-switzerland.ch/)

::: quote Quellen
- Abbiegespuren: https://www.waze.com/discuss/t/abbiegespuren/377228
- Abbiegeanweisungen über Pfeile: https://www.waze.com/discuss/t/abbiegeanweisungen-uber-pfeile/377232
- Lanes / Railroad crossings editing rules for Switzerland: https://www.waze.com/discuss/t/lanes-railroad-crossings-editing-rules-for-switzerland/101939
:::
