---
title: Fermetures de routes
order: 10
---

# Fermetures de routes

Cette page couvre la gestion des fermetures de routes et des interdictions de circuler limitées dans le temps en Suisse: le choix de l'approche selon la durée, l'ajout de restrictions horaires dans l'éditeur, le signalement d'une fermeture et le traitement des Update Requests (URs) de fermeture.

## Deux approches selon la durée

Le choix de la méthode dépend de la durée de la fermeture.

- **Courte durée (de quelques heures à quelques semaines):** signaler la fermeture via l'application ou le formulaire DACH (voir « Signaler une fermeture » ci-dessous). La carte est mise à jour sous un délai d'environ deux jours.
- **Longue durée (de plusieurs mois à plusieurs années):** appliquer une restriction horaire directement sur le ou les segments dans l'éditeur. La restriction est active immédiatement, sans attendre une mise à jour de la carte.

## Ajouter une restriction horaire

Les restrictions horaires se posent segment par segment et tiennent compte du sens de circulation. Soyez attentif au sens: une restriction posée sur « A vers B » ne s'applique pas automatiquement à « B vers A ».

Marche à suivre:

1. Sélectionner le segment, puis cliquer sur l'icône horloge « Ajouter une restriction » ou utiliser le raccourci clavier **T**.
2. Sur une route à double sens, deux onglets apparaissent: **« A vers B »** et **« B vers A »**, qui correspondent aux deux sens de circulation. Travailler dans l'onglet du sens concerné.
3. **Jours:** cocher les jours concernés. Des liens « Tout sélectionner / désélectionner » facilitent la saisie.
4. **Heures:** choisir « Toute la journée » pour une restriction continue, ou définir une plage horaire au format 24 h (par exemple « 10:00 à 15:00 »).
5. **Passage de minuit:** pour une plage qui franchit minuit (par exemple 22 h à 5 h), saisir « 22:00 à 05:00 ». Le système prolonge automatiquement sur le jour suivant; ne pas dédoubler la saisie.
6. **Plage de dates:** par défaut la restriction se répète chaque semaine. Choisir « Plage » pour la limiter à des dates précises (bornes incluses).
7. **Types de véhicules:** par défaut tous les véhicules sont concernés. Cliquer sur « Modifier » pour restreindre la restriction à certains types. Les types cochés sont ceux qui sont bloqués.
8. **Description:** indiquer la raison de la fermeture (chantier, événement, etc.). Le texte est limité à **100 caractères**; au-delà, l'enregistrement échoue.

### Copier vers le sens inverse

Après avoir créé une restriction, utiliser « Copier la même restriction pour le sens inverse » pour l'appliquer aux deux sens. Sans cette action, la restriction ne vaut que pour le sens sélectionné.

### Appliquer à plusieurs segments

Pour appliquer une restriction à une suite de segments, en sélectionner plusieurs (Ctrl, ou Cmd sous macOS) puis utiliser « Appliquer à tous » pour propager la restriction à l'ensemble de la sélection. Vérifier au préalable les sens uniques et le sens des segments (A vers B ou B vers A) avant de propager.

## Signaler une fermeture

- **Via l'application:** « Signaler > Fermeture ». Le signalement se fait depuis le lieu concerné.
- **Via le formulaire DACH:** pour les fermetures qui ne peuvent pas être signalées sur place. Dans les deux cas, la carte reflète le changement sous un délai d'environ deux jours.

## Traiter les URs de fermeture

Le traitement d'une Update Request de fermeture suit le principe de prudence:

- Ne clôturer en **« Corrigé »** que si la cause a été identifiée, la correction appliquée et la modification enregistrée.
- Si la situation ne peut pas être vérifiée, clôturer en **« Non identifié »**.
- Ne pas faire de fausse clôture.
- Traiter avec prudence les cas où le sens de circulation est ambigu.

## Rôle RTC State Manager

La Suisse dispose d'un rôle spécial dédié aux fermetures, le **RTC State Manager**, documenté dans la page des droits d'édition de la communauté. Pour la répartition des rôles et des droits, voir [Organisation de la communauté](/fr/editors/communaute/).

::: note Procédures RTC / MTE non détaillées
Les sources consultées ne décrivent pas de procédure distincte propre aux sigles « RTC » (Real Time Closures) ou « MTE » (Major Traffic Events). Se reporter au forum suisse et au serveur Discord avant d'appliquer ce type de fermeture.
:::

::: important Règle de prudence
En cas de doute, de manque d'information ou de situation ambiguë, ne pas modifier la carte sur la base de suppositions ou des règles d'un pays voisin. Poser systématiquement la question sur le forum suisse.
:::

::: quote Sources
- Straßensperrungen und zeitlich beschränkte Fahrverbote: https://www.waze.com/discuss/t/strassensperrungen-und-zeitlich-beschrankte-fahrverbote/377293
- Hub francophone (Fermeture des URs): https://www.waze.com/discuss/t/informations-en-francais/377254
- Droits d'édition de la communauté suisse: https://www.waze.com/discuss/t/377276
:::
