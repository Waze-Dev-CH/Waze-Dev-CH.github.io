---
title: Fermate dei trasporti pubblici
description: Creare, unire e ripulire i luoghi di fermata a partire dai dati ufficiali delle SBB.
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/location.png" alt="">

# Fermate dei trasporti pubblici

Il livello **Fermate dei trasporti pubblici** mostra le fermate ufficiali delle SBB. Serve a
creare quelle che mancano in Waze e a individuare quelle che non esistono più.

::: important Il livello mostra solo ciò che richiede un intervento
Una fermata già mappata nelle vicinanze, con lo stesso nome, viene nascosta. Se la mappa
appare vuota in una stazione ben curata, è normale : non c'è nulla da fare.
:::

## Leggere la mappa

| Simbolo | Significato | Che cosa farne |
| --- | --- | --- |
| Pastiglia **arancione** | Fermata ufficiale assente da Waze | Crearla, oppure unirla a un luogo vicino |
| Pastiglia **rossa** | Luogo Waze senza fermata ufficiale corrispondente | Verificare, poi eliminare se è davvero sparita |
| Pastiglia con un **numero** | Un gruppo di fermate, quando lo zoom è basso | Cliccare per ingrandire su di esso |

## Creare o unire una fermata

Clicca su una pastiglia arancione.

::: reminder Occorre essere abbastanza ingranditi
Se non lo sei a sufficienza, lo script si limita a ricentrare e a ingrandire sulla fermata.
Clicca una seconda volta sulla pastiglia per aprire il dialogo.
:::

Lo script controlla allora se esiste già un luogo di trasporto nelle vicinanze :

- **Nessun luogo vicino** : crea il luogo direttamente, con il suo nome ufficiale e la sua categoria.
- **Un luogo esistente** : un dialogo propone **Unisci**, **Unisci e aggiorna coordinate**,
  **Salva nuovo** o **Annulla**.
- **Più luoghi candidati** : chiede prima quale scegliere.

**Unisci** applica le informazioni ufficiali al luogo esistente senza crearne uno nuovo. È
quasi sempre la scelta giusta quando la fermata c'è già ma è denominata male.

Il luogo viene poi selezionato nell'editor perché tu possa rileggerlo, con la sua città già
compilata. La pastiglia arancione sparisce.

## Che cosa fa lo script al nome

I nomi grezzi delle SBB non sono utilizzabili tali e quali. Lo script li ripulisce prima di
proporli : toglie il nome della località quando ripete già la città, scarta le indicazioni
tra parentesi, scioglie le abbreviazioni (`Rte` diventa `Route`) e mette le altre grafie tra
i nomi alternativi.

## Eliminare una fermata obsoleta

Un clic su una pastiglia rossa propone l'eliminazione del luogo.

::: important Verifica prima di eliminare
Una fermata può sparire per buone ragioni (linea soppressa, fermata spostata), ma anche
perché il luogo Waze porta un nome troppo lontano dal nome ufficiale. In questo secondo caso
occorre correggere il nome, non eliminare il luogo.

I porti e i posti d'ormeggio non vengono mai segnalati come obsoleti.
:::

Un **pulsante a forma di autobus** viene aggiunto in cima alla mappa : ricarica le fermate
senza spostare la vista, il che è comodo dopo averne trattate parecchie.

::: quote Fonti
- Repository dello script: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Dati delle fermate: SBB, https://data.sbb.ch
:::
