// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type { Config } from '@docusaurus/types';
import footer from './footerConfig';
import navbar from './navConfig';
import nldsPrismTheme from './nldsPrism';

const config: Config = {
  title: 'NL Design System',
  tagline: 'Eén design system voor alle huisstijlen',
  url: 'https://nldesignsystem.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nl-design-system', // Usually your GitHub org/user name.
  projectName: 'documentatie', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
        },
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebarConfig.ts'),
          // Please change this to your repo.
          editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/',
        },
        blog: {
          postsPerPage: 'ALL',
          blogSidebarCount: 0,
          showReadingTime: false,
        },
        theme: {
          customCss: [
            require.resolve('@nl-design-system-unstable/nlds-design-tokens/dist/root.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      },
    ],
  ],
  themeConfig: {
    navbar,
    footer,
    prism: {
      theme: nldsPrismTheme,
      additionalLanguages: ['markup', 'jsx', 'tsx', 'json', 'js-extras', 'yaml', 'markdown', 'scss'],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },
    colorMode: {
      disableSwitch: true,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'HS7BGF6EOX',
      // Public API key: it is safe to commit it
      apiKey: 'ce625c137581b1c1f4bdd3912398834b',
      indexName: 'nldesignsystem',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      //... other Algolia params
    },
    announcementBar: {
      content:
        'Kom je eind juni naar onze borrel in Utrecht? <a href="/community/sluit-je-aan" class="utrecht-link">Meld  je aan</a> bij onze community!',
      backgroundColor: '#148839',
      textColor: '#fff',
      isCloseable: false,
    },
  },
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    localeConfigs: {
      nl: {
        htmlLang: 'nl-NL',
      },
      en: {
        htmlLang: 'en-EN',
      },
    },
  },
};

export default config;
