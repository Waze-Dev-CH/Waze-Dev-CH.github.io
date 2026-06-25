---
title: Délais de mise à jour de la carte
description: Comprendre quand les modifications apportées dans le WME deviennent visibles dans l'application et sur le serveur de routing.
---

# Délais de mise à jour de la carte

::: tip Accessible à tous — Niveau L1
Comprendre ces délais évite de re-modifier des segments déjà corrigés.
:::

Waze met à jour différents composants à des fréquences différentes. Les modifications dans le WME ne sont **pas immédiatement visibles** partout.

## Tableau des délais

| Élément | Délai d'application |
|---------|-------------------|
| Mises à jour de la carte (navigation) | **~1 jour** sur le serveur de routing |
| Rapports de trafic (accidents, vitesses) | **Temps réel** dans l'application |
| Nouvelles rues | **2 à 5 jours** dans l'app et Live Map |
| Nouvelles rues sur le serveur de routing | 1 jour supplémentaire après apparition dans l'app |
| Droits d'édition non-AM (après trajet) | Disponibles sous **2 jours** |
| Noms de villes / limites | Quelques jours |
| Points (score) | Mis à jour **une fois par jour** côté serveur |

## Détail des processus

### Mises à jour de la carte

Waze vise des mises à jour **quotidiennes** : l'état actuel de la carte est copié, converti pour la navigation et envoyé aux serveurs de routing. Le processus prend un peu moins de 24 heures. Dans des conditions optimales, une modification est visible sur le serveur de routing **le lendemain**.

### Nouvelles rues

Après édition et mise à jour de la carte, une nouvelle rue apparaît dans l'application et sur la Live Map sous **2 à 5 jours**. Le serveur de routing peut nécessiter un jour supplémentaire pour traiter correctement la rue pour le calcul d'itinéraire.

### Droits d'édition (non Area Managers)

Les éditeurs sans statut AM peuvent modifier les routes dans un rayon de **1,6 km** des rues qu'ils ont parcourues. Ces droits deviennent disponibles sous **2 jours** après le trajet enregistré.

### Points et score

L'application affiche les points en temps réel, mais le serveur les consolide **une fois par jour**. Il peut donc y avoir un écart temporaire entre l'affichage app et le dashboard.

::: note
Si une modification n'apparaît pas après le délai indiqué, vérifiez que la sauvegarde dans le WME a bien eu lieu avant de re-modifier le segment.
:::
