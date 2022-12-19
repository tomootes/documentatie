const sidebar = [
  {
    type: 'category',
    label: 'Meedoen',
    items: [
      { type: 'doc', id: 'meedoen/introductie' },
      { type: 'doc', id: 'meedoen/estafettemodel' },
      {
        type: 'category',
        label: 'Design Tokens',
        items: [{ type: 'autogenerated', dirName: 'meedoen/design-tokens' }],
      },
      {
        type: 'category',
        label: 'Voor designers',
        items: [{ type: 'autogenerated', dirName: 'meedoen/als-designer' }],
      },
      {
        type: 'category',
        label: 'Voor developers',
        items: [{ type: 'autogenerated', dirName: 'meedoen/als-developer' }],
      },
      {
        type: 'category',
        label: 'Voor organisaties',
        items: [{ type: 'autogenerated', dirName: 'meedoen/als-organisatie' }],
      },
      {
        type: 'category',
        label: 'Voor leveranciers',
        items: [{ type: 'autogenerated', dirName: 'meedoen/als-leverancier' }],
      },
    ],
  },
];

module.exports = sidebar;
