import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from './starlight-theme-rapide/index.ts'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const site =
  process.env['CF_PAGES_URL']
    ? process.env['CF_PAGES_URL']
    : 'https://ananymishra.tech/'

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      credits: false,
      customCss: ['./src/fonts/font-face.css', './src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/ananymishradev/portfolio',
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: '/_astro/cormorant-garamond-latin-400-normal.B-1hWBU7.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: '/_astro/cormorant-garamond-latin-500-normal.BsRWmXhO.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: '/_astro/cormorant-garamond-latin-600-normal.Co1r35X9.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: '/_astro/cormorant-garamond-latin-700-normal.DajfzrDU.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: new URL('image.png', site).href },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: 'Documentation of Performance Engineering by Anany Mishra.',
          },
        },
      ],
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        Hero: './src/components/Hero.astro',
      },
      plugins: [starlightThemeRapide()],
      sidebar: [
        { label: 'Start Here', items: ['start-here'] },
        { label: 'Inference Engineering', autogenerate: { directory: 'inference-engineering' } },
        { label: 'Systems Engineering', autogenerate: { directory: 'systems-engineering' } },
        { label: 'AI Engineering', autogenerate: { directory: 'ai-engineering' } },
        { label: 'Performance Engineering', autogenerate: { directory: 'performance-engineering' } },
        { label: 'Distributed Systems', autogenerate: { directory: 'distributed-systems' } },
      ],
      social: [
        { href: 'https://twitter.com/ananymishradev', icon: 'twitter', label: 'Twitter' },
        { href: 'https://linkedin.com/in/ananymishradev', icon: 'linkedin', label: 'LinkedIn' },
        { href: 'https://github.com/ananymishradev', icon: 'github', label: 'GitHub' },
      ],
      title: 'Anany Mishra',
    }),
  ],
  site,
})
