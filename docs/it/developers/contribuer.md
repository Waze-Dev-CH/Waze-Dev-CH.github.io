---
title: Contribuire al Helper
order: 1
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# Contribuire al WME Switzerland Helper

Il [WME Switzerland Helper](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper) è sviluppato in team, in modo open source. Questa pagina descrive come configurare un ambiente di sviluppo locale e inviare un contributo.

::: abstract In sintesi
Si clona il repository, si lancia `npm run watch`, si carica la build locale in Tampermonkey, si programma su un branch, poi si apre una Pull Request. Mai fare push diretto su `main`.
:::

## Unirsi all'organizzazione

Per ottenere l'accesso in scrittura al repository o unirti all'organizzazione [Waze-Dev-CH](https://github.com/Waze-Dev-CH), presentati ai maintainer sul **[Discord della community](https://discord.gg/dmxUwvTkk5)** (zona DACH): è il canale privilegiato per discuterne. Per un contributo occasionale non serve alcun accesso: una Pull Request da un fork è sufficiente.

## Prima di iniziare

La roadmap vive nelle **[GitHub Issues](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/issues)**. Leggere le issue aperte prima di iniziare per evitare duplicati e verificare che una issue non copra già la tua idea. Per un bug, aprire una issue con i passi di riproduzione e screenshot del WME.

## Prerequisiti

- **Node.js** e **npm** (installati insieme)
- **git** e un account **GitHub**
- **Tampermonkey** nel browser
- Clonare il repository:

```bash
git clone https://github.com/Waze-Dev-CH/WME-Switzerland-Helper.git
cd WME-Switzerland-Helper
npm install
```

::: help Dev container
Il repository fornisce un `.devcontainer` (VS Code / GitHub Codespaces) con l'ambiente preconfigurato, se preferisci non installare nulla localmente.
:::

## Ambiente di sviluppo

Avviare la modalità watch: ricompila lo script a ogni modifica (Rollup), rigenera le traduzioni (i18next) e applica Prettier + ESLint automaticamente.

```bash
npm run watch
```

La build locale viene scritta in `.out/main.user.js`. Per caricarla nel WME:

1. In Tampermonkey, creare un nuovo script e incollarvi il contenuto di **`header-dev.js`**.
2. Adattare la riga `@require file://.../.out/main.user.js` al percorso assoluto del tuo clone.
3. Nelle impostazioni dell'**estensione** Tampermonkey (nel browser, non nell'editor dello script), attivare **«Local file access»** ([vedi la FAQ di Tampermonkey](https://www.tampermonkey.net/faq.php?locale=en#Q204)).
4. Aprire il [Waze Map Editor](https://www.waze.com/editor) e ricaricare la pagina dopo ogni rebuild.

::: note Nota
`header-dev.js` e `header.js` devono restare identici, tranne per il campo `@require` (file locale in sviluppo, URL di release in produzione).
:::

### Test

I test girano con Vitest; i file `*.test.ts` vivono accanto al codice che coprono in `src/`.

```bash
npm test          # una passata
npm run test:watch  # in continuo
```

## Flusso di contribuzione

Il progetto funziona tramite **Pull Request**; `main` è protetto.

1. Partire da un `main` aggiornato, poi creare un branch:

   ```bash
   git checkout main && git pull
   git checkout -b feat/mia-funzionalita
   ```

2. Programmare seguendo le [convenzioni di codice](/it/developers/conventions): conformità all'SDK WME e codice pensato per essere letto.
3. Commit in [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`…).

::: success Checklist prima di aprire la PR
- `npm test` verde e `npm run build` senza errori
- eslint pulito (`npx eslint .`, eseguito anche da `npm run watch`)
- **Smoke test nel WME**: caricare lo script, attivare ogni livello, verificare il rendering
- Stringhe i18n aggiunte per tutte e quattro le lingue in `locales/<lang>/common.json`
- Voce di Changelog in **ogni** README (vedi [convenzioni](/it/developers/conventions#changelog))
:::

4. Fare push del branch e aprire una **Pull Request** verso `main`, poi **assegnare un maintainer come reviewer**.
5. La CI di GitHub Actions (`release.yml`) valida la PR. Rispondere ai commenti facendo push delle correzioni sullo stesso branch; annotare i risultati dello smoke test nella descrizione (nessuna copertura automatica). Un maintainer approva e unisce.

::: important Importante
- **Mai fare push diretto su `main`**, tutto passa da una PR revisionata.
- **Non creare tag né release** da soli; è riservato ai maintainer.
- Contributore esterno (senza permessi di scrittura sull'organizzazione)? Forkare il repository e aprire la PR dal tuo fork.
:::

## Dopo il merge

Una release è prodotta da un maintainer: `npm run release` incrementa la versione (`package.json` → `header.js`) e rigenera la build pubblicata in `releases/`, che gli utenti installano tramite Tampermonkey.

::: quote Fonti
- Repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- README e guida all'installazione: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper#readme
- Documentazione dell'SDK WME: https://www.waze.com/editor/sdk/index.html
:::
