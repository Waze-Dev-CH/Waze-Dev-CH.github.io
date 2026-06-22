---
title: Intersection guide
---

# Intersection guide

This page synthesises the Swiss intersection guide. The guiding principle is simple: a well-drawn intersection produces correct guidance instructions. An intersection must represent the logical reality of traffic, not just its exact geometry.

::: abstract Summary
The simpler, the better. Draw as few elements as possible while still obtaining the right navigation instructions.
:::

## The simpler, the better

The basic rule of the guide: do not overload an intersection. Add segments, nodes or geometry only when necessary to obtain the expected guidance instruction. A simpler intersection is easier to maintain and generates more reliable routing.

## The basics

::: reminder To read first
This section lays the foundations. Understand them before everything else.
:::

### An intersection in Waze

In Waze, an intersection consists, at a minimum, of:

- at least two road segments,
- one or more junction nodes,
- turn allowances or restrictions at these nodes.

It is these combined elements that determine the possible movements and the instructions given to the driver.

### T-junction

A T-junction connects a road that ends on another road. The segments must meet at angles close to 90°. When the roads meet at an acute angle, the router may produce an instruction of the "keep right / keep left" type instead of a "turn". The guide then indicates to adjust the intersection to obtain the right instruction.

### + junction

A + junction (cross-shaped) connects four branches at a node. As with the T-junction, angles close to 90° help the router distinguish "straight ahead" from turns.

## Controlling guidance instructions

The guide explains how to influence the instruction given to the driver (turn, keep, continue straight ahead).

::: important Sections marked as outdated
In the source, the **Geometry** and **Segment type and name** subsections of this chapter are flagged as containing directives that are outdated. Do not apply them as current rules. In case of doubt about the geometry or naming of segments, consult the Country Manager.
:::

## Between roads

### Fork

::: important Section marked as outdated
The **Fork** subsection of the source is flagged as containing directives that are outdated. Not to be applied as is; check the current standard with the Country Manager.
:::

### Dead-end roads

The guide deals with dead ends, cul-de-sacs and loops. The part dedicated to dead ends, no-through roads and cul-de-sacs is flagged in the source as containing directives that are outdated.

::: important Section marked as outdated
Dead end, no-through road and cul-de-sac: outdated directives in the source. The "Loop" subsection is not marked as such.
:::

### Roundabouts and traffic circles

The guide refers to a dedicated guide for roundabouts and traffic circles.

::: note Note
See the dedicated page: [Roundabouts and traffic circles](./ronds-points.md).
:::

### At-grade junction connectors

::: important Section marked as outdated
The **At-grade junction connectors** subsection is flagged in the source as containing directives that are outdated, with a recommendation to consult the Country Manager before any application. Do not use it as a current rule.
:::

### Bowtie intersection

The bowtie intersection simplifies the crossing between a divided road and a single-carriageway road by reducing the crossing to a single logical point. This construction improves the control of U-turns at that point.

## Ramps

Ramps are used to connect Highway or Freeway segments at grade-separated interchanges (crossings on separate levels).

::: important When to use a ramp: section marked as outdated
In the source, the **When to use a ramp** subsection is flagged as containing directives that are outdated. The **How to draw a ramp** subsection is not. In case of doubt about the choice to use a ramp, consult the Country Manager.
:::

On the drawing side, the "the simpler, the better" principle applies: a single ramp segment is generally enough, unless the trajectories diverge sharply and justify a split.

## Highway and Freeway intersections

### Exits

Exit ramps must diverge from the main road at an angle of 20 to 30°. This angle produces the "Exit right" instruction. The structure, the name and an example are detailed in the source.

### Highway / Freeway split

When three Highway segments meet without an obvious "straight ahead", different names and similar angles produce a "Keep right" or "Keep left" instruction.

### Guidance segments

Guidance segments must be 15 to 20 metres long. They serve to set the right instruction point before an exit or a split.

### Ramp split

The source also details the split of a ramp. The same principle of angles and naming applies to obtain the expected instruction.

## Interchanges

For interchanges, the guide refers to a dedicated external resource ("Limited Access Interchange Style Guide").

::: note Note
The detail of interchanges is not reproduced here. Refer to the dedicated resource indicated in the source.
:::

## Special cases

The source covers a few special cases: transitions, road to nowhere and offset roads.

::: note Note
The detail of these cases is not reproduced here. Consult the source for the precise treatment.
:::

::: quote Sources
- Intersection guide (Switzerland): https://www.waze.com/discuss/t/guide-des-intersections/377286
:::
