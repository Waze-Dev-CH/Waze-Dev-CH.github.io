---
title: Guida agli incroci
---

# Guida agli incroci

Questa pagina sintetizza la guida svizzera agli incroci. Il principio guida è semplice: un incrocio ben disegnato produce istruzioni di guida corrette. Un incrocio deve rappresentare la realtà logica della circolazione, non solo la sua geometria esatta.

::: abstract Sintesi
Più è semplice, meglio è. Si disegna il minor numero possibile di elementi ottenendo comunque le giuste istruzioni di navigazione.
:::

## Più è semplice, meglio è

La regola di base della guida: non sovraccaricare un incrocio. Si aggiungono segmenti, nodi o geometria solo quando è necessario per ottenere l'istruzione di guida attesa. Un incrocio più semplice è più facile da mantenere e genera un routing più affidabile.

## Le basi

::: reminder Da leggere per primo
Questa sezione pone le fondamenta. Comprenderle prima di ogni altra cosa.
:::

### Un incrocio in Waze

In Waze, un incrocio si compone come minimo di:

- almeno due segmenti di strada,
- uno o più nodi di svincolo,
- autorizzazioni o divieti di svolta a questi nodi.

Sono questi elementi combinati che determinano i movimenti possibili e le istruzioni date al conducente.

### Incrocio a T

Un incrocio a T collega una strada che termina su un'altra strada. I segmenti devono congiungersi secondo angoli prossimi a 90°. Quando le strade si congiungono con un angolo acuto, aggiungere punti di geometria per raddrizzare l'incrocio verso i 90°. Senza questo, il router può produrre un "tieni la destra / tieni la sinistra" invece di un "svolta", omettere un'istruzione o generare errori di mappa automatici.

### Incrocio a +

Un incrocio a + (a croce) collega quattro rami a un nodo. Come per l'incrocio a T, puntare ad angoli prossimi a 90° aiuta il router a distinguere "dritto" dalle svolte. Lavorare a forte zoom: le correzioni d'angolo diventano quasi invisibili allo zoom normale.

## Controllare le istruzioni di guida

L'angolo di svolta determina l'istruzione data al conducente.

| Angolo | Intervallo | Tipo di strada | Istruzione |
| --- | --- | --- | --- |
| 22° | da 0° a 44° | Strade ordinarie | Tieni la sinistra / la destra |
| 22° | da 0° a 44° | Rampe / autostrade | Esci a sinistra / a destra |
| 90° | da 45° a 150° | Tutti i tipi | Svolta a sinistra / a destra |

::: important Angoli da evitare
- Intorno ai 45°: un errore di 0,5° può bastare a innescare l'istruzione sbagliata.
- Sotto i 10°: le frecce diventano difficili da selezionare nell'editor e i segmenti difficili da toccare nell'applicazione.
:::

### Denominazione dei segmenti interni

I segmenti situati all'interno di un incrocio restano senza nome, salvo se tutte le direzioni possibili riceverebbero comunque un'istruzione corretta. Denominare un segmento interno è accettabile solo se nessuna direzione (inversione a U inclusa) può produrre un errore di routing.

## Tra vie

### Biforcazione

Il server di routing considera che due segmenti dello stesso nome collegati con un angolo di circa 0° rappresentino un tragitto "dritto".

Esempio: un viale che continua dritto mentre una via si stacca.

- I due segmenti del viale (prima e dopo): stesso nome, angolo di circa 0° all'incrocio.
- La via che si stacca: angolo di 90° rispetto al viale.
- Risultato: il router identifica correttamente la svolta verso la via.

### Vie senza uscita

- Una strada chiusa si rappresenta con un segmento semplice, senza connessione alla sua estremità, con un nodo di svincolo al capolinea, posizionato dove il conducente può fisicamente raggiungerlo. Non estenderla fino al bordo assoluto.
- Un vicolo cieco circolare si traccia in genere come una strada chiusa standard, con il nodo posizionato vicino al centro dell'anello per restare accessibile qualunque sia il senso di arrivo.
- Eccezione: se una piccola isola occupa il centro, posizionare il segmento sul bordo esterno dell'anello affinché l'estremità resti accessibile.

### Anelli

Un segmento non può collegarsi a se stesso tramite un solo nodo. Un anello deve essere interrotto da un nodo supplementare, oppure disegnato con due segmenti. In pratica, creare un incrocio a 3 rami all'incirca a metà percorso dell'anello affinché il routing funzioni.

### Strade sfalsate

Quando due strade si incrociano quasi senza essere perfettamente allineate:

1. Vero incrocio a 4 rami: convertirlo in un vero incrocio a 4 rami.
2. Quasi-allineamento: sfalsare leggermente le strade fuori asse e aggiungere punti di geometria per ottenere angoli di 90° al nodo.
3. Approcci realmente distinti: mantenere svincoli separati con una guida "svolta a sinistra" e poi "svolta a destra".

::: important Segmenti molto corti
Un segmento molto corto tra due approcci sfalsati innesca errori di mappa automatici e ricalcoli di itinerario. Massimizzare la distanza tra i punti di approccio.
:::

