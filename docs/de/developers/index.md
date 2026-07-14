---
title: Developers
---

<img class="macaron" src="/img/waze-kit/scripters.png" alt="" width="96" height="96">

# Waze CH Developers

Dieser Bereich richtet sich an **Entwickler** von Waze-Skripten für die Schweizer Community. Zwei Wege:

- **Zum [WME Switzerland Helper](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper) beitragen**, dem Flaggschiff-Skript der Community (offizielle Schweizer Ebenen und Daten im WME).
- **Ein eigenes eigenständiges Skript** für die Schweiz erstellen und pflegen.

Die [Code-Konventionen](/de/developers/conventions) gelten für beide.

::: note Möchten Sie ein Skript *verwenden*?
Um Skripte als Editor zu installieren und zu konfigurieren, siehe [Skripte und Werkzeuge](/de/editors/wme/scripts) im Bereich Editoren. Hier geht es darum, zu **programmieren**.
:::

## Der WME Switzerland Helper

Das Flaggschiff-Skript der Community: ein **TypeScript**-Userscript, gebündelt mit **Rollup**, getestet mit **Vitest**, übersetzt über **i18next**. Er stützt sich auf das **offizielle WME-SDK** (`wme-sdk-typings`) und auf **Turf.js** für die Geometrie.

Was er dem Editor bringt: offizielle Schweizer Ebenen (Gemeinde- und Kantonsgrenzen von swisstopo, geografische Namen aus swissNAMES3D), Daten des öffentlichen Verkehrs (SBB-Haltestellen mit offiziellen Namen) und Prüfung der Strassennamen anhand der Schweizer Konventionen.

- [Zum Helper beitragen](/de/developers/contribuer): Voraussetzungen, Entwicklungsumgebung und Pull-Request-Ablauf.
- [Architektur des Helpers](/de/developers/architecture): Startablauf, Ebenenmodell, Code-Karte.
- [Eine Ebene zum Helper hinzufügen](/de/developers/ajouter-une-couche): konkrete End-to-End-Anleitung.

### Mitwirkende

Der Helper wird von der Schweizer Community gepflegt. Danke an die Mitwirkenden:

- [73VW](https://github.com/73VW)
- [Neprena](https://github.com/Neprena)
- [bedo2991](https://github.com/bedo2991)

<!-- Liste aus den GitHub-Contributors des Repositorys (Bots/KI ausgelassen). Neu erzeugen: gh api repos/Waze-Dev-CH/WME-Switzerland-Helper/contributors -->

## Ihr eigenes Skript

- [Ein eigenständiges Skript erstellen](/de/developers/script-standalone): starten, hosten, veröffentlichen und Ihr eigenes Skript mit der Community teilen.

## Für beide

- [Code-Konventionen](/de/developers/conventions): WME-SDK, Stil, i18n, Changelog.
