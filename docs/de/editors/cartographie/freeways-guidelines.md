---
title: "Kartierung der Autobahnen: Guidelines 2024"
order: 12
---

<img class="macaron" src="/img/editors/badge-freeway.png" alt="" width="128" height="128">

# Kartierung der Autobahnen: Guidelines 2024

Von vince1612  
Co-Koordinator Schweiz und Global Champ  
Freiwillige Waze-Community

::: note Erforderliches Level
Diese Richtlinien betreffen vor allem Editoren ab **Level 5**: Die Bearbeitung von Autobahnen ist für Anfänger weder nützlich noch zugänglich. Wenn du gerade erst anfängst, kannst du diese Seite bedenkenlos überspringen.
:::

## Überblick

Die Schweizer Autobahnen wurden weitgehend von einem nicht regelkonformen Beitragenden bearbeitet, der zahlreiche Änderungen vorgenommen hat, wodurch der aktuelle Zustand der Autobahnen wenig einheitlich ist.

Da uns bewusst ist, dass die alten Richtlinien ohnehin einer Überarbeitung bedürfen, aufgrund der Weiterentwicklung der App und von WME, stellen wir neue Richtlinien vor, die bei der Überprüfung und Korrektur nicht regelkonformer Bearbeitungen anzuwenden sind.

## Allgemeine Hinweise

### Straßentyp: Rampe

Im Gegensatz zu anderen Straßentypen werden Rampen bei Langstreckenrouten niemals ignoriert. Sie gelten als wesentlich für die Verbindung von Autobahnen und anderen Hauptstraßen.

Rampen haben standardmäßig keinen spezifischen Routing-Präferenzparameter (wie «bevorzugt» oder «nicht bevorzugt»). Ihre Routing-Priorität ergibt sich aus ihrer Funktion als Verbindungsstücke.

Die Namen der Rampen erscheinen nicht auf der Karte der Client-App, was hilft, die Überfrachtung zu reduzieren. Sie erscheinen jedoch im Text der Richtungsanweisungen, falls erforderlich. Daher kann es sinnvoll sein, ihre Äste in WME unterschiedlich zu benennen, wenn sie sich in ein Y aufteilen, ohne einen durchgehenden Namen oder einen alternativen Namen pflegen zu müssen.

### Sortie / Ausfahrt / Uscita - Benennung

Muss in der lokalen Sprache geschrieben werden, die TTS-Stimmen sind bereits so konfiguriert, dass sie es je nach der im Client verwendeten Sprache korrekt lesen oder aussprechen.

Zum Beispiel wird eine Person, die Waze auf Französisch verwendet, «Sortie» hören, auch wenn «Ausfahrt» geschrieben steht, und jemand, der Waze auf Deutsch verwendet, wird «Ausfahrt» hören, auch wenn «Uscita» geschrieben steht.

### Symbol «>»

Dieses Symbol ist in Europa weit verbreitet und TTS für die meisten Sprachen weiß, dass es als «towards» / «richtung» / «direction» / usw. gelesen werden soll.

Auch wenn es nicht visuell angezeigt wird, kann es im TTS-Feld einer Abbiegeanweisung verwendet werden, um in vielen Sprachen automatisch korrekt ausgesprochen zu werden.

### Wayfinders

Bevor es Schilder (Shields) oder Abbiegeanweisungen gab, waren Wayfinders in der Kartierung üblich. Sie bestanden aus kleinen Segmenten (5-20 m), um eine TTS-Anweisung zu erzwingen, die etwas anderes als der Straßenname war. Wenn Sie welche finden, löschen Sie sie und verwenden Sie stattdessen eine Abbiegeanweisung.

![](/freeways/image3.png)

## Kartierungsanweisungen

### Ausfahrtsrampen

#### Benennung der Segmente

Wir werden an der vorherigen Methode nicht viel ändern, basierend auf den Hinweisen zu «Straßentyp: Rampe» (siehe vorheriger Abschnitt), und aus Gründen der Einfachheit, da dies derzeit gut funktioniert beim «Lesen» der Kreuzung, wenn man sie in WME betrachtet.

Die Rampen, die aus der Autobahn herausführen, sollten bereits so aussehen:

