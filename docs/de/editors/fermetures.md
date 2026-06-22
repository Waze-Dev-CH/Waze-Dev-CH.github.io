---
title: Straßensperrungen
---

# Straßensperrungen

Diese Seite behandelt den Umgang mit Straßensperrungen und zeitlich beschränkten Fahrverboten in der Schweiz: die Wahl des Vorgehens je nach Dauer, das Hinzufügen zeitlicher Beschränkungen im Editor, das Melden einer Sperrung und die Bearbeitung von Sperrungs-Update-Requests (URs).

## Zwei Ansätze je nach Dauer

Die Wahl der Methode hängt von der Dauer der Sperrung ab.

- **Kurze Dauer (von einigen Stunden bis zu einigen Wochen):** die Sperrung über die App oder das DACH-Formular melden (siehe „Eine Sperrung melden" weiter unten). Die Karte wird innerhalb von etwa zwei Tagen aktualisiert.
- **Lange Dauer (von mehreren Monaten bis zu mehreren Jahren):** eine zeitliche Beschränkung direkt auf dem oder den Segmenten im Editor anwenden. Die Beschränkung ist sofort aktiv, ohne auf eine Kartenaktualisierung zu warten.

## Eine zeitliche Beschränkung hinzufügen

Zeitliche Beschränkungen werden Segment für Segment gesetzt und berücksichtigen die Fahrtrichtung. Achten Sie auf die Richtung: eine auf „A nach B" gesetzte Beschränkung gilt nicht automatisch für „B nach A".

Vorgehen:

1. Das Segment auswählen, dann auf das Uhrsymbol „Eine Beschränkung hinzufügen" klicken oder das Tastenkürzel **T** verwenden.
2. Auf einer Straße mit Gegenverkehr erscheinen zwei Registerkarten: **„A nach B"** und **„B nach A"**, die den beiden Fahrtrichtungen entsprechen. In der Registerkarte der betreffenden Richtung arbeiten.
3. **Tage:** die betreffenden Tage ankreuzen. Links „Alle auswählen / abwählen" erleichtern die Eingabe.
4. **Stunden:** „Ganztägig" für eine durchgehende Beschränkung wählen oder eine Zeitspanne im 24-Stunden-Format festlegen (zum Beispiel „10:00 bis 15:00").
5. **Mitternachtsüberschreitung:** für eine Spanne, die Mitternacht überschreitet (zum Beispiel 22 Uhr bis 5 Uhr), „22:00 bis 05:00" eingeben. Das System verlängert sie automatisch auf den folgenden Tag; die Eingabe nicht verdoppeln.
6. **Datumsbereich:** standardmäßig wiederholt sich die Beschränkung jede Woche. „Bereich" wählen, um sie auf bestimmte Daten zu beschränken (Grenzen eingeschlossen).
7. **Fahrzeugtypen:** standardmäßig sind alle Fahrzeuge betroffen. Auf „Bearbeiten" klicken, um die Beschränkung auf bestimmte Typen einzuschränken. Die angekreuzten Typen sind die gesperrten.
8. **Beschreibung:** den Grund der Sperrung angeben (Baustelle, Veranstaltung usw.). Der Text ist auf **100 Zeichen** beschränkt; darüber hinaus schlägt das Speichern fehl.

### In die Gegenrichtung kopieren

Nach dem Erstellen einer Beschränkung „Dieselbe Beschränkung für die Gegenrichtung kopieren" verwenden, um sie auf beide Richtungen anzuwenden. Ohne diese Aktion gilt die Beschränkung nur für die ausgewählte Richtung.

### Auf mehrere Segmente anwenden

Um eine Beschränkung auf eine Reihe von Segmenten anzuwenden, mehrere auswählen (Strg, oder Cmd unter macOS) und dann „Auf alle anwenden" verwenden, um die Beschränkung auf die gesamte Auswahl zu übertragen. Vorab die Einbahnstraßen und die Richtung der Segmente (A nach B oder B nach A) prüfen, bevor übertragen wird.

## Eine Sperrung melden

- **Über die App:** „Melden > Sperrung". Die Meldung erfolgt vom betreffenden Ort aus.
- **Über das DACH-Formular:** für Sperrungen, die nicht vor Ort gemeldet werden können. In beiden Fällen spiegelt die Karte die Änderung innerhalb von etwa zwei Tagen wider.

## Sperrungs-URs bearbeiten

Die Bearbeitung eines Sperrungs-Update-Requests folgt dem Grundsatz der Vorsicht:

- Nur als **„Gelöst"** schließen, wenn die Ursache identifiziert, die Korrektur angewendet und die Änderung gespeichert wurde.
- Wenn die Situation nicht überprüft werden kann, als **„Nicht identifiziert"** schließen.
- Keine falsche Schließung vornehmen.
- Fälle, in denen die Fahrtrichtung mehrdeutig ist, mit Vorsicht behandeln.

## Rolle RTC State Manager

Die Schweiz verfügt über eine spezielle Rolle für Sperrungen, den **RTC State Manager**, dokumentiert auf der Seite zu den Editierrechten der Community. Zur Verteilung der Rollen und Rechte siehe [Organisation der Community](/de/editors/organisation-communaute).

::: note RTC- / MTE-Verfahren nicht ausführlich beschrieben
Die konsultierten Quellen beschreiben kein eigenes Verfahren speziell für die Abkürzungen „RTC" (Real Time Closures) oder „MTE" (Major Traffic Events). Vor dem Anwenden dieser Art von Sperrung auf das Schweizer Forum und den Discord-Server zurückgreifen.
:::

::: important Vorsichtsregel
Im Zweifelsfall, bei fehlenden Informationen oder einer mehrdeutigen Situation die Karte nicht auf der Grundlage von Annahmen oder der Regeln eines Nachbarlandes ändern. Die Frage stets im Schweizer Forum stellen.
:::

::: quote Quellen
- Straßensperrungen und zeitlich beschränkte Fahrverbote: https://www.waze.com/discuss/t/strassensperrungen-und-zeitlich-beschrankte-fahrverbote/377293
- Frankophoner Hub (Sperrungs-URs): https://www.waze.com/discuss/t/informations-en-francais/377254
- Editierrechte der Schweizer Community: https://www.waze.com/discuss/t/377276
:::
