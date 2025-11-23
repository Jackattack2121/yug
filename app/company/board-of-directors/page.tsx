import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'

const directors = [
  {
    id: '1',
    name: 'John Smith',
    position: 'Executive Chairman',
    bio: '<p>John Smith brings over 30 years of experience in the mining industry, having held senior executive positions with several ASX-listed mining companies. He has extensive experience in corporate strategy, capital markets, and project development.</p><p>John has been instrumental in advancing multiple mining projects from exploration through to production, with a particular focus on critical minerals and rare earth elements.</p>',
    photo: '/images/board-member-1.jpg',
    email: 'john.smith@lykosmetals.com',
    linkedin_url: 'https://linkedin.com/in/johnsmith',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    position: 'Managing Director',
    bio: '<p>Sarah Johnson is a geologist with over 25 years of experience in mineral exploration and project management. She has led exploration programs across Europe, with a strong track record of discovery and resource definition.</p><p>Sarah holds a Master of Science in Geology and is a member of the Australian Institute of Geoscientists. She has been with Yugo Metals since its inception and has played a key role in the Company\'s exploration success.</p>',
    photo: '/images/board-member-2.jpg',
    email: 'sarah.johnson@lykosmetals.com',
    linkedin_url: 'https://linkedin.com/in/sarahjohnson',
  },
  {
    id: '3',
    name: 'Michael Chen',
    position: 'Non-Executive Director',
    bio: '<p>Michael Chen is a finance professional with extensive experience in corporate finance, capital raising, and investor relations. He has worked with numerous ASX-listed companies, helping them navigate capital markets and build strong investor relationships.</p><p>Michael holds a Bachelor of Commerce and is a Chartered Accountant. He brings valuable financial expertise and market knowledge to the Board.</p>',
    photo: '/images/board-member-3.jpg',
    email: 'michael.chen@lykosmetals.com',
    linkedin_url: 'https://linkedin.com/in/michaelchen',
  },
  {
    id: '4',
    name: 'Emma Thompson',
    position: 'Non-Executive Director',
    bio: '<p>Emma Thompson has over 20 years of experience in corporate governance, risk management, and sustainability. She has served on the boards of several ASX-listed companies and brings a strong focus on ESG principles and stakeholder engagement.</p><p>Emma holds a Bachelor of Laws and is a Graduate of the Australian Institute of Company Directors. She is committed to ensuring Yugo Metals operates to the highest standards of corporate governance and environmental responsibility.</p>',
    photo: '/images/board-member-4.jpg',
    email: 'emma.thompson@lykosmetals.com',
    linkedin_url: 'https://linkedin.com/in/emmathompson',
  },
]

export default function BoardOfDirectors() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/hero-mining-2.jpg)' }}
        />
        <div className="relative container text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider">
            Board of Directors
          </h1>
        </div>
      </section>

      {/* Directors Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-600 leading-relaxed">
                Our board brings together decades of combined experience in mining exploration, 
                corporate governance, and capital markets. Their leadership guides Yugo Metals' 
                strategic direction and commitment to delivering value to shareholders.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {directors.map((director, index) => (
              <AnimatedSection key={director.id} delay={index * 0.1}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="relative h-96 bg-gray-200">
                    {director.photo ? (
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${director.photo})` }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                        <span className="text-6xl text-gray-500">👤</span>
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">
                      {director.name}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-4">
                      {director.position}
                    </p>
                    <div
                      className="text-gray-600 leading-relaxed prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: director.bio }}
                    />
                    {(director.email || director.linkedin_url) && (
                      <div className="mt-4 flex gap-4">
                        {director.email && (
                          <a
                            href={`mailto:${director.email}`}
                            className="text-primary-600 hover:text-primary-700 text-sm"
                          >
                            ✉️ Email
                          </a>
                        )}
                        {director.linkedin_url && (
                          <a
                            href={director.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 text-sm"
                          >
                            🔗 LinkedIn
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

