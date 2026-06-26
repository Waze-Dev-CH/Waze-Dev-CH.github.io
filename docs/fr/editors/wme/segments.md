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
