---
title: Livelli cartografici
description: I cinque sfondi cartografici svizzeri aggiunti al WME dallo Switzerland Helper.
order: 1
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Livelli cartografici

L'Helper aggiunge cinque sfondi cartografici ufficiali svizzeri al selettore dei livelli del
WME, in fondo alla barra di destra.

## I cinque livelli

| Casella di spunta | Che cosa mostra |
| --- | --- |
| **Limiti comunali** | La suddivisione dei comuni |
| **Frontiere cantonali** | La suddivisione dei cantoni |
| **Nomi geografici swissNAMES3D** | I toponimi ufficiali: località, cime, corsi d'acqua |
| **Carte nazionali (colori)** | La carta nazionale svizzera, lo sfondo topografico classico |
| **SWISSIMAGE Sfondo** | Le immagini aeree federali, in alta risoluzione |

Se ne possono attivare più d'uno alla volta, e le caselle spuntate si ritrovano tali e quali
al ricaricamento dell'editor. Questi sfondi si disegnano sempre **sotto i segmenti e i
luoghi** : non nascondono mai ciò che stai modificando.

## Quando usare quale

- **SWISSIMAGE Sfondo** è lo sfondo di lavoro più utile nel quotidiano : molto più nitido
  delle immagini predefinite del WME sulla Svizzera, rende il tracciamento delle geometrie
  molto più affidabile.
- **Carte nazionali (colori)** aiuta là dove la foto aerea è ambigua : bosco fitto, montagna,
  sentiero sotto gli alberi.
- **Nomi geografici swissNAMES3D** serve a verificare l'ortografia di una località prima di
  inserirla.
- **Limiti comunali** e **Frontiere cantonali** servono a verificare la città attribuita a un
  segmento, in particolare quando una strada cambia comune lungo il percorso.

::: help Sapere a quando risale la foto aerea
Le immagini non vengono rinnovate ovunque nello stesso momento : una fotografia vecchia può
non mostrare una lottizzazione o una rotatoria recente. La scheda **WME Svizzera Helper**
contiene un link a una mappa che indica, regione per regione, l'anno della ripresa.
:::

## Se un livello non appare

- Verifica che la casella sia spuntata, proprio in fondo al selettore dei livelli.
- Questi sfondi coprono solo la **Svizzera** : fuori dai confini non c'è nulla da mostrare.
- I livelli dei confini sono poco leggibili da molto lontano. Ingrandisci se la resa appare
  uniforme.

::: quote Fonti
- Repository dello script: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Carte e immagini: swisstopo, https://www.geo.admin.ch
:::
