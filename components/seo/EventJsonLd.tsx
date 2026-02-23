import JsonLd from './JsonLd'
import { SEO_CONFIG } from '@/lib/seo-config'
import { CALENDAR_EVENTS } from '@/lib/investor-data'

export default function EventJsonLd() {
  const upcomingEvents = CALENDAR_EVENTS.filter((e) => e.isUpcoming)

  const events = upcomingEvents.map((event) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: event.date,
    ...(event.endDate ? { endDate: event.endDate } : {}),
    ...(event.description ? { description: event.description } : {}),
    ...(event.location
      ? {
          location: {
            '@type': 'Place',
            name: event.location,
          },
        }
      : {
          eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        }),
    organizer: {
      '@type': 'Corporation',
      '@id': `${SEO_CONFIG.baseUrl}/#organization`,
      name: SEO_CONFIG.name,
    },
  }))

  return (
    <>
      {events.map((event) => (
        <JsonLd key={event.name} data={event} />
      ))}
    </>
  )
}
