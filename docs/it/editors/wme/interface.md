---
title: Interfaccia del WME
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Interfaccia del WME

Il Waze Map Editor (WME) è accessibile su [waze.com/editor](https://www.waze.com/editor). È composto da tre aree principali.

## Pannello sinistro

Il pannello sinistro consente di passare da una scheda all'altra tra tre schede:

- **Segments**: elenco dei segmenti selezionati e delle loro proprietà
- **Luoghi**: punti di interesse (POI) nell'area visibile
- **Update Requests (URs)**: segnalazioni degli utenti da trattare

## Pannello delle proprietà

Quando un segmento o un luogo è selezionato, la barra laterale sinistra passa al pannello delle proprietà e mostra i suoi attributi modificabili: tipo, nome, senso di circolazione, velocità, restrizioni, ecc. Le schede aggiunte dagli script sono temporaneamente nascoste.

## Barra degli strumenti superiore

| Strumento | Scorciatoia | Utilizzo |
|-------|-----------|-------|
| Selezione | <kbd>S</kbd> o <kbd>Esc</kbd> | Selezionare elementi esistenti |
| Disegno di segmento | <kbd>I</kbd> | Tracciare un nuovo segmento |
| Restrizione di svolta | <kbd>T</kbd> | Impostare una restrizione temporale |
| Aggiungere un luogo | <kbd>P</kbd> | Creare un punto di interesse |
| Annullare | <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Annullare l'ultima azione |
| Salvare | <kbd>Ctrl</kbd>+<kbd>S</kbd> | Salvare le modifiche |

## Livelli (Layers)

Il menu dei livelli (icona in alto a destra) consente di attivare/disattivare:

- **Satellitare**: sfondo cartografico aereo per verificare la geometria
- **GPS tracks**: tracce GPS dei conducenti Waze
- **Map Problems**: problemi rilevati automaticamente
- **Update Requests**: segnalazioni degli utenti sulla mappa
- **Editor**: aree di modifica degli altri editor connessi

## Zoom e navigazione

- Zoom: rotellina del mouse o <kbd>+</kbd>/<kbd>-</kbd>
- Spostamento: clic destro tenuto premuto + trascinamento (o trackpad)
- Centrare sulla tua posizione: icona GPS nella barra superiore

::: note Nota
Le modifiche sono visibili agli utenti Waze solo dopo un ritardo di aggiornamento. Vedi [Tempi di aggiornamento](/it/editors/wme/delais-mise-a-jour).
:::
