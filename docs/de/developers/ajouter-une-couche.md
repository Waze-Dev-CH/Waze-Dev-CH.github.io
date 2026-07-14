---
title: Eine Ebene zum Helper hinzufügen
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/map-scene.png" alt="">

# Eine Ebene zum Helper hinzufügen

Ein konkretes End-to-End-Beispiel: eine **Raster-Ebene** (swisstopo-WMTS-Kacheln) zum Helper hinzufügen. Das ist die häufigste Art von Beitrag. Für eine **Daten**-Ebene (Punkte, Geometrien) siehe den Abschnitt unten.

::: reminder Zuerst lesen
Diese Seite setzt eine laufende Entwicklungsumgebung voraus. Andernfalls mit [Beitragen](/de/developers/contribuer) beginnen, dann die [Code-Konventionen](/de/developers/conventions).
:::

## 1. Die Ebene deklarieren

In `main.user.ts`, Funktion `createLayers()`, eine `TileLayer`-Instanz zum Array `layerList` hinzufügen:

```typescript
new TileLayer({
  wmeSDK,
  name: i18next.t("common:layers.hiking", "Wanderwege"),
  tileHeight: 256,
  tileWidth: 256,
  fileName: "${z}/${x}/${y}.png",
  servers: [
    "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.<ebenen-kennung>/default/current/3857",
  ],
  zIndex: 2035,
}),
```

Die bestehenden Ebenen als Vorlage verwenden. Die swisstopo-Ebenenkennung findet sich im [Geokatalog geo.admin.ch](https://www.geo.admin.ch/). Einen freien `zIndex` wählen (aktuelle Ebenen reichen von 2036 bis 2039).

## 2. Die Übersetzung hinzufügen

Der an `i18next.t()` übergebene i18n-Schlüssel muss für **alle vier Sprachen** existieren. `layers.hiking` in jede `locales/<lang>/common.json` einfügen:

```json
{
  "layers": {
    "hiking": "Wanderwege"
  }
}
```

(Den Wert für `en`, `fr`, `it` übersetzen.)

## 3. Das Changelog aktualisieren

Einen *Added*-Eintrag im Changelog-Abschnitt **jeder** README hinzufügen (`README.md`, `README.fr.md`, `README.de.md`, `README.it.md`), siehe [Konventionen](/de/developers/conventions#changelog).

## 4. Bauen und testen

```bash
npm run build
```

Dann Smoke-Test im WME: den lokalen Build laden, die neue Ebene anhaken und prüfen, dass die Kacheln gezeichnet werden und beim Verschieben der Karte neu laden.

## 5. Den PR öffnen

Dem [Beitragsablauf](/de/developers/contribuer) folgen: Branch, Checkliste, PR mit Review.

## Daten-Ebene (Vektor)

Um Punkte oder Geometrien (statt Kacheln) anzuzeigen, `FeatureLayer` (`src/featureLayer.ts`) statt `TileLayer` erweitern und dessen abstrakte Methoden implementieren:

- `fetchData()`: async Generator, der die Datensätze abruft (in Batches).
- `mapRecordToFeature()`: wandelt einen Datensatz in ein `SdkFeature` um.
- `getRecordId()`: stabile Kennung eines Datensatzes.
- `shouldDrawRecord()`: Filter (Zoom, Gebiet, Gültigkeit…).
- `featureClicked()`: Reaktion auf einen Klick auf ein Feature.

`FeatureLayer` kümmert sich um Rendering, Neufilterung und Kartenereignisse. **Referenz zum Kopieren**: `src/publicTransportStopsLayer.ts` und `src/sbbDataLayer.ts`. Die Schritte 2 bis 5 (i18n, Changelog, Build, PR) sind identisch.

::: quote Quellen
- Repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- swisstopo-Geokatalog: https://www.geo.admin.ch/
- WME-SDK-Dokumentation: https://www.waze.com/editor/sdk/index.html
:::
