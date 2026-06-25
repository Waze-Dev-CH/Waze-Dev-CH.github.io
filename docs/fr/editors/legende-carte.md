---
title: Légende de la carte
description: Types de segments disponibles dans le Waze Map Editor et leur usage en Suisse.
---

# Légende de la carte suisse

::: tip Accessible à tous — Niveau L1
Cette page s'adresse à tous les éditeurs, débutants compris.
:::

La légende décrit les types de segments utilisés en Suisse et la façon dont ils s'affichent dans l'éditeur Waze (WME). Le type se choisit d'après la signalisation officielle visible sur le terrain. La pastille de couleur sous chaque type correspond à son affichage actuel dans WME.

::: important La classification est propre à chaque pays
La classification des routes diffère d'un pays à l'autre. Avant d'éditer en Suisse, lisez le Wiki national. N'appliquez pas par analogie les règles d'un pays voisin.
:::

## Segments et croisements

Un segment est une ligne limitée par deux points. Dans WME, les segments servent à dessiner les rues. Un segment est délimité, dans notre cas, par un croisement.

<svg class="diagram" viewBox="0 0 760 360" role="img" aria-label="Un réseau de segments de types différents reliés par des nœuds, à des angles variés.">
  <rect class="d-panel" x="16" y="16" width="728" height="328" rx="16" />

  <polyline class="d-casing" points="70,225 255,285 475,150 690,190" />
  <polyline class="d-casing" points="150,70 255,285" />
  <polyline class="d-casing" points="475,150 560,330" />
  <polyline class="d-casing" points="255,285 95,330" />

  <polyline class="d-road d-major" points="70,225 255,285 475,150 690,190" />
  <polyline class="d-road d-minor" points="150,70 255,285" />
  <polyline class="d-road d-primary" points="475,150 560,330" />
  <polyline class="d-road d-street" points="255,285 95,330" />

  <circle class="d-end" cx="70" cy="225" r="5" />
  <circle class="d-end" cx="690" cy="190" r="5" />
  <circle class="d-end" cx="150" cy="70" r="5" />
  <circle class="d-end" cx="560" cy="330" r="5" />
  <circle class="d-end" cx="95" cy="330" r="5" />
  <circle class="d-junction" cx="255" cy="285" r="10" />
  <circle class="d-junction" cx="475" cy="150" r="10" />

  <line class="d-lead" x1="120" y1="150" x2="198" y2="178" />
  <text class="d-cap" x="60" y="145">Segment</text>
  <line class="d-lead" x1="548" y1="108" x2="486" y2="142" />
  <text class="d-cap" x="556" y="104">Nœud (croisement)</text>
</svg>

## Types de segments

Le nom WME d'origine (en anglais) est rappelé entre parenthèses, car il reste identique quelle que soit la langue de l'éditeur.

### Autoroute (Freeway)

<span class="road-chip" style="background:#C577D2" title="Autoroute (Freeway)"></span>

Une Autoroute est à voies séparées, sans feux ni panneau stop. Elle est accessible uniquement par les entrées et sorties. Les autres rues ne doivent pas y être connectées (sauf voies de service de secours). Beaucoup de routes nationales suivent une autoroute: dans ce cas, la signalisation autoroute est prioritaire. Les panneaux sont verts.

<div class="sign-row">
<img src="/img/legende-carte/c16ea2fbd7a1396bc1c982fb08168e48879a8b93.png" alt="Panneau autoroute suisse">
<img src="/img/legende-carte/c0699c9cb1ff4a95b48d1fd9b00b2fab9542ff9b.png" alt="Panneau fin d'autoroute">
<img src="/img/legende-carte/d935b7ab6b128977a2e3517fb92afee4f1dc6785.png" alt="Panneau de direction autoroute">
</div>

### Route majeure (Major Highway)

<span class="road-chip" style="background:#46B8D2" title="Route majeure (Major Highway)"></span>

Une Route majeure est une semi-autoroute. Les panneaux de semi-autoroute en Suisse sont verts.

<div class="sign-row">
<img src="/img/legende-carte/e827a9907ac2e5a5bd1adf16e1184070c5187877.png" alt="Panneau semi-autoroute suisse">
<img src="/img/legende-carte/ef5e9ee47fe2f256fc82cf6cf53710c5952b53d3.png" alt="Panneau fin de semi-autoroute">
</div>

### Route mineure (Minor Highway)

<span class="road-chip" style="background:#69BF88" title="Route mineure (Minor Highway)"></span>

Une Route mineure est une route nationale. Toutes les autres routes jaunes sont classées en Rue principale.

<div class="sign-row">
<img src="/img/legende-carte/10794e9459bcfc37b4036320fd123d30bf65a528.png" alt="Panneau route nationale">
<img src="/img/legende-carte/e7143b3bfcdafe2a61239b2e5e8fc9c2375ab9f7.png" alt="Panneau route nationale">
<img src="/img/legende-carte/6cea032b690ba2c8ff03c282525635b04008f887.png" alt="Panneau route nationale">
</div>

### Bretelle (Ramp)

<span class="road-chip" style="background:#B3BFB3" title="Bretelle (Ramp)"></span>

Les bretelles servent aux entrées et sorties d'autoroute et de semi-autoroute.

