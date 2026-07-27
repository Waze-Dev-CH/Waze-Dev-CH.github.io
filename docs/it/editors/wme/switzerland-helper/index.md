---
title: WME Switzerland Helper
description: Installare e usare lo userscript svizzero del WME, con i suoi livelli cartografici, le fermate dei trasporti pubblici, il controllo dei nomi delle strade e l'importazione dei numeri civici.
order: 16
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# WME Switzerland Helper

Il **WME Switzerland Helper** è lo userscript di riferimento per editare in Svizzera. Aggiunge
all'editor gli sfondi cartografici federali, le fermate dei trasporti pubblici delle SBB, un
controllo dei nomi delle strade e l'importazione dei numeri civici ufficiali.

::: important Nulla viene mai salvato al posto tuo
Una correzione di nome, un'importazione di numeri, la fusione di un luogo: tutto confluisce
nelle tue modifiche in corso. Sei tu che rileggi e che clicchi su **Salva**, e
<kbd>Ctrl</kbd>+<kbd>Z</kbd> annulla normalmente.
:::

## Installazione

::: help In tre passaggi
1. Installare **Tampermonkey** nel proprio browser: [Chrome e Edge](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), oppure cercare «Tampermonkey» nello store di estensioni del proprio browser
2. Aprire il [link di installazione dello script](https://raw.githubusercontent.com/Waze-Dev-CH/WME-Switzerland-Helper/releases/releases/main.user.js), poi cliccare su **Install**
3. Aprire o ricaricare il [WME](https://www.waze.com/editor)
:::

Gli aggiornamenti sono poi automatici.

::: note Attenzione a non installare lo script sbagliato
L'unico link ufficiale è quello qui sopra. Esiste una pagina Greasyfork dal nome simile, ma
riguarda un altro script.
:::

## Dove appaiono le cose

- **Le caselle di spunta** arrivano nel selettore dei livelli, in fondo alla barra di destra.
- **Le schede** arrivano nella barra `Scripts`, a sinistra: **WME Svizzera Helper**,
  **CH · Nomi delle vie** e **CH · Numeri civici**.

Il prefisso `CH ·` serve a individuare le schede dello script in mezzo a quelle degli altri
userscript che hai installato.

## Le quattro funzioni

- [**Livelli cartografici**](/it/editors/wme/switzerland-helper/couches) : confini comunali e
  cantonali, nomi geografici, carte nazionali e immagini aeree SWISSIMAGE.
- [**Fermate dei trasporti pubblici**](/it/editors/wme/switzerland-helper/transports-publics) :
  le fermate ufficiali delle SBB visualizzate sulla mappa, da creare o da unire con un clic.
- [**Controllo dei nomi delle strade**](/it/editors/wme/switzerland-helper/noms-de-rues) :
  confronto dei nomi Waze con il repertorio ufficiale svizzero, con correzione assistita.
- [**Numeri civici**](/it/editors/wme/switzerland-helper/numeros-de-maison) : importazione dei
  numeri ufficiali dal registro federale degli edifici.

::: reminder Le tue impostazioni restano sul tuo computer
Le impostazioni dello script, comprese le segnalazioni che scegli di ignorare, sono salvate
nel tuo browser. Se editi da due macchine, ciascuna ha le proprie.
:::

::: quote Fonti
- Repository dello script: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Autori: Maël Pedretti (Marelitaw) e Yann Rapenne (Neprena)
:::
