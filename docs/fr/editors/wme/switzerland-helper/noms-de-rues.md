---
title: Contrôleur de noms de rues
description: Comparer les noms de rues Waze au répertoire officiel suisse et corriger les écarts.
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/magnifier.png" alt="">

# Contrôleur de noms de rues

Le contrôleur compare le nom de chaque segment visible au **répertoire officiel suisse des
rues** et signale les écarts, avec une correction en un clic.

Il ne fait que constater un écart avec le registre officiel. Les règles de nommage, elles,
sont décrites dans [Nommage des routes](/fr/editors/cartographie/nommage-routes).

## Activer et scanner

Le contrôleur est **actif par défaut**. Il s'allume et s'éteint indifféremment par la case
**Nom des rues** du sélecteur de couches, ou par l'interrupteur **Actif** de l'onglet
**CH · Noms de rues**.

L'analyse se relance à chaque déplacement de la carte, à condition d'être assez zoomé. Si la
vue est trop large, la bannière propose un bouton **Scanner cette zone**, qui prend une à
deux minutes et reste annulable.

Le bouton **Rescanner** relit le répertoire officiel, utile après avoir corrigé une série de
segments.

## Lire les signalements

Les écarts sont regroupés par nom et par type. Chaque groupe affiche une pastille de couleur
et le type d'écart en toutes lettres.

| Type | Ce qu'il signale |
| --- | --- |
| `COSMETIC` | Typographie seulement : majuscules, apostrophe, espaces |
| `VARIANT` | Abréviation, accent ou article manquant |
| `BILINGUAL` | Rue bilingue : une seule langue en nom principal, l'autre en alternatif |
| `NEAR` | Faute de frappe probable |
| `WRONG_TYPE` | Type de voie différent ou manquant (Chemin au lieu de Route) |
| `WRONG_STREET` | Le nom est valide, mais c'est celui d'une autre rue |
| `WRONG_CITY` | Le nom existe, mais dans une autre localité |
| `NOT_FOUND` | Introuvable dans le répertoire officiel |
| `UNNAMED` | Segment sans nom, alors qu'une rue officielle passe dessous |
| `UNDER_LOCK` | Verrou plus bas que le minimum suisse |
| `OVER_LOCK` | Verrou plus haut que le minimum suisse, souvent volontaire |
| `MICRO_SEGMENT` | Segment de moins de 5 m, giratoires exclus |
| `LOOP` | Boucle de moins de 3 segments, à diviser |
| `NARROW_MISUSE` | Rue étroite mal utilisée : sens unique, ou moins de 50 m |
| `UNNAMED_NO_MATCH` | Sans nom, et rien d'officiel en dessous : le plus souvent normal |

::: important `WRONG_STREET` demande toujours une vérification
Ce signalement ne vient pas d'une comparaison de noms mais de la position du segment : une
autre rue officielle passe dessous. Il vous propose donc de remplacer un nom qui paraît
parfaitement correct.

Regardez la carte avant d'accepter. Les liens ↗ de chaque ligne ouvrent l'endroit exact sur
la carte fédérale et sur la carte cantonale quand elle existe.
:::

Les deux contrôles de verrou et `WRONG_STREET` ne sont pas actifs en dessous du niveau
éditeur 3, et `UNNAMED_NO_MATCH` est éteint par défaut parce qu'il remonte surtout des cas
normaux. Tous restent activables dans les réglages.

## Corriger

Trois chemins mènent à la même correction : le bouton **Corriger** de la liste, celui de
l'encadré ajouté en haut du panneau du segment, ou le raccourci <kbd>Alt</kbd>+<kbd>F</kbd>.

Les noms alternatifs existants sont conservés, et un nom bilingue est ajouté en alternatif
plutôt que de remplacer le principal.

Le bouton **Ignorer** masque un signalement que vous jugez faux. Ces exclusions restent sur
votre ordinateur, et **Réinitialiser** les rend toutes d'un coup.

::: important La correction de groupe demande le niveau éditeur 3
En dessous, les boutons **Tout corriger** et **Tout ignorer** n'apparaissent pas. La
correction segment par segment, elle, reste ouverte à tout le monde.

Une correction de groupe traite **50 segments au maximum** à la fois, demande confirmation
au-delà de 20, et s'arrête à la première erreur en indiquant où elle a buté.
:::

## La fenêtre flottante

Le WME bascule la barre latérale sur son panneau de sélection dès qu'on clique un segment :
l'onglet du contrôleur disparaît donc au moment où l'on s'en sert.

Le bouton **Détacher**, ou <kbd>Alt</kbd>+<kbd>W</kbd>, déplace la liste dans une petite
fenêtre qui reste visible en permanence. Elle se déplace par sa barre de titre, se
redimensionne par son coin, et retrouve sa place à la session suivante. **Rattacher** la
remet dans la barre latérale.

## Raccourcis clavier

| Raccourci | Action |
| --- | --- |
| <kbd>Alt</kbd>+<kbd>N</kbd> | Sélectionner l'écart suivant |
| <kbd>Alt</kbd>+<kbd>F</kbd> | Corriger le segment sélectionné |
| <kbd>Alt</kbd>+<kbd>W</kbd> | Détacher ou rattacher la fenêtre |

Tous sont remappables dans les réglages clavier du WME.

## Réglages

Les réglages permettent surtout de choisir **quels types de routes** sont vérifiés (les rues
et les routes principales le sont d'origine, pas les chemins ni les autoroutes) et **quels
types d'écarts** vous voulez voir.

Le reste sert à ajuster le confort : afficher le nom attendu sur la carte, accepter un nom
alternatif comme correct (utile en commune bilingue), masquer les segments verrouillés
au-dessus de votre niveau, ou changer la langue du contrôleur.

::: reminder Un « introuvable » n'est pas toujours une erreur
Dans les centres-villes très denses, le répertoire officiel ne renvoie pas tout, et des rues
correctes peuvent être signalées comme introuvables. La bannière vous prévient quand c'est le
cas : évitez alors les corrections de groupe.
:::

::: quote Sources
- Dépôt du script : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Répertoire officiel des rues : swisstopo, https://www.geo.admin.ch
:::
