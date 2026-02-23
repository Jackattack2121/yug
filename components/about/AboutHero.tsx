'use client'

import { useTranslations } from 'next-intl'
import AnimatedSection from '@/components/ui/AnimatedSection'

const METRICS = [
  { value: 'ASX: YUG', label: 'Listed Company' },
  { value: '5', label: 'Tenements' },
  { value: '100%', label: 'Ownership' },
  { value: '75+', label: 'Years Combined Experience' },
]

export default function AboutHero() {
  const t = useTranslations('company.about')

  return (
    <section className="relative bg-secondary-900 overflow-hidden min-h-[85vh] flex flex-col justify-end">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/yugo_images/lush-mountain-forest-in-bosnia-aerial-shot-2025-09-09-00-26-14-utc.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/70 to-secondary-900/30" />

      <div className="container relative z-10 pb-16 pt-40">
        <AnimatedSection>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-4">
            About Yugo Metals
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight max-w-3xl mb-6">
            Unlocking Critical Metals in the Heart of Europe
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            {t('introDescription')}
          </p>
        </AnimatedSection>

        {/* Metrics strip */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-white/5 border border-white/10 px-5 py-4">
                <p className="text-2xl font-bold text-white font-montserrat">{m.value}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
