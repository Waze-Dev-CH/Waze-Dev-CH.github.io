---
title: Leitfaden für Kreuzungen
---

# Leitfaden für Kreuzungen

Diese Seite fasst den Schweizer Leitfaden für Kreuzungen zusammen. Das Leitprinzip ist einfach: Eine gut gezeichnete Kreuzung erzeugt korrekte Führungsanweisungen. Eine Kreuzung muss die logische Realität des Verkehrs darstellen, nicht nur seine exakte Geometrie.

::: abstract Zusammenfassung
Je einfacher, desto besser. Man zeichnet so wenige Elemente wie möglich und erhält dabei dennoch die richtigen Navigationsanweisungen.
:::

## Je einfacher, desto besser

Die Grundregel des Leitfadens: eine Kreuzung nicht überladen. Man fügt Segmente, Knoten oder Geometrie nur dann hinzu, wenn es notwendig ist, um die erwartete Führungsanweisung zu erhalten. Eine einfachere Kreuzung ist leichter zu pflegen und erzeugt ein zuverlässigeres Routing.

## Die Grundlagen

::: reminder Zuerst zu lesen
Dieser Abschnitt legt die Grundlagen. Diese vor allem anderen verstehen.
:::

### Eine Kreuzung in Waze

In Waze besteht eine Kreuzung mindestens aus:

- mindestens zwei Strassensegmenten,
- einem oder mehreren Knotenpunkten,
- Abbiegeerlaubnissen oder -verboten an diesen Knoten.

Es sind diese kombinierten Elemente, die die möglichen Bewegungen und die dem Fahrer gegebenen Anweisungen bestimmen.

### T-Kreuzung

Eine T-Kreuzung verbindet eine Strasse, die auf einer anderen Strasse endet. Die Segmente müssen sich in Winkeln nahe 90° treffen. Wenn sich die Strassen in einem spitzen Winkel treffen, kann der Router eine Anweisung vom Typ "rechts halten / links halten" anstelle eines "abbiegen" erzeugen. Der Leitfaden gibt dann an, die Kreuzung anzupassen, um die richtige Anweisung zu erhalten.

### +-Kreuzung

Eine +-Kreuzung (kreuzförmig) verbindet vier Äste an einem Knoten. Wie bei der T-Kreuzung helfen Winkel nahe 90° dem Router, "geradeaus" von Abbiegungen zu unterscheiden.

## Führungsanweisungen steuern

Der Leitfaden erklärt, wie man die dem Fahrer gegebene Anweisung beeinflusst (abbiegen, halten, geradeaus weiter).

::: important Als veraltet gekennzeichnete Abschnitte
In der Quelle sind die Unterabschnitte **Geometrie** und **Typ und Name der Segmente** dieses Kapitels als veraltete Richtlinien gekennzeichnet. Sie nicht als geltende Regeln anwenden. Bei Zweifeln über die Geometrie oder Benennung der Segmente den Country Manager konsultieren.
:::

## Zwischen Strassen

### Gabelung

::: important Als veraltet gekennzeichneter Abschnitt
Der Unterabschnitt **Gabelung** der Quelle ist als veraltete Richtlinie gekennzeichnet. Nicht unverändert anwenden; den aktuellen Standard beim Country Manager überprüfen.
:::

### Strassen ohne Ausfahrt

Der Leitfaden behandelt Sackgassen, Stichstrassen und Schleifen. Der Teil über Sackgassen, Strassen ohne Durchfahrt und Stichstrassen ist in der Quelle als veraltete Richtlinie gekennzeichnet.

::: important Als veraltet gekennzeichneter Abschnitt
Sackgasse, Strasse ohne Durchfahrt und Stichstrasse: in der Quelle veraltete Richtlinien. Der Unterabschnitt "Schleife" ist nicht als solcher gekennzeichnet.
:::

### Kreisverkehre und Kreisel

Der Leitfaden verweist für Kreisverkehre und Kreisel auf einen eigenen Leitfaden.

::: note Notiz
Siehe die eigene Seite: [Kreisverkehre und Kreisel](./ronds-points.md).
:::

### Niveaugleiche Kreuzungsverbinder

::: important Als veraltet gekennzeichneter Abschnitt
Der Unterabschnitt **Niveaugleiche Kreuzungsverbinder** ist in der Quelle als veraltete Richtlinie gekennzeichnet, mit der Empfehlung, vor jeder Anwendung den Country Manager zu konsultieren. Nicht als geltende Regel verwenden.
:::

### Kreuzung als Schleifenkreuz (bowtie)

Die Kreuzung als Schleifenkreuz vereinfacht die Querung zwischen einer Strasse mit getrennten Fahrbahnen und einer einbahnigen Strasse, indem sie die Querung auf einen einzigen logischen Punkt reduziert. Diese Konstruktion verbessert die Kontrolle der Wendemanöver an diesem Punkt.

## Rampen

Rampen dienen dazu, Segmente vom Typ Highway oder Freeway an niveaufreien Anschlussstellen (Kreuzungen auf getrennten Ebenen) zu verbinden.

::: important Wann eine Rampe verwenden: als veraltet gekennzeichneter Abschnitt
In der Quelle ist der Unterabschnitt **Wann eine Rampe verwenden** als veraltete Richtlinie gekennzeichnet. Der Unterabschnitt **Wie eine Rampe zeichnen** ist es nicht. Bei Zweifeln über die Wahl, eine Rampe zu verwenden, den Country Manager konsultieren.
:::

Beim Zeichnen gilt das Prinzip "je einfacher, desto besser": Ein einziges Rampensegment genügt in der Regel, ausser wenn die Trajektorien deutlich auseinandergehen und eine Teilung rechtfertigen.

## Highway- und Freeway-Kreuzungen

### Ausfahrten

Ausfahrtsrampen müssen in einem Winkel von 20 bis 30° von der Hauptstrasse abzweigen. Dieser Winkel erzeugt die Anweisung "Rechts ausfahren". Die Struktur, der Name und ein Beispiel sind in der Quelle ausführlich beschrieben.

### Highway-/Freeway-Aufteilung

Wenn drei Highway-Segmente ohne ein offensichtliches "geradeaus" zusammentreffen, erzeugen unterschiedliche Namen und ähnliche Winkel eine Anweisung "Rechts halten" oder "Links halten".

### Führungssegmente

Führungssegmente müssen 15 bis 20 Meter lang sein. Sie dienen dazu, den richtigen Anweisungspunkt vor einer Ausfahrt oder einer Aufteilung festzulegen.

### Rampenaufteilung

Die Quelle beschreibt auch die Aufteilung einer Rampe. Dasselbe Prinzip von Winkeln und Benennung gilt, um die erwartete Anweisung zu erhalten.

## Anschlussstellen

Für Anschlussstellen verweist der Leitfaden auf eine eigene externe Ressource ("Limited Access Interchange Style Guide").

::: note Notiz
Die Details der Anschlussstellen sind hier nicht wiedergegeben. Auf die in der Quelle angegebene eigene Ressource verweisen.
:::

## Sonderfälle

Die Quelle behandelt einige Sonderfälle: Übergänge, Strasse ins Nichts und versetzte Strassen.

::: note Notiz
Die Details dieser Fälle sind hier nicht wiedergegeben. Für die genaue Behandlung die Quelle konsultieren.
:::

::: quote Quellen
- Leitfaden für Kreuzungen (Schweiz): https://www.waze.com/discuss/t/guide-des-intersections/377286
:::
