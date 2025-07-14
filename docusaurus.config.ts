import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'StreamlineVerify API',
  tagline: 'Compliance, Exclusion Screening, Streamlined.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sv-api-docs.local',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sv-manila', // Usually your GitHub org/user name.
  projectName: 'sv-api-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'latest'
            },
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'StreamlineVerify API',
      logo: {
        alt: 'StreamlineVerify API',
        src: 'img/cropped-SV-fav-32x32.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'credentialingApiSidebar',
          position: 'left',
          label: 'Credentialing API',
        },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        // },

      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} StreamlineVerify, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: ['docusaurus-json-schema-plugin']
};

export default config;
