---
title: "Cartographie des autoroutes — Guidelines 2024"
---

# Cartographie des autoroutes — Guidelines 2024

Par vince1612  
Co-coordinateur Suisse et Global Champ  
Communauté bénévole Waze

## Vue d'ensemble

Les autoroutes suisses ont été largement éditées par un contributeur non conforme qui a effectué de nombreuses modifications rendant la situation actuelle des autoroutes peu uniforme.

Conscients que les anciennes directives ont besoin d'une révision de toute façon, en raison de l'évolution de l'application et de WME, nous présenterons de nouvelles directives à appliquer lors de la vérification et de la correction des éditions non conformes.

## Notes générales

### Type de route : bretelle

Contrairement aux autres types de route, les bretelles ne sont jamais ignorées pour les trajets longue distance. Elles sont considérées comme essentielles pour connecter les autoroutes et autres routes principales.

Les bretelles n'ont pas de paramètre de préférence de routage spécifique (comme « préféré » ou « non préféré ») appliqué par défaut. Leur priorité de routage est inhérente à leur fonction de connecteurs.

Les noms des bretelles n'apparaissent pas sur la carte de l'application client, ce qui aide à réduire l'encombrement. Cependant, ils apparaissent dans le texte des instructions de direction si nécessaire. Par conséquent, il peut être utile de nommer leurs branches différemment dans WME lorsqu'elles se divisent en Y, sans avoir à maintenir un nom continu ou un nom alternatif.

### Sortie / Ausfahrt / Uscita - nommage

Doit être écrit dans la langue locale, les voix TTS sont déjà configurées pour le lire ou le prononcer correctement en fonction de la langue utilisée dans le client.

Par exemple, une personne utilisant Waze en français entendra « Sortie » même si « Ausfahrt » est écrit, et quelqu'un utilisant Waze en allemand entendra « Ausfahrt » même si « Uscita » est écrit.

### Symbole « > »

Ce symbole est largement utilisé en Europe et TTS pour la plupart des langues savent qu'ils doivent le lire comme « towards » / « richtung » / « direction » / etc…

Même s'il n'est pas affiché visuellement, il peut être utilisé dans le champ TTS d'une instruction de virage pour être prononcé correctement dans de nombreuses langues automatiquement.

### Wayfinders

Avant que les boucliers ou les instructions de virage n'existent, les wayfinders étaient courants dans la cartographie. Ils consistaient en de petits segments (5-20m) pour forcer une instruction TTS à être quelque chose d'autre que le nom de la route. Si vous en trouvez, supprimez-les et utilisez une instruction de virage à la place.

![](/freeways/image3.png)

## Instructions de cartographie

### Bretelles de sortie

#### Nommage des segments

Nous ne changerons pas grand-chose de la méthode précédente, en fonction des notes sur « Type de route : bretelle » (voir section précédente), et pour la simplicité car cela fonctionne actuellement bien lors de la « lecture » de la jonction en la regardant dans WME.

Les bretelles sortant de l'autoroute devraient déjà ressembler à ceci :

