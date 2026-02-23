'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { Link } from '@/i18n/navigation'
import { CALENDAR_EVENTS, EVENT_TYPE_STYLES } from '@/lib/investor-data'
import { HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineArrowRight } from 'react-icons/hi'

export default function InvestorCalendar() {
  const events = CALENDAR_EVENTS
    .filter((e) => e.isUpcoming)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4)

  return (
    <AnimatedSection>
      <div className="bg-white border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <HiOutlineCalendar className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-bold text-secondary-900 uppercase tracking-wider font-montserrat">
              Corporate Calendar
            </h2>
          </div>
          <Link
            href="/investors/calendar"
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
          >
            Full Calendar
            <HiOutlineArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Events */}
        <div className="divide-y divide-gray-100">
          {events.map((event) => {
            const date = new Date(event.date)
            const style = EVENT_TYPE_STYLES[event.type] || EVENT_TYPE_STYLES.other

            return (
              <div key={event.id} className="flex items-start gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
                {/* Date block */}
                <div className="flex-shrink-0 w-14 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-600">
                    {date.toLocaleDateString('en-AU', { month: 'short' })}
                  </p>
                  <p className="text-2xl font-bold text-secondary-900 leading-tight">
                    {date.getDate()}
                  </p>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${style.bgColor} ${style.color}`}>
                      {style.label}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-secondary-900 leading-snug">
                    {event.title}
                  </h3>
                  {event.location && (
                    <p className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <HiOutlineLocationMarker className="w-3 h-3" />
                      {event.location}
                    </p>
                  )}
                </div>
              </div>
            )
          })}

          {events.length === 0 && (
            <div className="px-6 py-12 text-center">
              <HiOutlineCalendar className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">No upcoming events scheduled</p>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}
