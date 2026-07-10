---
title: Tempi di aggiornamento della mappa
description: Capire quando le modifiche apportate nel WME diventano visibili nell'applicazione e sul server di routing.
order: 12
---

<img class="banner-img is-narrow" src="/img/editors/clocks.png" alt="">

# Tempi di aggiornamento della mappa

::: tip Accessibile a tutti : Livello L1
Capire questi tempi evita di rimodificare segmenti già corretti.
:::

Waze aggiorna diversi componenti a frequenze diverse. Le modifiche nel WME **non sono immediatamente visibili** ovunque.

## Tabella dei tempi

| Elemento | Tempo di applicazione |
|---------|-------------------|
| Aggiornamenti della mappa (navigazione) | **~1 giorno** sul server di routing |
| Segnalazioni di traffico (incidenti, velocità) | **Tempo reale** nell'applicazione |
| Nuove strade | **da 2 a 5 giorni** nell'app e sulla Live Map |
| Nuove strade sul server di routing | 1 giorno aggiuntivo dopo la comparsa nell'app |
| Diritti di modifica non-AM (dopo il tragitto) | Disponibili entro **2 giorni** |
| Nomi di città / confini | Alcuni giorni |
| Punti (punteggio) | Aggiornati **una volta al giorno** lato server |

## Dettaglio dei processi

### Aggiornamenti della mappa

Waze punta ad aggiornamenti **giornalieri** : lo stato attuale della mappa viene copiato, convertito per la navigazione e inviato ai server di routing. Il processo richiede poco meno di 24 ore. In condizioni ottimali, una modifica è visibile sul server di routing **il giorno successivo**.

### Nuove strade

Dopo la modifica e l'aggiornamento della mappa, una nuova strada compare nell'applicazione e sulla Live Map entro **2 a 5 giorni**. Il server di routing può richiedere un giorno aggiuntivo per elaborare correttamente la strada nel calcolo del percorso.

### Diritti di modifica (non Area Managers)

Gli editor senza status AM possono modificare le strade entro un raggio di **1,6 km** dalle strade che hanno percorso. Questi diritti diventano disponibili entro **2 giorni** dopo il tragitto registrato.

### Punti e punteggio

L'applicazione mostra i punti in tempo reale, ma il server li consolida **una volta al giorno**. Può quindi esserci uno scarto temporaneo tra la visualizzazione nell'app e la dashboard.

::: note Nota
Se una modifica non compare dopo il tempo indicato, verifica che il salvataggio nel WME sia effettivamente avvenuto prima di rimodificare il segmento.
:::
