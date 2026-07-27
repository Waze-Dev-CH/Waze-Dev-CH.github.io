---
title: Haltestellen des öffentlichen Verkehrs
description: Haltestellen-Orte anhand der offiziellen SBB-Daten erstellen, zusammenführen und bereinigen.
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/location.png" alt="">

# Haltestellen des öffentlichen Verkehrs

Die Ebene **Haltestellen des öffentlichen Verkehrs** zeigt die offiziellen SBB-Haltestellen.
Sie dient dazu, die in Waze fehlenden zu erstellen und diejenigen zu erkennen, die nicht mehr
existieren.

::: important Die Ebene zeigt nur, was eine Handlung erfordert
Eine in der Nähe bereits unter demselben Namen kartierte Haltestelle wird ausgeblendet. Wenn
die Karte bei einem gut gepflegten Bahnhof leer wirkt, ist das normal: Es gibt dort nichts zu
tun.
:::

## Die Karte lesen

| Symbol | Bedeutung | Was damit zu tun ist |
| --- | --- | --- |
| **Oranger** Punkt | Offizielle Haltestelle, die in Waze fehlt | Erstellen oder mit einem nahen Ort zusammenführen |
| **Roter** Punkt | Waze-Ort ohne entsprechende offizielle Haltestelle | Prüfen und dann löschen, wenn sie wirklich verschwunden ist |
| Punkt mit einer **Zahl** | Eine Gruppe von Haltestellen, bei geringem Zoom | Anklicken, um darauf zu zoomen |

## Eine Haltestelle erstellen oder zusammenführen

Klicken Sie auf einen orangen Punkt.

::: reminder Sie müssen weit genug hineingezoomt sein
Wenn Sie es nicht genug sind, zentriert und zoomt das Skript lediglich auf die Haltestelle.
Klicken Sie ein zweites Mal auf den Punkt, um den Dialog zu öffnen.
:::

Das Skript prüft dann, ob in der Nähe bereits ein Verkehrs-Ort existiert:

- **Kein Ort in der Nähe**: Es erstellt den Ort direkt, mit seinem offiziellen Namen und
  seiner Kategorie.
- **Ein bestehender Ort**: Ein Dialog bietet **Zusammenführen**, **Zusammenführen und
  Koordinaten aktualisieren**, **Neuen speichern** oder **Abbrechen** an.
- **Mehrere in Frage kommende Orte**: Es fragt Sie zuerst, welchen Sie wählen wollen.

**Zusammenführen** wendet die offiziellen Informationen auf den bestehenden Ort an, ohne
einen neuen zu erstellen. Das ist fast immer die richtige Wahl, wenn die Haltestelle schon da
ist, aber falsch benannt.

Der Ort wird danach im Editor ausgewählt, damit Sie ihn prüfen können, mit bereits
ausgefüllter Stadt. Der orange Punkt verschwindet.

## Was das Skript mit dem Namen macht

Die Rohnamen der SBB sind so nicht verwendbar. Das Skript bereinigt sie, bevor es sie
vorschlägt: Es entfernt den Namen der Ortschaft, wenn er die Stadt bereits doppelt, lässt
Angaben in Klammern weg, schreibt Abkürzungen aus (`Rte` wird zu `Route`) und legt die
übrigen Schreibweisen als Alternativnamen ab.

## Eine veraltete Haltestelle löschen

Ein Klick auf einen roten Punkt schlägt das Löschen des Ortes vor.

::: important Prüfen Sie, bevor Sie löschen
Eine Haltestelle kann aus guten Gründen verschwinden (aufgehobene Linie, verlegte
Haltestelle), aber auch deshalb, weil der Waze-Ort einen Namen trägt, der zu weit vom
offiziellen Namen entfernt ist. In diesem zweiten Fall muss der Name korrigiert und nicht der
Ort gelöscht werden.

Häfen und Anlegestellen werden nie als veraltet gemeldet.
:::

Oben auf der Karte wird eine **Schaltfläche in Busform** hinzugefügt: Sie lädt die
Haltestellen neu, ohne den Ausschnitt zu verschieben, was praktisch ist, nachdem man mehrere
davon bearbeitet hat.

::: quote Quellen
- Repository des Skripts: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Daten der Haltestellen: SBB, https://data.sbb.ch
:::
