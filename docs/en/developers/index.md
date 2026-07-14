---
title: Developers
---

<img class="macaron" src="/img/waze-kit/scripters.png" alt="" width="96" height="96">

# Waze CH Developers

This section is for **developers** of Waze scripts for the Swiss community. Two paths:

- **Contribute to the [WME Switzerland Helper](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper)**, the community's flagship script (official Swiss layers and data in the WME).
- **Create and maintain your own standalone script** for Switzerland.

The [code conventions](/en/developers/conventions) apply to both.

::: note Looking to *use* a script?
To install and configure scripts as an editor, see [Scripts and tools](/en/editors/wme/scripts) in the Editors section. Here, we talk about **coding**.
:::

## The WME Switzerland Helper

The community's flagship script: a **TypeScript** userscript, bundled with **Rollup**, tested with **Vitest**, translated via **i18next**. It relies on the **official WME SDK** (`wme-sdk-typings`) and on **Turf.js** for geometry.

What it brings to the editor: official Swiss layers (municipal and cantonal boundaries from swisstopo, geographic names from swissNAMES3D), public transport data (SBB stops with official names) and street-name checking against Swiss conventions.

- [Contributing to the Helper](/en/developers/contribuer): prerequisites, dev environment and Pull Request flow.
- [Helper architecture](/en/developers/architecture): startup flow, layer model, code map.
- [Adding a layer to the Helper](/en/developers/ajouter-une-couche): concrete end-to-end walkthrough.

### Contributors

The Helper is maintained by the Swiss community. Thanks to its contributors:

- [73VW](https://github.com/73VW)
- [Neprena](https://github.com/Neprena)
- [bedo2991](https://github.com/bedo2991)

<!-- List taken from the repo's GitHub contributors (bots/AI omitted). Regenerate: gh api repos/Waze-Dev-CH/WME-Switzerland-Helper/contributors -->

## Your own script

- [Creating a standalone script](/en/developers/script-standalone): start, host, publish and share your own script with the community.

## For both

- [Code conventions](/en/developers/conventions): WME SDK, style, i18n, changelog.
