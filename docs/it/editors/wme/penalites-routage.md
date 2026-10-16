---
title: Penalità di instradamento
description: Come Waze penalizza determinate manovre e tipi di strade nel calcolo del percorso, e cosa costituisce una restrizione assoluta.
order: 4.5
---

<img class="banner-img is-narrow" src="/img/editors/traffic.png" alt="">

# Penalità di instradamento

## Concetto delle penalità

Una penalità di instradamento è un tempo aggiuntivo, invisibile nel tempo di arrivo stimato (ETA), aggiunto dal server di routing a un percorso candidato per evitare una situazione indesiderata. La penalità non blocca un percorso: fa preferire un'alternativa quando ne esiste una.

::: important Importante
I valori esatti delle penalità sono proprietari e non pubblici. Non si deve diffondere informazioni precise sui valori delle penalità applicate.
:::

Storicamente, Waze ha a lungo supportato due ambienti di mappe (mappe editate manualmente e mappe importate senza correzioni). Questa architettura ha portato a un sistema basato su penalità piuttosto che un sistema basato su restrizioni assolute, per gestire i casi non verificati o incerti.

## Penalità legate alle proprietà dei segmenti

### Svolte ristrette e consentite « soft »

Una svolta ristretta « soft » (soft restricted turn, freccia rossa con punto interrogativo viola nel WME) applica una penalità elevata. Questa penalità permette comunque l'instradamento su svolte mai verificate quando non esiste alcuna alternativa.

Una svolta consentita « soft » (soft allowed turn, freccia verde con punto interrogativo viola) applica una penalità molto bassa.

Per le restrizioni di svolta in generale, consultare la pagina [Restrizioni di svolta](/it/editors/wme/restrictions-virage).

### Svolte difficili

Le svolte difficili (difficult turn) sono penalizzate in base alla preferenza del conducente e attivate per impostazione predefinita nell'applicazione Waze. Consultare la pagina [Svolte difficili](/it/editors/wme/virages-difficiles) per ulteriori informazioni sulla loro configurazione.

### Strade non asfaltate

Una strada non asfaltata (Unpaved) è penalizzata in base alle preferenze del conducente: opzione « evitare le strade non asfaltate » (attivata per impostazione predefinita) e opzione « evitare le lunghe sezioni » oltre circa 300 metri. Consultare [Sentieri agricoli](/it/editors/cartographie/chemins-agricoles).

### Strade a pedaggio

Le strade a pedaggio (Toll) ricevono una penalità aumentata per i conducenti che hanno attivato l'opzione « evitare i pedaggi ».

### Autostrade

Le autostrade (Freeway) sono penalizzate solo se il conducente ha attivato « evitare le autostrade », opzione disattivata per impostazione predefinita.

### Traghetti

I traghetti ricevono una penalità solo se il conducente ha attivato « evitare i traghetti », opzione disattivata per impostazione predefinita.

### Strade private, parcheggi e sentieri non mantenuti

Una strada privata (Private Road), un parcheggio (Parking Lot Road) o un sentiero non mantenuto applicano la loro penalità alla transizione in uscita verso un altro tipo di strada, non all'ingresso. Consultare [Cartografia dei parcheggi](/it/editors/cartographie/parkings). Per una strada privata attraversata da una strada, vedere [Eccezioni](#eccezioni).

### Passaggi stretti

Un passaggio stretto (Passageway) riceve una forte penalità, eccetto per i motociclisti. Nota: negli Stati Uniti, l'uso di questo tipo è soggetto ad approvazione da ottobre 2018 (regola locale americana).

## Penalità legate alla configurazione della rete

### Inversioni a U

Storicamente, le inversioni a U (U-turns) erano penalizzate su doppie svolte a sinistra o a destra alla fine di segmenti brevi. Negli Stati Uniti, questa penalità è stata disattivata a dicembre 2021. La raccomandazione attuale è di utilizzare una junction box per impedire le inversioni a U indesiderate sulle strade a carreggiate separate.

![Segmento troppo breve per autorizzare due svolte a sinistra successive](/penalites/segment-trop-court.png)

### Prevenzione delle deviazioni

Il meccanismo di prevenzione delle deviazioni (detour prevention) penalizza i percorsi che escono da un'autostrada per rientrarvi immediatamente, che passano due volte per lo stesso nodo o la stessa junction box, o che formano cicli.

![Le rampe correttamente cartografate impediscono una deviazione con uscita e rientro immediato](/penalites/detour-bretelles.png)

### Segmenti numerosi e brevi

