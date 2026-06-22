---
title: Rotatorie e rotonde
---

# Rotatorie e rotonde

Questa pagina descrive la creazione e la modifica di una rotatoria in WME, nonché lo standard svizzero di blocco.

## Principi generali

- Una rotatoria conserva sempre il tipo di strada più elevato tra i suoi rami. Eccezione: se un'autostrada inizia in una rotatoria all'interno di una località, prendere il tipo più elevato escludendo l'autostrada, per evitare errori di routing.
- Nessun nome di via: un nome si visualizza male nell'applicazione. Spuntare "Senza nome". Se la rotatoria porta un nome proprio, creare un Place denominato al suo interno.
- Nessun limite di velocità su una rotatoria.
- Diametro massimo di circa 100 m (limite tecnico).

## Ciò che NON è una rotatoria

- Un incrocio senza isola centrale.
- Un incrocio non segnalato.
- Un vicolo cieco che termina in un anello: disegnare un anello piuttosto che una rotatoria.
- Un'area molto grande oltre i 100 m.
- Un incrocio residenziale con chicane.

::: note In caso di dubbio
Consultare il Country Manager (CM) o lo State Manager (SM).
:::

## Creazione passo passo

Prerequisiti: un incrocio esistente, una mappa di sfondo allineata e il livello dei punti GPS visibile.

1. Spostare lo svincolo al centro della futura rotatoria.
2. Staccare o prolungare i segmenti che si collegheranno.
3. Aggiungere i segmenti mancanti per tutte le entrate e le uscite, anche quelle minori.
4. Attivare lo strumento rotatoria: passare sopra l'icona della curva e scegliere "Rotatoria", oppure premere il tasto "o".
5. Posizionare il cursore (croce) al centro, fare clic e trascinare: appare un cerchio arancione con il suo raggio. Tenere premuto Shift per un ovale. Fare clic una seconda volta per confermare.
6. I segmenti sono creati in arancione (non salvati) e poi passano al rosso. Sono tutti a senso unico e le connessioni sono automaticamente in soft-turns.
7. Convertire i soft-turns in hard-turns con "Q" e poi "W" (vedi [Soft e Hard turns](/it/editors/intersections#soft-et-hard-turns)).
8. Nelle proprietà, spuntare "Senza nome". Aggiungere un Place denominato all'interno se la rotatoria ha un nome proprio.
9. Salvare, eliminare le vecchie vie interne, poi verificare il risultato.

## Correggere una falsa rotatoria

Eliminare tutti i suoi segmenti, prolungare i segmenti da collegare, riallineare il centro con l'aiuto del livello GPS, ridisegnare la rotatoria, modificarla e poi salvare.

## Modificare una rotatoria esistente

Per modificare le connessioni, eliminare interamente la rotatoria e ridisegnarla. L'eliminazione può avvenire solo sull'insieme dei segmenti in una sola volta, mai parzialmente.

## Attribuzione del tipo

Un tipo ben scelto evita le penalità di routing. La gerarchia è: federale > nazionale > principale > via. Le rampe prendono il tipo del segmento collegato. Le strade locali, private e i parcheggi sono vie standard.

Metodo: individuare i due segmenti di tipo più elevato collegati alla rotatoria (una via divisa in due sensi unici conta come un solo segmento), poi attribuire alla rotatoria il tipo più BASSO dei due.

| Rami | Tipo attribuito |
| --- | --- |
| 2 principali + 2 standard | Principale |
| 1 federale + 3 principali + 2 standard | Federale |
| 1 federale + 2 principali + 1 standard | Principale |

## Entrate e uscite

Le entrate e le uscite si collegano come vie semplici, ad angolo retto (90°) con il perimetro della rotatoria. Per entrate e uscite molto distanziate, valutare due segmenti a senso unico.

## Istruzioni di navigazione

Una rotatoria si dice "normale" quando ha 4 rami, è centrata e le uscite si trovano entro 90° più o meno 30° e 180° più o meno 30° dall'entrata. In questo caso, l'istruzione è "svolta a destra / a sinistra" oppure "dritto".

Altrimenti, la rotatoria è "non normale" e l'istruzione diventa "prendi la X uscita".

::: important Passaggio a non normale
Una stessa rotatoria può essere normale da un'entrata e non normale da un'altra. Se UNA sola entrata la rende non normale, tutta la rotatoria passa a non normale.
:::

## Standard svizzero: blocco minimo L3

::: important Regola della comunità svizzera
In Svizzera, il livello di blocco minimo raccomandato per una rotatoria è L3.
:::

Questa regola è applicata dalla comunità svizzera e verificata dallo script WME Switzerland Helper, che segnala le rotatorie il cui livello di blocco è inferiore a L3. Bloccare una rotatoria a L3 protegge una geometria spesso modificata ed evita le modifiche accidentali da parte di editor di basso livello.

::: quote Fonti
- Erstellen und bearbeiten eines Kreisverkehrs: https://www.waze.com/discuss/t/erstellen-und-bearbeiten-eines-kreisverkehrs/377246
- Guide des intersections (Svizzera), sezione "Rond-Point et Giratoire": https://www.waze.com/discuss/t/guide-des-intersections/377286
- Standard di blocco L3: regola della comunità svizzera, verificata dallo script WME Switzerland Helper.
:::
