'use client'

import { useRef, useEffect, useState } from 'react'
import { useLocale } from 'next-intl'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SplitSection from '@/components/ui/SplitSection'
import TextBoxed from '@/components/ui/TextBoxed'
import StatsBar from '@/components/ui/StatsBar'
import NewsCard from '@/components/ui/NewsCard'
import Link from 'next/link'

const projects = [
  {
    title: 'Doboj Project',
    slug: 'doboj',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Gold, Antimony, Nickel, Copper',
    image: '/yugo_images/open-pit-mine-with-machines-2024-09-16-10-43-35-utc.jpg',
    number: '01',
  },
  {
    title: 'Jezero Project',
    slug: 'jezero',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Precious Metals',
    image: '/yugo_images/flying-over-open-pit-gold-mine-quarry-in-rosia-m-2025-03-09-07-21-03-utc.jpg',
    number: '02',
  },
  {
    title: 'Sočkovac Project',
    slug: 'sockovac',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Base Metals',
    image: '/yugo_images/aerial-view-over-the-sand-pit-2025-10-13-02-21-23-utc.jpg',
    number: '03',
  },
  {
    title: 'Sinjakovo Project',
    slug: 'sinjakovo',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Copper, Cobalt',
    image: '/yugo_images/yellow-excavator-digging-rocks-at-the-quarry-doin-2025-01-29-03-01-59-utc.jpg',
    number: '04',
  },
  {
    title: 'Čajniče Project',
    slug: 'cajnice',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Nickel, Precious Metals',
    image: '/yugo_images/natural-quarry-is-located-near-road-against-backdr-2025-01-29-05-43-49-utc.jpg',
    number: '05',
  },
]

const latestUpdates = [
  {
    title: 'Quarterly Activities Report',
    date: 'October 27, 2024',
    category: 'Company Update',
    excerpt: 'Overview of exploration activities across all five Bosnia and Herzegovina projects.',
    image: '/yugo_images/aerial-view-motor-grader-civil-at-construction-sit-2025-07-08-16-02-40-utc.jpg',
    href: '/investors/asx-announcements',
  },
  {
    title: 'Exploration Program Update',
    date: 'October 15, 2024',
    category: 'Exploration',
    excerpt: 'Systematic exploration program commences across Doboj and Jezero projects.',
    image: '/yugo_images/the-truck-transports-the-minerals-from-the-top-vie-2025-10-16-12-14-08-utc.jpg',
    href: '/investors/asx-announcements',
  },
  {
    title: 'European Critical Metals Strategy',
    date: 'October 1, 2024',
    category: 'Strategy',
    excerpt: 'Yugo Metals positions for European energy transition with critical metals portfolio.',
    image: '/yugo_images/green-dense-forests-surround-old-mining-factory-wi-2025-08-28-11-53-12-utc.jpg',
    href: '/investors/media',
  },
]

const rotatingTexts = [
  'Gold, Antimony, Nickel, Copper',
  'Precious, Base and Battery Metals',
  'Polymetallic Exploration',
]

