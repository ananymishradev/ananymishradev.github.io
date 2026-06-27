import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const docs = await getCollection('docs')
  const pages = docs
    .filter(doc => !doc.data.draft)
    .filter(doc => !doc.id.startsWith('examples/'))

  return rss({
    title: 'Anany Mishra',
    description: 'Master high-performance AI and low-latency systems.',
    site: context.site,
    items: pages.map(page => ({
      title: page.data.title,
      description: page.data.description,
      link: page.id === 'index' ? '/' : `/${page.id}/`,
    })),
  })
}
