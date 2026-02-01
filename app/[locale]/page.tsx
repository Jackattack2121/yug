'use client'

import { useRef, useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SplitSection from '@/components/ui/SplitSection'
import TextBoxed from '@/components/ui/TextBoxed'
import StatsBar from '@/components/ui/StatsBar'
import NewsCard from '@/components/ui/NewsCard'
import { Link } from '@/i18n/navigation'

interface LatestUpdate {
  title: string
  date: string
  category: string
  excerpt?: string
  image?: string
  href?: string
  downloadUrl?: string
}

// Fallback data in case API fails
const fallbackUpdates: LatestUpdate[] = [
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

export default function Home() {
  const locale = useLocale()
  const t = useTranslations('homepage')
  const tProjects = useTranslations('projects')
  const tButtons = useTranslations('buttons')

  const projects = [
    {
      title: tProjects('doboj.name'),
      slug: 'doboj',
      location: tProjects('doboj.location'),
      type: tProjects('doboj.type'),
      image: '/yugo_images/open-pit-mine-with-machines-2024-09-16-10-43-35-utc.jpg',
      number: tProjects('doboj.number'),
    },
    {
      title: tProjects('jezero.name'),
      slug: 'jezero',
      location: tProjects('jezero.location'),
      type: tProjects('jezero.type'),
      image: '/yugo_images/flying-over-open-pit-gold-mine-quarry-in-rosia-m-2025-03-09-07-21-03-utc.jpg',
      number: tProjects('jezero.number'),
    },
    {
      title: tProjects('sockovac.name'),
      slug: 'sockovac',
      location: tProjects('sockovac.location'),
      type: tProjects('sockovac.type'),
      image: '/yugo_images/aerial-view-over-the-sand-pit-2025-10-13-02-21-23-utc.jpg',
      number: tProjects('sockovac.number'),
    },
    {
      title: tProjects('sinjakovo.name'),
      slug: 'sinjakovo',
      location: tProjects('sinjakovo.location'),
      type: tProjects('sinjakovo.type'),
      image: '/yugo_images/yellow-excavator-digging-rocks-at-the-quarry-doin-2025-01-29-03-01-59-utc.jpg',
      number: tProjects('sinjakovo.number'),
    },
    {
      title: tProjects('cajnice.name'),
      slug: 'cajnice',
      location: tProjects('cajnice.location'),
      type: tProjects('cajnice.type'),
      image: '/yugo_images/natural-quarry-is-located-near-road-against-backdr-2025-01-29-05-43-49-utc.jpg',
      number: tProjects('cajnice.number'),
    },
  ]

  const rotatingTexts = [
    t('hero.rotatingText1'),
    t('hero.rotatingText2'),
    t('hero.rotatingText3'),
  ]
  const [latestUpdates, setLatestUpdates] = useState<LatestUpdate[]>(fallbackUpdates)
  const [isLoadingUpdates, setIsLoadingUpdates] = useState(true)
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

  // Fetch latest updates from APIs (ASX announcements + Directus presentations)
  useEffect(() => {
    async function fetchLatestUpdates() {
      try {
        setIsLoadingUpdates(true)
        
        // Fetch announcements and presentations in parallel
        const [announcementsRes, presentationsRes] = await Promise.all([
          fetch('/api/announcements?limit=2').catch(() => null),
          fetch('/api/presentations?limit=1&featured=true').catch(() => null),
        ])
        
        const announcements = announcementsRes?.ok 
          ? (await announcementsRes.json()).announcements || []
          : []
        
        const presentations = presentationsRes?.ok
          ? (await presentationsRes.json()).presentations || []
          : []
        
        // Combine announcements and presentations
        const combined = [...announcements, ...presentations]
        
        // Transform announcements to match LatestUpdate interface
        const transformed = combined.map((item: any) => ({
          title: item.title,
          date: item.date,
          category: item.category,
          excerpt: item.excerpt || item.summary,
          image: item.image,
          href: item.url ? undefined : '/investors/asx-announcements',
          downloadUrl: item.url || item.downloadUrl,
        }))
        
        // Use fetched data if available, otherwise keep fallback
        if (transformed.length > 0) {
          setLatestUpdates(transformed.slice(0, 3))
        }
      } catch (error) {
        console.error('Error fetching latest updates:', error)
        // Keep fallback data on error
      } finally {
        setIsLoadingUpdates(false)
      }
    }
    
    fetchLatestUpdates()
  }, [locale])

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
              {t('hero.titleLine1')}<br />
              {t('hero.titleLine2')}<br />
              {t('hero.titleLine3')}<br />
              {t('hero.titleLine4')}
            </h1>
            <div className="text-2xl md:text-3xl font-black uppercase tracking-[0.3em] mb-6">
              {t('hero.companyName')}
            </div>
            <p 
              className={`text-lg md:text-xl mb-12 font-josefin transition-opacity duration-500 ${
                isVisible ? 'opacity-90' : 'opacity-0'
              }`}
            >
              {rotatingTexts[currentTextIndex]} | {t('hero.location')}
            </p>
            <button 
              onClick={scrollToIntro}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-primary-700 hover:shadow-lg group cursor-pointer"
            >
              <span>{t('hero.cta')}</span>
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
                {t('intro.titleLine1')}<br />
                {t('intro.titleLine2')}<br />
                {t('intro.titleLine3')}<br />
                {t('intro.titleLine4')}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 font-josefin">
                {t('intro.description')}
              </p>
              <Button href={`/${locale}/why-yugo-metals`} variant="outline">
                {t('intro.cta')}
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
          { value: t('stats.stat1Value'), label: t('stats.stat1Label'), sublabel: t('stats.stat1Sublabel') },
          { value: t('stats.stat2Value'), label: t('stats.stat2Label'), sublabel: t('stats.stat2Sublabel') },
          { value: t('stats.stat3Value'), label: t('stats.stat3Label'), sublabel: t('stats.stat3Sublabel') },
          { value: t('stats.stat4Value'), label: t('stats.stat4Label'), sublabel: t('stats.stat4Sublabel') },
        ]}
      />

      {/* Explore Our Projects Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-heading-xl mb-6 text-secondary-900">
                {t('projectsSection.titleLine1')}<br />
                {t('projectsSection.titleLine2')}<br />
                {t('projectsSection.titleLine3')}<br />
                {t('projectsSection.titleLine4')}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-josefin">
                {t('projectsSection.subtitle')}
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
                        <span>{t('projectsSection.exploreProject')}</span>
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
                        <span>{tButtons('explore')}</span>
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
                {t('projectsSection.viewAllProjects')}
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
                {t('assetsSection.titleLine1')}<br />
                {t('assetsSection.titleLine2')}
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center group">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                  {t('assetsSection.criticalMetalsTitle')}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {t('assetsSection.criticalMetalsDescription')}
                </p>
                <Link href={`/${locale}/projects`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-400 hover:gap-4 transition-all">
                  <span>{t('assetsSection.learnMore')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center group">
                <div className="text-6xl mb-6">🇪🇺</div>
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                  {t('assetsSection.strategicLocationTitle')}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {t('assetsSection.strategicLocationDescription')}
                </p>
                <Link href={`/${locale}/why-yugo-metals`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-400 hover:gap-4 transition-all">
                  <span>{t('assetsSection.learnMore')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center group">
                <div className="text-6xl mb-6">🔬</div>
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                  {t('assetsSection.modernExplorationTitle')}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {t('assetsSection.modernExplorationDescription')}
                </p>
                <Link href={`/${locale}/investors`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-400 hover:gap-4 transition-all">
                  <span>{t('assetsSection.learnMore')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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
                {t('latestSection.titleLine1')}<br />
                {t('latestSection.titleLine2')}
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
                <span>{t('latestSection.viewAllAnnouncements')}</span>
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
                {t('ctaSection.titleLine1')}<br />
                {t('ctaSection.titleLine2')}
              </h2>
              <p className="text-xl md:text-2xl mb-12 opacity-90 font-josefin">
                {t('ctaSection.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={`/${locale}/contact`} variant="secondary">
                  {t('ctaSection.contactButton')}
                </Button>
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-primary-600">
                  <span>{t('ctaSection.prospectusButton')}</span>
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
