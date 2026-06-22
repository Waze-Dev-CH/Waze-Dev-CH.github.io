---
title: Segmenttypen und Routing
---

# Segmenttypen und Routing

Diese Seite erklärt die Segmenttypen in WME, ihre Auswirkung auf die Routenberechnung und die nach Strassentyp erwarteten Sperrstufen in der Schweiz.

## Strassenhierarchie

WME verwendet eine strikte Klassifizierung. Vom höchsten zum niedrigsten Rang: Autobahn und Schnellstrasse, dann Rampen, Hauptverkehrsstrassen, Nebenverkehrsstrassen, dann primäre Strassen und Strassen.

::: important Kontinuitätsprinzip
Die Abfolge von Segmenten eines bestimmten Typs darf niemals durch Segmente eines niedrigeren Typs unterbrochen werden. Diese Regel gewährleistet die Konsistenz des Netzes.
:::

## Auswirkung auf das Routing

Waze verwendet das "Pruning" (Beschneiden), um die niedrigeren Typen je nach Entfernung schrittweise auszuschliessen.

- Strassen werden schnell beschnitten.
- Autobahnen und Rampen werden niemals beschnitten: Sie werden immer berücksichtigt.

### Kurze gegen lange Fahrten

- Kurze Fahrt (zum Beispiel Genève nach Lausanne): Alle Strassentypen werden berücksichtigt, einschliesslich der Nebensegmente.
- Lange Fahrt (zum Beispiel Genève nach Zürich): Nur die höheren Typen (Autobahnen, Hauptverkehrsstrassen) werden für den grössten Teil der Strecke berücksichtigt.

::: note Routing-Einstellungen
Die Routing-Einstellungen kommen nur beim Pruning von Langstreckenfahrten zum Tragen. Sie beeinflussen lokale Fahrten nicht, entgegen einer weit verbreiteten Annahme.
:::

## Sperrstufen (Locks)

Schweizer Standard: nach Strassentyp erwartete Sperrstufe.

| Strassentyp | Sperrstufe |
| --- | --- |
| Autoroute (Freeway) | L5 |
| Route majeure (Major Highway) | L4 |
| Route mineure (Minor Highway) | L3 |
| Rue primaire (Primary Street) | L2 |
| Rue (Street) | L1 |

::: reminder Erinnerung
Je höher der Strassentyp in der Hierarchie steht, desto höher ist die erwartete Sperrstufe. Dies schützt die strukturierenden Segmente des Netzes vor unbeabsichtigten Änderungen.
:::

### Sperren (Locking)

Mit Mass sperren. Das Sperren zielt vor allem auf die strukturierenden Typen ab: Autobahnen, Strassen, Rampen und Kreisverkehre. Man sollte nicht alles ohne Grund sperren, denn eine zu breite Sperrung bremst die anderen Editoren unnötig aus.

Ein Editor kann ein gesperrtes Segment nur dann ändern, wenn sein Rang mindestens der Sperrstufe entspricht. Die Sperrstufe je nach Bedeutung des Segments wählen, nicht aus übertriebener Vorsicht.

::: quote Quellen
- Routing-Grundlagen: Segmenttypen in WME und Auswirkungen auf lange/kurze Fahrten: https://www.waze.com/discuss/t/bases-du-routing-types-de-segments-dans-wme-et-effets-sur-les-trajets-longs-courts/389975
- Informationen auf Französisch: https://www.waze.com/discuss/t/informations-en-francais/377254
- Sperrstufen: Schweizer Community-Regeln, zusammengefasst im Skript WME Switzerland Helper.
:::
