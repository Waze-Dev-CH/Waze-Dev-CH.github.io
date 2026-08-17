---
title: FAQ für Fahrer
description: Antworten auf häufige Fragen von Fahrern zu Waze in der Schweiz.
sidebar: false
aside: true
order: 4
---

# FAQ für Fahrer

<img class="banner-img is-narrow" src="/img/wazers/waze-kit/icons/faq.png" alt="">

Die häufigsten Fragen von Waze-Fahrern in der Schweiz. Klicken Sie auf eine Frage, um die Antwort aufzuklappen.

## Die App

::: details Auf welchen Plattformen ist Waze verfügbar?
Waze ist kostenlos für **iOS** und **Android** verfügbar.

Die App kann zudem über **Android Auto** oder **Apple CarPlay** auf dem Bildschirm Ihres Fahrzeugs angezeigt werden, und einige neuere Fahrzeuge integrieren Waze direkt in ihr Bordsystem, ohne Telefon.
:::

::: details Wo erhalte ich Hilfe zur App?
Waze gehört zu Google: Der offizielle Support läuft über die [Google-Hilfeseiten](https://support.google.com/waze) (hauptsächlich auf Englisch).

Bei Fragen, die spezifisch die Schweiz betreffen (lokale Kartografie, Vignette, Strassensperrungen), ist die Schweizer Community effizienter:

- [Waze-Forum Schweiz](https://www.waze.com/discuss/c/editors/switzerland/4790)
- [Discord Waze CH](https://discord.gg/dmxUwvTkk5)
:::

## Routen und Navigation

::: details Bei einer Route durch die Schweiz vermeidet die App die Autobahnen, warum?
Für Schweizer Autobahnen ist eine Gebührenmarke erforderlich, die «Vignette». Sie kostet **CHF 40.–** und muss an der Windschutzscheibe angebracht werden. Ohne Vignette beträgt die Busse **CHF 200.–**.

Waze benötigt eine Bestätigung, dass Sie die Vignette besitzen, bevor Ihnen Autobahnen in der Schweiz vorgeschlagen werden. Solange das nicht geschehen ist, umfährt die App sie systematisch.

Die vollständige Anleitung sowie die offiziellen Kaufmöglichkeiten finden Sie auf der Seite [Autobahnvignette](/de/wazers/vignette).
:::

::: details Wie vermeide ich Mautstrassen, Autobahnen, Fähren oder unbefestigte Strassen?
Diese Einstellungen finden Sie unter **Einstellungen** > **Navigation**:

- **Mautstrassen vermeiden**
- **Fähren vermeiden**
- **Autobahnen vermeiden**
- **Unbefestigte Strassen**, mit drei Möglichkeiten: Zulassen, Nicht zulassen oder Lange vermeiden

Für eine einzelne Fahrt, ohne Ihre dauerhaften Einstellungen zu ändern: Suchen Sie Ihr Ziel, tippen Sie auf **Routen anzeigen** und dann oben auf dem Bildschirm auf **Vermeiden**.

Bei CarPlay befindet sich das Menü **Vermeiden** oben rechts. Bei Android Auto ist es über das Einstellungssymbol zugänglich.

Achtung: Wenn keine andere Strecke möglich ist, führt Waze Sie trotzdem über eine Mautstrasse, eine Autobahn, eine Fähre oder eine unbefestigte Strasse. Diese Optionen sind Präferenzen, keine absoluten Verbote.
:::

::: details Waze schlägt mir immer dieselbe Route vor, warum?
Waze verwendet standardmässig eine **personalisierte Navigation**: Die App lernt aus Ihren vergangenen Fahrten, aus den Routen, die Sie annehmen, und aus jenen, die Sie ablehnen, um ihre Ankunftszeiten zu verfeinern und die Strecken zu bevorzugen, die Sie offenbar mögen.

Zum Deaktivieren: **Einstellungen** > **Navigation** > **Personalisierung**, dann **Personalisierte Ankunftszeiten** und **Personalisierte Routen** abwählen.

Zu beachten: Waze erlaubt es nicht, eine bevorzugte Route zwischen zwei Punkten manuell zu speichern. Sie können jedoch vor der Abfahrt über die Routenliste die anderen vorgeschlagenen Strecken ansehen.
:::

::: details Funktioniert Waze ohne Internetverbindung?
Nein. Waze benötigt eine **aktive Datenverbindung**, um Ihren Standort zu bestimmen, eine Route zu berechnen und den Verkehr anzuzeigen. Die App bietet keine herunterladbaren Offline-Karten.

Bei instabiler Verbindung versucht Waze weiterhin, die Serverdaten abzurufen, aber die Verkehrs- und Gefahrenmeldungen können unvollständig oder veraltet sein.
:::

## Die Karte ist nicht aktuell

::: details Wie lange dauert es, bis eine Korrektur in der App erscheint?
Zwei Verzögerungen addieren sich:

1. **Die Veröffentlichung der Karte.** Die von den Editoren vorgenommenen Änderungen werden ungefähr **einmal pro Tag** zusammengestellt und veröffentlicht. Solange diese Veröffentlichung nicht stattgefunden hat, existiert die Korrektur nirgends ausser im Editor.
2. **Der Cache Ihrer App.** Waze speichert den bereits heruntergeladenen Kartenausschnitt lokal. Er wird bei Ihren nächsten Routenberechnungen und Fahrten durch das betroffene Gebiet aktualisiert.

Rechnen Sie also mit mindestens 24 Stunden und mit mehreren Tagen bei einer komplett neuen Strasse. Die Details je nach Änderungsart finden Sie auf der Seite [Aktualisierungsfristen der Karte](/de/editors/wme/delais-mise-a-jour).
:::

::: details Die Karte in meiner App bleibt veraltet, wie erzwinge ich eine Aktualisierung?
Wenn die Korrektur seit **48 Stunden oder länger** im Editor vorhanden ist und Ihre App weiterhin die alte Version anzeigt, können Sie die Aktualisierung des lokalen Caches erzwingen:

1. Öffnen Sie Waze und geben Sie den Code `2##2` in die Adresssuchleiste ein, dann bestätigen. Die App wechselt in den Debug-Modus.
2. Öffnen Sie **Einstellungen** > **Allgemein**.
3. Tippen Sie auf **Karte meiner Region aktualisieren**.

Ihre App lädt daraufhin die Karte der Region in der zuletzt veröffentlichten Version erneut herunter.

**Falls diese Option in Ihrer Version fehlt**, da sich ihr Ort im Lauf der Updates geändert hat:

- **Android**: Öffnen Sie die **Einstellungen** des Telefons > **Apps** > **Waze** > **Speicher**, dann **Cache leeren**. Fassen Sie «Daten löschen» nicht an, das würde Sie abmelden.
- **iOS**: Es gibt keine Cache-Leerung pro App. Deinstallieren Sie Waze und installieren Sie es neu. Die Option «App auslagern» genügt nicht, da sie die Daten der App beibehält.
:::

::: details Ich habe einen Fehler auf der Karte entdeckt, wie melde ich ihn?
Tippen Sie in der App auf die Schaltfläche **Melden** und wählen Sie dann **Kartenproblem**. Die verfügbaren Unterkategorien decken das Wesentliche ab:

- Allgemeiner Kartenfehler
- Falsche Abbiegung
- Falsche Adresse
- Tempolimit
- Falsche Route
- Fehlender Kreisel
- Fehlende Strasse

Ihre Meldung erzeugt eine **Aktualisierungsanfrage**, die den freiwilligen Editoren auf der Karte angezeigt wird. Sie können Ihnen direkt in der App antworten, um eine Präzisierung zu erfragen, bleiben Sie also aufmerksam für ihre Nachrichten: Ohne Antwort Ihrerseits wird die Anfrage irgendwann ohne Korrektur geschlossen.

Beschreiben Sie das Problem so genau wie möglich: die betroffene Fahrtrichtung, die Uhrzeit, was Waze von Ihnen verlangt hat und was richtig gewesen wäre.
:::

## Meldungen

::: details Was kann ich über die App melden?
Die Schaltfläche **Melden** deckt unter anderem ab:

- Verkehr und Staus
- Polizei <sup>[<Badge type="warning" text="ⓘ wird bald deaktiviert" />](#blitzer-und-polizei)</sup>
- Unfälle
- Gefahren auf der Strasse
- Schlechtes Wetter
- Gesperrte Spur
- Kartenproblem
- Hinzufügen eines Ortes
- Strassensperrung
- Treibstoffart und -preise
- Einsatzfahrzeuge

Eine Sprachmeldung ist ebenfalls möglich: Beschreiben Sie die Situation in normaler Sprache, statt durch die Menüs zu navigieren.
:::

::: details Was ist der Unterschied zwischen einer Verkehrsmeldung und einem Kartenproblem?
Eine Meldung zu **Verkehr**, **Polizei** <sup>[<Badge type="warning" text="ⓘ wird bald deaktiviert" />](#blitzer-und-polizei)</sup>, **Unfall** oder **Gefahr** ist eine kurzlebige Echtzeitwarnung: Sie warnt die Fahrer, die hinter Ihnen kommen, und verschwindet dann wieder. Sie verändert die Karte nicht.

Eine Meldung zu einem **Kartenproblem** ist anderer Natur: Sie erzeugt eine Aktualisierungsanfrage, die von einem freiwilligen Editor manuell bearbeitet wird, der die Karte korrigiert, wenn sich das Problem bestätigt. Es ist die einzige Meldungsart, die zu einer dauerhaften Änderung führt.
:::

::: details Gibt es Regeln für Meldungen?
Zwei Grundsätze:

- **Melden Sie nur, was Sie tatsächlich sehen**, und möglichst nah am Ereignis. Eine Meldung, die mehrere Kilometer davor oder danach platziert wird, führt die anderen Fahrer in die Irre.
- **Missbrauchen Sie die Meldungen nicht.** Waze kann ein Konto sperren, dessen Meldungen offensichtlich falsch oder wiederholt sind.

Und selbstverständlich: Melden Sie sicher, idealerweise im Stillstand oder indem Sie Ihren Beifahrer damit beauftragen.
:::

## Blitzer und Polizei

::: details Warum werden in der Schweiz keine fest installierten Blitzer auf Waze gemeldet?
Die Blitzer wurden in der Schweiz aufgrund der Schweizer Gesetzgebung deaktiviert, die Geräte verbietet, welche vor Geschwindigkeitskontrollen warnen.

Diese Funktion wird ohne Gesetzesänderung nicht wieder aktiviert. Es handelt sich weder um einen Fehler noch um eine Lücke in der Karte: Es ist zwecklos, fehlende Blitzer zu melden.
:::

::: details Wird die Polizeimeldung in der Schweiz verschwinden?
Ja. Waze hat angekündigt, dass die Polizeimeldung in der Schweiz und in Liechtenstein deaktiviert wird, nach internen Diskussionen über die lokalen Vorschriften.

Die Änderung ist noch nicht in Kraft: Die Option bleibt vorerst in der App verfügbar, und ihre Deaktivierung wurde als bevorstehend angekündigt, ohne genaues Datum.

Sobald die Änderung umgesetzt ist, handelt es sich wie bei den Blitzern weder um einen Fehler noch um eine Lücke in der Karte: Es ist dann zwecklos, die Option im Meldemenü zu suchen oder sie als fehlend zu melden.
:::

::: note Rechtsgrundlage
In der Schweiz verbietet Art. 98a des Strassenverkehrsgesetzes (SVG, SR 741.01) Geräte und Vorrichtungen, die dazu dienen, die amtliche Kontrolle des Strassenverkehrs zu erschweren, zu stören oder unwirksam zu machen, sowie die Warnung der Strassenbenützer vor solchen Kontrollen.

[Text von Art. 98a SVG](https://www.fedlex.admin.ch/eli/cc/1959/679_705_685/de#art_98_a)
:::

## Treibstoffpreise

::: details Die Benzinpreise sind falsch, was kann ich tun?
Die einzige Möglichkeit, einen Preis zu aktualisieren, besteht darin, dies **über die App und in weniger als 500 m Entfernung von der Tankstelle** zu tun: orange Meldeschaltfläche, dann **Benzinpreis**.

Das ist eine bewusste Einschränkung von Waze: Sie stellt sicher, dass der eingetragene Preis tatsächlich vor Ort abgelesen wurde.
:::

::: details Ich habe falsche Preise gemeldet, aber nichts wurde korrigiert, warum?
Die Karteneditoren können die Preise nicht aus der Ferne aktualisieren: Die 500-m-Einschränkung gilt auch für sie. Sie schliessen diese Anfragen daher, ohne handeln zu können, was den Eindruck erwecken kann, die Meldung sei ignoriert worden.

Wenn Sie regelmässig an einer Tankstelle mit falschem Preis vorbeifahren, sind Sie die am besten geeignete Person, um ihn zu korrigieren. Die Details der Bearbeitung auf Editorenseite sind auf der Seite [Schliessen von URs](/de/editors/wme/fermeture-urs) beschrieben.
:::

## Strassensperrungen und Veranstaltungen

::: details Eine grosse Veranstaltung oder Bauarbeiten werden den Verkehr in meiner Region beeinträchtigen, wie kann ich helfen?
Informieren Sie die lokale Community im Voraus: Sperrungen, die frühzeitig in der Karte erfasst werden, verhindern, dass Hunderte von Fahrern in eine gesperrte Strasse geschickt werden.

- Posten Sie im [Waze-Forum Schweiz](https://www.waze.com/discuss/c/editors/switzerland/4790)
- Oder schreiben Sie an fermetures@waze-switzerland.ch (fr/it/en) oder sperrungen@waze-switzerland.ch (de/en)

Geben Sie die genauen Daten und Uhrzeiten sowie die betroffenen Strassen an und legen Sie nach Möglichkeit die Verfügung oder den offiziellen Umleitungsplan bei. Wie diese Sperrungen erfasst werden, ist auf der Seite [Strassensperrungen](/de/editors/wme/fermetures) beschrieben.
:::

## Stimme, Sprache und Ton

::: details Ich habe die Sprache der App geändert, aber die Anweisungen bleiben in der alten Sprache
Das ist das häufigste Missverständnis: Die Sprache der Benutzeroberfläche und die Sprache der Sprachanweisungen sind **zwei getrennte Einstellungen**. Die eine zu ändern, ändert die andere nicht.

Für die Stimme: **Einstellungen** > **Sprache & Ton** > **Waze-Stimme**, dann eine Stimme in der gewünschten Sprache auswählen.

Wenn Sie Waze über Android Auto oder CarPlay nutzen, trennen Sie zuerst das Telefon vom Fahrzeugbildschirm, bevor Sie diese Einstellung ändern.
:::

::: details Waze spricht die Strassennamen nicht aus
Nicht alle Stimmen lesen die Strassennamen vor. Wählen Sie in der Stimmenliste eine mit dem Hinweis **«mit Strassennamen»** (oder «including street names», je nach Sprache der Benutzeroberfläche).
:::

::: details Kann ich die Sprache der auf der Karte angezeigten Strassennamen ändern?
Nein, dafür gibt es keine Einstellung. Die angezeigten Namen sind jene, die in der Karte erfasst wurden, in der Amtssprache der betreffenden Gemeinde. In der Schweiz sehen Sie die Strassen daher je nach durchfahrener Region auf Französisch, Deutsch, Italienisch oder Rätoromanisch, unabhängig von der Sprache Ihrer App.
:::

## Android Auto und CarPlay

::: details Wie nutze ich Waze auf dem Bildschirm meines Autos?
Verbinden Sie Ihr Telefon per USB oder kabellos, je nachdem, was Ihr Fahrzeug unterstützt. Die Kompatibilität mit Android Auto oder CarPlay hängt vom Modell ab: Erkundigen Sie sich beim Hersteller.

Einige nützliche Punkte:

- Die **Eingabe über die Tastatur ist nur im Stillstand möglich**, bei angezogener Handbremse. Während der Fahrt nutzen Sie die Sprachsteuerung.
- Ihre **gespeicherten Orte** (Zuhause, Arbeit, Favoriten) werden von der Telefon-App synchronisiert: Legen Sie sie vor der Abfahrt an.
:::

::: details Einige Funktionen fehlen auf dem Bildschirm des Autos
Das ist normal: Waze auf CarPlay und Android Auto ist eine **abgespeckte Version** der Mobil-App. Die detaillierten Einstellungen, die Kontoverwaltung und ein Teil der Meldungen bleiben dem Telefon vorbehalten.

Das Menü **Vermeiden** gibt es zwar auf dem Fahrzeugbildschirm, aber an anderer Stelle: oben rechts bei CarPlay, über das Einstellungssymbol bei Android Auto.

Denken Sie schliesslich daran, **das Telefon vom Fahrzeugbildschirm zu trennen**, bevor Sie die Einstellungen für Stimme, Sprache oder Konto ändern: Einige Änderungen werden nicht übernommen, solange die Verbindung aktiv ist.
:::

## Mobile Daten

::: details Wie überprüfe ich, wie viele Daten Waze verbraucht?
Diese Information liefert Ihr Telefon, nicht Waze:

- **iOS**: **Einstellungen** > **Mobiles Netz**, dann Waze in der Liste suchen.
- **Android**: **Einstellungen** > **Mobile Datennutzung** > **Waze**, mit einer Grafik nach Zeitraum.
:::

::: details Waze aktualisiert sich nicht mehr, wenn der Datensparmodus aktiv ist
Der Datensparmodus ist eine Einstellung Ihres Telefons, nicht von Waze: Er unterbricht den Netzzugriff der Apps im Hintergrund.

Damit Waze weiterhin Verkehrsdaten und Warnungen empfängt, erlauben Sie es ausdrücklich in den Geräteeinstellungen: **App bei aktiviertem Datensparmodus zulassen** und **Hintergrunddaten zulassen**.
:::

## Konto und Datenschutz

::: details Wie lösche ich mein Waze-Konto?
Über die App: **Menü** > **Profil anzeigen** (unter Ihrem Namen) > **Konto und Anmeldung**, dann nach unten scrollen bis **Konto löschen** und bestätigen. Ihre Anmeldedaten können erneut abgefragt werden.

Für ein Gastkonto: **Einstellungen** > **Datenschutz** > **Konto löschen**.

Wenn Sie Waze über Android Auto oder CarPlay nutzen, trennen Sie zuerst das Telefon vom Fahrzeugbildschirm.
:::

::: details Was geschieht mit meinen Beiträgen, wenn ich mein Konto lösche?
Ihre **gespeicherten Orte und Ihr Navigationsverlauf** werden gelöscht.

Ihre **Beiträge zur Karte** werden nicht gelöscht, aber von Ihrer Identität getrennt: Die Korrekturen, die Sie vorgenommen haben, bleiben zum Nutzen der anderen Fahrer bestehen.

Die tatsächliche Löschung aus den Speichersystemen dauert ungefähr **zwei Monate**. Die Löschung ist endgültig: Ein gelöschtes Konto kann nicht wiederhergestellt werden.
:::

---

Für die Editorenseite, insbesondere wie Ihre Meldungen bearbeitet werden, siehe [Editoren](/de/editors/).

::: help Brauchen Sie weitere Hilfe?
Treten Sie der Waze-Community Schweiz bei:
- [Waze-Forum Schweiz](https://www.waze.com/discuss/c/editors/switzerland/4790)
- [Discord Waze CH](https://discord.gg/dmxUwvTkk5)
:::

::: quote Quellen
https://www.waze-switzerland.ch/faq/fr

https://support.google.com/waze
:::
