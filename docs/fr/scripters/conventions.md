---
title: Conventions de code
order: 5
---

<img class="banner-img is-narrow" src="/img/editors/pencil.png" alt="">

# Conventions de code

Ces conventions valent pour **tout script Waze de la communauté suisse** : contribution au Helper comme script standalone. Deux principes : rester conforme au SDK officiel, et écrire un code pensé pour être **relu** avant d'être exécuté.

::: note Spécifique au Helper
Les mécaniques concrètes de changelog et d'i18n ci-dessous décrivent le dépôt du **Helper**. Sur votre propre script, gardez le principe et adaptez la mise en œuvre.
:::

## Conformité au SDK WME

Toute interaction avec l'éditeur passe par le SDK officiel, typé via `wme-sdk-typings`.

- Consulter la [documentation du SDK](https://www.waze.com/editor/sdk/index.html) **avant** d'implémenter une fonctionnalité liée au WME.
- Ne **pas** inventer d'API : si une information manque dans les typings ou la doc, le signaler plutôt que de deviner.
- Ne **pas** appeler les globals « pré-SDK » dépréciés : ils ne sont plus disponibles.
- Ne **pas** réimplémenter ce qu'un paquet npm établi fournit déjà.
- Pas de hack DOM qui court-circuite les événements du SDK.

## Écrire pour des cerveaux humains

Le code est lu par des cerveaux humains dont la mémoire de travail tient ~4 éléments. On optimise la **charge cognitive**, pas la performance machine.

### Conditions lisibles

Extraire les expressions complexes dans des variables intermédiaires au nom explicite.

```typescript
// Mauvais : surcharge cognitive
if (val > someConstant && (condition2 || condition3) && condition4 && !condition5) {
  // le lecteur est épuisé
}

// Bon : mémoire de travail libérée
const isValid = val > someConstant;
const isAllowed = condition2 || condition3;
const isSecure = condition4 && !condition5;

if (isValid && isAllowed && isSecure) {
  // le lecteur se concentre sur l'intention
}
```

### Early returns plutôt que ifs imbriqués

Traiter les cas limites d'abord, ne laisser que le chemin nominal.

```typescript
// Bon
function process(data) {
  if (!data) return;
  if (!data.isValid) return;
  if (!data.hasPermission) return;

  // chemin nominal au premier niveau
}
```

### Autres règles

- **Commentaires « pourquoi », pas « quoi »** : expliquer la motivation ou une logique non évidente, pas paraphraser le code.
- **Modules profonds > superficiels** : une interface simple sur une implémentation riche, pas l'inverse. Éviter les couches d'abstraction inutiles.
- **Composition plutôt qu'héritage** : ne pas forcer le lecteur à suivre un comportement à travers plusieurs classes.
- **Sous-ensemble minimal de TS/JS** : pas besoin d'un niveau expert du langage pour lire le code.
- **Valeurs auto-descriptives** : constantes explicites plutôt que mappings à mémoriser.
- **Ne pas abuser du DRY** : un peu de duplication vaut mieux qu'un couplage prématuré.
- **Éviter les couches excessives** : sauter entre trop de petites méthodes/classes est fatigant ; la lecture linéaire est plus naturelle.

## Traductions (i18n)

Toute chaîne visible ajoutée doit être renseignée dans `locales/<lang>/common.json` pour **les quatre langues** (de, en, fr, it), câblées via i18next. Une chaîne présente dans une seule langue casse la parité.

## Changelog

Documenter chaque changement au format [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/) (versionnage sémantique, catégories *Added / Changed / Deprecated / Removed / Fixed / Security*).

::: important
Le changelog vit dans la section Changelog de **tous** les README (`README.md`, `README.fr.md`, `README.de.md`, `README.it.md`) ; mettre à jour toutes les langues. **Ne jamais** créer de fichier `CHANGELOG.md` séparé.
:::

## Données suisses

La provenance des données reste **swisstopo**. En ajoutant ou en étendant une couche, citer la source dans le code et dans le texte d'attribution.

::: quote Sources
- Conventions du projet : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/blob/main/.github/copilot-instructions.md
- Documentation du SDK WME : https://www.waze.com/editor/sdk/index.html
:::
