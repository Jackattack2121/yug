'use client'

import SharePriceWidget from '@/components/investor/SharePriceWidget'
import SubscriptionForm from '@/components/investor/SubscriptionForm'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { 
  HiOutlineDocumentText, 
  HiOutlinePresentationChartLine, 
  HiOutlineNewspaper,
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineChartBar,
  HiOutlineDownload,
  HiOutlineGlobe
} from 'react-icons/hi'

const quickLinks = [
  {
    title: 'ASX Announcements',
    description: 'Latest company announcements and market updates',
    icon: <HiOutlineDocumentText />,
    href: '/investors/asx-announcements',
    color: 'bg-blue-500',
  },
  {
    title: 'Financial Reports',
    description: 'Quarterly, half-yearly, and annual reports',
    icon: <HiOutlineChartBar />,
    href: '/investors/financial-reports',
    color: 'bg-green-500',
  },
  {
    title: 'Presentations',
    description: 'Investor presentations and company briefings',
    icon: <HiOutlinePresentationChartLine />,
    href: '/investors/presentations',
    color: 'bg-purple-500',
  },
  {
    title: 'Share Information',
    description: 'Share registry and trading information',
    icon: <HiOutlineChartBar />,
    href: '/investors/share-information',
    color: 'bg-orange-500',
  },
  {
    title: 'Investor Calendar',
    description: 'Upcoming events, meetings, and report dates',
    icon: <HiOutlineCalendar />,
    href: '/investors/calendar',
    color: 'bg-red-500',
  },
  {
    title: 'Media Coverage',
    description: 'News articles and media mentions',
    icon: <HiOutlineNewspaper />,
    href: '/investors/media',
    color: 'bg-indigo-500',
  },
  {
    title: 'Fact Sheet',
    description: 'Download our company fact sheet',
    icon: <HiOutlineDownload />,
    href: '/investors/fact-sheet',
    color: 'bg-teal-500',
  },
  {
    title: 'ESG',
    description: 'Environmental, social, and governance',
    icon: <HiOutlineGlobe />,
    href: '/investors/esg',
    color: 'bg-emerald-500',
  },
]

// Mock data for latest announcements
const latestAnnouncements = [
  {
    id: '1',
    title: 'Quarterly Activities Report',
    date: '2024-10-27',
    category: 'Company Update',
  },
  {
    id: '2',
    title: 'Exploration Program Update - Bosnia Projects',
    date: '2024-10-15',
    category: 'Exploration',
  },
  {
    id: '3',
    title: 'Systematic Exploration Program Commences',
    date: '2024-10-01',
    category: 'Operations',
  },
]

// Mock upcoming events
const upcomingEvents = [
  {
    id: '1',
    title: 'Quarterly Report Release',
    date: '2025-01-27',
    type: 'Report',
  },
  {
    id: '2',
    title: 'Investor Webinar',
    date: '2025-02-15',
    type: 'Meeting',
  },
  {
    id: '3',
    title: 'Half-Yearly Report',
    date: '2025-03-31',
    type: 'Report',
  },
]

export default function InvestorCentre() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-accent-yellow text-black text-sm font-semibold uppercase tracking-wider mb-4 rounded">
                Investor Centre
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-6">
                Welcome to the Yugo Metals Investor Centre
              </h1>
              <p className="text-xl md:text-2xl font-josefin leading-relaxed opacity-90">
                Your gateway to company information, financial reports, and market updates
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Share Price & Quick Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Share Price Widget - Spans 2 columns on large screens */}
            <AnimatedSection className="lg:col-span-2">
              <SharePriceWidget ticker="YUG" />
            </AnimatedSection>

            {/* Email Subscription - 1 column */}
            <AnimatedSection delay={0.1}>
              <SubscriptionForm variant="card" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
                Investor Resources
              </h2>
              <p className="text-lg text-gray-600 font-josefin">
                Access all investor information and company updates
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <AnimatedSection key={link.title} delay={index * 0.05}>
                <a
                  href={link.href}
                  className="group block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {link.description}
                  </p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Announcements & Upcoming Events */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Latest Announcements */}
            <AnimatedSection>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Latest Announcements</h2>
                  <HiOutlineDocumentText className="w-8 h-8 text-primary-600" />
                </div>
                <div className="space-y-4">
                  {latestAnnouncements.map((announcement) => (
                    <div key={announcement.id} className="border-l-4 border-primary-600 pl-4 py-2 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-primary-600 uppercase">
                          {announcement.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(announcement.date).toLocaleDateString('en-AU', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">{announcement.title}</h3>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button href="/investors/asx-announcements" variant="outline" className="w-full">
                    View All Announcements
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Upcoming Events */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
                  <HiOutlineCalendar className="w-8 h-8 text-accent-yellow" />
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border-l-4 border-accent-yellow pl-4 py-2 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-accent-yellow uppercase">
                          {event.type}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(event.date).toLocaleDateString('en-AU', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">{event.title}</h3>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button href="/investors/calendar" variant="outline" className="w-full">
                    View Full Calendar
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact IR Team CTA */}
      <section className="section-padding bg-primary-600 text-white text-center">
        <div className="container max-w-3xl mx-auto">
          <AnimatedSection>
            <HiOutlineMail className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
              Have Questions?
            </h2>
            <p className="text-lg mb-8 font-josefin">
              Our Investor Relations team is here to help. Get in touch for more information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/investors/contact" variant="secondary">
                Contact IR Team
              </Button>
              <Button href="/investors/fact-sheet" variant="outline">
                Download Fact Sheet
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

