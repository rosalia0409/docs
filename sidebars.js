/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  overview: [{ type: 'autogenerated', dirName: 'overview' }],
  architecture: [{ type: 'autogenerated', dirName: 'architecture' }],
  build: [
    'build/flow',
    {
      type: 'category',
      label: 'Getting started',
      items: [{ type: 'autogenerated', dirName: 'build/getting-started' }],
    },
    'build/building-vs-other-chains',
    {
      type: 'category',
      label: 'Basic Concepts',
      items: [{ type: 'autogenerated', dirName: 'build/basics' }],
    },
    {
      type: 'category',
      label: 'Advanced Concepts',
      items: [{ type: 'autogenerated', dirName: 'build/advanced-concepts' }],
    },
    {
      type: 'category',
      label: 'Writing and Deploying Smart Contracts',
      items: [
        { type: 'autogenerated', dirName: 'build/smart-contracts' },
        {
          type: 'category',
          label: 'Cadence Reference',
          items: [
            'build/cadence-reference/json-cadence-spec',
            {
              type: 'link',
              label: 'Language reference',
              href: 'https://cadence-lang.org/docs/language/',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [{ type: 'autogenerated', dirName: 'build/guides' }],
    },
  ],
  nodeOps: [{ type: 'autogenerated', dirName: 'node-ops' }],
  tutorials: [{ type: 'autogenerated', dirName: 'tutorials' }],
  tools: [{ type: 'autogenerated', dirName: 'tools' }],
  references: [{ type: 'autogenerated', dirName: 'references' }],
  communityResources: [
    { type: 'autogenerated', dirName: 'community-resources' },
  ],
};

module.exports = sidebars;
