---
title: Denominazione delle strade e delle città
description: Convenzioni di denominazione dei segmenti, entrate/uscite e località in Svizzera.
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/city.png" alt="">

# Denominazione delle strade e delle città

::: tip Accessibile a tutti: Livello L1
Questa pagina è rivolta a tutti gli editor, principianti compresi.
:::

Questa pagina riassume le regole di denominazione delle vie, delle strade e delle città per l'editing in Svizzera. Il riferimento svizzero prevale sempre sulle guide dei paesi vicini.

::: important Il riferimento svizzero prevale
In caso di dubbio, di mancanza di informazioni o di situazione simile, non effettuare mai una modifica su WME in Svizzera basandosi sulle regole di editing dei paesi vicini. Consultare prima le fonti comunitarie svizzere.
:::

## Classificazione dei tipi di strada

La classificazione Waze corrisponde ai seguenti tipi di via in Svizzera:

| Tipo Waze | Equivalente svizzero |
|-----------|------------------|
| Freeway | Autostrada |
| Major Highway | Semiautostrada |
| Minor Highway | Strada nazionale e principale |
| Ramp | Rampe autostradali |
| Primary Street | Strada principale (cartello blu / quadrato giallo) |
| Street | Tutte le altre vie (cartello bianco) |
| Dirt Road / 4x4 | Strada non asfaltata, strada forestale |
| Parking Lot Road | Grande area di parcheggio |
| Private Road | Strada privata |
| Ferry | Traversata in traghetto |

## Principi di denominazione

Utilizzare il nome ufficiale e completo della via, così come appare sulla segnaletica. Le maiuscole e gli accenti fanno parte del nome ufficiale e devono essere rispettati.

::: failure Abbreviazioni da evitare
Non abbreviare i tipi di via. Scrivere il nome per esteso:

- "Chemin" e non "Ch."
- "Route" e non "Rte"
- "Avenue" e non "Av."
:::

::: success Maiuscole e accenti corretti
- "Rue de la Paix" (e non "rue de la paix")
- Conservare gli accenti: é, è, à, ç
:::

## Sentieri pedonali: WT vs PB

Esistono due tipi, con un comportamento di instradamento differente:

- **Walking Trail (WT), sentiero pedonale instradabile**: se collegato a una strada carrabile ed è il più vicino a una destinazione, Waze può instradare attraverso questo sentiero per raggiungere la destinazione
- **Pedestrian Boardwalk (PB), zona pedonale non instradabile**: ignorato per l'instradamento, Waze guida verso il segmento carrabile più vicino indipendentemente dalla sua classe

## Denominazione delle strade

### Autostrade
Denominare **A1**, **A2**, **A3**, **E60**, ecc.

### Semiautostrade
Denominare **A1L**, **A52**, ecc. (secondo la segnaletica ufficiale).

### Strade nazionali (N1–N30)

- **In area urbana**: nome della via principale + entrata « Alt Street/Alias » con il numero (N1, N2…)
- **Fuori area urbana**: solo numero (**N1**, **N2**, ecc.), a meno che la nazionale non passi su un'autostrada, nel qual caso utilizzare il nome della via

### Strade principali numerate (H1–…)

- **In area urbana**: nome della via + alias H1, H2…
- **Fuori area urbana**: solo numero se non è presente alcun nome di via

### Rampe di entrata e di uscita

Denominare secondo i cartelli della segnaletica. Utilizzare il segno `>` per indicare la direzione (pronunciato dalla sintesi vocale) e `/` per separare le città:

```
Ausfahrt 43 > Niederbipp / Langenthal
A2 > Basel
Sortie 14 > Berne-Nord
```

### Svincoli (Kreuze)

Gli svincoli e i nodi autostradali devono ricevere un **punto di riferimento (landmark)** nel WME, denominato con il numero e il nome dello svincolo:

```
17 Frick
8 Liestal
```

## Nomi bilingui

