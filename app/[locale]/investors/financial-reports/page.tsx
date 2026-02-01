import AnimatedSection from '@/components/ui/AnimatedSection'
import EmptyState from '@/components/ui/EmptyState'
import { HiOutlineDocumentText } from 'react-icons/hi'

export default function FinancialReports() {
  return (
    <>
      <section className="relative bg-white py-32 md:py-40">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-display text-secondary-900 mb-6">
                Financial<br />
                Reports
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-josefin">
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

