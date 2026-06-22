---
title: Chiusure stradali
---

# Chiusure stradali

Questa pagina tratta la gestione delle chiusure stradali e dei divieti di circolazione limitati nel tempo in Svizzera: la scelta dell'approccio in base alla durata, l'aggiunta di restrizioni orarie nell'editor, la segnalazione di una chiusura e il trattamento delle Update Request (UR) di chiusura.

## Due approcci in base alla durata

La scelta del metodo dipende dalla durata della chiusura.

- **Breve durata (da alcune ore ad alcune settimane):** segnalare la chiusura tramite l'app o il modulo DACH (vedi «Segnalare una chiusura» qui sotto). La mappa viene aggiornata entro circa due giorni.
- **Lunga durata (da diversi mesi a diversi anni):** applicare una restrizione oraria direttamente sul o sui segmenti nell'editor. La restrizione è attiva immediatamente, senza attendere un aggiornamento della mappa.

## Aggiungere una restrizione oraria

Le restrizioni orarie si impostano segmento per segmento e tengono conto del senso di circolazione. Prestare attenzione al senso: una restrizione impostata su «A verso B» non si applica automaticamente a «B verso A».

Procedura:

1. Selezionare il segmento, poi cliccare sull'icona dell'orologio «Aggiungere una restrizione» o usare la scorciatoia da tastiera **T**.
2. Su una strada a doppio senso compaiono due schede: **«A verso B»** e **«B verso A»**, che corrispondono ai due sensi di circolazione. Lavorare nella scheda del senso interessato.
3. **Giorni:** spuntare i giorni interessati. I link «Seleziona tutto / deseleziona tutto» facilitano l'inserimento.
4. **Ore:** scegliere «Tutto il giorno» per una restrizione continua, oppure definire una fascia oraria in formato 24 ore (per esempio «10:00 alle 15:00»).
5. **Passaggio della mezzanotte:** per una fascia che supera la mezzanotte (per esempio dalle 22 alle 5), inserire «22:00 alle 05:00». Il sistema la prolunga automaticamente sul giorno successivo; non raddoppiare l'inserimento.
6. **Intervallo di date:** per impostazione predefinita la restrizione si ripete ogni settimana. Scegliere «Intervallo» per limitarla a date precise (estremi inclusi).
7. **Tipi di veicolo:** per impostazione predefinita sono interessati tutti i veicoli. Cliccare su «Modifica» per limitare la restrizione a determinati tipi. I tipi spuntati sono quelli bloccati.
8. **Descrizione:** indicare il motivo della chiusura (cantiere, evento, ecc.). Il testo è limitato a **100 caratteri**; oltre, il salvataggio non riesce.

### Copiare verso il senso inverso

Dopo aver creato una restrizione, usare «Copiare la stessa restrizione per il senso inverso» per applicarla a entrambi i sensi. Senza questa azione, la restrizione vale solo per il senso selezionato.

### Applicare a più segmenti

Per applicare una restrizione a una serie di segmenti, selezionarne più di uno (Ctrl, o Cmd su macOS) poi usare «Applica a tutti» per propagare la restrizione a tutta la selezione. Verificare in anticipo i sensi unici e il senso dei segmenti (A verso B o B verso A) prima di propagare.

## Segnalare una chiusura

- **Tramite l'app:** «Segnala > Chiusura». La segnalazione si effettua dal luogo interessato.
- **Tramite il modulo DACH:** per le chiusure che non possono essere segnalate sul posto. In entrambi i casi, la mappa riflette il cambiamento entro circa due giorni.

## Trattare le UR di chiusura

Il trattamento di una Update Request di chiusura segue il principio di prudenza:

- Chiudere come **«Risolto»** solo se la causa è stata identificata, la correzione applicata e la modifica salvata.
- Se la situazione non può essere verificata, chiudere come **«Non identificato»**.
- Non effettuare una falsa chiusura.
- Trattare con prudenza i casi in cui il senso di circolazione è ambiguo.

## Ruolo RTC State Manager

La Svizzera dispone di un ruolo speciale dedicato alle chiusure, il **RTC State Manager**, documentato nella pagina dei diritti di editing della community. Per la ripartizione dei ruoli e dei diritti, vedi [Organizzazione della community](/it/editors/organisation-communaute).

::: note Procedure RTC / MTE non dettagliate
Le fonti consultate non descrivono una procedura distinta specifica per le sigle «RTC» (Real Time Closures) o «MTE» (Major Traffic Events). Fare riferimento al forum svizzero e al server Discord prima di applicare questo tipo di chiusura.
:::

::: important Regola di prudenza
In caso di dubbio, di mancanza di informazioni o di situazione ambigua, non modificare la mappa sulla base di supposizioni o delle regole di un paese vicino. Porre sistematicamente la domanda sul forum svizzero.
:::

::: quote Fonti
- Straßensperrungen und zeitlich beschränkte Fahrverbote: https://www.waze.com/discuss/t/strassensperrungen-und-zeitlich-beschrankte-fahrverbote/377293
- Hub francofono (Chiusura delle UR): https://www.waze.com/discuss/t/informations-en-francais/377254
- Diritti di editing della community svizzera: https://www.waze.com/discuss/t/377276
:::
