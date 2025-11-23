'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSlider from '@/components/ui/HeroSlider'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import ProjectCard from '@/components/mining/ProjectCard'
import ASXAnnouncementList from '@/components/mining/ASXAnnouncementList'
import AnimatedSection from '@/components/ui/AnimatedSection'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const heroSlides = [
  {
    title: 'European Metals Exploration and Development',
    subtitle: 'Yugo Metals',
    description: 'Exploring for metals on the doorstep of the European Union',
    video: '/herobg.mp4',
  },
  {
    title: 'Five High-Potential Projects in Bosnia and Herzegovina',
    subtitle: 'Nickel, Copper, Cobalt, and Precious Metals',
    description: 'Strategic location in an EU accession state with rich mining history',
    video: '/herobg2.mp4',
  },
]

const projects = [
  {
    title: 'Doboj Project',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Nickel, Copper, Cobalt',
    description: 'High-grade mineral discovery history with significant exploration potential in this proven mining region.',
    image: '/images/project-doboj.jpg',
    href: '/projects/doboj',
  },
  {
    title: 'Jezero Project',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Precious Metals',
    description: 'Strategic exploration opportunity with historical mining activity and modern exploration potential.',
    image: '/images/project-jezero.jpg',
    href: '/projects/jezero',
  },
  {
    title: 'Sočkovac Project',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Base Metals',
    description: 'Prospective for base metals in the heart of the Balkans mining region.',
    image: '/images/project-sockovac.jpg',
    href: '/projects/sockovac',
  },
  {
    title: 'Sinjakovo Project',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Copper, Cobalt',
    description: 'Historical high-grade mineralisation with modern systematic exploration planned.',
    image: '/images/project-sinjakovo.jpg',
    href: '/projects/sinjakovo',
  },
  {
    title: 'Čajniče Project',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Nickel, Precious Metals',
    description: 'Never subjected to modern exploration techniques, offering significant discovery potential.',
    image: '/images/project-cajnice.jpg',
    href: '/projects/cajnice',
  },
]

const announcements = [
  {
    id: '1',
    title: 'Entitlement Issue Prospectus - Rights Issue',
    date: '28 September 2024',
    category: 'Capital Raising',
    file: '/documents/prospectus.pdf',
  },
  {
    id: '2',
    title: 'High Grade Rare Earth Discovery at Mick Well',
    date: '15 August 2024',
    category: 'Exploration',
    file: '/documents/announcement.pdf',
  },
  {
    id: '3',
    title: 'Quarterly Activities Report',
    date: '31 July 2024',
    category: 'Company Update',
    file: '/documents/quarterly-report.pdf',
  },
]

export default function Home() {
  const parallaxVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (parallaxVideoRef.current) {
      gsap.to(parallaxVideoRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxVideoRef.current.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }
  }, [])

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* Why Yugo Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
                A Mining Company Focused on European Critical Metals
              </h3>
              <div className="w-16 h-1 bg-primary-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed font-josefin mb-8">
                Yugo Metals owns 100% of five projects in Bosnia and Herzegovina, 
                on the doorstep of the European Union. Our projects have a history 
                of high-grade mineral discovery and are prospective for nickel, 
                copper, cobalt, and precious metals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/why-yugo-metals" variant="primary">
                  Why Yugo Metals
                </Button>
                <Button href="/projects" variant="outline">
                  View Projects
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Parallax Video Section */}
      <section className="relative h-[350px] overflow-hidden flex items-center justify-center">
        <video
          ref={parallaxVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-[120%] object-cover"
          style={{ top: '-10%' }}
        >
          <source src="/parallax.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 container text-center px-4">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wider">
            "Exploring for Metals on the Doorstep of the EU"
          </h2>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <SectionTitle
              title="Our Projects"
              subtitle="Significant discovery and known mineralisation across strategic locations"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* ASX Announcements Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <SectionTitle
              title="Latest ASX Announcements"
              subtitle="Stay up-to-date with our latest news and developments"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <ASXAnnouncementList announcements={announcements} limit={3} />
            </div>

            <div className="text-center mt-12">
              <Button href="/investors/asx-announcements" variant="outline">
                View All Announcements
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Prospectus CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-800 to-primary-600 text-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
                Investor Information
              </h2>
              <p className="text-xl mb-8 font-josefin">
                Access our prospectus, investor presentations, and company reports
              </p>
              <Button href="/prospectus" variant="secondary">
                View Prospectus
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
