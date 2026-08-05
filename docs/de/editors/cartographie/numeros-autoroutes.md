---
title: "Nummerierung der Autobahnen (Axx / Exx)"
order: 11
---

<img class="macaron" src="/img/editors/badge-freeway.png" alt="" width="128" height="128">

# Nummerierung der Autobahnen (Axx / Exx)

Die Schweizer Autobahnen werden durch zwei Nummerierungssysteme gekennzeichnet, die auf den physischen Schildern angezeigt werden:

- **Axx**: nationale Schweizer Nummer (z. B. A1, A9, A13)
- **Exx**: europäische Streckennummer (z. B. E25, E27, E62)

Diese Nummern müssen als **alternative Namen** auf den Autobahnsegmenten in WME hinzugefügt werden. Dies verbessert das Routing über lange Distanzen, da der Routing-Server die Kontinuität einer Strecke über ihren alternativen Namen erkennt, im Gegensatz zum Hauptnamen, der sich an den A/E-Verzweigungen häufig ändert.

::: important Wichtig
Niemals den Hauptnamen des Segments ändern: nur alternative Namen hinzufügen.
:::

## Ein bestehendes Schild wiederverwenden

Bevor du einen neuen alternativen Namen erstellst, prüfe, ob das Schild bereits in der Nähe des Segments existiert. Falls ja, wähle es aus den Vorschlägen aus, um dieselbe ID wiederzuverwenden.

::: warning Zu vermeidende ID-Duplikate
Die WME-Vorschläge zeigen nur geografisch nahe Namen an. Ein in Genf erstelltes E25 erscheint nicht als Vorschlag in Zürich, selbst wenn es bereits existiert. Ein zweites E25 mit einer anderen ID zu erstellen, würde die Kohärenz des Strassennetzes zerstören.

Prüfe auf der WME-Karte, ob die Nummer bereits anderswo in der Schweiz existiert, bevor du etwas erstellst.
:::

![Ein bestehendes Schild wiederverwenden (Beispiel links) vs. fehlendes Schild (Beispiel rechts)](/nexus/image7.png)

![Vorschläge für alternative Namen in WME](/nexus/image8.png)

## Ein neues Schild erstellen

Wenn die Nummer noch nirgends in der Schweiz existiert:

1. Gib den Namen Exx oder Axx ein, Buchstaben und Ziffern zusammen, ohne Leerzeichen oder Bindestrich (z. B. **E25** ✓ / E 25 ✗ / E-25 ✗), und lasse Stadt auf „Keine“
2. Klicke auf **Anwenden**
3. Klicke auf das Schild-Symbol
4. Wähle den Schild-Typ aus
5. Gib die Nummer ein: für die Axx nur **die Ziffer** in das Schild-Feld eingeben (ohne den Buchstaben A)
6. Klicke auf **Anwenden**
7. Speichern

![Vorgehen zum Erstellen eines neuen Schilds in WME](/nexus/image9.png)

## Pro Segment hinzuzufügende Nummern

| Typ | Format | Beispiel |
|------|--------|---------|
| Nationale Autobahn | Axx | A1, A9, A13 |
| Europäische Strecke | Exx | E25, E27, E62 |

Ein Segment kann mehrere alternative Namen tragen, wenn sich mehrere Strecken überlagern (z. B. A1 und E25 auf demselben Abschnitt).

![Beispiele für alternative Namen Axx und Exx auf einem Segment](/nexus/image10.png)
