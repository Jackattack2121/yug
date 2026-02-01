import AnimatedSection from '@/components/ui/AnimatedSection'
import EmptyState from '@/components/ui/EmptyState'
import { HiOutlineDocumentText } from 'react-icons/hi'

export default function FactSheetPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-32 md:py-40">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-display text-secondary-900 mb-6">
                Company<br />
                Fact Sheet
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-josefin">
                Quick reference guide to key company information and metrics
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
              icon={HiOutlineDocumentText}
              title="Fact Sheets Coming Soon"
              description="Company fact sheets will be available for download here once published. Fact sheets provide a comprehensive overview of Yugo Metals including projects, management, share structure, and key highlights."
              action={{
                label: "View Financial Reports",
                href: "/investors/financial-reports"
              }}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

