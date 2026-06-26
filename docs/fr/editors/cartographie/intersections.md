---
title: Guide des intersections
order: 5
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

Un carrefour en T relie une route qui se termine sur une autre route. Les segments doivent se rejoindre selon des angles proches de 90°. Quand les routes se rejoignent sous un angle aigu, ajouter des points de géométrie pour redresser l'intersection vers 90°. Sans cela, le routeur peut produire un "serrez à droite / serrez à gauche" au lieu d'un "tournez", omettre une instruction, ou générer des erreurs de carte automatiques.

### Carrefour en +

Un carrefour en + (en croix) relie quatre branches en un noeud. Comme pour le carrefour en T, viser des angles proches de 90° aide le routeur à distinguer "tout droit" des virages. Travailler à fort zoom : les corrections d'angle deviennent quasi invisibles au zoom normal.

## Contrôler les instructions de guidage

L'angle de virage détermine l'instruction donnée au conducteur.

| Angle | Plage | Type de route | Instruction |
| --- | --- | --- | --- |
| 22° | 0° a 44° | Routes ordinaires | Restez a gauche / a droite |
| 22° | 0° a 44° | Rampes / autoroutes | Sortez a gauche / a droite |
| 90° | 45° a 150° | Tous types | Tournez a gauche / a droite |

::: important Angles à éviter
- Autour de 45° : une erreur de 0,5° peut suffire à déclencher la mauvaise instruction.
- En dessous de 10° : les flèches deviennent difficiles à sélectionner dans l'éditeur et les segments difficiles à toucher dans l'application.
:::

### Nommage des segments internes

Les segments situés à l'intérieur d'une intersection restent sans nom, sauf si toutes les directions possibles recevraient de toute façon une instruction correcte. Nommer un segment interne n'est acceptable que si aucune direction (demi-tour inclus) ne peut produire d'erreur de routage.

## Entre voies

### Patte-d'oie

Le serveur de routage considère que deux segments de même nom connectés à un angle d'environ 0° représentent un trajet "tout droit".

Exemple : une avenue qui continue tout droit pendant qu'une rue se détache.

- Les deux segments de l'avenue (avant et après) : même nom, angle d'environ 0° au croisement.
- La rue qui se détache : angle de 90° par rapport à l'avenue.
- Résultat : le routeur identifie correctement le virage vers la rue.

### Voies sans issue

- Une impasse se représente par un segment simple, sans connexion à son extrémité, avec un noeud de jonction au terminus, placé là où le conducteur peut physiquement l'atteindre. Ne pas l'étendre jusqu'au bord absolu.
- Un cul-de-sac circulaire se trace en général comme une impasse standard, avec le noeud placé près du centre de la boucle pour rester accessible quel que soit le sens d'arrivée.
- Exception : si un petit îlot occupe le centre, placer le segment sur le bord extérieur de la boucle pour que l'extrémité reste accessible.

### Boucles

Un segment ne peut pas se connecter à lui-même via un seul noeud. Une boucle doit être interrompue par un noeud supplémentaire, ou dessinée avec deux segments. En pratique, créer une intersection à 3 branches à peu près à mi-parcours de la boucle pour que le routage fonctionne.

### Routes décalées

Quand deux routes se croisent presque sans être parfaitement alignées :

1. Vrai croisement à 4 branches : le convertir en une vraie intersection à 4 branches.
2. Quasi-alignement : décaler légèrement les routes hors de l'axe et ajouter des points de géométrie pour obtenir des angles de 90° au noeud.
3. Approches réellement distinctes : conserver des jonctions séparées avec un guidage "tournez à gauche" puis "tournez à droite".

::: important Segments très courts
Un segment très court entre deux approches décalées déclenche des erreurs de carte automatiques et des recalculs d'itinéraire. Maximiser la distance entre les points d'approche.
:::

### Ronds-points et giratoires

Le guide renvoie vers une page dédiée pour les ronds-points et giratoires.

::: note
Voir la page dédiée : [Ronds-points et giratoires](./ronds-points.md).
:::

### Noeuds de transition

Les noeuds de transition sont des jonctions invisibles côté application. Ils servent aux changements de nom de rue, aux limites de localité, aux changements de direction et aux composants de boucle. Ne les supprimer qu'en étant certain qu'ils ne sont plus utilisés : ils simplifient la carte et réduisent les facteurs de routage inutiles.

