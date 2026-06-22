---
title: Corsie (lanes) e passaggi a livello
---

# Corsie (lanes) e passaggi a livello

La guida per corsie (lane guidance), le istruzioni tramite frecce e i passaggi a livello seguono regole di modifica specifiche per la Svizzera.

::: important Riservato agli editori L3 e superiori
La configurazione della guida per corsie e delle istruzioni tramite frecce è riservata agli editori di livello L3 e superiore. I passaggi a livello richiedono un livello ancora più alto. Se non hai il livello richiesto, non intervenire su questi oggetti.
:::

## Guida per corsie (lanes)

La guida per corsie indica al conducente la corsia o le corsie da utilizzare all'avvicinarsi di un'intersezione. In Svizzera segue il principio KISS («Keep It Simple, Stupid»): di regola, **non tracciare corsie di preselezione**. La maggior parte delle intersezioni non ne ha bisogno, e i segmenti di corsia inutili complicano la mappa, appesantiscono la validazione e rallentano i calcoli degli itinerari.

Il tracciamento di corsie di preselezione si giustifica solo in casi particolari:

- La corsia inizia nettamente prima dell'intersezione ed è fisicamente separata da essa (spartitraffico, isola), in modo che un cambio di corsia diventi impossibile.
- C'è il rischio che l'istruzione di svolta arrivi troppo tardi per raggiungere la corsia corretta prima dell'intersezione.
- Un errore cartografico («Map problem») richiede un segmento di corsia come soluzione alternativa.
- Riscontri di utenti o di area manager segnalano annunci vocali tardivi.

In caso di dubbio, non tracciare la corsia: la semplicità serve meglio gli utenti rispetto alla complessità. Per la realizzazione delle intersezioni, vedi [Intersezioni](/it/editors/intersections).

## Istruzioni tramite frecce (Abbiegeanweisungen)

Le istruzioni tramite frecce sono un mezzo complementare per **forzare o sopprimere un annuncio** vocale quando le impostazioni standard non producono il risultato atteso. Usi principali:

- Forzare o sopprimere un'istruzione di svolta a un'intersezione.
- Generare un'istruzione di **inversione a U** in una strada a senso unico dove il ritorno è possibile, al posto di una «svolta a sinistra».
- Produrre un **wayfinder semplificato** (mantenere a sinistra / a destra) che annuncia il segmento successivo e aiuta a evitare deviazioni di itinerario indesiderate.

Un'istruzione modificata si riconosce dal colore del simbolo dell'altoparlante sulla freccia: passa dal **ciano all'arancione**. Il ciano corrisponde a un annuncio non forzato, determinato dagli algoritmi di Waze; l'arancione segnala un'istruzione forzata da un editore.

::: important Prudenza per gli editori junior
I nuovi editori e gli editori junior dovrebbero consultare un editore esperto prima di utilizzare queste opzioni di annuncio aggiuntive.
:::

## Passaggi a livello

::: note Nota
Da giugno 2024, le regole relative ai passaggi a livello sono state spostate nelle direttive «Permanent Hazards» (pericoli permanenti) di Waze. Vedi [Pericoli permanenti](/it/editors/dangers-permanents).
:::

::: note Contenuto dettagliato da completare
La fonte della community svizzera rimanda le regole dettagliate a un documento esterno che qui non viene riportato. Questa pagina sarà completata quando queste direttive dettagliate saranno disponibili. Nel frattempo, fare riferimento alle direttive Permanent Hazards e al thread Waze Discuss qui sotto.
:::

::: quote Fonti
- Abbiegespuren: https://www.waze.com/discuss/t/abbiegespuren/377228
- Abbiegeanweisungen über Pfeile: https://www.waze.com/discuss/t/abbiegeanweisungen-uber-pfeile/377232
- Lanes / Railroad crossings editing rules for Switzerland: https://www.waze.com/discuss/t/lanes-railroad-crossings-editing-rules-for-switzerland/101939
:::
