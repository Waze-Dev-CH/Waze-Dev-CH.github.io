# Contribuer à la documentation Waze CH

Guide pratique pour éditer le site (VitePress, 4 langues). À lire avant de modifier le contenu.

## Workflow d'édition

1. **Preview en local** pendant l'écriture :

   ```bash
   npm install        # une fois
   npm run docs:dev   # http://localhost:8765, rechargement à chaud
   ```

2. **Vérifier le build avant de pousser** :

   ```bash
   npm run docs:build
   ```

   Le build échoue sur un **lien interne mort**. C'est le garde-fou principal : un build local vert = pas de lien cassé en prod.

3. **Brancher + PR.** Ne jamais pousser directement sur `main` : `main` déclenche le déploiement immédiat en production (GitHub Pages via `.github/workflows/deploy.yml`). On travaille sur une branche, on ouvre une PR, on relit le diff.

4. **Messages de commit** en [Conventional Commits](https://www.conventionalcommits.org/) :
   - `docs(editors): ajoute la page sur la numérotation des routes`
   - `fix(i18n): corrige un lien cassé dans la page scripteurs DE`
   - `style:` pour de la mise en forme pure, `chore:` pour la config.

## Parité des langues (i18n)

Le français est la **locale racine** (pas de préfixe). Les autres langues vivent sous un préfixe :

| Langue   | Dossier      | Exemple de page                    |
| -------- | ------------ | ---------------------------------- |
| Français | `docs/fr/`   | `docs/fr/editors/routing.md`       |
| English  | `docs/en/`   | `docs/en/editors/routing.md`       |
| Deutsch  | `docs/de/`   | `docs/de/editors/routing.md`       |
| Italiano | `docs/it/`   | `docs/it/editors/routing.md`       |

**Règle :** toute page créée ou renommée en français doit avoir son équivalent au **même chemin relatif** dans `en/`, `de/` et `it/` (au minimum un stub). Une page présente dans une seule langue casse la navigation entre langues.

Pour générer les versions traduites sans tout refaire à la main, utiliser le skill **`translate-page`** (voir `.claude/skills/translate-page/`) : il prend une page française et produit les fichiers en/de/it au bon endroit, en préservant la structure.

## Admonitions et style

### Blocs d'admonition personnalisés

12 types définis dans `.vitepress/config.ts`. Syntaxe :

```md
::: note
Contenu du bloc.
:::

::: important Titre personnalisé
Le titre après le type remplace le titre par défaut.
:::
```

Types disponibles et titre par défaut (français) :

| Type        | Titre par défaut | Usage typique                          |
| ----------- | ---------------- | -------------------------------------- |
| `note`      | Note             | information neutre                      |
| `important` | Important        | point à ne pas manquer                 |
| `success`   | Succès           | bonne pratique, résultat attendu       |
| `failure`   | Erreur           | piège, erreur courante à éviter        |
| `bug`       | Bug              | comportement défectueux connu          |
| `help`      | Conseil          | astuce, aide                           |
| `question`  | Question         | FAQ, point d'interrogation             |
| `example`   | Exemple          | cas concret                            |
| `reminder`  | Rappel           | rappel d'une règle déjà vue            |
| `quote`     | Citation         | citation, référence externe            |
| `abstract`  | Résumé           | synthèse en tête de page               |
| `people`    | Contact          | qui contacter, référents               |

> Les blocs VitePress natifs (`::: tip`, `::: warning`, `::: danger`, `::: info`, `::: details`) restent utilisables, mais préférer les types ci-dessus pour rester cohérent avec le thème.

### Piège des titres dans les langues non françaises

Les titres par défaut sont **codés en français uniquement**. Dans une page `en/`, `de/` ou `it/`, un `::: example` sans titre affichera **« Exemple »** (en français). Sur les pages traduites, **toujours fournir un titre explicite traduit** :

```md
::: example Example
...
:::
```

### Frontmatter

- Pages de contenu : `title: "..."` suffit.
- Pages d'accueil de langue (`docs/fr/index.md`, `docs/en/index.md`, ...) : `layout: home` avec hero et features.

## Arborescence et navigation

```
docs/
├── index.md            Accueil FR (layout: home)
├── fr/editors/index.md    Section éditeurs FR
├── fr/scripters/index.md  Section scripteurs FR
├── en/ de/ it/         Mêmes fichiers, traduits
└── public/             Images, SVG (servis à la racine /)
```

### Ajouter une page

1. Créer le fichier français, ex. `docs/fr/editors/routing.md`, avec son frontmatter `title:`.
2. Créer les équivalents `docs/en/editors/routing.md`, `docs/de/...`, `docs/it/...` (skill `translate-page`).
3. Si la page doit apparaître dans le menu, l'ajouter à la **`sidebar`** (et au besoin la **`nav`**) dans `.vitepress/config.ts`, pour les **4 locales**, avec les libellés traduits. La navigation n'est pas auto-générée.
4. Images : déposer dans `docs/public/`, référencer par `/nom-du-fichier.svg`.

### Vérification finale

```bash
npm run docs:build   # doit passer sans lien mort
```
