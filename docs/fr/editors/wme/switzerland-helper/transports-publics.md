---
title: Arrêts de transports publics
description: Créer, fusionner et nettoyer les lieux d'arrêt à partir des données officielles des CFF.
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/location.png" alt="">

# Arrêts de transports publics

La couche **Arrêts de transports publics** affiche les arrêts officiels des CFF. Elle sert à
créer ceux qui manquent dans Waze, et à repérer ceux qui n'existent plus.

::: important La couche ne montre que ce qui demande une action
Un arrêt déjà cartographié à proximité, sous le même nom, est masqué. Si la carte paraît vide
dans une gare bien traitée, c'est normal : il n'y a rien à y faire.
:::

## Lire la carte

| Symbole | Signification | Ce qu'on en fait |
| --- | --- | --- |
| Pastille **orange** | Arrêt officiel absent de Waze | Le créer, ou le fusionner avec un lieu proche |
| Pastille **rouge** | Lieu Waze sans arrêt officiel correspondant | Vérifier, puis supprimer s'il a bien disparu |
| Pastille avec un **nombre** | Un groupe d'arrêts, quand on est peu zoomé | Cliquer pour zoomer dessus |

## Créer ou fusionner un arrêt

Cliquez sur une pastille orange.

::: reminder Il faut être suffisamment zoomé
Si vous ne l'êtes pas assez, le script se contente de recentrer et de zoomer sur l'arrêt.
Cliquez une seconde fois sur la pastille pour ouvrir le dialogue.
:::

Le script regarde alors s'il existe déjà un lieu de transport à proximité :

- **Aucun lieu proche** : il crée le lieu directement, avec son nom officiel et sa catégorie.
- **Un lieu existant** : un dialogue propose **Fusionner**, **Fusionner et mettre à jour les
  coordonnées**, **Enregistrer le nouveau** ou **Annuler**.
- **Plusieurs lieux candidats** : il vous demande d'abord lequel choisir.

**Fusionner** applique les informations officielles au lieu existant sans en créer un
nouveau. C'est presque toujours le bon choix quand l'arrêt est déjà là mais mal nommé.

Le lieu est ensuite sélectionné dans l'éditeur pour que vous puissiez le relire, avec sa ville
déjà remplie. La pastille orange disparaît.

## Ce que le script fait au nom

Les noms bruts des CFF ne sont pas utilisables tels quels. Le script les nettoie avant de les
proposer : il retire le nom de la localité quand il double déjà la ville, écarte les mentions
entre parenthèses, déplie les abréviations (`Rte` devient `Route`) et place les autres
graphies en noms alternatifs.

## Supprimer un arrêt obsolète

Un clic sur une pastille rouge propose la suppression du lieu.

::: important Vérifiez avant de supprimer
Un arrêt peut disparaître pour de bonnes raisons (ligne supprimée, arrêt déplacé), mais aussi
parce que le lieu Waze porte un nom trop éloigné du nom officiel. Dans ce second cas, il faut
corriger le nom, pas supprimer le lieu.

Les ports et places d'amarrage ne sont jamais signalés comme obsolètes.
:::

Un **bouton en forme de bus** est ajouté en haut de la carte : il recharge les arrêts sans
bouger la vue, ce qui est pratique après en avoir traité plusieurs.

::: quote Sources
- Dépôt du script : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Données des arrêts : CFF, https://data.sbb.ch
:::
