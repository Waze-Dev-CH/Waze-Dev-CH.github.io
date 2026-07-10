---
title: Benennung von Strassen und Städten
description: Konventionen zur Benennung von Segmenten, Ein-/Ausfahrten und Ortschaften in der Schweiz.
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/city.png" alt="">

# Benennung von Strassen und Städten

::: tip Für alle zugänglich: Stufe L1
Diese Seite richtet sich an alle Editoren, auch an Anfänger.
:::

Diese Seite fasst die Regeln zur Benennung von Strassen, Wegen und Städten für die Bearbeitung in der Schweiz zusammen. Die Schweizer Referenz hat immer Vorrang vor den Leitfäden der Nachbarländer.

::: important Die Schweizer Referenz hat Vorrang
Im Zweifelsfall, bei fehlenden Informationen oder ähnlichen Situationen niemals Änderungen in WME in der Schweiz auf Grundlage der Bearbeitungsregeln von Nachbarländern vornehmen. Zuerst die Schweizer Community-Quellen konsultieren.
:::

## Klassifizierung der Strassentypen

Die Waze-Klassifizierung entspricht in der Schweiz den folgenden Verkehrswegen:

| Waze-Typ | Schweizer Entsprechung |
|-----------|------------------|
| Freeway | Autobahn |
| Major Highway | Autostrasse |
| Minor Highway | National- und Hauptstrasse |
| Ramp | Autobahnauffahrten |
| Primary Street | Hauptstrasse (blaues Schild / gelbes Quadrat) |
| Street | Alle übrigen Strassen (weisses Schild) |
| Dirt Road / 4x4 | Unbefestigte Strasse, Waldweg |
| Parking Lot Road | Grosser Parkplatz |
| Private Road | Privatweg |
| Ferry | Fährüberfahrt |

## Grundsätze der Benennung

Den offiziellen und vollständigen Namen des Verkehrswegs verwenden, so wie er auf der Beschilderung erscheint. Grossbuchstaben und Akzente sind Teil des offiziellen Namens und müssen beachtet werden.

::: failure Zu vermeidende Abkürzungen
Die Wegtypen nicht abkürzen. Den Namen ausgeschrieben schreiben:

- "Chemin" und nicht "Ch."
- "Route" und nicht "Rte"
- "Avenue" und nicht "Av."
:::

::: success Korrekte Gross-/Kleinschreibung und Akzente
- "Rue de la Paix" (und nicht "rue de la paix")
- Akzente beibehalten: é, è, à, ç
:::

## Fusswege: WT vs PB

Es gibt zwei Typen mit unterschiedlichem Routing-Verhalten:

- **Walking Trail (WT), routingfähiger Fussweg**: Wenn er mit einer befahrbaren Strasse verbunden und einem Ziel am nächsten ist, kann Waze über diesen Weg routen, um das Ziel zu erreichen
- **Pedestrian Boardwalk (PB), nicht routingfähige Fussgängerzone**: wird für das Routing ignoriert, Waze leitet unabhängig von seiner Klasse zum nächstgelegenen befahrbaren Segment

## Benennung der Strassen

### Autobahnen
Als **A1**, **A2**, **A3**, **E60** usw. benennen.

### Autostrassen
Als **A1L**, **A52** usw. benennen (gemäss offizieller Beschilderung).

### Nationalstrassen (N1–N30)

- **Innerorts**: Hauptstrassenname + Eintrag «Alt Street/Alias» mit der Nummer (N1, N2…)
- **Ausserorts**: nur die Nummer (**N1**, **N2** usw.), ausser die Nationalstrasse verläuft über eine Autobahn, dann den Strassennamen verwenden

### Nummerierte Hauptstrassen (H1–…)

- **Innerorts**: Strassenname + Alias H1, H2…
- **Ausserorts**: nur die Nummer, wenn kein Strassenname vorhanden ist

### Ein- und Ausfahrtsrampen

Gemäss der Beschilderung benennen. Das Zeichen `>` verwenden, um die Richtung anzugeben (wird von der Sprachausgabe vorgelesen), und `/` zum Trennen der Städte:

```
Ausfahrt 43 > Niederbipp / Langenthal
A2 > Basel
Sortie 14 > Berne-Nord
```

### Kreuze

Autobahnkreuze und -knoten müssen im WME einen **Orientierungspunkt (Landmark)** erhalten, benannt mit der Nummer und dem Namen des Kreuzes:

```
17 Frick
8 Liestal
```

