---
title: "Motorway numbering (Axx / Exx)"
order: 11
---

<img class="macaron" src="/img/editors/badge-freeway.png" alt="" width="128" height="128">

# Motorway numbering (Axx / Exx)

Swiss motorways are identified by two numbering systems shown on physical road signs:

- **Axx**: Swiss national number (e.g. A1, A9, A13)
- **Exx**: European route number (e.g. E25, E27, E62)

These numbers must be added as **alternate names** on the motorway segments in WME. This improves long-distance routing, because the routing server identifies the continuity of a road through its alternate name, unlike the primary name, which changes frequently at A/E splits.

::: important Important
Never change the segment's primary name: only add alternate names.
:::

## Reusing an existing shield

Before creating a new alternate name, check whether the shield already exists near the segment. If so, select it from the suggestions to reuse the same ID.

::: warning ID duplicates to avoid
WME suggestions only show names that are geographically close. An E25 created in Geneva will not appear as a suggestion in Zurich, even if it already exists. Creating a second E25 with a different ID would break the consistency of the road network.

Check on the WME map whether the number already exists elsewhere in Switzerland before creating anything.
:::

![Reusing an existing shield (left example) vs. missing shield (right example)](/nexus/image7.png)

![Alternate name suggestions in WME](/nexus/image8.png)

## Creating a new shield

If the number does not yet exist anywhere in Switzerland:

1. Enter the Exx or Axx name, letters and digits joined together, with no space or hyphen (e.g. **E25** ✓ / E 25 ✗ / E-25 ✗), then leave City set to "None"
2. Click **Apply**
3. Click the shield icon
4. Select the shield type
5. Enter the number: for Axx, enter **only the digit** in the shield field (without the letter A)
6. Click **Apply**
7. Save

![Procedure for creating a new shield in WME](/nexus/image9.png)

## Numbers to add per segment

| Type | Format | Example |
|------|--------|---------|
| National motorway | Axx | A1, A9, A13 |
| European route | Exx | E25, E27, E62 |

A segment can carry several alternate names if several roads overlap (e.g. A1 and E25 on the same section).

![Examples of Axx and Exx alternate names on a segment](/nexus/image10.png)
