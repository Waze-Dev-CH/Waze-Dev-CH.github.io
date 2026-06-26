# Restructuration doc fr/editors Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructurer `docs/fr/editors/` en 4 sections (WME, Cartographie, Communauté) dans des sous-dossiers, migrer le sidebar vers `vitepress-sidebar` auto-généré, et créer de nouvelles pages WME enrichies depuis Google Support.

**Architecture:** Flat → subdirs (`wme/`, `cartographie/`, `communaute/`). Sidebar généré automatiquement par `vitepress-sidebar` en scannant l'arborescence et en triant par `order:` frontmatter. Nouvelles pages WME créées depuis fetch Google Support. Pages `organisation-communaute.md` et `area-manager.md` dissoutes dans de nouvelles pages ciblées.

**Tech Stack:** VitePress 1.x, `vitepress-sidebar` (npm), Markdown, TypeScript (config.ts)

## Global Constraints

- Branche : `refactor/doc-structure` (déjà créée, basée sur main)
- Scope : `docs/fr/editors/` uniquement — locales `en/`, `de/`, `it/` non touchées
- `docs/fr/_shared/` reste à sa place — seuls les chemins d'include changent dans les pages déplacées
- Zéro duplication : liens cross-sections plutôt que copie de contenu
- Tone : vouvoiement sauf `premiers-pas.md` (tutoiement, guide pas à pas)
- Build command : `npm run docs:build` (depuis la racine)
- Conventional commits : `refactor(fr/editors):` pour déplacements, `feat(fr/editors):` pour nouvelles pages
- `srcExclude: ['**/_shared/**', 'superpowers/**']` dans config.ts

---

## File Map

### Modifiés
- `.vitepress/config.ts` — import vitepress-sidebar, remplacer sidebar manuelle, srcExclude
- `package.json` — ajouter `vitepress-sidebar` en dépendance
- `docs/fr/editors/index.md` — allégée (supprimer ToC, niveaux, Permalink, Serveurs, Ressources)
- `docs/fr/editors/premiers-pas.md` — enrichie (liens cross-sections explicites)

### Déplacés (WME)
| Source | Destination |
|--------|-------------|
| `docs/fr/editors/legende-carte.md` | `docs/fr/editors/wme/legende-carte.md` |
| `docs/fr/editors/routing.md` | `docs/fr/editors/wme/routing.md` |
| `docs/fr/editors/fermetures.md` | `docs/fr/editors/wme/fermetures.md` |
| `docs/fr/editors/fermeture-urs.md` | `docs/fr/editors/wme/fermeture-urs.md` |
| `docs/fr/editors/virages-difficiles.md` | `docs/fr/editors/wme/virages-difficiles.md` |
| `docs/fr/editors/lanes-passages-niveau.md` | `docs/fr/editors/wme/lanes-passages-niveau.md` |
| `docs/fr/editors/dangers-permanents.md` | `docs/fr/editors/wme/dangers-permanents.md` |
| `docs/fr/editors/delais-mise-a-jour.md` | `docs/fr/editors/wme/delais-mise-a-jour.md` |

### Déplacés (Cartographie)
| Source | Destination |
|--------|-------------|
| `docs/fr/editors/regles-edition.md` | `docs/fr/editors/cartographie/regles-edition.md` |
| `docs/fr/editors/nommage-routes.md` | `docs/fr/editors/cartographie/nommage-routes.md` |
| `docs/fr/editors/geometrie-segments.md` | `docs/fr/editors/cartographie/geometrie-segments.md` |
| `docs/fr/editors/intersections.md` | `docs/fr/editors/cartographie/intersections.md` |
| `docs/fr/editors/ronds-points.md` | `docs/fr/editors/cartographie/ronds-points.md` |
| `docs/fr/editors/limites-vitesse.md` | `docs/fr/editors/cartographie/limites-vitesse.md` |
| `docs/fr/editors/parkings.md` | `docs/fr/editors/cartographie/parkings.md` |
| `docs/fr/editors/chemins-agricoles.md` | `docs/fr/editors/cartographie/chemins-agricoles.md` |
| `docs/fr/editors/chemins-pietons.md` | `docs/fr/editors/cartographie/chemins-pietons.md` |
| `docs/fr/editors/numeros-autoroutes.md` | `docs/fr/editors/cartographie/numeros-autoroutes.md` |
| `docs/fr/editors/freeways-guidelines.md` | `docs/fr/editors/cartographie/freeways-guidelines.md` |
| `docs/fr/editors/vignette.md` | `docs/fr/editors/cartographie/vignette.md` |
| `docs/fr/editors/stickair-geneve.md` | `docs/fr/editors/cartographie/stickair-geneve.md` |

### Déplacés (Communauté)
| Source | Destination |
|--------|-------------|
| `docs/fr/editors/faq.md` | `docs/fr/editors/communaute/faq.md` |
| `docs/fr/editors/ressources.md` | `docs/fr/editors/communaute/ressources.md` |

### Créés (WME — nouvelles pages)
- `docs/fr/editors/wme/index.md` — vue d'ensemble WME
- `docs/fr/editors/wme/interface.md` — interface WME (fetch Google Support)
- `docs/fr/editors/wme/segments.md` — segments (fetch Google Support)
- `docs/fr/editors/wme/restrictions-virage.md` — turn restrictions (fetch Google Support)
- `docs/fr/editors/wme/niveaux.md` — niveaux éditeur (include _shared)
- `docs/fr/editors/wme/roles.md` — rôles AM/SM/RTC/CM (fusion)
- `docs/fr/editors/wme/scripts.md` — userscripts CH

### Créés (index sections)
- `docs/fr/editors/cartographie/index.md` — vue d'ensemble cartographie
- `docs/fr/editors/communaute/index.md` — vue d'ensemble communauté

