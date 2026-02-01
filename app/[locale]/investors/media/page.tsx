import AnimatedSection from '@/components/ui/AnimatedSection'
import EmptyState from '@/components/ui/EmptyState'
import { HiOutlineNewspaper } from 'react-icons/hi'

export default function MediaCoverage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary-900 py-32 md:py-40 overflow-hidden">
        {/* Background Image with fade */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/natural-quarry-is-located-near-road-against-backdr-2025-01-29-05-43-49-utc.jpg)' }}
        />
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-primary-600/60"></div>
        
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-heading-lg text-white mb-4">
                Media<br />
                Coverage
              </h1>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Latest media articles, press releases, and industry coverage
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
              icon={HiOutlineNewspaper}
              title="Media Coverage Coming Soon"
              description="Media coverage will be published here as it becomes available. Subscribe to our mailing list to be notified when new articles and press releases are published."
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

