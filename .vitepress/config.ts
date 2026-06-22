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
  outDir: 'public',
  lastUpdated: true,
  ignoreDeadLinks: [/localhost/],

  head: [
    ['link', { rel: 'icon', href: '/waze-swiss-hero.svg', type: 'image/svg+xml' }],
  ],

  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
      themeConfig: {
        nav: [
          { text: 'Éditeurs', link: '/editors/', activeMatch: '/editors/' },
          { text: 'Scripteurs', link: '/scripters/', activeMatch: '/scripters/' },
        ],
        sidebar: {
          '/editors/': [
            { text: 'Démarrer', items: [
              { text: 'Introduction', link: '/editors/' },
              { text: 'Premiers pas', link: '/editors/premiers-pas' },
              { text: 'Légende de la carte', link: '/editors/legende-carte' },
              { text: 'Organisation & communauté', link: '/editors/organisation-communaute' },
            ] },
            { text: 'Routes & segments', items: [
              { text: 'Nommage des routes et villes', link: '/editors/nommage-routes-villes' },
              { text: 'Types de segments & routing', link: '/editors/types-segments-routing' },
              { text: 'Géométrie des segments', link: '/editors/geometrie-segments' },
            ] },
            { text: 'Intersections', items: [
              { text: 'Guide des intersections', link: '/editors/intersections' },
              { text: 'Ronds-points', link: '/editors/ronds-points' },
              { text: 'Virages difficiles', link: '/editors/virages-difficiles' },
            ] },
            { text: 'Types de voies', items: [
              { text: 'Parkings', link: '/editors/parkings' },
              { text: 'Chemins piétons', link: '/editors/chemins-pietons' },
              { text: 'Routes à travers champs', link: '/editors/field-roads' },
              { text: 'Lanes & passages à niveau', link: '/editors/lanes' },
            ] },
            { text: 'Signalements & gestion', items: [
              { text: 'Fermetures de routes', link: '/editors/fermetures' },
              { text: 'Dangers permanents', link: '/editors/dangers-permanents' },
              { text: 'Limites de vitesse', link: '/editors/limites-vitesse' },
            ] },
            { text: 'Ressources', items: [
              { text: 'Ressources utiles', link: '/editors/ressources' },
            ] },
          ],
          '/scripters/': [{ text: 'Scripteurs', items: [{ text: 'Introduction', link: '/scripters/' }] }],
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
          '/en/editors/': [
            { text: 'Getting started', items: [
              { text: 'Introduction', link: '/en/editors/' },
              { text: 'First steps', link: '/en/editors/premiers-pas' },
              { text: 'Map legend', link: '/en/editors/legende-carte' },
              { text: 'Organisation & community', link: '/en/editors/organisation-communaute' },
            ] },
            { text: 'Roads & segments', items: [
              { text: 'Naming roads and cities', link: '/en/editors/nommage-routes-villes' },
              { text: 'Segment types & routing', link: '/en/editors/types-segments-routing' },
              { text: 'Segment geometry', link: '/en/editors/geometrie-segments' },
            ] },
            { text: 'Intersections', items: [
              { text: 'Intersections guide', link: '/en/editors/intersections' },
              { text: 'Roundabouts', link: '/en/editors/ronds-points' },
              { text: 'Difficult turns', link: '/en/editors/virages-difficiles' },
            ] },
            { text: 'Road types', items: [
              { text: 'Parking lots', link: '/en/editors/parkings' },
              { text: 'Pedestrian paths', link: '/en/editors/chemins-pietons' },
              { text: 'Field roads', link: '/en/editors/field-roads' },
              { text: 'Lanes & railroad crossings', link: '/en/editors/lanes' },
            ] },
            { text: 'Reports & management', items: [
              { text: 'Road closures', link: '/en/editors/fermetures' },
              { text: 'Permanent hazards', link: '/en/editors/dangers-permanents' },
              { text: 'Speed limits', link: '/en/editors/limites-vitesse' },
            ] },
            { text: 'Resources', items: [
              { text: 'Useful resources', link: '/en/editors/ressources' },
            ] },
          ],
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
          '/de/editors/': [
            { text: 'Erste Schritte', items: [
              { text: 'Einführung', link: '/de/editors/' },
              { text: 'Erste Schritte als Editor', link: '/de/editors/premiers-pas' },
              { text: 'Kartenlegende', link: '/de/editors/legende-carte' },
              { text: 'Organisation & Community', link: '/de/editors/organisation-communaute' },
            ] },
            { text: 'Strassen & Segmente', items: [
              { text: 'Strassen und Orte benennen', link: '/de/editors/nommage-routes-villes' },
              { text: 'Segmenttypen & Routing', link: '/de/editors/types-segments-routing' },
              { text: 'Segmentgeometrie', link: '/de/editors/geometrie-segments' },
            ] },
            { text: 'Kreuzungen', items: [
              { text: 'Kreuzungsleitfaden', link: '/de/editors/intersections' },
              { text: 'Kreisverkehre', link: '/de/editors/ronds-points' },
              { text: 'Schwierige Abbiegungen', link: '/de/editors/virages-difficiles' },
            ] },
            { text: 'Wegtypen', items: [
              { text: 'Parkplätze', link: '/de/editors/parkings' },
              { text: 'Fusswege', link: '/de/editors/chemins-pietons' },
              { text: 'Feldwege', link: '/de/editors/field-roads' },
              { text: 'Spuren & Bahnübergänge', link: '/de/editors/lanes' },
            ] },
            { text: 'Meldungen & Verwaltung', items: [
              { text: 'Strassensperrungen', link: '/de/editors/fermetures' },
              { text: 'Permanente Gefahren', link: '/de/editors/dangers-permanents' },
              { text: 'Tempolimits', link: '/de/editors/limites-vitesse' },
            ] },
            { text: 'Ressourcen', items: [
              { text: 'Nützliche Ressourcen', link: '/de/editors/ressources' },
            ] },
          ],
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
          '/it/editors/': [
            { text: 'Per iniziare', items: [
              { text: 'Introduzione', link: '/it/editors/' },
              { text: 'Primi passi', link: '/it/editors/premiers-pas' },
              { text: 'Legenda della mappa', link: '/it/editors/legende-carte' },
              { text: 'Organizzazione e comunità', link: '/it/editors/organisation-communaute' },
            ] },
            { text: 'Strade e segmenti', items: [
              { text: 'Nomenclatura di strade e città', link: '/it/editors/nommage-routes-villes' },
              { text: 'Tipi di segmento e routing', link: '/it/editors/types-segments-routing' },
              { text: 'Geometria dei segmenti', link: '/it/editors/geometrie-segments' },
            ] },
            { text: 'Incroci', items: [
              { text: 'Guida agli incroci', link: '/it/editors/intersections' },
              { text: 'Rotatorie', link: '/it/editors/ronds-points' },
              { text: 'Svolte difficili', link: '/it/editors/virages-difficiles' },
            ] },
            { text: 'Tipi di strada', items: [
              { text: 'Parcheggi', link: '/it/editors/parkings' },
              { text: 'Percorsi pedonali', link: '/it/editors/chemins-pietons' },
              { text: 'Strade campestri', link: '/it/editors/field-roads' },
              { text: 'Corsie e passaggi a livello', link: '/it/editors/lanes' },
            ] },
            { text: 'Segnalazioni e gestione', items: [
              { text: 'Chiusure stradali', link: '/it/editors/fermetures' },
              { text: 'Pericoli permanenti', link: '/it/editors/dangers-permanents' },
              { text: 'Limiti di velocità', link: '/it/editors/limites-vitesse' },
            ] },
            { text: 'Risorse', items: [
              { text: 'Risorse utili', link: '/it/editors/ressources' },
            ] },
          ],
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/Waze-Dev-CH' }],
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
