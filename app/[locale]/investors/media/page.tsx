import AnimatedSection from '@/components/ui/AnimatedSection'
import EmptyState from '@/components/ui/EmptyState'
import { HiOutlineNewspaper } from 'react-icons/hi'

export default function MediaCoverage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-32 md:py-40">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-display text-secondary-900 mb-6">
                Media<br />
                Coverage
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-josefin">
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