### Rotatorie e rotonde

La guida rimanda a una pagina dedicata per le rotatorie e le rotonde.

::: note Nota
Vedi la pagina dedicata: [Rotatorie e rotonde](/it/editors/ronds-points).
:::

### Nodi di transizione

I nodi di transizione sono svincoli invisibili lato applicazione. Servono ai cambi di nome di via, ai limiti di località, ai cambi di direzione e ai componenti di anello. Eliminarli solo essendo certi che non siano più utilizzati: semplificano la mappa e riducono i fattori di routing inutili.

### Incrocio a nodo a farfalla (bowtie)

L'incrocio a nodo a farfalla semplifica l'attraversamento tra una strada a carreggiate separate e una strada a carreggiata unica riducendo l'attraversamento a un solo punto logico. Questa costruzione migliora il controllo delle inversioni a U in quel punto, senza dipendere dalla lunghezza dei segmenti.

## Soft e Hard turns

Le connessioni generate automaticamente da WME sono soft-turns (punto interrogativo viola); le decisioni manuali dell'editor sono hard-turns. Esistono quattro stati, dal più penalizzante al meno penalizzante: hard ristretto (freccia rossa), soft ristretto (punto interrogativo viola), soft autorizzato (freccia verde), hard autorizzato (freccia verde confermata).

::: example Metodo rapido a un nuovo incrocio
Verificare prima le direzioni, poi "Q" per vietare tutte le svolte, poi "W" per autorizzarle tutte, e infine mettere in hard ristretto solo le svolte realmente vietate.
:::

## Rampe

Le rampe servono a collegare segmenti di tipo Highway o Freeway in corrispondenza di interscambi a livelli sfalsati (incroci su livelli separati).

Sul versante del tracciato, si applica il principio "più è semplice, meglio è": un solo segmento di rampa è in genere sufficiente, con un solo svincolo se le distanze sono ridotte. Una scissione in più segmenti si giustifica solo se le estremità sono nettamente distanziate. Mantenere un angolo di partenza da 20 a 30° per produrre l'istruzione "Esci".

## Incroci Highway e Freeway

### Uscite

Le rampe di uscita devono divergere dalla strada principale secondo un angolo da 20 a 30°. Questo angolo produce l'istruzione "Esci a destra". I segmenti prima e dopo lo svincolo restano di tipo Highway o Freeway, dello stesso nome, con un angolo di circa 0°; la rampa è di tipo Ramp.

### Scissione Highway / Freeway

Quando tre segmenti Highway si congiungono senza un "dritto" evidente, nomi diversi e angoli da 20 a 30° producono un'istruzione "Tieni la destra" o "Tieni la sinistra" con il nome del ramo.

### Segmenti di guida

I segmenti di guida devono misurare da 15 a 20 metri di lunghezza. Servono ad avvertire il conducente in caso di riduzione di corsie, di segnaletica incoerente o di routing non evidente (per esempio uscire a sinistra e poi rientrare a destra). I tre segmenti interessati devono portare nomi distinti, e i due segmenti che li racchiudono essere di tipo identico.

### Scissione di rampa

La fonte dettaglia anche la scissione di una rampa. Lo stesso principio di angoli e denominazione si applica per ottenere l'istruzione attesa.

## Ponti e tunnel

Le strade che si sovrappongono senza incrociarsi realmente (ponti, cavalcavia, sottopassi, tunnel) devono essere separate da livelli di elevazione del segmento.

- Per impostazione predefinita, ogni segmento è al livello 0.
- La funzione ponte (bridge) attribuisce al segmento superiore un livello di un'unità al di sopra del più alto dei due segmenti selezionati.
- Un tunnel riceve il livello -1, affinché Waze lo riconosca come tunnel ed escluda gli errori di mappa automatici.

::: important Condizioni della funzione ponte
La funzione ponte agisce su due segmenti alla volta ed esige proprietà concordanti: paese, cantone, località e nome di via. Non funziona se un segmento non ha un senso di circolazione definito ("Sconosciuto"). Il tipo di strada e il blocco sono ininfluenti.
:::

Dopo l'applicazione, correggere manualmente i livelli ottenuti ed eliminare i punti di geometria divenuti inutili dove esisteva in precedenza un incrocio.

## Interscambi

Per gli interscambi, la guida rimanda a una risorsa esterna dedicata.

::: note Limited Access Interchange Style Guide
Il dettaglio degli interscambi non è riprodotto qui. Fare riferimento al "Limited Access Interchange Style Guide" indicato nella fonte.
:::

::: quote Fonti
- Kreuzungen: https://www.waze.com/discuss/t/kreuzungen/377258
- Guide des intersections (Svizzera): https://www.waze.com/discuss/t/guide-des-intersections/377286
- Unterführungen und Brücken: https://www.waze.com/discuss/t/unterfuhrungen-und-brucken/377274
- Soft und Hard Turns: https://www.waze.com/discuss/t/soft-und-hard-turns/377271
:::
