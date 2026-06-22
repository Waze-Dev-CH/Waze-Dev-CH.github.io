---
title: Legenda della mappa svizzera
---

# Legenda della mappa svizzera

La legenda descrive i tipi di segmento utilizzati in Svizzera e come appaiono nel Waze Map Editor (WME). Il tipo si sceglie in base alla segnaletica ufficiale visibile sul posto. La pastiglia di colore sotto ogni tipo corrisponde alla sua visualizzazione attuale in WME.

::: important La classificazione è specifica per paese
La classificazione delle strade differisce da un paese all'altro. Prima di editare in Svizzera, leggi il Wiki nazionale. Non applicare per analogia le regole di un paese vicino.
:::

## Segmenti e incroci

Un segmento è una linea delimitata da due punti. In WME, i segmenti servono a disegnare le strade. Un segmento è delimitato, nel nostro caso, da un incrocio.

<svg class="diagram" viewBox="0 0 760 360" role="img" aria-label="Una rete di segmenti di tipi diversi collegati da nodi ad angoli vari.">
  <rect class="d-panel" x="16" y="16" width="728" height="328" rx="16" />

  <polyline class="d-casing" points="70,225 255,285 475,150 690,190" />
  <polyline class="d-casing" points="150,70 255,285" />
  <polyline class="d-casing" points="475,150 560,330" />
  <polyline class="d-casing" points="255,285 95,330" />

  <polyline class="d-road d-major" points="70,225 255,285 475,150 690,190" />
  <polyline class="d-road d-minor" points="150,70 255,285" />
  <polyline class="d-road d-primary" points="475,150 560,330" />
  <polyline class="d-road d-street" points="255,285 95,330" />

  <circle class="d-end" cx="70" cy="225" r="5" />
  <circle class="d-end" cx="690" cy="190" r="5" />
  <circle class="d-end" cx="150" cy="70" r="5" />
  <circle class="d-end" cx="560" cy="330" r="5" />
  <circle class="d-end" cx="95" cy="330" r="5" />
  <circle class="d-junction" cx="255" cy="285" r="10" />
  <circle class="d-junction" cx="475" cy="150" r="10" />

  <line class="d-lead" x1="120" y1="150" x2="198" y2="178" />
  <text class="d-cap" x="60" y="145">Segmento</text>
  <line class="d-lead" x1="548" y1="108" x2="486" y2="142" />
  <text class="d-cap" x="556" y="104">Nodo (incrocio)</text>
</svg>

## Tipi di segmento

Il nome WME originale (in inglese) è indicato tra parentesi, perché resta identico in qualsiasi lingua dell'editor.

### Freeway

<span class="road-chip" style="background:#C577D2" title="Freeway"></span>

Una Freeway è a carreggiate separate, senza semafori né segnali di stop. È accessibile solo tramite entrate e uscite. Le altre strade non devono esservi collegate (tranne le corsie di servizio di emergenza). Molte strade nazionali seguono un'autostrada: in tal caso, la segnaletica autostradale ha la priorità. I cartelli sono verdi.

<div class="sign-row">
<img src="/img/legende-carte/c16ea2fbd7a1396bc1c982fb08168e48879a8b93.png" alt="Cartello autostradale svizzero">
<img src="/img/legende-carte/c0699c9cb1ff4a95b48d1fd9b00b2fab9542ff9b.png" alt="Cartello fine autostrada">
<img src="/img/legende-carte/d935b7ab6b128977a2e3517fb92afee4f1dc6785.png" alt="Cartello direzione autostrada">
</div>

### Major Highway

<span class="road-chip" style="background:#46B8D2" title="Major Highway"></span>

Una Major Highway è una semiautostrada. I cartelli delle semiautostrade in Svizzera sono verdi.

<div class="sign-row">
<img src="/img/legende-carte/e827a9907ac2e5a5bd1adf16e1184070c5187877.png" alt="Cartello semiautostrada svizzera">
<img src="/img/legende-carte/ef5e9ee47fe2f256fc82cf6cf53710c5952b53d3.png" alt="Cartello fine semiautostrada">
</div>

### Minor Highway

<span class="road-chip" style="background:#69BF88" title="Minor Highway"></span>

Una Minor Highway è una strada nazionale. Tutte le altre strade gialle sono classificate come Primary Street.

<div class="sign-row">
<img src="/img/legende-carte/10794e9459bcfc37b4036320fd123d30bf65a528.png" alt="Cartello strada nazionale">
<img src="/img/legende-carte/e7143b3bfcdafe2a61239b2e5e8fc9c2375ab9f7.png" alt="Cartello strada nazionale">
<img src="/img/legende-carte/6cea032b690ba2c8ff03c282525635b04008f887.png" alt="Cartello strada nazionale">
</div>

### Ramp

<span class="road-chip" style="background:#B3BFB3" title="Ramp"></span>

Le rampe servono per entrate e uscite di autostrade e semiautostrade.

