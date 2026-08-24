---
title: FAQ conducenti
description: Risposte alle domande frequenti dei conducenti su Waze in Svizzera.
sidebar: false
aside: true
order: 4
---

# FAQ conducenti

<img class="banner-img is-narrow" src="/img/wazers/waze-kit/icons/faq.png" alt="">

Le domande più frequenti dei conducenti Waze in Svizzera. Fai clic su una domanda per aprire la risposta.

## L'applicazione

::: details Su quali piattaforme è disponibile Waze?
Waze è disponibile su **iOS** e **Android**, gratuitamente.

L'applicazione può inoltre essere visualizzata sullo schermo del veicolo tramite **Android Auto** o **Apple CarPlay**, e alcuni veicoli recenti integrano Waze direttamente nel proprio sistema di bordo, senza telefono.
:::

::: details Dove posso ottenere aiuto con l'applicazione?
Waze fa parte di Google: il supporto ufficiale passa dalle [pagine di aiuto Google](https://support.google.com/waze) (principalmente in inglese).

Per le domande specifiche della Svizzera (cartografia locale, vignette, chiusure di strade), la comunità svizzera è più efficace:

- [Forum Waze Svizzera](https://www.waze.com/discuss/c/editors/switzerland/4790)
- [Discord Waze CH](https://discord.gg/dmxUwvTkk5)
:::

## Itinerari e navigazione

::: details Cercando un itinerario che passa per la Svizzera, l'applicazione evita le autostrade, perché?
Le autostrade svizzere richiedono un pass chiamato «vignette». Costa **CHF 40.–** e deve essere applicata sul parabrezza. Senza vignette, la multa è di **CHF 200.–**.

Waze ha bisogno di una conferma del fatto che possiedi la vignette prima di proporti le autostrade in Svizzera. Finché non lo fai, l'applicazione le aggira sistematicamente.

La procedura completa, così come i link di acquisto ufficiali, si trovano nella pagina [Vignette autostradale](/it/wazers/vignette).
:::

::: details Come evitare pedaggi, autostrade, traghetti o strade non asfaltate?
Queste impostazioni si trovano in **Impostazioni** > **Navigazione**:

- **Evita pedaggi**
- **Evita traghetti**
- **Evita autostrade**
- **Strade non asfaltate**, con tre opzioni: Consenti, Non consentire, oppure Evita quelle lunghe

Per un singolo viaggio, senza modificare le impostazioni permanenti: cerca la destinazione, tocca **Vedi percorsi**, poi **Evita** in alto sullo schermo.

Su CarPlay, il menu **Evita** si trova in alto a destra. Su Android Auto, è accessibile tramite l'icona delle impostazioni.

Attenzione: se non è possibile nessun altro percorso, Waze ti farà comunque passare da un pedaggio, un'autostrada, un traghetto o una strada non asfaltata. Queste opzioni sono preferenze, non divieti assoluti.
:::

::: details Waze mi propone sempre lo stesso itinerario, perché?
Waze applica per impostazione predefinita una **navigazione personalizzata**: l'applicazione impara dai tuoi viaggi passati, dagli itinerari che accetti e da quelli che rifiuti, per affinare le sue stime di arrivo e privilegiare le strade che sembri preferire.

Per disattivarla: **Impostazioni** > **Navigazione** > **Personalizzazione**, poi deseleziona **ETA personalizzati** e **Percorsi personalizzati**.

Da notare: Waze non permette di salvare manualmente un itinerario preferito tra due punti. Puoi invece consultare gli altri tragitti proposti prima di partire, tramite l'elenco dei percorsi.
:::

::: details Waze funziona senza connessione internet?
No. Waze richiede una **connessione dati attiva** per localizzarsi, calcolare un itinerario e visualizzare il traffico. L'applicazione non offre mappe offline scaricabili.

Con una connessione instabile, Waze continua a tentare di recuperare i dati dal server, ma gli avvisi di traffico e di pericolo possono essere incompleti o obsoleti.
:::

## La mappa non è aggiornata

::: details Quanto tempo passa prima che una correzione appaia nell'applicazione?
Si sommano due tempi di attesa:

1. **La pubblicazione della mappa.** Le modifiche fatte dagli editor vengono compilate e pubblicate circa **una volta al giorno**. Finché questa pubblicazione non è avvenuta, la correzione non esiste da nessuna parte se non nell'editor.
2. **La cache della tua applicazione.** Waze conserva localmente la porzione di mappa già scaricata. Si aggiorna durante i tuoi prossimi calcoli di itinerario e i tuoi passaggi nella zona interessata.

Considera quindi almeno 24 ore, e diversi giorni per una strada completamente nuova. Il dettaglio per tipo di modifica è riportato nella pagina [Tempi di aggiornamento della mappa](/it/editors/wme/delais-mise-a-jour).
:::

::: details La mappa della mia applicazione resta obsoleta, come forzare l'aggiornamento?
Se la correzione è presente nell'editor da **48 ore o più** e la tua applicazione mostra ancora la versione precedente, puoi forzare l'aggiornamento della cache locale:

1. Apri Waze e inserisci il codice `2##2` nella barra di ricerca degli indirizzi, poi conferma. L'applicazione passa in modalità debug.
2. Apri **Impostazioni** > **Generale**.
3. Tocca **Aggiorna la mappa della mia zona**.

La tua applicazione riscarica allora la mappa della regione, nella sua versione pubblicata più recente.

**Se questa opzione è assente nella tua versione**, dato che la sua posizione è cambiata nel corso degli aggiornamenti:

- **Android**: apri le **Impostazioni** del telefono > **App** > **Waze** > **Archiviazione**, poi **Svuota cache**. Non toccare «Cancella dati», che ti disconnetterebbe.
- **iOS**: non esiste uno svuotamento della cache per singola applicazione. Disinstalla e reinstalla Waze. L'opzione «Rimuovi app» non è sufficiente, perché conserva i dati dell'applicazione.
:::

::: details Ho notato un errore sulla mappa, come lo segnalo?
Dall'applicazione, tocca il pulsante **Segnala**, poi scegli **Problema mappa**. I sottotipi disponibili coprono l'essenziale:

- Errore di mappa generico
- Svolta errata
- Indirizzo errato
- Limite di velocità
- Itinerario errato
- Rotatoria mancante
- Strada mancante

La tua segnalazione crea una **richiesta di aggiornamento** che gli editor volontari vedono comparire sulla mappa. Possono risponderti direttamente nell'applicazione per chiedere un chiarimento, quindi presta attenzione ai loro messaggi: senza una tua risposta, la richiesta finisce per essere chiusa senza correzione.

Descrivi il problema nel modo più preciso possibile: il senso di marcia interessato, l'ora, cosa ti ha chiesto di fare Waze e cosa sarebbe stato invece corretto fare.
:::

## Segnalazioni

::: details Cosa posso segnalare dall'applicazione?
Il pulsante **Segnala** comprende in particolare:

- Traffico e code
- Polizia <sup>[<Badge type="danger" text="ⓘ disattivato" />](#autovelox-e-polizia)</sup>
- Incidenti
- Pericoli sulla strada
- Maltempo
- Corsia bloccata
- Problema mappa
- Aggiunta di un luogo
- Chiusura di strada
- Tipo e prezzo dei carburanti
- Veicoli di emergenza

È possibile anche una segnalazione vocale: descrivi la situazione con parole tue invece di navigare nei menu.
:::

::: details Che differenza c'è tra una segnalazione di traffico e un problema mappa?
Una segnalazione di **traffico**, **polizia** <sup>[<Badge type="danger" text="ⓘ disattivato" />](#autovelox-e-polizia)</sup>, **incidente** o **pericolo** è un avviso in tempo reale, effimero: avverte i conducenti che arrivano dietro di te, poi scompare. Non modifica la mappa.

Una segnalazione di **problema mappa** è di altra natura: crea una richiesta di aggiornamento gestita manualmente da un editor volontario, che correggerà la mappa se il problema viene confermato. È l'unico tipo di segnalazione che porta a una modifica duratura.
:::

::: details Ci sono regole da rispettare per le segnalazioni?
Due principi:

- **Segnala solo ciò che vedi realmente**, e il più vicino possibile all'evento. Una segnalazione posizionata diversi chilometri prima o dopo induce in errore gli altri conducenti.
- **Non abusare delle segnalazioni.** Waze può bloccare un account le cui segnalazioni sono palesemente false o ripetitive.

E naturalmente: segnala in sicurezza, idealmente da fermo o affidando l'operazione al passeggero.
:::

## Autovelox e polizia

::: details Perché nessun autovelox fisso viene segnalato su Waze in Svizzera?
Gli autovelox sono stati disattivati in Svizzera a causa della legge svizzera, che vieta i dispositivi che avvisano della presenza di controlli di velocità.

Questa funzionalità non sarà riattivata a meno di un cambiamento della legge. Non si tratta né di un bug, né di una lacuna nella mappa: è inutile segnalare autovelox mancanti.
:::

::: details Perché non si può più segnalare la polizia in Svizzera?
La segnalazione della polizia è stata disattivata in Svizzera e nel Liechtenstein nell'agosto 2026, in seguito a discussioni interne a Waze sulla normativa locale.

L'opzione è sparita dal menu di segnalazione e gli avvisi polizia non vengono più visualizzati. Come per gli autovelox, non si tratta né di un bug né di una lacuna nella mappa: è inutile cercare l'opzione nell'applicazione, o segnalarla come mancante.

Tutto il resto dell'applicazione continua a funzionare normalmente: la navigazione, il traffico in tempo reale, gli avvisi di pericolo sulla strada e il calcolo dell'itinerario.
:::

::: note Base giuridica
In Svizzera, l'art. 98a della legge federale sulla circolazione stradale (LCStr, RS 741.01) vieta gli apparecchi e i dispositivi destinati a rendere più difficile, a disturbare o a rendere inefficace il controllo ufficiale del traffico stradale, come pure l'avvertimento degli utenti della strada su tali controlli.

[Testo dell'art. 98a LCStr](https://www.fedlex.admin.ch/eli/cc/1959/679_705_685/it#art_98_a)
:::

## Prezzo della benzina

::: details I prezzi della benzina sono sbagliati, cosa fare?
L'unico modo per aggiornare un prezzo è farlo **dall'applicazione, entro un raggio di 500 m attorno alla stazione**: pulsante arancione di segnalazione, poi **Prezzo della benzina**.

È una limitazione voluta da Waze: garantisce che il prezzo inserito sia stato effettivamente rilevato sul posto.
:::

::: details Ho segnalato prezzi sbagliati ma nulla è stato corretto, perché?
Gli editor della mappa non possono aggiornare i prezzi a distanza: la restrizione dei 500 m vale anche per loro. Chiudono quindi queste segnalazioni senza poter intervenire, il che può dare l'impressione che la segnalazione sia stata ignorata.

Se passi regolarmente davanti a una stazione con un prezzo sbagliato, sei la persona nella posizione migliore per correggerlo. Il dettaglio della gestione dal lato degli editor è descritto nella pagina [Chiusura delle UR](/it/editors/wme/fermeture-urs).
:::

## Chiusure di strade ed eventi

::: details Un evento importante o dei lavori impatteranno il traffico nella mia zona, come posso aiutare?
Informa in anticipo la comunità locale: le chiusure inserite per tempo nella mappa evitano che centinaia di conducenti vengano indirizzati in una via sbarrata.

- Pubblica sul [Forum Waze Svizzera](https://www.waze.com/discuss/c/editors/switzerland/4790)
- Oppure invia un'e-mail a fermetures@waze-switzerland.ch (fr/it/en) o sperrungen@waze-switzerland.ch (de/en)

Indica le date e gli orari esatti, le vie interessate, e allega se possibile l'ordinanza o il piano di deviazione ufficiale. Il modo in cui queste chiusure vengono inserite è descritto nella pagina [Chiusure di strade](/it/editors/wme/fermetures).
:::

## Voce, lingua e audio

::: details Ho cambiato la lingua dell'applicazione, ma le istruzioni restano nella lingua precedente
È il malinteso più frequente: la lingua dell'interfaccia e la lingua delle istruzioni vocali sono **due impostazioni distinte**. Cambiare l'una non cambia l'altra.

Per la voce: **Impostazioni** > **Voce e suoni** > **Voce Waze**, poi scegli una voce nella lingua desiderata.

Se usi Waze su Android Auto o CarPlay, scollega prima il telefono dallo schermo del veicolo prima di modificare questa impostazione.
:::

::: details Waze non pronuncia i nomi delle vie
Non tutte le voci leggono i nomi delle vie. Nell'elenco delle voci, scegline una con la dicitura **«con nomi delle vie»** (o «including street names» a seconda della lingua dell'interfaccia).
:::

::: details Posso cambiare la lingua dei nomi delle vie visualizzati sulla mappa?
No, non esiste un'impostazione per questo. I nomi visualizzati sono quelli inseriti nella mappa, nella lingua ufficiale del comune interessato. In Svizzera vedrai quindi le vie in francese, tedesco, italiano o romancio a seconda della regione attraversata, indipendentemente dalla lingua della tua applicazione.
:::

## Android Auto e CarPlay

::: details Come usare Waze sullo schermo della mia auto?
Collega il telefono via USB o in modalità wireless, a seconda di ciò che supporta il tuo veicolo. La compatibilità con Android Auto o CarPlay dipende dal modello: verifica presso il costruttore.

Alcuni punti utili:

- L'**inserimento da tastiera è possibile solo da fermo**, con il freno a mano tirato. In marcia, usa il comando vocale.
- I tuoi **luoghi salvati** (casa, lavoro, preferiti) sono sincronizzati dall'applicazione del telefono: preparali prima di partire.
:::

::: details Alcune funzioni mancano sullo schermo dell'auto
È normale: Waze su CarPlay e Android Auto è una **versione ridotta** dell'applicazione mobile. Le impostazioni dettagliate, la gestione dell'account e una parte delle segnalazioni restano da fare dal telefono.

Il menu **Evita** esiste anche sullo schermo del veicolo, ma la sua posizione è diversa: in alto a destra su CarPlay, tramite l'icona delle impostazioni su Android Auto.

Infine, ricordati di **scollegare il telefono dallo schermo del veicolo** prima di modificare le impostazioni di voce, lingua o account: alcune modifiche non vengono applicate finché la connessione è attiva.
:::

## Dati mobili

::: details Come verificare quanti dati consuma Waze?
Questa informazione è fornita dal tuo telefono, non da Waze:

- **iOS**: **Impostazioni** > **Dati cellulare**, poi cerca Waze nell'elenco.
- **Android**: **Impostazioni** > **Utilizzo dati mobili** > **Waze**, con un grafico per periodo.
:::

::: details Waze non si aggiorna più quando il risparmio dati è attivo
Il risparmio dati è un'impostazione del tuo telefono, non di Waze: interrompe l'accesso alla rete in background delle applicazioni.

Perché Waze continui a ricevere traffico e avvisi, autorizzalo esplicitamente nelle impostazioni del dispositivo: **Consenti l'app quando il risparmio dati è attivo**, e **Consenti i dati in background**.
:::

## Account e privacy

::: details Come eliminare il mio account Waze?
Dall'applicazione: **Menu** > **Visualizza profilo** (sotto il tuo nome) > **Account e accesso**, poi scorri fino a **Elimina account** e conferma. Le tue credenziali potrebbero esserti richieste di nuovo.

Per un account ospite: **Impostazioni** > **Privacy** > **Elimina account**.

Se usi Waze su Android Auto o CarPlay, scollega prima il telefono dallo schermo del veicolo.
:::

::: details Cosa succede ai miei contributi se elimino il mio account?
I tuoi **luoghi salvati e la tua cronologia di navigazione** vengono eliminati.

I tuoi **contributi alla mappa** non vengono cancellati, ma sono dissociati dalla tua identità: le correzioni che hai apportato restano al loro posto a beneficio degli altri conducenti.

L'eliminazione effettiva dai sistemi di archiviazione richiede circa **due mesi**. L'eliminazione è definitiva: un account eliminato non può essere recuperato.
:::

---

Per il versante editoriale, in particolare il modo in cui le tue segnalazioni vengono gestite, vedi [Editor](/it/editors/).

::: help Serve ulteriore aiuto?
Unisciti alla comunità Waze Svizzera:
- [Forum Waze Svizzera](https://www.waze.com/discuss/c/editors/switzerland/4790)
- [Discord Waze CH](https://discord.gg/dmxUwvTkk5)
:::

::: quote Fonte/i
https://www.waze-switzerland.ch/faq/fr

https://support.google.com/waze
:::