Una leggera penalità si applica ai percorsi che contengono molti segmenti brevi, in particolare i segmenti creati di recente senza dati di traffico storici disponibili.

## Eccezioni

### Strada privata attraversata da una strada

Quando una strada privata è attraversata da una strada, i suoi due tratti non devono toccarsi al nodo dell'incrocio. Su almeno un lato, si inserisce un breve segmento di almeno 10 metri, **dello stesso tipo della strada che incrocia la strada privata**, tra l'incrocio e l'inizio della strada privata. Un solo lato è sufficiente: in entrambe le direzioni, l'attraversamento passa quindi per questo segmento. Negli esempi seguenti, la strada è di tipo Strada (Street).

<svg class="diagram" viewBox="0 0 760 380" role="img" aria-label="Tre casi di incrocio tra una strada privata e una strada. Senza segmento Strada, la strada privata passa direttamente per il nodo dell'incrocio: nessuna penalità per la strada privata, da evitare. Con un segmento Strada su un lato: corretto, l'uscita dalla strada privata attiva la penalità. Con un segmento Strada su ogni lato: anche questo è corretto.">
  <rect class="d-panel" x="16" y="16" width="236" height="348" rx="16" />
  <rect class="d-panel" x="262" y="16" width="236" height="348" rx="16" />
  <rect class="d-panel" x="508" y="16" width="236" height="348" rx="16" />

  <text class="d-cap" x="36" y="52">Senza segmento Strada</text>
  <text class="d-penalty" x="36" y="76">Da evitare</text>
  <text class="d-cap" x="282" y="52">Un segmento Strada</text>
  <text class="d-sub" x="282" y="76">Corretto, sufficiente</text>
  <text class="d-cap" x="528" y="52">Due segmenti Strada</text>
  <text class="d-sub" x="528" y="76">Corretto anche così</text>

  <line class="d-casing" x1="38" y1="235" x2="230" y2="235" />
  <line class="d-casing" x1="134" y1="120" x2="134" y2="340" />
  <line class="d-road d-private" x1="38" y1="235" x2="230" y2="235" />
  <line class="d-road d-street" x1="134" y1="120" x2="134" y2="340" />

  <line class="d-casing" x1="284" y1="235" x2="476" y2="235" />
  <line class="d-casing" x1="380" y1="120" x2="380" y2="340" />
  <line class="d-road d-private" x1="284" y1="235" x2="336" y2="235" />
  <line class="d-road d-street" x1="336" y1="235" x2="380" y2="235" />
  <line class="d-road d-private" x1="380" y1="235" x2="476" y2="235" />
  <line class="d-road d-street" x1="380" y1="120" x2="380" y2="340" />

  <line class="d-casing" x1="530" y1="235" x2="722" y2="235" />
  <line class="d-casing" x1="626" y1="120" x2="626" y2="340" />
  <line class="d-road d-private" x1="530" y1="235" x2="582" y2="235" />
  <line class="d-road d-street" x1="582" y1="235" x2="670" y2="235" />
  <line class="d-road d-private" x1="670" y1="235" x2="722" y2="235" />
  <line class="d-road d-street" x1="626" y1="120" x2="626" y2="340" />

  <circle class="d-end" cx="38" cy="235" r="5" />
  <circle class="d-end" cx="230" cy="235" r="5" />
  <circle class="d-end" cx="134" cy="120" r="5" />
  <circle class="d-end" cx="134" cy="340" r="5" />
  <circle class="d-junction" cx="134" cy="235" r="9" />

  <circle class="d-end" cx="284" cy="235" r="5" />
  <circle class="d-end" cx="476" cy="235" r="5" />
  <circle class="d-end" cx="380" cy="120" r="5" />
  <circle class="d-end" cx="380" cy="340" r="5" />
  <circle class="d-junction" cx="336" cy="235" r="7" />
  <circle class="d-junction" cx="380" cy="235" r="9" />

  <circle class="d-end" cx="530" cy="235" r="5" />
  <circle class="d-end" cx="722" cy="235" r="5" />
  <circle class="d-end" cx="626" cy="120" r="5" />
  <circle class="d-end" cx="626" cy="340" r="5" />
  <circle class="d-junction" cx="582" cy="235" r="7" />
  <circle class="d-junction" cx="626" cy="235" r="9" />
  <circle class="d-junction" cx="670" cy="235" r="7" />

  <text class="d-sub" x="40" y="272">Strada</text>
  <text class="d-sub" x="40" y="289">privata</text>
  <text class="d-sub" x="146" y="140">Strada</text>
  <text class="d-sub" x="286" y="272">Strada</text>
  <text class="d-sub" x="286" y="289">privata</text>
  <text class="d-sub" x="392" y="140">Strada</text>
  <text class="d-sub" x="532" y="272">Strada</text>
  <text class="d-sub" x="532" y="289">privata</text>
  <text class="d-sub" x="638" y="140">Strada</text>

  <text class="d-sub" x="120" y="180" text-anchor="end">nessuna</text>
  <text class="d-sub" x="120" y="197" text-anchor="end">penalità</text>
  <line class="d-lead" x1="114" y1="204" x2="126" y2="225" />
  <line class="d-arrow" x1="42" y1="214" x2="74" y2="214" />
  <polyline class="d-arrow" points="67,209 74,214 67,219" />

  <text class="d-penalty" x="336" y="196" text-anchor="middle">penalità</text>
  <line class="d-lead" x1="336" y1="203" x2="336" y2="224" />
  <line class="d-arrow" x1="288" y1="214" x2="320" y2="214" />
  <polyline class="d-arrow" points="313,209 320,214 313,219" />

  <text class="d-penalty" x="582" y="196" text-anchor="middle">penalità</text>
  <line class="d-lead" x1="582" y1="203" x2="582" y2="224" />
  <line class="d-arrow" x1="534" y1="214" x2="566" y2="214" />
  <polyline class="d-arrow" points="559,209 566,214 559,219" />

