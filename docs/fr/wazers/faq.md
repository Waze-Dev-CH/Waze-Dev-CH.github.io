---
title: FAQ conducteurs
description: Réponses aux questions fréquentes des conducteurs sur Waze en Suisse.
sidebar: false
aside: true
order: 4
---

# FAQ conducteurs

<img class="banner-img is-narrow" src="/img/wazers/waze-kit/icons/faq.png" alt="">

Les questions les plus fréquentes des conducteurs Waze en Suisse. Cliquez sur une question pour dérouler la réponse.

## L'application

::: details Sur quelles plateformes Waze est-il disponible ?
Waze est disponible sur **iOS** et **Android**, gratuitement.

L'application peut également s'afficher sur l'écran de votre véhicule via **Android Auto** ou **Apple CarPlay**, et certains véhicules récents intègrent Waze directement dans leur système embarqué, sans téléphone.
:::

::: details Où puis-je obtenir de l'aide sur l'application ?
Waze fait partie de Google : le support officiel passe par les [pages d'aide Google](https://support.google.com/waze) (principalement en anglais).

Pour les questions propres à la Suisse (cartographie locale, vignette, fermetures de routes), la communauté suisse est plus efficace :

- [Forum Waze Suisse](https://www.waze.com/discuss/c/editors/switzerland/4790)
- [Discord Waze CH](https://discord.gg/dmxUwvTkk5)
:::

## Itinéraires et navigation

::: details En cherchant un itinéraire passant par la Suisse, l'application évite les autoroutes, pourquoi ?
Les autoroutes suisses nécessitent un pass appelé « vignette ». Elle coûte **CHF 40.–** et doit être apposée sur le pare-brise. Sans vignette, l'amende est de **CHF 200.–**.

Waze a besoin d'une confirmation que vous possédez la vignette avant de vous proposer les autoroutes en Suisse. Tant que ce n'est pas fait, l'application les contourne systématiquement.

La procédure complète, ainsi que les liens d'achat officiels, se trouvent sur la page [Vignette autoroutière](/fr/wazers/vignette).
:::

::: details Comment éviter les péages, les autoroutes, les ferries ou les routes non revêtues ?
Ces réglages se trouvent dans **Paramètres** > **Navigation** :

- **Éviter les routes à péage**
- **Éviter les ferries**
- **Éviter les autoroutes**
- **Routes non revêtues**, avec trois choix : Autoriser, Ne pas autoriser, ou Éviter les longues

Pour un trajet ponctuel, sans modifier vos réglages permanents : recherchez votre destination, appuyez sur **Voir les itinéraires**, puis sur **Éviter** en haut de l'écran.

Sur CarPlay, le menu **Éviter** se trouve en haut à droite. Sur Android Auto, il est accessible via l'icône des paramètres.

Attention : si aucun autre trajet n'est possible, Waze vous fera malgré tout passer par un péage, une autoroute, un ferry ou une route non revêtue. Ces options sont des préférences, pas des interdictions absolues.
:::

::: details Waze me propose toujours le même itinéraire, pourquoi ?
Waze applique par défaut une **navigation personnalisée** : l'application apprend de vos trajets passés, des itinéraires que vous acceptez et de ceux que vous refusez, pour affiner ses estimations d'arrivée et privilégier les routes que vous semblez préférer.

Pour la désactiver : **Paramètres** > **Navigation** > **Personnalisation**, puis décochez **ETA personnalisés** et **Itinéraires personnalisés**.

À noter : Waze ne permet pas d'enregistrer manuellement un itinéraire préféré entre deux points. Vous pouvez en revanche consulter les autres trajets proposés avant de démarrer, via la liste des itinéraires.
:::

::: details Waze fonctionne-t-il sans connexion internet ?
Non. Waze nécessite une **connexion de données active** pour se localiser, calculer un itinéraire et afficher le trafic. L'application ne propose pas de cartes hors ligne téléchargeables.

Avec une connexion instable, Waze continue de tenter de récupérer les données du serveur, mais les alertes de trafic et de danger peuvent être incomplètes ou obsolètes.
:::

## La carte n'est pas à jour

::: details Combien de temps avant qu'une correction apparaisse dans l'application ?
Deux délais s'additionnent :

1. **La publication de la carte.** Les modifications faites par les éditeurs sont compilées et publiées environ **une fois par jour**. Tant que cette publication n'a pas eu lieu, la correction n'existe nulle part ailleurs que dans l'éditeur.
2. **Le cache de votre application.** Waze conserve localement la portion de carte déjà téléchargée. Elle se rafraîchit lors de vos prochains calculs d'itinéraire et de vos passages dans la zone concernée.

Comptez donc au minimum 24 heures, et plusieurs jours pour une rue entièrement nouvelle. Le détail par type de modification figure sur la page [Délais de mise à jour de la carte](/fr/editors/wme/delais-mise-a-jour).
:::

::: details La carte de mon application reste périmée, comment forcer l'actualisation ?
Si la correction est en place dans l'éditeur depuis **48 heures ou plus** et que votre application affiche toujours l'ancienne version, vous pouvez forcer le rafraîchissement du cache local :

1. Ouvrez Waze et saisissez le code `2##2` dans la barre de recherche d'adresses, puis validez. L'application passe en mode débogage.
2. Ouvrez **Paramètres** > **Général**.
3. Appuyez sur **Actualiser la carte de ma zone**.

Votre application retélécharge alors la carte de la région, dans sa version publiée la plus récente.

**Si cette option est absente de votre version**, l'emplacement ayant changé au fil des mises à jour :

- **Android** : ouvrez les **Réglages** du téléphone > **Applications** > **Waze** > **Stockage**, puis **Vider le cache**. Ne touchez pas à « Effacer les données », qui vous déconnecterait.
- **iOS** : il n'existe pas de vidage de cache par application. Désinstallez puis réinstallez Waze. L'option « Décharger l'app » ne suffit pas, car elle conserve les données de l'application.
:::

::: details J'ai repéré une erreur sur la carte, comment la signaler ?
Depuis l'application, appuyez sur le bouton **Signaler**, puis choisissez **Problème de carte**. Les sous-types disponibles couvrent l'essentiel :

- Erreur de carte générale
- Virage incorrect
- Adresse incorrecte
- Limite de vitesse
- Itinéraire incorrect
- Rond-point manquant
- Route manquante

Votre signalement crée une **demande de mise à jour** que les éditeurs bénévoles voient apparaître sur la carte. Ils peuvent vous répondre directement dans l'application pour demander une précision, alors restez attentif à leurs messages : sans réponse de votre part, la demande finit par être fermée sans correction.

Décrivez le problème le plus précisément possible : le sens de circulation concerné, l'heure, ce que Waze vous a demandé de faire et ce qu'il aurait fallu faire.
:::

## Signalements

::: details Que puis-je signaler depuis l'application ?
Le bouton **Signaler** couvre notamment :

- Trafic et embouteillages
- Police
- Accidents
- Dangers sur la route
- Mauvaise météo
- Voie bloquée
- Problème de carte
- Ajout d'un lieu
- Fermeture de route
- Type et prix des carburants
- Véhicules d'urgence

Un signalement vocal est également possible : décrivez la situation en langage courant plutôt que de naviguer dans les menus.
:::

::: details Quelle différence entre un signalement de trafic et un problème de carte ?
Un signalement de **trafic, police, accident ou danger** est une alerte temps réel, éphémère : elle prévient les conducteurs qui arrivent derrière vous, puis disparaît. Elle ne modifie pas la carte.

Un signalement de **problème de carte** est d'une autre nature : il crée une demande de mise à jour traitée manuellement par un éditeur bénévole, qui corrigera la carte si le problème est confirmé. C'est le seul type de signalement qui débouche sur une modification durable.
:::

::: details Y a-t-il des règles à respecter pour les signalements ?
Deux principes :

- **Ne signalez que ce que vous voyez réellement**, et au plus près de l'événement. Un signalement placé plusieurs kilomètres avant ou après induit les autres conducteurs en erreur.
- **N'abusez pas des signalements.** Waze peut bloquer un compte dont les signalements sont manifestement faux ou répétitifs.

Et bien sûr : signalez en sécurité, idéalement à l'arrêt ou en confiant l'opération à votre passager.
:::

## Radars

::: details Pourquoi aucun radar fixe n'est signalé sur Waze en Suisse ?
Les radars ont été désactivés en Suisse en raison de la législation suisse, qui interdit les dispositifs avertissant de la présence de contrôles de vitesse.

Cette fonctionnalité ne sera pas réactivée à moins d'un changement de loi. Il ne s'agit ni d'un bug, ni d'un manque dans la carte : inutile de signaler des radars manquants.
:::

## Prix des carburants

::: details Les prix de l'essence sont faux, que faire ?
Le seul moyen de mettre à jour un prix est de le faire **depuis l'application, à moins de 500 m de la station** : bouton orange de signalement, puis **Prix de l'essence**.

C'est une limitation volontaire de Waze : elle garantit que le prix saisi a bien été relevé sur place.
:::

::: details J'ai signalé des prix faux mais rien n'a été corrigé, pourquoi ?
Les éditeurs de carte ne peuvent pas mettre à jour les prix à distance : la restriction des 500 m s'applique à eux aussi. Ils ferment donc ces demandes sans pouvoir agir, ce qui peut donner l'impression que le signalement a été ignoré.

Si vous passez régulièrement devant une station dont le prix est faux, vous êtes la personne la mieux placée pour le corriger. Le détail du traitement côté éditeur est décrit sur la page [Fermeture des URs](/fr/editors/wme/fermeture-urs).
:::

## Fermetures de routes et événements

::: details Un événement majeur ou des travaux vont impacter le trafic dans ma zone, comment aider ?
Prévenez la communauté locale en amont : les fermetures saisies à l'avance dans la carte évitent que des centaines de conducteurs soient envoyés dans une rue barrée.

- Postez sur le [Forum Waze Suisse](https://www.waze.com/discuss/c/editors/switzerland/4790)
- Ou écrivez à fermetures@waze-switzerland.ch (fr/it/en) ou sperrungen@waze-switzerland.ch (de/en)

Indiquez les dates et heures exactes, les rues concernées, et joignez si possible l'arrêté ou le plan de déviation officiel. La manière dont ces fermetures sont saisies est décrite sur la page [Fermetures de routes](/fr/editors/wme/fermetures).
:::

## Voix, langue et son

::: details J'ai changé la langue de l'application, mais les instructions restent dans l'ancienne langue
C'est le malentendu le plus fréquent : la langue de l'interface et la langue des instructions vocales sont **deux réglages distincts**. Changer l'une ne change pas l'autre.

Pour la voix : **Paramètres** > **Voix et son** > **Voix Waze**, puis choisissez une voix dans la langue souhaitée.

Si vous utilisez Waze sur Android Auto ou CarPlay, déconnectez d'abord le téléphone de l'écran du véhicule avant de modifier ce réglage.
:::

::: details Waze ne prononce pas les noms de rue
Toutes les voix ne lisent pas les noms de rue. Dans la liste des voix, choisissez-en une portant la mention **« avec noms de rue »** (ou « including street names » selon la langue de l'interface).
:::

::: details Puis-je changer la langue des noms de rue affichés sur la carte ?
Non, il n'existe pas de réglage pour cela. Les noms affichés sont ceux saisis dans la carte, dans la langue officielle de la commune concernée. En Suisse, vous verrez donc les rues en français, allemand, italien ou romanche selon la région traversée, quelle que soit la langue de votre application.
:::

## Android Auto et CarPlay

::: details Comment utiliser Waze sur l'écran de ma voiture ?
Connectez votre téléphone en USB ou sans fil, selon ce que supporte votre véhicule. La compatibilité avec Android Auto ou CarPlay dépend du modèle : vérifiez auprès du constructeur.

Quelques points utiles :

- La **saisie au clavier n'est possible qu'à l'arrêt**, frein à main serré. En roulant, passez par la commande vocale.
- Vos **lieux enregistrés** (domicile, travail, favoris) sont synchronisés depuis l'application du téléphone : préparez-les avant de partir.
:::

::: details Certaines fonctions manquent sur l'écran de la voiture
C'est normal : Waze sur CarPlay et Android Auto est une **version allégée** de l'application mobile. Les réglages détaillés, la gestion du compte et une partie des signalements restent à faire depuis le téléphone.

Le menu **Éviter** existe bien sur l'écran du véhicule, mais son emplacement diffère : en haut à droite sur CarPlay, via l'icône des paramètres sur Android Auto.

Enfin, pensez à **déconnecter le téléphone de l'écran du véhicule** avant de modifier les réglages de voix, de langue ou de compte : certaines modifications ne sont pas prises en compte tant que la connexion est active.
:::

## Données mobiles

::: details Comment vérifier ce que Waze consomme en données ?
Cette information est fournie par votre téléphone, pas par Waze :

- **iOS** : **Réglages** > **Données cellulaires**, puis cherchez Waze dans la liste.
- **Android** : **Paramètres** > **Utilisation des données mobiles** > **Waze**, avec un graphique par période.
:::

::: details Waze ne se met plus à jour quand l'économiseur de données est actif
L'économiseur de données est un réglage de votre téléphone, pas de Waze : il coupe l'accès réseau en arrière-plan des applications.

Pour que Waze continue de recevoir le trafic et les alertes, autorisez-le explicitement dans les paramètres de l'appareil : **Autoriser l'application quand l'économiseur de données est activé**, et **Autoriser les données en arrière-plan**.
:::

## Compte et confidentialité

::: details Comment supprimer mon compte Waze ?
Depuis l'application : **Menu** > **Voir le profil** (sous votre nom) > **Compte et connexion**, puis faites défiler jusqu'à **Supprimer le compte** et confirmez. Vos identifiants peuvent vous être redemandés.

Pour un compte invité : **Paramètres** > **Confidentialité** > **Supprimer le compte**.

Si vous utilisez Waze sur Android Auto ou CarPlay, déconnectez d'abord le téléphone de l'écran du véhicule.
:::

::: details Que devient ce que j'ai contribué si je supprime mon compte ?
Vos **lieux enregistrés et votre historique de navigation** sont supprimés.

Vos **contributions à la carte** ne sont pas effacées, mais elles sont dissociées de votre identité : les corrections que vous avez apportées restent en place au bénéfice des autres conducteurs.

La suppression effective des systèmes de stockage prend environ **deux mois**. La suppression est définitive : un compte supprimé ne peut pas être récupéré.
:::

---

Pour le versant édition, notamment la manière dont vos signalements sont traités, voir [Éditeurs](/fr/editors/).

::: help Besoin d'aide supplémentaire ?
Rejoignez la communauté Waze Suisse :
- [Forum Waze Suisse](https://www.waze.com/discuss/c/editors/switzerland/4790)
- [Discord Waze CH](https://discord.gg/dmxUwvTkk5)
:::

::: quote Source(s)
https://www.waze-switzerland.ch/faq/fr

https://support.google.com/waze
:::
