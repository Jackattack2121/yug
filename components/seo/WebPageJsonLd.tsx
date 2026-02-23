import JsonLd from './JsonLd'
import { SEO_CONFIG } from '@/lib/seo-config'

interface WebPageJsonLdProps {
  title: string
  description: string
  path: string
  locale: string
}

export default function WebPageJsonLd({ title, description, path, locale }: WebPageJsonLdProps) {
  const url = `${SEO_CONFIG.baseUrl}/${locale}${path}`

  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    name: `${title} | ${SEO_CONFIG.name}`,
    description,
    url,
    isPartOf: { '@id': `${SEO_CONFIG.baseUrl}/#website` },
    about: { '@id': `${SEO_CONFIG.baseUrl}/#organization` },
    inLanguage: locale,
  }

  return <JsonLd data={data} />
}
