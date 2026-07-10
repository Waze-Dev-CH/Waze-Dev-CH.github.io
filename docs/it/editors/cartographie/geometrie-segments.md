---
title: Geometria dei segmenti
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Geometria dei segmenti

Questa pagina raccoglie le regole di geometria per la modifica dei segmenti in Svizzera: micro-segmenti, anelli, vicoli ciechi, inversioni a U, strada stretta, vie private, transizioni e strade sfalsate.

## Micro-segmenti

::: failure Evitare i micro-segmenti
Un segmento deve misurare almeno 5 metri per un funzionamento ottimale. I segmenti più corti impediscono il calcolo efficiente dei percorsi.
:::

Le rotatorie sono escluse da questa regola: i loro segmenti possono essere più corti.

## Anelli

Un anello deve essere composto da almeno 3 segmenti di strada. In altre parole, due segmenti non devono avere due giunzioni in comune.

::: failure Anello a 2 segmenti
Un anello a 2 segmenti crea errori di guida ("same endpoint drivable segments"). Aggiungere un nodo di giunzione per dividerlo in 3 o più segmenti, senza creare un micro-segmento.
:::

::: note Anello di grandi dimensioni
Se l'anello è molto grande, aggiungere un sentiero o un viale per evitarne la cancellazione accidentale.
:::

## Vicoli ciechi

Non mappare gli anelli né le rotatorie di inversione. Estendere semplicemente l'estremità del segmento fino al punto più lontano raggiungibile in auto.

- Posizionare il nodo di giunzione finale vicino alla fine, al centro della carreggiata.
- La distanza del nodo dalle estremità corrisponde alla distanza dai bordi.
- Per un'isola centrale, posizionare il nodo all'esterno del perimetro dell'isola.

::: reminder Promemoria
Se, trovandosi alla fine della via, si vede chiaramente un semplice vicolo cieco, non creare un anello.
:::

## Inversioni a U

Impostare una manovra di inversione a U in verde (consentita) solo se:

1. un segmento bidirezionale collegato a un senso unico crea un vicolo cieco, oppure
2. la manovra avviene senza retromarcia, è legale ed è indicata da una segnaletica orizzontale, un cartello o un semaforo.

## Strada stretta / Vicolo

Il tipo "Strada stretta / Vicolo" (tipo 22) si usa solo se la via è bidirezionale, misura più di 50 metri e offre la larghezza per un solo veicolo standard.

::: failure Non utilizzare per
- i sensi unici;
- i ponti e i passaggi brevi;
- i vicoli ciechi;
- gli altri tipi di vie con penalità;
- gli incroci impossibili tranne che per veicoli pesanti;
- i semafori permanenti;
- i restringimenti destinati a rallentare il traffico;
- interi paesi.
:::

## Vie private di abitazione

Non mappare gli accessi privati individuali, tranne se:

- la via serve almeno 2 abitazioni, oppure
- la via è particolarmente lunga, o l'abitazione si trova a più di 100 metri dalla strada, oppure
- l'assenza di mappatura causerebbe problemi di guida.

## Transizioni e strade sfalsate

### Transizioni

Una transizione rappresenta l'assenza di intersezione tra due segmenti. Serve a:

- un cambio di nome della strada;
- un cambio di senso di circolazione (doppio senso verso senso unico);
- rendere navigabile un anello.

Eliminare i nodi di giunzione superflui per semplificare la mappa.

### Strade sfalsate

Tre casi da considerare:

1. Strade allineate nella realtà: modificare in incrocio a 4 segmenti.
2. Strade quasi allineate: forzare la giunzione vicino ai 90 gradi per ottenere l'istruzione "dritto".
3. Vera separazione: lasciare i lati non allineati e massimizzare la lunghezza del piccolo segmento tra le strade.

::: quote Fonti
- Regole di modifica nella Svizzera romanda: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
- Guida agli incroci: https://www.waze.com/discuss/t/guide-des-intersections/377286
- Informazioni in francese: https://www.waze.com/discuss/t/informations-en-francais/377254
:::
