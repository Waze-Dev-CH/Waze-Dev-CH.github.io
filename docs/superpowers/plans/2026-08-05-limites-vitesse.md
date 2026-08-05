# Limites de vitesse : plan d'implémentation

> **Pour les agents :** utiliser `superpowers:subagent-driven-development` ou
> `superpowers:executing-plans` pour dérouler ce plan tâche par tâche. Les étapes
> utilisent la syntaxe `- [ ]`.

**Objectif :** transformer `limites-vitesse.md` d'une ébauche de 24 lignes en une page
complète et sourcée, illustrée de panneaux officiels, déclinée dans les 4 locales.

**Approche :** on dépose d'abord les assets (tâche 1), puis on rédige la page française
qui fait référence (tâche 2), puis on la décline (tâche 3), puis on recoud les renvois
croisés (tâche 4). Chaque tâche se termine par un build vert et un commit.

**Spec :** `docs/superpowers/specs/2026-08-05-limites-vitesse-design.md`

## Contraintes globales

Ces règles s'appliquent à **toutes** les tâches.

- **Jamais de tiret cadratin** (U+2014). Un hook `no-em-dash.mjs` bloque l'écriture.
  Utiliser virgule, deux-points ou parenthèses.
- **Pas de `---`** juste avant un titre `#` ou `##` (VitePress l'insère seul).
- **Liens internes** absolus et préfixés par la locale, sans extension : `/fr/editors/...`.
- **Admonitions** : les 12 conteneurs du thème ont leurs titres par défaut codés **en
  français**. Sur les pages `en`, `de` et `it`, **toujours** fournir un titre explicite
  traduit. Ne pas utiliser les conteneurs natifs VitePress (`tip`, `warning`).
- **Frontmatter** : `description:` contenant un `:` doit être **entre guillemets doubles**,
  sinon le parseur YAML échoue au build.
- **`order: 5`** identique dans les 4 locales, sinon la sidebar diverge selon la langue.
- **Allemand de Suisse** : `ss` et jamais `ß`. Guillemets `«…»`.
- **Vérification** après chaque tâche : `npm run docs:build` doit passer (il échoue sur
  lien interne mort). Ne jamais committer sur un build rouge.
- **Ne pas modifier `.vitepress/config.ts`** : la sidebar est auto-générée.

---

### Tâche 1 : déposer les onze panneaux officiels

**Fichiers**
- Créer : `docs/public/img/panneaux/` (11 fichiers SVG + un README)

**Produit** : les chemins `/img/panneaux/<nom>.svg`, consommés par les tâches 2 et 3.

Licence : domaine public, art. 5 LDA (actes officiels), auteur ASTRA, source OSR/SSV.
Aucune attribution légalement requise ; elle sera néanmoins portée au bloc Sources.

- [ ] **Étape 1 : créer le répertoire et télécharger les fichiers**

```bash
cd /home/yrapenne/Projects/Waze-Dev-CH.github.io
mkdir -p docs/public/img/panneaux
cd docs/public/img/panneaux

dl() {
  enc=$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))" "$1")
  curl -sS -L -A "waze-ch-docs/1.0" -o "$2" \
    "https://commons.wikimedia.org/wiki/Special:FilePath/$enc"
}

dl "CH-Vorschriftssignal-Höchstgeschwindigkeit.svg"                        osr-2-30-vitesse-maximale.svg
dl "CH-Vorschriftssignal-Höchstgeschwindigkeit 50 generell.svg"            osr-2-30-1-limite-generale-50-de.svg
dl "CH-Vorschriftssignal-Höchstgeschwindigkeit 50 generell-2.svg"          osr-2-30-1-limite-generale-50-fr.svg
dl "CH-Vorschriftssignal-Höchstgeschwindigkeit 50 generell-4.svg"          osr-2-30-1-limite-generale-50-it.svg
dl "CH-Vorschriftssignal-Ende der Höchstgeschwindigkeit 50 generell-1.svg" osr-2-53-1-fin-limite-generale-50-de.svg
dl "CH-Vorschriftssignal-Ende der Höchstgeschwindigkeit 50 generell-2.svg" osr-2-53-1-fin-limite-generale-50-fr.svg
dl "CH-Vorschriftssignal-Ende der Höchstgeschwindigkeit 50 generell-4.svg" osr-2-53-1-fin-limite-generale-50-it.svg
dl "CH-Vorschriftssignal-Zonensignal-1.svg"                                osr-2-59-1-zone-30.svg
dl "CH-Vorschriftssignal-Zonensignal-4.svg"                                osr-2-59-1-zone-30-it.svg
dl "CH-Vorschriftssignal-Begegnungszone-1.svg"                             osr-2-59-5-zone-de-rencontre.svg
dl "CH-Vorschriftssignal-Begegnungszone-2.svg"                             osr-2-59-5-zone-de-rencontre-it.svg
```

- [ ] **Étape 2 : vérifier que les 11 fichiers sont des SVG valides et non des pages d'erreur**

```bash
cd /home/yrapenne/Projects/Waze-Dev-CH.github.io/docs/public/img/panneaux
ls -1 *.svg | wc -l          # attendu : 11
for f in *.svg; do
  head -c 200 "$f" | grep -q '<svg\|<?xml' && echo "OK   $f" || echo "FAIL $f"
done
```

Attendu : 11 fichiers, tous `OK`. Un `FAIL` signale un téléchargement qui a ramené du
HTML (nom de fichier Commons erroné) : corriger le nom avant de continuer.

- [ ] **Étape 3 : écrire la note de provenance**

Créer `docs/public/img/panneaux/README.md` :

```markdown
# Panneaux de signalisation suisses

Signaux de l'OSR (RS 741.21), repris de Wikimedia Commons.

**Licence : domaine public**, art. 5 LDA (actes officiels non protégés).
Auteur : Office fédéral des routes (ASTRA). Source : OSR / SSV.
Aucune attribution n'est légalement requise ; l'ASTRA est crédité dans le bloc
Sources de la page qui les utilise.

Les panneaux portant du texte existent en trois versions linguistiques. Le mot
« ZONE » étant identique en français et en allemand, un seul fichier sert les deux.

| Fichier | Signal OSR | Langue |
|---|---|---|
| `osr-2-30-vitesse-maximale.svg` | 2.30 Vitesse maximale | aucune (60) |
| `osr-2-30-1-limite-generale-50-de.svg` | 2.30.1 | de |
| `osr-2-30-1-limite-generale-50-fr.svg` | 2.30.1 | fr |
| `osr-2-30-1-limite-generale-50-it.svg` | 2.30.1 | it |
| `osr-2-53-1-fin-limite-generale-50-de.svg` | 2.53.1 | de |
| `osr-2-53-1-fin-limite-generale-50-fr.svg` | 2.53.1 | fr |
| `osr-2-53-1-fin-limite-generale-50-it.svg` | 2.53.1 | it |
| `osr-2-59-1-zone-30.svg` | 2.59.1 Zone 30 | fr + de |
| `osr-2-59-1-zone-30-it.svg` | 2.59.1 Zone 30 | it |
| `osr-2-59-5-zone-de-rencontre.svg` | 2.59.5 Zone de rencontre | fr + de |
| `osr-2-59-5-zone-de-rencontre-it.svg` | 2.59.5 Zone de rencontre | it |
```

- [ ] **Étape 4 : contrôle visuel**

```bash
npm run docs:dev
```

Ouvrir `http://localhost:8765/img/panneaux/osr-2-59-1-zone-30.svg` et vérifier que le
panneau affiche bien « ZONE 30 ». Répéter sur deux ou trois autres fichiers.
**Point de contrôle utilisateur :** faire valider le rendu avant de committer.

- [ ] **Étape 5 : commit**

```bash
git add docs/public/img/panneaux/
git commit -m "feat(assets): panneaux de vitesse OSR, domaine public ASTRA"
```

---

### Tâche 2 : rédiger la page française

**Fichiers**
- Modifier : `docs/fr/editors/cartographie/limites-vitesse.md` (remplacement intégral)

**Consomme** : les chemins `/img/panneaux/*.svg` de la tâche 1.
**Produit** : la page de référence que la tâche 3 traduit.

- [ ] **Étape 1 : remplacer intégralement le contenu du fichier**

````markdown
---
title: Limites de vitesse
description: "Renseigner les limites de vitesse en Suisse dans le WME: limites générales de l'OCR, zones 30 et zones de rencontre, et ce qu'on ne saisit pas."
order: 5
---

<img class="banner-img is-narrow" src="/img/editors/moto.png" alt="">

# Limites de vitesse

Cette page couvre le renseignement des limites de vitesse sur les segments en Suisse: la
règle de saisie, les limites générales fixées par le droit fédéral, les zones 30 et zones
de rencontre, et les cas où le champ reste vide.

## Principe général

La limite saisie sur un segment est celle qui **s'applique légalement** au tronçon.

- **Quand une limite est signalée**, le panneau fait foi. On saisit sa valeur.
- **En l'absence de panneau**, on saisit la **limite générale** correspondant au type de
  route. Elle s'applique de droit, sans qu'aucune signalisation soit nécessaire.

::: important Ne pas confondre avec la vitesse pratiquée
La limite de vitesse est une valeur réglementaire, pas une observation. Elle ne se déduit
ni de la vitesse à laquelle on roule, ni des données de trafic remontées par
l'application.
:::

## Les limites générales en Suisse

L'ordonnance sur les règles de la circulation routière fixe quatre limites générales.

| Type de route | Limite générale |
| --- | --- |
| Dans les localités | **50 km/h** |
| Hors des localités | **80 km/h** |
| Semi-autoroutes | **100 km/h** |
| Autoroutes | **120 km/h** |

::: note Le 50 km/h s'applique parfois sans panneau
La limitation à 50 km/h vaut dans toute la zone bâtie de façon compacte. Pour qui entre
dans une localité par une **route secondaire peu importante** (route agricole de desserte,
chemin forestier, route qui ne relie pas directement deux localités), elle s'applique
**même en l'absence de signalisation**, dès qu'il existe une zone bâtie compacte.

C'est le cas type où l'on saisit 50 sans avoir vu de panneau sur l'imagerie.
:::

Le passage à 80 km/h se lit sur le terrain au signal « Fin de la vitesse maximale 50,
Limite générale », ou en quittant une semi-autoroute ou une autoroute.

<div class="media-row">
<img src="/img/panneaux/osr-2-30-1-limite-generale-50-fr.svg" alt="Signal 2.30.1, vitesse maximale 50, limite générale" width="120">
<img src="/img/panneaux/osr-2-53-1-fin-limite-generale-50-fr.svg" alt="Signal 2.53.1, fin de la vitesse maximale 50, limite générale" width="120">
</div>

## Saisir une vitesse dans le WME

Le champ **Vitesse** se trouve dans le panneau latéral, qui s'affiche dès qu'on
sélectionne un segment. Il accepte la **sélection multiple**: en choisissant plusieurs
segments d'un même tronçon, on renseigne la même valeur en une fois.

La valeur est en **km/h**. Un panneau ordinaire de limitation, comme celui-ci, se saisit
tel quel.

<div class="media-row">
<img src="/img/panneaux/osr-2-30-vitesse-maximale.svg" alt="Signal 2.30, vitesse maximale signalée" width="120">
</div>

Pour le détail des autres propriétés du segment, voir [Segments](/fr/editors/wme/segments).

## Zones 30 et zones de rencontre

Deux régimes de zone concernent directement la saisie.

| Zone | Limite | Signal |
| --- | --- | --- |
| **Zone 30** | 30 km/h | 2.59.1 |
| **Zone de rencontre** | 20 km/h | 2.59.5 |

<div class="media-row">
<img src="/img/panneaux/osr-2-59-1-zone-30.svg" alt="Signal 2.59.1, Zone 30" width="110">
<img src="/img/panneaux/osr-2-59-5-zone-de-rencontre.svg" alt="Signal 2.59.5, Zone de rencontre, 20 km/h" width="110">
</div>

Dans une zone de rencontre, les piétons peuvent utiliser toute l'aire de circulation et
ont la priorité. Ces deux signaux ne sont admis que sur des **routes secondaires**, non
destinées à la circulation générale: en croiser un sur un axe principal doit faire douter
de la lecture de l'imagerie.

La limite de zone s'applique à tous les segments compris dans le périmètre, jusqu'au
signal de fin.

## Ce qu'on ne saisit pas

- **Les ronds-points.** Un rond-point ne reçoit pas de limite de vitesse. Voir
  [Ronds-points](/fr/editors/cartographie/ronds-points).
- **Les vitesses conseillées.** Un panneau de recommandation n'est pas une limite.
- **Les valeurs relevées sur le terrain** qui ne correspondent à aucune signalisation ni à
  aucune limite générale.

## Quand la signalisation change

Les changements de limite remontent régulièrement sur le forum suisse, par exemple une
modification signalée sur la Schartenstrasse à Wettingen. Avant de mettre un segment à
jour, vérifier la nouvelle signalisation, et privilégier une source datée: arrêté communal
ou cantonal, publication officielle, imagerie récente.

::: quote Sources
- OCR (RS 741.11), art. 4a, limitations générales de vitesse: https://www.fedlex.admin.ch/eli/cc/1962/1364_1409_1420/fr
- OSR (RS 741.21), art. 22a et 22b, zone 30 et zone de rencontre: https://www.fedlex.admin.ch/eli/cc/1979/1961_1961_1961/fr
- Panneaux: signaux de l'OSR, Office fédéral des routes (ASTRA), domaine public, via https://commons.wikimedia.org/wiki/Category:SVG_road_signs_in_Switzerland
- Forum Suisse (cas de changements de vitesse): https://www.waze.com/discuss/c/editors/switzerland/4790
:::
````

- [ ] **Étape 2 : vérifier le build**

```bash
npm run docs:build
```

Attendu : `build complete`. Un échec YAML signale un `description:` mal quoté ; un échec
de lien signale une cible interne inexistante.

- [ ] **Étape 3 : contrôle visuel en thème clair et sombre**

```bash
npm run docs:dev
```

Ouvrir `http://localhost:8765/fr/editors/cartographie/limites-vitesse`. Vérifier: les
quatre panneaux s'affichent, les rangées `media-row` sont centrées, et les panneaux
restent lisibles en thème sombre (le disque blanc du panneau est conservé).

- [ ] **Étape 4 : commit**

```bash
git add docs/fr/editors/cartographie/limites-vitesse.md
git commit -m "docs(cartographie): étoffe la page Limites de vitesse (fr)"
```

---

### Tâche 3 : décliner en en, de et it

**Fichiers**
- Modifier : `docs/en/editors/cartographie/limites-vitesse.md`
- Modifier : `docs/de/editors/cartographie/limites-vitesse.md`
- Modifier : `docs/it/editors/cartographie/limites-vitesse.md`

**Consomme** : la page française de la tâche 2, les assets de la tâche 1.

- [ ] **Étape 1 : traduire les trois pages**

Invoquer la skill `translate-page` sur `docs/fr/editors/cartographie/limites-vitesse.md`.

Quatre écarts par rapport à une traduction mécanique, à appliquer à la main :

1. **Les images changent selon la locale.** Substituer les chemins :

| Locale | 2.30.1 | 2.53.1 | 2.59.1 | 2.59.5 |
|---|---|---|---|---|
| `de` | `osr-2-30-1-limite-generale-50-de.svg` | `osr-2-53-1-fin-limite-generale-50-de.svg` | `osr-2-59-1-zone-30.svg` | `osr-2-59-5-zone-de-rencontre.svg` |
| `it` | `osr-2-30-1-limite-generale-50-it.svg` | `osr-2-53-1-fin-limite-generale-50-it.svg` | `osr-2-59-1-zone-30-it.svg` | `osr-2-59-5-zone-de-rencontre-it.svg` |

2. **La page `en` affiche les variantes côte à côte**, la Suisse n'ayant pas de
   signalisation en anglais. Remplacer la première `media-row` par :

```html
<div class="media-row">
<img src="/img/panneaux/osr-2-30-1-limite-generale-50-de.svg" alt="Signal 2.30.1, German version" width="110">
<img src="/img/panneaux/osr-2-30-1-limite-generale-50-fr.svg" alt="Signal 2.30.1, French version" width="110">
<img src="/img/panneaux/osr-2-30-1-limite-generale-50-it.svg" alt="Signal 2.30.1, Italian version" width="110">
</div>
```

   et celle des zones par :

```html
<div class="media-row">
<img src="/img/panneaux/osr-2-59-1-zone-30.svg" alt="Signal 2.59.1, Zone 30" width="110">
<img src="/img/panneaux/osr-2-59-1-zone-30-it.svg" alt="Signal 2.59.1, Zone 30, Italian version" width="110">
<img src="/img/panneaux/osr-2-59-5-zone-de-rencontre.svg" alt="Signal 2.59.5, meeting zone" width="110">
<img src="/img/panneaux/osr-2-59-5-zone-de-rencontre-it.svg" alt="Signal 2.59.5, meeting zone, Italian version" width="110">
</div>
```

   Ajouter dans la page `en`, juste après la première de ces rangées, la phrase :
   *"Swiss signs carrying text exist in German, French and Italian. The wording changes,
   the meaning does not."*

3. **Titres d'admonitions explicites** : `::: important` et `::: note` doivent porter un
   titre traduit sur les trois pages. Sans titre, le lecteur verrait « Important » et
   « Note » en français.

4. **Allemand** : `ss` et jamais `ß` (`Strasse`, `ausserorts`, `gemäss`), guillemets `«…»`.

- [ ] **Étape 2 : vérifier la parité et la conformité**

```bash
cd /home/yrapenne/Projects/Waze-Dev-CH.github.io
# order identique dans les 4 locales
grep -h '^order:' docs/*/editors/cartographie/limites-vitesse.md | sort -u
# aucune admonition sans titre hors fr
grep -rn '^::: [a-z]*$' docs/en docs/de docs/it --include='limites-vitesse.md'
# aucun ß
grep -n 'ß' docs/de/editors/cartographie/limites-vitesse.md
# aucun lien à mauvais préfixe
for l in en de it; do grep -n '](/fr/' docs/$l/editors/cartographie/limites-vitesse.md; done
# nombre d'images par page
for l in fr en de it; do printf "%s: " $l; grep -c '<img src="/img/panneaux/' docs/$l/editors/cartographie/limites-vitesse.md; done
```

Attendu : une seule ligne `order: 5` ; les trois greps suivants vides ; pour le dernier
contrôle `fr: 5`, `de: 5`, `it: 5`, `en: 8` (la page anglaise cumule les variantes).

- [ ] **Étape 3 : build**

```bash
npm run docs:build
```

- [ ] **Étape 4 : commit**

```bash
git add docs/en/editors/cartographie/limites-vitesse.md docs/de/editors/cartographie/limites-vitesse.md docs/it/editors/cartographie/limites-vitesse.md
git commit -m "docs(i18n): traduit la page Limites de vitesse en en, de et it"
```

---

### Tâche 4 : recoudre les renvois croisés

**Fichiers**
- Modifier : `docs/{fr,en,de,it}/editors/cartographie/ronds-points.md` (ligne 16 en fr)

**Consomme** : la page de la tâche 2.

Aujourd'hui `ronds-points.md` porte la seule règle de vitesse du site sans renvoyer vers
la page dédiée. Le lien n'existe que dans un sens.

- [ ] **Étape 1 : ajouter le renvoi réciproque**

Dans `docs/fr/editors/cartographie/ronds-points.md`, remplacer la ligne :

```markdown
- Pas de limite de vitesse sur un rond-point.
```

par :

```markdown
- Pas de limite de vitesse sur un rond-point. Voir [Limites de vitesse](/fr/editors/cartographie/limites-vitesse).
```

Équivalents dans les trois autres locales :

- `en` : `- No speed limit on a roundabout. See [Speed limits](/en/editors/cartographie/limites-vitesse).`
- `de` : `- Keine Geschwindigkeitsbegrenzung auf einem Kreisverkehr. Siehe [Geschwindigkeitsbegrenzungen](/de/editors/cartographie/limites-vitesse).`
- `it` : `- Nessun limite di velocità su una rotonda. Vedi [Limiti di velocità](/it/editors/cartographie/limites-vitesse).`

Reprendre le libellé exact du `title:` de la page cible dans chaque locale, et repartir de
la formulation réelle de la ligne existante, qui peut différer de la traduction proposée.

- [ ] **Étape 2 : build**

```bash
npm run docs:build
```

- [ ] **Étape 3 : commit**

```bash
git add docs/fr/editors/cartographie/ronds-points.md docs/en/editors/cartographie/ronds-points.md docs/de/editors/cartographie/ronds-points.md docs/it/editors/cartographie/ronds-points.md
git commit -m "docs(cartographie): renvoi réciproque entre ronds-points et limites de vitesse"
```

---

## Vérification finale

- [ ] `npm run docs:build` passe.
- [ ] Aucun tiret cadratin : `grep -rnP "\x{2014}" docs/ --include="*.md" | grep -v superpowers`
      ne renvoie rien.
- [ ] Les 4 pages s'affichent, panneaux compris, en thème clair **et** sombre.
- [ ] Le sélecteur de langue bascule entre les 4 versions, chacune servant ses propres
      panneaux : « Limite générale » en fr, « GENERELL » en de, « Limita generale » en it,
      les trois en en.
- [ ] `cartographie/index.md:28` promet « saisie et exceptions » : la promesse est
      désormais tenue.

## Ce que ce plan ne fait pas

Ni vitesses variables sur autoroute, ni tunnels, ni véhicules lourds et remorques, ni
vitesses minimales: aucune source communautaire suisse ne les couvre et la loi ne dit rien
de l'usage Waze.

**Point à signaler en revue communautaire.** La règle « en l'absence de panneau, saisir la
limite générale » est la seule règle nouvelle de la page. Elle vient d'un arbitrage
utilisateur, pas d'une source citable, et elle **remplace** la formulation précédente
(« la valeur saisie doit correspondre à la limite réellement signalée sur place »).
