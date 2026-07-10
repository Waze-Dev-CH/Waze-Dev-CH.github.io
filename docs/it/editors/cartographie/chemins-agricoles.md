---
title: Strade agricole e strade attraverso i campi
description: Accordo svizzero sulla cartografia delle Feldwege, strade forestali e strade agricole.
order: 9
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Strade agricole e strade attraverso i campi

::: tip Accessibile a tutti: Livello L1
Queste regole si applicano a tutti gli editor.
:::

::: note Nota
Accordo approvato dalla comunità svizzera (DE: Feldwege, FR: Routes à travers champs / chemins agricoles).
:::

Waze è **prima di tutto un'applicazione per automobilisti**. Non è un GPS fuoristrada, né uno strumento per escursionisti o ciclisti. Le strade pubbliche percorribili restano la priorità principale del mapping.

## Tipi di strade e attributi

| Tipo WME | Penalità | Utilizzo |
|----------|---------|-------|
| **Street (Strada)** | Nessuna | Strada normale, accessibile |
| Street + attributo **Unpaved (Non asfaltata)** | Leggera: l'utente può scegliere di evitarla | Strada sterrata accessibile ai veicoli normali |
| **Private Road (Strada privata)** | Forte: routing impossibile salvo eccezioni | Strada privata vietata al traffico normale |
| **Chemin de terre / 4x4 Trail (Off-road)** | Molto forte: routing impossibile | Pista 4x4, strada impraticabile per auto normali |

::: warning Attributo "Non asfaltata"
L'attributo *Unpaved* è concepito per funzionare **solo su tipi senza penalità di base**.

✅ Utilizzabile su: Street, Primary Street, Minor/Major Highway, Freeway
❌ Inutile su: Parking Lot Road, Private Road, Narrow Street, Off-road
:::

## Casi possibili

### Caso 1: Strada sterrata con segnale di divieto (salvo alcuni veicoli)

Due opzioni accettabili:
1. **Street + Unpaved**: l'utente può decidere tramite le impostazioni dell'app se vuole percorrere questa strada
2. **Off-road / Not maintained**: evita il routing nel 99% dei casi, anche per gli utenti che accettano le strade non asfaltate

### Caso 2: Piccola strada asfaltata con segnale di divieto (salvo alcuni veicoli)

→ **Private Road**

### Caso 3: Piccola strada asfaltata senza segnale di divieto

Due opzioni accettabili:
1. **Street**: gli utenti che hanno il diritto legale di transitare possono esservi instradati
2. **Narrow Street** (Strada stretta): preferita per i passaggi a corsia unica, permette maggiore flessibilità nel routing

::: note A proposito dell'attributo Unpaved
L'attributo Unpaved si aggiunge a qualsiasi Street e aggiunge una penalità che l'utente può scegliere di evitare o meno. Applicato a un segmento che porta già una penalità di tipo (Private Road, Off-road), non ha alcun effetto.
:::

::: quote Fonti
- Waze Discuss, Field Roads / Feldwege / Routes à travers champs (2017): https://www.waze.com/discuss/t/field-roads-feldwege-routes-a-travers-champs-new-2017/64680
:::
