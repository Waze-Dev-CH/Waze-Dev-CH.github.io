---
title: Road closures
---

# Road closures

This page covers the handling of road closures and time-limited traffic restrictions in Switzerland: choosing the approach based on duration, adding time-based restrictions in the editor, reporting a closure and processing closure Update Requests (URs).

## Two approaches based on duration

The choice of method depends on the duration of the closure.

- **Short duration (from a few hours to a few weeks):** report the closure via the app or the DACH form (see "Reporting a closure" below). The map is updated within about two days.
- **Long duration (from several months to several years):** apply a time-based restriction directly to the segment(s) in the editor. The restriction is active immediately, without waiting for a map update.

## Adding a time-based restriction

Time-based restrictions are set segment by segment and take the direction of travel into account. Pay attention to the direction: a restriction set on "A to B" does not automatically apply to "B to A".

Procedure:

1. Select the segment, then click the clock icon "Add a restriction" or use the keyboard shortcut **T**.
2. On a two-way road, two tabs appear: **"A to B"** and **"B to A"**, which correspond to the two directions of travel. Work in the tab of the relevant direction.
3. **Days:** check the relevant days. "Select all / deselect all" links make entry easier.
4. **Hours:** choose "All day" for a continuous restriction, or define a time range in 24-hour format (for example "10:00 to 15:00").
5. **Crossing midnight:** for a range that crosses midnight (for example 10 p.m. to 5 a.m.), enter "22:00 to 05:00". The system automatically extends it into the next day; do not duplicate the entry.
6. **Date range:** by default the restriction repeats every week. Choose "Range" to limit it to specific dates (bounds included).
7. **Vehicle types:** by default all vehicles are affected. Click "Edit" to limit the restriction to certain types. The checked types are the ones that are blocked.
8. **Description:** indicate the reason for the closure (construction, event, etc.). The text is limited to **100 characters**; beyond that, saving fails.

### Copy to the reverse direction

After creating a restriction, use "Copy the same restriction for the reverse direction" to apply it to both directions. Without this action, the restriction only applies to the selected direction.

### Apply to several segments

To apply a restriction to a series of segments, select several (Ctrl, or Cmd on macOS) then use "Apply to all" to propagate the restriction across the whole selection. Beforehand, check the one-way streets and the direction of the segments (A to B or B to A) before propagating.

## Reporting a closure

- **Via the app:** "Report > Closure". The report is made from the relevant location.
- **Via the DACH form:** for closures that cannot be reported on site. In both cases, the map reflects the change within about two days.

## Processing closure URs

Processing a closure Update Request follows the principle of caution:

- Only close as **"Solved"** if the cause has been identified, the correction applied and the change saved.
- If the situation cannot be verified, close as **"Not identified"**.
- Do not make a false closure.
- Handle cases where the direction of travel is ambiguous with caution.

## RTC State Manager role

Switzerland has a special role dedicated to closures, the **RTC State Manager**, documented on the community's editing rights page. For the distribution of roles and rights, see [Community organization](/en/editors/organisation-communaute).

::: note RTC / MTE procedures not detailed
The sources consulted do not describe a distinct procedure specific to the acronyms "RTC" (Real Time Closures) or "MTE" (Major Traffic Events). Refer to the Swiss forum and the Discord server before applying this type of closure.
:::

::: important Rule of caution
In case of doubt, lack of information or an ambiguous situation, do not modify the map based on assumptions or the rules of a neighboring country. Always ask the question on the Swiss forum.
:::

::: quote Sources
- Straßensperrungen und zeitlich beschränkte Fahrverbote: https://www.waze.com/discuss/t/strassensperrungen-und-zeitlich-beschrankte-fahrverbote/377293
- Francophone hub (Closing URs): https://www.waze.com/discuss/t/informations-en-francais/377254
- Swiss community editing rights: https://www.waze.com/discuss/t/377276
:::
