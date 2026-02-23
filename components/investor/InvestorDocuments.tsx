'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { Link } from '@/i18n/navigation'
import { HiOutlineDocumentDownload, HiOutlineArrowRight } from 'react-icons/hi'

export default function InvestorDocuments() {
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

        {/* Coming soon */}
        <AnimatedSection delay={0.05}>
          <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-200">
            <HiOutlineDocumentDownload className="w-12 h-12 text-gray-200 mb-4" />
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-600 bg-primary-50 border border-primary-200 mb-3">
              Coming Soon
            </span>
            <p className="text-sm text-gray-400 text-center max-w-xs">
              Our document library will be available here shortly. In the meantime, all ASX filings are available on the{' '}
              <a
                href="https://www.asx.com.au/markets/company/YUG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                ASX website
              </a>
              .
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