### Dissouts (contenu migré, fichiers supprimés en Phase 3)
- `docs/fr/editors/organisation-communaute.md` → niveaux → `wme/niveaux.md`, rôles → `wme/roles.md`, communauté → `communaute/index.md`
- `docs/fr/editors/area-manager.md` → `wme/roles.md`

---

## Task 0: Setup — vitepress-sidebar + config.ts

**Files:**
- Modify: `package.json`
- Modify: `.vitepress/config.ts`

- [ ] **Installer vitepress-sidebar**

```bash
npm install vitepress-sidebar
```

Vérifier que `package.json` contient maintenant `"vitepress-sidebar"` dans `dependencies`.

- [ ] **Mettre à jour config.ts — import + generateSidebar**

En haut de `.vitepress/config.ts`, après les imports existants, ajouter :

```ts
import { generateSidebar } from 'vitepress-sidebar';

const sections = [
  'fr/editors', 'fr/scripters',
  'en/editors', 'en/scripters',
  'de/editors', 'de/scripters',
  'it/editors', 'it/scripters',
];

const sidebar = generateSidebar(
  sections.map((section) => ({
    documentRootPath: 'docs',
    scanStartPath: section,
    resolvePath: `/${section}/`,
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    frontmatterOrderDefaultValue: 999,
    includeFolderIndexFile: false,
    folderLinkNotIncludesFileName: true,
    collapsed: false,
    collapseDepth: 2,
    excludeByGlobPattern: ['**/_shared/**'],
  }))
);
```

- [ ] **Mettre à jour config.ts — remplacer les sidebars manuels**

Dans `defineConfig`, pour CHAQUE locale (`fr`, `en`, `de`, `it`), remplacer le bloc `sidebar: { ... }` manuel dans `themeConfig` par :

```ts
sidebar,
```

La variable `sidebar` générée contient toutes les clés (`/fr/editors/`, `/fr/scripters/`, etc.) — VitePress sélectionne automatiquement l'entrée correspondant à l'URL courante.

- [ ] **Mettre à jour srcExclude**

Dans `defineConfig`, localiser `srcExclude: ['**/_shared/**']` et remplacer par :

```ts
srcExclude: ['**/_shared/**', 'superpowers/**'],
```

- [ ] **Vérifier le build**

```bash
npm run docs:build
```

Attendu : `build complete` sans erreur. Le sidebar sera auto-généré à partir de la structure actuelle (fichiers plats) — c'est normal, il évoluera après la migration.

- [ ] **Commit**

```bash
git add package.json package-lock.json .vitepress/config.ts
git commit -m "chore: migre vers vitepress-sidebar auto-généré, srcExclude superpowers"
```

---

## Task 1: Migration des fichiers existants (Agent A)

**Context:** Exécuter sur la branche `refactor/doc-structure`. Cet agent NE supprime PAS `organisation-communaute.md` ni `area-manager.md` — ils seront lus par l'Agent C pour créer les nouvelles pages.

**Files:** Tous les fichiers listés dans le File Map section "Déplacés"

- [ ] **Créer les sous-dossiers**

```bash
mkdir -p docs/fr/editors/wme docs/fr/editors/cartographie docs/fr/editors/communaute
```

- [ ] **Déplacer les pages WME (git mv)**

```bash
git mv docs/fr/editors/legende-carte.md docs/fr/editors/wme/legende-carte.md
git mv docs/fr/editors/routing.md docs/fr/editors/wme/routing.md
git mv docs/fr/editors/fermetures.md docs/fr/editors/wme/fermetures.md
git mv docs/fr/editors/fermeture-urs.md docs/fr/editors/wme/fermeture-urs.md
git mv docs/fr/editors/virages-difficiles.md docs/fr/editors/wme/virages-difficiles.md
git mv docs/fr/editors/lanes-passages-niveau.md docs/fr/editors/wme/lanes-passages-niveau.md
git mv docs/fr/editors/dangers-permanents.md docs/fr/editors/wme/dangers-permanents.md
git mv docs/fr/editors/delais-mise-a-jour.md docs/fr/editors/wme/delais-mise-a-jour.md
```

- [ ] **Déplacer les pages Cartographie (git mv)**

```bash
git mv docs/fr/editors/regles-edition.md docs/fr/editors/cartographie/regles-edition.md
git mv docs/fr/editors/nommage-routes.md docs/fr/editors/cartographie/nommage-routes.md
git mv docs/fr/editors/geometrie-segments.md docs/fr/editors/cartographie/geometrie-segments.md
git mv docs/fr/editors/intersections.md docs/fr/editors/cartographie/intersections.md
git mv docs/fr/editors/ronds-points.md docs/fr/editors/cartographie/ronds-points.md
git mv docs/fr/editors/limites-vitesse.md docs/fr/editors/cartographie/limites-vitesse.md
git mv docs/fr/editors/parkings.md docs/fr/editors/cartographie/parkings.md
git mv docs/fr/editors/chemins-agricoles.md docs/fr/editors/cartographie/chemins-agricoles.md
git mv docs/fr/editors/chemins-pietons.md docs/fr/editors/cartographie/chemins-pietons.md
git mv docs/fr/editors/numeros-autoroutes.md docs/fr/editors/cartographie/numeros-autoroutes.md
git mv docs/fr/editors/freeways-guidelines.md docs/fr/editors/cartographie/freeways-guidelines.md
git mv docs/fr/editors/vignette.md docs/fr/editors/cartographie/vignette.md
git mv docs/fr/editors/stickair-geneve.md docs/fr/editors/cartographie/stickair-geneve.md
```

- [ ] **Déplacer les pages Communauté (git mv)**

```bash
git mv docs/fr/editors/faq.md docs/fr/editors/communaute/faq.md
git mv docs/fr/editors/ressources.md docs/fr/editors/communaute/ressources.md
```

- [ ] **Ajouter `order:` frontmatter aux pages WME déplacées**

