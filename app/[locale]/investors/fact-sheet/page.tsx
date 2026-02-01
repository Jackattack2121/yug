import AnimatedSection from '@/components/ui/AnimatedSection'
import EmptyState from '@/components/ui/EmptyState'
import { HiOutlineDocumentText } from 'react-icons/hi'

export default function FactSheetPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary-900 py-32 md:py-40 overflow-hidden">
        {/* Background Image with fade */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/165-Hindley-10.jpg)' }}
        />
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-primary-600/60"></div>
        
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-heading-lg text-white mb-4">
                Company<br />
                Fact Sheet
              </h1>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/90">
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

