// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Utsav Garg',
  tagline: 'Cloud & AI Security Architect | Staff DevSecOps Engineer',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://techslaves.github.io',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'techslaves',
  projectName: 'techslaves.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'ignore',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/techslaves/techslaves.github.io/tree/master/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/techslaves/techslaves.github.io/tree/master/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-98116Q442C',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: 'subscribe_youtube_hub',
        content:
          '<span>📺 Check out <b>TechHustlewithUG</b> for deep-dive tutorials on Helm, Kubernetes &amp; DevSecOps!</span> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@techhustlewithUG" style="display: inline-block; background-color: #dc2626; color: #ffffff; padding: 3px 10px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-left: 8px; font-size: 12px;">Subscribe 📺</a>',
        backgroundColor: '#0f172a',
        textColor: '#f8fafc',
        isCloseable: true,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Utsav Garg',
        logo: {
          alt: 'Utsav Garg Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://techslaves.github.io/security-hub/',
            label: '🛡️ Security Hub',
            position: 'left',
          },
          {
            to: '/#experience',
            label: 'Experience & Skills',
            position: 'left',
          },
          {
            to: '/#projects',
            label: 'Projects',
            position: 'left',
          },
          {
            to: '/docs/youtube',
            label: 'YouTube Series',
            position: 'left',
          },
          {
            to: '/docs/certification',
            label: 'Certifications',
            position: 'left',
          },
          {
            to: '/docs/about',
            label: 'About',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://www.linkedin.com/in/itsutsavgarg',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://github.com/techslaves/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Featured Platform',
            items: [
              {
                label: 'Security Hub (OWASP LLM & NIS 2)',
                href: 'https://techslaves.github.io/security-hub/',
              },
              {
                label: 'PostgreSQL MCP Server',
                href: 'https://github.com/techslaves/postgresql-mcp-server',
              },
              {
                label: 'GitHub Actions Security Series',
                href: 'https://github.com/techslaves/GitHub-Actions-Security-Series',
              },
              {
                label: 'Helm Charts Masterclass',
                href: 'https://github.com/techslaves/helm-charts-series',
              },
            ],
          },
          {
            title: 'Knowledge & Series',
            items: [
              {
                label: 'Helm Charts Series',
                to: '/docs/youtube/helm-series',
              },
              {
                label: 'GitHub Actions Security',
                to: '/docs/youtube/github-actions-security',
              },
              {
                label: 'Docker Certified Associate (DCA)',
                to: '/docs/certification',
              },
              {
                label: 'Technical Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Connect & Community',
            items: [
              {
                label: 'LinkedIn (itsutsavgarg)',
                href: 'https://www.linkedin.com/in/itsutsavgarg',
              },
              {
                label: 'YouTube (@techhustlewithUG)',
                href: 'https://www.youtube.com/@techhustlewithUG',
              },
              {
                label: 'GitHub (@techslaves)',
                href: 'https://github.com/techslaves/',
              },
              {
                label: 'Twitter / X (@itsutsavgarg)',
                href: 'https://twitter.com/itsutsavgarg',
              },
              {
                label: 'Email (er.utsavgarg@gmail.com)',
                href: 'mailto:er.utsavgarg@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Utsav Garg. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