</svg>

**Perché.** La penalità di una strada privata si applica all'**uscita** verso un altro tipo di strada, non all'ingresso. Se i due tratti privati si collegano direttamente al nodo, attraversare proseguendo dritto resta un passaggio da privato a privato: nessuna penalità per la strada privata all'incrocio. Una successione di strade private attiva quindi una sola penalità, all'uscita finale verso un altro tipo di strada, e Waze può sceglierla come scorciatoia per il traffico di transito.

Con un segmento Strada, ogni attraversamento della strada da una strada privata attiva una penalità all'uscita dal tratto privato. Queste penalità si sommano e rendono la scorciatoia meno vantaggiosa per il calcolo del percorso.

![Chemin de Sorécot e Chemin de Pre-Louis: qui un segmento Strada su ogni lato dell'incrocio (selezione tratteggiata)](/penalites/voie-privee-croisement.jpg)

::: important Perché non una restrizione di svolta
Una restrizione di svolta «dura» vieta la manovra a tutti, compresi gli aventi diritto e i conducenti che vogliono raggiungere una destinazione situata sulla strada. La penalità lascia possibile la manovra, pur sfavorendola nel calcolo del percorso.
:::

::: warning Attenzione
- Puntare ad almeno 10 metri per segmento intermedio: il minimo assoluto è di 5 metri ([micro-segmenti](/it/editors/cartographie/geometrie-segments#micro-segmenti)), e questo margine evita che un segmento troppo corto venga trattato come micro-segmento.
- Assegnare al segmento o ai segmenti intermedi lo stesso tipo della strada che incrocia la strada privata.
:::

## Restrizioni assolute

Al contrario delle penalità, determinate situazioni vietano completamente il passaggio senza eccezioni:

- **Chiusura di strada**: consultare [Chiusure di strade](/it/editors/wme/fermetures)
- **Svolta ristretta «dura»** (freccia rossa senza punto interrogativo): divieto assoluto. Storicamente, era una penalità, ma questo comportamento è evoluto.
- **Restrizioni orarie** di svolta o segmento: in base alle loro condizioni
- **Senso vietato** su una strada a senso unico
- **Tipi non carrabili**: linea ferroviaria (Railroad), pista di atterraggio (Runway), percorsi pedonali
- **Segmento scollegato** dalla rete

::: important Importante
Da quando le restrizioni di svolta «dura» sono diventate assolute, è inutile e dannoso disconnettere o eliminare segmenti per impedire l'instradamento. Preferire configurare una restrizione di svolta o una chiusura se necessario.
:::

## Vedi anche

- [Basi del routing](/it/editors/wme/routing)
- [Restrizioni di svolta](/it/editors/wme/restrictions-virage)
- [Svolte difficili](/it/editors/wme/virages-difficiles)
- [Sentieri agricoli](/it/editors/cartographie/chemins-agricoles)
- [Chiusure di strade](/it/editors/wme/fermetures)
- [Cartografia dei parcheggi](/it/editors/cartographie/parkings)

::: quote Fonti
- Routing penalties (forum ufficiale Waze): https://www.waze.com/discuss/t/routing-penalties/377968
:::
