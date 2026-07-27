---
title: WME Switzerland Helper
description: Das Schweizer Userscript für den WME installieren und nutzen, mit seinen Kartenebenen, seinen Haltestellen des öffentlichen Verkehrs, seiner Prüfung der Strassennamen und seinem Import der Hausnummern.
order: 16
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# WME Switzerland Helper

Der **WME Switzerland Helper** ist das massgebende Userscript zum Editieren in der Schweiz. Er
fügt dem Editor die eidgenössischen Kartenhintergründe, die Haltestellen des öffentlichen
Verkehrs der SBB, eine Prüfung der Strassennamen und den Import der offiziellen Hausnummern
hinzu.

::: important Nichts wird jemals für Sie gespeichert
Eine Namenskorrektur, ein Nummernimport, das Zusammenführen eines Ortes: alles landet in
Ihren offenen Änderungen. Sie sind es, der prüft und auf **Speichern** klickt, und
<kbd>Ctrl</kbd>+<kbd>Z</kbd> macht wie gewohnt rückgängig.
:::

## Installation

::: help In drei Schritten
1. **Tampermonkey** in Ihrem Browser installieren: [Chrome und Edge](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), oder im Erweiterungs-Store Ihres Browsers nach „Tampermonkey“ suchen
2. Den [Installationslink des Skripts](https://raw.githubusercontent.com/Waze-Dev-CH/WME-Switzerland-Helper/releases/releases/main.user.js) öffnen und dann auf **Install** klicken
3. Den [WME](https://www.waze.com/editor) öffnen oder neu laden
:::

Die Aktualisierungen erfolgen danach automatisch.

::: note Achtung, nicht das falsche Skript installieren
Der einzige offizielle Link ist der oben genannte. Es gibt eine Greasyfork-Seite mit einem
ähnlichen Namen, sie betrifft aber ein anderes Skript.
:::

## Wo die Dinge erscheinen

- **Die Kontrollkästchen** erscheinen in der Ebenenauswahl, ganz unten in der rechten Leiste.
- **Die Tabs** erscheinen in der Leiste `Scripts` links: **WME Schweiz Helfer**,
  **CH · Strassennamen** und **CH · Hausnummern**.

Das Präfix `CH ·` hilft dabei, die Tabs des Skripts zwischen denen der anderen von Ihnen
installierten Userscripts wiederzufinden.

## Die vier Funktionen

- [**Kartenebenen**](/de/editors/wme/switzerland-helper/couches): Gemeinde- und
  Kantonsgrenzen, geografische Namen, Landeskarten und SWISSIMAGE-Luftbilder.
- [**Haltestellen des öffentlichen Verkehrs**](/de/editors/wme/switzerland-helper/transports-publics):
  die offiziellen SBB-Haltestellen auf der Karte, mit einem Klick zu erstellen oder
  zusammenzuführen.
- [**Prüfung der Strassennamen**](/de/editors/wme/switzerland-helper/noms-de-rues):
  Vergleich der Waze-Namen mit dem amtlichen Schweizer Verzeichnis, mit unterstützter
  Korrektur.
- [**Hausnummern**](/de/editors/wme/switzerland-helper/numeros-de-maison): Import der
  offiziellen Nummern aus dem eidgenössischen Gebäuderegister.

::: reminder Ihre Einstellungen bleiben auf Ihrem Computer
Die Einstellungen des Skripts, einschliesslich der Befunde, die Sie zu ignorieren wählen,
werden in Ihrem Browser gespeichert. Wenn Sie von zwei Rechnern aus editieren, hat jeder
seine eigenen.
:::

::: quote Quellen
- Repository des Skripts: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Autoren: Maël Pedretti (Marelitaw) und Yann Rapenne (Neprena)
:::
