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

Une route privée (Private Road), un parking (Parking Lot Road) ou un chemin non entretenu appliquent leur pénalité à la transition en sortie vers un autre type de route, pas à l'entrée. Consulter [Cartographie des parkings](/fr/editors/cartographie/parkings). Pour une voie privée coupée par une rue, voir [Exceptions](#exceptions).

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

## Exceptions

### Voie privée traversée par une rue

Quand une voie privée est coupée par une rue, ses deux tronçons ne doivent pas se toucher au nœud du croisement. On insère, d'un côté au moins, un court segment d'au moins 10 mètres, **du même type que la rue qui croise la voie privée**, entre le croisement et le début de la voie privée. Un seul côté suffit : dans les deux sens, la traversée passe alors par ce segment. Dans les exemples ci-dessous, la rue est de type Rue (Street).

<svg class="diagram" viewBox="0 0 760 380" role="img" aria-label="Trois cas de croisement entre une voie privée et une rue. Sans segment Rue, la voie privée passe directement par le nœud du croisement : aucune pénalité de voie privée, à éviter. Avec un segment Rue d'un côté : correct, la sortie de la voie privée déclenche la pénalité. Avec un segment Rue de chaque côté : correct aussi.">
  <rect class="d-panel" x="16" y="16" width="236" height="348" rx="16" />
  <rect class="d-panel" x="262" y="16" width="236" height="348" rx="16" />
  <rect class="d-panel" x="508" y="16" width="236" height="348" rx="16" />

  <text class="d-cap" x="36" y="52">Sans segment Rue</text>
  <text class="d-penalty" x="36" y="76">À éviter</text>
  <text class="d-cap" x="282" y="52">Un segment Rue</text>
  <text class="d-sub" x="282" y="76">Correct, suffisant</text>
  <text class="d-cap" x="528" y="52">Deux segments Rue</text>
  <text class="d-sub" x="528" y="76">Correct aussi</text>

  <line class="d-casing" x1="38" y1="235" x2="230" y2="235" />
  <line class="d-casing" x1="134" y1="120" x2="134" y2="340" />
  <line class="d-road d-private" x1="38" y1="235" x2="230" y2="235" />
  <line class="d-road d-street" x1="134" y1="120" x2="134" y2="340" />

  <line class="d-casing" x1="284" y1="235" x2="476" y2="235" />
  <line class="d-casing" x1="380" y1="120" x2="380" y2="340" />
  <line class="d-road d-private" x1="284" y1="235" x2="336" y2="235" />
  <line class="d-road d-street" x1="336" y1="235" x2="380" y2="235" />
  <line class="d-road d-private" x1="380" y1="235" x2="476" y2="235" />
  <line class="d-road d-street" x1="380" y1="120" x2="380" y2="340" />

  <line class="d-casing" x1="530" y1="235" x2="722" y2="235" />
  <line class="d-casing" x1="626" y1="120" x2="626" y2="340" />
  <line class="d-road d-private" x1="530" y1="235" x2="582" y2="235" />
  <line class="d-road d-street" x1="582" y1="235" x2="670" y2="235" />
  <line class="d-road d-private" x1="670" y1="235" x2="722" y2="235" />
  <line class="d-road d-street" x1="626" y1="120" x2="626" y2="340" />

  <circle class="d-end" cx="38" cy="235" r="5" />
  <circle class="d-end" cx="230" cy="235" r="5" />
  <circle class="d-end" cx="134" cy="120" r="5" />
  <circle class="d-end" cx="134" cy="340" r="5" />
  <circle class="d-junction" cx="134" cy="235" r="9" />

  <circle class="d-end" cx="284" cy="235" r="5" />
  <circle class="d-end" cx="476" cy="235" r="5" />
  <circle class="d-end" cx="380" cy="120" r="5" />
  <circle class="d-end" cx="380" cy="340" r="5" />
  <circle class="d-junction" cx="336" cy="235" r="7" />
  <circle class="d-junction" cx="380" cy="235" r="9" />

  <circle class="d-end" cx="530" cy="235" r="5" />
  <circle class="d-end" cx="722" cy="235" r="5" />
  <circle class="d-end" cx="626" cy="120" r="5" />
  <circle class="d-end" cx="626" cy="340" r="5" />
  <circle class="d-junction" cx="582" cy="235" r="7" />
  <circle class="d-junction" cx="626" cy="235" r="9" />
  <circle class="d-junction" cx="670" cy="235" r="7" />

  <text class="d-sub" x="40" y="272">Voie privée</text>
  <text class="d-sub" x="146" y="140">Rue</text>
  <text class="d-sub" x="286" y="272">Voie privée</text>
  <text class="d-sub" x="392" y="140">Rue</text>
  <text class="d-sub" x="532" y="272">Voie privée</text>
  <text class="d-sub" x="638" y="140">Rue</text>

  <text class="d-sub" x="120" y="180" text-anchor="end">aucune</text>
  <text class="d-sub" x="120" y="197" text-anchor="end">pénalité</text>
  <line class="d-lead" x1="114" y1="204" x2="126" y2="225" />
  <line class="d-arrow" x1="42" y1="214" x2="74" y2="214" />
  <polyline class="d-arrow" points="67,209 74,214 67,219" />

  <text class="d-penalty" x="336" y="196" text-anchor="middle">pénalité</text>
  <line class="d-lead" x1="336" y1="203" x2="336" y2="224" />
  <line class="d-arrow" x1="288" y1="214" x2="320" y2="214" />
  <polyline class="d-arrow" points="313,209 320,214 313,219" />

  <text class="d-penalty" x="582" y="196" text-anchor="middle">pénalité</text>
  <line class="d-lead" x1="582" y1="203" x2="582" y2="224" />
  <line class="d-arrow" x1="534" y1="214" x2="566" y2="214" />
  <polyline class="d-arrow" points="559,209 566,214 559,219" />

</svg>

**Pourquoi.** La pénalité d'une voie privée s'applique à la **sortie** vers un autre type de route, pas à l'entrée. Si les deux tronçons privés touchent directement le nœud, traverser tout droit reste un passage de privé à privé : aucune pénalité de voie privée au croisement. Une succession de voies privées ne déclenche alors qu'une seule pénalité, à la sortie finale vers un autre type de route, et Waze peut la retenir comme raccourci de transit.

Avec un segment Rue, chaque traversée de la rue depuis une voie privée déclenche une pénalité à la sortie du tronçon privé. Ces pénalités se cumulent et rendent le raccourci moins avantageux pour le calcul d'itinéraire.

![Chemin de Sorécot et Chemin de Pre-Louis : ici un segment Rue de chaque côté du croisement (sélection en pointillé)](/penalites/voie-privee-croisement.jpg)

::: important Pourquoi pas une restriction de virage
Une restriction de virage « dure » interdit la manœuvre à tous, y compris aux ayants droit et aux conducteurs qui veulent rejoindre une destination située sur la voie. La pénalité laisse la manœuvre possible tout en la défavorisant dans le calcul d'itinéraire.
:::

::: warning Attention
- Viser au moins 10 mètres par segment intermédiaire : le minimum absolu est de 5 mètres ([micro-segments](/fr/editors/cartographie/geometrie-segments#micro-segments)), et cette marge évite qu'un segment trop juste soit traité comme micro-segment.
- Donner au ou aux segments intermédiaires le même type que la rue qui croise la voie privée.
:::

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