### Intersection en noeud papillon (bowtie)

L'intersection en noeud papillon simplifie le croisement entre une route à chaussées séparées et une route à voie unique en réduisant le croisement à un seul point logique. Cette construction améliore le contrôle des demi-tours à ce point, sans dépendre de la longueur des segments.

## Soft et Hard turns

Les connexions générées automatiquement par WME sont des soft-turns (point d'interrogation violet) ; les décisions manuelles de l'éditeur sont des hard-turns. Quatre états existent, du plus pénalisant au moins pénalisant : hard restreint (flèche rouge), soft restreint (point d'interrogation violet), soft autorisé (flèche verte), hard autorisé (flèche verte confirmée).

::: example Méthode rapide à une nouvelle intersection
Vérifier d'abord les directions, puis "Q" pour interdire tous les virages, puis "W" pour les autoriser tous, et enfin passer en hard restreint uniquement les virages réellement interdits.
:::

## Bretelles

Les bretelles servent à relier des segments de type Highway ou Freeway au niveau d'échangeurs dénivelés (croisements à niveaux séparés).

Côté tracé, le principe "plus c'est simple, mieux c'est" s'applique : un seul segment de bretelle suffit en général, avec une seule jonction si les distances sont faibles. Une scission en plusieurs segments ne se justifie que si les extrémités sont nettement espacées. Conserver un angle de départ de 20 à 30° pour produire l'instruction "Sortez".

## Intersections Highway et Freeway

### Sorties

Les bretelles de sortie doivent diverger de la route principale selon un angle de 20 à 30°. Cet angle produit l'instruction "Sortez à droite". Les segments avant et après la jonction restent de type Highway ou Freeway, de même nom, à un angle d'environ 0° ; la bretelle est de type Ramp.

### Scission Highway / Freeway

Quand trois segments Highway se rejoignent sans "tout droit" évident, des noms différents et des angles de 20 à 30° produisent une instruction "Restez à droite" ou "Restez à gauche" avec le nom de la branche.

### Segments de guidage

Les segments de guidage doivent mesurer 15 à 20 mètres de long. Ils servent à prévenir le conducteur en cas de réduction de voies, de signalisation incohérente ou de routage non évident (par exemple sortir à gauche puis se rabattre à droite). Les trois segments concernés doivent porter des noms distincts, et les deux segments encadrants être de type identique.

### Scission de bretelle

La source détaille également la scission d'une bretelle. Le même principe d'angles et de nommage s'applique pour obtenir l'instruction attendue.

## Ponts et tunnels

Les routes qui se superposent sans se croiser réellement (ponts, passages supérieurs, passages inférieurs, tunnels) doivent être séparées par des niveaux d'élévation de segment.

- Par défaut, tout segment est au niveau 0.
- La fonction pont (bridge) attribue au segment supérieur un niveau d'une unité au-dessus du plus haut des deux segments sélectionnés.
- Un tunnel reçoit le niveau -1, pour que Waze le reconnaisse comme tunnel et exclue les erreurs de carte automatiques.

::: important Conditions de la fonction pont
La fonction pont agit sur deux segments à la fois et exige des propriétés concordantes : pays, canton, localité et nom de rue. Elle ne fonctionne pas si un segment n'a pas de sens de circulation défini ("Inconnu"). Le type de route et le verrouillage sont sans incidence.
:::

Après application, corriger manuellement les niveaux obtenus et supprimer les points de géométrie devenus inutiles là où une intersection existait auparavant.

## Échangeurs

Pour les échangeurs, le guide renvoie vers une ressource externe dédiée.

::: note Limited Access Interchange Style Guide
Le détail des échangeurs n'est pas reproduit ici. Se référer au "Limited Access Interchange Style Guide" indiqué dans la source.
:::

::: quote Sources
- Kreuzungen : https://www.waze.com/discuss/t/kreuzungen/377258
- Guide des intersections (Suisse) : https://www.waze.com/discuss/t/guide-des-intersections/377286
- Unterführungen und Brücken : https://www.waze.com/discuss/t/unterfuhrungen-und-brucken/377274
- Soft und Hard Turns : https://www.waze.com/discuss/t/soft-und-hard-turns/377271
:::
