---
title: Parcheggi e aree di sosta
---

# Parcheggi e aree di sosta

I parcheggi e le aree di sosta si cartografano con le Parking Lot Road. L'obiettivo è mantenere la mappa leggibile e utile alla navigazione automobilistica, non riprodurre ogni singolo posto.

## Principio: cartografare solo l'essenziale

In un parcheggio si tracciano solo i segmenti che apportano un beneficio di navigazione.

Da cartografare:

- le entrate e le uscite, collegate alla rete stradale vicina
- le corsie perimetrali (il giro del parcheggio), per evitare un falso rilevamento di congestione
- le corsie di circolazione principali nelle grandi strutture
- le corsie che costeggiano gli edifici commerciali

Da non cartografare:

- i singoli posti auto
- i corridoi secondari tra le file di posti

::: important Importante
Moltiplicare i corridoi secondari sovraccarica la visualizzazione sullo smartphone e appesantisce l'applicazione senza beneficio per la navigazione. Si resta sulla circolazione principale.
:::

## Tipo di segmento

Le corsie interne del parcheggio usano il tipo Parking Lot Road. Le entrate e le uscite devono essere correttamente collegate alla rete stradale per consentire il routing fino al parcheggio.

## Luogo (POI) del parcheggio

Quando il parcheggio giustifica un luogo, lo si aggiunge come Place distinto.

::: note Nota
La direttiva Waze del 2016 raccomanda di cartografare un parcheggio come un Place di forma areale (poligono) con un punto di entrata nella posizione reale di accesso. Un parcheggio collegato a un'attività commerciale si cartografa come un luogo a sé stante, senza modificare il luogo di origine.
:::

Denominazione del luogo (regole della Suisse romande):

- usare la categoria Parking Lot, non Park
- riprendere il nome esatto del parcheggio se esiste, con il simbolo P
- evitare i termini generici come "Parking" o le abbreviazioni

## Casi particolari

::: example Parcheggio sotterraneo
Tracciare un poligono stimato con uno o più punti di entrata correttamente posizionati.
:::

::: quote Fonti
- Waze Discuss, Parking Lots, new mapping guidelines (2016): https://www.waze.com/discuss/t/parking-lots-new-mapping-guidelines-2016/232237
- Waze Discuss, Regole di editing nella Suisse romande: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
:::
