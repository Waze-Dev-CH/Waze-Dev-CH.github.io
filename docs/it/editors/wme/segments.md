---
title: Segmenti
order: 5
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Segmenti

Un segmento è l'unità di base della mappa Waze: è un tratto di strada tra due incroci. Ogni strada è composta da uno o più segmenti.

## Creare un segmento{#creer-un-segment}

1. Premere <kbd>I</kbd> (oppure fare clic sullo strumento matita nella barra superiore)
2. Fare clic sulla mappa per posizionare il primo punto
3. Fare clic per aggiungere punti di geometria intermedi
4. Fare doppio clic per terminare il segmento
5. Premere <kbd>Ctrl</kbd>+<kbd>S</kbd> per salvare

::: important Importante
Ogni nuovo segmento deve essere collegato alla mappa esistente. Un segmento isolato (non connesso ad altri) non sarà instradabile.
:::

## Proprietà di un segmento

Selezionare un segmento per visualizzarne le proprietà nel pannello di sinistra:

| Proprietà | Descrizione |
|-----------|-------------|
| **Tipo** | Classificazione stradale (Freeway, Primary Street, Street…): influenza il routing. Vedi [Basi del routing](/it/editors/wme/routing) |
| **Nome** | Nome ufficiale della via, senza abbreviazioni. Vedi [Denominazione delle strade](/it/editors/cartographie/nommage-routes) |
| **Città** | Località ufficiale (codice postale richiesto). Vedi [Denominazione delle strade](/it/editors/cartographie/nommage-routes) |
| **Senso** | Bidirezionale, senso unico A→B, senso unico B→A |
| **Velocità** | Limite di velocità. Vedi [Limiti di velocità](/it/editors/cartographie/limites-vitesse) |
| **Livello** | Elevazione del segmento (0 = suolo, +1 = ponte, -1 = tunnel) |
| **Blocco** | Livello minimo per modificare questo segmento |

## Modificare la geometria

- Selezionare un segmento, poi trascinare i **punti bianchi** per regolare la forma
- Fare clic su un punto bianco + tasto <kbd>D</kbd> per eliminarlo
- Fare clic sulla linea tra due punti per inserire un nuovo punto

## Connettere i segmenti (incroci)

Per collegare due segmenti, il punto finale di uno deve coincidere esattamente con un punto dell'altro. Il WME visualizza un punto blu o rosso sugli incroci.

- **Punto blu** = incrocio valido
- **Punto rosso** = incrocio incompleto o problematico

## Eliminare un segmento{#supprimer-un-segment}

Selezionare il segmento, poi premere <kbd>Delete</kbd>. Confermare l'eliminazione. Anche gli incroci orfani devono essere eliminati.

::: important Importante
Non eliminare mai un segmento esistente senza un motivo valido: contiene preziosi dati di velocità e di storico del routing. Vedi [Regole di modifica](/it/editors/cartographie/regles-edition).
:::


## Tagliare un segmento

Per tagliare un segmento in due, basta [creare un segmento](#creer-un-segment) perpendicolare al segmento che si vuole tagliare, agganciarlo al segmento nel punto in cui lo si vuole tagliare, poi [eliminare](#supprimer-un-segment) il segmento appena aggiunto.
