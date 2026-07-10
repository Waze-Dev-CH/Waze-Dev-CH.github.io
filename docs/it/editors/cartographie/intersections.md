---
title: Guida agli incroci
order: 6
---

<img class="banner-img is-narrow" src="/img/editors/map-city.png" alt="">

# Guida agli incroci

Questa pagina sintetizza la guida svizzera agli incroci. Il principio guida è semplice: un incrocio disegnato bene produce istruzioni di guida corrette. Un incrocio deve rappresentare la realtà logica della circolazione, non solo la sua geometria esatta.

::: abstract Sintesi
Più è semplice, meglio è. Si disegna il minor numero possibile di elementi ottenendo comunque le istruzioni di navigazione corrette.
:::

## Più è semplice, meglio è

La regola di base della guida: non sovraccaricare un incrocio. Si aggiungono segmenti, nodi o geometria solo quando è necessario per ottenere l'istruzione di guida attesa. Un incrocio più semplice è più facile da mantenere e genera un instradamento più affidabile.

## Le basi

::: reminder Da leggere per primo
Questa sezione pone le fondamenta. Comprenderla prima di tutto il resto.
:::

### Un incrocio in Waze

In Waze, un incrocio è composto come minimo da:

- almeno due segmenti di strada,
- uno o più nodi di giunzione,
- autorizzazioni o divieti di svolta a questi nodi.

Sono questi elementi combinati a determinare i movimenti possibili e le istruzioni date al conducente.

### Incrocio a T

Un incrocio a T collega una strada che termina su un'altra strada. I segmenti devono ricongiungersi secondo angoli prossimi ai 90°. Quando le strade si ricongiungono con un angolo acuto, aggiungere punti di geometria per raddrizzare l'incrocio verso i 90°. Senza questo, il router può produrre uno "tieni la destra / tieni la sinistra" invece di uno "svolta", omettere un'istruzione o generare errori di mappa automatici.

### Incrocio a +

Un incrocio a + (a croce) collega quattro rami in un nodo. Come per l'incrocio a T, puntare ad angoli prossimi ai 90° aiuta il router a distinguere "dritto" dalle svolte. Lavorare a forte zoom: le correzioni d'angolo diventano quasi invisibili allo zoom normale.

## Controllare le istruzioni di guida

L'angolo di svolta determina l'istruzione data al conducente.

| Angolo | Intervallo | Tipo di strada | Istruzione |
| --- | --- | --- | --- |
| 22° | Da 0° a 44° | Strade ordinarie | Tieni la sinistra / la destra |
| 22° | Da 0° a 44° | Rampe / autostrade | Esci a sinistra / a destra |
| 90° | Da 45° a 150° | Tutti i tipi | Svolta a sinistra / a destra |

::: important Angoli da evitare
- Intorno ai 45°: un errore di 0,5° può bastare a innescare l'istruzione sbagliata.
- Al di sotto dei 10°: le frecce diventano difficili da selezionare nell'editor e i segmenti difficili da toccare nell'applicazione.
:::

### Denominazione dei segmenti interni

I segmenti situati all'interno di un incrocio restano senza nome, salvo se tutte le direzioni possibili riceverebbero comunque un'istruzione corretta. Nominare un segmento interno è accettabile solo se nessuna direzione (inversione di marcia inclusa) può produrre un errore di instradamento.

## Tra corsie

### Biforcazione a Y

Il server di instradamento considera che due segmenti con lo stesso nome collegati con un angolo di circa 0° rappresentino un percorso "dritto".

Esempio: un viale che prosegue dritto mentre una via si distacca.

- I due segmenti del viale (prima e dopo): stesso nome, angolo di circa 0° all'incrocio.
- La via che si distacca: angolo di 90° rispetto al viale.
- Risultato: il router identifica correttamente la svolta verso la via.

### Strade senza uscita

- Un vicolo cieco si rappresenta con un segmento semplice, senza collegamento alla sua estremità, con un nodo di giunzione al capolinea, posizionato dove il conducente può fisicamente raggiungerlo. Non estenderlo fino al bordo assoluto.
- Un cul-de-sac circolare si traccia in generale come un vicolo cieco standard, con il nodo posizionato vicino al centro dell'anello per restare accessibile qualunque sia il senso di arrivo.
- Eccezione: se una piccola isola occupa il centro, posizionare il segmento sul bordo esterno dell'anello affinché l'estremità resti accessibile.

### Anelli

Un segmento non può collegarsi a sé stesso tramite un solo nodo. Un anello deve essere interrotto da un nodo aggiuntivo, oppure disegnato con due segmenti. In pratica, creare un incrocio a 3 rami all'incirca a metà percorso dell'anello affinché l'instradamento funzioni.

### Strade sfalsate

Quando due strade si incrociano quasi senza essere perfettamente allineate:

1. Vero incrocio a 4 rami: convertirlo in un vero incrocio a 4 rami.
2. Quasi-allineamento: sfalsare leggermente le strade fuori asse e aggiungere punti di geometria per ottenere angoli di 90° al nodo.
3. Approcci realmente distinti: mantenere giunzioni separate con una guida "svolta a sinistra" poi "svolta a destra".

