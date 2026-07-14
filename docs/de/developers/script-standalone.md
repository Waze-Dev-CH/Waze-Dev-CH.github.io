---
title: Ein eigenständiges Skript erstellen
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# Ein eigenständiges Skript erstellen

Sie müssen nicht über den Helper gehen: Sie können **Ihr eigenes** Waze-Userscript für die Schweiz erstellen und pflegen. Diese Seite gibt die Orientierungspunkte; die [Code-Konventionen](/de/developers/conventions) gelten auch für Ihr Projekt.

## Ausgangspunkt

Ein Userscript läuft im WME über **Tampermonkey** (oder Greasemonkey auf Firefox). Um die Karte zu berühren, das **offizielle WME-SDK** verwenden, typisiert durch `wme-sdk-typings`, dokumentiert auf [waze.com/editor/sdk](https://www.waze.com/editor/sdk/index.html). DOM-Hacks vermeiden, die das SDK umgehen: Sie brechen bei jedem WME-Update.

Der [Helper](/de/developers/architecture) ist ein gutes Beispiel für ein vollständiges SDK-Projekt (TypeScript + Rollup + Tests), an dem man sich orientieren kann.

## Den Code hosten

Den Code auf **GitHub** veröffentlichen (öffentliches Repository), mit einer klaren Lizenz. Ein für die Community nützliches Skript kann der Organisation [Waze-Dev-CH](https://github.com/Waze-Dev-CH) vorgeschlagen werden, um es gemeinsam zu pflegen: auf dem [Discord der Community](https://discord.gg/dmxUwvTkk5) (Zone DACH) besprechen.

## Veröffentlichen und installieren

Der Userscript-Header (`// ==UserScript==`) trägt die Installations- und Update-Metadaten:

- `@downloadURL` / `@updateURL`: die URL der `.user.js` (z. B. eine GitHub-Release-Datei), damit Tampermonkey automatisch installiert und aktualisiert.
- `@match https://www.waze.com/*editor*`: die Ausführung auf das WME beschränken.

Optional: auch auf [GreasyFork](https://greasyfork.org/) veröffentlichen für die Auffindbarkeit.

## Konventionen

Den [Code-Konventionen](/de/developers/conventions) folgen: SDK-Konformität, Code, der zum Lesen gedacht ist. Wenn das Skript mehrsprachig ist, alle vier Sprachen vorsehen (de, en, fr, it).

## Mit der Community teilen

- Das Skript im [Romandie-Forum](https://www.waze.com/discuss/c/editors/switzerland/romandie/4797) oder im [Community-Discord](https://discord.gg/dmxUwvTkk5) ankündigen.
- In der Doku listen lassen: einen PR auf dieser Website öffnen, um es zu [Skripte und Werkzeuge](/de/editors/wme/scripts) und [Ressourcen](/de/editors/communaute/ressources) hinzuzufügen.

::: quote Quellen
- WME-SDK-Dokumentation: https://www.waze.com/editor/sdk/index.html
- Tampermonkey: https://www.tampermonkey.net/
- GreasyFork: https://greasyfork.org/
:::
