---
title: Rotonde e rotatorie
order: 7
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Rotonde e rotatorie

Questa pagina descrive la creazione e la modifica di una rotonda in WME, oltre allo standard svizzero di blocco.

## Principi generali

- La rotonda mantiene sempre il tipo di strada più elevato tra i suoi rami. Eccezione: se un'autostrada inizia in una rotonda in località, adottare il tipo più elevato escludendo l'autostrada, per evitare errori di instradamento.
- Nessun nome di strada: un nome viene visualizzato male nell'applicazione. Spuntare "Senza nome". Se la rotonda porta un nome proprio, creare un Place con nome al suo interno.
- Nessun limite di velocità su una rotonda.
- Diametro massimo di circa 100 m (limite tecnico).

## Ciò che NON è una rotonda

- Un incrocio senza isola centrale.
- Un'intersezione non segnalata.
- Una strada senza uscita che termina ad anello: disegnare un anello piuttosto che una rotonda.
- Un'area molto grande oltre i 100 m.
- Un'intersezione residenziale con chicane.

::: note In caso di dubbio
Consultare il Country Manager (CM) o lo State Manager (SM).
:::

## Creazione passo dopo passo

Prerequisiti: un'intersezione esistente, una mappa di sfondo allineata e il livello dei punti GPS visibile.

1. Spostare il nodo al centro della futura rotonda.
2. Staccare o prolungare i segmenti che si collegheranno.
3. Aggiungere i segmenti mancanti per tutti gli ingressi e le uscite, anche minori.
4. Attivare lo strumento rotonda: passare il cursore sull'icona della curva e scegliere "Rotonda", oppure premere il tasto "o".
5. Posizionare il cursore (croce) al centro, cliccare poi trascinare: appare un cerchio arancione con il suo raggio. Tenere premuto Shift per un ovale. Cliccare una seconda volta per confermare.
6. I segmenti vengono creati in arancione (non salvati) poi passano al rosso. Sono tutti a senso unico e le connessioni sono automaticamente in soft-turns.
7. Convertire i soft-turns in hard-turns con "Q" poi "W" (vedi [Soft e Hard turns](./intersections.md#soft-et-hard-turns)).
8. Nelle proprietà, spuntare "Senza nome". Aggiungere un Place con nome all'interno se la rotonda ha un nome proprio.
9. Salvare, eliminare le vecchie strade interne, poi verificare il risultato.

## Correggere una falsa rotonda

Eliminare tutti i suoi segmenti, prolungare i segmenti da collegare, riallineare il centro con l'aiuto del livello GPS, ridisegnare la rotonda, modificarla poi salvare.

## Modificare una rotonda esistente

Per modificare delle connessioni, eliminare interamente la rotonda e ridisegnarla. L'eliminazione può avvenire solo sull'insieme dei segmenti in una sola volta, mai parzialmente.

## Assegnazione del tipo

Un tipo ben scelto evita le penalità di instradamento. La gerarchia è: federale > nazionale > principale > strada. Le rampe adottano il tipo del segmento collegato. Le strade locali, private e i parcheggi sono strade standard.

Metodo: individuare i due segmenti di tipo più elevato collegati alla rotonda (una strada suddivisa in due sensi unici conta come un solo segmento), poi assegnare alla rotonda il tipo PIÙ BASSO tra i due.

| Rami | Tipo assegnato |
| --- | --- |
| 2 principali + 2 standard | Principale |
| 1 federale + 3 principali + 2 standard | Federale |
| 1 federale + 2 principali + 1 standard | Principale |

## Ingressi e uscite

Gli ingressi e le uscite si collegano come strade semplici, ad angolo retto (90°) con il perimetro della rotonda. Per ingressi e uscite molto distanziati, valutare due segmenti a senso unico.

## Istruzioni di navigazione

Una rotonda è detta "normale" quando ha 4 rami, è centrata e le uscite si situano entro 90° più o meno 30° e 180° più o meno 30° dall'ingresso. In questo caso, l'istruzione è "gira a destra / a sinistra" oppure "prosegui dritto".

Altrimenti, la rotonda è "non-normale" e l'istruzione diventa "prendi la Xa uscita".

::: important Passaggio a non-normale
Una stessa rotonda può essere normale da un ingresso e non-normale da un altro. Se UN solo ingresso la rende non-normale, tutta la rotonda passa a non-normale.
:::

## Standard svizzero: blocco minimo L3

::: important Regola comunitaria svizzera
In Svizzera, il livello di blocco minimo raccomandato per una rotonda è L3.
:::

Questa regola è applicata dalla comunità svizzera e verificata dallo script WME Switzerland Helper, che segnala le rotonde il cui livello di blocco è inferiore a L3. Bloccare una rotonda a L3 protegge una geometria spesso modificata ed evita le modifiche accidentali da parte di editor di basso livello.

::: quote Fonti
- Erstellen und bearbeiten eines Kreisverkehrs: https://www.waze.com/discuss/t/erstellen-und-bearbeiten-eines-kreisverkehrs/377246
- Guida delle intersezioni (Svizzera), sezione "Rond-Point et Giratoire": https://www.waze.com/discuss/t/guide-des-intersections/377286
- Standard di blocco L3: regola comunitaria svizzera, verificata dallo script WME Switzerland Helper.
:::
