# CLAUDE.md — Waze CH Documentation

Documentation communautaire pour les éditeurs et scripteurs Waze en Suisse.
Construit avec VitePress, déployé sur GitHub Pages.

## Structure

```
docs/fr/                Contenu français (locale /fr/)
docs/en/                Contenu anglais
docs/de/                Contenu allemand
docs/it/                Contenu italien
docs/public/            Assets statiques servis à la racine (/)
.vitepress/config.ts    Config du site — i18n, nav, sidebar
.vitepress/theme/       Thème personnalisé (CSS + composants Vue)
```

## Conventions

- Le français est sous `/fr/` ; toutes les locales ont leur sous-répertoire (`fr/`, `en/`, `de/`, `it/`)
- Chaque locale a `editors/index.md` et `scripters/index.md`
- Quand on ajoute une page dans une langue, on ajoute un stub dans les 3 autres
- La sidebar est configurée statiquement dans `config.ts` (pas d'auto-génération)
- Blocs d'admonition personnalisés (définis dans `config.ts`) : `note`, `example`, `question`, `quote`, `reminder`, `people`, `bug`, `abstract`, `important`, `failure`, `help`, `success` (titres par défaut en français uniquement)
- Ne pas mettre de séparateur `---` avant les titres `#` (h1) ni `##` (h2) — VitePress l'insère automatiquement. Le `---` reste utilisable dans d'autres contextes si nécessaire.
- Assets publics (images, SVG) : dans `docs/public/`, accessibles à `/nom-du-fichier`

Guide d'édition détaillé : voir `CONTRIBUTING.md` (workflow, parité i18n, admonitions, navigation).
Pour traduire une page fr vers en/de/it : skill `translate-page` (`.claude/skills/translate-page/`).

## Développement

```bash
npm install
npm run docs:dev   # http://localhost:8765
```

## Commits

Utiliser le format **Conventional Commits** :

```
<type>: <description courte>

[corps optionnel]
```

| Type | Usage |
|------|-------|
| `docs:` | Ajout ou modification de pages de documentation |
| `feat:` | Nouvelle fonctionnalité (composant, page, section) |
| `fix:` | Correction d'une erreur de contenu ou de configuration |
| `chore:` | Config, CI, outillage, fichiers de projet |
| `refactor:` | Restructuration sans changement de contenu |
| `style:` | Formatage, typos, mise en forme |

## Déploiement

Push sur `main` → GitHub Actions build + deploy sur Pages automatiquement.

## Ajouter du contenu

Pour ajouter une nouvelle page (ex: `docs/editors/routing.md`) :
1. Créer le fichier avec frontmatter `title:`
2. L'ajouter dans la sidebar de `config.ts` pour la locale correspondante
3. Créer les stubs équivalents dans les 3 autres langues

## Couleurs et marque

- Waze blue : `#05C8F0`
- Dark bg : `#0f1e2a`
- Accent Swiss red : `#CC0014`
- Logo : `docs/public/waze-ch.svg` (map pin bleu + croix suisse blanche)
