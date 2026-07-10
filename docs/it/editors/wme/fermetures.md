---
title: Chiusure stradali
order: 10
---

<img class="macaron" src="/img/editors/roadblock.png" alt="" width="128" height="128">

# Chiusure stradali

Questa pagina tratta la gestione delle chiusure stradali e dei divieti di circolazione limitati nel tempo in Svizzera: la scelta dell'approccio in base alla durata, l'aggiunta di restrizioni orarie nell'editor, la segnalazione di una chiusura e il trattamento delle Update Request (UR) di chiusura.

## Due approcci in base alla durata

La scelta del metodo dipende dalla durata della chiusura.

- **Breve durata (da qualche ora a qualche settimana):** segnalare la chiusura tramite l'app o il modulo DACH (vedere « Segnalare una chiusura » qui sotto). La mappa viene aggiornata entro circa due giorni.
- **Lunga durata (da diversi mesi a diversi anni):** applicare una restrizione oraria direttamente sul segmento o sui segmenti nell'editor. La restrizione è attiva immediatamente, senza attendere un aggiornamento della mappa.

## Aggiungere una restrizione oraria

Le restrizioni orarie si applicano segmento per segmento e tengono conto del senso di circolazione. Prestare attenzione al senso: una restrizione posta su « A verso B » non si applica automaticamente a « B verso A ».

Procedura:

1. Selezionare il segmento, poi cliccare sull'icona orologio « Aggiungi una restrizione » oppure usare la scorciatoia da tastiera <kbd>T</kbd>.
2. Su una strada a doppio senso appaiono due schede: **« A verso B »** e **« B verso A »**, che corrispondono ai due sensi di circolazione. Lavorare nella scheda del senso interessato.
3. **Giorni:** spuntare i giorni interessati. I link « Seleziona / deseleziona tutto » facilitano l'inserimento.
4. **Ore:** scegliere « Tutto il giorno » per una restrizione continua, oppure definire una fascia oraria in formato 24 h (per esempio « 10:00 alle 15:00 »).
5. **Passaggio di mezzanotte:** per una fascia che oltrepassa la mezzanotte (per esempio dalle 22 alle 5), inserire « 22:00 alle 05:00 ». Il sistema prolunga automaticamente sul giorno successivo; non duplicare l'inserimento.
6. **Intervallo di date:** per impostazione predefinita la restrizione si ripete ogni settimana. Scegliere « Intervallo » per limitarla a date precise (estremi inclusi).
7. **Tipi di veicolo:** per impostazione predefinita tutti i veicoli sono interessati. Cliccare su « Modifica » per restringere la restrizione ad alcuni tipi. I tipi spuntati sono quelli bloccati.
8. **Descrizione:** indicare il motivo della chiusura (cantiere, evento, ecc.). Il testo è limitato a **100 caratteri**; oltre tale limite, il salvataggio fallisce.

### Copiare verso il senso inverso

Dopo aver creato una restrizione, usare « Copia la stessa restrizione per il senso inverso » per applicarla a entrambi i sensi. Senza questa azione, la restrizione vale solo per il senso selezionato.

### Applicare a più segmenti

Per applicare una restrizione a una serie di segmenti, selezionarne più di uno (Ctrl, oppure Cmd su macOS) poi usare « Applica a tutti » per propagare la restrizione all'intera selezione. Verificare preventivamente i sensi unici e il senso dei segmenti (A verso B o B verso A) prima di propagare.

## Segnalare una chiusura

- **Tramite l'app:** « Segnala > Chiusura ». La segnalazione avviene dal luogo interessato.
- **Tramite il modulo DACH:** per le chiusure che non possono essere segnalate sul posto. In entrambi i casi, la mappa riflette il cambiamento entro circa due giorni.

## Trattare le UR di chiusura

Il trattamento di una Update Request di chiusura segue il principio di prudenza:

- Chiudere come **« Corretto »** solo se la causa è stata identificata, la correzione applicata e la modifica salvata.
- Se la situazione non può essere verificata, chiudere come **« Non identificato »**.
- Non effettuare false chiusure.
- Trattare con prudenza i casi in cui il senso di circolazione è ambiguo.

## Ruolo RTC State Manager

La Svizzera dispone di un ruolo speciale dedicato alle chiusure, il **RTC State Manager**, documentato nella pagina dei diritti di editing della community. Per la ripartizione dei ruoli e dei diritti, vedere [Ruoli di editor](/it/editors/wme/roles).

::: note Procedure RTC / MTE non dettagliate
Le fonti consultate non descrivono una procedura distinta propria delle sigle « RTC » (Real Time Closures) o « MTE » (Major Traffic Events). Fare riferimento al forum svizzero e al server Discord prima di applicare questo tipo di chiusura.
:::

::: important Regola di prudenza
In caso di dubbio, di mancanza di informazioni o di situazione ambigua, non modificare la mappa sulla base di supposizioni o delle regole di un paese vicino. Porre sistematicamente la domanda sul forum svizzero.
:::

::: quote Fonti
- Straßensperrungen und zeitlich beschränkte Fahrverbote: https://www.waze.com/discuss/t/strassensperrungen-und-zeitlich-beschrankte-fahrverbote/377293
- Hub francophone (Fermeture des URs): https://www.waze.com/discuss/t/informations-en-francais/377254
- Droits d'édition de la communauté suisse: https://www.waze.com/discuss/t/377276
:::
