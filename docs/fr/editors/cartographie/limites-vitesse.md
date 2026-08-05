---
title: Limites de vitesse
description: "Renseigner les limites de vitesse en Suisse dans le WME: limites générales de l'OCR, zones 30 et zones de rencontre, et ce qu'on ne saisit pas."
order: 5
---

<img class="banner-img is-narrow" src="/img/editors/moto.png" alt="">

# Limites de vitesse

Cette page couvre le renseignement des limites de vitesse sur les segments en Suisse: la
règle de saisie, les limites générales fixées par le droit fédéral, les zones 30 et zones
de rencontre, et les cas où le champ reste vide.

## Principe général

La limite saisie sur un segment est celle qui **s'applique légalement** au tronçon.

- **Quand une limite est signalée**, le panneau fait foi. On saisit sa valeur.
- **En l'absence de panneau**, on saisit la **limite générale** correspondant au type de
  route. Elle s'applique de droit, sans qu'aucune signalisation soit nécessaire.

::: important Ne pas confondre avec la vitesse pratiquée
La limite de vitesse est une valeur réglementaire, pas une observation. Elle ne se déduit
ni de la vitesse à laquelle on roule, ni des données de trafic remontées par
l'application.
:::

## Les limites générales en Suisse

L'ordonnance sur les règles de la circulation routière fixe quatre limites générales.

| Type de route | Limite générale |
| --- | --- |
| Dans les localités | **50 km/h** |
| Hors des localités | **80 km/h** |
| Semi-autoroutes | **100 km/h** |
| Autoroutes | **120 km/h** |

::: note Le 50 km/h s'applique parfois sans panneau
La limitation à 50 km/h vaut dans toute la zone bâtie de façon compacte. Pour qui entre
dans une localité par une **route secondaire peu importante** (route agricole de desserte,
chemin forestier, route qui ne relie pas directement deux localités), elle s'applique
**même en l'absence de signalisation**, dès qu'il existe une zone bâtie compacte.

C'est le cas type où l'on saisit 50 sans avoir vu de panneau sur l'imagerie.
:::

Le passage à 80 km/h se lit sur le terrain au signal « Fin de la vitesse maximale 50,
Limite générale », ou en quittant une semi-autoroute ou une autoroute.

<div class="media-row">
<img src="/img/panneaux/osr-2-30-1-limite-generale-50-fr.svg" alt="Signal 2.30.1, vitesse maximale 50, limite générale" width="120">
<img src="/img/panneaux/osr-2-53-1-fin-limite-generale-50-fr.svg" alt="Signal 2.53.1, fin de la vitesse maximale 50, limite générale" width="120">
</div>

## Saisir une vitesse dans le WME

Le champ **Vitesse** se trouve dans le panneau latéral, qui s'affiche dès qu'on
sélectionne un segment. Il accepte la **sélection multiple**: en choisissant plusieurs
segments d'un même tronçon, on renseigne la même valeur en une fois.

La valeur est en **km/h**. Un panneau ordinaire de limitation, comme celui-ci, se saisit
tel quel.

<div class="media-row">
<img src="/img/panneaux/osr-2-30-vitesse-maximale.svg" alt="Signal 2.30, vitesse maximale signalée" width="120">
</div>

Pour le détail des autres propriétés du segment, voir [Segments](/fr/editors/wme/segments).

## Zones 30 et zones de rencontre

Deux régimes de zone concernent directement la saisie.

| Zone | Limite | Signal |
| --- | --- | --- |
| **Zone 30** | 30 km/h | 2.59.1 |
| **Zone de rencontre** | 20 km/h | 2.59.5 |

<div class="media-row">
<img src="/img/panneaux/osr-2-59-1-zone-30.svg" alt="Signal 2.59.1, Zone 30" width="110">
<img src="/img/panneaux/osr-2-59-5-zone-de-rencontre.svg" alt="Signal 2.59.5, Zone de rencontre, 20 km/h" width="110">
</div>

Dans une zone de rencontre, les piétons peuvent utiliser toute l'aire de circulation et
ont la priorité. Ces deux signaux ne sont admis que sur des **routes secondaires**, non
destinées à la circulation générale: en croiser un sur un axe principal doit faire douter
de la lecture de l'imagerie.

La limite de zone s'applique à tous les segments compris dans le périmètre, jusqu'au
signal de fin.

## Ce qu'on ne saisit pas

- **Les ronds-points.** Un rond-point ne reçoit pas de limite de vitesse. Voir
  [Ronds-points](/fr/editors/cartographie/ronds-points).
- **Les vitesses conseillées.** Un panneau de recommandation n'est pas une limite.
- **Les valeurs relevées sur le terrain** qui ne correspondent à aucune signalisation ni à
  aucune limite générale.

## Quand la signalisation change

Les changements de limite remontent régulièrement sur le forum suisse, par exemple une
modification signalée sur la Schartenstrasse à Wettingen. Avant de mettre un segment à
jour, vérifier la nouvelle signalisation, et privilégier une source datée: arrêté communal
ou cantonal, publication officielle, imagerie récente.

::: quote Sources
- OCR (RS 741.11), art. 4a, limitations générales de vitesse: https://www.fedlex.admin.ch/eli/cc/1962/1364_1409_1420/fr
- OSR (RS 741.21), art. 22a et 22b, zone 30 et zone de rencontre: https://www.fedlex.admin.ch/eli/cc/1979/1961_1961_1961/fr
- Panneaux: signaux de l'OSR, Office fédéral des routes (ASTRA), domaine public, via https://commons.wikimedia.org/wiki/Category:SVG_road_signs_in_Switzerland
- Forum Suisse (cas de changements de vitesse): https://www.waze.com/discuss/c/editors/switzerland/4790
:::
