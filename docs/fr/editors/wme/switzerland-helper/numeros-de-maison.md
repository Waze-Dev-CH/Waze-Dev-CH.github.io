---
title: Numéros de maison
description: Importer les numéros de maison officiels du registre fédéral des bâtiments (RegBL/GWR) dans le WME.
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/city.png" alt="">

# Numéros de maison

L'importateur affiche les points d'adresse du **registre fédéral des bâtiments et des
logements** (RegBL/GWR) et permet de créer les numéros manquants dans Waze, un par un ou par
rue entière.

## Activer la fonction

::: reminder La fonction est éteinte au premier lancement
C'est volontaire : elle dessine des points sur la carte et interroge une API externe, donc
c'est à vous de l'allumer.
:::

Deux commandes équivalentes, toujours synchronisées :

- la case **Numéros de maison suisses** dans le sélecteur de couches ;
- l'interrupteur **Activer l'importateur de numéros** en haut de l'onglet
  **CH · Numéros de maison**.

Les points apparaissent à partir du **zoom 17**, et les numéros s'écrivent en clair à côté
des points à partir du zoom 18.

## Lire les points

| Point | Signification | Cliquable |
| --- | --- | --- |
| **Vert vif**, gros | Numéro de la rue sélectionnée, absent de Waze : à importer | Oui |
| **Vert pâle**, petit | Numéro déjà posé sur la rue | Non |
| **Gris** | Adresse appartenant à une autre rue | Non |
| **Gris-bleu** | Aucune rue sélectionnée, ou vérification en cours | Non |

::: important Le gris-bleu veut aussi dire « patientez »
Après avoir sélectionné un segment, le script doit d'abord lire les numéros déjà posés.
Pendant ce court instant, les points restent gris-bleu et **volontairement inertes**. Sans
cela, un clic trop rapide créerait un doublon d'un numéro déjà présent.

Attendez que les points passent au vert avant de cliquer.
:::

## Importer un numéro

1. **Sélectionnez d'abord le segment de rue.** Sans cela, le script ne sait ni à quoi
   rattacher le numéro, ni quels numéros existent déjà.
2. Cliquez sur un point vert vif. Le numéro est créé aux coordonnées exactes du registre.

::: note Le numéro n'est pas forcément rattaché au segment que vous avez sélectionné
Une rue est découpée en plusieurs segments dans le WME, à chaque intersection. Chaque numéro
est rattaché **au segment devant lequel il se trouve réellement**, et non à celui que vous
avez cliqué. C'est ce qui évite qu'un numéro de coin d'immeuble finisse accroché à la rue
perpendiculaire.

Pour la même raison, le script cherche les doublons sur **tous les segments de la même rue**
chargés dans la vue : le numéro 15 est souvent posé sur le tronçon d'à côté.
:::

Si vous préférez une confirmation à chaque clic, activez **Confirmer chaque import unitaire**
dans les réglages.

## Importer toute une rue

Quand un segment est sélectionné, un bouton d'import en masse apparaît, dans l'onglet et dans
l'encadré ajouté en haut du panneau d'édition du segment. Le raccourci
<kbd>Alt</kbd>+<kbd>H</kbd> fait la même chose.

- **50 numéros au maximum** par action. S'il en manque davantage, le bouton l'annonce
  (« Importer 50 des 120 numéros manquants ») et il suffit de relancer.
- **Confirmation dès 2 numéros.** Le message liste les numéros concernés, dans l'ordre, et
  précise en combien de segments la rue est découpée.
- Si le contrôleur de noms signale que le nom de la rue diffère du registre officiel, la
  confirmation vous le dit. C'est informatif : les numéros sont rattachés à la rue telle
  qu'elle est nommée aujourd'hui.
- En cas d'échec, l'import **s'arrête immédiatement** et indique combien de numéros ont été
  créés avant l'arrêt.

::: important Relisez toujours le résultat sur la carte
Les coordonnées du registre visent le bâtiment, pas la porte : une entrée de cour, une maison
en retrait de la route ou une villa dans un grand jardin donneront un point mal placé du
point de vue de la navigation. Déplacez les numéros concernés avant d'enregistrer.
:::

## Quand le bouton d'import en masse n'apparaît pas

Le bouton est **masqué**, jamais grisé, dans trois situations :

- **Aucun segment n'est sélectionné.** L'onglet vous invite à en choisir un.
- **Il ne manque aucun numéro.** Tout est déjà posé, il n'y a rien à faire.
- **La zone est trop dense pour être listée entièrement.** Le script le dit explicitement.
  Le nombre de numéros manquants ne serait alors qu'une borne inférieure, et un import en
  masse ne pourrait rien garantir. **Les clics individuels continuent de fonctionner**, et
  restent fiables.

## Annuler

<kbd>Ctrl</kbd>+<kbd>Z</kbd> annule la création comme n'importe quelle autre modification du
WME. Les points annulés redeviennent verts et proposables.

Vous verrez peut-être les points repasser brièvement en gris-bleu juste après l'annulation :
le WME n'indique pas quel numéro a disparu, le script relit donc la rue entière avant de
redonner la main. C'est normal, et cela dure une fraction de seconde.

## Communes bilingues

Le script compare **tous les noms du registre à tous les noms du segment**, principal et
alternatifs. Un segment nommé *Zentralstrasse* est donc bien reconnu comme correspondant aux
adresses *Rue Centrale* du registre, et inversement. C'est ce qui rend la fonction utilisable
à Bienne, à Fribourg ou dans les Grisons.

## Réglages

| Réglage | Par défaut | Effet |
| --- | --- | --- |
| Zoom minimum | 17 | En dessous, les adresses ne sont pas chargées |
| Afficher les numéros sur la carte | activé | Étiquettes à partir du zoom 18 |
| Correspondance stricte des noms de rue | activé | Désactivé, tolère une ou deux lettres d'écart |
| Uniquement les bâtiments construits | activé | Écarte les bâtiments projetés, autorisés ou en chantier |
| Confirmer chaque import unitaire | désactivé | Un dialogue à chaque clic sur un point |

Deux actions restent accessibles en permanence : **Rafraîchir les numéros existants**, et
**Vider le cache et recharger** si vous soupçonnez des données périmées. Les adresses sont
gardées en cache une semaine, le registre bougeant à l'échelle du mois.

Le raccourci <kbd>Alt</kbd>+<kbd>J</kbd> allume et éteint la couche. Il fonctionne même
quand la fonction est désactivée, ce qui évite d'aller rechercher la case.

::: quote Sources et origine
- Dépôt du script : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Registre fédéral des bâtiments et des logements : couche `ch.bfs.gebaeude_wohnungs_register` sur https://www.geo.admin.ch
- L'idée de cette fonction vient du script « WME Quick HN Importer CH » d'Ari (Reloaded) et Gerhard, d'après le concept original de Tom 'Glodenox' Puttemans pour la Belgique. L'implémentation du Helper est écrite sur le SDK du WME, sans reprise de code.
:::
