---
title: Numeri civici
description: Importare nel WME i numeri civici ufficiali del registro federale degli edifici.
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/city.png" alt="">

# Numeri civici

L'importatore mostra gli indirizzi ufficiali del **registro federale degli edifici** e
permette di creare in Waze i numeri mancanti, uno per uno o per strada intera.

## Attivare la funzione

La funzione è **spenta all'inizio** : sta a te accenderla, dalla casella **Numeri civici
svizzeri** del selettore dei livelli oppure dall'interruttore in cima alla scheda
**CH · Numeri civici**.

I punti appaiono a partire dallo zoom 17, e i numeri vengono scritti accanto a essi quando si
ingrandisce ulteriormente.

## Leggere i punti

| Punto | Significato | Cliccabile |
| --- | --- | --- |
| **Verde acceso**, con un **+** | Numero della strada selezionata, assente da Waze | Sì |
| **Ardesia**, con una **spunta** | Numero già posato | No |
| **Grigio chiaro**, piccolo | Indirizzo di un'altra strada | No |
| **Grigio-blu**, piccolo | Nessuna strada selezionata, o verifica in corso | No |

I primi due portano un pittogramma e hanno la stessa dimensione: li distinguete anche senza
percepire la differenza di colore. Gli ultimi due restano piccoli e spenti, perché non c'è
nulla da farci.

::: important Il grigio-blu vuol dire anche «aspetta»
Subito dopo aver selezionato un segmento, lo script verifica quali numeri esistono già.
Durante questo breve istante i punti restano grigio-blu e non reagiscono al clic, per evitare
di creare un doppione. Aspetta che assumano il loro colore definitivo.
:::

## Importare un numero

1. **Seleziona prima il segmento stradale.**
2. Clicca su un punto verde acceso : il numero viene creato nella posizione ufficiale.

::: note Il numero si collega da solo al segmento giusto
Una strada è suddivisa in più segmenti, uno per ogni tratto fra le intersezioni. Ogni numero
è collegato a quello davanti al quale si trova realmente, e non necessariamente a quello su
cui hai cliccato. Lo script cerca inoltre i doppioni sui tratti vicini della stessa strada :
il numero 15 è spesso posato su quello accanto.
:::

## Importare un'intera strada

Con un segmento selezionato, un pulsante di importazione appare nella scheda e nel riquadro
in cima al pannello del segmento. <kbd>Alt</kbd>+<kbd>H</kbd> fa la stessa cosa.

L'importazione tratta **al massimo 50 numeri** alla volta : se ne mancano di più, il pulsante
lo annuncia e basta rilanciarla. Una conferma elenca sempre i numeri interessati prima di
crearli.

::: important Rileggi sempre il risultato sulla mappa
Le coordinate ufficiali puntano all'edificio, non alla porta : un ingresso di cortile, una
casa arretrata o una villa in un grande giardino daranno un punto mal posizionato per la
navigazione. Sposta questi numeri prima di salvare.
:::

## Quando il pulsante di importazione non appare

- **Nessun segmento è selezionato.**
- **Non manca alcun numero** su questa strada.
- **La zona è troppo densa** perché lo script elenchi tutti gli indirizzi. Lo dice
  chiaramente, e i clic punto per punto continuano a funzionare normalmente.

## Annullare

<kbd>Ctrl</kbd>+<kbd>Z</kbd> annulla la creazione come qualsiasi altra modifica, e i punti
annullati ritornano verdi. Passano brevemente al grigio-blu per il tempo che lo script
riverifichi la strada, il che è normale.

## Comuni bilingui

Lo script confronta tutti i nomi ufficiali con tutti i nomi del segmento, principale e
alternativi. Un segmento denominato *Zentralstrasse* viene quindi correttamente riconosciuto
come corrispondente agli indirizzi *Rue Centrale*, e viceversa.

## Impostazioni

Le più utili : a partire da quale zoom si caricano gli indirizzi, la visualizzazione dei
numeri sulla mappa, e una conferma a ogni clic se la preferisci. Per impostazione
predefinita vengono proposti solo gli indirizzi di edifici realmente costruiti, non quelli
dei progetti in corso.

Se i dati ti sembrano superati, **Svuotare la cache e ricaricare** forza una rilettura.

La scorciatoia <kbd>Alt</kbd>+<kbd>J</kbd> accende e spegne il livello, anche quando la
funzione è disattivata.

::: quote Fonti e origine
- Repository dello script: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Registro federale degli edifici e delle abitazioni (RegBL/GWR), https://www.geo.admin.ch
- L'idea di questa funzione viene dallo script «WME Quick HN Importer CH» di Ari (Reloaded) e Gerhard, secondo il concetto originale di Tom 'Glodenox' Puttemans per il Belgio.
:::
