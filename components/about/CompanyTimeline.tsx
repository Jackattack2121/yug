'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

const MILESTONES = [
  {
    year: '2021',
    title: 'Company Founded',
    description: 'Yugo Metals incorporated with the vision of unlocking critical metals potential in Bosnia and Herzegovina.',
  },
  {
    year: '2022',
    title: 'Project Acquisition',
    description: 'Secured 100% ownership of five high-potential exploration projects across the Republic of Srpska.',
  },
  {
    year: '2023',
    title: 'ASX Listing',
    description: 'Successfully listed on the Australian Securities Exchange (ASX: YUG), raising initial capital for exploration programs.',
  },
  {
    year: '2024',
    title: 'Exploration Programs Commence',
    description: 'Initiated systematic exploration across all five projects, including geochemical sampling and geophysical surveys.',
  },
  {
    year: '2025',
    title: 'Drilling & Results',
    description: 'Advanced exploration with targeted diamond drilling programs and ongoing field activities at priority targets.',
  },
  {
    year: '2026',
    title: 'Expanding the Portfolio',
    description: 'Continuing exploration momentum with expanded drilling programs and resource definition activities.',
  },
]

export default function CompanyTimeline() {
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
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat">
              Company Milestones
            </h2>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          {MILESTONES.map((milestone, i) => (
            <AnimatedSection key={milestone.year} delay={i * 0.08}>
              <div className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {milestone.description}
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
      </div>
    </section>
  )
}