Pour chaque fichier listé, ouvrir et ajouter `order: N` dans le frontmatter existant :

| Fichier | order |
|---------|-------|
| `wme/legende-carte.md` | 8 |
| `wme/routing.md` | 9 |
| `wme/fermetures.md` | 10 |
| `wme/fermeture-urs.md` | 11 |
| `wme/virages-difficiles.md` | 12 |
| `wme/lanes-passages-niveau.md` | 13 |
| `wme/dangers-permanents.md` | 14 |
| `wme/delais-mise-a-jour.md` | 15 |

Exemple — avant :
```yaml
---
title: Légende de la carte
---
```
Après :
```yaml
---
title: Légende de la carte
order: 8
---
```

- [ ] **Ajouter `order:` frontmatter aux pages Cartographie déplacées**

| Fichier | order |
|---------|-------|
| `cartographie/regles-edition.md` | 2 |
| `cartographie/nommage-routes.md` | 3 |
| `cartographie/geometrie-segments.md` | 4 |
| `cartographie/intersections.md` | 5 |
| `cartographie/ronds-points.md` | 6 |
| `cartographie/limites-vitesse.md` | 7 |
| `cartographie/parkings.md` | 8 |
| `cartographie/chemins-agricoles.md` | 9 |
| `cartographie/chemins-pietons.md` | 10 |
| `cartographie/numeros-autoroutes.md` | 11 |
| `cartographie/freeways-guidelines.md` | 12 |
| `cartographie/vignette.md` | 13 |
| `cartographie/stickair-geneve.md` | 14 |

- [ ] **Ajouter `order:` frontmatter aux pages Communauté déplacées**

| Fichier | order |
|---------|-------|
| `communaute/faq.md` | 2 |
| `communaute/ressources.md` | 3 |

- [ ] **Mettre à jour le chemin `_shared` include dans `communaute/faq.md`**

`communaute/faq.md` contient `<!--@include: ../_shared/niveaux-editeur.md-->`. Remplacer par :

```
<!--@include: ../../_shared/niveaux-editeur.md-->
```

- [ ] **Mettre à jour tous les liens internes — WME**

Depuis la racine du repo, appliquer les remplacements sur tous les .md :

```bash
# WME pages
find docs/fr -name "*.md" -exec sed -i \
  -e 's|/fr/editors/legende-carte|/fr/editors/wme/legende-carte|g' \
  -e 's|/fr/editors/routing|/fr/editors/wme/routing|g' \
  -e 's|/fr/editors/fermetures)|/fr/editors/wme/fermetures)|g' \
  -e 's|/fr/editors/fermetures\]|/fr/editors/wme/fermetures]|g' \
  -e 's|/fr/editors/fermeture-urs|/fr/editors/wme/fermeture-urs|g' \
  -e 's|/fr/editors/virages-difficiles|/fr/editors/wme/virages-difficiles|g' \
  -e 's|/fr/editors/lanes-passages-niveau|/fr/editors/wme/lanes-passages-niveau|g' \
  -e 's|/fr/editors/dangers-permanents|/fr/editors/wme/dangers-permanents|g' \
  -e 's|/fr/editors/delais-mise-a-jour|/fr/editors/wme/delais-mise-a-jour|g' \
  {} \;
```

- [ ] **Mettre à jour tous les liens internes — Cartographie**

```bash
find docs/fr -name "*.md" -exec sed -i \
  -e 's|/fr/editors/regles-edition|/fr/editors/cartographie/regles-edition|g' \
  -e 's|/fr/editors/nommage-routes|/fr/editors/cartographie/nommage-routes|g' \
  -e 's|/fr/editors/geometrie-segments|/fr/editors/cartographie/geometrie-segments|g' \
  -e 's|/fr/editors/intersections|/fr/editors/cartographie/intersections|g' \
  -e 's|/fr/editors/ronds-points|/fr/editors/cartographie/ronds-points|g' \
  -e 's|/fr/editors/limites-vitesse|/fr/editors/cartographie/limites-vitesse|g' \
  -e 's|/fr/editors/parkings|/fr/editors/cartographie/parkings|g' \
  -e 's|/fr/editors/chemins-agricoles|/fr/editors/cartographie/chemins-agricoles|g' \
  -e 's|/fr/editors/chemins-pietons|/fr/editors/cartographie/chemins-pietons|g' \
  -e 's|/fr/editors/numeros-autoroutes|/fr/editors/cartographie/numeros-autoroutes|g' \
  -e 's|/fr/editors/freeways-guidelines|/fr/editors/cartographie/freeways-guidelines|g' \
  -e 's|/fr/editors/vignette|/fr/editors/cartographie/vignette|g' \
  -e 's|/fr/editors/stickair-geneve|/fr/editors/cartographie/stickair-geneve|g' \
  {} \;
```

- [ ] **Mettre à jour tous les liens internes — Communauté**

```bash
find docs/fr -name "*.md" -exec sed -i \
  -e 's|/fr/editors/faq|/fr/editors/communaute/faq|g' \
  -e 's|/fr/editors/ressources|/fr/editors/communaute/ressources|g' \
  -e 's|/fr/editors/organisation-communaute|/fr/editors/communaute/|g' \
  -e 's|/fr/editors/area-manager|/fr/editors/wme/roles|g' \
  {} \;
```

Note : le lien vers `organisation-communaute` pointe vers `/fr/editors/communaute/` (index de la section) — c'est un compromis acceptable ; les sous-pages spécifiques (`wme/niveaux`, `wme/roles`) seront linkées depuis les nouvelles pages créées en Task 3.

- [ ] **Vérifier les remplacements**

```bash
# Vérifier qu'il n'y a plus d'anciens liens
grep -r "/fr/editors/legende-carte\b\|/fr/editors/routing\b\|/fr/editors/nommage-routes\b\|/fr/editors/faq\b" docs/fr --include="*.md"
```

