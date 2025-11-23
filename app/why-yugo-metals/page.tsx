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
      <section className="grid md:grid-cols-[40%_60%] min-h-[70vh] bg-white">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center hover-lift p-8 bg-white border border-gray-200 transition-all hover:border-primary-600">
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

      {/* Key Highlights */}
      <section className="section-padding bg-primary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-heading-lg text-secondary-900 mb-12 text-center">
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <HiOutlineCheckCircle className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-heading-xl mb-8">
                Stay Informed
              </h2>
              <p className="text-xl mb-12 font-josefin opacity-90">
                Subscribe to receive the latest news and updates from Yugo Metals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/investors/asx-announcements" variant="primary">
                  View ASX Announcements
                </Button>
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-secondary-900">
                  <span>Contact Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
