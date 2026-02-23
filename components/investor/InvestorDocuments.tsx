'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SAMPLE_DOCUMENTS, DOCUMENT_CATEGORIES } from '@/lib/investor-data'
import { Link } from '@/i18n/navigation'
import { HiOutlineDocumentDownload, HiOutlineArrowRight } from 'react-icons/hi'

const CATEGORY_ICONS: Record<string, string> = {
  'annual-report': 'AR',
  'quarterly-report': 'QR',
  presentation: 'PR',
  governance: 'GV',
  prospectus: 'PS',
  other: 'DC',
}

const CATEGORY_COLORS: Record<string, string> = {
  'annual-report': 'bg-blue-600',
  'quarterly-report': 'bg-amber-500',
  presentation: 'bg-emerald-600',
  governance: 'bg-purple-600',
  prospectus: 'bg-red-600',
  other: 'bg-gray-600',
}

export default function InvestorDocuments() {
  const [activeFilter, setActiveFilter] = useState('all')
  const documents = SAMPLE_DOCUMENTS

  const filtered = activeFilter === 'all'
    ? documents
    : documents.filter((d) => d.category === activeFilter)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
                Document Library
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat">
                Key Documents
              </h2>
            </div>
            <Link
              href="/investors/financial-reports"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
            >
              View All Reports
              <HiOutlineArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-8">
            {DOCUMENT_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === cat.key
                    ? 'bg-primary-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-600 hover:text-primary-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Documents grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((doc, i) => (
            <AnimatedSection key={doc.id} delay={i * 0.03}>
              <a
                href={doc.downloadUrl}
                className="group flex items-start gap-4 bg-white border border-gray-200 p-5 hover:border-primary-600 hover:shadow-md transition-all"
              >
                {/* Category badge */}
                <div className={`flex-shrink-0 w-12 h-12 ${CATEGORY_COLORS[doc.category] || 'bg-gray-600'} text-white flex items-center justify-center text-xs font-bold`}>
                  {CATEGORY_ICONS[doc.category] || 'DC'}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors leading-snug line-clamp-2">
                    {doc.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-gray-400">
                      {new Date(doc.date).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    {doc.fileSize && (
                      <span className="text-xs text-gray-400">{doc.fileSize}</span>
                    )}
                    {doc.fileType && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-1.5 py-0.5">
                        {doc.fileType}
                      </span>
                    )}
                  </div>
                </div>

                <HiOutlineDocumentDownload className="w-5 h-5 text-gray-300 group-hover:text-primary-600 transition-colors flex-shrink-0 mt-1" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
