---
title: "Numérotation des autoroutes (Axx / Exx)"
---

# Numérotation des autoroutes (Axx / Exx)

Les autoroutes suisses sont identifiées par deux systèmes de numérotation affichés sur les panneaux physiques :

- **Axx** — numéro national suisse (ex. A1, A9, A13)
- **Exx** — numéro de route européenne (ex. E25, E27, E62)

Ces numéros doivent être ajoutés comme **noms alternatifs** sur les segments d'autoroute dans WME. Cela améliore le routage longue distance, car le serveur de routage identifie la continuité d'une route via son nom alternatif — contrairement au nom principal, qui change fréquemment aux bifurcations A/E.

::: important
Ne jamais modifier le nom principal du segment — ajouter uniquement des noms alternatifs.
:::

## Réutiliser un bouclier existant

Avant de créer un nouveau nom alternatif, vérifier si le bouclier existe déjà à proximité du segment. Si oui, le sélectionner depuis les suggestions pour réutiliser le même ID.

::: warning Doublons d'ID à éviter
Les suggestions WME n'affichent que les noms géographiquement proches. Un E25 créé à Genève n'apparaîtra pas en suggestion à Zurich, même s'il existe déjà. Créer un second E25 avec un ID différent briserait la cohérence du réseau routier.

Vérifier sur la carte WME si le numéro existe déjà ailleurs en Suisse avant toute création.
:::

![Réutiliser un bouclier existant (exemple gauche) vs. bouclier absent (exemple droit)](/nexus/image7.png)

![Suggestions de noms alternatifs dans WME](/nexus/image8.png)

## Créer un nouveau bouclier

Si le numéro n'existe encore nulle part en Suisse :

1. Saisir le nom Exx ou Axx — lettres et chiffres collés, sans espace ni tiret (ex. **E25** ✓ / E 25 ✗ / E-25 ✗) — laisser Ville sur « Aucune »
2. Cliquer sur **Appliquer**
3. Cliquer sur l'icône bouclier
4. Sélectionner le type de bouclier
5. Saisir le numéro — pour les Axx, entrer **uniquement le chiffre** dans le champ bouclier (sans la lettre A)
6. Cliquer sur **Appliquer**
7. Sauvegarder

![Procédure de création d'un nouveau bouclier dans WME](/nexus/image9.png)

## Numéros à ajouter par segment

| Type | Format | Exemple |
|------|--------|---------|
| Autoroute nationale | Axx | A1, A9, A13 |
| Route européenne | Exx | E25, E27, E62 |

Un segment peut porter plusieurs noms alternatifs si plusieurs routes se superposent (ex. A1 et E25 sur le même tronçon).

![Exemples de noms alternatifs Axx et Exx sur un segment](/nexus/image10.png)
