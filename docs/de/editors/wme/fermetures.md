---
title: Strassensperrungen
order: 10
---

<img class="macaron" src="/img/editors/roadblock.png" alt="" width="128" height="128">

# Strassensperrungen

Diese Seite behandelt die Verwaltung von Strassensperrungen und zeitlich begrenzten Fahrverboten in der Schweiz: die Wahl des Vorgehens je nach Dauer, das Hinzufügen zeitlicher Beschränkungen im Editor, das Melden einer Sperrung und die Bearbeitung von Update Requests (URs) zu Sperrungen.

## Zwei Ansätze je nach Dauer

Die Wahl der Methode hängt von der Dauer der Sperrung ab.

- **Kurze Dauer (von einigen Stunden bis zu einigen Wochen):** die Sperrung über die App oder das DACH-Formular melden (siehe „Eine Sperrung melden" weiter unten). Die Karte wird innerhalb von etwa zwei Tagen aktualisiert.
- **Lange Dauer (von mehreren Monaten bis zu mehreren Jahren):** eine zeitliche Beschränkung direkt auf dem oder den Segmenten im Editor anwenden. Die Beschränkung ist sofort aktiv, ohne auf eine Kartenaktualisierung warten zu müssen.

## Eine zeitliche Beschränkung hinzufügen

Zeitliche Beschränkungen werden Segment für Segment gesetzt und berücksichtigen die Fahrtrichtung. Achte auf die Richtung: eine auf „A nach B" gesetzte Beschränkung gilt nicht automatisch für „B nach A".

Vorgehensweise:

1. Das Segment auswählen, dann auf das Uhr-Symbol „Beschränkung hinzufügen" klicken oder das Tastenkürzel <kbd>T</kbd> verwenden.
2. Auf einer Strasse mit Gegenverkehr erscheinen zwei Reiter: **„A nach B"** und **„B nach A"**, die den beiden Fahrtrichtungen entsprechen. Im Reiter der betreffenden Richtung arbeiten.
3. **Tage:** die betreffenden Tage ankreuzen. Die Links „Alle auswählen / abwählen" erleichtern die Eingabe.
4. **Uhrzeiten:** „Ganzer Tag" für eine durchgehende Beschränkung wählen oder einen Zeitraum im 24-Stunden-Format festlegen (zum Beispiel „10:00 bis 15:00").
5. **Überschreiten von Mitternacht:** für einen Zeitraum, der Mitternacht überschreitet (zum Beispiel 22 Uhr bis 5 Uhr), „22:00 bis 05:00" eingeben. Das System verlängert automatisch auf den folgenden Tag; die Eingabe nicht verdoppeln.
6. **Datumsbereich:** standardmässig wiederholt sich die Beschränkung jede Woche. „Bereich" wählen, um sie auf genaue Daten zu beschränken (Grenzen inklusive).
7. **Fahrzeugtypen:** standardmässig sind alle Fahrzeuge betroffen. Auf „Bearbeiten" klicken, um die Beschränkung auf bestimmte Typen einzugrenzen. Die angekreuzten Typen sind jene, die blockiert werden.
8. **Beschreibung:** den Grund der Sperrung angeben (Baustelle, Veranstaltung usw.). Der Text ist auf **100 Zeichen** begrenzt; darüber hinaus schlägt das Speichern fehl.

### In die Gegenrichtung kopieren

Nachdem eine Beschränkung erstellt wurde, „Dieselbe Beschränkung für die Gegenrichtung kopieren" verwenden, um sie auf beide Richtungen anzuwenden. Ohne diese Aktion gilt die Beschränkung nur für die ausgewählte Richtung.

### Auf mehrere Segmente anwenden

Um eine Beschränkung auf eine Folge von Segmenten anzuwenden, mehrere davon auswählen (Strg oder Cmd unter macOS), dann „Auf alle anwenden" verwenden, um die Beschränkung auf die gesamte Auswahl zu übertragen. Vorab die Einbahnstrassen und die Richtung der Segmente (A nach B oder B nach A) prüfen, bevor übertragen wird.

## Eine Sperrung melden

- **Über die App:** „Melden > Sperrung". Die Meldung erfolgt vom betreffenden Ort aus.
- **Über das DACH-Formular:** für Sperrungen, die nicht vor Ort gemeldet werden können. In beiden Fällen spiegelt die Karte die Änderung innerhalb von etwa zwei Tagen wider.

## URs zu Sperrungen bearbeiten

Die Bearbeitung eines Update Requests zu einer Sperrung folgt dem Vorsichtsprinzip:

- Nur dann mit **„Behoben"** abschliessen, wenn die Ursache identifiziert, die Korrektur angewendet und die Änderung gespeichert wurde.
- Wenn die Situation nicht überprüft werden kann, mit **„Nicht identifiziert"** abschliessen.
- Keinen falschen Abschluss vornehmen.
- Fälle, in denen die Fahrtrichtung mehrdeutig ist, mit Vorsicht behandeln.

## Rolle RTC State Manager

Die Schweiz verfügt über eine spezielle, den Sperrungen gewidmete Rolle, den **RTC State Manager**, dokumentiert auf der Seite zu den Bearbeitungsrechten der Community. Für die Verteilung der Rollen und Rechte siehe [Editor-Rollen](/de/editors/wme/roles).

::: note Verfahren RTC / MTE nicht im Detail beschrieben
Die herangezogenen Quellen beschreiben kein eigenes Verfahren für die Abkürzungen „RTC" (Real Time Closures) oder „MTE" (Major Traffic Events). Vor dem Anwenden dieser Art von Sperrung im Schweizer Forum und auf dem Discord-Server nachschlagen.
:::

::: important Vorsichtsregel
Im Zweifelsfall, bei fehlenden Informationen oder in einer mehrdeutigen Situation die Karte nicht auf Grundlage von Vermutungen oder der Regeln eines Nachbarlandes ändern. Die Frage systematisch im Schweizer Forum stellen.
:::

::: quote Quellen
- Straßensperrungen und zeitlich beschränkte Fahrverbote: https://www.waze.com/discuss/t/strassensperrungen-und-zeitlich-beschrankte-fahrverbote/377293
- Französischsprachiger Hub (Fermeture des URs): https://www.waze.com/discuss/t/informations-en-francais/377254
- Bearbeitungsrechte der Schweizer Community: https://www.waze.com/discuss/t/377276
:::
