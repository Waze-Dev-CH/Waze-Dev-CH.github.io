---
title: WME Switzerland Helper
description: Installer et utiliser le userscript suisse du WME, avec ses couches cartographiques, ses arrêts de transports publics, son contrôle des noms de rues et son import des numéros de maison.
order: 16
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# WME Switzerland Helper

Le **WME Switzerland Helper** est le userscript de référence pour éditer en Suisse. Il ajoute
à l'éditeur les fonds de carte fédéraux, les arrêts de transports publics des CFF, un
contrôle des noms de rues et l'import des numéros de maison officiels.

::: important Rien n'est jamais enregistré à votre place
Une correction de nom, un import de numéros, une fusion de lieu : tout rejoint vos
modifications en cours. C'est vous qui relisez et qui cliquez sur **Enregistrer**, et
<kbd>Ctrl</kbd>+<kbd>Z</kbd> annule normalement.
:::

## Installation

::: help En trois étapes
1. Installer **Tampermonkey** dans votre navigateur : [Chrome et Edge](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), ou chercher « Tampermonkey » dans le magasin d'extensions de votre navigateur
2. Ouvrir le [lien d'installation du script](https://raw.githubusercontent.com/Waze-Dev-CH/WME-Switzerland-Helper/releases/releases/main.user.js), puis cliquer sur **Install**
3. Ouvrir ou recharger le [WME](https://www.waze.com/editor)
:::

Les mises à jour sont ensuite automatiques.

::: note Attention à ne pas installer le mauvais script
Le seul lien officiel est celui ci-dessus. Une page Greasyfork au nom voisin existe, mais
elle concerne un autre script.
:::

## Où les choses apparaissent

- **Les cases à cocher** arrivent dans le sélecteur de couches, en bas de la barre de droite.
- **Les onglets** arrivent dans la barre `Scripts`, à gauche : **WME Suisse Helper**,
  **CH · Noms de rues** et **CH · Numéros de maison**.

Le préfixe `CH ·` sert à repérer les onglets du script au milieu de ceux des autres
userscripts que vous avez installés.

## Les quatre fonctions

- [**Couches cartographiques**](/fr/editors/wme/switzerland-helper/couches) : limites
  communales et cantonales, noms géographiques, cartes nationales et imagerie aérienne
  SWISSIMAGE.
- [**Arrêts de transports publics**](/fr/editors/wme/switzerland-helper/transports-publics) :
  les arrêts officiels des CFF affichés sur la carte, à créer ou à fusionner en un clic.
- [**Contrôleur de noms de rues**](/fr/editors/wme/switzerland-helper/noms-de-rues) :
  comparaison des noms Waze au répertoire officiel suisse, avec correction assistée.
- [**Numéros de maison**](/fr/editors/wme/switzerland-helper/numeros-de-maison) : import des
  numéros officiels du registre fédéral des bâtiments.

::: reminder Vos réglages restent sur votre ordinateur
Les réglages du script, y compris les signalements que vous choisissez d'ignorer, sont
enregistrés dans votre navigateur. Si vous éditez depuis deux machines, chacune a les siens.
:::

::: quote Sources
- Dépôt du script : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Auteurs : Maël Pedretti (Marelitaw) et Yann Rapenne (Neprena)
:::
