---
title: Geschwindigkeitsbegrenzungen
description: "Geschwindigkeitsbegrenzungen in der Schweiz im WME erfassen: allgemeine Höchstgeschwindigkeiten der VRV, Zonen 30 und Begegnungszonen, und was nicht erfasst wird."
order: 5
---

<img class="banner-img is-narrow" src="/img/editors/moto.png" alt="">

# Geschwindigkeitsbegrenzungen

Diese Seite behandelt die Erfassung der Geschwindigkeitsbegrenzungen auf den Segmenten in
der Schweiz: die Erfassungsregel, die im Bundesrecht festgelegten allgemeinen
Höchstgeschwindigkeiten, die Zonen 30 und Begegnungszonen, sowie die Fälle, in denen das
Feld leer bleibt.

## Allgemeines Prinzip

Die auf einem Segment erfasste Begrenzung ist diejenige, die für den Streckenabschnitt
**rechtlich gilt**.

- **Wenn eine Begrenzung signalisiert ist**, ist das Signal massgebend. Seinen Wert
  erfassen.
- **Ohne Signal** die **allgemeine Höchstgeschwindigkeit** des Strassentyps erfassen. Sie
  gilt von Rechts wegen, ohne dass eine Signalisation nötig wäre.

::: important Nicht mit der gefahrenen Geschwindigkeit verwechseln
Die Geschwindigkeitsbegrenzung ist ein rechtlicher Wert, keine Beobachtung. Sie lässt sich
weder aus der tatsächlich gefahrenen Geschwindigkeit noch aus den von der App gemeldeten
Verkehrsdaten ableiten.
:::

## Die allgemeinen Höchstgeschwindigkeiten in der Schweiz

Die Verkehrsregelnverordnung legt vier allgemeine Höchstgeschwindigkeiten fest.

| Strassentyp | Allgemeine Höchstgeschwindigkeit |
| --- | --- |
| Innerorts | **50 km/h** |
| Ausserorts | **80 km/h** |
| Autostrassen | **100 km/h** |
| Autobahnen | **120 km/h** |

::: note Die 50 km/h gelten manchmal ohne Signal
Die Begrenzung auf 50 km/h gilt im gesamten dicht bebauten Gebiet. Wer über eine
**unbedeutende Nebenstrasse** in eine Ortschaft einfährt (landwirtschaftliche
Erschliessungsstrasse, Waldweg, Strasse die nicht zwei Ortschaften direkt verbindet), für
den gilt sie **auch ohne Signalisation**, sobald ein dicht bebautes Gebiet vorhanden ist.

Das ist der typische Fall, in dem man 50 erfasst, ohne auf dem Luftbild ein Signal gesehen
zu haben.
:::

Der Übergang auf 80 km/h ist vor Ort am Signal «Ende der Höchstgeschwindigkeit 50,
Allgemeine Höchstgeschwindigkeit» ablesbar, oder beim Verlassen einer Autostrasse oder
Autobahn.

<div class="media-row">
<img src="/img/panneaux/osr-2-30-1-limite-generale-50-de.svg" alt="Signal 2.30.1, Höchstgeschwindigkeit 50, generell" width="120">
<img src="/img/panneaux/osr-2-53-1-fin-limite-generale-50-de.svg" alt="Signal 2.53.1, Ende der Höchstgeschwindigkeit 50, generell" width="120">
</div>

## Eine Geschwindigkeit im WME erfassen

Das Feld **Geschwindigkeit** befindet sich im seitlichen Panel, das erscheint, sobald ein
Segment ausgewählt wird. Es akzeptiert die **Mehrfachauswahl**: indem mehrere Segmente
desselben Abschnitts ausgewählt werden, wird derselbe Wert in einem Zug erfasst.

Der Wert ist in **km/h**. Ein gewöhnliches Begrenzungssignal wie dieses wird so erfasst,
wie es ist.

<div class="media-row">
<img src="/img/panneaux/osr-2-30-vitesse-maximale.svg" alt="Signal 2.30, signalisierte Höchstgeschwindigkeit" width="120">
</div>

Für die übrigen Eigenschaften des Segments siehe [Segmente](/de/editors/wme/segments).

## Zonen 30 und Begegnungszonen

Zwei Zonenregelungen betreffen die Erfassung unmittelbar.

| Zone | Begrenzung | Signal |
| --- | --- | --- |
| **Zone 30** | 30 km/h | 2.59.1 |
| **Begegnungszone** | 20 km/h | 2.59.5 |

<div class="media-row">
<img src="/img/panneaux/osr-2-59-1-zone-30.svg" alt="Signal 2.59.1, Zone 30" width="110">
<img src="/img/panneaux/osr-2-59-5-zone-de-rencontre.svg" alt="Signal 2.59.5, Begegnungszone, 20 km/h" width="110">
</div>

In einer Begegnungszone dürfen Fussgänger die gesamte Verkehrsfläche benützen und haben
Vortritt. Diese beiden Signale sind nur auf **Nebenstrassen** zulässig, die nicht dem
allgemeinen Verkehr dienen: eines davon auf einer Hauptachse anzutreffen, sollte an der
Lesart des Luftbilds zweifeln lassen.

Die Zonenbegrenzung gilt für alle Segmente innerhalb des Perimeters, bis zum Endsignal.

## Was nicht erfasst wird

- **Kreisverkehre.** Ein Kreisverkehr erhält keine Geschwindigkeitsbegrenzung. Siehe
  [Kreisverkehre](/de/editors/cartographie/ronds-points).
- **Empfohlene Geschwindigkeiten.** Ein Empfehlungssignal ist keine Begrenzung.
- **Vor Ort festgestellte Werte**, die weder einer Signalisation noch einer allgemeinen
  Höchstgeschwindigkeit entsprechen.

## Wenn sich die Signalisation ändert

Änderungen der Geschwindigkeitsbegrenzung tauchen regelmässig im Schweizer Forum auf, zum
Beispiel eine gemeldete Änderung an der Schartenstrasse in Wettingen. Vor der
Aktualisierung eines Segments die neue Signalisation prüfen und eine datierte Quelle
bevorzugen: kommunale oder kantonale Verfügung, amtliche Publikation, aktuelles Luftbild.

::: quote Quellen
- VRV (SR 741.11), Art. 4a, allgemeine Höchstgeschwindigkeiten: https://www.fedlex.admin.ch/eli/cc/1962/1364_1409_1420/de
- SSV (SR 741.21), Art. 22a und 22b, Zone 30 und Begegnungszone: https://www.fedlex.admin.ch/eli/cc/1979/1961_1961_1961/de
- Signale: Signale der SSV, Bundesamt für Strassen (ASTRA), gemeinfrei, via https://commons.wikimedia.org/wiki/Category:SVG_road_signs_in_Switzerland
- Schweizer Forum (Fälle von Geschwindigkeitsänderungen): https://www.waze.com/discuss/c/editors/switzerland/4790
:::
