'use client'

import { useTranslations } from 'next-intl'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { CALENDAR_EVENTS, EVENT_TYPE_STYLES } from '@/lib/investor-data'
import SubscriptionForm from '@/components/investor/SubscriptionForm'
import { HiOutlineCalendar, HiOutlineLocationMarker } from 'react-icons/hi'

export default function CalendarPage() {
  const t = useTranslations('investors.calendar')

  const upcomingEvents = CALENDAR_EVENTS
    .filter((e) => e.isUpcoming)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  // Group events by quarter
  const groupedEvents: Record<string, typeof CALENDAR_EVENTS> = {}
  upcomingEvents.forEach((event) => {
    const date = new Date(event.date)
    const quarter = `Q${Math.ceil((date.getMonth() + 1) / 3)} ${date.getFullYear()}`
    if (!groupedEvents[quarter]) groupedEvents[quarter] = []
    groupedEvents[quarter].push(event)
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary-900 py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/beautiful-nature-of-bosnia-and-herzegovina-travel-2025-08-29-06-16-13-utc.jpg)' }}
        />
        <div className="absolute inset-0 bg-primary-600/60" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-heading-lg text-white mb-4">{t('heroTitle')}</h1>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {t('heroSubtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Calendar Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Events timeline */}
            <div className="lg:col-span-2">
              {Object.entries(groupedEvents).map(([quarter, events], qi) => (
                <AnimatedSection key={quarter} delay={qi * 0.05}>
                  <div className="mb-10">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-4 pb-2 border-b border-gray-100">
                      {quarter}
                    </h2>
                    <div className="space-y-4">
                      {events.map((event) => {
                        const date = new Date(event.date)
                        const style = EVENT_TYPE_STYLES[event.type] || EVENT_TYPE_STYLES.other

                        return (
                          <div
                            key={event.id}
                            className="flex items-start gap-5 bg-white border border-gray-200 p-5 hover:border-primary-600 hover:shadow-sm transition-all"
                          >
                            {/* Date block */}
                            <div className="flex-shrink-0 w-16 text-center bg-gray-50 py-3 px-2">
                              <p className="text-xs font-bold uppercase tracking-wider text-primary-600">
                                {date.toLocaleDateString('en-AU', { month: 'short' })}
                              </p>
                              <p className="text-3xl font-bold text-secondary-900 leading-tight">
                                {date.getDate()}
                              </p>
                              <p className="text-[10px] text-gray-400">
                                {date.getFullYear()}
                              </p>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${style.bgColor} ${style.color}`}>
                                  {style.label}
                                </span>
                              </div>
                              <h3 className="text-base font-bold text-secondary-900 mb-1">
                                {event.title}
                              </h3>
                              {event.description && (
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {event.description}
                                </p>
                              )}
                              {event.location && (
                                <p className="flex items-center gap-1.5 text-xs text-gray-400 mt-2">
                                  <HiOutlineLocationMarker className="w-3.5 h-3.5" />
                                  {event.location}
                                </p>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {upcomingEvents.length === 0 && (
                <div className="py-16 text-center">
                  <HiOutlineCalendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">{t('noEvents')}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection delay={0.1}>
                <div className="sticky top-24 space-y-6">
                  {/* Legend */}
                  <div className="bg-gray-50 border border-gray-200 p-6">
                    <h3 className="text-sm font-bold text-secondary-900 uppercase tracking-wider mb-4">
                      Event Types
                    </h3>
                    <div className="space-y-2">
                      {Object.entries(EVENT_TYPE_STYLES).map(([key, style]) => (
                        <div key={key} className="flex items-center gap-2">
                          <span className={`inline-block w-3 h-3 rounded-sm ${style.bgColor}`} />
                          <span className="text-xs text-gray-600">{style.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subscribe */}
                  <div className="bg-primary-600 p-6">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                      Get Event Reminders
                    </h3>
                    <p className="text-xs text-white/70 mb-4">
                      Subscribe to receive calendar reminders for upcoming investor events.
                    </p>
                    <SubscriptionForm variant="inline" className="[&_input]:border-white/30 [&_input]:bg-white/10 [&_input]:text-white [&_input]:placeholder-white/50 [&_button]:bg-white [&_button]:text-primary-600 [&_button]:hover:bg-white/90" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