## Zweisprachige Namen

Bei einem Verkehrsweg mit einem Namen in zwei Sprachen den zweiten Namen über das Feld für den alternativen Namen («Anderen Namen hinzufügen») eingeben. Der Hauptname bleibt der offizielle Hauptname des Verkehrswegs.

## Bahnstrecken

Bahnstrecken tragen niemals einen Stadt- oder Strassennamen. Das Namensfeld leer lassen (oder den Namen der Gesellschaft angeben, ohne Stadt, siehe [Kartenlegende](/de/editors/wme/legende-carte)).

## Benennung von Städten und Dörfern

**Ausschliesslich die in der offiziellen Liste der Schweizer Ortschaften aufgeführten Namen** verwenden. Nur Orte mit einer **eigenen Postleitzahl (PLZ)** dürfen eingetragen werden.

Wichtige Regeln:

- Kein «terra nullius»: Alle Strassen müssen ein ausgefülltes Stadt-Feld haben (**ausser** Autobahnen, Rampen und Auffahrten)
- Einige grosse Städte haben mehrere PLZ und sind in Quartiere unterteilt (Lausanne, Luzern, Zürich usw.)
- Ein gleicher Name darf nur **ein einziges Mal** existieren: die Liste prüfen, bevor ein neuer Eintrag erstellt wird

::: important Wichtig
Strassennamen müssen ohne Abkürzung und mit korrekter Gross-/Kleinschreibung geschrieben werden. Beispiel: «Chemin de la Paix» und nicht «Ch. de la Paix» oder «chemin de la paix».
:::

## Fahrspuren

- **Autobahnen**: in der Regel zwei Spuren (vereinfacht das Mapping der Rampen)
- **Andere Strassen**: nur dann in zwei Richtungen trennen, wenn die physische Trennung ≥ 5 Meter beträgt oder wenn besondere Markierungen dies rechtfertigen

## Verkehrsschilder: Zur Erinnerung

| Schild | Segmenttyp |
|---------|----------------|
| Blau oder gelbes Quadrat | Primary Street |
| Weiss | Street |
| Grün | Autobahn / Autostrasse |

## Französische Regeln, nicht Schweizer Regeln

Der französische Benennungsleitfaden enthält Konventionen, die in der Schweiz nicht gelten. Nicht unverändert übernehmen:

::: important Französische Regeln, nicht Schweizer Regeln
Die folgenden Punkte gehören zum Frankreich-Leitfaden und gelten nicht in der Schweiz:

- Die französische Strassennomenklatur (Autobahnen A, Nationalstrassen N, Departementsstrassen D, Gemeindestrassen C): Die Schweiz verwendet ihre eigenen Klassifizierungen (Autobahnen A, Nationalstrassen N1 bis N30 usw.).
- Die spezifischen Formate für französische Umgehungs- und Ringstrassen (zum Beispiel "A86 - Intérieure").
- Das für das französische Netz eigene europäische Nummerierungsformat (zum Beispiel "E72").
- Das französische Format für Autobahnaus- und -einfahrten ("Sortie 18: Valensole", "A6a: Paris"): In der Schweiz verwendet man das Zeichen ">" und "/" (siehe oben).

Was aus diesem Leitfaden in der Schweiz gültig bleibt: das Prinzip des offiziellen und vollständigen Namens gemäss der Beschilderung, die Beachtung von Grossbuchstaben, Akzenten und Bindestrichen sowie das Verbot gängiger Abkürzungen.
:::

## Offizielle Referenzen

- [Liste der Autobahnen in der Schweiz (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Autobahnen_in_der_Schweiz)
- [Liste der Autostrassen in der Schweiz (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Autostrassen_in_der_Schweiz)
- [Liste der Nationalstrassen der Schweiz (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Nationalstrassen_der_Schweiz)
- [Liste der Hauptstrassen der Schweiz (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Hauptstrassen_der_Schweiz)

::: quote Quellen
- Wie man Strassen und Städte in der Schweiz benennt: https://www.waze.com/discuss/t/comment-nommer-les-routes-et-les-villes-en-suisse/377240
- Informationen auf Französisch: https://www.waze.com/discuss/t/informations-en-francais/377254
- Bearbeitungsregeln in der Westschweiz: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
- Benennung von Segmenten, Strassen, Wegen (Frankreich, anzupassen): https://www.waze.com/discuss/t/nommage-des-segments-des-rues-des-routes/375658
:::
