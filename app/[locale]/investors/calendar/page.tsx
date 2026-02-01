import AnimatedSection from '@/components/ui/AnimatedSection'
import EmptyState from '@/components/ui/EmptyState'
import { HiOutlineCalendar } from 'react-icons/hi'

export default function InvestorCalendar() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-32 md:py-40">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-display text-secondary-900 mb-6">
                Investor<br />
                Calendar
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-josefin">
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

