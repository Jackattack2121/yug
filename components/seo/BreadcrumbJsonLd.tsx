import JsonLd from './JsonLd'
import { SEO_CONFIG, BREADCRUMB_LABELS } from '@/lib/seo-config'

interface BreadcrumbJsonLdProps {
  path: string
  locale: string
}

export default function BreadcrumbJsonLd({ path, locale }: BreadcrumbJsonLdProps) {
  const segments = path.split('/').filter(Boolean)

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SEO_CONFIG.baseUrl}/${locale}`,
    },
    ...segments.map((segment, index) => {
      const itemPath = '/' + segments.slice(0, index + 1).join('/')
      return {
        '@type': 'ListItem',
        position: index + 2,
        name: BREADCRUMB_LABELS[segment] || segment,
        item: `${SEO_CONFIG.baseUrl}/${locale}${itemPath}`,
      }
    }),
  ]

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }

  return <JsonLd data={data} />
}
