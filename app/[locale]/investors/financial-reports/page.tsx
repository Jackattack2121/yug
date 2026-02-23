'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SAMPLE_DOCUMENTS, DOCUMENT_CATEGORIES } from '@/lib/investor-data'
import { HiOutlineDocumentDownload } from 'react-icons/hi'

const CATEGORY_COLORS: Record<string, string> = {
  'annual-report': 'bg-blue-600',
  'quarterly-report': 'bg-amber-500',
  presentation: 'bg-emerald-600',
  governance: 'bg-purple-600',
  prospectus: 'bg-red-600',
  other: 'bg-gray-600',
}

const CATEGORY_ICONS: Record<string, string> = {
  'annual-report': 'AR',
  'quarterly-report': 'QR',
  presentation: 'PR',
  governance: 'GV',
  prospectus: 'PS',
  other: 'DC',
}

export default function FinancialReportsPage() {
  const t = useTranslations('investors.financialReports')
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? SAMPLE_DOCUMENTS
    : SAMPLE_DOCUMENTS.filter((d) => d.category === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary-900 py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/mineral-resource-estimate-report-2023-05-28-08-30-13-utc.jpg)' }}
        />
        <div className="absolute inset-0 bg-primary-600/60" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-heading-lg text-white mb-4">{t('heroTitle')}</h1>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {t('heroSubtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          {/* Filter tabs */}
          <AnimatedSection>
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

          {/* Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((doc, i) => (
              <AnimatedSection key={doc.id} delay={i * 0.03}>
                <a
                  href={doc.downloadUrl}
                  className="group flex items-start gap-4 bg-white border border-gray-200 p-5 hover:border-primary-600 hover:shadow-md transition-all"
                >
                  <div className={`flex-shrink-0 w-12 h-12 ${CATEGORY_COLORS[doc.category] || 'bg-gray-600'} text-white flex items-center justify-center text-xs font-bold`}>
                    {CATEGORY_ICONS[doc.category] || 'DC'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors leading-snug line-clamp-2">
                      {doc.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                      <time dateTime={doc.date} className="text-xs text-gray-400">
                        {new Date(doc.date).toLocaleDateString('en-AU', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </time>
                      {doc.fileSize && <span className="text-xs text-gray-400">{doc.fileSize}</span>}
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

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500">No documents found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
