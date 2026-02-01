import AnimatedSection from '@/components/ui/AnimatedSection'
import EmptyState from '@/components/ui/EmptyState'
import { HiOutlineCalendar } from 'react-icons/hi'

export default function InvestorCalendar() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary-900 py-32 md:py-40 overflow-hidden">
        {/* Background Image with fade */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/aerial-view-over-the-sand-pit-2025-10-13-02-21-23-utc.jpg)' }}
        />
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-primary-600/60"></div>
        
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-heading-lg text-white mb-4">
                Investor<br />
                Calendar
              </h1>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Stay informed about upcoming reports, meetings, and company events
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Empty State */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <EmptyState
              icon={HiOutlineCalendar}
              title="Calendar Events Coming Soon"
              description="Calendar events will appear here when scheduled. This will include upcoming reports, meetings, webinars, and important company dates. Subscribe to our mailing list to receive email reminders."
              action={{
                label: "Subscribe to Updates",
                href: "/investors#subscribe"
              }}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

