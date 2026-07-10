---
title: Corsie di circolazione e passaggi a livello
description: Regole di editing per le corsie (lanes) e i passaggi a livello in Svizzera (L3+).
order: 8
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Corsie di circolazione e passaggi a livello

::: warning Livello L3+
La configurazione della guida per corsie (lane guidance) e delle istruzioni tramite frecce è riservata agli editor di livello 3 e superiore. Se non hai il livello richiesto, non intervenire su questi oggetti.
:::

La guida per corsie (lane guidance), le istruzioni tramite frecce e i passaggi a livello seguono regole di editing specifiche per la Svizzera.

## Guida per corsie (lanes)

La guida per corsie indica al conducente la corsia o le corsie da imboccare in avvicinamento a un'intersezione. In Svizzera segue il principio KISS (« Keep It Simple, Stupid »): come regola generale, **non tracciare corsie di preselezione**. La maggior parte delle intersezioni non ne ha bisogno, e segmenti di corsie inutili complicano la mappa, appesantiscono la validazione e rallentano i calcoli di percorso.

Il tracciamento di corsie di preselezione si giustifica solo in casi particolari:

- La corsia inizia nettamente prima dell'intersezione e ne è fisicamente separata (spartitraffico, isola), così che un cambio di corsia diventa impossibile.
- C'è il rischio che l'istruzione di svolta arrivi troppo tardi per raggiungere la corsia corretta prima dell'intersezione.
- Un errore cartografico (« Map problem ») richiede un segmento di corsia come soluzione alternativa.
- Feedback di utenti o di gestori di zona segnalano annunci vocali tardivi.

In caso di dubbio, non tracciare la corsia: la semplicità serve meglio gli utenti rispetto alla complessità. Per l'impostazione delle intersezioni, vedi [Intersezioni](/it/editors/cartographie/intersections).

Le linee guida dettagliate per la configurazione delle corsie in Svizzera sono disponibili nel documento ufficiale della community:

→ [Leggere le linee guida complete (Google Doc pubblicato)](https://docs.google.com/document/d/e/2PACX-1vTbD9nEIrEABLDrGcWlyXDd9wzhHpYrksS8_yCxkcRRxvmRAsjy_1b1NZHjSeT4Lyhq63vvEtV5tCLR/pub)

## Istruzioni tramite frecce (Abbiegeanweisungen)

Le istruzioni tramite frecce sono un mezzo complementare per **forzare o sopprimere un annuncio** vocale quando le impostazioni standard non producono il risultato atteso. Usi principali:

- Forzare o sopprimere un'istruzione di svolta a un'intersezione.
- Generare un'istruzione di **inversione a U** in una strada a senso unico dove il ritorno è possibile, al posto di una « svolta a sinistra ».
- Produrre un **wayfinder semplificato** (mantenere la sinistra / la destra) che annuncia il segmento successivo e aiuta a evitare deviazioni di percorso indesiderate.

Un'istruzione modificata si riconosce dal colore del simbolo altoparlante sulla freccia: passa da **ciano ad arancione**. Il ciano corrisponde a un annuncio non forzato, determinato dagli algoritmi di Waze; l'arancione segnala un'istruzione forzata da un editor.

::: important Prudenza per gli editor junior
I nuovi editor e gli editor junior dovrebbero consultare un editor esperto prima di utilizzare queste opzioni di annuncio supplementari.
:::

## Passaggi a livello

::: note Passaggi a livello: Livello L4+
Da giugno 2024, le regole relative ai passaggi a livello sono state spostate nelle direttive « Permanent Hazards » (pericoli permanenti) di Waze. Vedi [Pericoli permanenti](/it/editors/wme/dangers-permanents) (L4+).
:::

::: note Contenuto dettagliato da completare
La fonte comunitaria svizzera rimanda le regole dettagliate a un documento esterno che non è riportato qui. Questa pagina sarà completata quando queste direttive dettagliate saranno disponibili. Nel frattempo, fare riferimento alle direttive Permanent Hazards e al thread Waze Discuss qui sotto.
:::

## Risorse comunitarie

- [waze-switzerland.ch](https://www.waze-switzerland.ch/)

::: quote Fonti
- Abbiegespuren: https://www.waze.com/discuss/t/abbiegespuren/377228
- Abbiegeanweisungen über Pfeile: https://www.waze.com/discuss/t/abbiegeanweisungen-uber-pfeile/377232
- Lanes / Railroad crossings editing rules for Switzerland: https://www.waze.com/discuss/t/lanes-railroad-crossings-editing-rules-for-switzerland/101939
:::
