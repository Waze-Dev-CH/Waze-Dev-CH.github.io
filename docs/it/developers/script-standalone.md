---
title: Creare uno script standalone
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# Creare uno script standalone

Non sei obbligato a passare dal Helper: puoi creare e mantenere il **tuo** userscript Waze per la Svizzera. Questa pagina dà i punti di riferimento; le [convenzioni di codice](/it/developers/conventions) si applicano anche al tuo progetto.

## Punto di partenza

Un userscript gira nel WME tramite **Tampermonkey** (o Greasemonkey su Firefox). Per toccare la mappa, passare dall'**SDK ufficiale del WME**, tipizzato da `wme-sdk-typings`, documentato su [waze.com/editor/sdk](https://www.waze.com/editor/sdk/index.html). Evitare gli hack del DOM che aggirano l'SDK: si rompono a ogni aggiornamento del WME.

Il [Helper](/it/developers/architecture) è un buon esempio di progetto SDK completo (TypeScript + Rollup + test) a cui ispirarsi.

## Ospitare il codice

Pubblicare il codice su **GitHub** (repository pubblico), con una licenza chiara. Uno script utile alla community può essere proposto all'organizzazione [Waze-Dev-CH](https://github.com/Waze-Dev-CH) per essere mantenuto collettivamente: discuterne sul [Discord della community](https://discord.gg/dmxUwvTkk5) (zona DACH).

## Pubblicare e installare

L'header dello userscript (`// ==UserScript==`) porta i metadati di installazione e aggiornamento:

- `@downloadURL` / `@updateURL`: l'URL del `.user.js` (ad es. un file di release su GitHub) affinché Tampermonkey installi e aggiorni automaticamente.
- `@match https://www.waze.com/*editor*`: limitare l'esecuzione al WME.

Opzione: pubblicare anche su [GreasyFork](https://greasyfork.org/) per la reperibilità.

## Convenzioni

Seguire le [convenzioni di codice](/it/developers/conventions): conformità all'SDK, codice pensato per essere letto. Se lo script è multilingue, prevedere tutte e quattro le lingue (de, en, fr, it).

## Condividere con la community

- Annunciare lo script sul [forum romando](https://www.waze.com/discuss/c/editors/switzerland/romandie/4797) o sul [Discord della community](https://discord.gg/dmxUwvTkk5).
- Farlo elencare nella documentazione: aprire una PR su questo sito per aggiungerlo a [Script e strumenti](/it/editors/wme/scripts) e [Risorse](/it/editors/communaute/ressources).

::: quote Fonti
- Documentazione dell'SDK WME: https://www.waze.com/editor/sdk/index.html
- Tampermonkey: https://www.tampermonkey.net/
- GreasyFork: https://greasyfork.org/
:::
