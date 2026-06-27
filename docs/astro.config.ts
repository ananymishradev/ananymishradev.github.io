import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from './starlight-theme-rapide/index.ts'

const site =
  process.env['CF_PAGES_URL']
    ? process.env['CF_PAGES_URL']
    : 'https://ananymishra.dev/'

export default defineConfig({
  integrations: [
    starlight({
      credits: false,
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/ananymishradev/portfolio',
      },
      head: [
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
        {
          label: 'Resources and References',
          items: [
            { label: 'CUDA & PyTorch Performance Engineering', link: '/resources/cuda-and-pytorch-performance-engineering/' },
            { label: 'Low-Latency C++ & Computer Architecture', link: '/resources/low-latency-performance-cpp-and-computer-architecture/' },
            { label: 'OS Internals & Linux Kernel Bypass', link: '/resources/operating-system-internals-and-linux-kernel-bypass/' },
            { label: 'HFT System Design', link: '/resources/hft-system-design/' },
            { label: 'Plugins and Tools', link: '/resources/starlight/' },
          ],
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
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
