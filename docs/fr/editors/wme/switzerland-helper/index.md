---
title: WME Switzerland Helper
description: Installer et utiliser le userscript suisse du WME, avec ses couches cartographiques, ses arrêts de transports publics, son contrôle des noms de rues et son import des numéros de maison.
order: 16
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# WME Switzerland Helper

Le **WME Switzerland Helper** est le userscript de référence pour éditer en Suisse. Il ajoute
à l'éditeur les fonds de carte fédéraux, les arrêts de transports publics des CFF, un
contrôle des noms de rues contre le répertoire officiel, et l'import des numéros de maison
du registre fédéral des bâtiments.

::: important Rien n'est jamais enregistré à votre place
Aucune fonction du script n'enregistre quoi que ce soit. Une correction de nom, un import de
numéros, une fusion de lieu : tout rejoint votre pile de modifications en cours dans le WME.
C'est vous qui relisez et qui cliquez sur **Enregistrer**, et <kbd>Ctrl</kbd>+<kbd>Z</kbd>
annule normalement.
:::

## Installation

::: help En trois étapes
1. Installer **Tampermonkey** dans votre navigateur : [Chrome et Edge](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), ou chercher « Tampermonkey » dans le magasin d'extensions de votre navigateur
2. Ouvrir le [lien d'installation du script](https://raw.githubusercontent.com/Waze-Dev-CH/WME-Switzerland-Helper/releases/releases/main.user.js) : Tampermonkey affiche une page d'installation, cliquer sur **Install**
3. Ouvrir ou recharger le [WME](https://www.waze.com/editor)
:::

Les mises à jour sont ensuite automatiques : Tampermonkey va rechercher les nouvelles
versions tout seul. Aucun autre script n'est nécessaire, et il n'y a rien à installer côté
WME.

::: note Le script n'est pas publié sur Greasyfork
Le seul lien d'installation officiel est celui ci-dessus, sur le dépôt
[Waze-Dev-CH](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper). Une page Greasyfork
au nom voisin existe, mais elle concerne un autre script, écrit par d'autres personnes.
:::

## Où les choses apparaissent

Le script s'installe à deux endroits de l'éditeur :

- **Le sélecteur de couches**, en bas de la barre de droite : c'est là qu'arrivent les cases
  à cocher des couches suisses, des arrêts de transports publics, du contrôleur de noms de
  rues et des numéros de maison.
- **La barre `Scripts`**, à gauche : c'est là qu'arrivent les onglets.

Le script pose trois onglets :

| Onglet | Ce qu'on y fait |
| --- | --- |
| **WME Suisse Helper** | Présentation et notes sur les couches |
| **CH · Noms de rues** | [Contrôleur de noms de rues](/fr/editors/wme/switzerland-helper/noms-de-rues) |
| **CH · Numéros de maison** | [Import des numéros de maison](/fr/editors/wme/switzerland-helper/numeros-de-maison) |

::: note Pourquoi ce préfixe « CH · » ?
La barre `Scripts` mélange les onglets de tous les userscripts installés, et le WME n'offre
aucun moyen de les ordonner, de les grouper ou de les colorer. La seule chose que le script
maîtrise est le texte de l'étiquette, d'où ce marqueur commun.

Le script tente aussi de rapprocher ses trois onglets les uns des autres, mais sans
garantie : si l'éditeur ne s'y prête pas, ils restent simplement là où ils tombent, toujours
marqués.
:::

## Les quatre fonctions

- [**Couches cartographiques**](/fr/editors/wme/switzerland-helper/couches) : limites
  communales et cantonales, noms géographiques, cartes nationales et imagerie aérienne
  SWISSIMAGE, servies par swisstopo.
- [**Arrêts de transports publics**](/fr/editors/wme/switzerland-helper/transports-publics) :
  les arrêts officiels des CFF affichés sur la carte, à créer ou à fusionner en un clic.
- [**Contrôleur de noms de rues**](/fr/editors/wme/switzerland-helper/noms-de-rues) :
  comparaison des noms Waze au répertoire officiel suisse des rues, avec correction assistée.
- [**Numéros de maison**](/fr/editors/wme/switzerland-helper/numeros-de-maison) : import des
  numéros officiels depuis le registre fédéral des bâtiments et des logements (RegBL/GWR).

## Réglages et vie privée

Tous les réglages du script, y compris les signalements que vous choisissez d'ignorer et la
position de la fenêtre flottante, sont **stockés localement dans votre navigateur**. Rien
n'est envoyé nulle part et rien n'est synchronisé entre vos machines : si vous éditez depuis
deux ordinateurs, chacun a ses propres réglages.

Le contrôleur de noms de rues et l'importateur de numéros ont chacun **leur propre réglage de
langue**, indépendant de l'autre et de celui du WME. C'est voulu : on peut préférer lire les
verdicts en français tout en éditant dans un WME configuré en allemand. Le reste du script,
lui, suit la langue de l'éditeur.

::: reminder Vous voulez contribuer au code ?
Le développement du script est documenté dans la section
[Développeurs](/fr/developers/), avec l'architecture, les conventions et la marche à suivre
pour ajouter une couche.
:::

::: quote Sources
- Dépôt du script : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Auteurs : Maël Pedretti (Marelitaw) et Yann Rapenne (Neprena)
:::