export default function Home() {
  const locale = useLocale()
  const parallaxVideoRef = useRef<HTMLVideoElement>(null)
  const heroVideo1Ref = useRef<HTMLVideoElement>(null)
  const heroVideo2Ref = useRef<HTMLVideoElement>(null)
  const introSectionRef = useRef<HTMLDivElement>(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Simple smooth scroll to next section
  const scrollToIntro = () => {
    if (introSectionRef.current) {
      introSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false) // Fade out
      
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
        setIsVisible(true) // Fade in
      }, 500) // Wait for fade out before changing text
    }, 3500) // Change every 3.5 seconds (3000ms visible + 500ms transition)

    return () => clearInterval(interval)
  }, [])

  // Seamless loop crossfade effect
  useEffect(() => {
    const video1 = heroVideo1Ref.current
    const video2 = heroVideo2Ref.current

    if (!video1 || !video2) return

    // Set up the second video to start slightly before the first one ends
    const handleTimeUpdate1 = () => {
      if (video1.duration - video1.currentTime < 1) {
        // Start fading to video2 1 second before video1 ends
        gsap.to(video1, { opacity: 0, duration: 1, ease: 'power2.inOut' })
        gsap.to(video2, { opacity: 1, duration: 1, ease: 'power2.inOut' })
        video2.currentTime = 0
        video2.play()
      }
    }

    const handleTimeUpdate2 = () => {
      if (video2.duration - video2.currentTime < 1) {
        // Start fading to video1 1 second before video2 ends
        gsap.to(video2, { opacity: 0, duration: 1, ease: 'power2.inOut' })
        gsap.to(video1, { opacity: 1, duration: 1, ease: 'power2.inOut' })
        video1.currentTime = 0
        video1.play()
      }
    }

    video1.addEventListener('timeupdate', handleTimeUpdate1)
    video2.addEventListener('timeupdate', handleTimeUpdate2)

    return () => {
      video1.removeEventListener('timeupdate', handleTimeUpdate1)
      video2.removeEventListener('timeupdate', handleTimeUpdate2)
    }
  }, [])

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
      {/* Hero Section - Full Viewport with Video */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Video 1 - starts visible */}
        <video
          ref={heroVideo1Ref}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity"
        >
          <source src="/yugo_bg.mp4" type="video/mp4" />
        </video>
        
        {/* Video 2 - starts hidden, for crossfade */}
        <video
          ref={heroVideo2Ref}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity"
          style={{ opacity: 0 }}
        >
          <source src="/yugo_bg.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        
        <div className="relative z-10 container text-center text-white">
          <AnimatedSection>
            <h1 className="text-hero mb-8">
              Exploring for<br />
              Critical Metals<br />
              in the Heart of<br />
              Europe
            </h1>
            <div className="text-2xl md:text-3xl font-black uppercase tracking-[0.3em] mb-6">
              YUGO METALS
            </div>
            <p 
              className={`text-lg md:text-xl mb-12 font-josefin transition-opacity duration-500 ${
                isVisible ? 'opacity-90' : 'opacity-0'
              }`}
            >
              {rotatingTexts[currentTextIndex]} | Bosnia and Herzegovina
            </p>
            <button 
              onClick={scrollToIntro}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-primary-700 hover:shadow-lg group cursor-pointer"
            >
              <span>Start Exploring</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction Split-Screen */}
      <div ref={introSectionRef}>
        <SplitSection
          fullHeight={true}
          leftContent={
          <div className="max-w-xl">
            <AnimatedSection>
              <h2 className="text-heading-xl mb-8 text-secondary-900">
                100% Ownership<br />
                of Five Projects<br />
                on the Doorstep<br />
                of the EU
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 font-josefin">
                Yugo Metals explores for gold, antimony, nickel, copper, and precious metals 
                in Bosnia and Herzegovina. Our projects combine historical mining 
                knowledge with modern systematic exploration in one of the world's 
                oldest mining regions.
              </p>
              <Button href={`/${locale}/why-yugo-metals`} variant="outline">
                About Yugo Metals
              </Button>
            </AnimatedSection>
          </div>
        }
        rightContent={
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/yugo_images/165-Hindley-10.jpg)' }}
          />
        }
      />
      </div>

      {/* Stats Bar */}
      <StatsBar
        background="blue"
        stats={[
          { value: '5', label: 'Projects', sublabel: '100% Owned' },
          { value: '100%', label: 'Ownership', sublabel: 'Full Control' },
          { value: 'EU', label: 'Accession State', sublabel: 'Strategic Location' },
          { value: '3+', label: 'Years', sublabel: 'In Operation' },
        ]}
      />

      {/* Explore Our Projects Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-heading-xl mb-6 text-secondary-900">
                Five Projects<br />
                Targeting Critical<br />
                Metals for the<br />
                Energy Transition
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-josefin">
                Gold, antimony, nickel, copper, and precious metals across Bosnia and Herzegovina
              </p>
            </div>
          </AnimatedSection>

          {/* Featured Projects - First 2 Large */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {projects.slice(0, 2).map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 0.1}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="group relative h-[500px] overflow-hidden hover-lift cursor-pointer">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    </div>
                    <div className="relative h-full flex flex-col justify-end p-8 text-white">
                      <div className="text-6xl font-black opacity-20 mb-2">{project.number}</div>
                      <h3 className="text-3xl font-black uppercase tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-1">{project.type}</p>
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Explore Project</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Remaining 3 Projects - Smaller Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(2, 5).map((project, index) => (
              <AnimatedSection key={project.slug} delay={(index + 2) * 0.1}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="group relative h-[400px] overflow-hidden hover-lift cursor-pointer">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    </div>
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <div className="text-4xl font-black opacity-20 mb-2">{project.number}</div>
                      <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-90">{project.type}</p>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Explore</span>
                        <svg className="w-3 h-3 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <div className="text-center mt-16">
              <Button href={`/${locale}/projects`} variant="outline">
                View All Projects
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Discover Our Assets - Dark Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-display mb-6">
                Discover Our<br />
                Assets
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center group">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                  Critical Metals
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Targeting gold, antimony, nickel, and copper - essential metals for the 
                  energy transition and European supply security.
                </p>
                <a href={`/${locale}/projects`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-400 hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center group">
                <div className="text-6xl mb-6">🇪🇺</div>
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                  Strategic Location
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Bosnia and Herzegovina is an EU accession state, offering strategic 
                  access to European markets and supply chains.
                </p>
                <a href={`/${locale}/why-yugo-metals`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-400 hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center group">
                <div className="text-6xl mb-6">🔬</div>
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                  Modern Exploration
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Applying systematic modern exploration techniques to historically 
                  productive mining region with significant potential.
                </p>
                <a href={`/${locale}/investors`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-400 hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-heading-xl text-secondary-900 mb-4">
                Latest From<br />
                Yugo Metals
              </h2>
              <div className="w-24 h-1 bg-primary-600"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {latestUpdates.map((update, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <NewsCard {...update} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <Link href={`/${locale}/investors/asx-announcements`} className="inline-flex items-center gap-2 text-primary-600 font-semibold uppercase tracking-wider hover:gap-4 transition-all">
                <span>View All Announcements</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-heading-xl mb-8">
                Let's Explore the<br />
                Possibilities Together
              </h2>
              <p className="text-xl md:text-2xl mb-12 opacity-90 font-josefin">
                Want to learn more about our exploration programs and investment opportunities?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={`/${locale}/contact`} variant="secondary">
                  Contact Investor Relations
                </Button>
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-primary-600">
                  <span>View Prospectus</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
