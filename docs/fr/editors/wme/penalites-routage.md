---
title: Pénalités de routage
description: Comment Waze pénalise certaines manœuvres et types de routes dans le calcul d'itinéraire, et ce qui relève d'une restriction absolue.
order: 4.5
---

<img class="banner-img is-narrow" src="/img/editors/traffic.png" alt="">

# Pénalités de routage

## Concept des pénalités

Une pénalité de routage est un temps supplémentaire, invisible dans l'heure d'arrivée estimée (ETA), ajouté par le serveur de routage à un itinéraire candidat pour éviter une situation indésirable. La pénalité ne bloque pas un trajet : elle fait préférer une alternative quand il en existe une.

::: important
Les valeurs exactes des pénalités sont propriétaires et non publiques. Il ne faut pas diffuser de chiffres précis sur les pénalités appliquées.
:::

Historiquement, Waze a longtemps supporté deux environnements de cartes (les cartes éditées manuellement et les cartes importées sans correction). Cette architecture a conduit à un système par pénalités plutôt qu'un système par interdictions absolues, pour gérer les cas non vérifiés ou incertains.

## Pénalités liées aux propriétés des segments

### Virages restreints et autorisés

Un virage restreint « soft » (soft restricted turn, flèche rouge avec point d'interrogation violet dans le WME) applique une pénalité élevée. Cette pénalité permet quand même le routage sur des virages jamais vérifiés lorsqu'aucune alternative n'existe.

Un virage autorisé « soft » (soft allowed turn, flèche verte avec point d'interrogation violet) applique une pénalité très faible.

Pour les restrictions de virage en général, consulter la page [Restrictions de virage](/fr/editors/wme/restrictions-virage).

### Virages difficiles

Les virages difficiles (difficult turn) sont pénalisés selon la préférence du conducteur et activés par défaut dans l'application Waze. Consulter la page [Virages difficiles](/fr/editors/wme/virages-difficiles) pour en savoir plus sur leur configuration.

### Routes non pavées

Une route non pavée (Unpaved) est pénalisée selon les préférences du conducteur : option « éviter les routes non pavées » (activée par défaut) et option « éviter les longues portions » au-delà d'environ 300 mètres. Consulter [Chemins agricoles](/fr/editors/cartographie/chemins-agricoles).

### Routes à péage

Les routes à péage (Toll) reçoivent une pénalité augmentée pour les conducteurs qui ont activé l'option « éviter les péages ».

### Autoroutes

Les autoroutes (Freeway) sont pénalisées uniquement si le conducteur a activé « éviter les autoroutes », option désactivée par défaut.

### Ferries

Les ferries reçoivent une pénalité uniquement si le conducteur a activé « éviter les ferries », option désactivée par défaut.

### Routes privées, parkings et chemins non entretenus

Une route privée (Private Road), un parking (Parking Lot Road) ou un chemin non entretenu appliquent leur pénalité à la transition en sortie vers un autre type de route, pas à l'entrée. Consulter [Cartographie des parkings](/fr/editors/cartographie/parkings).

### Passages étroits

Un passage étroit (Passageway) reçoit une forte pénalité, sauf pour les motos. À noter : aux États-Unis, l'usage de ce type est soumis à approbation depuis octobre 2018 (règle locale américaine).

## Pénalités liées à la configuration du réseau

### Demi-tours

Historiquement, les demi-tours (U-turns) étaient pénalisés sur les doubles virages à gauche ou à droite au bout de segments courts. Aux États-Unis, cette pénalité a été désactivée en décembre 2021. La recommandation actuelle est d'utiliser une junction box pour empêcher les demi-tours indésirables sur les routes à chaussées séparées.

![Segment trop court pour autoriser deux virages à gauche successifs](/penalites/segment-trop-court.png)

### Prévention des détours

Le mécanisme de prévention des détours (detour prevention) pénalise les itinéraires qui quittent une autoroute pour y revenir immédiatement, qui passent deux fois par le même nœud ou la même junction box, ou qui font des boucles.

![Les bretelles correctement cartographiées empêchent un détour sortie et retour immédiat](/penalites/detour-bretelles.png)

### Segments nombreux et courts

Une légère pénalité s'applique aux itinéraires comportant beaucoup de segments courts, notamment les segments récemment créés sans données de trafic historiques disponibles.

## Restrictions absolues

À l'inverse des pénalités, certaines situations interdisent complètement le passage sans exception :

- **Fermeture de route** : consulter [Fermetures de routes](/fr/editors/wme/fermetures)
- **Virage restreint « dur »** (flèche rouge sans point d'interrogation) : interdiction absolue. Historiquement, c'était une pénalité, mais ce comportement a évolué.
- **Restrictions horaires** de virage ou de segment : selon leurs conditions
- **Sens interdit** sur une route à sens unique
- **Types non carrossables** : voie ferrée (Railroad), piste d'atterrissage (Runway), voies piétonnes
- **Segment déconnecté** du réseau

::: important
Depuis que les restrictions de virage « dur » sont devenues absolues, il est inutile et nuisible de déconnecter ou de supprimer des segments pour empêcher le routage. Préférer configurer une restriction de virage ou une fermeture si nécessaire.
:::

## Voir aussi

- [Bases du routing](/fr/editors/wme/routing)
- [Restrictions de virage](/fr/editors/wme/restrictions-virage)
- [Virages difficiles](/fr/editors/wme/virages-difficiles)
- [Chemins agricoles](/fr/editors/cartographie/chemins-agricoles)
- [Fermetures de routes](/fr/editors/wme/fermetures)
- [Cartographie des parkings](/fr/editors/cartographie/parkings)

::: quote Sources
- Routing penalties (forum officiel Waze) : https://www.waze.com/discuss/t/routing-penalties/377968
:::
