'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import InvestorDisclaimer from '@/components/investor/InvestorDisclaimer'
import ProjectCard from '@/components/projects/ProjectCard'
import AssetPortfolioTable from '@/components/projects/AssetPortfolioTable'
import ProjectTimeline from '@/components/projects/ProjectTimeline'
import JurisdictionSection from '@/components/projects/JurisdictionSection'
import ImageLightbox from '@/components/ui/ImageLightbox'
import { ALL_PROJECTS, EXPLORATION_TIMELINE } from '@/lib/project-data'

export default function ProjectsPage() {
  const locale = useLocale()
  const [mapOpen, setMapOpen] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-secondary-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/open-pit-mine-with-machines-2024-09-16-10-43-35-utc.jpg)' }}
        />
        <div className="relative z-10 container text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-wider text-primary-400 mb-4">
              Bosnia and Herzegovina
            </p>
            <h1 className="text-display mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-josefin">
              Three exploration projects comprising five tenements across 190km² in Bosnia and Herzegovina
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Map */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div
                className="relative w-full cursor-zoom-in group"
                onClick={() => setMapOpen(true)}
                title="Click to enlarge"
              >
                <img
                  src="/new_images/map.png"
                  alt="Project Location Overview Map"
                  className="w-full h-auto transition-opacity duration-200 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm0 0l4 4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 8v6M8 11h6" />
                    </svg>
                    Enlarge
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Lightbox */}
      {mapOpen && (
        <ImageLightbox
          src="/new_images/map.png"
          alt="Project Location Overview Map"
          onClose={() => setMapOpen(false)}
        />
      )}

      {/* Asset Portfolio Table */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <AssetPortfolioTable />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Cards */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
                Portfolio
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat">
                Explore Our Projects
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ALL_PROJECTS.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Exploration Timeline */}
      <ProjectTimeline
        items={EXPLORATION_TIMELINE}
        title="Exploration Timeline"
        subtitle="Planned 2025/2026 exploration activities across the portfolio"
      />

      {/* Jurisdiction */}
      <JurisdictionSection />

      {/* CTA */}
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
                <a
                  href="https://www.asx.com.au/markets/trade-our-cash-market/announcements.yug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary-800 text-white font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-secondary-900 hover:shadow-lg text-sm"
                >
                  <span>View ASX Announcements</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
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

      {/* Disclaimer */}
      <InvestorDisclaimer forwardLooking competentPerson sharePrice={false} notAdvice={false} />
    </>
  )
}
