---
title: Grundlagen des Routings
description: Wie die Segmenttypen die Routenberechnung in Waze beeinflussen, das Pruning und die erwarteten Sperrstufen.
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Grundlagen des Routings

::: note Stufe L2
Ein gutes Verständnis des Routings ist notwendig, um die Segmente korrekt zu klassifizieren.
:::

Der WME klassifiziert die Segmente nach einer Hierarchie, die den Navigationsalgorithmus direkt beeinflusst, besonders bei Langstreckenfahrten.

## Hierarchie der Straßentypen

Vom wichtigsten zum unwichtigsten:

1. Autobahnen und Schnellstraßen (Freeway / Major Highway)
2. Auffahrten (Sonderfall)
3. Hauptstraßen (Minor Highway)
4. Primäre Straßen (Primary Street)
5. Straßen (Street)

## Kontinuitätsprinzip

> Die Kontinuität der Typen ist im WME wesentlich: Man darf niemals eine Abfolge von Segmenten eines bestimmten Typs durch Segmente eines niedrigeren Typs unterbrechen.

Beispiel: Eine Nationalstraße darf nicht durch ein als "Straße" klassifiziertes Segment unterbrochen werden. Das bricht die Kohärenz des Netzes und stört die Berechnung langer Routen.

## Pruning-Mechanismus (Beschneidung)

Waze verwendet ein System der **progressiven Beschneidung**: Je weiter man sich vom Start oder vom Ziel entfernt, desto mehr werden die Straßen mit niedriger Priorität von der Berechnung ausgeschlossen.

| Straßentyp | Verhalten |
|--------------|-------------|
| Straße / Primäre Straße | Ausgeschlossen ab einem bestimmten Distanzschwellwert |
| Haupt- / Nebenstraßen | Höherer Ausschlussschwellwert |
| Autobahnen / Auffahrten | **Niemals ausgeschlossen** |

## Kurze vs. lange Fahrten

**Kurze Fahrt** (z. B. Genève → Lausanne): Alle Straßentypen werden berücksichtigt, einschließlich der lokalen Straßen.

**Lange Fahrt** (z. B. Genève → Zürich): Nur die Autobahnen und Hauptstraßen werden verwendet. Die Nebenstraßen kommen nur in der Nähe des Starts/Ziels oder bei einer Neuberechnung ins Spiel.

## Routing-Präferenzen

::: warning Vorurteil
Die "Vermeiden"-Präferenzen in der App verhindern **nicht** die lokale Nutzung eines Segments. Sie passen nur die **Pruning-Schwellwerte** für Langstreckenfahrten an. Ein "benachteiligtes" Segment bleibt lokal nutzbar.
:::

::: example Beispiel
Eine als "benachteiligt" klassifizierte Straße wird immer benutzt, wenn sie die einzige Option ist, um ein Ziel im Quartier zu erreichen. Der Effekt zeigt sich nur bei großen Routenberechnungen.
:::

Über die Voreinstellungen hinaus wendet der Algorithmus auch Strafzeiten auf bestimmte Manöver und Segmenteigenschaften an: siehe [Routing-Strafen](/de/editors/wme/penalites-routage).

## Sperrstufen (Locks)

Schweizer Standard: erwartete Sperrstufe je Straßentyp.

| Straßentyp | Sperrstufe |
| --- | --- |
| Autobahn (Freeway) | L5 |
| Hauptstraße (Major Highway) | L4 |
| Nebenstraße (Minor Highway) | L3 |
| Primäre Straße (Primary Street) | L2 |
| Straße (Street) | L1 |

::: reminder Erinnerung
Je höher der Straßentyp in der Hierarchie steht, desto höher ist die erwartete Sperrstufe. Das schützt die strukturierenden Segmente des Netzes vor unbeabsichtigten Änderungen.
:::

Mit Maß sperren. Das Sperren zielt vor allem auf die strukturierenden Typen ab: Autobahnen, Straßen, Auffahrten und Kreisverkehre. Man sollte nicht alles ohne Grund sperren, denn eine zu weitreichende Sperre bremst die anderen Editoren unnötig.

Ein Editor kann ein gesperrtes Segment nur ändern, wenn sein Rang mindestens der Sperrstufe entspricht. Die Sperrstufe nach der Wichtigkeit des Segments wählen, nicht aus übertriebener Vorsicht.

::: quote Quellen
- Grundlagen des Routings: Segmenttypen im WME und Auswirkungen auf lange/kurze Fahrten: https://www.waze.com/discuss/t/bases-du-routing-types-de-segments-dans-wme-et-effets-sur-les-trajets-longs-courts/389975
- Informationen auf Französisch: https://www.waze.com/discuss/t/informations-en-francais/377254
- Sperrstufen: Schweizer Community-Regeln, zusammengefasst im Skript WME Switzerland Helper.
:::
