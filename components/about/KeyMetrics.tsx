'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

const METRICS = [
  { value: '5', label: 'Exploration Tenements', sublabel: '190km² — 100% Owned' },
  { value: '75+', label: 'Years Combined Experience', sublabel: 'Board & Management' },
  { value: 'EU', label: 'Accession State', sublabel: 'Strategic Location' },
  { value: 'Au, Sb, Ni, Cu', label: 'Target Commodities', sublabel: 'Critical Metals' },
  { value: '3+', label: 'Years Operating', sublabel: 'Since Listing' },
  { value: 'BiH', label: 'Country of Operations', sublabel: 'Bosnia & Herzegovina' },
]

export default function KeyMetrics() {
  return (
    <section className="py-16 bg-secondary-900 overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: 'url(/yugo_images/open-pit-mine-with-machines-2024-09-16-10-43-35-utc.jpg)' }}
      />
      <div className="container relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className="bg-white/5 border border-white/10 px-5 py-5 text-center"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <p className="text-2xl lg:text-3xl font-bold text-white font-montserrat leading-tight">
                  {m.value}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mt-2">
                  {m.label}
                </p>
                {m.sublabel && (
                  <p className="text-[10px] text-primary-400 mt-0.5">{m.sublabel}</p>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
