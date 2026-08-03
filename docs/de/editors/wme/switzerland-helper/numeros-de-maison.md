---
title: Hausnummern
description: Die offiziellen Hausnummern des eidgenössischen Gebäuderegisters in den WME importieren.
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/city.png" alt="">

# Hausnummern

Der Importer zeigt die offiziellen Adressen des **eidgenössischen Gebäuderegisters** an und
erlaubt es, die in Waze fehlenden Nummern zu erstellen, einzeln oder für eine ganze Strasse.

## Die Funktion aktivieren

Die Funktion ist **anfangs ausgeschaltet**: Sie müssen sie selbst einschalten, über das
Kästchen **Schweizer Hausnummern** in der Ebenenauswahl oder über den Schalter oben im Tab
**CH · Hausnummern**.

Die Punkte erscheinen ab Zoom 17, und die Nummern werden daneben geschrieben, wenn man weiter
hineinzoomt.

## Die Punkte lesen

| Punkt | Bedeutung | Anklickbar |
| --- | --- | --- |
| **Kräftig grün**, mit einem **+** | Nummer der ausgewählten Strasse, in Waze nicht vorhanden | Ja |
| **Schiefergrau**, mit einem **Haken** | Nummer bereits gesetzt | Nein |
| **Hellgrau**, klein | Adresse einer anderen Strasse | Nein |
| **Graublau**, klein | Keine Strasse ausgewählt, oder Prüfung läuft | Nein |

Die ersten beiden tragen ein Piktogramm und sind gleich gross: Sie unterscheiden sie auch
dann, wenn Sie den Farbunterschied nicht wahrnehmen. Die letzten beiden bleiben klein und
matt, weil sich daran nichts machen lässt.

::: important Graublau heisst auch „bitte warten“
Direkt nach der Auswahl eines Segments prüft das Skript, welche Nummern bereits existieren.
Während dieses kurzen Moments bleiben die Punkte graublau und reagieren nicht auf Klicks, um
kein Duplikat zu erzeugen. Warten Sie, bis sie ihre endgültige Farbe annehmen.
:::

## Eine Nummer importieren

1. **Wählen Sie zuerst das Strassensegment aus.**
2. Klicken Sie auf einen kräftig grünen Punkt: Die Nummer wird an der offiziellen Stelle
   erstellt.

::: note Die Nummer hängt sich von selbst an das richtige Segment
Eine Strasse ist in mehrere Segmente unterteilt, eines je Abschnitt zwischen zwei Kreuzungen.
Jede Nummer wird an dasjenige gehängt, vor dem sie tatsächlich liegt, und nicht zwingend an
das, welches Sie angeklickt haben. Das Skript sucht Duplikate auch auf den benachbarten
Abschnitten derselben Strasse: Die Nummer 15 sitzt oft auf dem Abschnitt nebenan.
:::

## Eine ganze Strasse importieren

Ist ein Segment ausgewählt, erscheint eine Import-Schaltfläche im Tab und im Kasten oben im
Segment-Panel. <kbd>Alt</kbd>+<kbd>H</kbd> macht dasselbe.

Der Import bearbeitet **höchstens 50 Nummern** auf einmal: Fehlen mehr, kündigt die
Schaltfläche es an, und es genügt, ihn erneut zu starten. Eine Bestätigung listet immer die
betroffenen Nummern auf, bevor sie erstellt werden.

::: important Prüfen Sie das Ergebnis immer auf der Karte
Die offiziellen Koordinaten zielen auf das Gebäude, nicht auf die Tür: Eine Hofeinfahrt, ein
zurückversetztes Haus oder eine Villa in einem grossen Garten ergeben einen Punkt, der für
die Navigation schlecht platziert ist. Verschieben Sie diese Nummern vor dem Speichern.
:::

## Wenn die Import-Schaltfläche nicht erscheint

- **Es ist kein Segment ausgewählt.**
- **Es fehlt keine Nummer** an dieser Strasse.
- **Das Gebiet ist zu dicht**, als dass das Skript alle Adressen auflisten könnte. Es sagt
  das deutlich, und die Klicks Punkt für Punkt funktionieren weiterhin normal.

## Rückgängig machen

<kbd>Ctrl</kbd>+<kbd>Z</kbd> macht die Erstellung wie jede andere Änderung rückgängig, und die
rückgängig gemachten Punkte werden wieder grün. Sie werden kurz wieder graublau, solange das
Skript die Strasse erneut prüft, was normal ist.

## Zweisprachige Gemeinden

Das Skript vergleicht alle offiziellen Namen mit allen Namen des Segments, Haupt- und
Alternativnamen. Ein Segment mit dem Namen *Zentralstrasse* wird also korrekt als
übereinstimmend mit den Adressen *Rue Centrale* erkannt, und umgekehrt.

## Einstellungen

Die nützlichsten: ab welchem Zoom die Adressen geladen werden, die Anzeige der Nummern auf
der Karte, und eine Bestätigung bei jedem Klick, wenn Ihnen das lieber ist. Standardmässig
werden nur die Adressen tatsächlich gebauter Gebäude vorgeschlagen, nicht diejenigen
laufender Projekte.

Wenn Ihnen die Daten veraltet erscheinen, erzwingt **Cache leeren und neu laden** ein
erneutes Einlesen.

Das Tastenkürzel <kbd>Alt</kbd>+<kbd>J</kbd> schaltet die Ebene ein und aus, auch wenn die
Funktion deaktiviert ist.

::: quote Quellen und Ursprung
- Repository des Skripts: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Eidgenössisches Gebäude- und Wohnungsregister (GWR), https://www.geo.admin.ch
- Die Idee zu dieser Funktion stammt vom Skript „WME Quick HN Importer CH“ von Ari (Reloaded) und Gerhard, nach dem ursprünglichen Konzept von Tom 'Glodenox' Puttemans für Belgien.
:::
