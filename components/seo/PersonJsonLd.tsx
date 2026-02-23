import JsonLd from './JsonLd'
import { SEO_CONFIG, BOARD_MEMBERS } from '@/lib/seo-config'

export default function PersonJsonLd() {
  const people = BOARD_MEMBERS.map((member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    description: member.description,
    worksFor: {
      '@type': 'Corporation',
      '@id': `${SEO_CONFIG.baseUrl}/#organization`,
      name: SEO_CONFIG.name,
    },
  }))

  return (
    <>
      {people.map((person) => (
        <JsonLd key={person.name} data={person} />
      ))}
    </>
  )
}
