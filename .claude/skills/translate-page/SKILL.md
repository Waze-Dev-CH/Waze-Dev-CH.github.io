---
name: translate-page
description: Décline une page de doc française du site Waze CH (VitePress) vers les trois autres langues (en, de, it). Utiliser quand on demande de "traduire cette page", "créer les versions en/de/it", "décliner dans les autres langues" ou d'ajouter les traductions d'un fichier docs/.
---

# Traduire une page vers en / de / it

Ce site VitePress a le **français comme locale racine** (pas de préfixe) et `en` / `de` / `it` sous préfixe. Ce skill prend une page française et produit ses équivalents traduits au bon chemin, en préservant la structure.

## Étape 1 — Identifier la source

- La source est un fichier sous `docs/` **hors** des dossiers `en/`, `de/`, `it/`, `public/` et `.vitepress/`.
- Calculer le **chemin relatif** : `docs/editors/routing.md` → chemin relatif `editors/routing.md`.
- Les cibles sont :
  - `docs/en/editors/routing.md`
  - `docs/de/editors/routing.md`
  - `docs/it/editors/routing.md`

Lire entièrement la source avant de traduire.

## Étape 2 — Produire chaque traduction

Pour chaque langue cible (en, de, it), créer le fichier au chemin ci-dessus en respectant **toutes** ces règles :

1. **Frontmatter** : traduire la *valeur* de `title:` (et tout autre champ texte affiché). Ne pas traduire les *clés* ni les valeurs techniques (`layout: home`, noms de fichiers, liens d'`actions`).

2. **Structure markdown** : conserver à l'identique titres (niveaux `#`), listes, tableaux, task lists (`- [ ]`), abréviations, blocs de code. **Ne pas traduire le contenu des blocs de code** (sauf commentaires si pertinent).

3. **Liens internes** : préfixer par la locale.
   - `/editors/routing` → `/en/editors/routing` (resp. `/de/`, `/it/`)
   - Laisser les liens externes (`https://…`) inchangés.

4. **Admonitions** : garder le marqueur `::: type` et le `:::` de fermeture. **Ajouter un titre explicite traduit** sur chaque bloc, car les titres par défaut du thème sont codés en français uniquement (un `::: example` sans titre afficherait « Exemple » même en anglais).
   - FR : `::: example` (titre par défaut « Exemple »)
   - EN : `::: example Example`
   - DE : `::: example Beispiel`
   - IT : `::: example Esempio`
   - Idem pour les autres types : `note` (Note/Notiz/Nota), `important` (Important/Wichtig/Importante), `success` (Success/Erfolg/Successo), `failure` (Error/Fehler/Errore), `bug`, `help` (Tip/Tipp/Consiglio), `question` (Question/Frage/Domanda), `reminder` (Reminder/Erinnerung/Promemoria), `quote` (Quote/Zitat/Citazione), `abstract` (Summary/Zusammenfassung/Sintesi), `people` (Contact/Kontakt/Contatto). Traduire le contenu du bloc normalement.

5. **Glossaire — ne pas traduire** : `Waze`, `WME`, les noms de scripts/userscripts, les noms propres et lieux suisses (cantons, communes), les termes d'interface Waze laissés en anglais par la communauté. Garder une terminologie cohérente entre les pages (éditeur = editor/Editor/editor, scripteur = scripter/Skripter/scrittore).

## Étape 3 — Navigation

Si la page entre dans un menu, rappeler à l'utilisateur d'ajouter l'entrée dans `nav` et/ou `sidebar` de `.vitepress/config.ts` pour les **4 locales** (libellés traduits). La navigation n'est pas auto-générée.

## Étape 4 — Vérifier

```bash
npm run docs:build
```

Le build doit passer sans lien mort. Corriger tout lien interne mal préfixé avant de proposer un commit.

## Notes

- Toujours créer les **trois** langues, même en stub, pour garder la parité (voir `CONTRIBUTING.md`).
- Ne pas inventer de contenu : traduire fidèlement la source, sans ajouter ni retrancher d'information.
