---
title: Convenzioni di codice
order: 5
---

<img class="banner-img is-narrow" src="/img/editors/pencil.png" alt="">

# Convenzioni di codice

Queste convenzioni valgono per **ogni script Waze della community svizzera**: sia il contributo al Helper sia uno script standalone. Due principi: restare conforme all'SDK ufficiale e scrivere codice pensato per essere **letto** prima di essere eseguito.

::: note Specifico per il Helper
Le meccaniche concrete di changelog e i18n qui sotto descrivono il repository del **Helper**. Sul tuo script, mantieni il principio e adatta l'implementazione.
:::

## Conformità all'SDK WME

Ogni interazione con l'editor passa dall'SDK ufficiale, tipizzato tramite `wme-sdk-typings`.

- Consultare la [documentazione dell'SDK](https://www.waze.com/editor/sdk/index.html) **prima** di implementare una funzionalità WME.
- **Non** inventare API: se manca un'informazione nei typings o nella documentazione, segnalarlo invece di indovinare.
- **Non** chiamare i global «pre-SDK» deprecati: non sono più disponibili.
- **Non** reimplementare ciò che un pacchetto npm consolidato fornisce già.
- Nessun hack del DOM che aggiri gli eventi dell'SDK.

## Scrivere per cervelli umani

Il codice è letto da cervelli umani la cui memoria di lavoro contiene ~4 elementi. Ottimizzare per il **carico cognitivo**, non per le prestazioni della macchina.

### Condizioni leggibili

Estrarre le espressioni complesse in variabili intermedie con nomi descrittivi.

```typescript
// Male: sovraccarico cognitivo
if (val > someConstant && (condition2 || condition3) && condition4 && !condition5) {
  // il lettore è esausto
}

// Bene: memoria di lavoro liberata
const isValid = val > someConstant;
const isAllowed = condition2 || condition3;
const isSecure = condition4 && !condition5;

if (isValid && isAllowed && isSecure) {
  // il lettore si concentra sull'intenzione
}
```

### Early return invece di if annidati

Trattare prima i casi limite, lasciare solo il percorso nominale.

```typescript
// Bene
function process(data) {
  if (!data) return;
  if (!data.isValid) return;
  if (!data.hasPermission) return;

  // percorso nominale al primo livello
}
```

### Altre regole

- **Commenti «perché», non «cosa»**: spiegare la motivazione o una logica non ovvia, non parafrasare il codice.
- **Moduli profondi anziché superficiali**: un'interfaccia semplice su un'implementazione ricca, non il contrario. Evitare strati di astrazione inutili.
- **Composizione anziché ereditarietà**: non costringere il lettore a inseguire il comportamento tra più classi.
- **Funzionalità minime del linguaggio**: leggere il codice non deve richiedere un livello esperto di TS/JS.
- **Valori auto-descrittivi**: costanti esplicite anziché mapping da memorizzare.
- **Non abusare del DRY**: un po' di duplicazione è meglio di un accoppiamento prematuro.
- **Evitare strati eccessivi**: saltare tra troppi piccoli metodi/classi è faticoso; la lettura lineare è più naturale.

## Traduzioni (i18n)

Ogni stringa visibile aggiunta deve essere inserita in `locales/<lang>/common.json` per **tutte e quattro le lingue** (de, en, fr, it), collegate tramite i18next. Una stringa presente in una sola lingua rompe la parità.

## Changelog

Documentare ogni modifica nel formato [Keep a Changelog](https://keepachangelog.com/it/1.0.0/) (versionamento semantico, categorie *Added / Changed / Deprecated / Removed / Fixed / Security*).

::: important Importante
Il changelog vive nella sezione Changelog di **tutti** i file README (`README.md`, `README.fr.md`, `README.de.md`, `README.it.md`); aggiornare ogni lingua. **Mai** creare un file `CHANGELOG.md` separato.
:::

## Dati svizzeri

La provenienza dei dati resta **swisstopo**. Aggiungendo o estendendo un livello, citare la fonte nel codice e nel testo di attribuzione.

::: quote Fonti
- Convenzioni del progetto: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/blob/main/.github/copilot-instructions.md
- Documentazione dell'SDK WME: https://www.waze.com/editor/sdk/index.html
:::
