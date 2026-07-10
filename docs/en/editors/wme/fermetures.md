---
title: Road closures
order: 10
---

<img class="macaron" src="/img/editors/roadblock.png" alt="" width="128" height="128">

# Road closures

This page covers the management of road closures and time-limited traffic bans in Switzerland: choosing the approach based on duration, adding time restrictions in the editor, reporting a closure, and handling closure Update Requests (URs).

## Two approaches depending on duration

The choice of method depends on the duration of the closure.

- **Short duration (from a few hours to a few weeks):** report the closure via the app or the DACH form (see "Reporting a closure" below). The map is updated within about two days.
- **Long duration (from several months to several years):** apply a time restriction directly on the segment or segments in the editor. The restriction is active immediately, without waiting for a map update.

## Adding a time restriction

Time restrictions are set segment by segment and take the direction of travel into account. Pay attention to the direction: a restriction set on "A to B" does not automatically apply to "B to A".

Procedure:

1. Select the segment, then click the clock icon "Add a restriction" or use the keyboard shortcut <kbd>T</kbd>.
2. On a two-way road, two tabs appear: **"A to B"** and **"B to A"**, which correspond to the two directions of travel. Work in the tab of the relevant direction.
3. **Days:** check the relevant days. "Select all / deselect all" links make entry easier.
4. **Hours:** choose "All day" for a continuous restriction, or set a time range in 24 h format (for example "10:00 to 15:00").
5. **Crossing midnight:** for a range that crosses midnight (for example 10 p.m. to 5 a.m.), enter "22:00 to 05:00". The system automatically extends it into the following day; do not duplicate the entry.
6. **Date range:** by default the restriction repeats every week. Choose "Range" to limit it to specific dates (bounds included).
7. **Vehicle types:** by default all vehicles are affected. Click "Edit" to restrict the restriction to certain types. The checked types are the ones that are blocked.
8. **Description:** state the reason for the closure (roadworks, event, etc.). The text is limited to **100 characters**; beyond that, saving fails.

### Copying to the reverse direction

After creating a restriction, use "Copy the same restriction for the reverse direction" to apply it to both directions. Without this action, the restriction only applies to the selected direction.

### Applying to several segments

To apply a restriction to a series of segments, select several of them (Ctrl, or Cmd on macOS) then use "Apply to all" to propagate the restriction to the entire selection. First check the one-way segments and the direction of the segments (A to B or B to A) before propagating.

## Reporting a closure

- **Via the app:** "Report > Closure". The report is made from the location concerned.
- **Via the DACH form:** for closures that cannot be reported on site. In both cases, the map reflects the change within about two days.

## Handling closure URs

Handling a closure Update Request follows the principle of caution:

- Only close as **"Solved"** if the cause has been identified, the correction applied and the change saved.
- If the situation cannot be verified, close as **"Not identified"**.
- Do not make a false closure.
- Handle cases where the direction of travel is ambiguous with caution.

## RTC State Manager role

Switzerland has a special role dedicated to closures, the **RTC State Manager**, documented on the community's editing rights page. For the distribution of roles and rights, see [Editor roles](/en/editors/wme/roles).

::: note RTC / MTE procedures not detailed
The sources consulted do not describe a distinct procedure specific to the acronyms "RTC" (Real Time Closures) or "MTE" (Major Traffic Events). Refer to the Swiss forum and the Discord server before applying this type of closure.
:::

::: important Rule of caution
In case of doubt, lack of information or an ambiguous situation, do not modify the map based on assumptions or the rules of a neighbouring country. Always ask the question on the Swiss forum.
:::

::: quote Sources
- Straßensperrungen und zeitlich beschränkte Fahrverbote: https://www.waze.com/discuss/t/strassensperrungen-und-zeitlich-beschrankte-fahrverbote/377293
- Hub francophone (Fermeture des URs): https://www.waze.com/discuss/t/informations-en-francais/377254
- Droits d'édition de la communauté suisse: https://www.waze.com/discuss/t/377276
:::
