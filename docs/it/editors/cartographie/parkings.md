---
title: Cartografia dei parcheggi
description: Linee guida ufficiali per mappare i parcheggi e le aree di sosta in Waze in Svizzera.
order: 8
---

<img class="banner-img is-narrow" src="/img/editors/location.png" alt="">

# Cartografia dei parcheggi

::: tip Accessibile a tutti: Livello L1
Queste regole si applicano a tutti gli editor.
:::

I parcheggi svolgono un ruolo chiave nel progetto Waze Parking, che mira a offrire un'esperienza di navigazione completa fino al posto auto. Una mappatura corretta nel WME è necessaria affinché questa funzionalità funzioni. L'obiettivo resta quello di mantenere la mappa leggibile e utile alla navigazione automobilistica, non di riprodurre ogni singolo posto.

## Principio generale

Queste linee guida si applicano a **tutti i parcheggi** (pubblici e privati), ma **non** ai posti di sosta su strada.

Un parcheggio si cartografa sotto due aspetti complementari:

- un **luogo (Place) a forma di poligono** che lo materializza sulla mappa e permette l'instradamento fino ad esso;
- eventualmente delle **corsie interne (Parking Lot Road)** quando la circolazione all'interno giustifica di essere tracciata.

## Il luogo del parcheggio (poligono)

Ogni parcheggio deve essere creato come **luogo a forma di poligono** (Place di tipo poligono) con un punto di ingresso posizionato all'ingresso reale del parcheggio.

### Creare un parcheggio nel WME

1. Passare il mouse sul pulsante **Aggiungi un luogo**
2. Selezionare **Servizi automobilistici** → scegliere l'opzione **Poligono**
3. Cliccare per creare i nodi del poligono: fare doppio clic sull'ultimo punto per terminare
4. Posizionare il marcatore di ingresso all'**ingresso reale** del parcheggio
5. Selezionare **Parking Lot** nel menu Categorie
6. Salvare

Il poligono deve corrispondere al meglio alla forma reale del parcheggio, includendo le zone di entrata/uscita.

Denominazione del luogo (regole della Svizzera romanda):

- utilizzare la categoria Parking Lot, non Park
- riprendere il nome esatto del parcheggio se esiste, con il simbolo P
- evitare i termini generici come "Parcheggio" o le abbreviazioni

## Le corsie interne (Parking Lot Road)

Quando la circolazione interna merita di essere tracciata, si disegnano solo i segmenti che apportano un beneficio alla navigazione.

Da cartografare:

- gli ingressi e le uscite, collegati alla rete stradale vicina
- le corsie perimetrali (il giro del parcheggio), per evitare un falso rilevamento di congestione
- le corsie di circolazione principali nelle grandi strutture
- le corsie che costeggiano gli edifici commerciali

Da non cartografare:

- i singoli posti di sosta
- i corridoi secondari tra le file di posti

::: important Importante
Moltiplicare i corridoi secondari sovraccarica la visualizzazione su smartphone e appesantisce l'applicazione senza beneficio per la navigazione. Ci si limita alla circolazione principale. Le corsie interne utilizzano il tipo Parking Lot Road, e gli ingressi/uscite devono essere correttamente collegati alla rete stradale per permettere l'instradamento fino al parcheggio.
:::

## Casi particolari

### Parcheggio in una zona commerciale o in un'infrastruttura

Creare **due luoghi separati**: uno per il complesso/edificio, uno per il suo parcheggio. Non modificare il luogo esistente per aggiungervi la categoria parcheggio.

### Parcheggio sotterraneo

- Creare un poligono attorno al perimetro stimato (basato sulla conoscenza locale)
- Posizionare con precisione il o i punti di ingresso
- Se un luogo esistente si trova in questa posizione, creare un poligono separato piuttosto che aggiungere la categoria al luogo esistente

## Punti importanti

::: important Importante
Il punto di ingresso deve essere posizionato al vero ingresso fisico del parcheggio, non al centro del poligono. È questo punto che viene utilizzato per l'instradamento finale.
:::

::: note Nota
I parcheggi su strada (sosta lungo i marciapiedi) **non sono interessati** da queste linee guida: si cartografano in modo diverso.
:::

::: quote Fonti
- Waze Discuss, Parking Lots, new mapping guidelines (2016): https://www.waze.com/discuss/t/parking-lots-new-mapping-guidelines-2016/232237
- Waze Discuss, Règles d'édition en Suisse romande: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
:::
