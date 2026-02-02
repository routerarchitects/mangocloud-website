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
      items: [
        'intro',
        'tutorial-basics/create-a-document',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-blog-post',
      ],
    },
    {
      type: 'category',
      label: 'Cloud Deployment',
      items: [
        'deployment/cloud/deploying-mangocloud',
        'deployment/cloud/installation-setup',
        'deployment/cloud/certificates-domains',
        'deployment/cloud/starting-verifying-the-stack',
      ],
    },
    {
      type: 'category',
      label: 'Device Onboarding',
      items: [
        'operations/device-onboarding/onboarding-overview',
        'operations/device-onboarding/device-trust-certificates',
        'operations/device-onboarding/gatewayjson-configuration',
        'operations/device-onboarding/connecting-devices-to-controller',
        'operations/device-onboarding/verification-troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Device Operations (OWGW)',
      items: [
        'operations/device-operations-owgw/device-actions-overview',
        {
          type: 'category',
          label: 'Identification & Recovery',
          link: {
            type: 'doc',
            id: 'operations/device-operations-owgw/identification-recovery',
          },
          items: [
            'operations/device-operations-owgw/blink',
            'operations/device-operations-owgw/factory-reset',
            'operations/device-operations-owgw/reboot',
          ],
        },
        'operations/device-operations-owgw/firmware-management',
        'operations/device-operations-owgw/telemetry-monitoring',
        {
          type: 'category',
          label: 'Diagnostics',
          link: {
            type: 'doc',
            id: 'operations/device-operations-owgw/diagnostics',
          },
          items: [
            'operations/device-operations-owgw/script',
            'operations/device-operations-owgw/trace',
            'operations/device-operations-owgw/wi-fi-scan',
            'operations/device-operations-owgw/rtty',
          ],
        },
        'operations/device-operations-owgw/command-execution-status',
      ],
    },
    {
      type: 'category',
      label: 'Configuration Management (OWGW)',
      items: [
        {
          type: 'category',
          label: 'Default Device Configurations',
          link: {
            type: 'doc',
            id: 'operations/configuration-management-owgw/default-device-configurations',
          },
          items: [
            'operations/configuration-management-owgw/device-type-defaults',
          ],
        },
        {
          type: 'category',
          label: 'Applying Configurations to Devices',
          link: {
            type: 'doc',
            id: 'operations/configuration-management-owgw/applying-configurations-to-devices',
          },
          items: [
            'operations/configuration-management-owgw/import-json',
            'operations/configuration-management-owgw/ui-based-editing',
            'operations/configuration-management-owgw/expert-mode',
          ],
        },
        'operations/configuration-management-owgw/reapplying-known-good-configs',
      ],
    },
    {
      type: 'category',
      label: 'Provisioning & Hierarchy (OWPROV)',
      items: [
        'operations/provisioning-hierarchy-owprov/provisioning-model-overview',
        {
          type: 'category',
          label: 'Entities & Venues',
          link: {
            type: 'doc',
            id: 'operations/provisioning-hierarchy-owprov/entities-venues',
          },
          items: [
            'operations/provisioning-hierarchy-owprov/creating-entities',
            'operations/provisioning-hierarchy-owprov/creating-venues',
          ],
        },
        'operations/provisioning-hierarchy-owprov/operators',
        'operations/provisioning-hierarchy-owprov/subscribers',
        'operations/provisioning-hierarchy-owprov/adding-devices-to-venues',
        'operations/provisioning-hierarchy-owprov/provisioning-workflow-end-to-end',
      ],
    },
    {
      type: 'category',
      label: 'Configuration Hierarchy & Conflict Resolution',
      items: [
        'operations/configuration-hierarchy-conflict/why-hierarchy-matters',
        {
          type: 'category',
          label: 'Inheritance Flow',
          link: {
            type: 'doc',
            id: 'operations/configuration-hierarchy-conflict/inheritance-flow',
          },
          items: [
            'operations/configuration-hierarchy-conflict/entity-venue-device',
          ],
        },
        'operations/configuration-hierarchy-conflict/computed-configuration',
        'operations/configuration-hierarchy-conflict/conflict-rules-weights',
        'operations/configuration-hierarchy-conflict/common-design-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Security & Governance',
      items: [
        'operations/security-governance/device-blacklisting',
        'operations/security-governance/access-control-concepts',
        'operations/security-governance/multi-tenant-considerations',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting & Operations',
      items: [
        'operations/troubleshooting-operations/common-failure-scenarios',
        'operations/troubleshooting-operations/device-not-connecting',
        'operations/troubleshooting-operations/configuration-not-applying',
        'operations/troubleshooting-operations/certificate-issues',
        'operations/troubleshooting-operations/logs-where-to-look',
      ],
    },
    {
      type: 'category',
      label: 'Hardware',
      items: [
        'user-guide',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'contributing',
        'cla',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/general',
        'faq/platform-architecture',
        'faq/manufacturing-odm-integration',
        'faq/hardware-requirements',
        'faq/flash-layout-partitioning',
      ],
    },
  ],
};

export default sidebars;
