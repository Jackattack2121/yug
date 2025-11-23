import AnimatedSection from '@/components/ui/AnimatedSection'
import NewsCard from '@/components/ui/NewsCard'

const announcements = [
  {
    id: '1',
    title: 'Entitlement Issue Prospectus - Rights Issue',
    date: 'September 28, 2024',
    category: 'Capital Raising',
    file: '/documents/prospectus.pdf',
    excerpt: 'Details of current rights issue to fund exploration activities across our Bosnia and Herzegovina project portfolio.',
  },
  {
    id: '2',
    title: 'Exploration Update - Bosnia and Herzegovina Projects',
    date: 'August 15, 2024',
    category: 'Exploration',
    file: '/documents/announcement.pdf',
    excerpt: 'Update on systematic exploration program across Doboj and Jezero projects.',
  },
  {
    id: '3',
    title: 'Quarterly Activities Report - Q3 2024',
    date: 'July 31, 2024',
    category: 'Company Update',
    file: '/documents/quarterly-report.pdf',
    excerpt: 'Overview of quarterly activities including exploration results and corporate developments.',
  },
  {
    id: '4',
    title: 'Exploration Program Commencement',
    date: 'July 10, 2024',
    category: 'Exploration',
    file: '/documents/drilling-results-july-2024.pdf',
    excerpt: 'Commencement of two-year systematic exploration program across all five projects.',
  },
  {
    id: '5',
    title: 'Annual General Meeting Notice',
    date: 'June 15, 2024',
    category: 'Company Update',
    file: '/documents/agm-notice-2024.pdf',
    excerpt: 'Notice of Annual General Meeting with details on resolutions and voting procedures.',
  },
]

const companyASXCode = 'YUG'

export default function ASXAnnouncements() {
  return (
    <>
      {/* Hero Section - Minimal */}
      <section className="relative bg-white py-32 md:py-40">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-display text-secondary-900 mb-6">
                ASX<br />
                Announcements
              </h1>
              <p className="text-xl text-gray-600 font-josefin mb-4">
                Stay up-to-date with the latest news and announcements from Yugo Metals ({companyASXCode})
              </p>
              <a
                href={`https://www.asx.com.au/markets/company/${companyASXCode}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm uppercase tracking-wider hover:gap-4 transition-all"
              >
                <span>View on ASX.com.au</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Announcements Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <AnimatedSection key={announcement.id} delay={index * 0.1}>
                <NewsCard
                  title={announcement.title}
                  date={announcement.date}
                  category={announcement.category}
                  excerpt={announcement.excerpt}
                  downloadUrl={announcement.file}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding-small bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-heading-lg text-secondary-900 mb-6">
                Subscribe for Updates
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-josefin">
                Receive email notifications when new announcements are released
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 max-w-md px-4 py-3 border-2 border-gray-300 focus:border-primary-600 focus:outline-none transition-colors"
                />
                <button className="btn-primary whitespace-nowrap">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
