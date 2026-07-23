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

Una strada privata (Private Road), un parcheggio (Parking Lot Road) o un sentiero non mantenuto applicano la loro penalità alla transizione in uscita verso un altro tipo di strada, non all'ingresso. Consultare [Cartografia dei parcheggi](/it/editors/cartographie/parkings).

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

## Restrizioni assolute

Al contrario delle penalità, determinate situazioni vietano completamente il passaggio senza eccezioni:

- **Chiusura di strada**: consultare [Chiusure di strade](/it/editors/wme/fermetures)
- **Svolta ristretta « dura »** (freccia rossa senza punto interrogativo): divieto assoluto. Storicamente, era una penalità, ma questo comportamento è evoluto.
- **Restrizioni orarie** di svolta o segmento: in base alle loro condizioni
- **Senso vietato** su una strada a senso unico
- **Tipi non carrabili**: linea ferroviaria (Railroad), pista di atterraggio (Runway), percorsi pedonali
- **Segmento scollegato** dalla rete

::: important Importante
Da quando le restrizioni di svolta « dura » sono diventate assolute, è inutile e dannoso disconnettere o eliminare segmenti per impedire l'instradamento. Preferire configurare una restrizione di svolta o una chiusura se necessario.
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
