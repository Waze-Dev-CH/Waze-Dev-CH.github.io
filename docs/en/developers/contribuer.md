---
title: Contributing to the Helper
order: 1
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# Contributing to the WME Switzerland Helper

The [WME Switzerland Helper](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper) is developed as a team, in the open. This page describes how to set up a local development environment and submit a contribution.

::: abstract In short
Clone the repo, run `npm run watch`, load the local build into Tampermonkey, code on a branch, then open a Pull Request. Never push directly to `main`.
:::

## Joining the organization

To get write access to the repository or join the [Waze-Dev-CH](https://github.com/Waze-Dev-CH) organization, introduce yourself to the maintainers on the **[community Discord](https://discord.gg/dmxUwvTkk5)** (DACH region): that's the preferred channel to discuss it. For a one-off contribution, no access is needed: a Pull Request from a fork is enough.

## Before you start

The roadmap lives in **[GitHub Issues](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/issues)**. Read the open issues before starting to avoid duplicating work, and check that an issue doesn't already cover your idea. For a bug, open an issue with reproduction steps and WME screenshots.

## Prerequisites

- **Node.js** and **npm** (installed together)
- **git** and a **GitHub** account
- **Tampermonkey** in your browser
- Clone the repository:

```bash
git clone https://github.com/Waze-Dev-CH/WME-Switzerland-Helper.git
cd WME-Switzerland-Helper
npm install
```

::: help Dev container
The repository ships a `.devcontainer` (VS Code / GitHub Codespaces) with a preconfigured environment, if you would rather not install anything locally.
:::

## Development environment

Start watch mode: it recompiles the script on every change (Rollup), regenerates translations (i18next) and applies Prettier + ESLint automatically.

```bash
npm run watch
```

The local build is written to `.out/main.user.js`. To load it into the WME:

1. In Tampermonkey, create a new script and paste the contents of **`header-dev.js`**.
2. Adjust the `@require file://.../.out/main.user.js` line to the absolute path of your clone.
3. In the Tampermonkey **extension** settings (in the browser, not in the script editor), enable **"Local file access"** ([see the Tampermonkey FAQ](https://www.tampermonkey.net/faq.php?locale=en#Q204)).
4. Open the [Waze Map Editor](https://www.waze.com/editor) and reload the page after each rebuild.

::: note Note
`header-dev.js` and `header.js` must stay identical, except for the `@require` field (local file in dev, release URL in production).
:::

### Tests

Tests run with Vitest; the `*.test.ts` files live next to the code they cover in `src/`.

```bash
npm test          # single run
npm run test:watch  # continuous
```

## Contribution flow

The project works through **Pull Requests**; `main` is protected.

1. Start from an up-to-date `main`, then create a branch:

   ```bash
   git checkout main && git pull
   git checkout -b feat/my-feature
   ```

2. Code following the [code conventions](/en/developers/conventions): WME SDK conformance and code written to be read.
3. Commits in [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`…).

::: success Checklist before opening the PR
- `npm test` green and `npm run build` error-free
- eslint clean (`npx eslint .`, also run by `npm run watch`)
- **Smoke test in the WME**: load the script, toggle each layer, check the rendering
- i18n strings added for all four languages in `locales/<lang>/common.json`
- Changelog entry in **every** README (see [conventions](/en/developers/conventions#changelog))
:::

4. Push the branch and open a **Pull Request** against `main`, then **assign a maintainer as reviewer**.
5. The GitHub Actions CI (`release.yml`) validates the PR. Address the comments by pushing fixes to the same branch; note the smoke-test results in the description (no automated coverage). A maintainer approves and merges.

::: important Important
- **Never push directly to `main`**, everything goes through a reviewed PR.
- **Do not create a tag or a release** yourself; this is reserved for maintainers.
- External contributor (without write access to the org)? Fork the repository and open the PR from your fork.
:::

## After the merge

A release is produced by a maintainer: `npm run release` bumps the version (`package.json` → `header.js`) and regenerates the published build in `releases/`, which users install via Tampermonkey.

::: quote Sources
- Repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- README and install guide: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper#readme
- WME SDK documentation: https://www.waze.com/editor/sdk/index.html
:::
