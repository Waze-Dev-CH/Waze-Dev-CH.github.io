---
title: "Mappatura delle autostrade: Linee guida 2024"
order: 12
---

<img class="macaron" src="/img/editors/badge-freeway.png" alt="" width="128" height="128">

# Mappatura delle autostrade: Linee guida 2024

Di vince1612  
Co-coordinatore Svizzera e Global Champ  
Comunità di volontari Waze

::: note Livello richiesto
Queste linee guida riguardano soprattutto gli editor di **livello 5 e superiore**: la modifica delle autostrade non è né utile né accessibile ai principianti. Se sei alle prime armi, puoi tranquillamente saltare questa pagina.
:::

## Panoramica

Le autostrade svizzere sono state ampiamente modificate da un contributore non conforme che ha apportato numerose modifiche rendendo poco uniforme l'attuale situazione delle autostrade.

Consapevoli che le vecchie linee guida necessitano comunque di una revisione, a causa dell'evoluzione dell'applicazione e di WME, presenteremo nuove linee guida da applicare durante la verifica e la correzione delle modifiche non conformi.

## Note generali

### Tipo di strada: rampa

A differenza degli altri tipi di strada, le rampe non vengono mai ignorate per i tragitti a lunga distanza. Sono considerate essenziali per collegare le autostrade e altre strade principali.

Le rampe non hanno un parametro di preferenza di instradamento specifico (come «preferita» o «non preferita») applicato per impostazione predefinita. La loro priorità di instradamento è insita nella loro funzione di connettori.

I nomi delle rampe non compaiono sulla mappa dell'applicazione client, il che aiuta a ridurre l'affollamento. Tuttavia, compaiono nel testo delle istruzioni di svolta se necessario. Di conseguenza, può essere utile nominare i loro rami in modo diverso in WME quando si dividono a Y, senza dover mantenere un nome continuo o un nome alternativo.

### Sortie / Ausfahrt / Uscita - denominazione

Deve essere scritto nella lingua locale, le voci TTS sono già configurate per leggerlo o pronunciarlo correttamente in base alla lingua utilizzata nel client.

Ad esempio, una persona che usa Waze in francese sentirà «Sortie» anche se è scritto «Ausfahrt», e qualcuno che usa Waze in tedesco sentirà «Ausfahrt» anche se è scritto «Uscita».

### Simbolo «>»

Questo simbolo è ampiamente utilizzato in Europa e le voci TTS della maggior parte delle lingue sanno che devono leggerlo come «towards» / «richtung» / «direction» / ecc…

Anche se non è visualizzato visivamente, può essere utilizzato nel campo TTS di un'istruzione di svolta per essere pronunciato correttamente in molte lingue automaticamente.

### Wayfinders

Prima che esistessero gli scudi o le istruzioni di svolta, i wayfinders erano comuni nella mappatura. Consistevano in piccoli segmenti (5-20m) per forzare un'istruzione TTS a essere qualcosa di diverso dal nome della strada. Se ne trovi, eliminali e usa invece un'istruzione di svolta.

![](/freeways/image3.png)

## Istruzioni di mappatura

### Rampe di uscita

#### Denominazione dei segmenti

Non cambieremo molto rispetto al metodo precedente, in base alle note su «Tipo di strada: rampa» (vedi sezione precedente), e per semplicità poiché attualmente funziona bene durante la «lettura» dello svincolo osservandolo in WME.

Le rampe che escono dall'autostrada dovrebbero già assomigliare a questo:

