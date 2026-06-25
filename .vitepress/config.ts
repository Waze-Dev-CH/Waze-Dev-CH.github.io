import { defineConfig } from 'vitepress';
import container from 'markdown-it-container';
// @ts-ignore
import taskLists from 'markdown-it-task-lists';
// @ts-ignore
import abbr from 'markdown-it-abbr';

const customContainerTypes = [
  'note', 'example', 'question', 'quote', 'reminder',
  'people', 'bug', 'abstract', 'important', 'failure', 'help', 'success',
];

const defaultTitles: Record<string, string> = {
  note: 'Note', example: 'Exemple', question: 'Question', quote: 'Citation',
  reminder: 'Rappel', people: 'Contact', bug: 'Bug', abstract: 'Résumé',
  important: 'Important', failure: 'Erreur', help: 'Conseil', success: 'Succès',
};

const typeIcons: Record<string, string> = {
  note: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 9.5-9.5z"/></svg>`,
  example: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>`,
  question: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  quote: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  reminder: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  people: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  bug: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><path d="M4 17l6-6-6-6"/><path d="M12 17h8"/></svg>`,
  abstract: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  important: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  failure: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  help: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="custom-block-icon"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
};

function createContainerPlugin(type: string) {
  return (md: any) => {
    md.use(container, type, {
      render(tokens: any[], idx: number) {
        const token = tokens[idx];
        if (token.nesting === 1) {
          const title = token.info.trim().slice(type.length).trim() || defaultTitles[type] || type;
          const icon = typeIcons[type] ?? '';
          return `<div class="custom-block ${type}">\n<p class="custom-block-title">${icon}${title}</p>\n`;
        }
        return '</div>\n';
      },
    });
  };
}

