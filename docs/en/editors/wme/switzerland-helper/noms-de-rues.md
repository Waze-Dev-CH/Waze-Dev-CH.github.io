---
title: Street-name checker
description: Compare Waze street names against the official Swiss register and fix the mismatches.
order: 3
---

<img class="banner-img is-narrow" src="/img/editors/magnifier.png" alt="">

# Street-name checker

The checker compares the name of every visible segment against the **official Swiss street
register** and flags the mismatches, with a one-click fix.

It only reports a difference with the official register. The naming rules themselves are
described in [Naming roads and cities](/en/editors/cartographie/nommage-routes).

## Enabling and scanning

The checker is **enabled by default**. It is switched on and off either by the **Street
names** box in the layer selector, or by the **Enabled** toggle in the **CH · Street names**
tab.

The analysis restarts every time the map moves, provided you are zoomed in enough. If the view
is too wide, the banner offers a **Scan this area** button, which takes a minute or two and
can be cancelled.

The **Rescan** button reads the official register again, useful after correcting a series of
segments.

## Reading the findings

The mismatches are grouped by name and by type. Each group shows a coloured dot and the type
of mismatch spelled out.

| Type | What it flags |
| --- | --- |
| `COSMETIC` | Typography only: capitals, apostrophe, spacing |
| `VARIANT` | Abbreviation, accent or missing article |
| `BILINGUAL` | Bilingual street: one language only as primary name, the other as an alternate |
| `NEAR` | Probable typo |
| `WRONG_TYPE` | Different or missing way type (Chemin instead of Route) |
| `WRONG_STREET` | The name is valid, but it belongs to another street |
| `WRONG_CITY` | The name exists, but in another locality |
| `NOT_FOUND` | Not found in the official register |
| `UNNAMED` | Segment without a name, although an official street runs underneath |
| `UNDER_LOCK` | Lock lower than the Swiss minimum |
| `OVER_LOCK` | Lock higher than the Swiss minimum, often intentional |
| `MICRO_SEGMENT` | Segment shorter than 5 m, roundabouts excluded |
| `LOOP` | Loop made of fewer than 3 segments, to be split |
| `NARROW_MISUSE` | Narrow street misused: one-way, or shorter than 50 m |
| `UNNAMED_NO_MATCH` | Unnamed, and nothing official underneath: most often normal |

::: important `WRONG_STREET` always calls for a check
This finding does not come from a name comparison but from the position of the segment:
another official street runs underneath. It therefore offers to replace a name that looks
perfectly correct.

Look at the map before accepting. The ↗ links on each row open the exact spot on the federal
map and on the cantonal map where one exists.
:::

The two lock checks and `WRONG_STREET` are not active below editor level 3, and
`UNNAMED_NO_MATCH` is off by default because it mostly brings up normal cases. All of them can
still be enabled in the settings.

## Fixing

Three paths lead to the same fix: the **Fix** button in the list, the one in the box added at
the top of the segment panel, or the <kbd>Alt</kbd>+<kbd>F</kbd> shortcut.

Existing alternate names are kept, and a bilingual name is added as an alternate rather than
replacing the primary one.

The **Ignore** button hides a finding you consider wrong. These exclusions stay on your
computer, and **Reset** brings them all back at once.

::: important Group fixing requires editor level 3
Below that, the **Fix all** and **Ignore all** buttons do not appear. Fixing segment by
segment, however, remains open to everyone.

A group fix handles **50 segments at most** at a time, asks for confirmation beyond 20, and
stops at the first error, indicating where it got stuck.
:::

## The floating window

WME switches the sidebar to its selection panel as soon as you click a segment: the checker's
tab therefore disappears at the very moment you are using it.

The **Detach** button, or <kbd>Alt</kbd>+<kbd>W</kbd>, moves the list into a small window that
stays visible at all times. It is moved by its title bar, resized by its corner, and finds its
place again in the next session. **Dock** puts it back into the sidebar.

## Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| <kbd>Alt</kbd>+<kbd>N</kbd> | Select the next mismatch |
| <kbd>Alt</kbd>+<kbd>F</kbd> | Fix the selected segment |
| <kbd>Alt</kbd>+<kbd>W</kbd> | Detach or dock the window |

All of them can be remapped in WME's keyboard settings.

## Settings

The settings mainly let you choose **which road types** are checked (streets and primary
streets are checked out of the box, not paths or freeways) and **which types of mismatch** you
want to see.

The rest is there to adjust comfort: showing the expected name on the map, accepting an
alternate name as correct (useful in a bilingual municipality), hiding segments locked above
your level, or changing the checker's language.

::: reminder A "not found" is not always an error
In very dense city centres, the official register does not return everything, and correct
streets can be flagged as not found. The banner warns you when that happens: avoid group fixes
in that case.
:::

::: quote Sources
- Script repository: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper
- Official street register: swisstopo, https://www.geo.admin.ch
:::
