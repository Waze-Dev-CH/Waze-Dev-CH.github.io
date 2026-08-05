# Étoffer la page « Limites de vitesse »

Date : 2026-08-05
Statut : conception validée, prête pour le plan d'implémentation

## Problème

`docs/fr/editors/cartographie/limites-vitesse.md` fait 24 lignes, la page la plus courte
de la section cartographie (médiane autour de 90). Elle porte un encadré
`::: important Page à étoffer` et refuse explicitement tout chiffre :

> « Aucune valeur chiffrée n'est fixée ici tant qu'elle n'est pas sourcée. »

Trois conséquences :

1. `cartographie/index.md:28` annonce une page couvrant « saisie et **exceptions** »,
   promesse que la page ne tient pas.
2. `wme/segments.md:34` renvoie ici pour la propriété **Vitesse** du segment, et le
   lecteur n'y trouve ni la mécanique de saisie ni les valeurs.
3. La seule règle de vitesse concrète du site vit ailleurs et sans lien réciproque :
   `ronds-points.md:16`, « Pas de limite de vitesse sur un rond-point ».

Le blocage était le sourcing. Il est levé : les limites générales sont dans le droit
fédéral, vérifiable et stable.

## Décisions

| Question | Décision | Origine |
|---|---|---|
| Périmètre | Légal **et** WME, comme le promet le sommaire | utilisateur |
| Sourcing des chiffres | Droit fédéral (Fedlex), cité par article | utilisateur |
| Segment sans panneau | On saisit la **limite générale** | utilisateur |
| Ampleur | Page complète et autonome, ~100 lignes | utilisateur |
| Illustrations | SVG Wikimedia Commons, domaine public | utilisateur |
| Champ WME | Panneau latéral, sur un **ou plusieurs** segments sélectionnés | utilisateur |

## Sources vérifiées

**OCR (RS 741.11), art. 4a al. 1**, extrait du PDF Fedlex, état au 1er juillet 2026 :

> a. 50 km/h dans les localités ; b. 80 km/h hors des localités, à l'exception des
> semi-autoroutes et des autoroutes ; c. 100 km/h sur les semi-autoroutes ;
> d. 120 km/h sur les autoroutes.

L'**al. 2** ajoute une nuance directement utile en édition : la limitation à 50 km/h
s'applique dans toute la zone bâtie de façon compacte, et vaut **même en l'absence de
signalisation** pour qui entre dans une localité par une route secondaire peu importante
(route agricole de desserte, chemin forestier).

L'**al. 3** rattache le 80 km/h aux signaux « Fin de la vitesse maximale 50, Limite
générale » (2.53.1), « Fin de la semi-autoroute » (4.04) et « Fin de l'autoroute » (4.02).

**OSR (RS 741.21)** : zone 30 à l'art. 22a (signal 2.59.1), zone de rencontre à
l'art. 22b, 20 km/h (signal 2.59.5). Ces signaux ne sont admis que sur des routes
secondaires non destinées à la circulation générale.

Les valeurs de l'art. 4a n'ont pas changé au 1er juillet 2026.

## Structure cible

```
---
title: Limites de vitesse
description: "Renseigner les limites de vitesse en Suisse dans le WME: limites générales de l'OCR, zones 30 et zones de rencontre, et ce qu'on ne saisit pas."
order: 5
---

# Limites de vitesse
## Principe général
## Les limites générales en Suisse        tableau OCR art. 4a al. 1 + note al. 2
## Saisir une vitesse dans le WME
## Zones 30 et zones de rencontre         OSR art. 22a / 22b
## Ce qu'on ne saisit pas                 ronds-points, renvoi croisé
## Quand la signalisation change          reprend l'existant, ligne 16
::: quote Sources                         OCR, OSR, Commons/ASTRA, forum suisse
```

L'encadré `::: important Page à étoffer` disparaît : c'est l'objet du travail.

## Point de vigilance : une règle existante change

La décision « saisir la limite générale » **contredit la phrase actuelle, ligne 14** :

> « La valeur saisie doit correspondre à la limite réellement signalée sur place. »

Elle est remplacée par une règle en deux temps : on saisit la limite qui **s'applique
légalement** au tronçon ; quand elle est signalée, le panneau fait foi ; sans panneau,
c'est la limite générale de l'OCR, l'art. 4a al. 2 la rendant valable sans signalisation
dès l'entrée en zone bâtie compacte.

C'est le seul endroit de la page où une règle nouvelle est écrite, et elle vient d'un
arbitrage utilisateur, pas d'une source citable. À signaler tel quel en revue.

## Illustrations

Cinq SVG, **domaine public au titre de l'art. 5 LDA** (actes officiels), auteur ASTRA,
source OSR/SSV. Licence et description confirmées via l'API Commons `extmetadata`.

Déposés dans `docs/public/img/panneaux/`, servis aux 4 locales, `alt` traduit par locale :

| Fichier cible | Fichier Commons | Signal |
|---|---|---|
| `osr-2-30-vitesse-maximale.svg` | `CH-Vorschriftssignal-Höchstgeschwindigkeit.svg` | 2.30 |
| `osr-2-30-1-vitesse-maximale-50.svg` | `CH-Vorschriftssignal-Höchstgeschwindigkeit 50 generell.svg` | 2.30.1 |
| `osr-2-53-1-fin-vitesse-maximale-50.svg` | `CH-Vorschriftssignal-Ende der Höchstgeschwindigkeit 50 generell-1.svg` | 2.53.1 |
| `osr-2-59-1-zone-30.svg` | `CH-Vorschriftssignal-Zonensignal-1.svg` | 2.59.1 |
| `osr-2-59-5-zone-de-rencontre.svg` | `CH-Vorschriftssignal-Begegnungszone-1.svg` | 2.59.5 |

Téléchargement via `https://commons.wikimedia.org/wiki/Special:FilePath/<nom encodé>`.

Aucune attribution n'est légalement exigée ; l'ASTRA et l'OSR seront néanmoins crédités
dans le bloc Sources, avec les liens Commons, pour documenter la provenance.

**Réserve ouverte, à lever visuellement.** Commons n'a pas de fichier nommé « Zone 30 ».
Le candidat retenu, `Zonensignal-1`, est décrit comme le gabarit générique de signal de
zone. Les SVG étant en tracés et non en texte, son contenu réel n'a pas pu être vérifié
par inspection. Il sera déposé puis validé à l'œil sur le serveur de développement avant
publication. S'il ne porte aucun chiffre, la section passe à quatre panneaux et la zone 30
est décrite sans illustration.

## Hors périmètre

Ni vitesses variables sur autoroute, ni tunnels, ni véhicules lourds et remorques, ni
vitesses minimales. Aucune source communautaire suisse ne les couvre et la loi ne dit rien
de l'usage Waze. Une section absente vaut mieux qu'une section inventée.

## Effets de bord

- `ronds-points.md:16` reçoit le renvoi réciproque vers cette page, aujourd'hui manquant.
- Le `description:` du frontmatter est ajouté, lacune relevée par l'audit de cohérence.
- Parité i18n : les 3 traductions suivent (skill `translate-page`), même `order: 5`, mêmes
  images, `alt` traduits, titres d'admonitions explicites en en/de/it.

## Vérification

1. `npm run docs:build` doit passer (il échoue sur lien interne mort).
2. Contrôle visuel sur `npm run docs:dev` : rendu des 5 SVG en thème clair **et** sombre,
   et validation du fichier Zone 30.
3. Aucun tiret cadratin (hook), aucune admonition sans titre en en/de/it.
