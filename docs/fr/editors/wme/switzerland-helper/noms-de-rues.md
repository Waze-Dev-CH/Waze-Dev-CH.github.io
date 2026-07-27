---
title: Contrôleur de noms de rues
description: Comparer les noms de rues Waze au répertoire officiel suisse, lire les verdicts et corriger les écarts sans risque.
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/magnifier.png" alt="">

# Contrôleur de noms de rues

Le contrôleur compare le nom de chaque segment visible au **répertoire officiel suisse des
rues**, tenu par swisstopo, et signale les écarts. Il propose une correction en un clic, et
il explique toujours d'où vient son verdict.

Il n'invente aucune règle de nommage : il constate un écart avec le registre. Les règles
suisses, elles, sont décrites dans [Nommage des routes](/fr/editors/cartographie/nommage-routes).

## Activer et scanner

Le contrôleur est **actif par défaut**. Deux commandes équivalentes le pilotent, toujours
synchronisées :

- la case **Nom des rues** dans le sélecteur de couches ;
- l'interrupteur **Actif** en haut de l'onglet **CH · Noms de rues**.

Le scan se déclenche automatiquement quand vous déplacez la carte, à partir du **zoom 15**.
En dessous, la bannière affiche *Zoomez pour scanner*.

::: help Scanner une zone plus large
Le scan automatique s'arrête à **6 km²** de surface visible : au-delà, la bannière propose un
bouton **Scanner cette zone**, qui lit le répertoire tuile par tuile jusqu'à **50 km²**. Cela
prend une à deux minutes.

Ce balayage est annulable à tout moment, et les résultats déjà obtenus sont conservés.
Déplacer la carte pendant l'opération ne l'interrompt pas.
:::

Le bouton **Rescanner** vide le cache et relit le répertoire officiel, ce qui est utile après
avoir corrigé une série de segments.

## Lire les verdicts

Les écarts sont regroupés par nom et par type d'erreur. Chaque groupe porte une pastille de
couleur **et le code du verdict en clair** : la couleur seule ne porte jamais l'information.

| Code | Ce qu'il signale |
| --- | --- |
| `COSMETIC` | Typographie uniquement : casse, apostrophe, espaces |
| `VARIANT` | Abréviation, accent ou article manquant ; l'orthographe officielle est proposée |
| `BILINGUAL` | Rue bilingue : le nom principal doit être dans une seule langue, l'autre en nom alternatif |
| `NEAR` | Faute de frappe probable : un seul nom officiel ressemble au nom saisi |
| `WRONG_TYPE` | Type de voie différent ou manquant (Chemin au lieu de Route, ou nom sans type) |
| `WRONG_STREET` | Le nom est valide, mais la rue officielle qui passe sous le segment en porte un autre |
| `WRONG_CITY` | Le nom existe, mais dans une autre localité |
| `NOT_FOUND` | Introuvable dans le répertoire officiel |
| `UNNAMED` | Segment d'un type vérifié, sans nom ; la rue officielle dessous est proposée |
| `UNDER_LOCK` | Verrou plus bas que le minimum suisse pour ce type de route |
| `MICRO_SEGMENT` | Segment carrossable de moins de 5 m, giratoires exclus |
| `LOOP` | Boucle de moins de 3 segments, à diviser |
| `NARROW_MISUSE` | Rue étroite mal utilisée : sens unique, ou moins de 50 m |
| `OVER_LOCK` | Verrou plus haut que le minimum suisse, souvent volontaire |
| `UNNAMED_NO_MATCH` | Sans nom, et aucune rue officielle en dessous : généralement normal |

::: important `WRONG_STREET` mérite une vérification systématique
C'est le seul verdict qui ne repose pas sur une comparaison de noms, mais sur la
**géométrie** : le script constate qu'une autre rue officielle passe sous le segment. Il vous
demande donc de remplacer un nom qui paraît parfaitement correct.

Il demande confirmation à chaque fois, même pour un seul segment, et affiche ses chiffres :
le pourcentage du segment couvert par la rue officielle et la distance à son axe. Regardez la
carte avant d'accepter. Les liens ↗ de chaque ligne ouvrent l'endroit exact sur
`map.geo.admin.ch` et sur la carte cantonale quand elle existe.
:::

Trois verdicts sont **désactivés par défaut** et restent activables à la main dans les
réglages :

- `UNNAMED_NO_MATCH`, qui remonte surtout du bruit légitime ;
- `UNDER_LOCK`, `OVER_LOCK` et `WRONG_STREET` en dessous du **niveau éditeur 3**, les verrous
  étant rarement gérés à ces niveaux.

## Corriger un segment

Trois chemins mènent à la même correction :

- le bouton **Corriger** d'une ligne de la liste ;
- le bouton **Corriger** de l'encadré ajouté en haut du panneau d'édition du segment ;
- le raccourci <kbd>Alt</kbd>+<kbd>F</kbd> sur le segment sélectionné.

La correction cherche, ou crée, la rue au bon nom dans la ville du segment, puis met à jour
son adresse principale. **Les noms alternatifs existants sont préservés**, et un libellé
bilingue est ajouté en alternatif plutôt que de remplacer le principal.

Quelques refus courants, affichés à la place du succès : *Segment sans ville, définissez
d'abord la ville*, *Édition non autorisée ici*, *Segment plus chargé*, ou un verrou situé
au-dessus de votre niveau d'éditeur.

