'use client'

import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { HiOutlineCheckCircle } from 'react-icons/hi'

const reasons = [
  {
    title: 'Strategic Location',
    description: 'Bosnia and Herzegovina is an EU accession state with a land border to the European Union, offering strategic access to European markets.',
  },
  {
    title: 'Rich Mining History',
    description: 'The Balkans is one of the world\'s oldest mining areas, with proven mineral wealth and infrastructure.',
  },
  {
    title: '100% Project Ownership',
    description: 'Yugo Metals owns 100% of all five projects, providing complete control and upside potential.',
  },
  {
    title: 'Underexplored Assets',
    description: 'Projects explored sporadically during Yugoslav regime but never subjected to modern systematic exploration.',
  },
  {
    title: 'Pro-Mining Environment',
    description: 'Highly skilled workforce, extensive existing infrastructure, and supportive regulatory environment.',
  },
  {
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
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/hero-mining-1.jpg)' }}
        />
        <div className="relative container text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-4">
            Why Yugo Metals?
          </h1>
          <p className="text-xl md:text-2xl font-josefin italic">
            Exploring for metals on the doorstep of the European Union
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-600 leading-relaxed">
                Yugo Metals owns 100% of five projects in Bosnia and Herzegovina, on the doorstep 
                of the European Union. Our projects have a history of high-grade mineral discovery 
                and are prospective for nickel, copper, cobalt, and precious metals in one of the 
                world's oldest mining regions.
              </p>
            </div>
          </AnimatedSection>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 0.1}>
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-primary-600 mb-4">
                    <HiOutlineCheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-3">
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

      {/* Key Highlights Section */}
      <section className="section-padding bg-primary-50">
        <div className="container">
          <AnimatedSection>
            <SectionTitle title="Key Highlights" centered />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <HiOutlineCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1 mr-4" />
                    <span className="text-lg text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
                Stay Informed
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to receive the latest news and updates from Yugo Metals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/investors/asx-announcements" variant="primary">
                  View ASX Announcements
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

