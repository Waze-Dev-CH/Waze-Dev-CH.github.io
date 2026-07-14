---
title: Code conventions
order: 5
---

<img class="banner-img is-narrow" src="/img/editors/pencil.png" alt="">

# Code conventions

These conventions apply to **any Waze script from the Swiss community**: contributing to the Helper as well as a standalone script. Two principles: stay compliant with the official SDK, and write code meant to be **read** before it is run.

::: note Helper-specific
The concrete changelog and i18n mechanics below describe the **Helper** repository. On your own script, keep the principle and adapt the implementation.
:::

## WME SDK conformance

Every interaction with the editor goes through the official SDK, typed via `wme-sdk-typings`.

- Consult the [SDK documentation](https://www.waze.com/editor/sdk/index.html) **before** implementing a WME feature.
- Do **not** invent APIs: if information is missing from the typings or the docs, report it rather than guess.
- Do **not** call deprecated "pre-SDK" globals: they are no longer available.
- Do **not** reimplement what an established npm package already provides.
- No DOM hacks that bypass SDK events.

## Write for human brains

Code is read by human brains whose working memory holds ~4 chunks. Optimize for **cognitive load**, not machine performance.

### Readable conditionals

Extract complex expressions into intermediate variables with descriptive names.

```typescript
// Bad: cognitive overload
if (val > someConstant && (condition2 || condition3) && condition4 && !condition5) {
  // the reader is exhausted
}

// Good: working memory freed
const isValid = val > someConstant;
const isAllowed = condition2 || condition3;
const isSecure = condition4 && !condition5;

if (isValid && isAllowed && isSecure) {
  // the reader focuses on intent
}
```

### Early returns over nested ifs

Handle edge cases first, leave only the happy path.

```typescript
// Good
function process(data) {
  if (!data) return;
  if (!data.isValid) return;
  if (!data.hasPermission) return;

  // happy path at the top level
}
```

### Other rules

- **"Why" comments, not "what"**: explain motivation or non-obvious logic, don't paraphrase the code.
- **Deep over shallow modules**: a simple interface over a rich implementation, not the reverse. Avoid needless layers of abstraction.
- **Composition over inheritance**: don't force the reader to chase behavior across several classes.
- **Minimal language features**: reading the code shouldn't require expert-level TS/JS.
- **Self-descriptive values**: explicit constants rather than mappings to memorize.
- **Don't abuse DRY**: a little duplication beats premature coupling.
- **Avoid excessive layers**: jumping between too many small methods/classes is exhausting; linear reading is more natural.

## Translations (i18n)

Any visible string you add must be filled in `locales/<lang>/common.json` for **all four languages** (de, en, fr, it), wired through i18next. A string present in only one language breaks parity.

## Changelog

Document every change in [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format (semantic versioning, categories *Added / Changed / Deprecated / Removed / Fixed / Security*).

::: important Important
The changelog lives in the Changelog section of **all** README files (`README.md`, `README.fr.md`, `README.de.md`, `README.it.md`); update every language. **Never** create a separate `CHANGELOG.md` file.
:::

## Swiss data

Data provenance stays **swisstopo**. When adding or extending a layer, cite the source in the code and in the attribution text.

::: quote Sources
- Project conventions: https://github.com/Waze-Dev-CH/WME-Switzerland-Helper/blob/main/.github/copilot-instructions.md
- WME SDK documentation: https://www.waze.com/editor/sdk/index.html
:::
