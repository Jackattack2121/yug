'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import type { TimelineItem } from '@/lib/project-data'

interface ProjectTimelineProps {
  items: TimelineItem[]
  title?: string
  subtitle?: string
}

export default function ProjectTimeline({
  items,
  title = 'Exploration Timeline',
  subtitle,
}: ProjectTimelineProps) {
  return (
    <section className="section-padding bg-secondary-900 overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: 'url(/yugo_images/natural-quarry-is-located-near-road-against-backdr-2025-01-29-05-43-49-utc.jpg)' }}
      />
      <div className="container relative z-10">
        <AnimatedSection>
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-2">
              Planned Activities
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-white/60 mt-2 max-w-2xl">{subtitle}</p>
            )}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          {items.map((item, i) => (
            <AnimatedSection key={`${item.period}-${item.title}`} delay={i * 0.08}>
              <div className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-600 border-2 border-secondary-900 rounded-full mt-1" />

                {/* Spacer for alternating */}
                <div className="hidden md:block flex-1" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={items.length * 0.08}>
          <p className="text-xs text-white/40 mt-8 text-center italic">
            Timeline reflects planned activities as disclosed in October 2025 investor presentation. Actual timing may vary subject to regulatory approvals, weather, and funding.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
