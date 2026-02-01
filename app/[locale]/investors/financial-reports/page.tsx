import AnimatedSection from '@/components/ui/AnimatedSection'
import EmptyState from '@/components/ui/EmptyState'
import { HiOutlineDocumentText } from 'react-icons/hi'

export default function FinancialReports() {
  return (
    <>
      <section className="relative bg-secondary-900 py-32 md:py-40 overflow-hidden">
        {/* Background Image with fade */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/the-truck-transports-the-minerals-from-the-top-vie-2025-10-16-12-14-08-utc.jpg)' }}
        />
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-primary-600/60"></div>
        
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-heading-lg text-white mb-4">
                Financial<br />
                Reports
              </h1>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Access our latest financial reports, quarterly activities, and annual statements
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <EmptyState
              icon={HiOutlineDocumentText}
              title="Financial Reports Coming Soon"
              description="Financial reports will be published here when available. This will include annual reports, half-yearly reports, and quarterly activities reports."
              action={{
                label: "View ASX Announcements",
                href: "/investors/asx-announcements"
              }}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

