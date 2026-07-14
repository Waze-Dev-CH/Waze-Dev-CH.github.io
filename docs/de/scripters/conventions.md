---
title: Code-Konventionen
order: 5
---

<img class="banner-img is-narrow" src="/img/editors/pencil.png" alt="">

# Code-Konventionen

Diese Konventionen gelten für **jedes Waze-Skript der Schweizer Community**: sowohl den Beitrag zum Helper als auch ein eigenständiges Skript. Zwei Prinzipien: konform zum offiziellen SDK bleiben und Code schreiben, der zum **Lesen** gedacht ist, bevor er ausgeführt wird.

::: note Spezifisch für den Helper
Die konkreten Changelog- und i18n-Mechaniken unten beschreiben das **Helper**-Repository. Bei deinem eigenen Skript das Prinzip beibehalten und die Umsetzung anpassen.
:::

## Konformität zum WME-SDK

Jede Interaktion mit dem Editor läuft über das offizielle SDK, typisiert via `wme-sdk-typings`.

- Die [SDK-Dokumentation](https://www.waze.com/editor/sdk/index.html) **vor** dem Implementieren einer WME-Funktion konsultieren.
- **Keine** APIs erfinden: Fehlt eine Information in den Typings oder der Doku, melden statt raten.
- **Keine** veralteten „Pre-SDK"-Globals aufrufen: Sie sind nicht mehr verfügbar.
- **Nicht** neu implementieren, was ein etabliertes npm-Paket bereits bietet.
- Keine DOM-Hacks, die SDK-Events umgehen.

## Für menschliche Gehirne schreiben

Code wird von menschlichen Gehirnen gelesen, deren Arbeitsgedächtnis ~4 Einheiten fasst. Auf die **kognitive Last** optimieren, nicht auf Maschinenleistung.

### Lesbare Bedingungen

Komplexe Ausdrücke in Zwischenvariablen mit aussagekräftigen Namen auslagern.

```typescript
// Schlecht: kognitive Überlastung
if (val > someConstant && (condition2 || condition3) && condition4 && !condition5) {
  // der Leser ist erschöpft
}

// Gut: Arbeitsgedächtnis entlastet
const isValid = val > someConstant;
const isAllowed = condition2 || condition3;
const isSecure = condition4 && !condition5;

if (isValid && isAllowed && isSecure) {
  // der Leser konzentriert sich auf die Absicht
}
```

### Early Returns statt verschachtelter Ifs

Randfälle zuerst behandeln, nur den Normalpfad übrig lassen.

```typescript
// Gut
function process(data) {
  if (!data) return;
  if (!data.isValid) return;
  if (!data.hasPermission) return;

  // Normalpfad auf oberster Ebene
}
```

### Weitere Regeln

- **„Warum"-Kommentare, nicht „Was"**: Motivation oder nicht offensichtliche Logik erklären, nicht den Code paraphrasieren.
- **Tiefe statt flache Module**: eine einfache Schnittstelle über einer reichen Implementierung, nicht umgekehrt. Unnötige Abstraktionsschichten vermeiden.
- **Komposition statt Vererbung**: den Leser nicht zwingen, Verhalten über mehrere Klassen zu verfolgen.
- **Minimale Sprachfeatures**: das Lesen des Codes soll kein Expertenwissen in TS/JS erfordern.
- **Selbstbeschreibende Werte**: explizite Konstanten statt zu merkender Mappings.
- **DRY nicht überstrapazieren**: ein wenig Duplizierung ist besser als verfrühte Kopplung.
- **Übermässige Schichten vermeiden**: das Springen zwischen zu vielen kleinen Methoden/Klassen ist ermüdend; lineares Lesen ist natürlicher.

## Übersetzungen (i18n)

Jede hinzugefügte sichtbare Zeichenkette muss in `locales/<lang>/common.json` für **alle vier Sprachen** (de, en, fr, it) eingetragen werden, verdrahtet über i18next. Eine nur in einer Sprache vorhandene Zeichenkette bricht die Parität.

## Changelog

Jede Änderung im Format [Keep a Changelog](https://keepachangelog.com/de/1.0.0/) dokumentieren (semantische Versionierung, Kategorien *Added / Changed / Deprecated / Removed / Fixed / Security*).

::: important Wichtig
Das Changelog lebt im Changelog-Abschnitt **aller** README-Dateien (`README.md`, `README.fr.md`, `README.de.md`, `README.it.md`); jede Sprache aktualisieren. **Niemals** eine separate `CHANGELOG.md`-Datei erstellen.
:::

## Schweizer Daten

Die Datenherkunft bleibt **swisstopo**. Beim Hinzufügen oder Erweitern einer Ebene die Quelle im Code und im Attributionstext angeben.

::: quote Quellen
- Projektkonventionen: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/blob/main/.github/copilot-instructions.md
- WME-SDK-Dokumentation: https://www.waze.com/editor/sdk/index.html
:::
