'use client'

import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'

const STORY_BLOCKS = [
  {
    label: 'The Opportunity',
    heading: 'Why the Balkans?',
    body: 'Bosnia and Herzegovina sits at the geological crossroads of Europe — a region where tectonic forces have concentrated gold, antimony, nickel, and copper deposits over hundreds of millions of years. The Balkans is one of the world\'s oldest mining regions, with activity dating back to Roman times, yet modern systematic exploration has barely scratched the surface.',
    body2: 'When Yugo Metals\' founders studied the region, they saw what few others had recognised: a vast, mineral-rich terrain on the doorstep of the European Union, explored only sporadically during the Yugoslav era and never subjected to the modern techniques that have unlocked major discoveries elsewhere.',
    image: '/yugo_images/bosnia-and-herzegovina-jablanica-2025-08-28-10-01-46-utc.jpg',
    imageAlt: 'Bosnia and Herzegovina landscape showing the geological terrain of the Balkans',
    reverse: false,
  },
  {
    label: 'The Approach',
    heading: 'Modern Science, Historic Ground',
    body: 'Yugo Metals applies systematic, data-driven exploration methodology to terrain that has never seen it before. Our technical team combines satellite imagery analysis, geochemical sampling, geophysical surveys, and targeted diamond drilling to build comprehensive geological models of each project area.',
    body2: 'This approach — applying modern techniques to historically productive but underexplored ground — is how major discoveries are made. The region boasts excellent existing infrastructure, a highly skilled workforce with deep mining expertise, and a supportive regulatory environment.',
    image: '/yugo_images/aerial-view-motor-grader-civil-at-construction-sit-2025-07-08-16-02-40-utc.jpg',
    imageAlt: 'Active exploration site showing modern mining equipment and techniques',
    reverse: true,
  },
  {
    label: 'The Vision',
    heading: 'Building Towards Discovery',
    body: 'Our goal is clear: discover and define significant mineral resources that position Yugo Metals as a key player in Europe\'s critical metals supply chain. With the EU increasingly focused on securing domestic mineral supplies for the energy transition, the strategic value of our portfolio grows every year.',
    body2: 'Five projects, 100% owned, in an EU accession state. Each targeting metals essential to the global energy transition — gold, antimony, nickel, and copper. This is exploration at the right time, in the right place, with the right team.',
    image: '/yugo_images/beautiful-nature-of-bosnia-and-herzegovina-travel-2025-08-29-06-16-13-utc.jpg',
    imageAlt: 'Panoramic view of Bosnia and Herzegovina\'s mineral-rich landscape',
    reverse: false,
  },
]

export default function CompanyStory() {
  return (
    <section className="bg-white">
      {STORY_BLOCKS.map((block, i) => (
        <div
          key={block.label}
          className={`grid grid-cols-1 lg:grid-cols-2 ${block.reverse ? 'lg:direction-rtl' : ''}`}
        >
          {/* Text side */}
          <div className={`flex items-center p-8 md:p-12 lg:p-20 ${block.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <AnimatedSection delay={i * 0.05}>
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-3">
                  {block.label}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat mb-6 leading-tight">
                  {block.heading}
                </h2>
                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <p>{block.body}</p>
                  <p>{block.body2}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Image side */}
          <div className={`relative min-h-[400px] lg:min-h-[500px] ${block.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <Image
              src={block.image}
              alt={block.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      ))}
    </section>
  )
}
