---
title: WME-Oberfläche
order: 2
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# WME-Oberfläche

Der Waze Map Editor (WME) ist unter [waze.com/editor](https://www.waze.com/editor) erreichbar. Er besteht aus drei Hauptbereichen.

## Linkes Panel

Das linke Panel erlaubt den Wechsel zwischen drei Registerkarten:

- **Segmente**: Liste der ausgewählten Segmente und ihrer Eigenschaften
- **Orte**: Points of Interest (POIs) im sichtbaren Bereich
- **Update Requests (URs)**: zu bearbeitende Meldungen der Nutzer

## Rechtes Panel (Eigenschaften)

Wenn ein Segment oder ein Ort ausgewählt ist, zeigt das rechte Panel dessen bearbeitbare Eigenschaften an: Typ, Name, Fahrtrichtung, Geschwindigkeit, Einschränkungen usw.

## Obere Werkzeugleiste

| Werkzeug | Tastenkürzel | Verwendung |
|-------|-----------|-------|
| Auswahl | <kbd>S</kbd> oder <kbd>Esc</kbd> | Bestehende Elemente auswählen |
| Segment zeichnen | <kbd>D</kbd> | Ein neues Segment zeichnen |
| Abbiegebeschränkung | <kbd>T</kbd> | Eine zeitliche Beschränkung setzen |
| Ort hinzufügen | <kbd>P</kbd> | Einen Point of Interest erstellen |
| Rückgängig | <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Die letzte Aktion rückgängig machen |
| Speichern | <kbd>Ctrl</kbd>+<kbd>S</kbd> | Die Änderungen speichern |

## Ebenen (Layers)

Über das Ebenenmenü (Symbol oben rechts) lassen sich folgende Ebenen aktivieren/deaktivieren:

- **Satellit**: Luftbild als Kartenhintergrund zur Überprüfung der Geometrie
- **GPS tracks**: GPS-Spuren der Waze-Fahrer
- **Map Problems**: automatisch erkannte Probleme
- **Update Requests**: Nutzermeldungen auf der Karte
- **Editoren**: Bearbeitungsbereiche der anderen verbundenen Editoren

## Zoom und Navigation

- Zoom: Mausrad oder <kbd>+</kbd>/<kbd>-</kbd>
- Verschieben: rechte Maustaste gedrückt halten + ziehen (oder Trackpad)
- Auf die eigene Position zentrieren: GPS-Symbol in der oberen Leiste

::: note Notiz
Die Änderungen sind für die Waze-Nutzer erst nach einer Aktualisierungsverzögerung sichtbar. Siehe [Aktualisierungsverzögerungen](/de/editors/wme/delais-mise-a-jour).
:::