<div class="sign-row">
<img src="/img/legende-carte/d9070357827ee97cf0a53169eabc2f847a48fe57.png" alt="Bretelle d'autoroute">
<img src="/img/legende-carte/70783028364b5d3f68db9abbbbf21552db61b405.png" alt="Panneau de sortie">
</div>

### Rue principale (Primary Street)

<span class="road-chip" style="background:#F1EA58" title="Rue principale (Primary Street)"></span>

Les Rue principale correspondent aux routes principales en localité, selon la signalisation suivante.

<div class="sign-row">
<img src="/img/legende-carte/8f0a4ee76b3c5ad73da36ba0fda31c01b14259f0.png" alt="Panneau route principale">
<img src="/img/legende-carte/7155655a75375a0a720489cd5f4b16718aa6e9b7.png" alt="Panneau route principale">
<img src="/img/legende-carte/db96e5269c6f2137de9197ee3754048ca647c028.png" alt="Exemple Rue principale">
<img src="/img/legende-carte/acda4aed89c392695c374d21ce3a6c588c76e3e8.png" alt="Exemple Rue principale">
<img src="/img/legende-carte/70a24d49a5c45652cc13e58c85ad7dd7ad785bea.png" alt="Exemple Rue principale">
</div>

### Rue (Street)

<span class="road-chip" style="background:#ffffff" title="Rue (Street), affichée en blanc"></span>

En Rue, on classe toutes les routes secondaires et de quartier accessibles à la circulation normale, en sens unique ou à double sens. Les routes secondaires portent des panneaux blancs.

::: note Affichée en blanc
La Rue (Street) s'affiche en blanc dans WME. La pastille ci-dessus est entourée d'un fin liseré pour rester visible.
:::

<div class="sign-row">
<img src="/img/legende-carte/60652f5793f16bb5865b17c20dea5f1f0b411131.png" alt="Panneau blanc de rue secondaire">
<img src="/img/legende-carte/5ad955f94b7166d6f0f58ccf9101719283867581.png" alt="Panneau blanc de rue secondaire">
<img src="/img/legende-carte/1669f4b889bbecbb00c50f3cd49943a7f2ba669c.png" alt="Panneau blanc de rue secondaire">
</div>

![Exemple de route normale](/img/legende-carte/d645bf0e83126c958200db92665ce0cbd6c8a335.jpeg)

### Rue étroite (Narrow Street)

<span class="road-chip" style="background:#64799A" title="Rue étroite (Narrow Street)"></span>

Voie étroite à double sens. Les règles d'emploi figurent dans [Géométrie des segments](/fr/editors/geometrie-segments).

### Chemin de terre (Dirt Road / 4x4)

<span class="road-chip" style="background:#867342" title="Chemin de terre (Dirt Road)"></span>

Les Chemin de terre sont les routes non goudronnées: routes forestières, chemins pour tracteur et pistes 4x4.

![Exemple de route non goudronnée](/img/legende-carte/b9e0b12d4547e855f420bcd99e7691ff405ceb9d.jpeg)

### Voie de parking (Parking Lot Road)

<span class="road-chip" style="background:#ABABAB" title="Voie de parking (Parking Lot Road)"></span>

Les Voie de parking sont les grands parkings, parkings de restoroute, voies internes de parking et accès aux stations-service.

![Exemple de parking](/img/legende-carte/2a31cdf4f51fee24022961453bb0dcbe33e61bc0.jpeg)

### Voie privée (Private Road)

<span class="road-chip" style="background:#B8B56A" title="Voie privée (Private Road)"></span>

Les Voie privée sont toutes les rues privées affichées comme telles.

### Walking Trail

Les Walking Trail sont tous les chemins pédestres. Ils ne doivent jamais relier deux routes routables entre elles.

![Exemple de chemin pédestre](/img/legende-carte/a859600785f35f6a691f5dff4d99dfe3d30c4648.jpeg)

### Pedestrian Boardwalk

Les Pedestrian Boardwalk sont les zones piétonnes, y compris les promenades au bord des lacs. Même règle de non-connexion que les Walking Trail.

![Exemple de zone piétonne](/img/legende-carte/b43e72f3de0029121a7a6e5fea0daf4eb6e37923.jpeg)

### Stairway

Les Stairway sont les escaliers. Même restriction de connexion.

![Exemple d'escalier](/img/legende-carte/28e8a2412a6b5835e4a45f08dfdcfec9f646cf42.jpeg)

### Voie ferrée (Railroad)

Les voies ferrées sont les chemins de fer. En général, ne pas les enregistrer via le client mais dans l'éditeur. Elles peuvent être connectées à d'autres rues pour les passages à niveau. Indiquer le nom de la compagnie comme nom de rue, sans ville. Verrouiller au niveau L2.

### Runway/Taxiway

Les Runway/Taxiway sont les pistes d'atterrissage. Elles complètent la carte, mais il n'est pas conseillé de cartographier tous les aéroports: un repère (Place de type Airport) suffit.

::: note
Le type de segment a un impact direct sur le calcul d'itinéraire. Un mauvais classement peut induire des routes incohérentes. En cas de doute, consultez les [règles d'édition suisses](/fr/editors/regles-edition).
:::

::: quote Source(s)
- Légende de la Carte Suisse : https://www.waze.com/discuss/t/legende-de-la-carte-suisse/377261
- Couleurs des types de route : palette WME vérifiée par la communauté suisse.
:::
