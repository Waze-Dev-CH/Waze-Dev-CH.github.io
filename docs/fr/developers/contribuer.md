---
title: Contribuer au Helper
order: 1
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# Contribuer au WME Switzerland Helper

Le [WME Switzerland Helper](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper) est développé en équipe, en open source. Cette page décrit comment mettre en place un environnement de développement local et soumettre une contribution.

::: abstract En résumé
On clone le dépôt, on lance `npm run watch`, on charge le build local dans Tampermonkey, on code sur une branche, puis on ouvre une Pull Request. Jamais de push direct sur `main`.
:::

## Rejoindre l'organisation

Pour obtenir un accès en écriture au dépôt ou rejoindre l'organisation [Waze-Dev-CH](https://github.com/Waze-Dev-CH), présentez-vous aux mainteneurs sur le **[Discord de la communauté](https://discord.gg/dmxUwvTkk5)** (zone DACH) : c'est le canal privilégié pour en discuter. Pour une contribution ponctuelle, aucun accès n'est nécessaire : une Pull Request depuis un fork suffit.

## Avant de commencer

La feuille de route passe par les **[GitHub Issues](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/issues)**. Lire les issues ouvertes avant de démarrer pour éviter les doublons, et vérifier qu'une issue ne couvre pas déjà votre idée. Pour un bug, ouvrir une issue avec les étapes de reproduction et des captures du WME.

## Prérequis

- **Node.js** et **npm** (installés ensemble)
- **git** et un compte **GitHub**
- **Tampermonkey** dans votre navigateur
- Cloner le dépôt :

```bash
git clone https://github.com/Waze-Dev-CH/WME-Switzerland-Helper.git
cd WME-Switzerland-Helper
npm install
```

::: help Dev container
Le dépôt fournit un `.devcontainer` (VS Code / GitHub Codespaces) avec l'environnement préconfiguré, si vous préférez ne rien installer localement.
:::

## Environnement de développement

Lancer le mode watch : il recompile le script à chaque modification (Rollup), régénère les traductions (i18next) et applique Prettier + ESLint automatiquement.

```bash
npm run watch
```

Le build local est écrit dans `.out/main.user.js`. Pour le charger dans le WME :

1. Dans Tampermonkey, créer un nouveau script et y coller le contenu de **`header-dev.js`**.
2. Adapter la ligne `@require file://.../.out/main.user.js` au chemin absolu de votre clone.
3. Dans les réglages de l'**extension** Tampermonkey (côté navigateur, pas dans l'éditeur du script), activer **« Local file access »** ([voir la FAQ Tampermonkey](https://www.tampermonkey.net/faq.php?locale=en#Q204)).
4. Ouvrir le [Waze Map Editor](https://www.waze.com/editor) et recharger la page à chaque rebuild.

::: note
`header-dev.js` et `header.js` doivent rester identiques, à l'exception du champ `@require` (fichier local en dev, URL de release en production).
:::

### Tests

Les tests tournent avec Vitest, les fichiers `*.test.ts` vivent à côté du code qu'ils couvrent dans `src/`.

```bash
npm test          # une passe
npm run test:watch  # en continu
```

## Flux de contribution

Le projet fonctionne par **Pull Request** ; `main` est protégée.

1. Partir d'un `main` à jour, puis créer une branche :

   ```bash
   git checkout main && git pull
   git checkout -b feat/ma-fonctionnalite
   ```

2. Coder en suivant les [conventions de code](/fr/developers/conventions) : conformité au SDK WME et code pensé pour la relecture.
3. Commits en [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`…).

::: success Checklist avant d'ouvrir la PR
- `npm test` au vert et `npm run build` sans erreur
- eslint propre (`npx eslint .`, aussi lancé par `npm run watch`)
- **Smoke test dans le WME** : charger le script, activer chaque couche, vérifier le rendu
- Chaînes i18n ajoutées pour les 4 langues dans `locales/<lang>/common.json`
- Entrée Changelog dans **tous** les README (voir [conventions](/fr/developers/conventions#changelog))
:::

4. Pousser la branche et ouvrir une **Pull Request** vers `main`, puis **assigner un mainteneur comme reviewer**.
5. La CI GitHub Actions (`release.yml`) valide la PR. Répondre aux commentaires en poussant des correctifs sur la même branche ; noter les résultats du smoke test dans la description (pas de couverture automatique). Un mainteneur approuve et merge.

::: important
- **Jamais de push direct sur `main`**, tout passe par une PR relue.
- **Ne pas créer de tag ni de release** soi-même : c'est réservé aux mainteneurs.
- Contributeur externe (sans droit d'écriture sur l'org) ? Forker le dépôt et ouvrir la PR depuis votre fork.
:::

## Après le merge

Une release est produite par un mainteneur : `npm run release` incrémente la version (`package.json` → `header.js`) et régénère le build publié dans `releases/`, que les utilisateurs installent via Tampermonkey.

::: quote Sources
- Dépôt : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- README et guide d'installation : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper#readme
- Documentation du SDK WME : https://www.waze.com/editor/sdk/index.html
:::
