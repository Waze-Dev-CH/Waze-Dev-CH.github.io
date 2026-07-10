---
title: "Numerazione delle autostrade (Axx / Exx)"
order: 11
---

<img class="macaron" src="/img/editors/badge-freeway.png" alt="" width="128" height="128">

# Numerazione delle autostrade (Axx / Exx)

Le autostrade svizzere sono identificate da due sistemi di numerazione visualizzati sui cartelli fisici:

- **Axx**: numero nazionale svizzero (es. A1, A9, A13)
- **Exx**: numero di strada europea (es. E25, E27, E62)

Questi numeri devono essere aggiunti come **nomi alternativi** sui segmenti autostradali in WME. Questo migliora il routing a lunga distanza, perché il server di routing identifica la continuità di una strada tramite il suo nome alternativo, a differenza del nome principale, che cambia frequentemente ai raccordi A/E.

::: important Importante
Non modificare mai il nome principale del segmento: aggiungere solo nomi alternativi.
:::

## Riutilizzare uno scudo esistente

Prima di creare un nuovo nome alternativo, verificare se lo scudo esiste già in prossimità del segmento. In tal caso, selezionarlo dai suggerimenti per riutilizzare lo stesso ID.

::: warning ID duplicati da evitare
I suggerimenti di WME mostrano solo i nomi geograficamente vicini. Un E25 creato a Ginevra non apparirà come suggerimento a Zurigo, anche se esiste già. Creare un secondo E25 con un ID diverso comprometterebbe la coerenza della rete stradale.

Verificare sulla mappa WME se il numero esiste già altrove in Svizzera prima di ogni creazione.
:::

![Riutilizzare uno scudo esistente (esempio a sinistra) vs. scudo assente (esempio a destra)](/nexus/image7.png)

![Suggerimenti di nomi alternativi in WME](/nexus/image8.png)

## Creare un nuovo scudo

Se il numero non esiste ancora da nessuna parte in Svizzera:

1. Inserire il nome Exx o Axx, lettere e cifre unite, senza spazio né trattino (es. **E25** ✓ / E 25 ✗ / E-25 ✗), poi lasciare Città su « Nessuna »
2. Cliccare su **Applica**
3. Cliccare sull'icona dello scudo
4. Selezionare il tipo di scudo
5. Inserire il numero: per gli Axx, inserire **solo la cifra** nel campo dello scudo (senza la lettera A)
6. Cliccare su **Applica**
7. Salvare

![Procedura di creazione di un nuovo scudo in WME](/nexus/image9.png)

## Numeri da aggiungere per segmento

| Tipo | Formato | Esempio |
|------|--------|---------|
| Autostrada nazionale | Axx | A1, A9, A13 |
| Strada europea | Exx | E25, E27, E62 |

Un segmento può portare più nomi alternativi se più strade si sovrappongono (es. A1 ed E25 sullo stesso tratto).

![Esempi di nomi alternativi Axx ed Exx su un segmento](/nexus/image10.png)
