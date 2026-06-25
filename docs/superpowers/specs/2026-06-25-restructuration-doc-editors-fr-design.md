# Design — Restructuration de la doc fr/editors

**Date :** 2026-06-25
**Branche cible :** `refactor/doc-structure`
**Scope :** `docs/fr/editors/` uniquement (locales en/de/it non affectées)

---

## 1. Contexte et objectif

La section `fr/editors` est actuellement à plat (~26 pages) avec un sidebar géré manuellement dans `config.ts`. Les pages mélangent technique WME, règles suisses et informations communautaires sans structure claire.

**Objectif :** Réorganiser en 4 sections narratives (Intro → Premiers pas → WME → Cartographie → Communauté), migrer vers `vitepress-sidebar` pour un sidebar auto-généré, et enrichir la section WME avec du contenu technique manquant.

---

## 2. Architecture cible

### 2.1 Structure des répertoires

```
docs/fr/editors/
├── index.md                        ← Intro (allégée)
├── premiers-pas.md                 ← Getting started (enrichi, liens cross-sections)
│
├── wme/
│   ├── index.md                    ← Vue d'ensemble WME (nouveau)
│   ├── interface.md                ← Interface WME (nouveau, fetch Google Support)
│   ├── segments.md                 ← Segments (nouveau, fetch Google Support)
│   ├── restrictions-virage.md      ← Turn restrictions (nouveau, fetch Google Support)
│   ├── niveaux.md                  ← Niveaux d'éditeur (extrait + _shared partial)
│   ├── roles.md                    ← AM, SM, RTC, CM (fusion org-communaute + area-manager)
│   ├── scripts.md                  ← WME Switzerland Helper + outils
│   ├── legende-carte.md            ← Déplacé
│   ├── routing.md                  ← Déplacé
│   ├── fermetures.md               ← Déplacé
│   ├── fermeture-urs.md            ← Déplacé
│   ├── virages-difficiles.md       ← Déplacé
│   ├── lanes-passages-niveau.md    ← Déplacé
│   ├── dangers-permanents.md       ← Déplacé
│   └── delais-mise-a-jour.md       ← Déplacé
│
├── cartographie/
│   ├── index.md                    ← Vue d'ensemble Cartographie (nouveau)
│   ├── regles-edition.md           ← Déplacé
│   ├── nommage-routes.md           ← Déplacé
│   ├── geometrie-segments.md       ← Déplacé
│   ├── intersections.md            ← Déplacé
│   ├── ronds-points.md             ← Déplacé
│   ├── limites-vitesse.md          ← Déplacé
│   ├── parkings.md                 ← Déplacé
│   ├── chemins-agricoles.md        ← Déplacé
│   ├── chemins-pietons.md          ← Déplacé
│   ├── numeros-autoroutes.md       ← Déplacé (était groupe Autoroutes)
│   ├── freeways-guidelines.md      ← Déplacé (était groupe Autoroutes)
│   ├── vignette.md                 ← Déplacé (était groupe Spécificités suisses)
│   └── stickair-geneve.md          ← Déplacé (était groupe Spécificités suisses)
│
└── communaute/
    ├── index.md                    ← Vue d'ensemble Communauté (extrait org-communaute)
    ├── faq.md                      ← Déplacé
    └── ressources.md               ← Déplacé (WME Helper retiré → scripts.md)
```

### 2.2 Pages dissoutes

- `organisation-communaute.md` → dissout : niveaux → `wme/niveaux.md`, rôles → `wme/roles.md`, communauté → `communaute/index.md`
- `area-manager.md` → absorbé dans `wme/roles.md`
- Contenu Permalink + Serveurs Waze (actuellement dans `index.md`) → `wme/index.md`

---

## 3. Sidebar — vitepress-sidebar

### 3.1 Installation

```bash
npm install vitepress-sidebar
```

### 3.2 Config (config.ts)

Remplace la sidebar manuelle dans chaque locale par :

