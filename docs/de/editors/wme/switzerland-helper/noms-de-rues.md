---
title: Prüfung der Strassennamen
description: Die Waze-Strassennamen mit dem amtlichen Schweizer Verzeichnis vergleichen und die Abweichungen korrigieren.
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/magnifier.png" alt="">

# Prüfung der Strassennamen

Die Prüfung vergleicht den Namen jedes sichtbaren Segments mit dem **amtlichen Schweizer
Strassenverzeichnis** und meldet die Abweichungen, mit einer Korrektur in einem Klick.

Sie stellt lediglich eine Abweichung zum amtlichen Register fest. Die Benennungsregeln selbst
sind unter [Benennung von Strassen und Städten](/de/editors/cartographie/nommage-routes)
beschrieben.

## Aktivieren und scannen

Die Prüfung ist **standardmässig aktiv**. Sie lässt sich wahlweise über das Kästchen
**Strassennamen** in der Ebenenauswahl oder über den Schalter **Aktiv** im Tab
**CH · Strassennamen** ein- und ausschalten.

Die Analyse startet bei jeder Kartenbewegung neu, sofern weit genug hineingezoomt ist. Ist
der Ausschnitt zu gross, bietet das Banner eine Schaltfläche **Diesen Bereich scannen** an,
die ein bis zwei Minuten dauert und jederzeit abgebrochen werden kann.

Die Schaltfläche **Neu scannen** liest das amtliche Verzeichnis erneut ein, was nach der
Korrektur einer Reihe von Segmenten nützlich ist.

## Die Befunde lesen

Die Abweichungen werden nach Name und nach Typ gruppiert. Jede Gruppe zeigt einen farbigen
Punkt und den Abweichungstyp im Klartext.

| Typ | Was er meldet |
| --- | --- |
| `COSMETIC` | Nur Typografie: Gross-/Kleinschreibung, Apostroph, Leerzeichen |
| `VARIANT` | Abkürzung, fehlender Akzent oder fehlender Artikel |
| `BILINGUAL` | Zweisprachige Strasse: nur eine Sprache als Hauptname, die andere als Alternative |
| `NEAR` | Wahrscheinlicher Tippfehler |
| `WRONG_TYPE` | Anderer oder fehlender Strassentyp (Weg statt Strasse) |
| `WRONG_STREET` | Der Name ist gültig, aber es ist der einer anderen Strasse |
| `WRONG_CITY` | Der Name existiert, aber in einer anderen Ortschaft |
| `NOT_FOUND` | Im amtlichen Verzeichnis nicht auffindbar |
| `UNNAMED` | Segment ohne Namen, obwohl darunter eine amtliche Strasse verläuft |
| `UNDER_LOCK` | Sperrstufe unter dem Schweizer Minimum |
| `OVER_LOCK` | Sperrstufe über dem Schweizer Minimum, oft beabsichtigt |
| `MICRO_SEGMENT` | Segment unter 5 m, Kreisel ausgenommen |
| `LOOP` | Schleife aus weniger als 3 Segmenten, aufzuteilen |
| `NARROW_MISUSE` | Falsch verwendete enge Strasse: Einbahn oder kürzer als 50 m |
| `UNNAMED_NO_MATCH` | Ohne Namen und nichts Amtliches darunter: meistens normal |

::: important `WRONG_STREET` erfordert immer eine Überprüfung
Dieser Befund stammt nicht aus einem Namensvergleich, sondern aus der Lage des Segments:
Darunter verläuft eine andere amtliche Strasse. Er schlägt Ihnen also vor, einen Namen zu
ersetzen, der vollkommen richtig aussieht.

Schauen Sie auf die Karte, bevor Sie zustimmen. Die Links ↗ jeder Zeile öffnen die genaue
Stelle auf der Bundeskarte und, wo vorhanden, auf der Kantonskarte.
:::

Die beiden Sperr-Prüfungen und `WRONG_STREET` sind unterhalb von Editor-Level 3 nicht aktiv,
und `UNNAMED_NO_MATCH` ist standardmässig ausgeschaltet, weil er vor allem normale Fälle
meldet. Alle lassen sich in den Einstellungen aktivieren.

## Korrigieren

Drei Wege führen zur selben Korrektur: die Schaltfläche **Korrigieren** in der Liste,
diejenige im Kasten oben im Segment-Panel, oder das Tastenkürzel
<kbd>Alt</kbd>+<kbd>F</kbd>.

Bestehende Alternativnamen bleiben erhalten, und ein zweisprachiger Name wird als Alternative
hinzugefügt, statt den Hauptnamen zu ersetzen.

Die Schaltfläche **Ignorieren** blendet einen Befund aus, den Sie für falsch halten. Diese
Ausschlüsse bleiben auf Ihrem Computer, und **Zurücksetzen** hebt sie alle auf einmal auf.

::: important Die Gruppenkorrektur erfordert Editor-Level 3
Darunter erscheinen die Schaltflächen **Alle korrigieren** und **Alle ignorieren** nicht. Die
Korrektur Segment für Segment bleibt hingegen allen offen.

Eine Gruppenkorrektur bearbeitet **höchstens 50 Segmente** auf einmal, verlangt ab 20 eine
Bestätigung und hält beim ersten Fehler an, unter Angabe der Stelle, an der sie hängen
geblieben ist.
:::

## Das schwebende Fenster

Der WME schaltet die Seitenleiste auf sein Auswahl-Panel um, sobald ein Segment angeklickt
wird: Der Tab der Prüfung verschwindet also genau in dem Moment, in dem man ihn braucht.

Die Schaltfläche **Abtrennen**, oder <kbd>Alt</kbd>+<kbd>W</kbd>, verschiebt die Liste in ein
kleines Fenster, das dauerhaft sichtbar bleibt. Es lässt sich an seiner Titelleiste
verschieben, an seiner Ecke in der Grösse verändern und findet in der nächsten Sitzung seinen
Platz wieder. **Andocken** setzt es zurück in die Seitenleiste.

## Tastenkürzel

| Kürzel | Aktion |
| --- | --- |
| <kbd>Alt</kbd>+<kbd>N</kbd> | Die nächste Abweichung auswählen |
| <kbd>Alt</kbd>+<kbd>F</kbd> | Das ausgewählte Segment korrigieren |
| <kbd>Alt</kbd>+<kbd>W</kbd> | Das Fenster abtrennen oder andocken |

Alle lassen sich in den Tastatureinstellungen des WME neu belegen.

## Einstellungen

Die Einstellungen dienen vor allem dazu, zu wählen, **welche Strassentypen** geprüft werden
(Strassen und Hauptstrassen von Haus aus, Wege und Autobahnen nicht) und **welche
Abweichungstypen** Sie sehen wollen.

Der Rest dient dem Komfort: den erwarteten Namen auf der Karte anzeigen, einen
Alternativnamen als richtig gelten lassen (nützlich in zweisprachigen Gemeinden), die über
Ihrem Level gesperrten Segmente ausblenden, oder die Sprache der Prüfung ändern.

::: reminder Ein „nicht gefunden“ ist nicht immer ein Fehler
In sehr dichten Stadtzentren gibt das amtliche Verzeichnis nicht alles zurück, und richtige
Strassen können als nicht auffindbar gemeldet werden. Das Banner weist Sie darauf hin, wenn
das der Fall ist: Vermeiden Sie dann Gruppenkorrekturen.
:::

::: quote Quellen
- Repository des Skripts: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Amtliches Strassenverzeichnis: swisstopo, https://www.geo.admin.ch
:::