<div class="sign-row">
<img src="/img/legende-carte/d9070357827ee97cf0a53169eabc2f847a48fe57.png" alt="Rampa autostradale">
<img src="/img/legende-carte/70783028364b5d3f68db9abbbbf21552db61b405.png" alt="Cartello di uscita">
</div>

### Primary Street

<span class="road-chip" style="background:#F1EA58" title="Primary Street"></span>

Le Primary Street corrispondono alle strade principali in località, secondo la segnaletica seguente.

<div class="sign-row">
<img src="/img/legende-carte/8f0a4ee76b3c5ad73da36ba0fda31c01b14259f0.png" alt="Cartello strada principale">
<img src="/img/legende-carte/7155655a75375a0a720489cd5f4b16718aa6e9b7.png" alt="Cartello strada principale">
<img src="/img/legende-carte/db96e5269c6f2137de9197ee3754048ca647c028.png" alt="Esempio Primary Street">
<img src="/img/legende-carte/acda4aed89c392695c374d21ce3a6c588c76e3e8.png" alt="Esempio Primary Street">
<img src="/img/legende-carte/70a24d49a5c45652cc13e58c85ad7dd7ad785bea.png" alt="Esempio Primary Street">
</div>

### Street

<span class="road-chip" style="background:#ffffff" title="Street (mostrata in bianco)"></span>

Come Street classifichiamo tutte le strade secondarie e di quartiere aperte al traffico normale, a senso unico o a doppio senso. Le strade secondarie hanno cartelli bianchi.

::: note Mostrata in bianco
Il tipo Street appare in bianco in WME. La pastiglia sopra ha un sottile bordo per restare visibile.
:::

<div class="sign-row">
<img src="/img/legende-carte/60652f5793f16bb5865b17c20dea5f1f0b411131.png" alt="Cartello bianco di strada secondaria">
<img src="/img/legende-carte/5ad955f94b7166d6f0f58ccf9101719283867581.png" alt="Cartello bianco di strada secondaria">
<img src="/img/legende-carte/1669f4b889bbecbb00c50f3cd49943a7f2ba669c.png" alt="Cartello bianco di strada secondaria">
</div>

![Esempio di strada normale](/img/legende-carte/d645bf0e83126c958200db92665ce0cbd6c8a335.jpeg)

### Narrow Street

<span class="road-chip" style="background:#64799A" title="Narrow Street"></span>

Strada stretta a doppio senso. Le regole d'uso sono in [Geometria dei segmenti](/it/editors/geometrie-segments).

### Dirt Road / 4x4

<span class="road-chip" style="background:#867342" title="Dirt Road"></span>

Le Dirt Road sono strade sterrate: strade forestali, strade per trattori e piste 4x4.

![Esempio di strada sterrata](/img/legende-carte/b9e0b12d4547e855f420bcd99e7691ff405ceb9d.jpeg)

### Parking Lot Road

<span class="road-chip" style="background:#ABABAB" title="Parking Lot Road"></span>

Le Parking Lot Road sono i grandi parcheggi, i parcheggi delle aree di sosta, le corsie interne dei parcheggi e gli accessi alle stazioni di servizio.

![Esempio di parcheggio](/img/legende-carte/2a31cdf4f51fee24022961453bb0dcbe33e61bc0.jpeg)

### Private Road

<span class="road-chip" style="background:#B8B56A" title="Private Road"></span>

Le Private Road sono tutte le strade private mostrate come tali.

### Walking Trail

I Walking Trail sono tutti i sentieri pedonali. Non devono mai collegare due strade percorribili.

![Esempio di sentiero pedonale](/img/legende-carte/a859600785f35f6a691f5dff4d99dfe3d30c4648.jpeg)

### Pedestrian Boardwalk

I Pedestrian Boardwalk sono le zone pedonali, comprese le passeggiate lungo i laghi. Stessa regola di non-collegamento dei Walking Trail.

![Esempio di zona pedonale](/img/legende-carte/b43e72f3de0029121a7a6e5fea0daf4eb6e37923.jpeg)

### Stairway

Le Stairway sono le scale. Stessa restrizione di collegamento.

![Esempio di scale](/img/legende-carte/28e8a2412a6b5835e4a45f08dfdcfec9f646cf42.jpeg)

### Railroad

Le Railroad sono le linee ferroviarie. In generale, non registrarle dal client ma nell'editor. Possono essere collegate ad altre strade per i passaggi a livello. Indicare il nome della compagnia come nome della strada, senza città. Bloccare al livello L2.

### Runway/Taxiway

I Runway/Taxiway sono le piste di atterraggio. Completano la mappa, ma non è consigliato mappare tutti gli aeroporti: un Place di tipo Airport è sufficiente.

::: quote Fonti
- Légende de la Carte Suisse: https://www.waze.com/discuss/t/legende-de-la-carte-suisse/377261
- Colori dei tipi di strada: palette WME verificata dalla comunità svizzera.
:::
