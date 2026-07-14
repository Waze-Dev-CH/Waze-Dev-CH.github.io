---
title: Zum Helper beitragen
order: 1
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# Zum WME Switzerland Helper beitragen

Der [WME Switzerland Helper](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper) wird im Team und quelloffen entwickelt. Diese Seite beschreibt, wie man eine lokale Entwicklungsumgebung einrichtet und einen Beitrag einreicht.

::: abstract Kurz gesagt
Repository klonen, `npm run watch` starten, den lokalen Build in Tampermonkey laden, auf einem Branch programmieren und dann einen Pull Request öffnen. Niemals direkt auf `main` pushen.
:::

## Der Organisation beitreten

Um Schreibzugriff auf das Repository zu erhalten oder der Organisation [Waze-Dev-CH](https://github.com/Waze-Dev-CH) beizutreten, stellen Sie sich den Maintainern auf dem **[Discord der Community](https://discord.gg/dmxUwvTkk5)** (Zone DACH) vor: Das ist der bevorzugte Kanal, um darüber zu sprechen. Für einen einmaligen Beitrag ist kein Zugriff nötig: ein Pull Request aus einem Fork genügt.

## Bevor Sie beginnen

Die Roadmap liegt in den **[GitHub Issues](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/issues)**. Die offenen Issues vor dem Start lesen, um Doppelarbeit zu vermeiden, und prüfen, ob eine Issue Ihre Idee bereits abdeckt. Für einen Bug eine Issue mit Reproduktionsschritten und WME-Screenshots öffnen.

## Voraussetzungen

- **Node.js** und **npm** (zusammen installiert)
- **git** und ein **GitHub**-Konto
- **Tampermonkey** im Browser
- Das Repository klonen:

```bash
git clone https://github.com/Waze-Dev-CH/WME-Switzerland-Helper.git
cd WME-Switzerland-Helper
npm install
```

::: help Dev container
Das Repository enthält einen `.devcontainer` (VS Code / GitHub Codespaces) mit vorkonfigurierter Umgebung, falls Sie lokal nichts installieren möchten.
:::

## Entwicklungsumgebung

Watch-Modus starten: Er kompiliert das Skript bei jeder Änderung neu (Rollup), erzeugt die Übersetzungen neu (i18next) und wendet Prettier + ESLint automatisch an.

```bash
npm run watch
```

Der lokale Build wird nach `.out/main.user.js` geschrieben. Um ihn in den WME zu laden:

1. In Tampermonkey ein neues Skript erstellen und den Inhalt von **`header-dev.js`** einfügen.
2. Die Zeile `@require file://.../.out/main.user.js` an den absoluten Pfad Ihres Klons anpassen.
3. In den **Erweiterungs**-Einstellungen von Tampermonkey (im Browser, nicht im Skript-Editor) den **„Local file access"** aktivieren ([siehe Tampermonkey-FAQ](https://www.tampermonkey.net/faq.php?locale=en#Q204)).
4. Den [Waze Map Editor](https://www.waze.com/editor) öffnen und die Seite nach jedem Rebuild neu laden.

::: note Notiz
`header-dev.js` und `header.js` müssen identisch bleiben, mit Ausnahme des `@require`-Felds (lokale Datei in der Entwicklung, Release-URL in der Produktion).
:::

### Tests

Die Tests laufen mit Vitest; die `*.test.ts`-Dateien liegen neben dem Code, den sie abdecken, in `src/`.

```bash
npm test          # ein Durchlauf
npm run test:watch  # fortlaufend
```

## Beitragsablauf

Das Projekt arbeitet über **Pull Requests**; `main` ist geschützt.

1. Von einem aktuellen `main` ausgehen, dann einen Branch erstellen:

   ```bash
   git checkout main && git pull
   git checkout -b feat/meine-funktion
   ```

2. Nach den [Code-Konventionen](/de/scripters/conventions) programmieren: Konformität zum WME-SDK und Code, der zum Lesen gedacht ist.
3. Commits in [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`…).

::: success Checkliste vor dem Öffnen des PR
- `npm test` grün und `npm run build` fehlerfrei
- eslint sauber (`npx eslint .`, auch von `npm run watch` ausgeführt)
- **Smoke-Test im WME**: Skript laden, jede Ebene umschalten, das Rendering prüfen
- i18n-Zeichenketten für alle vier Sprachen in `locales/<lang>/common.json` ergänzt
- Changelog-Eintrag in **jeder** README (siehe [Konventionen](/de/scripters/conventions#changelog))
:::

4. Den Branch pushen und einen **Pull Request** gegen `main` öffnen, dann **einen Maintainer als Reviewer zuweisen**.
5. Die GitHub-Actions-CI (`release.yml`) validiert den PR. Auf die Kommentare eingehen, indem Korrekturen auf denselben Branch gepusht werden; die Smoke-Test-Ergebnisse in der Beschreibung vermerken (keine automatisierte Abdeckung). Ein Maintainer genehmigt und merged.

::: important Wichtig
- **Niemals direkt auf `main` pushen**, alles läuft über einen geprüften PR.
- **Keinen Tag und kein Release** selbst erstellen; das ist den Maintainern vorbehalten.
- Externer Beitragender (ohne Schreibrecht auf die Organisation)? Das Repository forken und den PR aus Ihrem Fork öffnen.
:::

## Nach dem Merge

Ein Release wird von einem Maintainer erstellt: `npm run release` erhöht die Version (`package.json` → `header.js`) und erzeugt den veröffentlichten Build in `releases/` neu, den die Nutzer über Tampermonkey installieren.

::: quote Quellen
- Repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- README und Installationsanleitung: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper#readme
- WME-SDK-Dokumentation: https://www.waze.com/editor/sdk/index.html
:::
