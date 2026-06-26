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

