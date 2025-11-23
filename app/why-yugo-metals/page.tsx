'use client'

import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import SplitSection from '@/components/ui/SplitSection'
import StatsBar from '@/components/ui/StatsBar'
import { HiOutlineCheckCircle } from 'react-icons/hi'

const reasons = [
  {
    icon: '📍',
    title: 'Strategic Location',
    description: 'Bosnia and Herzegovina is an EU accession state with a land border to the European Union, offering strategic access to European markets.',
  },
  {
    icon: '🏔️',
    title: 'Rich Mining History',
    description: 'The Balkans is one of the world\'s oldest mining areas, with proven mineral wealth and infrastructure.',
  },
  {
    icon: '💎',
    title: '100% Project Ownership',
    description: 'Yugo Metals owns 100% of all five projects, providing complete control and upside potential.',
  },
  {
    icon: '🔍',
    title: 'Underexplored Assets',
    description: 'Projects explored sporadically during Yugoslav regime but never subjected to modern systematic exploration.',
  },
  {
    icon: '🏭',
    title: 'Pro-Mining Environment',
    description: 'Highly skilled workforce, extensive existing infrastructure, and supportive regulatory environment.',
  },
  {
    icon: '⚡',
    title: 'Critical Metals Focus',
    description: 'Targeting nickel, copper, and cobalt - essential metals for the energy transition and European supply security.',
  },
]

const highlights = [
  '100% ownership of five high-potential projects',
  'Strategic location in EU accession state',
  'Historical high-grade mineral discoveries',
  'Never subjected to modern systematic exploration',
  'Rich mining history with pro-mining environment',
  'Focus on critical metals: nickel, copper, cobalt',
]

export default function WhyYugoMetals() {
  return (
    <>
      {/* Hero Section - Split */}
      <section className="grid md:grid-cols-2 min-h-[70vh] bg-white">
        <div className="bg-secondary-900 flex items-center justify-center p-12">
          <div className="w-full max-w-sm">
            <Image
              src="/yugo_logo.png"
              alt="Yugo Metals"
              width={400}
              height={160}
              className="w-full h-auto brightness-0 invert"
              priority
            />
          </div>
        </div>
        <div className="flex items-center p-8 md:p-12 lg:p-20">
          <div>
            <AnimatedSection>
              <h1 className="text-display text-secondary-900 mb-6">
                Why Yugo<br />
                Metals?
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-josefin">
                Exploring for metals on the doorstep of the European Union
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction Split */}
      <SplitSection
        fullHeight={false}
        leftContent={
          <div className="max-w-xl">
            <AnimatedSection>
              <h2 className="text-heading-lg text-secondary-900 mb-8">
                Located in Bosnia<br />
                and Herzegovina,<br />
                on the Doorstep<br />
                of the EU
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-josefin">
                Yugo Metals owns 100% of five projects in Bosnia and Herzegovina, on the doorstep 
                of the European Union. Our projects have a history of high-grade mineral discovery 
                and are prospective for nickel, copper, cobalt, and precious metals in one of the 
                world's oldest mining regions.
              </p>
            </AnimatedSection>
          </div>
        }
        rightContent={
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/yugo_images/lush-mountain-forest-in-bosnia-aerial-shot-2025-09-09-00-26-14-utc.jpg)' }}
          />
        }
      />

      {/* Stats */}
      <StatsBar
        background="blue"
        stats={[
          { value: '5', label: 'Projects', sublabel: '100% Owned' },
          { value: 'Ni, Cu, Co', label: 'Target Metals', sublabel: 'Critical' },
          { value: 'EU', label: 'Accession State', sublabel: 'Strategic' },
          { value: '3+', label: 'Years', sublabel: 'Operating' },
        ]}
      />

      {/* Reasons Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-heading-xl text-secondary-900 mb-4">
                Six Reasons to<br />
                Invest in Yugo Metals
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center hover-lift p-8 bg-white border border-gray-200 transition-all hover:border-primary-600 hover:shadow-lg">
                  <div className="text-6xl mb-6">{reason.icon}</div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-secondary-900">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image Divider - Inlaid Parallax */}
      <section 
        className="relative h-[250px] bg-cover bg-center bg-fixed overflow-hidden"
        style={{ 
          backgroundImage: 'url(/yugo_images/open-pit-mine-with-machines-2024-09-16-10-43-35-utc.jpg)',
          boxShadow: 'inset 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 -10px 30px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Modern Exploration Section with Square Image */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
            {/* Square Image Box */}
            <AnimatedSection className="w-full md:w-1/3 flex-shrink-0">
              <div 
                className="aspect-square bg-cover bg-center"
                style={{ backgroundImage: 'url(/yugo_images/the-truck-transports-the-minerals-from-the-top-vie-2025-10-16-12-14-08-utc.jpg)' }}
              >
              </div>
            </AnimatedSection>
            
            {/* Text Content */}
            <div className="flex-1">
              <AnimatedSection delay={0.2}>
                <h2 className="text-heading-lg text-secondary-900 mb-8">
                  Modern Exploration<br />
                  in a Historic<br />
                  Mining Region
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-josefin">
                  The Balkans has been a mining region for thousands of years. Our projects 
                  were explored during the Yugoslav era but never with modern systematic 
                  exploration techniques.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-josefin">
                  Yugo Metals is applying state-of-the-art exploration methods to unlock 
                  the potential of these historically productive mineral districts.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights with Background Image */}
      <section className="relative section-padding">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/yugo_images/green-dense-forests-surround-old-mining-factory-wi-2025-08-28-11-53-12-utc.jpg)' }}
        >
          <div className="absolute inset-0 bg-white/95"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-heading-lg text-secondary-900 mb-12 text-center">
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <AnimatedSection key={index} delay={index * 0.05}>
                    <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                      <HiOutlineCheckCircle className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{highlight}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/yugo_images/flying-over-open-pit-gold-mine-quarry-in-rosia-m-2025-03-09-07-21-03-utc.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-center justify-center p-12">
          <AnimatedSection className="w-full">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">
                Critical Metals for Europe
              </h2>
              <p className="text-2xl md:text-3xl opacity-90 font-josefin">
                Nickel, Copper, and Cobalt for the Energy Transition
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-heading-xl mb-8">
                Ready to Learn More?
              </h2>
              <p className="text-xl mb-12 font-josefin opacity-90">
                Explore our projects and stay updated with the latest announcements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/investors/asx-announcements" variant="secondary">
                  View ASX Announcements
                </Button>
                <Button 
                  href="/projects" 
                  variant="outline"
                  className="!bg-transparent !border-2 !border-white !text-white hover:!bg-secondary-900 hover:!text-white"
                >
                  Explore Our Projects
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
