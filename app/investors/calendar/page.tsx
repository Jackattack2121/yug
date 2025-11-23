'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLocationMarker, HiOutlineDownload } from 'react-icons/hi'

// Mock calendar events - in production, fetch from Directus
const upcomingEvents = [
  {
    id: '1',
    title: 'Quarterly Activities Report',
    date: '2025-01-27',
    time: '9:00 AM AWST',
    type: 'Report Release',
    location: 'ASX Announcement',
    description: 'Q2 FY2025 Quarterly Activities and Cash Flow Report',
  },
  {
    id: '2',
    title: 'Investor Webinar - Mick Well Project Update',
    date: '2025-02-15',
    time: '2:00 PM AWST',
    type: 'Webinar',
    location: 'Online',
    description: 'Live presentation on drilling results and exploration updates',
  },
  {
    id: '3',
    title: 'Half-Yearly Financial Report',
    date: '2025-03-31',
    time: '9:00 AM AWST',
    type: 'Report Release',
    location: 'ASX Announcement',
    description: 'Half Year Report for period ending 31 December 2024',
  },
  {
    id: '4',
    title: 'Annual General Meeting',
    date: '2025-05-15',
    time: '10:00 AM AWST',
    type: 'AGM',
    location: 'Perth, WA',
    description: 'Annual General Meeting of Shareholders',
  },
  {
    id: '5',
    title: 'Quarterly Activities Report',
    date: '2025-04-27',
    time: '9:00 AM AWST',
    type: 'Report Release',
    location: 'ASX Announcement',
    description: 'Q3 FY2025 Quarterly Activities and Cash Flow Report',
  },
]

const pastEvents = [
  {
    id: 'p1',
    title: 'Quarterly Activities Report',
    date: '2024-10-27',
    type: 'Report Release',
  },
  {
    id: 'p2',
    title: 'Investor Presentation - RIU Conference',
    date: '2024-09-15',
    type: 'Presentation',
  },
  {
    id: 'p3',
    title: 'Annual Report Release',
    date: '2024-08-27',
    type: 'Report Release',
  },
]

const eventTypeColors: Record<string, string> = {
  'Report Release': 'bg-blue-100 text-blue-800 border-blue-300',
  'Webinar': 'bg-purple-100 text-purple-800 border-purple-300',
  'AGM': 'bg-red-100 text-red-800 border-red-300',
  'Presentation': 'bg-green-100 text-green-800 border-green-300',
  'Meeting': 'bg-yellow-100 text-yellow-800 border-yellow-300',
}

export default function InvestorCalendar() {
  const downloadICS = () => {
    // TODO: Generate .ics file for calendar import
    alert('Calendar download feature coming soon!')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-accent-yellow text-black text-sm font-semibold uppercase tracking-wider mb-4 rounded">
                Investor Calendar
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-6">
                Important Dates & Events
              </h1>
              <p className="text-xl md:text-2xl font-josefin leading-relaxed opacity-90">
                Stay informed about upcoming reports, meetings, and company events
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-8">
              <SectionTitle title="Upcoming Events" centered={false} />
              <button
                onClick={downloadICS}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <HiOutlineDownload className="w-5 h-5" />
                <span className="hidden sm:inline">Export Calendar</span>
              </button>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {upcomingEvents
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .map((event, index) => (
                <AnimatedSection key={event.id} delay={index * 0.05}>
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      {/* Date Block */}
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary-600 text-white rounded-lg p-4 text-center min-w-[80px]">
                          <div className="text-2xl font-bold">
                            {new Date(event.date).getDate()}
                          </div>
                          <div className="text-xs uppercase">
                            {new Date(event.date).toLocaleDateString('en-AU', { month: 'short' })}
                          </div>
                          <div className="text-xs">
                            {new Date(event.date).getFullYear()}
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="flex-1">
                          <div className="flex items-center flex-wrap gap-2 mb-2">
                            <span
                              className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                                eventTypeColors[event.type] || 'bg-gray-100 text-gray-800 border-gray-300'
                              }`}
                            >
                              {event.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <HiOutlineClock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <HiOutlineLocationMarker className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <SectionTitle title="Past Events" centered={false} />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {pastEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.05}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 opacity-75 hover:opacity-100 transition-opacity">
                  <div className="flex items-center space-x-3 mb-3">
                    <HiOutlineCalendar className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-700 mb-2">{event.title}</h3>
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${
                      eventTypeColors[event.type] || 'bg-gray-100 text-gray-800 border-gray-300'
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section-padding bg-primary-600 text-white text-center">
        <div className="container max-w-3xl mx-auto">
          <AnimatedSection>
            <HiOutlineCalendar className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
              Never Miss an Update
            </h2>
            <p className="text-lg mb-8 font-josefin">
              Subscribe to receive email reminders about upcoming events and important dates
            </p>
            <a
              href="/investors#subscribe"
              className="inline-block px-8 py-4 bg-accent-yellow text-black font-semibold uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Subscribe to Updates
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

