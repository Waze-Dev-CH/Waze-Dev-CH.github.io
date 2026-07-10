---
title: Basi del routing
description: Come i tipi di segmento influenzano il calcolo del percorso in Waze, il pruning e i livelli di blocco previsti.
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Basi del routing

::: note Livello L2
Una buona comprensione del routing è necessaria per classificare correttamente i segmenti.
:::

Il WME classifica i segmenti secondo una gerarchia che influenza direttamente l'algoritmo di navigazione, in particolare per i tragitti a lunga distanza.

## Gerarchia dei tipi di strade

Dal più importante al meno importante:

1. Autostrade e strade a scorrimento veloce (Freeway / Major Highway)
2. Rampe (caso particolare)
3. Strade principali (Minor Highway)
4. Strade primarie (Primary Street)
5. Strade (Street)

## Principio di continuità

> La continuità dei tipi è essenziale nel WME: non si deve mai interrompere una sequenza di segmenti di un dato tipo con segmenti di un tipo inferiore.

Esempio: una strada nazionale non deve essere interrotta da un segmento classificato come «Strada». Questo compromette la coerenza della rete e disturba il calcolo dei percorsi lunghi.

## Meccanismo di pruning (potatura)

Waze utilizza un sistema di **potatura progressiva**: più ci si allontana dalla partenza o dalla destinazione, più le strade a bassa priorità vengono escluse dal calcolo.

| Tipo di strada | Comportamento |
|--------------|-------------|
| Strada / Strada primaria | Escluse oltre una certa soglia di distanza |
| Strade principali / secondarie | Soglia di esclusione più elevata |
| Autostrade / Rampe | **Mai escluse** |

## Tragitti brevi vs lunghi

**Tragitto breve** (es. Genève → Lausanne): tutti i tipi di strade sono considerati, comprese le strade locali.

**Tragitto lungo** (es. Genève → Zurich): vengono utilizzate solo le autostrade e le strade principali. Le strade secondarie intervengono solo in prossimità della partenza/destinazione o durante un ricalcolo.

## Preferenze di routing

::: warning Idea sbagliata
Le preferenze «Evita» nell'applicazione **non** impediscono l'uso locale di un segmento. Regolano unicamente le **soglie di pruning** per i tragitti a lunga distanza. Un segmento «sfavorito» resta utilizzabile localmente.
:::

::: example Esempio
Una strada classificata come «sfavorita» sarà sempre percorsa se è l'unica opzione per raggiungere una destinazione nel quartiere. L'effetto si manifesta solo sui grandi calcoli di percorso.
:::

## Livelli di blocco (locks)

Standard svizzero: livello di blocco previsto per tipo di strada.

| Tipo di strada | Livello di lock |
| --- | --- |
| Autostrada (Freeway) | L5 |
| Strada principale (Major Highway) | L4 |
| Strada secondaria (Minor Highway) | L3 |
| Strada primaria (Primary Street) | L2 |
| Strada (Street) | L1 |

::: reminder Promemoria
Più il tipo di strada è elevato nella gerarchia, più il livello di blocco previsto è alto. Questo protegge i segmenti strutturanti della rete dalle modifiche involontarie.
:::

Bloccare con moderazione. Il blocco riguarda soprattutto i tipi strutturanti: autostrade, strade, rampe e rotatorie. Non bisogna bloccare tutto senza motivo, perché un blocco troppo esteso frena inutilmente gli altri editor.

Un editor può modificare un segmento bloccato solo se il suo rango è almeno pari al livello di blocco. Scegliere il livello di blocco in base all'importanza del segmento, non per eccesso di precauzione.

::: quote Fonti
- Basi del Routing: tipi di segmenti in WME ed effetti sui tragitti lunghi/brevi: https://www.waze.com/discuss/t/bases-du-routing-types-de-segments-dans-wme-et-effets-sur-les-trajets-longs-courts/389975
- Informazioni in francese: https://www.waze.com/discuss/t/informations-en-francais/377254
- Livelli di blocco: regole comunitarie svizzere condensate nello script WME Switzerland Helper.
:::