* Bretelle depuis l'autoroute  
  [**Sortie**/**Ausfahrt**/**Uscita** **##** **>** **Nom de la jonction** **/** **Ville** **1 / 2 / 3**…]
* Bifurcation en Y optionnelle ou situationnelle  
  [**>** **Nom de la ville 1 / Nom de la ville 2**] et [**> Nom de la ville 3**] par exemple

![](/freeways/image4.png)

![](/freeways/image5.png)

##### Avertissement — éditions non conformes

Certaines des éditions non conformes que nous avons vues d'un ancien responsable de pays consistaient à supprimer le symbole « > » après la bifurcation en Y de la bretelle. Si vous voyez cela, veuillez le réajouter. C'est mieux visuellement dans WME (non affiché dans l'application de toute façon) et sert à avoir l'instruction de virage TTS déjà correcte sans avoir à la modifier manuellement.

#### Instruction de virage

Les instructions de virage subiront un léger changement par rapport aux directives de cartographie précédentes.

Autrefois, nous avions l'habitude de tout mettre dans le champ « Visual instructions », et nous utilisions parfois « > » dans le champ « Towards ».

En raison d'Android Auto et CarPlay, qui insèrent automatiquement un point entre les instructions visuelles et vers, ce que nous ne pouvons pas supprimer et sur lequel nous n'avons aucun contrôle, il est préférable de supprimer le « > » pour éviter d'avoir des visuels étranges comme ci-dessous :

![](/freeways/image6.png)

Cependant, il doit être conservé sur les segments et dans le TTS.

##### Bifurcations en Y (en fin de bretelle de sortie)

Le cas échéant (quand cela existe), pour la bifurcation en Y, n'ajoutez pas ou ne forcez pas d'instructions, laissez tout selon la valeur par défaut, le nom de la bretelle sera utilisé pour les instructions TTS.

![](/freeways/image7.png)

##### Instructions de virage autoroute → bretelle de sortie (nouveau mapping)

1. **Visual instructions** : Tapez le **nom de la jonction** (soit selon [https://map.geo.admin.ch/](https://map.geo.admin.ch/) soit un portail géographique cantonal)
2. **Towards** : Tapez les directions restantes, séparées avec / , sans répéter une deuxième fois le nom de la ville correspondant au nom de la jonction.
3. **Exit signs** : Insérez le symbole de sortie (bouclier) et son numéro
4. **TTS** : Tout devrait déjà être correct et selon le nom principal du segment de bretelle.

   **Voice prompt** peut être laissé par défaut.

![](/freeways/image8.png)

### Bretelles d'entrée

#### Vérification et suppression des boucliers

Lors de l'ajout précoce de boucliers à WME, de nombreux segments de bretelle ont eu des boucliers ajoutés.

Ce n'est pas nécessaire et les boucliers ne doivent être appliqués que sur les segments réels d'autoroute. Si vous trouvez des bretelles d'entrée avec des boucliers, vous pouvez les supprimer.

![](/freeways/image9.png)

#### Nommage des segments

Similairement aux sorties, les noms des bretelles ne seront visibles que sur WME, ils peuvent donc être laissés comme la méthode ancienne et servir déjà à obtenir une instruction TTS correcte sans avoir besoin de toute modification supplémentaire.

Exemple : [**Axx** **>** **Ville de direction** (ou villes séparées avec un **/** )]

![](/freeways/image10.png)

#### Instruction de virage

Il y a longtemps, toutes les instructions de virage ont déjà été cartographiées comme dans l'exemple ci-dessous selon la méthode originale. Il n'est pas nécessaire de les modifier sauf si elles ont été altérées ou modifiées par des éditions non conformes.

![](/freeways/image11.png)

##### Utilisation optionnelle des boucliers pour les instructions d'entrée

Maintenant que nous avons ajouté tous les numéros Axx et Exx lors du projet Nexus, nous pouvons faire usage de boucliers pour les directions sur les segments d'entrée d'autoroute.

CEPENDANT, comme cela nécessitait une énorme quantité d'édition manuelle, je vous conseille de l'utiliser uniquement où et si cela améliore le routage de quelque façon.

La méthode de cartographie originale (ci-dessus) ne pose aucun problème, elle n'a donc pas besoin d'être modifiée.

Un exemple : Uniquement les boucliers dans les instructions visuelles / Direction dans Towards  
(Voir l'image ci-dessous)

![](/freeways/image12.png)

Cela fonctionne bien principalement où les numéros Exx existent, car ils prennent de la place dans le champ « Visual instructions », ne laissant aucune place pour le texte, nous plaçons donc la ville/direction dans le champ « Towards ». Cela peut aussi aider où la ville/direction après Axx est trop longue à afficher.

Où il n'y a pas de numéro Exx, l'espace à côté du bouclier Axx est généralement suffisant pour afficher une ville/direction, comme dans la cartographie originale ci-dessus.

### Échangeurs autoroutiers

#### Exemples

![](/freeways/image13.png)

![](/freeways/image14.png)

![](/freeways/image15.png)

#### Nommage des segments

Au sein des courbes « Spaghetti » de l'échangeur, pour rendre les segments facilement distinguables sur WME, nommez-les de la même façon que les directions sur les bretelles d'entrée.

Bien sûr, ces segments doivent avoir tous les noms alternatifs Axx et Exx configurés, comme c'était l'objectif du projet Nexus, cela devrait déjà être correct.

![](/freeways/image16.png)

![](/freeways/image17.png)

#### Instructions de virage

**Visual instructions** : Utilisez uniquement les boucliers

**Towards** : Utilisez les villes/directions

**Exit signs** : Doit être vide

**Voice prompt** : Adaptez-le à ce qui est le mieux, car les noms de route continus peuvent supprimer toute instruction et il peut falloir en forcer une

**TTS** : Devrait déjà être correct en fonction du nom du segment.

![](/freeways/image18.png)

### Géométrie

*Priorité pour les longues bretelles - les bretelles petites/régulières ne sont pas une priorité*

La Suisse a précédemment adopté la règle de cartographie suivante :

![](/freeways/image19.png)

Cependant, il a été signalé par le personnel lors des réunions que cartographier le nœud de la bretelle au point A n'est pas recommandé ni optimal pour le routage et Falcon (le correcteur GPS des routes).

En fonction des **recommandations du personnel**, nous passerons progressivement au placement du nœud au dernier point de sortie légal (illustré par le point C dans la capture d'écran ci-dessus).

*[Appel avec enregistrement du personnel : Off ramps – 2024_09_26 16_26 BST – Recording.mp4](https://drive.google.com/file/d/1eCMVwhmgbLBHPeZY6tYVySE6O9Y4NI-3/view?usp=sharing) (30 min, anglais)*

De plus, pour les sorties longues non standard, nous pouvons faire usage de la nouvelle fonction « Far turn » pour ajouter une instruction précoce. Mais ne l'utilisez pas sur les bretelles plus petites ou standard.

Une priorité plus élevée sera accordée aux longues bretelles, et une priorité inférieure aux sorties standard avec bretelles courtes, plutôt qu'une mapraid, nous encouragerons les contributeurs à vérifier et corriger celles-ci à leur guise et progressivement au cours des mois suivants.
