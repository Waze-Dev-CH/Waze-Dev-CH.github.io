---
title: Développeurs
---

<img class="macaron" src="/img/waze-kit/scripters.png" alt="" width="96" height="96">

# Développeurs Waze CH

Cette section s'adresse aux **développeurs** de scripts Waze pour la communauté suisse. Deux voies :

- **Contribuer au [WME Switzerland Helper](https://github.com/Waze-Dev-CH/WME-Switzerland-Helper)**, le script phare de la communauté (couches et données officielles suisses dans le WME).
- **Créer et maintenir votre propre script standalone** pour la Suisse.

Les [conventions de code](/fr/developers/conventions) valent pour les deux.

::: note Vous cherchez à *utiliser* un script ?
Pour installer et configurer des scripts en tant qu'éditeur, voir [Scripts et outils](/fr/editors/wme/scripts) dans la section Éditeurs. Ici, on parle de **coder**.
:::

## Le WME Switzerland Helper

Le script phare de la communauté : un userscript **TypeScript**, bundlé avec **Rollup**, testé avec **Vitest**, traduit via **i18next**. Il s'appuie sur le **SDK officiel du WME** (`wme-sdk-typings`) et sur **Turf.js** pour la géométrie.

Ce qu'il apporte à l'éditeur : couches officielles suisses (limites communales et cantonales swisstopo, noms géographiques swissNAMES3D), données de transport public (arrêts SBB avec noms officiels) et vérification des noms de rue selon les conventions suisses.

- [Contribuer au Helper](/fr/developers/contribuer) : prérequis, environnement de dev et flux de Pull Request.
- [Architecture du Helper](/fr/developers/architecture) : flux au démarrage, modèle de couches, carte du code.
- [Ajouter une couche au Helper](/fr/developers/ajouter-une-couche) : walkthrough concret de bout en bout.

### Contributeurs

Le Helper est maintenu par la communauté suisse. Merci à ses contributeurs :

- [73VW](https://github.com/73VW)
- [Neprena](https://github.com/Neprena)
- [bedo2991](https://github.com/bedo2991)

<!-- Liste reprise des contributeurs GitHub du dépôt (hors bots/IA). Régénérer : gh api repos/Waze-Dev-CH/WME-Switzerland-Helper/contributors -->

## Votre propre script

- [Créer un script standalone](/fr/developers/script-standalone) : démarrer, héberger, publier et partager votre propre script avec la communauté.

## Pour les deux

- [Conventions de code](/fr/developers/conventions) : SDK WME, style, i18n, changelog.
