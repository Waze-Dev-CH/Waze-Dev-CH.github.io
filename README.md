# Waze CH — Documentation communautaire

Documentation pour les éditeurs et scripteurs Waze en Suisse.

**Site:** https://waze-dev-ch.github.io

## Langues / Languages

Disponible en français (défaut), anglais, allemand et italien.

```
docs/           Français
docs/en/        English
docs/de/        Deutsch
docs/it/        Italiano
```

## Tech

- [VitePress](https://vitepress.dev) — générateur de site statique
- GitHub Pages — hébergement, déployé automatiquement sur push vers `main`

## Développement local

```bash
npm install
npm run docs:dev   # http://localhost:8765
```

## Structure des contenus

Chaque langue contient deux sections :

- `editors/` — bonnes pratiques d'édition de la carte
- `scripters/` — ressources pour la contribution aux scripts

Quand tu ajoutes une page dans une langue, ajoute un stub dans les 3 autres.
