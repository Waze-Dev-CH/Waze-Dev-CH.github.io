---
title: Tipi di segmenti e routing
---

# Tipi di segmenti e routing

Questa pagina spiega i tipi di segmenti in WME, il loro effetto sul calcolo dell'itinerario e i livelli di blocco attesi per tipo di strada in Svizzera.

## Gerarchia delle strade

WME utilizza una classificazione rigorosa. Dal rango più alto al più basso: autostrada e corsia espressa, poi rampe, strade maggiori, strade minori, poi vie primarie e vie.

::: important Principio di continuità
Non si deve mai interrompere la successione dei segmenti di un dato tipo con segmenti di un tipo inferiore. Questa regola garantisce la coerenza della rete.
:::

## Effetto sul routing

Waze utilizza il "pruning" (potatura) per escludere progressivamente i tipi inferiori in base alla distanza.

- Le vie vengono potate rapidamente.
- Le autostrade e le rampe non vengono mai potate: sono sempre considerate.

### Tragitti brevi contro tragitti lunghi

- Tragitto breve (per esempio Genève verso Lausanne): tutti i tipi di strade sono considerati, compresi i segmenti secondari.
- Tragitto lungo (per esempio Genève verso Zürich): solo i tipi superiori (autostrade, strade maggiori) sono considerati per la maggior parte del percorso.

::: note Preferenze di routing
Le preferenze di routing intervengono solo nel pruning dei tragitti a lunga distanza. Non influiscono sui tragitti locali, contrariamente a una credenza diffusa.
:::

## Livelli di blocco (locks)

Standard svizzero: livello di blocco atteso per tipo di strada.

| Tipo di strada | Livello di blocco |
| --- | --- |
| Autoroute (Freeway) | L5 |
| Route majeure (Major Highway) | L4 |
| Route mineure (Minor Highway) | L3 |
| Rue primaire (Primary Street) | L2 |
| Rue (Street) | L1 |

::: reminder Promemoria
Più il tipo di strada è elevato nella gerarchia, più è elevato il livello di blocco atteso. Questo protegge i segmenti strutturanti della rete dalle modifiche involontarie.
:::

### Blocco (locking)

Bloccare con moderazione. Il blocco mira soprattutto ai tipi strutturanti: autostrade, strade, rampe e rotatorie. Non bisogna bloccare tutto senza motivo, perché un blocco troppo ampio frena inutilmente gli altri editor.

Un editor può modificare un segmento bloccato solo se il suo rango è almeno pari al livello di blocco. Scegliere il livello di blocco in funzione dell'importanza del segmento, non per eccesso di prudenza.

::: quote Fonti
- Basi del routing: tipi di segmenti in WME ed effetti sui tragitti lunghi/brevi: https://www.waze.com/discuss/t/bases-du-routing-types-de-segments-dans-wme-et-effets-sur-les-trajets-longs-courts/389975
- Informazioni in francese: https://www.waze.com/discuss/t/informations-en-francais/377254
- Livelli di blocco: regole della comunità svizzera condensate nello script WME Switzerland Helper.
:::
