---
title: Chemins agricoles et routes à travers champs
description: Accord suisse sur la cartographie des Feldwege, chemins forestiers et routes agricoles.
order: 9
---

# Chemins agricoles et routes à travers champs

::: tip Accessible à tous — Niveau L1
Ces règles s'appliquent à tous les éditeurs.
:::

::: note
Accord approuvé par la communauté suisse (DE: Feldwege, FR: Routes à travers champs / chemins agricoles).
:::

Waze est **avant tout une application pour automobilistes**. Ce n'est pas un GPS tout-terrain, ni un outil pour randonneurs ou cyclistes. Les routes publiques carrossables restent la priorité principale du mapping.

## Types de routes et attributs

| Type WME | Pénalité | Usage |
|----------|---------|-------|
| **Rue (Street)** | Aucune | Route normale, accessible |
| Rue + attribut **Non bitumée (Unpaved)** | Légère — l'utilisateur peut choisir d'éviter | Chemin de terre accessible aux véhicules normaux |
| **Voie privée (Private Road)** | Forte — routage impossible sauf exception | Chemin privé interdit au trafic normal |
| **Chemin de terre / 4x4 Trail (Off-road)** | Très forte — routage impossible | Piste 4x4, chemin impraticable pour voitures normales |

::: warning Attribut "Non bitumée"
L'attribut *Unpaved* est conçu pour fonctionner **uniquement sur des types sans pénalité de base**.

✅ Utilisable sur : Street, Primary Street, Minor/Major Highway, Freeway
❌ Inutile sur : Parking Lot Road, Private Road, Narrow Street, Off-road
:::

## Cas de figure

### Cas 1 — Chemin de terre avec panneau d'interdiction (sauf certains véhicules)

Deux options acceptables :
1. **Street + Unpaved** — l'utilisateur peut décider via les paramètres de l'app s'il veut emprunter ce chemin
2. **Off-road / Not maintained** — évite le routage dans 99% des cas, même pour les utilisateurs qui acceptent les chemins non goudronnés

### Cas 2 — Petite route goudronnée avec panneau d'interdiction (sauf certains véhicules)

→ **Private Road**

### Cas 3 — Petite route goudronnée sans panneau d'interdiction

Deux options acceptables :
1. **Street** — les utilisateurs ayant le droit légal de passer peuvent y être routés
2. **Narrow Street** (Rue étroite) — préférée pour les passages à voie unique, permet davantage de flexibilité dans le routage

::: note À propos de l'attribut Unpaved
L'attribut Unpaved s'ajoute à n'importe quelle Street et ajoute une pénalité que l'utilisateur peut choisir d'éviter ou non. Appliqué à un segment qui porte déjà une pénalité de type (Private Road, Off-road), il n'a aucun effet.
:::

::: quote Sources
- Waze Discuss, Field Roads / Feldwege / Routes à travers champs (2017) : https://www.waze.com/discuss/t/field-roads-feldwege-routes-a-travers-champs-new-2017/64680
:::