* Rampa dall'autostrada  
  [**Sortie**/**Ausfahrt**/**Uscita** **##** **>** **Nome dello svincolo** **/** **Città** **1 / 2 / 3**…]
* Biforcazione a Y opzionale o situazionale  
  [**>** **Nome della città 1 / Nome della città 2**] e [**> Nome della città 3**] ad esempio

![](/freeways/image4.png)

![](/freeways/image5.png)

##### Avviso: modifiche non conformi

Alcune delle modifiche non conformi che abbiamo visto da un vecchio responsabile di paese consistevano nel rimuovere il simbolo «>» dopo la biforcazione a Y della rampa. Se vedi questo, riaggiungilo. È meglio visivamente in WME (non visualizzato comunque nell'applicazione) e serve ad avere l'istruzione di svolta TTS già corretta senza doverla modificare manualmente.

#### Istruzione di svolta

Le istruzioni di svolta subiranno un lieve cambiamento rispetto alle linee guida di mappatura precedenti.

In passato, avevamo l'abitudine di mettere tutto nel campo «Visual instructions», e a volte usavamo «>» nel campo «Towards».

A causa di Android Auto e CarPlay, che inseriscono automaticamente un punto tra le istruzioni visive e verso, che non possiamo rimuovere e su cui non abbiamo alcun controllo, è preferibile rimuovere il «>» per evitare di avere visuali strane come qui sotto:

![](/freeways/image6.png)

Tuttavia, deve essere conservato sui segmenti e nel TTS.

##### Biforcazioni a Y (alla fine della rampa di uscita)

Se applicabile (quando esiste), per la biforcazione a Y, non aggiungere né forzare istruzioni, lascia tutto secondo il valore predefinito, il nome della rampa sarà utilizzato per le istruzioni TTS.

![](/freeways/image7.png)

##### Istruzioni di svolta autostrada → rampa di uscita (nuova mappatura)

1. **Visual instructions**: Digita il **nome dello svincolo** (sia secondo [https://map.geo.admin.ch/](https://map.geo.admin.ch/) sia un portale geografico cantonale)
2. **Towards**: Digita le direzioni rimanenti, separate con / , senza ripetere una seconda volta il nome della città corrispondente al nome dello svincolo.
3. **Exit signs**: Inserisci il simbolo di uscita (scudo) e il suo numero
4. **TTS**: Tutto dovrebbe già essere corretto e secondo il nome principale del segmento di rampa.

   **Voice prompt** può essere lasciato per impostazione predefinita.

![](/freeways/image8.png)

### Rampe di entrata

#### Verifica e rimozione degli scudi

Durante l'aggiunta precoce degli scudi a WME, molti segmenti di rampa hanno avuto scudi aggiunti.

Questo non è necessario e gli scudi devono essere applicati solo sui segmenti reali di autostrada. Se trovi rampe di entrata con scudi, puoi rimuoverli.

![](/freeways/image9.png)

#### Denominazione dei segmenti

Analogamente alle uscite, i nomi delle rampe saranno visibili solo su WME, quindi possono essere lasciati come il vecchio metodo e servire già a ottenere un'istruzione TTS corretta senza bisogno di alcuna modifica supplementare.

Esempio: [**Axx** **>** **Città di direzione** (o città separate con un **/** )]

![](/freeways/image10.png)

#### Istruzione di svolta

Molto tempo fa, tutte le istruzioni di svolta sono già state mappate come nell'esempio qui sotto secondo il metodo originale. Non è necessario modificarle a meno che non siano state alterate o modificate da modifiche non conformi.

![](/freeways/image11.png)

##### Utilizzo opzionale degli scudi per le istruzioni di entrata

Ora che abbiamo aggiunto tutti i numeri Axx ed Exx durante il progetto Nexus, possiamo fare uso di scudi per le direzioni sui segmenti di entrata dell'autostrada.

TUTTAVIA, poiché questo richiedeva un'enorme quantità di editing manuale, ti consiglio di usarlo solo dove e se migliora l'instradamento in qualche modo.

Il metodo di mappatura originale (qui sopra) non pone alcun problema, quindi non ha bisogno di essere modificato.

Un esempio: Solo gli scudi nelle istruzioni visive / Direzione in Towards  
(Vedi l'immagine qui sotto)

![](/freeways/image12.png)

Questo funziona bene principalmente dove esistono i numeri Exx, poiché occupano spazio nel campo «Visual instructions», non lasciando spazio per il testo, quindi collochiamo la città/direzione nel campo «Towards». Questo può anche aiutare dove la città/direzione dopo Axx è troppo lunga da visualizzare.

Dove non c'è numero Exx, lo spazio accanto allo scudo Axx è generalmente sufficiente per visualizzare una città/direzione, come nella mappatura originale qui sopra.

### Svincoli autostradali

#### Esempi

![](/freeways/image13.png)

![](/freeways/image14.png)

![](/freeways/image15.png)

#### Denominazione dei segmenti

All'interno delle curve «Spaghetti» dello svincolo, per rendere i segmenti facilmente distinguibili su WME, nominali allo stesso modo delle direzioni sulle rampe di entrata.

Naturalmente, questi segmenti devono avere tutti i nomi alternativi Axx ed Exx configurati, come era l'obiettivo del progetto Nexus, questo dovrebbe già essere corretto.

![](/freeways/image16.png)

![](/freeways/image17.png)

#### Istruzioni di svolta

**Visual instructions**: Usa solo gli scudi

**Towards**: Usa le città/direzioni

**Exit signs**: Deve essere vuoto

**Voice prompt**: Adattalo a ciò che è meglio, poiché i nomi di strada continui possono eliminare qualsiasi istruzione e può essere necessario forzarne una

**TTS**: Dovrebbe già essere corretto in base al nome del segmento.

![](/freeways/image18.png)

### Geometria

*Priorità per le rampe lunghe - le rampe piccole/regolari non sono una priorità*

La Svizzera ha precedentemente adottato la seguente regola di mappatura:

![](/freeways/image19.png)

Tuttavia, è stato segnalato dallo staff durante le riunioni che mappare il nodo della rampa al punto A non è raccomandato né ottimale per l'instradamento e Falcon (il correttore GPS delle strade).

In base alle **raccomandazioni dello staff**, passeremo progressivamente al posizionamento del nodo all'ultimo punto di uscita legale (illustrato dal punto C nella schermata qui sopra).

*[Chiamata con registrazione dello staff: Off ramps – 2024_09_26 16_26 BST – Recording.mp4](https://drive.google.com/file/d/1eCMVwhmgbLBHPeZY6tYVySE6O9Y4NI-3/view?usp=sharing) (30 min, inglese)*

Inoltre, per le uscite lunghe non standard, possiamo fare uso della nuova funzione «Far turn» per aggiungere un'istruzione anticipata. Ma non usarla sulle rampe più piccole o standard.

Una priorità più alta sarà data alle rampe lunghe, e una priorità inferiore alle uscite standard con rampe corte, piuttosto che una mapraid, incoraggeremo i contributori a verificare e correggere queste ultime a loro piacimento e progressivamente nel corso dei mesi successivi.

## Restrizione «Vignetta obbligatoria»

Waze ora supporta la vignetta svizzera: i segmenti autostradali possono avere una restrizione condizionale che consente il passaggio solo ai conducenti che hanno aggiunto il pass *Vignette CH* nell'app (vedi [Vignetta autostradale](/it/wazers/vignette)).

### Dove posizionare la restrizione

Applica la restrizione **solo** su:

- i **segmenti di accesso** all'autostrada (rampe di entrata);
- i **segmenti di continuità in corrispondenza delle uscite** (il tratto che prosegue sull'autostrada subito dopo ogni uscita).

**Non** applicarla a tutti i segmenti dell'autostrada.

### Perché non su tutti i segmenti

Inizialmente la restrizione era posta su tutti i segmenti, come in Austria. Questo generava molte lamentele e UR: Waze sembrava «buggare» completamente.

Tecnicamente, una restrizione fa sì che l'app si comporti come se il segmento non esistesse. Un conducente senza vignetta nei suoi pass veniva quindi rimbalzato da sinistra a destra sulle piccole strade vicine, e l'app sembrava totalmente impazzita.

Limitando la restrizione ai segmenti di accesso e di continuità delle uscite, un conducente che entra senza aver configurato la vignetta ha un comportamento molto più «normale»: una volta superato il segmento con restrizione, l'app lo vede e lo posiziona correttamente sull'autostrada, poi lo invita a uscire il prima possibile, invece di perderlo e farlo saltare in ogni direzione.

Con questo modello, i conducenti pensano più a un problema di autorizzazione o di impostazione (la vignetta da attivare) che a un bug che rende l'app inutilizzabile.