::: important Segmenti molto corti
Un segmento molto corto tra due approcci sfalsati innesca errori di mappa automatici e ricalcoli d'itinerario. Massimizzare la distanza tra i punti di approccio.
:::

### Rotatorie e rotonde

La guida rimanda a una pagina dedicata per le rotatorie e le rotonde.

::: note Nota
Vedere la pagina dedicata: [Rotatorie e rotonde](./ronds-points.md).
:::

### Nodi di transizione

I nodi di transizione sono giunzioni invisibili lato applicazione. Servono per i cambi di nome della via, i limiti di località, i cambi di direzione e i componenti di anello. Eliminarli solo essendo certi che non siano più utilizzati: semplificano la mappa e riducono i fattori di instradamento inutili.

### Incrocio a nodo papillon (bowtie)

L'incrocio a nodo papillon semplifica l'intersezione tra una strada a carreggiate separate e una strada a corsia unica riducendo l'incrocio a un solo punto logico. Questa costruzione migliora il controllo delle inversioni di marcia in questo punto, senza dipendere dalla lunghezza dei segmenti.

## Soft e Hard turns

Le connessioni generate automaticamente da WME sono soft-turns (punto interrogativo viola); le decisioni manuali dell'editor sono hard-turns. Esistono quattro stati, dal più penalizzante al meno penalizzante: hard vietato (freccia rossa), soft vietato (punto interrogativo viola), soft autorizzato (freccia verde), hard autorizzato (freccia verde confermata).

::: example Esempio
Verificare per prima cosa le direzioni, poi "Q" per vietare tutte le svolte, poi "W" per autorizzarle tutte, e infine passare in hard vietato solo le svolte realmente vietate.
:::

## Rampe

Le rampe servono a collegare segmenti di tipo Highway o Freeway a livello di svincoli a livelli separati (incroci a quote separate).

Sul piano del tracciato, il principio "più è semplice, meglio è" si applica: un solo segmento di rampa basta in generale, con una sola giunzione se le distanze sono ridotte. Una suddivisione in più segmenti si giustifica solo se le estremità sono nettamente distanziate. Mantenere un angolo di partenza di 20-30° per produrre l'istruzione "Esci".

## Incroci Highway e Freeway

### Uscite

Le rampe di uscita devono divergere dalla strada principale secondo un angolo di 20-30°. Questo angolo produce l'istruzione "Esci a destra". I segmenti prima e dopo la giunzione restano di tipo Highway o Freeway, con lo stesso nome, a un angolo di circa 0°; la rampa è di tipo Ramp.

### Suddivisione Highway / Freeway

Quando tre segmenti Highway si ricongiungono senza un "dritto" evidente, nomi differenti e angoli di 20-30° producono un'istruzione "Tieni la destra" o "Tieni la sinistra" con il nome del ramo.

### Segmenti di guida

I segmenti di guida devono misurare 15-20 metri di lunghezza. Servono ad avvisare il conducente in caso di riduzione delle corsie, di segnaletica incoerente o di instradamento non evidente (per esempio uscire a sinistra poi rientrare a destra). I tre segmenti interessati devono portare nomi distinti, e i due segmenti che li racchiudono essere di tipo identico.

### Suddivisione di rampa

La fonte descrive anche la suddivisione di una rampa. Lo stesso principio di angoli e denominazione si applica per ottenere l'istruzione attesa.

## Ponti e tunnel

Le strade che si sovrappongono senza incrociarsi realmente (ponti, sottopassi superiori, sottopassi inferiori, tunnel) devono essere separate mediante livelli di elevazione del segmento.

- Per impostazione predefinita, ogni segmento è al livello 0.
- La funzione ponte (bridge) attribuisce al segmento superiore un livello di un'unità al di sopra del più alto dei due segmenti selezionati.
- Un tunnel riceve il livello -1, affinché Waze lo riconosca come tunnel ed escluda gli errori di mappa automatici.

::: important Condizioni della funzione ponte
La funzione ponte agisce su due segmenti alla volta ed esige proprietà concordanti: paese, cantone, località e nome della via. Non funziona se un segmento non ha un senso di circolazione definito ("Sconosciuto"). Il tipo di strada e il blocco non hanno alcuna incidenza.
:::

Dopo l'applicazione, correggere manualmente i livelli ottenuti ed eliminare i punti di geometria diventati inutili là dove esisteva in precedenza un incrocio.

## Svincoli

Per gli svincoli, la guida rimanda a una risorsa esterna dedicata.

::: note Limited Access Interchange Style Guide
Il dettaglio degli svincoli non è riprodotto qui. Fare riferimento al "Limited Access Interchange Style Guide" indicato nella fonte.
:::

::: quote Fonti
- Kreuzungen: https://www.waze.com/discuss/t/kreuzungen/377258
- Guida agli incroci (Svizzera): https://www.waze.com/discuss/t/guide-des-intersections/377286
- Unterführungen und Brücken: https://www.waze.com/discuss/t/unterfuhrungen-und-brucken/377274
- Soft und Hard Turns: https://www.waze.com/discuss/t/soft-und-hard-turns/377271
:::
