---
title: Kartenebenen
description: Die fünf Schweizer Kartenhintergründe, die der Switzerland Helper dem WME hinzufügt.
order: 1
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Kartenebenen

Der Helper fügt der Ebenenauswahl des WME, ganz unten in der rechten Leiste, fünf offizielle
Schweizer Kartenhintergründe hinzu.

## Die fünf Ebenen

| Kontrollkästchen | Was es anzeigt |
| --- | --- |
| **Gemeindegrenzen** | Die Einteilung der Gemeinden |
| **Kantonsgrenzen** | Die Einteilung der Kantone |
| **Geografische Namen swissNAMES3D** | Die amtlichen Ortsnamen: Flurnamen, Gipfel, Gewässer |
| **Landeskarten (Farbe)** | Die Schweizer Landeskarte, der klassische topografische Hintergrund |
| **SWISSIMAGE Hintergrund** | Die eidgenössischen Luftbilder, in hoher Auflösung |

Es lassen sich mehrere gleichzeitig aktivieren, und die angekreuzten Kästchen finden sich
beim Neuladen des Editors unverändert wieder. Diese Hintergründe werden immer **unter den
Segmenten und den Orten** gezeichnet: Sie verdecken nie das, was Sie gerade bearbeiten.

## Wann welche zu verwenden ist

- **SWISSIMAGE Hintergrund** ist der im Alltag nützlichste Arbeitshintergrund: Er ist über
  der Schweiz deutlich schärfer als die Standardbilder des WME und macht das Zeichnen der
  Geometrien viel zuverlässiger.
- **Landeskarten (Farbe)** hilft dort, wo das Luftbild mehrdeutig ist: dichter Wald, Gebirge,
  Weg unter Bäumen.
- **Geografische Namen swissNAMES3D** dient dazu, die Schreibweise eines Flurnamens vor der
  Eingabe zu prüfen.
- **Gemeindegrenzen** und **Kantonsgrenzen** dienen dazu, die einem Segment zugewiesene Stadt
  zu prüfen, insbesondere wenn eine Strasse unterwegs die Gemeinde wechselt.

::: help Erkennen, von wann das Luftbild stammt
Die Bilder werden nicht überall gleichzeitig erneuert: Auf einem alten Bild können eine neue
Siedlung oder ein neuer Kreisel fehlen. Der Tab **WME Schweiz Helfer** enthält einen Link auf
eine Karte, die Region für Region das Jahr der Aufnahme angibt.
:::

## Wenn eine Ebene nicht angezeigt wird

- Prüfen Sie, ob das Kästchen ganz unten in der Ebenenauswahl angekreuzt ist.
- Diese Hintergründe decken nur die **Schweiz** ab: ausserhalb der Grenzen gibt es nichts
  anzuzeigen.
- Die Grenzebenen sind aus grosser Entfernung schlecht lesbar. Zoomen Sie hinein, wenn die
  Darstellung einheitlich wirkt.

::: quote Quellen
- Repository des Skripts: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Karten und Luftbilder: swisstopo, https://www.geo.admin.ch
:::