```ts
import { generateSidebar } from 'vitepress-sidebar';

const editorSections = ['fr/editors', 'en/editors', 'de/editors', 'it/editors'];

const sidebar = generateSidebar(
  editorSections.map((section) => ({
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

Le `sidebar` généré est passé à `themeConfig.sidebar` de chaque locale. La sidebar manuelle dans `config.ts` est supprimée intégralement.

`srcExclude: ['**/_shared/**']` reste dans la config pour exclure les partials des pages buildées.

### 3.3 Frontmatter order

Chaque page reçoit `order: N` dans son frontmatter. Ordre cible :

**`wme/`**
| order | fichier |
|-------|---------|
| 1 | index.md |
| 2 | interface.md |
| 3 | segments.md |
| 4 | restrictions-virage.md |
| 5 | niveaux.md |
| 6 | roles.md |
| 7 | scripts.md |
| 8 | legende-carte.md |
| 9 | routing.md |
| 10 | fermetures.md |
| 11 | fermeture-urs.md |
| 12 | virages-difficiles.md |
| 13 | lanes-passages-niveau.md |
| 14 | dangers-permanents.md |
| 15 | delais-mise-a-jour.md |

**`cartographie/`**
| order | fichier |
|-------|---------|
| 1 | index.md |
| 2 | regles-edition.md |
| 3 | nommage-routes.md |
| 4 | geometrie-segments.md |
| 5 | intersections.md |
| 6 | ronds-points.md |
| 7 | limites-vitesse.md |
| 8 | parkings.md |
| 9 | chemins-agricoles.md |
| 10 | chemins-pietons.md |
| 11 | numeros-autoroutes.md |
| 12 | freeways-guidelines.md |
| 13 | vignette.md |
| 14 | stickair-geneve.md |

**`communaute/`**
| order | fichier |
|-------|---------|
| 1 | index.md |
| 2 | faq.md |
| 3 | ressources.md |

`editors/index.md` et `editors/premiers-pas.md` à la racine : pas d'`order` nécessaire, ils apparaissent avant les sous-dossiers naturellement.

---

## 4. Nouvelles pages WME

### 4.1 Pages fetchées depuis Google Support

Source : https://support.google.com/waze#topic=6342345

| Page | Contenu clé |
|------|-------------|
| `wme/interface.md` | Panneaux (gauche : segments/lieux/URs, droite : propriétés), couches (satellitaire, GPS, etc.), raccourcis clavier, zoom/navigation |
| `wme/segments.md` | Créer un segment (draw), modifier géométrie, propriétés (type, nom, sens, vitesse), jonctions, sauvegarder |
| `wme/restrictions-virage.md` | Concept turn restriction, flèches vertes/rouges, restrictions temporelles, restrictions par type de véhicule |

Chaque page cite sa source Google Support en bloc `:::quote` et adopte le ton de la doc existante (français, tutoiement pour premiers-pas, vouvoiement ailleurs).

### 4.2 Pages assemblées depuis contenu existant

| Page | Sources | Contenu |
|------|---------|---------|
| `wme/index.md` | Nouveau | Présentation WME, lien waze.com/editor, Permalink, Serveurs Waze (INTL/NA/IL), liens vers sous-pages |
| `wme/niveaux.md` | `_shared/niveaux-editeur.md` + contenu org-communaute | `<!--@include: ../../_shared/niveaux-editeur.md-->` + contexte locks |
| `wme/roles.md` | `organisation-communaute.md` (rôles) + `area-manager.md` | AM, SM, RTC State Manager, CM — une page, liens cross vers communaute/ |
| `wme/scripts.md` | `ressources.md` (section outils) | WME Switzerland Helper, Tampermonkey, autres userscripts CH |
| `cartographie/index.md` | Nouveau | Vue d'ensemble des règles, pourquoi des règles CH spécifiques, liens vers sous-pages |
| `communaute/index.md` | `organisation-communaute.md` (partie communautaire) | Où poser une question (forum, Discord), comment s'impliquer, liens cross |

---

## 5. Pages modifiées

### `editors/index.md` (allégée)

Contenu cible :
- Brève description de la section
- "Par où commencer" → lien vers `premiers-pas`
- Lien vers la section WME
- Supprimer : ToC (Contenu de cette section), Permalink, Serveurs Waze, Communauté suisse, Ressources externes, tableau niveaux

### `editors/premiers-pas.md` (enrichi)

Reste un getting-started narratif. Enrichir avec :
- Liens explicites vers `wme/interface`, `wme/niveaux`, `wme/scripts`
- Liens vers `cartographie/regles-edition` et `cartographie/nommage-routes`
- Lien vers `communaute/index`
- Checklist étapes enrichie

---

## 6. Règles de contenu

- **Zéro duplication** : si une info existe dans une page, les autres la référencent avec un lien
- **`_shared/niveaux-editeur.md`** : reste le partial unique pour le tableau des niveaux — `<!--@include-->` depuis `wme/niveaux.md`, les autres pages linkent vers `wme/niveaux`
- **Liens cross-sections** privilégiés sur copie de contenu
- **Liens vers support Google** : chaque page WME technique cite sa source en `:::quote`
- **Tone** : vouvoiement sauf `premiers-pas.md` (tutoiement, guide pas à pas)

---

## 7. Plan de délégation — sub-agents

### Phase 0 — Main (séquentiel, bloquant)
1. Créer branche `refactor/doc-structure`
2. `npm install vitepress-sidebar`
3. Mettre à jour `config.ts` : import `generateSidebar`, remplacer sidebar manuelle, garder `srcExclude`
4. Vérifier build avec config vide (avant déplacement de fichiers)

### Phase 1 — Agent A : Migration fichiers (séquentiel)
- Créer les trois sous-dossiers (`wme/`, `cartographie/`, `communaute/`)
- Déplacer toutes les pages existantes vers leur nouveau chemin
- Ajouter `order: N` dans le frontmatter de chaque page déplacée
- Mettre à jour tous les liens internes (`/fr/editors/X` → `/fr/editors/wme/X` ou `/fr/editors/cartographie/X`)
- **Ne pas supprimer** `organisation-communaute.md` ni `area-manager.md` — Agent C en a besoin comme sources pour créer les nouvelles pages
- Vérifier build

### Phase 2 — Agents B et C (parallèles, worktrees isolés)

**Agent B — Nouvelles pages WME (fetch)**
- Fetch contenu depuis Google Support (interface, segments, turn restrictions)
- Rédiger `wme/interface.md`, `wme/segments.md`, `wme/restrictions-virage.md`
- Adapter ton et format à la doc existante
- Ajouter `order:` frontmatter

**Agent C — Pages index + modifications intro**
- Rédiger `wme/index.md` (avec Permalink, Serveurs, liens)
- Rédiger `wme/niveaux.md` (include _shared + contexte)
- Rédiger `wme/roles.md` (fusion AM + rôles)
- Rédiger `wme/scripts.md` (depuis ressources.md)
- Rédiger `cartographie/index.md`
- Rédiger `communaute/index.md`
- Alléger `editors/index.md`
- Enrichir `editors/premiers-pas.md`

### Phase 3 — Main (séquentiel)
- Merger les worktrees B et C
- Supprimer `organisation-communaute.md` et `area-manager.md` (dissous — contenu absorbé par les nouvelles pages)
- `npm run docs:build` — corriger liens cassés résiduels
- Commit final

---

## 8. Contraintes

- Locales `en/`, `de/`, `it/` : non touchées (leurs stubs restent à plat)
- La branche cible est `refactor/doc-structure`, basée sur `main`
- Conventional commits : `refactor(fr/editors):` pour les déplacements, `feat(fr/editors):` pour les nouvelles pages
- `docs/superpowers/` est exclu du site : `srcExclude: ['**/_shared/**', 'superpowers/**']`
