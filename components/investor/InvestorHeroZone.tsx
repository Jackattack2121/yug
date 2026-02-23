'use client'

import { useTranslations } from 'next-intl'
import TradingViewWidget from './TradingViewWidget'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { KEY_METRICS } from '@/lib/investor-data'
import { HiOutlineDownload, HiOutlineExternalLink } from 'react-icons/hi'
import { Link } from '@/i18n/navigation'

export default function InvestorHeroZone() {
  const t = useTranslations('investors')

  return (
    <section className="relative bg-secondary-900 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(/yugo_images/open-pit-mine-with-machines-2024-09-16-10-43-35-utc.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 to-secondary-900" />

      <div className="container relative z-10 pt-32 md:pt-40 pb-12 md:pb-16">
        {/* Top row: Title + ASX badge */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-3">
                ASX: YUG
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight">
                {t('centre.title')}
              </h1>
              <p className="text-base text-white/70 mt-3 max-w-xl">
                {t('centre.subtitle')}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/investors/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold uppercase tracking-wider hover:bg-primary-700 transition-colors"
              >
                {t('centre.contactIrButton')}
              </Link>
              <Link
                href="/investors/fact-sheet"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <HiOutlineDownload className="w-4 h-4" />
                {t('centre.downloadFactSheet')}
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Metrics Strip */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {KEY_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="bg-white/5 border border-white/10 px-5 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                  {metric.label}
                </p>
                <p className="text-xl font-bold text-white font-montserrat">
                  {metric.value}
                </p>
                {metric.sublabel && (
                  <p className="text-xs text-primary-400 mt-0.5">{metric.sublabel}</p>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* TradingView Widget */}
        <AnimatedSection delay={0.15}>
          <div className="bg-white/5 border border-white/10 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white/80">
                  Live Share Price
                </h2>
                <p className="text-xs text-white/40 mt-0.5">
                  20-minute delayed data via TradingView
                </p>
              </div>
              <a
                href="https://www.asx.com.au/markets/company/YUG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 font-semibold transition-colors"
              >
                View on ASX
                <HiOutlineExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="bg-white rounded" style={{ height: '380px' }}>
              <TradingViewWidget symbol="ASX:YUG|1M|AUD" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
