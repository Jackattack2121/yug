import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ASXAnnouncementList from '@/components/mining/ASXAnnouncementList'

const announcements = [
  {
    id: '1',
    title: 'Entitlement Issue Prospectus - Rights Issue',
    date: '28 September 2024',
    category: 'Capital Raising',
    file: '/documents/prospectus.pdf',
  },
  {
    id: '2',
    title: 'Exploration Update - Bosnia and Herzegovina Projects',
    date: '15 August 2024',
    category: 'Exploration',
    file: '/documents/announcement.pdf',
  },
  {
    id: '3',
    title: 'Quarterly Activities Report - Q3 2024',
    date: '31 July 2024',
    category: 'Company Update',
    file: '/documents/quarterly-report.pdf',
  },
  {
    id: '4',
    title: 'Exploration Program Commencement',
    date: '10 July 2024',
    category: 'Exploration',
    file: '/documents/drilling-results-july-2024.pdf',
  },
  {
    id: '5',
    title: 'Annual General Meeting Notice',
    date: '15 June 2024',
    category: 'Company Update',
    file: '/documents/agm-notice-2024.pdf',
  },
]

const companyASXCode = 'YUG'

export default function ASXAnnouncements() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/images/hero-mining-2.jpg)' }} />
        <div className="relative container text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider">
            ASX Announcements
          </h1>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-600">
                Stay up-to-date with the latest news and announcements from Yugo Metals ({companyASXCode})
              </p>
              <p className="text-sm text-gray-500 mt-2">
                View all announcements on{' '}
                <a
                  href={`https://www.asx.com.au/markets/company/${companyASXCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  ASX.com.au
                </a>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-5xl mx-auto">
              <ASXAnnouncementList announcements={announcements} />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

