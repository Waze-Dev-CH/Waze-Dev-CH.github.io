---
title: Arrêts de transports publics
description: Créer, fusionner et nettoyer les lieux d'arrêt à partir des données officielles des CFF.
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/location.png" alt="">

# Arrêts de transports publics

La couche **Arrêts de transports publics** affiche les arrêts officiels du registre suisse
des transports publics, tenu par les CFF. Elle sert à deux choses : créer les arrêts qui
manquent dans Waze, et repérer ceux qui n'existent plus.

Elle s'active par sa case dans le sélecteur de couches, comme les autres.

::: important La couche ne montre que ce qui demande une action
Un arrêt déjà cartographié par un lieu du même nom **dans un rayon de 75 mètres** est masqué.
Si la carte paraît vide dans une gare bien traitée, c'est le résultat attendu : il n'y a rien
à y faire.
:::

## Lire la carte

| Symbole | Signification | Ce qu'on en fait |
| --- | --- | --- |
| Pastille **orange** avec un bus | Arrêt officiel actif, absent de Waze | Le créer, ou le fusionner avec un lieu proche |
| Pastille **rouge** avec un bus | Lieu Waze de transport sans arrêt officiel correspondant | Vérifier, puis supprimer s'il a bien disparu |
| Pastille avec un **nombre** | Un groupe d'arrêts, aux zooms 12 à 14 | Cliquer pour zoomer dessus |

Un clic sur un groupe recadre simplement la carte sur son emprise ; il n'ouvre aucun
dialogue.

## Créer ou fusionner un arrêt

Cliquez sur une pastille orange.

::: reminder Il faut être zoomé au niveau 16 au minimum
En dessous, le script ne propose rien : il recentre la carte sur l'arrêt et zoome au niveau
17. Cliquez une seconde fois sur la pastille pour ouvrir le dialogue.
:::

Le script cherche alors les lieux de transport déjà présents dans un rayon de 75 mètres, et
propose l'une de ces suites :

- **Aucun lieu proche** : le lieu est créé directement, avec son nom officiel et sa
  catégorie.
- **Un lieu existant** : un dialogue propose **Fusionner**, **Fusionner et mettre à jour les
  coordonnées**, **Enregistrer le nouveau** ou **Annuler**.
- **Un lieu déjà exactement au bon endroit** (à moins de 2,5 mètres) : seul **Fusionner** est
  proposé, puisque déplacer le point n'aurait aucun sens.
- **Plusieurs lieux candidats** : un premier dialogue vous demande lequel choisir, puis le
  dialogue de fusion s'ouvre.

**Fusionner** applique les informations officielles au lieu existant sans en créer un
nouveau. C'est presque toujours le bon choix quand l'arrêt est déjà là mais mal nommé.

Après la création ou la fusion, le script **attribue automatiquement la ville** au lieu, à
partir de la localité de l'arrêt officiel, puis sélectionne le lieu dans l'éditeur pour que
vous puissiez le relire. La pastille orange disparaît de la carte.

## Ce que le script fait au nom

Les noms bruts du registre CFF ne sont pas utilisables tels quels dans Waze. Le script les
nettoie avant de les proposer :

- il retire le **préfixe de localité** quand il double déjà la ville du lieu ;
- il retire les mentions de transport entre parenthèses et les marques CFF, SBB, FFS ;
- il **déplie les abréviations** courantes : `Rte` devient `Route`, `Ptes` devient `Petites`,
  `Bif.` devient `Bifurcation` ;
- il conserve un suffixe de canton à deux lettres quand il y en a un ;
- il place les autres graphies en **noms alternatifs**.

La catégorie du lieu est déduite du moyen de transport : station de bus, de tram, de train,
de métro, port, remontée mécanique. Un funiculaire est classé en gare ferroviaire.

## Supprimer un arrêt obsolète

Un clic sur une pastille rouge propose la suppression du lieu, qui n'a plus d'arrêt officiel
correspondant.

::: important Vérifiez avant de supprimer
Un arrêt peut disparaître du registre pour de bonnes raisons (ligne supprimée, arrêt
déplacé), mais aussi parce que le lieu Waze porte un nom trop éloigné du nom officiel. Dans
ce second cas, il faut corriger le nom, pas supprimer le lieu.

Les **ports et places d'amarrage** ne sont jamais signalés comme obsolètes : les données CFF
ne font pas autorité sur ce type de lieu.
:::

## Repères et limites

| Repère | Valeur |
| --- | --- |
| Zoom minimum pour voir la couche | 12 |
| Zoom minimum pour agir sur un arrêt | 16 |
| Zoom appliqué automatiquement si vous cliquez trop loin | 17 |
| Rayon de recherche des lieux existants | 75 m |
| Distance en dessous de laquelle le point est jugé déjà bien placé | 2,5 m |
| Regroupement en pastilles | zooms 12 à 14 |

Un **bouton de rechargement** en forme de bus est ajouté à la barre de boutons en haut de la
carte. Il recharge les arrêts sans bouger la vue, ce qui est utile après avoir traité
plusieurs lieux. Il tourne pendant le chargement.

::: quote Sources
- Dépôt du script : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Données des arrêts : https://data.sbb.ch (registre suisse des transports publics)
:::
