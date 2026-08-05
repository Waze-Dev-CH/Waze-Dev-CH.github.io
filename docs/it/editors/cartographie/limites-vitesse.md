---
title: Limiti di velocità
description: "Inserire i limiti di velocità in Svizzera nel WME: limiti generali dell'ONC, zone 30 e zone d'incontro, e ciò che non si inserisce."
order: 5
---

<img class="banner-img is-narrow" src="/img/editors/moto.png" alt="">

# Limiti di velocità

Questa pagina tratta l'inserimento dei limiti di velocità sui segmenti in Svizzera: la
regola di inserimento, i limiti generali fissati dal diritto federale, le zone 30 e le
zone d'incontro, e i casi in cui il campo resta vuoto.

## Principio generale

Il limite inserito su un segmento è quello che **si applica legalmente** al tratto.

- **Quando un limite è segnalato**, il segnale fa fede. Si inserisce il suo valore.
- **In assenza di segnale**, si inserisce il **limite generale** corrispondente al tipo di
  strada. Si applica di diritto, senza che sia necessaria alcuna segnaletica.

::: important Da non confondere con la velocità praticata
Il limite di velocità è un valore normativo, non un'osservazione. Non si deduce né dalla
velocità a cui si viaggia, né dai dati di traffico trasmessi dall'applicazione.
:::

## I limiti generali in Svizzera

L'ordinanza sulle norme della circolazione stradale fissa quattro limiti generali.

| Tipo di strada | Limite generale |
| --- | --- |
| Nelle località | **50 km/h** |
| Fuori delle località | **80 km/h** |
| Semiautostrade | **100 km/h** |
| Autostrade | **120 km/h** |

::: note I 50 km/h si applicano talvolta senza segnale
Il limite di 50 km/h vale in tutta la zona edificata in modo compatto. Per chi entra in
una località da una **strada secondaria poco importante** (strada agricola di servizio,
strada forestale, strada che non collega direttamente due località), si applica **anche in
assenza di segnaletica**, non appena esiste una zona edificata in modo compatto.

È il caso tipico in cui si inserisce 50 senza aver visto un segnale sull'immagine
satellitare.
:::

Il passaggio a 80 km/h si legge sul terreno al segnale «Fine della velocità massima 50,
Limite generale», oppure uscendo da una semiautostrada o da un'autostrada.

<div class="media-row">
<img src="/img/panneaux/osr-2-30-1-limite-generale-50-it.svg" alt="Segnale 2.30.1, velocità massima 50, limite generale" width="120">
<img src="/img/panneaux/osr-2-53-1-fin-limite-generale-50-it.svg" alt="Segnale 2.53.1, fine della velocità massima 50, limite generale" width="120">
</div>

## Inserire una velocità nel WME

Il campo **Velocità** si trova nel pannello laterale, che appare non appena si seleziona
un segmento. Accetta la **selezione multipla**: scegliendo più segmenti di uno stesso
tratto, si inserisce lo stesso valore in una sola volta.

Il valore è in **km/h**. Un normale segnale di limitazione, come questo, si inserisce così
com'è.

<div class="media-row">
<img src="/img/panneaux/osr-2-30-vitesse-maximale.svg" alt="Segnale 2.30, velocità massima segnalata" width="120">
</div>

Per il dettaglio delle altre proprietà del segmento, vedi
[Segmenti](/it/editors/wme/segments).

## Zone 30 e zone d'incontro

Due regimi di zona riguardano direttamente l'inserimento.

| Zona | Limite | Segnale |
| --- | --- | --- |
| **Zona 30** | 30 km/h | 2.59.1 |
| **Zona d'incontro** | 20 km/h | 2.59.5 |

<div class="media-row">
<img src="/img/panneaux/osr-2-59-1-zone-30-it.svg" alt="Segnale 2.59.1, Zona 30" width="110">
<img src="/img/panneaux/osr-2-59-5-zone-de-rencontre-it.svg" alt="Segnale 2.59.5, Zona d'incontro, 20 km/h" width="110">
</div>

In una zona d'incontro, i pedoni possono utilizzare tutta l'area di circolazione e hanno
la precedenza. Questi due segnali sono ammessi solo su **strade secondarie**, non
destinate alla circolazione generale: incontrarne uno su un asse principale deve far
dubitare della lettura dell'immagine satellitare.

Il limite di zona si applica a tutti i segmenti compresi nel perimetro, fino al segnale di
fine.

## Ciò che non si inserisce

- **Le rotonde.** Una rotonda non riceve alcun limite di velocità. Vedi
  [Rotatorie](/it/editors/cartographie/ronds-points).
- **Le velocità consigliate.** Un segnale di raccomandazione non è un limite.
- **I valori rilevati sul terreno** che non corrispondono ad alcuna segnaletica né ad
  alcun limite generale.

## Quando la segnaletica cambia

Le modifiche dei limiti vengono segnalate regolarmente sul forum svizzero, ad esempio una
modifica segnalata sulla Schartenstrasse a Wettingen. Prima di aggiornare un segmento,
verificare la nuova segnaletica e privilegiare una fonte datata: decreto comunale o
cantonale, pubblicazione ufficiale, immagine satellitare recente.

::: quote Fonti
- ONC (RS 741.11), art. 4a, limitazioni generali della velocità: https://www.fedlex.admin.ch/eli/cc/1962/1364_1409_1420/it
- OSStr (RS 741.21), art. 22a e 22b, zona 30 e zona d'incontro: https://www.fedlex.admin.ch/eli/cc/1979/1961_1961_1961/it
- Segnali: segnali dell'OSStr, Ufficio federale delle strade (USTRA), dominio pubblico, via https://commons.wikimedia.org/wiki/Category:SVG_road_signs_in_Switzerland
- Forum Svizzero (casi di modifiche di velocità): https://www.waze.com/discuss/c/editors/switzerland/4790
:::
