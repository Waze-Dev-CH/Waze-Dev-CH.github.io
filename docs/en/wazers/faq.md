---
title: Driver FAQ
description: Answers to frequently asked questions from drivers about Waze in Switzerland.
sidebar: false
aside: true
order: 4
---

# Driver FAQ

<img class="banner-img is-narrow" src="/img/wazers/waze-kit/icons/faq.png" alt="">

The most frequent questions from Waze drivers in Switzerland. Click a question to expand the answer.

## The application

::: details Which platforms is Waze available on?
Waze is available on **iOS** and **Android**, free of charge.

The application can also be displayed on your vehicle's screen through **Android Auto** or **Apple CarPlay**, and some recent vehicles have Waze built directly into their onboard system, without a phone.
:::

::: details Where can I get help with the application?
Waze is part of Google: official support goes through the [Google help pages](https://support.google.com/waze) (mainly in English).

For questions specific to Switzerland (local mapping, vignette, road closures), the Swiss community is more effective:

- [Waze Switzerland Forum](https://www.waze.com/discuss/c/editors/switzerland/4790)
- [Waze CH Discord](https://discord.gg/dmxUwvTkk5)
:::

## Routes and navigation

::: details When searching for a route through Switzerland, the application avoids motorways, why?
Swiss motorways require a pass called the "vignette". It costs **CHF 40.–** and must be affixed to the windshield. Without a vignette, the fine is **CHF 200.–**.

Waze needs a confirmation that you own the vignette before it will suggest motorways in Switzerland. Until that is done, the application systematically routes around them.

The full procedure, along with the official purchase links, can be found on the [Motorway vignette](/en/wazers/vignette) page.
:::

::: details How do I avoid tolls, highways, ferries or unpaved roads?
These settings are found under **Settings** > **Navigation**:

- **Avoid toll roads**
- **Avoid ferries**
- **Avoid highways**
- **Unpaved roads**, with three choices: Allow, Don't allow, or Avoid long ones

For a one-off trip, without changing your permanent settings: search for your destination, tap **See routes**, then **Avoid** at the top of the screen.

On CarPlay, the **Avoid** menu is at the top right. On Android Auto, it is reachable through the settings icon.

Please note: if no other trip is possible, Waze will still route you through a toll, a highway, a ferry or an unpaved road. These options are preferences, not absolute prohibitions.
:::

::: details Waze always suggests the same route, why?
By default Waze applies **personalized navigation**: the application learns from your past trips, from the routes you accept and the ones you decline, in order to refine its arrival estimates and favour the roads you appear to prefer.

To turn it off: **Settings** > **Navigation** > **Personalization**, then uncheck **Personalized ETAs** and **Personalized routes**.

Worth noting: Waze does not let you manually save a preferred route between two points. You can, however, review the other trips offered before starting, through the route list.
:::

::: details Does Waze work without an internet connection?
No. Waze requires an **active data connection** to locate you, calculate a route and display traffic. The application does not offer downloadable offline maps.

With an unstable connection, Waze keeps trying to retrieve server data, but traffic and hazard alerts may be incomplete or out of date.
:::

## The map is out of date

::: details How long before a correction shows up in the application?
Two delays add up:

1. **Map publication.** Changes made by editors are compiled and published roughly **once a day**. Until that publication has happened, the correction exists nowhere but in the editor.
2. **Your application's cache.** Waze keeps the portion of the map already downloaded locally. It refreshes on your next route calculations and when you drive through the area concerned.

So allow at least 24 hours, and several days for a brand new street. The breakdown by type of change is on the [Map update delays](/en/editors/wme/delais-mise-a-jour) page.
:::

::: details My application's map stays out of date, how do I force a refresh?
If the correction has been in place in the editor for **48 hours or more** and your application still shows the old version, you can force a refresh of the local cache:

1. Open Waze and enter the code `2##2` in the address search bar, then confirm. The application switches to debug mode.
2. Open **Settings** > **General**.
3. Tap **Refresh map of my area**.

Your application then re-downloads the map of the region, in its most recently published version.

**If this option is missing from your version**, since its location has changed across updates:

- **Android**: open your phone's **Settings** > **Apps** > **Waze** > **Storage**, then **Clear cache**. Do not touch "Clear data", which would sign you out.
- **iOS**: there is no per-application cache clearing. Uninstall then reinstall Waze. The "Offload App" option is not enough, because it keeps the application's data.
:::

::: details I spotted an error on the map, how do I report it?
From the application, tap the **Report** button, then choose **Map issue**. The available subtypes cover the essentials:

- General map error
- Wrong turn
- Incorrect address
- Speed limit
- Wrong route
- Missing roundabout
- Missing road

Your report creates an **update request** that volunteer editors see appear on the map. They can reply to you directly in the application to ask for a clarification, so keep an eye out for their messages: without an answer from you, the request eventually gets closed without a fix.

Describe the problem as precisely as possible: the direction of travel concerned, the time, what Waze told you to do and what it should have told you to do.
:::

## Reports

::: details What can I report from the application?
The **Report** button covers in particular:

- Traffic and jams
- Police <sup>[<Badge type="danger" text="ⓘ disabled" />](#speed-cameras-and-police)</sup>
- Crashes
- Hazards on the road
- Bad weather
- Blocked lane
- Map issue
- Adding a place
- Road closure
- Fuel type and prices
- Emergency vehicles

Voice reporting is also possible: describe the situation in plain language instead of navigating through the menus.
:::

::: details What is the difference between a traffic report and a map issue?
A **traffic**, **police** <sup>[<Badge type="danger" text="ⓘ disabled" />](#speed-cameras-and-police)</sup>, **crash** or **hazard** report is a real-time, short-lived alert: it warns the drivers coming up behind you, then disappears. It does not change the map.

A **map issue** report is a different beast: it creates an update request handled manually by a volunteer editor, who will correct the map if the problem is confirmed. It is the only type of report that leads to a lasting change.
:::

::: details Are there rules to follow when reporting?
Two principles:

- **Only report what you actually see**, and as close as possible to the event. A report placed several kilometres before or after misleads other drivers.
- **Do not overuse reports.** Waze can block an account whose reports are clearly false or repetitive.

And of course: report safely, ideally while stopped or by handing the task to your passenger.
:::

## Speed cameras and police

::: details Why are no fixed speed cameras reported on Waze in Switzerland?
Speed cameras have been disabled in Switzerland because of Swiss law, which prohibits devices that warn of the presence of speed checks.

This feature will not be re-enabled unless the law changes. It is neither a bug nor a gap in the map: there is no point reporting missing speed cameras.
:::

::: details Why can't I report police in Switzerland any more?
The option has been removed from the report menu and police alerts are no longer shown. Just as with speed cameras, it is neither a bug nor a gap in the map: there is no point looking for the option in the application, or reporting it as missing.

Everything else in the application keeps working as usual: navigation, real-time traffic, road hazard alerts and route calculation.
:::

::: note Legal basis
In Switzerland, art. 98a of the Federal Act on Road Traffic (RTA, SR 741.01) prohibits devices intended to hinder, disrupt or render ineffective the official monitoring of road traffic, as well as warning road users about such checks.

The Act is published in German, French and Italian; there is no official English version.

[Text of art. 98a RTA (French)](https://www.fedlex.admin.ch/eli/cc/1959/679_705_685/fr#art_98_a) / [German](https://www.fedlex.admin.ch/eli/cc/1959/679_705_685/de#art_98_a)
:::

## Fuel prices

::: details The fuel prices are wrong, what should I do?
The only way to update a price is to do it **from the application, less than 500 m from the station**: orange report button, then **Fuel prices**.

This is a deliberate limitation by Waze: it guarantees that the price entered was indeed observed on site.
:::

::: details I reported wrong prices but nothing was corrected, why?
Map editors cannot update prices remotely: the 500 m restriction applies to them too. They therefore close these requests without being able to act, which can give the impression that the report was ignored.

If you regularly drive past a station whose price is wrong, you are the best placed person to fix it. The details of how editors handle this are described on the [Closing URs](/en/editors/wme/fermeture-urs) page.
:::

## Road closures and events

::: details A major event or roadworks will affect traffic in my area, how can I help?
Warn the local community in advance: closures entered into the map ahead of time prevent hundreds of drivers from being sent into a blocked street.

- Post on the [Waze Switzerland Forum](https://www.waze.com/discuss/c/editors/switzerland/4790)
- Or write to fermetures@waze-switzerland.ch (fr/it/en) or sperrungen@waze-switzerland.ch (de/en)

Give the exact dates and times, the streets concerned, and if possible attach the official order or the diversion plan. How these closures are entered is described on the [Road closures](/en/editors/wme/fermetures) page.
:::

## Voice, language and sound

::: details I changed the application's language, but the instructions are still in the old language
This is the most frequent misunderstanding: the interface language and the voice instruction language are **two separate settings**. Changing one does not change the other.

For the voice: **Settings** > **Voice & sound** > **Waze voice**, then pick a voice in the language you want.

If you use Waze on Android Auto or CarPlay, first disconnect the phone from the vehicle's screen before changing this setting.
:::

::: details Waze does not pronounce street names
Not every voice reads street names out loud. In the voice list, pick one carrying the **"including street names"** label.
:::

::: details Can I change the language of the street names shown on the map?
No, there is no setting for that. The names shown are the ones entered in the map, in the official language of the municipality concerned. In Switzerland you will therefore see streets in French, German, Italian or Romansh depending on the region you drive through, whatever your application's language.
:::

## Android Auto and CarPlay

::: details How do I use Waze on my car's screen?
Connect your phone over USB or wirelessly, depending on what your vehicle supports. Compatibility with Android Auto or CarPlay depends on the model: check with the manufacturer.

A few useful points:

- **Keyboard entry is only possible when stopped**, with the parking brake engaged. While driving, use voice commands.
- Your **saved places** (home, work, favourites) are synced from the phone application: set them up before you leave.
:::

::: details Some features are missing on the car's screen
That is normal: Waze on CarPlay and Android Auto is a **lightweight version** of the mobile application. Detailed settings, account management and part of the reporting still have to be done from the phone.

The **Avoid** menu does exist on the vehicle's screen, but its location differs: top right on CarPlay, through the settings icon on Android Auto.

Finally, remember to **disconnect the phone from the vehicle's screen** before changing voice, language or account settings: some changes are not taken into account while the connection is active.
:::

## Mobile data

::: details How do I check what Waze consumes in data?
This information is provided by your phone, not by Waze:

- **iOS**: **Settings** > **Cellular Data**, then look for Waze in the list.
- **Android**: **Settings** > **Mobile data usage** > **Waze**, with a chart per period.
:::

::: details Waze no longer updates when Data Saver is on
Data Saver is a setting on your phone, not in Waze: it cuts off applications' background network access.

So that Waze keeps receiving traffic and alerts, allow it explicitly in the device settings: **Allow app while Data Saver is on**, and **Allow background data**.
:::

## Account and privacy

::: details How do I delete my Waze account?
From the application: **Menu** > **View profile** (under your name) > **Account & login**, then scroll down to **Delete account** and confirm. You may be asked for your credentials again.

For a guest account: **Settings** > **Privacy** > **Delete account**.

If you use Waze on Android Auto or CarPlay, disconnect the phone from the vehicle's screen first.
:::

::: details What happens to my contributions if I delete my account?
Your **saved places and navigation history** are deleted.

Your **map contributions** are not erased, but they are dissociated from your identity: the corrections you made stay in place for the benefit of other drivers.

Actual deletion from the storage systems takes about **two months**. Deletion is permanent: a deleted account cannot be recovered.
:::

---

For the editing side, in particular how your reports are handled, see [Editors](/en/editors/).

::: help Need more help?
Join the Waze Switzerland community:
- [Waze Switzerland Forum](https://www.waze.com/discuss/c/editors/switzerland/4790)
- [Waze CH Discord](https://discord.gg/dmxUwvTkk5)
:::

::: quote Sources
https://www.waze-switzerland.ch/faq/fr

https://support.google.com/waze
:::
