import { createContentLoader } from 'vitepress';

// Build-time: collect each locale's hero `text:` (the slogan) from its home
// page, so the multilingual strip stays a single source of truth. Add a locale
// here and to the glob and it appears automatically.
const ORDER = ['fr', 'de', 'it', 'en'];

export default createContentLoader(
  ['fr/index.md', 'en/index.md', 'de/index.md', 'it/index.md'],
  {
    transform(raw) {
      return raw
        .map((page) => ({
          lang: page.url.split('/')[1],
          text: page.frontmatter?.hero?.text?.trim(),
        }))
        .filter((t): t is { lang: string; text: string } => Boolean(t.text))
        .sort((a, b) => ORDER.indexOf(a.lang) - ORDER.indexOf(b.lang));
    },
  },
);