* Rampe von der Autobahn  
  [**Sortie**/**Ausfahrt**/**Uscita** **##** **>** **Name der Kreuzung** **/** **Stadt** **1 / 2 / 3**…]
* Optionale oder situative Y-Abzweigung  
  [**>** **Name der Stadt 1 / Name der Stadt 2**] und [**> Name der Stadt 3**] zum Beispiel

![](/freeways/image4.png)

![](/freeways/image5.png)

##### Warnung: nicht regelkonforme Bearbeitungen

Einige der nicht regelkonformen Bearbeitungen, die wir von einem ehemaligen Landesverantwortlichen gesehen haben, bestanden darin, das Symbol «>» nach der Y-Abzweigung der Rampe zu entfernen. Wenn Sie das sehen, fügen Sie es bitte wieder hinzu. Es ist visuell besser in WME (wird ohnehin nicht in der App angezeigt) und dient dazu, die TTS-Abbiegeanweisung bereits korrekt zu haben, ohne sie manuell ändern zu müssen.

#### Abbiegeanweisung

Die Abbiegeanweisungen werden gegenüber den vorherigen Kartierungsrichtlinien eine leichte Änderung erfahren.

Früher hatten wir die Angewohnheit, alles in das Feld «Visual instructions» zu setzen, und wir verwendeten manchmal «>» im Feld «Towards».

Aufgrund von Android Auto und CarPlay, die automatisch einen Punkt zwischen den visuellen Anweisungen und Towards einfügen, was wir nicht entfernen können und worauf wir keinen Einfluss haben, ist es besser, das «>» zu entfernen, um seltsame visuelle Darstellungen wie unten zu vermeiden:

![](/freeways/image6.png)

Es muss jedoch auf den Segmenten und im TTS beibehalten werden.

##### Y-Abzweigungen (am Ende der Ausfahrtsrampe)

Gegebenenfalls (wenn dies existiert), fügen Sie für die Y-Abzweigung keine Anweisungen hinzu und erzwingen Sie keine, lassen Sie alles auf dem Standardwert, der Name der Rampe wird für die TTS-Anweisungen verwendet.

![](/freeways/image7.png)

##### Abbiegeanweisungen Autobahn → Ausfahrtsrampe (neues Mapping)

1. **Visual instructions**: Geben Sie den **Namen der Kreuzung** ein (entweder gemäß [https://map.geo.admin.ch/](https://map.geo.admin.ch/) oder einem kantonalen Geoportal)
2. **Towards**: Geben Sie die verbleibenden Richtungen ein, getrennt mit / , ohne den Namen der Stadt, der dem Namen der Kreuzung entspricht, ein zweites Mal zu wiederholen.
3. **Exit signs**: Fügen Sie das Ausfahrtssymbol (Shield) und seine Nummer ein
4. **TTS**: Alles sollte bereits korrekt sein und dem Hauptnamen des Rampensegments entsprechen.

   **Voice prompt** kann auf dem Standardwert belassen werden.

![](/freeways/image8.png)

### Einfahrtsrampen

#### Überprüfung und Entfernung der Shields

Beim frühen Hinzufügen von Shields zu WME wurden viele Rampensegmente mit Shields versehen.

Dies ist nicht notwendig und Shields sollten nur auf den tatsächlichen Autobahnsegmenten angewendet werden. Wenn Sie Einfahrtsrampen mit Shields finden, können Sie diese entfernen.

![](/freeways/image9.png)

#### Benennung der Segmente

Ähnlich wie bei den Ausfahrten sind die Namen der Rampen nur in WME sichtbar, sie können also wie bei der alten Methode belassen werden und dienen bereits dazu, eine korrekte TTS-Anweisung zu erhalten, ohne dass eine zusätzliche Änderung erforderlich ist.

Beispiel: [**Axx** **>** **Richtungsstadt** (oder Städte getrennt mit einem **/** )]

![](/freeways/image10.png)

#### Abbiegeanweisung

Vor langer Zeit wurden bereits alle Abbiegeanweisungen wie im Beispiel unten nach der ursprünglichen Methode kartiert. Es ist nicht notwendig, sie zu ändern, es sei denn, sie wurden durch nicht regelkonforme Bearbeitungen verändert oder modifiziert.

![](/freeways/image11.png)

##### Optionale Verwendung von Shields für die Einfahrtsanweisungen

Nachdem wir nun alle Axx- und Exx-Nummern während des Nexus-Projekts hinzugefügt haben, können wir Shields für die Richtungen auf den Autobahneinfahrtssegmenten verwenden.

DENNOCH, da dies eine enorme Menge an manueller Bearbeitung erforderte, rate ich Ihnen, es nur dort und dann zu verwenden, wo es das Routing in irgendeiner Weise verbessert.

Die ursprüngliche Kartierungsmethode (oben) stellt kein Problem dar, sie muss daher nicht geändert werden.

Ein Beispiel: Nur die Shields in den visuellen Anweisungen / Richtung in Towards  
(Siehe Bild unten)

![](/freeways/image12.png)

Dies funktioniert hauptsächlich gut dort, wo die Exx-Nummern existieren, da sie Platz im Feld «Visual instructions» einnehmen und keinen Platz für den Text lassen, sodass wir die Stadt/Richtung in das Feld «Towards» setzen. Dies kann auch dort helfen, wo die Stadt/Richtung nach Axx zu lang zum Anzeigen ist.

Wo es keine Exx-Nummer gibt, ist der Platz neben dem Axx-Shield in der Regel ausreichend, um eine Stadt/Richtung anzuzeigen, wie in der ursprünglichen Kartierung oben.

### Autobahnkreuze

#### Beispiele

![](/freeways/image13.png)

![](/freeways/image14.png)

![](/freeways/image15.png)

#### Benennung der Segmente

Innerhalb der «Spaghetti»-Kurven des Autobahnkreuzes benennen Sie die Segmente, um sie in WME leicht unterscheidbar zu machen, auf die gleiche Weise wie die Richtungen auf den Einfahrtsrampen.

Natürlich müssen diese Segmente alle alternativen Namen Axx und Exx konfiguriert haben, wie es das Ziel des Nexus-Projekts war, dies sollte bereits korrekt sein.

![](/freeways/image16.png)

![](/freeways/image17.png)

#### Abbiegeanweisungen

**Visual instructions**: Verwenden Sie nur die Shields

**Towards**: Verwenden Sie die Städte/Richtungen

**Exit signs**: Muss leer sein

**Voice prompt**: Passen Sie ihn an das an, was am besten ist, da durchgehende Straßennamen jede Anweisung entfernen können und es notwendig sein kann, eine zu erzwingen

**TTS**: Sollte je nach Segmentname bereits korrekt sein.

![](/freeways/image18.png)

### Geometrie

*Priorität für lange Rampen - kleine/reguläre Rampen sind keine Priorität*

Die Schweiz hat zuvor die folgende Kartierungsregel übernommen:

![](/freeways/image19.png)

Es wurde jedoch vom Personal während der Meetings gemeldet, dass die Kartierung des Rampenknotens am Punkt A weder empfohlen noch optimal für das Routing und Falcon (den GPS-Korrektor der Straßen) ist.

Basierend auf den **Empfehlungen des Personals** werden wir schrittweise zur Platzierung des Knotens am letzten legalen Ausfahrtspunkt übergehen (dargestellt durch den Punkt C im Screenshot oben).

*[Anruf mit Aufzeichnung des Personals: Off ramps – 2024_09_26 16_26 BST – Recording.mp4](https://drive.google.com/file/d/1eCMVwhmgbLBHPeZY6tYVySE6O9Y4NI-3/view?usp=sharing) (30 Min., Englisch)*

Darüber hinaus können wir für lange, nicht standardmäßige Ausfahrten die neue Funktion «Far turn» verwenden, um eine frühe Anweisung hinzuzufügen. Aber verwenden Sie sie nicht bei kleineren oder standardmäßigen Rampen.

Eine höhere Priorität wird langen Rampen eingeräumt und eine niedrigere Priorität standardmäßigen Ausfahrten mit kurzen Rampen. Anstelle eines Mapraids ermutigen wir die Beitragenden, diese nach eigenem Ermessen und schrittweise im Laufe der folgenden Monate zu überprüfen und zu korrigieren.
