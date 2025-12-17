// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro-overview', 'tutorial-basics/intro-getting-started'],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'tutorial-basics/architecture-system-architecture',
        'tutorial-basics/architecture-services-overview',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: ['tutorial-basics/deployment-kubernetes', 'tutorial-basics/deployment-docker-compose'],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'tutorial-basics/onboarding-add-openwifi-aps',
        'tutorial-extras/configuration-config-profiles',
        'tutorial-extras/telemetry-pipeline',
      ],
    },
    {
      type: 'category',
      label: 'Onboarding',
      items: ['onboarding/openwifi-ap'],
    },
    {
      type: 'category',
      label: 'Hardware',
      items: ['hardware-supported-devices'],
    },
    {
      type: 'category',
      label: 'Community',
      items: ['community-contributing', 'community-cla'],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: ['faq'],
    },
  ],
};

export default sidebars;
