import JsonLd from './JsonLd'
import { SEO_CONFIG } from '@/lib/seo-config'

interface Announcement {
  title: string
  date: string
  url?: string
  summary?: string
  excerpt?: string
}

interface NewsArticleJsonLdProps {
  announcements: Announcement[]
}

export default function NewsArticleJsonLd({ announcements }: NewsArticleJsonLdProps) {
  const articles = announcements.slice(0, 10).map((a) => ({
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: a.title,
    datePublished: a.date,
    ...(a.summary || a.excerpt ? { description: a.summary || a.excerpt } : {}),
    ...(a.url ? { url: a.url } : {}),
    publisher: {
      '@type': 'Corporation',
      '@id': `${SEO_CONFIG.baseUrl}/#organization`,
      name: SEO_CONFIG.name,
      logo: SEO_CONFIG.logo,
    },
  }))

  return (
    <>
      {articles.map((article, i) => (
        <JsonLd key={i} data={article} />
      ))}
    </>
  )
}
