---
title: Voies (lanes) et passages à niveau
---

# Voies (lanes) et passages à niveau

Le guidage par voies (lane guidance), les instructions par flèches et les passages à niveau suivent des règles d'édition spécifiques à la Suisse.

::: important Réservé aux éditeurs L3 et plus
La configuration du guidage par voies et des instructions par flèches est réservée aux éditeurs de niveau L3 et plus. Les passages à niveau relèvent d'un niveau encore plus élevé. Si vous n'avez pas le niveau requis, n'intervenez pas sur ces objets.
:::

## Guidage par voies (lanes)

Le guidage par voies indique au conducteur la ou les voies à emprunter à l'approche d'une intersection. En Suisse, il suit le principe KISS (« Keep It Simple, Stupid »): en règle générale, **ne pas tracer de voies de présélection**. La plupart des intersections n'en ont pas besoin, et des segments de voies inutiles compliquent la carte, alourdissent la validation et ralentissent les calculs d'itinéraire.

Le tracé de voies de présélection ne se justifie que dans des cas particuliers:

- La voie démarre nettement avant l'intersection et en est physiquement séparée (terre-plein, îlot), de sorte qu'un changement de file devient impossible.
- Il y a un risque que l'instruction de tourner arrive trop tard pour atteindre la bonne voie avant l'intersection.
- Une erreur cartographique (« Map problem ») nécessite un segment de voie comme contournement.
- Des retours d'utilisateurs ou de gestionnaires de zone signalent des annonces vocales tardives.

En cas de doute, ne pas tracer la voie: la simplicité sert mieux les utilisateurs que la complexité. Pour la mise en place des intersections, voir [Intersections](/editors/intersections).

## Instructions par flèches (Abbiegeanweisungen)

Les instructions par flèches sont un moyen complémentaire de **forcer ou de supprimer une annonce** vocale lorsque les réglages standards ne produisent pas le résultat attendu. Principaux usages:

- Forcer ou supprimer une instruction de virage à une intersection.
- Générer une instruction de **demi-tour** dans une rue à sens unique où le retour est possible, à la place d'un « tourner à gauche ».
- Produire un **wayfinder simplifié** (maintien à gauche / à droite) qui annonce le segment suivant et aide à éviter des détours d'itinéraire indésirables.

Une instruction modifiée se reconnaît à la couleur du symbole haut-parleur sur la flèche: il passe de **cyan à orange**. Le cyan correspond à une annonce non forcée, déterminée par les algorithmes de Waze; l'orange signale une instruction forcée par un éditeur.

::: important Prudence pour les éditeurs juniors
Les nouveaux éditeurs et les éditeurs juniors devraient consulter un éditeur expérimenté avant d'utiliser ces options d'annonce supplémentaires.
:::

## Passages à niveau

::: note
Depuis juin 2024, les règles relatives aux passages à niveau ont été déplacées dans les directives « Permanent Hazards » (dangers permanents) de Waze. Voir [Dangers permanents](/editors/dangers-permanents).
:::

::: note Contenu détaillé à compléter
La source communautaire suisse renvoie les règles détaillées vers un document externe qui n'est pas repris ici. Cette page sera complétée quand ces directives détaillées seront disponibles. En attendant, se référer aux directives Permanent Hazards et au fil Waze Discuss ci-dessous.
:::

::: quote Sources
- Abbiegespuren: https://www.waze.com/discuss/t/abbiegespuren/377228
- Abbiegeanweisungen über Pfeile: https://www.waze.com/discuss/t/abbiegeanweisungen-uber-pfeile/377232
- Lanes / Railroad crossings editing rules for Switzerland: https://www.waze.com/discuss/t/lanes-railroad-crossings-editing-rules-for-switzerland/101939
:::
