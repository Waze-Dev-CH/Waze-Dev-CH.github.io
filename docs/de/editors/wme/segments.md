---
title: Segmente
order: 5
---

<img class="banner-img is-narrow" src="/img/editors/road.png" alt="">

# Segmente

Ein Segment ist die Grundeinheit der Waze-Karte: Es ist ein Streckenabschnitt zwischen zwei Kreuzungen. Jede Strasse besteht aus einem oder mehreren Segmenten.

## Ein Segment erstellen{#creer-un-segment}

1. <kbd>I</kbd> drücken (oder in der oberen Leiste auf das Stift-Werkzeug klicken)
2. Auf die Karte klicken, um den ersten Punkt zu setzen
3. Klicken, um zusätzliche Geometrie-Punkte hinzuzufügen
4. Doppelklicken, um das Segment abzuschliessen
5. <kbd>Ctrl</kbd>+<kbd>S</kbd> drücken, um zu speichern

::: important Wichtig
Jedes neue Segment muss mit der bestehenden Karte verbunden sein. Ein isoliertes Segment (nicht mit anderen verbunden) ist nicht routbar.
:::

## Eigenschaften eines Segments

Wähle ein Segment aus, um seine Eigenschaften im rechten Bedienfeld anzuzeigen:

| Eigenschaft | Beschreibung |
|-----------|-------------|
| **Typ** | Strassenklassifizierung (Freeway, Primary Street, Street…): beeinflusst das Routing. Siehe [Grundlagen des Routings](/de/editors/wme/routing) |
| **Name** | Offizieller Name der Strasse, ohne Abkürzung. Siehe [Benennung der Strassen](/de/editors/cartographie/nommage-routes) |
| **Stadt** | Offizielle Ortschaft (Postleitzahl erforderlich). Siehe [Benennung der Strassen](/de/editors/cartographie/nommage-routes) |
| **Richtung** | Bidirektional, Einbahn A→B, Einbahn B→A |
| **Geschwindigkeit** | Geschwindigkeitsbegrenzung. Siehe [Geschwindigkeitsbegrenzungen](/de/editors/cartographie/limites-vitesse) |
| **Ebene** | Höhenlage des Segments (0 = Boden, +1 = Brücke, -1 = Tunnel) |
| **Sperrung** | Mindeststufe zum Bearbeiten dieses Segments |

## Die Geometrie ändern

- Wähle ein Segment aus und ziehe dann die **weissen Punkte**, um die Form anzupassen
- Auf einen weissen Punkt klicken + Taste <kbd>D</kbd>, um ihn zu löschen
- Auf die Linie zwischen zwei Punkten klicken, um einen neuen Punkt einzufügen

## Segmente verbinden (Kreuzungen)

Um zwei Segmente zu verbinden, muss der Endpunkt des einen genau mit einem Punkt des anderen übereinstimmen. Der WME zeigt an den Kreuzungen einen blauen oder roten Punkt an.

- **Blauer Punkt** = gültige Kreuzung
- **Roter Punkt** = unvollständige oder problematische Kreuzung

## Ein Segment löschen{#supprimer-un-segment}

Wähle das Segment aus und drücke dann <kbd>Delete</kbd>. Bestätige die Löschung. Verwaiste Kreuzungen müssen ebenfalls gelöscht werden.

::: important Wichtig
Lösche niemals ein bestehendes Segment ohne triftigen Grund: Es enthält wertvolle Geschwindigkeits- und Routing-Verlaufsdaten. Siehe [Bearbeitungsregeln](/de/editors/cartographie/regles-edition).
:::


## Ein Segment durchtrennen

Um ein Segment in zwei Teile zu trennen, genügt es, [ein Segment zu erstellen](#creer-un-segment), das senkrecht zu dem zu trennenden Segment verläuft, es an der Stelle, an der man trennen möchte, an das Segment anzuschliessen, und anschliessend das soeben hinzugefügte Segment zu [löschen](#supprimer-un-segment).