export default defineConfig({
  title: 'Waze CH',
  description: 'Documentation communautaire pour les éditeurs et scripteurs Waze en Suisse.',

  srcDir: 'docs',
  srcExclude: ['**/_shared/**'],
  outDir: 'public',
  lastUpdated: true,
  ignoreDeadLinks: [/localhost/],

  head: [
    ['link', { rel: 'icon', href: '/waze-swiss-hero.svg', type: 'image/svg+xml' }],
  ],

  locales: {
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: {
        nav: [
          { text: 'Éditeurs', link: '/fr/editors/', activeMatch: '/fr/editors/' },
          { text: 'Scripteurs', link: '/fr/scripters/', activeMatch: '/fr/scripters/' },
        ],
        sidebar: {
          '/fr/editors/': [
            { text: 'Éditeurs', items: [{ text: 'Introduction', link: '/fr/editors/' }] },
            {
              text: 'Premiers pas',
              items: [
                { text: 'Premiers pas (L1)', link: '/fr/editors/premiers-pas' },
                { text: 'Légende de la carte', link: '/fr/editors/legende-carte' },
              ],
            },
            {
              text: 'Cartographie',
              items: [
                { text: 'Nommage des routes', link: '/fr/editors/nommage-routes' },
                { text: 'Règles d\'édition', link: '/fr/editors/regles-edition' },
                { text: 'Géométrie des segments', link: '/fr/editors/geometrie-segments' },
                { text: 'Intersections', link: '/fr/editors/intersections' },
                { text: 'Ronds-points', link: '/fr/editors/ronds-points' },
                { text: 'Limites de vitesse', link: '/fr/editors/limites-vitesse' },
                { text: 'Parkings', link: '/fr/editors/parkings' },
                { text: 'Chemins agricoles', link: '/fr/editors/chemins-agricoles' },
                { text: 'Chemins piétons', link: '/fr/editors/chemins-pietons' },
              ],
            },
            {
              text: 'Autoroutes',
              items: [
                { text: 'Numérotation Axx / Exx', link: '/fr/editors/numeros-autoroutes' },
                { text: 'Guidelines cartographie 2024', link: '/fr/editors/freeways-guidelines' },
              ],
            },
            {
              text: 'Spécificités suisses',
              items: [
                { text: 'Vignette autoroutière', link: '/fr/editors/vignette' },
                { text: 'Stick\'AIR (Genève)', link: '/fr/editors/stickair-geneve' },
              ],
            },
            {
              text: 'Communauté',
              items: [
                { text: 'Organisation de la communauté', link: '/fr/editors/organisation-communaute' },
                { text: 'Devenir Area Manager', link: '/fr/editors/area-manager' },
                { text: 'FAQ', link: '/fr/editors/faq' },
                { text: 'Ressources', link: '/fr/editors/ressources' },
              ],
            },
            {
              text: 'WME — Outils',
              items: [
                { text: 'Virages difficiles', link: '/fr/editors/virages-difficiles' },
                { text: 'Fermetures de routes', link: '/fr/editors/fermetures' },
                { text: 'Fermeture des URs', link: '/fr/editors/fermeture-urs' },
                { text: 'Délais de mise à jour', link: '/fr/editors/delais-mise-a-jour' },
                { text: 'Voies & passages à niveau (L3+)', link: '/fr/editors/lanes-passages-niveau' },
                { text: 'Dangers permanents (L4+)', link: '/fr/editors/dangers-permanents' },
              ],
            },
            {
              text: 'Routing',
              items: [
                { text: 'Bases du routing', link: '/fr/editors/routing' },
              ],
            },
          ],
          '/fr/scripters/': [{ text: 'Scripteurs', items: [{ text: 'Introduction', link: '/fr/scripters/' }] }],
        },
        outline: { level: [2, 3], label: 'Sur cette page' },
        docFooter: { prev: 'Page précédente', next: 'Page suivante' },
        darkModeSwitchLabel: 'Apparence',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Retour en haut',
        lastUpdatedText: 'Dernière mise à jour',
        footer: {
          message: 'Waze Community Switzerland',
          copyright: 'Documentation communautaire — non affiliée à Waze/Google',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Editors', link: '/en/editors/', activeMatch: '/en/editors/' },
          { text: 'Scripters', link: '/en/scripters/', activeMatch: '/en/scripters/' },
        ],
        sidebar: {
          '/en/editors/': [{ text: 'Editors', items: [{ text: 'Introduction', link: '/en/editors/' }] }],
          '/en/scripters/': [{ text: 'Scripters', items: [{ text: 'Introduction', link: '/en/scripters/' }] }],
        },
        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        lastUpdatedText: 'Last updated',
        footer: {
          message: 'Waze Community Switzerland',
          copyright: 'Community documentation — not affiliated with Waze/Google',
        },
      },
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      themeConfig: {
        nav: [
          { text: 'Editoren', link: '/de/editors/', activeMatch: '/de/editors/' },
          { text: 'Skripter', link: '/de/scripters/', activeMatch: '/de/scripters/' },
        ],
        sidebar: {
          '/de/editors/': [{ text: 'Editoren', items: [{ text: 'Einführung', link: '/de/editors/' }] }],
          '/de/scripters/': [{ text: 'Skripter', items: [{ text: 'Einführung', link: '/de/scripters/' }] }],
        },
        outline: { level: [2, 3], label: 'Auf dieser Seite' },
        docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
        darkModeSwitchLabel: 'Erscheinungsbild',
        sidebarMenuLabel: 'Menü',
        returnToTopLabel: 'Nach oben',
        lastUpdatedText: 'Zuletzt aktualisiert',
        footer: {
          message: 'Waze Community Schweiz',
          copyright: 'Community-Dokumentation — nicht mit Waze/Google verbunden',
        },
      },
    },
    it: {
      label: 'Italiano',
      lang: 'it',
      themeConfig: {
        nav: [
          { text: 'Editor', link: '/it/editors/', activeMatch: '/it/editors/' },
          { text: 'Scrittori', link: '/it/scripters/', activeMatch: '/it/scripters/' },
        ],
        sidebar: {
          '/it/editors/': [{ text: 'Editor', items: [{ text: 'Introduzione', link: '/it/editors/' }] }],
          '/it/scripters/': [{ text: 'Scrittori', items: [{ text: 'Introduzione', link: '/it/scripters/' }] }],
        },
        outline: { level: [2, 3], label: 'In questa pagina' },
        docFooter: { prev: 'Pagina precedente', next: 'Pagina successiva' },
        darkModeSwitchLabel: 'Aspetto',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Torna su',
        lastUpdatedText: 'Ultimo aggiornamento',
        footer: {
          message: 'Waze Community Svizzera',
          copyright: 'Documentazione comunitaria — non affiliata a Waze/Google',
        },
      },
    },
  },

  markdown: {
    config: (md) => {
      md.use(taskLists);
      md.use(abbr);
      customContainerTypes.forEach((type) => createContainerPlugin(type)(md));
    },
  },

  themeConfig: {
    logo: { src: '/waze-swiss-hero.svg', alt: 'Waze CH' },
      socialLinks: [{ icon: 'github', link: 'https://github.com/Waze-Dev-CH/Waze-Dev-CH.github.io' }],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
              modal: {
                noResultsText: 'Aucun résultat pour',
                resetButtonTitle: 'Réinitialiser',
                footer: { selectText: 'pour sélectionner', navigateText: 'pour naviguer', closeText: 'pour fermer' },
              },
            },
          },
          en: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: { selectText: 'to select', navigateText: 'to navigate', closeText: 'to close' },
              },
            },
          },
          de: {
            translations: {
              button: { buttonText: 'Suchen', buttonAriaLabel: 'Suchen' },
              modal: {
                noResultsText: 'Keine Ergebnisse für',
                resetButtonTitle: 'Suche zurücksetzen',
                footer: { selectText: 'zum Auswählen', navigateText: 'zum Navigieren', closeText: 'zum Schließen' },
              },
            },
          },
          it: {
            translations: {
              button: { buttonText: 'Cerca', buttonAriaLabel: 'Cerca' },
              modal: {
                noResultsText: 'Nessun risultato per',
                resetButtonTitle: 'Azzera la ricerca',
                footer: { selectText: 'per selezionare', navigateText: 'per navigare', closeText: 'per chiudere' },
              },
            },
          },
        },
      },
    },
  },
});
