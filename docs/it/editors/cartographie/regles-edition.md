---
title: "Regole di editing: Svizzera romanda"
description: Regole specifiche per la Svizzera romanda per l'editing della mappa Waze.
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/checkmark.png" alt="">

# Regole di editing: Svizzera romanda

::: note Livello L2
Queste regole si applicano non appena si effettuano modifiche significative sulla mappa.
:::

## Obiettivi fondamentali

Ogni editing della mappa deve puntare a tre obiettivi:

1. **Facilità d'uso**: mappe semplici con istruzioni di navigazione chiare, fornite solo quando necessario
2. **Semplicità**: evitare il dettaglio eccessivo (troppe corsie, segmenti inutili) che genera complessità e manutenzione
3. **Preservazione**: non eliminare i segmenti esistenti senza motivo: contengono dati preziosi (velocità, cronologia del routing)

## Denominazione dei segmenti

Vedi [Denominazione delle strade e delle città](/it/editors/cartographie/nommage-routes): la pagina di riferimento per il maiuscolo/minuscolo, le abbreviazioni e i tipi di strada.

## Parcheggi e aree di sosta

### Strade da mappare

Mappare solo gli elementi essenziali per la navigazione:

- Ingressi e uscite collegati alla viabilità
- Strade che costeggiano gli edifici commerciali
- Strade perimetrali dei grandi parcheggi
- Assi principali di circolazione dei grandi siti

Non mappare i singoli posti auto né le strade secondarie prive di interesse per il routing.

### POI e aree di parcheggio

Riservare ai parcheggi con strade di accesso dedicate. Usare la categoria **Parking Lot** e il nome esatto con il simbolo **P** se disponibile. Lasciare il campo vuoto in caso di dubbio. Evitare i termini generici come "Parco" o le abbreviazioni.

## Percorsi pedonali

Vedi [Percorsi pedonali](/it/editors/cartographie/chemins-pietons): quando includerli e quando non tracciarli.

## Strade private

Non mappare le strade private residenziali, salvo se:
- Servono più abitazioni
- Superano i 100 metri
- Creano un problema di routing accertato

## Inversioni a U (U-turn)

Consentire solo quando:
- La manovra crea un vicolo cieco
- È legale, sicura e segnalata da una segnaletica ufficiale

## Separazione in sensi unici

Una strada a doppio senso deve essere divisa in due segmenti a senso unico solo se:
- La separazione fisica è **≥ 5 metri**
- I punti GPS sono sufficientemente distanziati allo **zoom 100 metri**

Le autostrade e le superstrade con carreggiate separate da uno spartitraffico centrale meritano sistematicamente due segmenti a senso unico.

## Ponti e livelli

Non modificare il livello di un'intera strada. Attribuire livelli diversi solo ai **singoli segmenti** interessati (ponte, sottopassaggio, viadotto). Il livello è locale, non globale.

## Segmenti incompleti

I segmenti incompleti non sono bloccati. Terminare correttamente il lavoro prima che gli aggiornamenti si propaghino agli utenti.

## Micro-segmenti

Lunghezza minima: **5 metri**. Al di sotto, il calcolo della velocità e della navigazione viene alterato.

## Anelli (Loop)

Ogni anello richiede **almeno 3 segmenti**. Un anello a 2 segmenti genera errori di routing. Un anello a 1 segmento deve essere ristrutturato o eliminato.

## Strade senza uscita

Non mappare rotatorie o anelli di inversione a fine strada. Prolungare semplicemente il segmento fino al punto più lontano raggiungibile.

## Strade strette (Narrow Street)

Applicare questo tipo solo alle strade:
- **A doppio senso**
- **Superiori a 50 metri**
- Che lasciano passare **un solo veicolo standard** alla volta

Escludere: strade a senso unico, ponti, vicoli ciechi, passaggi con semafori o interventi di moderazione del traffico.

::: important Importante
In caso di dubbio su una regola, non effettuare la modifica. Poni la tua domanda sul [forum romando](https://www.waze.com/discuss/c/editors/switzerland/romandie/4797) o su Discord.
:::
