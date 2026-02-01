'use client'

import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Image from 'next/image'

const projects = [
  {
    title: 'Doboj Project',
    slug: 'doboj',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Nickel, Copper, Cobalt',
    image: '/yugo_images/open-pit-mine-with-machines-2024-09-16-10-43-35-utc.jpg',
    number: '01',
    description: 'Primary nickel-copper-cobalt exploration project with significant historical mining activity.',
  },
  {
    title: 'Jezero Project',
    slug: 'jezero',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Precious Metals',
    image: '/yugo_images/flying-over-open-pit-gold-mine-quarry-in-rosia-m-2025-03-09-07-21-03-utc.jpg',
    number: '02',
    description: 'Precious metals exploration targeting gold and silver deposits in historic mining district.',
  },
  {
    title: 'Sočkovac Project',
    slug: 'sockovac',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Base Metals',
    image: '/yugo_images/aerial-view-over-the-sand-pit-2025-10-13-02-21-23-utc.jpg',
    number: '03',
    description: 'Base metals exploration project with potential for copper, lead, and zinc mineralization.',
  },
  {
    title: 'Sinjakovo Project',
    slug: 'sinjakovo',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Copper, Cobalt',
    image: '/yugo_images/yellow-excavator-digging-rocks-at-the-quarry-doin-2025-01-29-03-01-59-utc.jpg',
    number: '04',
    description: 'Copper-cobalt exploration project in historically productive mining region.',
  },
  {
    title: 'Čajniče Project',
    slug: 'cajnice',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Nickel, Precious Metals',
    image: '/yugo_images/natural-quarry-is-located-near-road-against-backdr-2025-01-29-05-43-49-utc.jpg',
    number: '05',
    description: 'Nickel and precious metals exploration with potential for multi-commodity mineralization.',
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-secondary-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/open-pit-mine-with-machines-2024-09-16-10-43-35-utc.jpg)' }}
        />
        <div className="relative z-10 container text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-wider text-primary-400 mb-4">
              Bosnia and Herzegovina Projects
            </p>
            <h1 className="text-display mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-josefin">
              Five high-potential exploration projects targeting critical metals for the energy transition
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 0.1}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="group grid md:grid-cols-2 gap-8 items-center hover-lift">
                    {/* Image */}
                    <div className={`relative h-[400px] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                      </div>
                      <div className="absolute bottom-8 left-8">
                        <div className="text-7xl font-black text-white opacity-30">{project.number}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div className="inline-block px-4 py-2 bg-primary-600 text-white text-xs uppercase tracking-wider font-semibold mb-4">
                        {project.type}
                      </div>
                      <h2 className="text-4xl font-black uppercase tracking-tight text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                        {project.location}
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6 font-josefin">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary-600 font-semibold uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transition-opacity">
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

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-heading-xl mb-8">
                Interested in Our<br />
                Exploration Programs?
              </h2>
              <p className="text-xl mb-12 font-josefin opacity-90">
                Stay updated with our latest exploration results and company developments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/investors/asx-announcements"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary-800 text-white font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-secondary-900 hover:shadow-lg text-sm"
                >
                  <span>View ASX Announcements</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-primary-600 text-sm"
                >
                  <span>Contact Us</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

