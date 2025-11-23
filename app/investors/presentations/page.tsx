import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'

const presentations = [
  {
    id: '1',
    title: 'Investor Presentation - September 2024',
    description: 'Corporate presentation covering project updates and exploration results',
    date: '2024-09-15',
    file: '/documents/investor-presentation-sept-2024.pdf',
    thumbnail: '/images/presentation-thumb-1.jpg',
  },
  {
    id: '2',
    title: 'Doboj Project Exploration Update',
    description: 'Detailed presentation on the Doboj nickel-copper-cobalt project and exploration results in Bosnia & Herzegovina',
    date: '2024-08-20',
    file: '/documents/doboj-update-aug-2024.pdf',
    thumbnail: '/images/presentation-thumb-2.jpg',
  },
  {
    id: '3',
    title: 'Annual General Meeting Presentation 2024',
    description: 'Presentation delivered at the 2024 Annual General Meeting',
    date: '2024-11-30',
    file: '/documents/agm-presentation-2024.pdf',
    thumbnail: '/images/presentation-thumb-3.jpg',
  },
]

export default function Presentations() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/images/hero-mining-1.jpg)' }} />
        <div className="relative container text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider">
            Presentations
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-600">
                Access our latest investor and corporate presentations
              </p>
            </div>
          </AnimatedSection>

          {presentations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {presentations.map((presentation, index) => (
                <AnimatedSection key={presentation.id} delay={index * 0.1}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                    {presentation.thumbnail ? (
                      <div 
                        className="h-48 bg-gray-200 bg-cover bg-center"
                        style={{ backgroundImage: `url(${presentation.thumbnail})` }}
                      />
                    ) : (
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="p-6">
                      <p className="text-sm text-primary-600 font-semibold mb-2">
                        {new Date(presentation.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long' })}
                      </p>
                      <h3 className="text-xl font-bold mb-3">{presentation.title}</h3>
                      {presentation.description && (
                        <p className="text-gray-600 text-sm mb-4">{presentation.description}</p>
                      )}
                      <a
                        href={presentation.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded hover:bg-primary-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No presentations available at this time.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

