---
title: Aktualisierungszeiten der Karte
description: Verstehen, wann im WME vorgenommene Änderungen in der App und auf dem Routing-Server sichtbar werden.
order: 12
---

<img class="banner-img is-narrow" src="/img/editors/clocks.png" alt="">

# Aktualisierungszeiten der Karte

::: tip Für alle zugänglich: Niveau L1
Das Verständnis dieser Verzögerungen verhindert, dass bereits korrigierte Segmente erneut bearbeitet werden.
:::

Waze aktualisiert verschiedene Komponenten mit unterschiedlicher Häufigkeit. Die Änderungen im WME sind **nicht sofort überall sichtbar**.

## Tabelle der Verzögerungen

| Element | Wirksamkeitsdauer |
|---------|-------------------|
| Kartenaktualisierungen (Navigation) | **~1 Tag** auf dem Routing-Server |
| Verkehrsmeldungen (Unfälle, Geschwindigkeiten) | **Echtzeit** in der App |
| Neue Strassen | **2 bis 5 Tage** in der App und Live Map |
| Neue Strassen auf dem Routing-Server | 1 zusätzlicher Tag nach Erscheinen in der App |
| Bearbeitungsrechte für Nicht-AM (nach Fahrt) | Verfügbar innerhalb von **2 Tagen** |
| Städtenamen / Grenzen | Einige Tage |
| Punkte (Score) | **Einmal täglich** serverseitig aktualisiert |

## Details zu den Abläufen

### Kartenaktualisierungen

Waze strebt **tägliche** Aktualisierungen an: Der aktuelle Zustand der Karte wird kopiert, für die Navigation umgewandelt und an die Routing-Server gesendet. Der Vorgang dauert etwas weniger als 24 Stunden. Unter optimalen Bedingungen ist eine Änderung **am nächsten Tag** auf dem Routing-Server sichtbar.

### Neue Strassen

Nach Bearbeitung und Aktualisierung der Karte erscheint eine neue Strasse innerhalb von **2 bis 5 Tagen** in der App und auf der Live Map. Der Routing-Server kann einen zusätzlichen Tag benötigen, um die Strasse korrekt für die Routenberechnung zu verarbeiten.

### Bearbeitungsrechte (keine Area Managers)

Editoren ohne AM-Status können Routen im Umkreis von **1,6 km** von den Strassen bearbeiten, die sie befahren haben. Diese Rechte werden innerhalb von **2 Tagen** nach der aufgezeichneten Fahrt verfügbar.

### Punkte und Score

Die App zeigt die Punkte in Echtzeit an, aber der Server konsolidiert sie **einmal täglich**. Es kann daher eine vorübergehende Abweichung zwischen der App-Anzeige und dem Dashboard geben.

::: note Notiz
Wenn eine Änderung nach der angegebenen Verzögerung nicht erscheint, prüfe, ob die Speicherung im WME tatsächlich stattgefunden hat, bevor du das Segment erneut bearbeitest.
:::