Le bouton **Ignorer** masque un signalement que vous jugez faux. Ces exclusions sont
enregistrées **localement, sur cet appareil seulement**, et se récupèrent d'un bloc avec
**Réinitialiser** dans les réglages.

## Corriger un groupe entier

::: important Réservé au niveau éditeur 3 et plus
Les boutons **Tout corriger** et **Tout ignorer** n'apparaissent pas en dessous du niveau 3.
Ils ne sont pas grisés, ils sont absents : un bouton grisé invite quand même au clic. La
correction segment par segment, elle, reste ouverte à tout le monde, et c'est comme cela
qu'on apprend à lire les verdicts.
:::

- **50 segments au maximum** par action. Au-delà, relancez : le bouton affiche le nombre qu'il
  traitera réellement.
- **Confirmation demandée au-delà de 20 segments**, et systématiquement pour `WRONG_STREET`.
  Le message annonce le changement, pas seulement le nombre : « Renommer N segments de X en
  Y ».
- L'exécution est séquentielle et **s'arrête à la première erreur**, en indiquant combien de
  segments ont été traités avant l'arrêt et sur lequel elle a buté. Un lot à moitié appliqué
  n'est jamais présenté comme un succès.

## La fenêtre flottante

Le WME bascule la barre latérale sur son panneau *Selection* dès qu'un segment est cliqué :
l'onglet du contrôleur disparaît donc au moment précis où vous l'utilisez.

Le bouton **Détacher**, ou le raccourci <kbd>Alt</kbd>+<kbd>W</kbd>, déplace le panneau dans
une petite fenêtre qui reste visible en permanence. Elle se déplace par sa barre de titre et
se redimensionne par son coin ; sa position et sa taille sont mémorisées d'une session à
l'autre.

Une fois détachée, la répartition est la suivante : la **fenêtre** reçoit la surface de
travail (barre d'outils, état, liste des écarts), et l'**onglet** garde les options, la
légende et les réglages. Le bouton **Rattacher**, ou de nouveau <kbd>Alt</kbd>+<kbd>W</kbd>,
remet tout dans la barre latérale.

Le mode ancré reste le comportement par défaut : rien ne change tant que vous ne le demandez
pas.

## Raccourcis clavier

| Raccourci | Action |
| --- | --- |
| <kbd>Alt</kbd>+<kbd>N</kbd> | Sélectionner l'écart suivant |
| <kbd>Alt</kbd>+<kbd>F</kbd> | Corriger le segment sélectionné |
| <kbd>Alt</kbd>+<kbd>W</kbd> | Détacher ou rattacher la fenêtre |

Tous sont remappables dans les réglages clavier du WME. <kbd>Alt</kbd>+<kbd>W</kbd>
fonctionne même quand le contrôleur est éteint, c'est ainsi qu'on récupère une fenêtre
égarée.

## Réglages utiles

**Types de routes vérifiés** : dix-sept cases, dont quatre cochées au départ (`Street`,
`Primary Street`, `Minor Highway`, `Major Highway`). Les libellés restent en anglais, c'est
le vocabulaire partagé de la communauté WME.

**Types d'erreurs vérifiés** : une case par verdict du tableau ci-dessus.

**Options**, les plus structurantes :

| Réglage | Par défaut | À quoi ça sert |
| --- | --- | --- |
| Nom alternatif correspondant = OK | activé | Indispensable en commune bilingue, où la seconde langue est en nom alternatif |
| Afficher le nom attendu sur la carte | activé | Étiquettes à partir du zoom 17 |
| Conserver l'ancien nom en alternatif lors de la correction | désactivé | Jamais appliqué aux fautes de frappe |
| Contrôles des règles suisses | activé | Micro-segments, boucles, rues étroites ; sans donnée externe |
| Encadré dans le panneau d'édition | activé | L'encadré du verdict au-dessus du panneau du segment |
| Matching géométrique | activé | Condition des verdicts `UNNAMED` et `WRONG_STREET` |
| Seulement les segments modifiables | désactivé | Masque ce qui est verrouillé au-dessus de votre niveau |
| N'afficher que les segments visibles | activé | Filtre la liste sur la vue, sans relancer de scan |

**Portée et affichage** : le scoping par localité (désactivé, avertir ou strict), le zoom
minimal de scan (15 par défaut) et la langue du contrôleur.

## Limites à connaître

- **Zones denses tronquées.** L'API du répertoire plafonne le nombre de résultats par zone.
  En hypercentre, une partie des noms officiels peut manquer, ce qui produit de faux
  `NOT_FOUND`. La bannière le signale explicitement quand c'est le cas ; ne corrigez pas en
  masse sur cette base.
- **Zones non chargées.** Si des tuiles échouent, les segments concernés ne sont pas
  vérifiés, et l'onglet le dit plutôt que de les compter comme corrects.
- **Rien n'est enregistré automatiquement.** Le compteur *non sauvegardé(s)* de la barre
  d'outils est là pour le rappeler : c'est vous qui enregistrez.

::: quote Sources
- Dépôt du script : https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Répertoire officiel des rues : couche `ch.swisstopo.amtliches-strassenverzeichnis` sur https://www.geo.admin.ch
:::
