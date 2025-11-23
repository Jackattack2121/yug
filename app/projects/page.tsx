import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import StatsBar from '@/components/ui/StatsBar'
import Link from 'next/link'

export const metadata = {
  title: 'Our Projects | Yugo Metals',
  description: 'Five high-potential projects in Bosnia and Herzegovina - nickel, copper, cobalt, and precious metals',
}

const projects = [
  {
    title: 'Doboj Project',
    slug: 'doboj',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Nickel, Copper, Cobalt',
    description: 'High-grade mineral discovery history with significant exploration potential in this proven mining region.',
    image: '/images/project-doboj.jpg',
    number: '01',
    year: '2024',
  },
  {
    title: 'Jezero Project',
    slug: 'jezero',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Precious Metals',
    description: 'Strategic exploration opportunity with historical mining activity and modern exploration potential.',
    image: '/images/project-jezero.jpg',
    number: '02',
    year: '2024',
  },
  {
    title: 'Sočkovac Project',
    slug: 'sockovac',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Base Metals',
    description: 'Prospective for base metals in the heart of the Balkans mining region.',
    image: '/images/project-sockovac.jpg',
    number: '03',
    year: '2024',
  },
  {
    title: 'Sinjakovo Project',
    slug: 'sinjakovo',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Copper, Cobalt',
    description: 'Historical high-grade mineralisation with modern systematic exploration planned.',
    image: '/images/project-sinjakovo.jpg',
    number: '04',
    year: '2024',
  },
  {
    title: 'Čajniče Project',
    slug: 'cajnice',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Nickel, Precious Metals',
    description: 'Never subjected to modern exploration techniques, offering significant discovery potential.',
    image: '/images/project-cajnice.jpg',
    number: '05',
    year: '2024',
  },
]

export default function Projects() {
  return (
    <>
      {/* Hero Section - Split Design */}
      <section className="grid md:grid-cols-[40%_60%] min-h-[70vh] bg-white">
        <div className="bg-primary-600 flex items-center justify-center p-12">
          <div className="text-white text-center">
            <div className="text-8xl mb-8">🌍</div>
            <p className="text-sm uppercase tracking-wider opacity-80">Bosnia and Herzegovina</p>
          </div>
        </div>
        <div className="flex items-center p-8 md:p-12 lg:p-20">
          <div>
            <AnimatedSection>
              <h1 className="text-display text-secondary-900 mb-6">
                Our Five<br />
                Projects in<br />
                Bosnia and<br />
                Herzegovina
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-2 font-josefin">
                Republic of Srpska
              </p>
              <p className="text-base text-gray-500">
                Nickel | Copper | Cobalt | Precious Metals
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar
        background="blue"
        stats={[
          { value: '5', label: 'Projects' },
          { value: '100%', label: 'Owned' },
          { value: 'EU', label: 'Accession State' },
        ]}
      />

      {/* Introduction */}
      <section className="section-padding-small bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-josefin">
                Yugo Metals owns 100% of five projects located in Republic of Srpska, 
                Bosnia and Herzegovina. The projects have a history of high-grade mineral 
                discovery and extraction and are prospective for nickel, copper, cobalt, 
                and precious metals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 0.1}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="group relative bg-white overflow-hidden hover-lift cursor-pointer">
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      </div>
                      {/* Project Number Overlay */}
                      <div className="absolute top-6 left-6 text-white">
                        <div className="text-xs uppercase tracking-wider opacity-80 mb-1">
                          {project.year}
                        </div>
                        <div className="text-6xl font-black opacity-30">{project.number}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary-600 font-semibold uppercase tracking-wider mb-4">
                        {project.type}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
                        <span>Explore Project</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding-small bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-heading-lg text-secondary-900 mb-6">
                Strategic Location in an EU Accession State
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-josefin">
                Rich mining history, pro-mining environment, and highly skilled workforce
              </p>
              <Link href="/why-yugo-metals" className="inline-flex items-center gap-2 text-primary-600 font-semibold uppercase tracking-wider hover:gap-4 transition-all">
                <span>Learn Why Yugo Metals</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
