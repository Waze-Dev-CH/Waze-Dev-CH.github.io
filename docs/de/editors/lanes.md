---
title: Fahrspuren (Lanes) und Bahnübergänge
---

# Fahrspuren (Lanes) und Bahnübergänge

Die Fahrspurführung (Lane Guidance), die Anweisungen über Pfeile und die Bahnübergänge folgen Bearbeitungsregeln, die spezifisch für die Schweiz sind.

::: important Reserviert für L3-Editoren und höher
Die Konfiguration der Fahrspurführung und der Anweisungen über Pfeile ist Editoren der Stufe L3 und höher vorbehalten. Bahnübergänge erfordern eine noch höhere Stufe. Wenn Sie nicht über die erforderliche Stufe verfügen, bearbeiten Sie diese Objekte nicht.
:::

## Fahrspurführung (Lanes)

Die Fahrspurführung gibt dem Fahrer an, welche Spur oder Spuren bei der Annäherung an eine Kreuzung zu nutzen sind. In der Schweiz folgt sie dem KISS-Prinzip („Keep It Simple, Stupid"): in der Regel **keine Abbiegespuren zeichnen**. Die meisten Kreuzungen benötigen sie nicht, und unnötige Spursegmente verkomplizieren die Karte, erschweren die Validierung und verlangsamen die Routenberechnungen.

Das Zeichnen von Abbiegespuren ist nur in besonderen Fällen gerechtfertigt:

- Die Spur beginnt deutlich vor der Kreuzung und ist physisch von ihr getrennt (Mittelstreifen, Insel), sodass ein Spurwechsel unmöglich wird.
- Es besteht das Risiko, dass die Abbiegeanweisung zu spät kommt, um die richtige Spur vor der Kreuzung zu erreichen.
- Ein Kartenfehler („Map problem") erfordert ein Spursegment als Behelfslösung.
- Rückmeldungen von Nutzern oder Area Managern melden verspätete Sprachansagen.

Im Zweifelsfall die Spur nicht zeichnen: Einfachheit dient den Nutzern besser als Komplexität. Für die Einrichtung der Kreuzungen siehe [Kreuzungen](/de/editors/intersections).

## Anweisungen über Pfeile (Abbiegeanweisungen)

Die Anweisungen über Pfeile sind ein ergänzendes Mittel, um eine Sprachansage zu **erzwingen oder zu unterdrücken**, wenn die Standardeinstellungen nicht das erwartete Ergebnis liefern. Hauptverwendungen:

- Eine Abbiegeanweisung an einer Kreuzung erzwingen oder unterdrücken.
- Eine **Wende**-Anweisung in einer Einbahnstraße erzeugen, in der die Rückfahrt möglich ist, anstelle eines „links abbiegen".
- Einen **vereinfachten Wayfinder** (links halten / rechts halten) erzeugen, der das nächste Segment ankündigt und hilft, unerwünschte Routenumwege zu vermeiden.

Eine geänderte Anweisung erkennt man an der Farbe des Lautsprechersymbols auf dem Pfeil: es wechselt von **Cyan zu Orange**. Cyan entspricht einer nicht erzwungenen Ansage, die von den Algorithmen von Waze bestimmt wird; Orange weist auf eine von einem Editor erzwungene Anweisung hin.

::: important Vorsicht für Junior-Editoren
Neue Editoren und Junior-Editoren sollten einen erfahrenen Editor zu Rate ziehen, bevor sie diese zusätzlichen Ansageoptionen verwenden.
:::

## Bahnübergänge

::: note Notiz
Seit Juni 2024 wurden die Regeln zu den Bahnübergängen in die Richtlinien „Permanent Hazards" (permanente Gefahren) von Waze verschoben. Siehe [Permanente Gefahren](/de/editors/dangers-permanents).
:::

::: note Detaillierter Inhalt zu vervollständigen
Die Schweizer Community-Quelle verweist die detaillierten Regeln auf ein externes Dokument, das hier nicht übernommen wird. Diese Seite wird vervollständigt, sobald diese detaillierten Richtlinien verfügbar sind. In der Zwischenzeit auf die Permanent-Hazards-Richtlinien und den Waze-Discuss-Thread weiter unten verweisen.
:::

::: quote Quellen
- Abbiegespuren: https://www.waze.com/discuss/t/abbiegespuren/377228
- Abbiegeanweisungen über Pfeile: https://www.waze.com/discuss/t/abbiegeanweisungen-uber-pfeile/377232
- Lanes / Railroad crossings editing rules for Switzerland: https://www.waze.com/discuss/t/lanes-railroad-crossings-editing-rules-for-switzerland/101939
:::
