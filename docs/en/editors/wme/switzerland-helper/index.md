---
title: WME Switzerland Helper
description: Install and use the Swiss WME userscript, with its map layers, its public transport stops, its street-name check and its house-number import.
order: 16
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# WME Switzerland Helper

The **WME Switzerland Helper** is the reference userscript for editing in Switzerland. It adds
the federal base maps, the SBB public transport stops, a street-name check and the import of
official house numbers to the editor.

::: important Nothing is ever saved on your behalf
A name correction, a number import, a venue merge: everything goes into your pending edits.
You are the one who reviews and clicks **Save**, and <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes as
usual.
:::

## Installation

::: help In three steps
1. Install **Tampermonkey** in your browser: [Chrome and Edge](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), or search for "Tampermonkey" in your browser's extension store
2. Open the [script installation link](https://raw.githubusercontent.com/Waze-Dev-CH/WME-Switzerland-Helper/releases/releases/main.user.js), then click **Install**
3. Open or reload the [WME](https://www.waze.com/editor)
:::

Updates are automatic from then on.

::: note Beware of installing the wrong script
The only official link is the one above. A Greasyfork page with a similar name exists, but it
concerns another script.
:::

## Where things appear

- **The checkboxes** arrive in the layer selector, at the bottom of the right-hand bar.
- **The tabs** arrive in the `Scripts` bar, on the left: **WME Switzerland Helper**,
  **CH · Street names** and **CH · House numbers**.

The `CH ·` prefix helps you spot the script's tabs among those of the other userscripts you
have installed.

## The four features

- [**Map layers**](/en/editors/wme/switzerland-helper/couches): municipal and cantonal
  boundaries, geographical names, national maps and SWISSIMAGE aerial imagery.
- [**Public transport stops**](/en/editors/wme/switzerland-helper/transports-publics):
  the official SBB stops shown on the map, to create or merge in one click.
- [**Street-name checker**](/en/editors/wme/switzerland-helper/noms-de-rues):
  comparison of Waze names against the official Swiss register, with assisted correction.
- [**House numbers**](/en/editors/wme/switzerland-helper/numeros-de-maison): import of the
  official numbers from the federal building register.

::: reminder Your settings stay on your computer
The script's settings, including the findings you choose to ignore, are saved in your browser.
If you edit from two machines, each one has its own.
:::

::: quote Sources
- Script repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Authors: Maël Pedretti (Marelitaw) and Yann Rapenne (Neprena)
:::
