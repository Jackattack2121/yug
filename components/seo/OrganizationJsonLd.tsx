import JsonLd from './JsonLd'
import { SEO_CONFIG } from '@/lib/seo-config'

export default function OrganizationJsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': `${SEO_CONFIG.baseUrl}/#organization`,
    name: SEO_CONFIG.name,
    legalName: SEO_CONFIG.legalName,
    url: SEO_CONFIG.baseUrl,
    logo: SEO_CONFIG.logo,
    description: SEO_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      ...SEO_CONFIG.address,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SEO_CONFIG.phone,
        contactType: 'customer service',
        email: SEO_CONFIG.email,
      },
      {
        '@type': 'ContactPoint',
        email: SEO_CONFIG.investorEmail,
        contactType: 'investor relations',
      },
    ],
    sameAs: SEO_CONFIG.sameAs,
    tickerSymbol: SEO_CONFIG.asxCode,
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_CONFIG.baseUrl}/#website`,
    name: SEO_CONFIG.name,
    url: SEO_CONFIG.baseUrl,
    publisher: { '@id': `${SEO_CONFIG.baseUrl}/#organization` },
    inLanguage: ['en', 'de', 'bs', 'zh', 'ja', 'it'],
  }

  return (
    <>
      <JsonLd data={org} />
      <JsonLd data={website} />
    </>
  )
}
