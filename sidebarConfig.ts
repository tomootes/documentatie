import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  handboek: [
    {
      type: 'category',
      label: 'Handboek',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Handboek',
        slug: 'handboek',
        keywords: ['Handboek', 'Meedoen', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'handboek/introductie' },
        { type: 'doc', id: 'handboek/estafettemodel' },
        { type: 'autogenerated', dirName: 'handboek/design-tokens' },
        {
          type: 'category',
          label: 'Componenten bijdragen',
          description:
            'Componenten bijdragen? Hier vind je waar we op letten en hoe je met een stappenplan aan de Definition of Done kan voldoen.',
          link: {
            type: 'generated-index',
            title: 'Componenten bijdragen',
            description:
              'Componenten bijdragen? Hier vind je waar we op letten en hoe je met een stappenplan aan de Definition of Done kan voldoen.',
            slug: '/handboek/component-bijdragen/overzicht',
            keywords: ['definition of done', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/component-bijdragen' }],
        },
        {
          type: 'category',
          label: 'Voor designers',
          description:
            'Mee designen aan het NL Design System of gebruik maken van bestaande Figma componenten? Als designer vind je hier alle documentatie die je nodig hebt.',
          link: {
            type: 'generated-index',
            title: 'Voor designers',
            description:
              'Mee designen aan het NL Design System of gebruik maken van bestaande Figma componenten? Als designer vind je hier alle documentatie die je nodig hebt.',
            slug: '/handboek/designer/overzicht',
            keywords: ['designers', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/designer' }],
        },
        {
          type: 'category',
          label: 'Voor developers',
          description:
            'Mee ontwikkelen aan NL Design System of gebruik maken van bestaande componenten? Als developer vind je hier alle documentatie die je nodig hebt om te beginnen.',
          link: {
            type: 'generated-index',
            title: 'Voor developers',
            description:
              'Mee ontwikkelen aan NL Design System of gebruik maken van bestaande componenten? Als developer vind je hier alle documentatie die je nodig hebt om te beginnen.',

            slug: '/handboek/developer/overzicht',
            keywords: ['developer', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/developer' }],
        },
        {
          type: 'category',
          label: 'Voor organisaties',
          link: {
            type: 'generated-index',
            title: 'Voor organisaties',
            slug: '/handboek/organisatie/overzicht',
            keywords: ['organisaties', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/organisatie' }],
        },
        // {
        //   type: 'category',
        //   label: 'Voor leveranciers',
        //   link: {
        //     type: 'generated-index',
        //     title: 'Voor leveranciers',
        //     slug: '/handboek/leverancier/',
        //     keywords: ['leveranciers', 'overzicht'],
        //   },
        //   items: [{ type: 'autogenerated', dirName: 'handboek/leverancier' }],
        // },
        // {
        //   type: 'category',
        //   label: 'Voor managers',
        //   link: {
        //     type: 'generated-index',
        //     title: 'Voor managers',
        //     slug: '/handboek/manager/overzicht',
        //     keywords: ['managers', 'overzicht'],
        //   },
        //   items: [{ type: 'autogenerated', dirName: 'handboek/manager' }],
        // },
        { type: 'doc', id: 'handboek/leverancier/introductie' },
        { type: 'doc', id: 'handboek/manager/introductie' },
      ],
    },
  ],
  richtlijnen: [
    {
      type: 'category',
      label: 'Richtlijnen',
      description:
        'Onze richtlijnen om te helpen met het ontwikkelen van begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening. Onze richtlijnen zijn zoveel mogelijk onderbouwd met gebruikersonderzoek.',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Richtlijnen',
        description:
          'Onze richtlijnen om te helpen met het ontwikkelen van begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening. Onze richtlijnen zijn zoveel mogelijk onderbouwd met gebruikersonderzoek.',
        slug: 'richtlijnen',
        keywords: ['Richtlijnen', 'overzicht'],
      },
      items: [
        {
          type: 'doc',
          id: 'richtlijnen/introductie',
        },
        {
          type: 'category',
          label: 'Stijl',
          description: 'Onze richtlijnen voor een toegankelijke huisstijl en visueel ontwerp.',
          link: {
            type: 'generated-index',
            title: 'Richtlijnen voor Stijl',
            description: 'Onze richtlijnen voor een toegankelijke huisstijl en visueel ontwerp.',
            slug: '/richtlijnen/stijl/overzicht',
            keywords: ['Stijl', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'richtlijnen/stijl' }],
        },
        {
          type: 'category',
          label: 'Formulieren',
          description: 'Onze richtlijnen voor inclusieve formulieren.',
          link: {
            type: 'generated-index',
            title: 'Richtlijnen voor formulieren',
            description: 'Onze richtlijnen voor inclusieve formulieren.',
            slug: '/richtlijnen/formulieren/overzicht',
            keywords: ['Formulieren', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'richtlijnen/formulieren' }],
        },
        {
          type: 'category',
          label: 'WCAG',
          description:
            "Hier proberen WCAG begrijpelijk uit te leggen en daardoor makkelijker toepasbaar te maken. Daarnaast staat beschreven hoe je webpagina's voor de verschillende succescriteria kunt testen.",
          link: {
            type: 'generated-index',
            title: 'WCAG-succescriteria uitgelegd',
            description:
              "In deze pagina's vind je Web Content Accessibility Guidelines (WCAG) beschreven en uitgelegd. Het doel is om WCAG begrijpelijk uit te leggen en daardoor makkelijker toepasbaar te maken. Daarnaast staat beschreven hoe je webpagina's voor de verschillende succescriteria kunt testen. Deze pagina's bevatten praktische uitleg, voorbeelden en interpretatie bij de Web Content Accessibility Guidelines (WCAG). Let op: De richtlijnen in NL Design System zijn niet verplicht en geen vervanging voor de WCAG norm waarnaar in wetgeving wordt verwezen.",
            slug: '/wcag',
            keywords: ['WCAG', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'wcag' }],
        },
      ],
    },
  ],
  componenten: [
    {
      type: 'category',
      label: 'Componenten',
      collapsible: false,
      className: 'sidebar__main-category',
      items: [{ type: 'autogenerated', dirName: 'componenten' }],
    },
  ],
  voorbeelden: [
    {
      type: 'category',
      label: 'Voorbeelden',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Voorbeelden',
        slug: 'voorbeelden',
        keywords: ['Voorbeelden', 'overzicht'],
      },
      items: [
        { type: 'autogenerated', dirName: 'voorbeelden/onderzoek' },
        {
          type: 'category',
          label: 'Patronen',
          link: {
            type: 'generated-index',
            title: 'Patronen',
            slug: 'voorbeelden/patronen',
            keywords: ['Patronen', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'voorbeelden/patronen' }],
        },
        // {
        //   type: 'category',
        //   label: 'Templates',
        //   link: {
        //     type: 'generated-index',
        //     title: 'Templates',
        //     slug: 'voorbeelden/templates',
        //     keywords: ['Templates', 'overzicht'],
        //   },
        //   items: [{ type: 'autogenerated', dirName: 'voorbeelden/templates' }],
        // },
      ],
    },
  ],
  community: [
    {
      type: 'category',
      label: 'Community',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Community',
        slug: 'community',
        keywords: ['Community', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'community/sluit-je-aan' },
        {
          type: 'category',
          label: 'Events',
          description:
            'NL Design System organiseert regelmatig events, online en offline, met als doel om samen te werken en kennis te delen.',
          collapsible: true,
          link: {
            type: 'generated-index',
            title: 'Events',
            slug: '/community/events/overzicht',
          },
          items: [
            {
              type: 'doc',
              id: 'community/events/design-systems-week-2024',
            },
            {
              type: 'category',
              label: 'Heartbeat',
              link: {
                type: 'generated-index',
                title: 'Heartbeat',
                slug: '/events/heartbeat/overzicht',
              },
              description:
                "In onze tweewekelijkse Heartbeat vertellen kernteam en community wat er gaande is. Meld je aan of kijk video's terug.",
              items: [
                { type: 'doc', id: 'community/events/heartbeat/heartbeat' },
                { type: 'doc', id: 'community/events/heartbeat/videos' },
                { type: 'doc', id: 'community/events/heartbeat/aanmelden' },
              ],
            },
            {
              type: 'category',
              label: 'Design Open Hour',
              description:
                'Tijdens het (online) Design Open Hour delen designers van verschillende organisaties kennis.',
              link: {
                type: 'generated-index',
                title: 'Design Open Hour',
                slug: '/events/design-open-hour/overzicht',
              },
              items: [
                { type: 'doc', id: 'community/events/design-open-hour/design-open-hour' },
                { type: 'doc', id: 'community/events/design-open-hour/aanmelden' },
              ],
            },
            { type: 'doc', id: 'community/events/design-open-dag' },
            { type: 'doc', id: 'community/events/estafettemodeldag' },
          ],
        },
        { type: 'doc', id: 'community/wie-doet-mee' },
      ],
    },
  ],
  project: [
    {
      type: 'category',
      label: 'Project',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Project',
        slug: 'project',
        keywords: ['Project', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'project/over-nl-design-system' },
        { type: 'doc', id: 'project/faq' },
        { type: 'doc', id: 'project/kernteam' },
        { type: 'doc', id: 'project/blijf-op-de-hoogte' },
        { type: 'doc', id: 'project/links' },
      ],
    },
  ],
};

export default sidebars;
