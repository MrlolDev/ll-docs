import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/lolinck-docs/markdown-page',
    component: ComponentCreator('/lolinck-docs/markdown-page', '954'),
    exact: true
  },
  {
    path: '/lolinck-docs/docs',
    component: ComponentCreator('/lolinck-docs/docs', '65d'),
    routes: [
      {
        path: '/lolinck-docs/docs/intro',
        component: ComponentCreator('/lolinck-docs/docs/intro', '148'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lolinck-docs/docs/Samples/javascript',
        component: ComponentCreator('/lolinck-docs/docs/Samples/javascript', '6fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lolinck-docs/docs/Samples/other',
        component: ComponentCreator('/lolinck-docs/docs/Samples/other', 'f6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lolinck-docs/docs/Samples/python',
        component: ComponentCreator('/lolinck-docs/docs/Samples/python', 'b27'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/lolinck-docs/',
    component: ComponentCreator('/lolinck-docs/', 'd21'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