Attendu : aucun résultat (ou uniquement dans les fichiers nouvellement créés qui n'existent pas encore).

- [ ] **Build de vérification**

```bash
npm run docs:build
```

Attendu : `build complete`. Des liens vers `wme/index.md`, `cartographie/index.md`, `communaute/index.md` seront cassés (ces fichiers n'existent pas encore) — VitePress loggue des warnings mais le build aboutit quand même avec `ignoreDeadLinks`.

- [ ] **Commit**

```bash
git add docs/fr/editors/
git commit -m "refactor(fr/editors): migre les pages vers wme/, cartographie/, communaute/"
```

---

## Task 2: Nouvelles pages WME depuis Google Support (Agent B — worktree isolé)

**Context:** Cet agent travaille dans un worktree isolé basé sur `refactor/doc-structure` APRÈS que Task 1 soit commité. Il crée uniquement des nouveaux fichiers dans `docs/fr/editors/wme/` — aucun conflit possible avec Task 3.

**Files:** Create `docs/fr/editors/wme/interface.md`, `wme/segments.md`, `wme/restrictions-virage.md`

- [ ] **Fetcher les ressources Google Support**

Aller sur https://support.google.com/waze#topic=6342345 et explorer les pages :
- Interface de l'éditeur de carte (panneau gauche, panneau droit, couches, raccourcis)
- Créer et modifier des segments
- Restrictions de virage (turn restrictions)

Lire aussi : https://support.google.com/waze/answer/6284933 (WME getting started) si disponible.

- [ ] **Créer `docs/fr/editors/wme/interface.md`**

```markdown
---
title: Interface du WME
order: 2
---

# Interface du WME

Le Waze Map Editor (WME) est accessible sur [waze.com/editor](https://www.waze.com/editor). Il se compose de trois zones principales.

## Panneau gauche

Le panneau gauche permet de basculer entre trois onglets :

- **Segments** — liste des segments sélectionnés et leurs propriétés
- **Lieux** — points d'intérêt (POIs) dans la zone visible
- **Update Requests (URs)** — signalements des utilisateurs à traiter

## Panneau droit (propriétés)

Quand un segment ou un lieu est sélectionné, le panneau droit affiche ses propriétés éditables : type, nom, sens de circulation, vitesse, restrictions, etc.

## Barre d'outils supérieure

| Outil | Raccourci | Usage |
|-------|-----------|-------|
| Sélection | `S` ou `Esc` | Sélectionner des éléments existants |
| Dessin de segment | `D` | Tracer un nouveau segment |
| Restriction de virage | `T` | Poser une restriction temporelle |
| Ajouter un lieu | `P` | Créer un point d'intérêt |
| Annuler | `Ctrl+Z` | Annuler la dernière action |
| Enregistrer | `Ctrl+S` | Sauvegarder les modifications |

## Couches (Layers)

Le menu des couches (icône en haut à droite) permet d'activer/désactiver :

- **Satellitaire** — fond de carte aérien pour vérifier la géométrie
- **GPS tracks** — traces GPS des conducteurs Waze
- **Map Problems** — problèmes détectés automatiquement
- **Update Requests** — signalements utilisateurs sur la carte
- **Éditeurs** — zones d'édition des autres éditeurs connectés

## Zoom et navigation

- Zoom : molette de la souris ou `+`/`-`
- Déplacement : clic droit maintenu + glisser (ou trackpad)
- Centrer sur votre position : icône GPS dans la barre supérieure

::: note
Les modifications ne sont visibles par les utilisateurs Waze qu'après un délai de mise à jour. Voir [Délais de mise à jour](/fr/editors/wme/delais-mise-a-jour).
:::

::: quote Sources
- Waze Support — Waze Map Editor : https://support.google.com/waze/answer/6284933
:::
```

- [ ] **Créer `docs/fr/editors/wme/segments.md`**

```markdown
---
title: Segments
order: 3
---

# Segments

Un segment est l'unité de base de la carte Waze : c'est un tronçon de route entre deux jonctions. Toute route est composée d'un ou plusieurs segments.

## Créer un segment

1. Appuyer sur `D` (ou cliquer sur l'outil crayon dans la barre supérieure)
2. Cliquer sur la carte pour poser le premier point
3. Cliquer pour ajouter des points de géométrie intermédiaires
4. Double-cliquer pour terminer le segment
5. Appuyer sur `Ctrl+S` pour enregistrer

::: important
Tout nouveau segment doit être raccordé à la carte existante. Un segment isolé (non connecté à d'autres) ne sera pas routable.
:::

## Propriétés d'un segment

Sélectionner un segment pour afficher ses propriétés dans le panneau droit :

| Propriété | Description |
|-----------|-------------|
| **Type** | Classification routière (Freeway, Primary Street, Street…) — influence le routing. Voir [Bases du routing](/fr/editors/wme/routing) |
| **Nom** | Nom officiel de la voie, sans abréviation. Voir [Nommage des routes](/fr/editors/cartographie/nommage-routes) |
| **Ville** | Localité officielle (code postal requis). Voir [Nommage des routes](/fr/editors/cartographie/nommage-routes) |
| **Sens** | Bidirectionnel, sens unique A→B, sens unique B→A |
| **Vitesse** | Limite de vitesse. Voir [Limites de vitesse](/fr/editors/cartographie/limites-vitesse) |
| **Niveau** | Élévation du segment (0 = sol, +1 = pont, -1 = tunnel) |
| **Verrouillage** | Niveau minimum pour éditer ce segment |

## Modifier la géométrie

- Sélectionner un segment, puis faire glisser les **points blancs** pour ajuster la forme
- Cliquer sur un point blanc + touche `D` pour le supprimer
- Cliquer sur la ligne entre deux points pour insérer un nouveau point

## Connecter des segments (jonctions)

Pour relier deux segments, le point final de l'un doit coïncider exactement avec un point de l'autre. Le WME affiche un point bleu ou rouge sur les jonctions.

- **Point bleu** = jonction valide
- **Point rouge** = jonction incomplète ou problématique

## Supprimer un segment

Sélectionner le segment, puis appuyer sur `Delete`. Confirmer la suppression. Les jonctions orphelines doivent aussi être supprimées.

::: important
Ne supprimez jamais un segment existant sans raison valable : il contient des données de vitesse et d'historique de routing précieuses. Voir [Règles d'édition](/fr/editors/cartographie/regles-edition).
:::

::: quote Sources
- Waze Support — Editing segments : https://support.google.com/waze/answer/6284952
:::
```

- [ ] **Créer `docs/fr/editors/wme/restrictions-virage.md`**

```markdown
---
title: Restrictions de virage
order: 4
---

# Restrictions de virage

Les restrictions de virage (turn restrictions) indiquent à Waze quels mouvements sont autorisés ou interdits à une jonction. Elles ont un impact direct sur le calcul d'itinéraire.

## Visualiser les restrictions

Sélectionner un segment pour afficher les flèches de virage à chaque extrémité :

- **Flèche verte** = virage autorisé
- **Flèche rouge** = virage interdit
- **Absence de flèche** = aucune restriction enregistrée (autorisé par défaut)

Cliquer sur une flèche pour basculer entre autorisé et interdit.

## Règles de base

- Toujours vérifier la signalisation réelle (panneaux, marquages au sol) avant de poser une restriction
- Un virage légal mais dangereux n'est pas une raison suffisante pour le restreindre
- Les sens uniques impliquent des restrictions automatiques dans le sens bloqué

## Restrictions temporelles

Certains virages sont interdits uniquement à certaines heures ou certains jours (ex. : interdiction de tourner à gauche en heure de pointe). Pour les poser :

1. Sélectionner la flèche de virage concernée
2. Cliquer sur l'icône horloge qui apparaît
3. Définir les jours et plages horaires
4. Sauvegarder avec `Ctrl+S`

## Restrictions par type de véhicule

Il est possible de restreindre un virage uniquement pour certains types de véhicules (camions, motos, etc.) en cliquant sur « Modifier les types » dans le panneau de restriction.

## Virages en U (U-turns)

Les demi-tours sont gérés comme des restrictions de virage sur le même segment. N'autoriser un demi-tour que lorsque :
- La manœuvre crée une impasse réelle
- Elle est légale et signalisée

Voir aussi [Règles d'édition](/fr/editors/cartographie/regles-edition).

::: quote Sources
- Waze Support — Turn restrictions : https://support.google.com/waze/answer/6284956
:::
```

- [ ] **Vérifier le build**

```bash
npm run docs:build
```

Attendu : `build complete`.

- [ ] **Commit**

```bash
git add docs/fr/editors/wme/interface.md docs/fr/editors/wme/segments.md docs/fr/editors/wme/restrictions-virage.md
git commit -m "feat(fr/editors): ajoute interface WME, segments, restrictions de virage (fetch Google Support)"
```

---

## Task 3: Pages index + pages assemblées + modifications intro (Agent C — worktree isolé)

**Context:** Cet agent travaille dans un worktree isolé basé sur `refactor/doc-structure` APRÈS que Task 1 soit commité. Il lit `organisation-communaute.md` et `area-manager.md` (encore présents) pour en extraire le contenu. Aucun conflit avec Agent B (fichiers disjoints).

**Files:**
- Create: `wme/index.md`, `wme/niveaux.md`, `wme/roles.md`, `wme/scripts.md`
- Create: `cartographie/index.md`, `communaute/index.md`
- Modify: `docs/fr/editors/index.md`, `docs/fr/editors/premiers-pas.md`
- Modify: `docs/fr/editors/communaute/ressources.md` (retirer section WME Helper → scripts.md)

- [ ] **Créer `docs/fr/editors/wme/index.md`**

```markdown
---
title: Éditeur de carte (WME)
order: 1
---

# Éditeur de carte (WME)

Le **Waze Map Editor (WME)** est l'outil en ligne qui permet de modifier la carte Waze. Il est accessible à tous les utilisateurs disposant d'un compte Waze sur [waze.com/editor](https://www.waze.com/editor).

## Accès et droits d'édition

En conduisant avec l'application Waze, vous accumulez des **droits d'édition temporaires** (valables 90 jours) sur les zones parcourues. Ces droits déterminent où vous pouvez modifier la carte.

Les droits d'édition s'étendent progressivement selon votre [niveau d'éditeur](/fr/editors/wme/niveaux).

## Serveurs Waze

Waze opère sur trois serveurs distincts. La Suisse est sur le serveur **INTL**.

| Serveur | Couverture |
|---------|-----------|
| NA | Amérique du Nord |
| IL | Israël |
| **INTL** | Reste du monde, dont la **Suisse** |

::: important
En cas de doute, ne modifiez jamais la carte en vous basant sur les règles d'un pays voisin. Posez votre question sur le [forum local](https://www.waze.com/discuss/c/editors/switzerland/romandie/4797).
:::

## Lien permanent (Permalink)

Le WME offre une fonction de lien permanent permettant de partager un emplacement précis sur la carte. Très utile pour demander de l'aide sur le forum ou Discord.

Pour l'obtenir : positionner la carte sur la zone souhaitée, puis copier l'URL du navigateur — elle contient les coordonnées et le niveau de zoom.

## Dans cette section

- [Interface du WME](/fr/editors/wme/interface) — panneaux, couches, raccourcis
- [Segments](/fr/editors/wme/segments) — créer et modifier des segments
- [Restrictions de virage](/fr/editors/wme/restrictions-virage) — autoriser et interdire des virages
- [Niveaux d'éditeur](/fr/editors/wme/niveaux) — niveaux, rayons d'édition, locks
- [Rôles](/fr/editors/wme/roles) — AM, SM, RTC State Manager, CM
- [Scripts et outils](/fr/editors/wme/scripts) — WME Switzerland Helper et autres
- [Légende de la carte](/fr/editors/wme/legende-carte) — types de segments
- [Bases du routing](/fr/editors/wme/routing) — impact des types sur la navigation
- [Fermetures de routes](/fr/editors/wme/fermetures) — restrictions horaires
- [Fermeture des URs](/fr/editors/wme/fermeture-urs) — traiter les signalements
- [Virages difficiles](/fr/editors/wme/virages-difficiles) — signalement (L2+)
- [Voies & passages à niveau](/fr/editors/wme/lanes-passages-niveau) — lane guidance (L3+)
- [Dangers permanents](/fr/editors/wme/dangers-permanents) — passages à niveau (L4+)
- [Délais de mise à jour](/fr/editors/wme/delais-mise-a-jour) — quand les changements apparaissent
```

- [ ] **Créer `docs/fr/editors/wme/niveaux.md`**

```markdown
---
title: Niveaux d'éditeur
order: 5
---

# Niveaux d'éditeur

Waze utilise un système de niveaux (L1 à L6+) qui détermine le rayon d'édition et les segments accessibles.

<!--@include: ../../_shared/niveaux-editeur.md-->

Les segments verrouillés à un niveau supérieur au vôtre nécessitent une demande de déverrouillage via le forum ou le Discord.

## Niveaux de verrouillage par type de route

Le niveau de verrouillage d'un segment est distinct du niveau de l'éditeur. Standard suisse :

| Type de route | Niveau de lock attendu |
| --- | --- |
| Autoroute (Freeway) | L5 |
| Route majeure (Major Highway) | L4 |
| Route mineure (Minor Highway) | L3 |
| Rue primaire (Primary Street) | L2 |
| Rue (Street) | L1 |

Voir [Bases du routing](/fr/editors/wme/routing) pour comprendre l'impact des types de routes sur la navigation.
```

- [ ] **Lire `organisation-communaute.md` et `area-manager.md` puis créer `docs/fr/editors/wme/roles.md`**

Lire les deux fichiers sources, puis créer :

```markdown
---
title: Rôles d'éditeur
order: 6
---

# Rôles d'éditeur

En plus du niveau d'éditeur, la communauté Waze suisse s'appuie sur des rôles spécifiques qui accordent des droits d'édition étendus.

## Area Manager (AM)

Un **Area Manager** gère une zone géographique définie et peut y éditer la carte sans avoir physiquement conduit sur toutes les routes, dans la limite de son niveau de verrouillage.

### Prérequis pour candidater

- Au moins **500 modifications significatives**
- Bonne connaissance des règles d'édition suisses
- Participation active au forum (plusieurs contributions)
- Inscription depuis **au moins un mois**

### Processus

1. Ouvrir le WME et positionner la carte sur la zone souhaitée
2. Créer un ou plusieurs permalinks délimitant la zone demandée
3. Contacter un Country Manager via le forum avec ces liens
4. Un Country Manager prend contact dans les **24 heures**

::: important
Les Area Managers doivent éditer la carte **au moins une fois tous les 90 jours**. Passé ce délai, les droits AM sont automatiquement révoqués.
:::

## State Manager (SM)

Un **State Manager** dispose des droits d'édition complets dans le canton qui lui est assigné, soumis aux mêmes règles de verrouillage.

## RTC State Manager

Rôle propre à la Suisse (unique dans ce pays) : gestion des fermetures de route en temps réel. Voir [Fermetures de routes](/fr/editors/wme/fermetures) pour le détail des procédures.

## Country Manager (CM)

Les **Country Managers** assurent le support au niveau national, appliquent les règles et animent la communauté. Ce sont eux qui accordent les statuts AM et SM.

::: note Liste à jour
La liste nominative des CM, SM et AM évolue. Consultez la section dédiée du Wiki suisse plutôt que de vous fier à une copie figée.
:::

Pour les questions communautaires, voir [Communauté](/fr/editors/communaute/).

::: quote Sources
- Rechte zum Bearbeiten der Karte : https://www.waze.com/discuss/t/rechte-zum-bearbeiten-der-karte/377276
:::
```

- [ ] **Créer `docs/fr/editors/wme/scripts.md`**

Lire `docs/fr/editors/communaute/ressources.md` (section "Outils"), puis créer :

```markdown
---
title: Scripts et outils
order: 7
---

# Scripts et outils

Des userscripts étendent les fonctionnalités du WME. Ils s'installent via un gestionnaire de scripts comme **Tampermonkey** (Chrome/Edge) ou **Greasemonkey** (Firefox).

## WME Switzerland Helper

L'outil principal pour éditer en Suisse.

**GitHub :** https://github.com/Waze-Dev-CH/WME-Switzerland-Helper

Il ajoute au WME :

- Des **couches géographiques suisses** (limites cantonales, imagerie aérienne nationale)
- Les **données de transports publics** (arrêts SBB avec noms officiels)
- Une **vérification des noms de rue** selon les conventions suisses
- Des **alertes de verrouillage** pour les segments au standard suisse

::: help Installation
1. Installer [Tampermonkey](https://www.tampermonkey.net/) dans votre navigateur
2. Ouvrir la page GitHub du script et cliquer sur le fichier `.user.js`
3. Tampermonkey propose automatiquement l'installation — confirmer
4. Recharger le WME
:::

## Autres ressources

Pour la liste complète des outils et liens externes : [Ressources](/fr/editors/communaute/ressources).
```

- [ ] **Créer `docs/fr/editors/cartographie/index.md`**

```markdown
---
title: Cartographie
order: 1
---

# Cartographie

Cette section regroupe les règles d'édition spécifiques à la Suisse. Elles complètent les règles générales Waze et priment sur les guides des pays voisins.

::: important
Les règles de cartographie varient par pays. En Suisse, les règles locales s'appliquent toujours — ne transposez jamais une règle française, allemande ou italienne sans vérification.
:::

## Pourquoi des règles suisses ?

La Suisse est multilingue, utilise sa propre classification routière (A, N1–N30, H1–…) et a des spécificités légales uniques (vignette autoroutière, interdiction des alertes radar).

## Dans cette section

### Règles générales
- [Règles d'édition](/fr/editors/cartographie/regles-edition) — principes fondamentaux pour toute modification
- [Nommage des routes et villes](/fr/editors/cartographie/nommage-routes) — conventions officielles suisses
- [Géométrie des segments](/fr/editors/cartographie/geometrie-segments) — tracé, micro-segments, boucles
- [Intersections](/fr/editors/cartographie/intersections) — jonctions et priorités
- [Ronds-points](/fr/editors/cartographie/ronds-points) — création et verrouillage L3
- [Limites de vitesse](/fr/editors/cartographie/limites-vitesse) — saisie et exceptions
- [Parkings](/fr/editors/cartographie/parkings) — voies et POIs de stationnement
- [Chemins agricoles](/fr/editors/cartographie/chemins-agricoles) — accord communautaire
- [Chemins piétons](/fr/editors/cartographie/chemins-pietons) — quand les inclure

### Autoroutes
- [Numérotation Axx / Exx](/fr/editors/cartographie/numeros-autoroutes) — numéros suisses et européens
- [Guidelines cartographie autoroutes](/fr/editors/cartographie/freeways-guidelines) — bretelles, échangeurs, géométrie

### Spécificités suisses
- [Vignette autoroutière](/fr/editors/cartographie/vignette) — configuration dans Waze
- [Stick'AIR — Genève](/fr/editors/cartographie/stickair-geneve) — circulation différenciée
```

- [ ] **Lire `organisation-communaute.md` puis créer `docs/fr/editors/communaute/index.md`**

```markdown
---
title: Communauté
order: 1
---

# Communauté

La communauté Waze suisse fait partie de la zone **DACH** (Allemagne, Autriche, Suisse). Elle s'organise autour d'un forum, d'un Discord et de rôles d'encadrement.

## Où poser une question

Avant de poser une question, consultez le Wiki et le forum : la réponse y figure souvent déjà.

- **Forum Romandie** — questions d'édition en Suisse romande (sujets épinglés) : https://www.waze.com/discuss/c/editors/switzerland/romandie/4797
- **Discord communautaire** — échanges directs : https://discord.gg/dmxUwvTkk5
- **Site communautaire CH** — [waze-switzerland.ch](https://www.waze-switzerland.ch/)

::: note
Chaque région linguistique a ses propres règles. Pour la Suisse romande, suivez les règles locales — pas celles de France. Pour la Suisse alémanique, le Wiki germanophone fait référence.
:::

## Rôles dans la communauté

Pour comprendre qui fait quoi (AM, SM, RTC, CM), voir [Rôles d'éditeur](/fr/editors/wme/roles).

## Dans cette section

- [FAQ](/fr/editors/communaute/faq) — questions fréquentes
- [Ressources](/fr/editors/communaute/ressources) — liens externes, Wikis, outils

::: quote Sources
- Hauptseite (page principale DACH) : https://www.waze.com/discuss/t/hauptseite/377253
- Informations en français : https://www.waze.com/discuss/t/informations-en-francais/377254
:::
```

- [ ] **Alléger `docs/fr/editors/index.md`**

Remplacer l'intégralité du contenu par :

```markdown
---
title: Éditeurs
description: Documentation pour les éditeurs Waze en Suisse — bonnes pratiques, règles locales et guides cartographiques.
---

# Éditeurs Waze CH

Bienvenue dans la documentation pour les éditeurs Waze en Suisse. La carte Waze est construite entièrement par des bénévoles : en conduisant avec l'application, vous accumulez des droits d'édition sur les zones parcourues.

::: important
Avant toute modification, lisez les règles spécifiques à la Suisse présentées dans cette documentation. Ne vous basez jamais sur les règles d'un pays voisin.
:::

## Par où commencer ?

Nouveau sur Waze ? La page [Premiers pas](/fr/editors/premiers-pas) vous guide étape par étape : ouvrir l'éditeur, installer les bons outils et faire vos premières modifications en toute sécurité.

## Sections

- [Éditeur de carte (WME)](/fr/editors/wme/) — interface, niveaux, rôles, outils techniques
- [Cartographie](/fr/editors/cartographie/) — règles d'édition suisses, autoroutes, spécificités locales
- [Communauté](/fr/editors/communaute/) — forum, Discord, FAQ, ressources
```

- [ ] **Enrichir `docs/fr/editors/premiers-pas.md`**

Dans le fichier existant, enrichir la checklist "Checklist premiers pas" et la section "Où trouver de l'aide" pour ajouter des liens explicites vers les nouvelles sections. Remplacer la checklist par :

```markdown
## Checklist premiers pas

1. Avoir un compte Waze actif (utilise l'application sur tes trajets).
2. Ouvrir le [Waze Map Editor](https://www.waze.com/editor) et explorer l'[interface](/fr/editors/wme/interface).
3. Comprendre ton [niveau L1 et tes droits d'édition](/fr/editors/wme/niveaux).
4. Installer le userscript **WME Switzerland Helper** (voir [Scripts et outils](/fr/editors/wme/scripts)).
5. Lire les bases : [Nommage des routes](/fr/editors/cartographie/nommage-routes), [Légende de la carte](/fr/editors/wme/legende-carte) et [Bases du routing](/fr/editors/wme/routing).
6. Lire les [Règles d'édition suisses](/fr/editors/cartographie/regles-edition).
7. Rejoindre le forum Romandie et le Discord (voir [Communauté](/fr/editors/communaute/)).
8. Faire un premier petit edit simple, sur une zone que tu connais.
```

Et mettre à jour la section "Où trouver de l'aide" pour pointer vers `/fr/editors/communaute/` :

```markdown
## Où trouver de l'aide

Avant de poser une question, vérifie le Wiki et le forum : la réponse y figure souvent déjà.

- **Forum Romandie** : https://www.waze.com/discuss/c/editors/switzerland/romandie/4797
- **Discord communautaire** : https://discord.gg/dmxUwvTkk5

Pour comprendre qui fait quoi dans la communauté, voir [Rôles d'éditeur](/fr/editors/wme/roles). Pour l'ensemble des liens et outils, voir [Ressources](/fr/editors/communaute/ressources).
```

- [ ] **Retirer la section WME Helper de `communaute/ressources.md`**

Dans `docs/fr/editors/communaute/ressources.md`, supprimer la section `## Outils` et son contenu (WME Switzerland Helper + note Tampermonkey). Ajouter à la place un lien vers `wme/scripts.md` :

```markdown
## Outils

Les userscripts et outils pour le WME sont documentés dans [Scripts et outils](/fr/editors/wme/scripts).
```

- [ ] **Vérifier le build**

```bash
npm run docs:build
```

Attendu : `build complete`.

- [ ] **Commit**

```bash
git add docs/fr/editors/
git commit -m "feat(fr/editors): ajoute pages index WME/cartographie/communauté, niveaux, rôles, scripts, allège intro"
```

---

## Task 4: Merge, nettoyage et finalisation

**Context:** Exécuter sur la branche `refactor/doc-structure` après que Task 2 ET Task 3 soient complétées dans leurs worktrees. Cet agent récupère les changements des deux worktrees, supprime les fichiers dissouts et vérifie le build final.

**Files:**
- Delete: `docs/fr/editors/organisation-communaute.md`, `docs/fr/editors/area-manager.md`
- Verify: `npm run docs:build`

- [ ] **Récupérer les branches des worktrees B et C**

Les worktrees ont créé des branches séparées. Merger chacune :

```bash
# Récupérer les branches des worktrees
git fetch --all

# Merger le worktree B (nouvelles pages WME fetch)
# Remplacer <branche-b> par le nom de branche retourné par l'agent B
git merge <branche-b> --no-edit

# Merger le worktree C (pages index + modifications)
# Remplacer <branche-c> par le nom de branche retourné par l'agent C
git merge <branche-c> --no-edit
```

En cas de conflit (peu probable — les agents travaillent sur des fichiers disjoints) : résoudre manuellement en conservant les deux contributions.

- [ ] **Supprimer les fichiers dissouts**

```bash
git rm docs/fr/editors/organisation-communaute.md
git rm docs/fr/editors/area-manager.md
```

- [ ] **Vérifier qu'aucun lien ne pointe encore vers les fichiers supprimés**

```bash
grep -r "organisation-communaute\|/fr/editors/area-manager" docs/fr --include="*.md"
```

Si des liens résiduels apparaissent, les corriger :
- Liens vers `organisation-communaute` avec contexte "rôles" → `/fr/editors/wme/roles`
- Liens vers `organisation-communaute` avec contexte "niveaux" → `/fr/editors/wme/niveaux`
- Liens vers `organisation-communaute` avec contexte "communauté/contacts" → `/fr/editors/communaute/`
- Liens vers `area-manager` → `/fr/editors/wme/roles`

- [ ] **Build final**

```bash
npm run docs:build
```

Attendu : `build complete` sans warnings de liens cassés (ou uniquement les liens localhost explicitement ignorés via `ignoreDeadLinks`).

Si des liens cassés apparaissent dans le output, les corriger avant de committer.

- [ ] **Commit final**

```bash
git add -A
git commit -m "refactor(fr/editors): supprime organisation-communaute et area-manager (dissouts)"
```

- [ ] **Pousser la branche et ouvrir la PR**

```bash
git push -u origin refactor/doc-structure
```

Titre PR suggéré : `refactor(fr/editors): restructuration en sections WME / Cartographie / Communauté`

Corps PR : mentionner les 4 phases, les nouvelles pages WME, la migration vers vitepress-sidebar, et les fichiers dissouts.

---

## Self-Review

### Couverture spec

| Exigence spec | Tâche |
|---------------|-------|
| Branche `refactor/doc-structure` | Déjà créée (hors plan) |
| vitepress-sidebar + sortMenusByFrontmatterOrder | Task 0 |
| srcExclude superpowers/** | Task 0 |
| Sous-dossiers wme/, cartographie/, communaute/ | Task 1 |
| git mv + order: frontmatter | Task 1 |
| Mise à jour liens internes | Task 1 |
| include path _shared dans faq.md | Task 1 |
| wme/interface.md (fetch) | Task 2 |
| wme/segments.md (fetch) | Task 2 |
| wme/restrictions-virage.md (fetch) | Task 2 |
| wme/index.md (Permalink, Serveurs) | Task 3 |
| wme/niveaux.md (include _shared) | Task 3 |
| wme/roles.md (fusion AM + rôles) | Task 3 |
| wme/scripts.md (depuis ressources) | Task 3 |
| cartographie/index.md | Task 3 |
| communaute/index.md | Task 3 |
| editors/index.md allégé | Task 3 |
| premiers-pas.md enrichi | Task 3 |
| ressources.md nettoyé | Task 3 |
| Suppression organisation-communaute + area-manager | Task 4 |
| Build final propre | Task 4 |
| PR ouverte | Task 4 |

### Types cohérents

- Les includes `<!--@include: ../../_shared/niveaux-editeur.md-->` sont utilisés exactement dans `wme/niveaux.md` (Task 3) et `communaute/faq.md` (chemin mis à jour Task 1).
- Les liens `/fr/editors/wme/X`, `/fr/editors/cartographie/X`, `/fr/editors/communaute/X` sont cohérents dans tous les fichiers Tasks 2, 3.
