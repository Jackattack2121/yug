'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineNewspaper, HiOutlineExternalLink, HiOutlineFilter } from 'react-icons/hi'

// Mock media coverage data - in production, fetch from Directus
const mediaArticles = [
  {
    id: '1',
    title: 'Yugo Metals Commences Exploration in Bosnia and Herzegovina',
    publication: 'The West Australian',
    date: '2024-10-15',
    summary: 'Yugo Metals announces systematic exploration program across five projects in Bosnia and Herzegovina, targeting critical metals for the energy transition.',
    url: 'https://example.com/article1',
    image: '/images/media-placeholder.jpg',
    year: 2024,
  },
  {
    id: '2',
    title: 'WA Mining Company Eyes Critical Minerals Boom',
    publication: 'Australian Financial Review',
    date: '2024-09-22',
    summary: 'With global demand for critical minerals soaring, Perth-based Yugo Metals is positioning itself to supply European markets from Bosnia and Herzegovina.',
    url: 'https://example.com/article2',
    image: '/images/media-placeholder.jpg',
    year: 2024,
  },
  {
    id: '3',
    title: 'Balkans Region Emerges as Critical Minerals Hub',
    publication: 'Mining News',
    date: '2024-08-30',
    summary: 'The Balkans region is attracting increased attention from explorers, with Yugo Metals leading modern systematic exploration in Bosnia and Herzegovina.',
    url: 'https://example.com/article3',
    image: '/images/media-placeholder.jpg',
    year: 2024,
  },
  {
    id: '4',
    title: 'European Critical Minerals Strategy Gains Momentum',
    publication: 'Resource Stocks',
    date: '2024-07-18',
    summary: 'Yugo Metals advances its portfolio of five projects targeting nickel, copper, cobalt, and precious metals in the EU accession state of Bosnia and Herzegovina.',
    url: 'https://example.com/article4',
    image: '/images/media-placeholder.jpg',
    year: 2024,
  },
  {
    id: '5',
    title: 'ASX-Listed Explorer Secures Key Tenements',
    publication: 'Small Caps',
    date: '2024-06-05',
    summary: 'Yugo Metals strengthens its position in Bosnia and Herzegovina with 100% ownership of five high-potential projects.',
    url: 'https://example.com/article5',
    image: '/images/media-placeholder.jpg',
    year: 2024,
  },
  {
    id: '6',
    title: 'Critical Minerals: The New Gold Rush',
    publication: 'Business News',
    date: '2023-12-10',
    summary: 'As the world transitions to clean energy, companies like Yugo Metals are at the forefront of securing European critical mineral supply chains.',
    url: 'https://example.com/article6',
    image: '/images/media-placeholder.jpg',
    year: 2023,
  },
]

export default function MediaCoverage() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all')

  const years = ['all', ...Array.from(new Set(mediaArticles.map(article => article.year))).sort((a, b) => b - a)]

  const filteredArticles = selectedYear === 'all' 
    ? mediaArticles 
    : mediaArticles.filter(article => article.year === selectedYear)

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

      {/* Filter Section */}
      <section className="section-padding-small bg-gray-50 border-b border-gray-200">
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <HiOutlineFilter className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Filter by Year:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year as number | "all")}
                    className={`px-4 py-2 font-semibold text-sm transition-all uppercase tracking-wider ${
                      selectedYear === year
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-600'
                    }`}
                  >
                    {year === 'all' ? 'All Years' : year}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-heading-lg text-secondary-900 mb-4">
              {selectedYear === 'all' ? 'All Media Coverage' : `Media Coverage - ${selectedYear}`}
            </h2>
            <p className="text-gray-600 mb-8">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredArticles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.05}>
                <article className="bg-white border-2 border-gray-200 overflow-hidden hover:border-primary-600 transition-all duration-300 group">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <HiOutlineNewspaper className="w-20 h-20 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Publication & Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                        {article.publication}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(article.date).toLocaleDateString('en-AU', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-secondary-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Read Article Link */}
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-600 font-semibold text-sm uppercase tracking-wider hover:text-primary-700 transition-colors"
                    >
                      <span>Read Article</span>
                      <HiOutlineExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <AnimatedSection>
              <div className="text-center py-12">
                <HiOutlineNewspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No articles found for the selected year.</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section-padding bg-primary-600 text-white text-center">
        <div className="container max-w-3xl mx-auto">
          <AnimatedSection>
            <HiOutlineNewspaper className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-heading-xl mb-8">
              Stay Updated
            </h2>
            <p className="text-xl mb-12 font-josefin opacity-90">
              Subscribe to receive notifications when Yugo Metals is mentioned in the media
            </p>
            <a
              href="/investors#subscribe"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              Subscribe Now
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

