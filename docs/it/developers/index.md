---
title: Developers
---

<img class="macaron" src="/img/waze-kit/scripters.png" alt="" width="96" height="96">

# Developers Waze CH

Questa sezione è rivolta agli **sviluppatori** di script Waze per la community svizzera. Due vie:

- **Contribuire al [WME Switzerland Helper](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper)**, lo script di punta della community (livelli e dati ufficiali svizzeri nel WME).
- **Creare e mantenere il proprio script standalone** per la Svizzera.

Le [convenzioni di codice](/it/developers/conventions) valgono per entrambe.

::: note Vuoi *usare* uno script?
Per installare e configurare gli script come editor, vedi [Script e strumenti](/it/editors/wme/scripts) nella sezione Editori. Qui parliamo di come **programmare**.
:::

## Il WME Switzerland Helper

Lo script di punta della community: un userscript **TypeScript**, assemblato con **Rollup**, testato con **Vitest**, tradotto tramite **i18next**. Si basa sull'**SDK ufficiale del WME** (`wme-sdk-typings`) e su **Turf.js** per la geometria.

Cosa porta all'editor: livelli ufficiali svizzeri (confini comunali e cantonali da swisstopo, nomi geografici da swissNAMES3D), dati del trasporto pubblico (fermate SBB con nomi ufficiali) e verifica dei nomi delle vie secondo le convenzioni svizzere.

- [Contribuire al Helper](/it/developers/contribuer): prerequisiti, ambiente di sviluppo e flusso di Pull Request.
- [Architettura del Helper](/it/developers/architecture): flusso di avvio, modello a livelli, mappa del codice.
- [Aggiungere un livello al Helper](/it/developers/ajouter-une-couche): walkthrough concreto end-to-end.

### Contributori

Il Helper è mantenuto dalla community svizzera. Grazie ai suoi contributori:

- [73VW](https://github.com/73VW)
- [Neprena](https://github.com/Neprena)
- [bedo2991](https://github.com/bedo2991)

<!-- Elenco ripreso dai contributori GitHub del repository (bot/IA esclusi). Rigenerare: gh api repos/Waze-Dev-CH/WME-Switzerland-Helper/contributors -->

## Il tuo script

- [Creare uno script standalone](/it/developers/script-standalone): iniziare, ospitare, pubblicare e condividere il tuo script con la community.

## Per entrambe

- [Convenzioni di codice](/it/developers/conventions): SDK WME, stile, i18n, changelog.