Per una via che porta un nome in due lingue, inserire il secondo nome tramite il campo del nome alternativo (« Aggiungere un nome diverso »). Il nome principale resta il nome ufficiale principale della via.

## Ferrovie

Le ferrovie non portano mai un nome di città né un nome di via. Lasciare vuoto il campo del nome (o indicarvi il nome della compagnia, senza città, vedi [Legenda della mappa](/it/editors/wme/legende-carte)).

## Denominazione delle città e dei villaggi

Utilizzare **unicamente i nomi presenti nell'elenco ufficiale delle località svizzere**. Devono essere inseriti solo i luoghi dotati di un **codice postale (NPA) proprio**.

Regole importanti:

- Nessuna « terra nullius »: tutte le vie devono avere un campo Città compilato (**tranne** le autostrade, le rampe e le bretelle)
- Alcune grandi città hanno più NPA e sono suddivise in quartieri (Lausanne, Lucerna, Zurigo, ecc.)
- Uno stesso nome deve esistere **una sola volta**: verificare l'elenco prima di creare una nuova voce

::: important Importante
I nomi delle vie devono essere scritti senza abbreviazioni e con le maiuscole corrette. Esempio: « Chemin de la Paix » e non « Ch. de la Paix » né « chemin de la paix ».
:::

## Fahrspuren / Corsie di circolazione

- **Autostrade**: di regola, due corsie (semplifica la mappatura delle rampe)
- **Altre strade**: separare in due sensi solo se la separazione fisica è ≥ 5 metri o se lo giustificano marcature speciali

## Cartelli della segnaletica: promemoria

| Cartello | Tipo di segmento |
|---------|----------------|
| Blu o quadrato giallo | Strada primaria |
| Bianco | Via |
| Verde | Autostrada / Semiautostrada |

## Regole francesi, non svizzere

La guida di denominazione francese contiene convenzioni che non si applicano in Svizzera. Da non trasporre così come sono:

::: important Regole francesi, non svizzere
I seguenti elementi rientrano nella guida Francia e non si applicano in Svizzera:

- La nomenclatura stradale francese (autostrade A, nazionali N, dipartimentali D, vie comunali C): la Svizzera utilizza le proprie classificazioni (autostrade A, strade nazionali da N1 a N30, ecc.).
- I formati specifici delle circonvallazioni e delle tangenziali francesi (ad esempio "A86 - Intérieure").
- Il formato di numerazione europea proprio della rete francese (ad esempio "E72").
- Il formato francese delle uscite e delle entrate autostradali ("Sortie 18: Valensole", "A6a: Paris"): in Svizzera si utilizza il segno ">" e "/" (vedi sopra).

Ciò che resta valido in Svizzera da questa guida: il principio del nome ufficiale e completo secondo la segnaletica, il rispetto delle maiuscole, degli accenti e dei trattini, e il divieto delle abbreviazioni comuni.
:::

## Riferimenti ufficiali

- [Elenco delle autostrade svizzere (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Autobahnen_in_der_Schweiz)
- [Elenco delle semiautostrade (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Autostrassen_in_der_Schweiz)
- [Elenco delle strade nazionali (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Nationalstrassen_der_Schweiz)
- [Elenco delle strade principali numerate (Wikipedia)](http://de.wikipedia.org/wiki/Liste_der_Hauptstrassen_der_Schweiz)

::: quote Fonti
- Come denominare le strade e le città in Svizzera: https://www.waze.com/discuss/t/comment-nommer-les-routes-et-les-villes-en-suisse/377240
- Informazioni in francese: https://www.waze.com/discuss/t/informations-en-francais/377254
- Regole di editing nella Svizzera romanda: https://www.waze.com/discuss/t/regles-dedition-en-suisse-romande/377277
- Denominazione dei segmenti, delle vie, delle strade (Francia, da adattare): https://www.waze.com/discuss/t/nommage-des-segments-des-rues-des-routes/375658
:::
