---
title: Guide des intersections
---

# Guide des intersections

Cette page synthétise le guide suisse des intersections. Le principe directeur est simple : une intersection bien dessinée produit des instructions de guidage correctes. Une intersection doit représenter la réalité logique de la circulation, pas seulement sa géométrie exacte.

::: abstract Résumé
Plus c'est simple, mieux c'est. On dessine le moins d'éléments possible tout en obtenant les bonnes instructions de navigation.
:::

## Plus c'est simple, mieux c'est

La règle de base du guide : ne pas surcharger une intersection. On ajoute des segments, des noeuds ou de la géométrie uniquement quand c'est nécessaire pour obtenir l'instruction de guidage attendue. Une intersection plus simple est plus facile à maintenir et génère un routage plus fiable.

## Les bases

::: reminder À lire en premier
Cette section pose les fondations. Les comprendre avant tout le reste.
:::

### Une intersection dans Waze

Dans Waze, une intersection se compose au minimum de :

- au moins deux segments de route,
- un ou plusieurs noeuds de jonction,
- des autorisations ou interdictions de tourner à ces noeuds.

Ce sont ces éléments combinés qui déterminent les mouvements possibles et les instructions données au conducteur.

### Carrefour en T

Un carrefour en T relie une route qui se termine sur une autre route. Les segments doivent se rejoindre selon des angles proches de 90°. Quand les routes se rejoignent sous un angle aigu, le routeur peut produire une instruction de type « serrez à droite / serrez à gauche » au lieu d'un « tournez ». Le guide indique alors d'ajuster l'intersection pour obtenir la bonne instruction.

### Carrefour en +

Un carrefour en + (en croix) relie quatre branches en un noeud. Comme pour le carrefour en T, des angles proches de 90° aident le routeur à distinguer « tout droit » des virages.

## Contrôler les instructions de guidage

Le guide explique comment influencer l'instruction donnée au conducteur (tourner, serrer, continuer tout droit).

::: important Sections marquées dépassées
Dans la source, les sous-sections **Géométrie** et **Type et nom des segments** de ce chapitre sont signalées comme contenant des directives qui sont dépassées. Ne les appliquez pas comme des règles en vigueur. En cas de doute sur la géométrie ou le nommage des segments, consultez le Country Manager.
:::

## Entre voies

### Patte-d'oie

::: important Section marquée dépassée
La sous-section **Patte-d'oie** de la source est signalée comme contenant des directives qui sont dépassées. À ne pas appliquer telle quelle ; vérifier le standard en vigueur auprès du Country Manager.
:::

### Voies sans issue

Le guide traite les impasses, culs-de-sac et boucles. La partie consacrée aux impasses, voies sans issue et culs-de-sac est signalée dans la source comme contenant des directives qui sont dépassées.

::: important Section marquée dépassée
Impasse, voie sans issue et cul-de-sac : directives dépassées dans la source. La sous-section « Boucle » n'est pas marquée comme telle.
:::

### Ronds-points et giratoires

Le guide renvoie vers un guide dédié pour les ronds-points et giratoires.

::: note
Voir la page dédiée : [Ronds-points et giratoires](./ronds-points.md).
:::

### Connecteurs de carrefour à niveau

::: important Section marquée dépassée
La sous-section **Connecteurs de carrefour à niveau** est signalée dans la source comme contenant des directives qui sont dépassées, avec recommandation de consulter le Country Manager avant toute application. Ne pas l'utiliser comme règle en vigueur.
:::

### Intersection en noeud papillon (bowtie)

L'intersection en noeud papillon simplifie le croisement entre une route à chaussées séparées et une route à voie unique en réduisant le croisement à un seul point logique. Cette construction améliore le contrôle des demi-tours à ce point.

## Bretelles

Les bretelles servent à relier des segments de type Highway ou Freeway au niveau d'échangeurs dénivelés (croisements à niveaux séparés).

::: important Quand utiliser une bretelle : section marquée dépassée
Dans la source, la sous-section **Quand utiliser une bretelle** est signalée comme contenant des directives qui sont dépassées. La sous-section **Comment dessiner une bretelle** ne l'est pas. En cas de doute sur le choix d'utiliser une bretelle, consultez le Country Manager.
:::

Côté tracé, le principe « plus c'est simple, mieux c'est » s'applique : un seul segment de bretelle suffit en général, sauf si les trajectoires divergent franchement et justifient une scission.

## Intersections Highway et Freeway

### Sorties

Les bretelles de sortie doivent diverger de la route principale selon un angle de 20 à 30°. Cet angle produit l'instruction « Sortez à droite ». La structure, le nom et un exemple sont détaillés dans la source.

### Scission Highway / Freeway

Quand trois segments Highway se rejoignent sans « tout droit » évident, des noms différents et des angles similaires produisent une instruction « Restez à droite » ou « Restez à gauche ».

### Segments de guidage

Les segments de guidage doivent mesurer 15 à 20 mètres de long. Ils servent à fixer le bon point d'instruction avant une sortie ou une scission.

### Scission de bretelle

La source détaille également la scission d'une bretelle. Le même principe d'angles et de nommage s'applique pour obtenir l'instruction attendue.

## Échangeurs

Pour les échangeurs, le guide renvoie vers une ressource externe dédiée (« Limited Access Interchange Style Guide »).

::: note
Le détail des échangeurs n'est pas reproduit ici. Se référer à la ressource dédiée indiquée dans la source.
:::

## Cas particuliers

La source couvre quelques cas particuliers : transitions, route vers nulle part et routes décalées.

::: note
Le détail de ces cas n'est pas reproduit ici. Consulter la source pour le traitement précis.
:::

::: quote Sources
- Guide des intersections (Suisse) : https://www.waze.com/discuss/t/guide-des-intersections/377286
:::
