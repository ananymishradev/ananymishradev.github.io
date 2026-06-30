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
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/ananymishradev/portfolio',
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: '/fonts/cormorant-garamond/cormorant-garamond-latin-400-normal.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
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
        {
          label: 'Resources and References',
          items: [
            { label: 'CUDA & PyTorch Performance Engineering', link: '/resources/cuda-and-pytorch-performance-engineering/' },
            { label: 'Low-Latency C++ & Computer Architecture', link: '/resources/low-latency-performance-cpp-and-computer-architecture/' },
            { label: 'OS Internals & Linux Kernel Bypass', link: '/resources/operating-system-internals-and-linux-kernel-bypass/' },
            { label: 'HFT System Design', link: '/resources/hft-system-design/' },
          ],
        },
        { label: 'Deep Learning', autogenerate: { directory: 'deep-learning' } },
        { label: 'PyTorch Internals', autogenerate: { directory: 'pytorch-internals' } },
        { label: 'GPU Architecture', autogenerate: { directory: 'gpu-architecture' } },
        { label: 'GPU Programming', autogenerate: { directory: 'gpu-programming' } },
        { label: 'Performance Engineering', autogenerate: { directory: 'performance-engineering' } },
        { label: 'C++ in Production', autogenerate: { directory: 'cpp-in-production' } },
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
