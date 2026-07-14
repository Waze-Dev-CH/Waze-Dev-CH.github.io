---
title: Creating a standalone script
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# Creating a standalone script

You don't have to go through the Helper: you can create and maintain **your own** Waze userscript for Switzerland. This page gives the landmarks; the [code conventions](/en/developers/conventions) apply to your project too.

## Starting point

A userscript runs in the WME through **Tampermonkey** (or Greasemonkey on Firefox). To touch the map, go through the **official WME SDK**, typed by `wme-sdk-typings`, documented at [waze.com/editor/sdk](https://www.waze.com/editor/sdk/index.html). Avoid DOM hacks that bypass the SDK: they break on every WME update.

The [Helper](/en/developers/architecture) is a good example of a complete SDK project (TypeScript + Rollup + tests) to draw inspiration from.

## Hosting the code

Publish the code on **GitHub** (public repository), with a clear license. A script useful to the community can be proposed to the [Waze-Dev-CH](https://github.com/Waze-Dev-CH) organization to be maintained collectively: discuss it on the [community Discord](https://discord.gg/dmxUwvTkk5) (DACH region).

## Publishing and installing

The userscript header (`// ==UserScript==`) carries the install and update metadata:

- `@downloadURL` / `@updateURL`: the URL of the `.user.js` (e.g. a GitHub release file) so Tampermonkey installs and updates automatically.
- `@match https://www.waze.com/*editor*`: restrict execution to the WME.

Optional: also publish on [GreasyFork](https://greasyfork.org/) for discoverability.

## Conventions

Follow the [code conventions](/en/developers/conventions): SDK conformance, code written to be read. If the script is multilingual, provide all four languages (de, en, fr, it).

## Sharing with the community

- Announce the script on the [Romandy forum](https://www.waze.com/discuss/c/editors/switzerland/romandie/4797) or the [community Discord](https://discord.gg/dmxUwvTkk5).
- Get it listed in the docs: open a PR on this site to add it to [Scripts and tools](/en/editors/wme/scripts) and [Resources](/en/editors/communaute/ressources).

::: quote Sources
- WME SDK documentation: https://www.waze.com/editor/sdk/index.html
- Tampermonkey: https://www.tampermonkey.net/
- GreasyFork: https://greasyfork.org/
:::
