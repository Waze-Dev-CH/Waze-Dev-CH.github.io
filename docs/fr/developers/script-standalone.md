---
title: Créer un script standalone
order: 4
---

<img class="banner-img is-narrow" src="/img/editors/code-editor.png" alt="">

# Créer un script standalone

Vous n'êtes pas obligé de passer par le Helper : vous pouvez créer et maintenir **votre propre userscript** Waze pour la Suisse. Cette page donne les points de repère ; les [conventions de code](/fr/developers/conventions) s'appliquent aussi à votre projet.

## Point de départ

Un userscript s'exécute dans le WME via **Tampermonkey** (ou Greasemonkey sur Firefox). Pour toucher à la carte, passe par le **SDK officiel du WME**, typé par `wme-sdk-typings`, documenté sur [waze.com/editor/sdk](https://www.waze.com/editor/sdk/index.html). Éviter les hacks DOM qui court-circuitent le SDK : ils cassent à chaque mise à jour du WME.

Le [Helper](/fr/developers/architecture) est un bon exemple de projet SDK complet (TypeScript + Rollup + tests) dont s'inspirer.

## Héberger le code

Publier le code sur **GitHub** (dépôt public), avec une licence claire. Un script utile à la communauté peut être proposé à l'organisation [Waze-Dev-CH](https://github.com/Waze-Dev-CH) pour être maintenu collectivement : en discuter sur le [Discord de la communauté](https://discord.gg/dmxUwvTkk5) (zone DACH).

## Publier et installer

Le header du userscript (`// ==UserScript==`) porte les métadonnées d'installation et de mise à jour :

- `@downloadURL` / `@updateURL` : l'URL du `.user.js` (par ex. un fichier de release sur GitHub) pour que Tampermonkey installe et mette à jour automatiquement.
- `@match https://www.waze.com/*editor*` : restreindre l'exécution au WME.

Option : publier aussi sur [GreasyFork](https://greasyfork.org/) pour la découvrabilité.

## Conventions

Suivre les [conventions de code](/fr/developers/conventions) : conformité au SDK, code pensé pour la relecture. Si le script est multilingue, prévoir les 4 langues (de, en, fr, it).

## Partager avec la communauté

- Annoncer le script sur le [forum romand](https://www.waze.com/discuss/c/editors/switzerland/romandie/4797) ou le [Discord de la communauté](https://discord.gg/dmxUwvTkk5).
- Le faire lister dans la doc : ouvrir une PR sur ce site pour l'ajouter à [Scripts et outils](/fr/editors/wme/scripts) et aux [Ressources](/fr/editors/communaute/ressources).

::: quote Sources
- Documentation du SDK WME : https://www.waze.com/editor/sdk/index.html
- Tampermonkey : https://www.tampermonkey.net/
- GreasyFork : https://greasyfork.org/
:::
