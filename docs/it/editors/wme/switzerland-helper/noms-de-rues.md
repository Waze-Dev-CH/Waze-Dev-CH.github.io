---
title: Controllo dei nomi delle strade
description: Confrontare i nomi delle strade Waze con il repertorio ufficiale svizzero e correggere le differenze.
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/magnifier.png" alt="">

# Controllo dei nomi delle strade

Il controllo confronta il nome di ogni segmento visibile con il **repertorio ufficiale
svizzero delle strade** e segnala le differenze, con una correzione in un clic.

Si limita a constatare una differenza rispetto al registro ufficiale. Le regole di
denominazione, invece, sono descritte in
[Denominazione delle strade](/it/editors/cartographie/nommage-routes).

## Attivare e scansionare

Il controllo è **attivo per impostazione predefinita**. Si accende e si spegne
indifferentemente dalla casella **Nomi delle strade** del selettore dei livelli, oppure
dall'interruttore **Attivo** della scheda **CH · Nomi delle vie**.

L'analisi si riavvia a ogni spostamento della mappa, a condizione di essere abbastanza
ingranditi. Se la vista è troppo ampia, il banner propone un pulsante
**Scansiona quest'area**, che richiede uno o due minuti e resta annullabile.

Il pulsante **Riscansiona** rilegge il repertorio ufficiale, utile dopo aver corretto una
serie di segmenti.

## Leggere le segnalazioni

Le differenze sono raggruppate per nome e per tipo. Ogni gruppo mostra una pastiglia colorata
e il tipo di differenza per esteso.

| Tipo | Che cosa segnala |
| --- | --- |
| `COSMETIC` | Solo tipografia: maiuscole, apostrofo, spazi |
| `VARIANT` | Abbreviazione, accento o articolo mancante |
| `BILINGUAL` | Strada bilingue: una sola lingua come nome principale, l'altra come alternativo |
| `NEAR` | Probabile errore di battitura |
| `WRONG_TYPE` | Tipo di via diverso o mancante (Chemin al posto di Route) |
| `WRONG_STREET` | Il nome è valido, ma è quello di un'altra strada |
| `WRONG_CITY` | Il nome esiste, ma in un'altra località |
| `NOT_FOUND` | Introvabile nel repertorio ufficiale |
| `UNNAMED` | Segmento senza nome, mentre una strada ufficiale passa al di sotto |
| `UNDER_LOCK` | Blocco più basso del minimo svizzero |
| `OVER_LOCK` | Blocco più alto del minimo svizzero, spesso intenzionale |
| `MICRO_SEGMENT` | Segmento di meno di 5 m, rotatorie escluse |
| `LOOP` | Anello di meno di 3 segmenti, da dividere |
| `NARROW_MISUSE` | Strada stretta usata male: senso unico, oppure meno di 50 m |
| `UNNAMED_NO_MATCH` | Senza nome, e nulla di ufficiale al di sotto: il più delle volte normale |

::: important `WRONG_STREET` richiede sempre una verifica
Questa segnalazione non deriva da un confronto di nomi ma dalla posizione del segmento :
un'altra strada ufficiale passa al di sotto. Ti propone quindi di sostituire un nome che
sembra perfettamente corretto.

Guarda la mappa prima di accettare. I link ↗ di ogni riga aprono il punto esatto sulla carta
federale e sulla carta cantonale, quando esiste.
:::

I due controlli di blocco e `WRONG_STREET` non sono attivi al di sotto del livello editor 3,
e `UNNAMED_NO_MATCH` è spento per impostazione predefinita perché segnala soprattutto casi
normali. Tutti restano attivabili nelle impostazioni.

## Correggere

Tre percorsi portano alla stessa correzione : il pulsante **Correggi** dell'elenco, quello
del riquadro aggiunto in cima al pannello del segmento, o la scorciatoia
<kbd>Alt</kbd>+<kbd>F</kbd>.

I nomi alternativi esistenti vengono conservati, e un nome bilingue viene aggiunto come
alternativo anziché sostituire il principale.

Il pulsante **Ignora** nasconde una segnalazione che giudichi falsa. Queste esclusioni
restano sul tuo computer, e **Reimposta** le ripristina tutte in una volta.

::: important La correzione di gruppo richiede il livello editor 3
Al di sotto, i pulsanti **Correggi tutti** e **Ignora tutti** non appaiono. La correzione
segmento per segmento, invece, resta aperta a tutti.

Una correzione di gruppo tratta **al massimo 50 segmenti** alla volta, chiede conferma oltre
i 20 e si ferma al primo errore indicando dove si è bloccata.
:::

## La finestra mobile

Il WME passa la barra laterale al suo pannello di selezione non appena si clicca un segmento :
la scheda del controllo sparisce quindi proprio nel momento in cui la si utilizza.

Il pulsante **Stacca**, oppure <kbd>Alt</kbd>+<kbd>W</kbd>, sposta l'elenco in una piccola
finestra che resta visibile in permanenza. Si sposta dalla sua barra del titolo, si
ridimensiona dal suo angolo e ritrova il suo posto alla sessione successiva. **Aggancia** la
rimette nella barra laterale.

## Scorciatoie da tastiera

| Scorciatoia | Azione |
| --- | --- |
| <kbd>Alt</kbd>+<kbd>N</kbd> | Selezionare la differenza successiva |
| <kbd>Alt</kbd>+<kbd>F</kbd> | Correggere il segmento selezionato |
| <kbd>Alt</kbd>+<kbd>W</kbd> | Staccare o agganciare la finestra |

Sono tutte rimappabili nelle impostazioni della tastiera del WME.

## Impostazioni

Le impostazioni permettono soprattutto di scegliere **quali tipi di strada** vengono
verificati (le strade urbane e le strade principali lo sono d'origine, non i sentieri né le
autostrade) e **quali tipi di differenze** vuoi vedere.

Il resto serve a regolare la comodità : mostrare il nome atteso sulla mappa, accettare un
nome alternativo come corretto (utile nei comuni bilingui), nascondere i segmenti bloccati al
di sopra del tuo livello, oppure cambiare la lingua del controllo.

::: reminder Un «introvabile» non è sempre un errore
Nei centri urbani molto densi il repertorio ufficiale non restituisce tutto, e strade
corrette possono essere segnalate come introvabili. Il banner avvisa quando è il caso : evita
allora le correzioni di gruppo.
:::

::: quote Fonti
- Repository dello script: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Repertorio ufficiale delle strade: swisstopo, https://www.geo.admin.ch
:::
