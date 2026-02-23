'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineArrowRight, HiOutlineX } from 'react-icons/hi'

interface Director {
  name: string
  position: string
  bio: string
  image: string
  shortBio: string
}

export default function TeamGrid() {
  const t = useTranslations('company.board')
  const [expandedDirector, setExpandedDirector] = useState<Director | null>(null)

  const directors: Director[] = [
    {
      name: t('director1Name'),
      position: t('director1Position'),
      bio: t.raw('director1Bio') as string,
      image: '/new_images/david_w.jpg',
      shortBio: 'Over 30 years of Senior Executive Management, Directorships, and Corporate Advisory. Fellow of the Australian Institute of Company Directors.',
    },
    {
      name: t('director2Name'),
      position: t('director2Position'),
      bio: t.raw('director2Bio') as string,
      image: '/new_images/petar.png',
      shortBio: 'Multilingual leader specializing in future metals, mineral acquisition, and asset implementation. Prior Director at Fenix Resources Ltd (ASX: FEX).',
    },
    {
      name: t('director3Name'),
      position: t('director3Position'),
      bio: t.raw('director3Bio') as string,
      image: '/new_images/mihajlo.jpg',
      shortBio: '10+ years at multinational law firm in London. Focus on Banking & Finance, Projects & Energy across Western Balkans.',
    },
    {
      name: t('director4Name'),
      position: t('director4Position'),
      bio: t.raw('director4Bio') as string,
      image: '/new_images/craig.png',
      shortBio: '15+ years in resource industry and accounting. Qualified auditor at PricewaterhouseCoopers, senior roles at De Beers Group and Anglo American plc.',
    },
    {
      name: t('director5Name'),
      position: t('director5Position'),
      bio: t.raw('director5Bio') as string,
      image: '/new_images/mladen.jpg',
      shortBio: '20+ years across precious and base metals. Competent Person for ASX reporting. Led exploration teams with significant discoveries.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat mb-3">
              {t('title')}
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              {t('description')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, i) => (
            <AnimatedSection key={director.name} delay={i * 0.1}>
              <div className="group bg-white border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all overflow-hidden">
                {/* Photo */}
                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                  <Image
                    src={director.image}
                    alt={`${director.name} — ${director.position}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />

                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {director.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-300 mt-1">
                      {director.position}
                    </p>
                  </div>
                </div>

                {/* Bio snippet + action */}
                <div className="p-5">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {director.shortBio}
                  </p>
                  <button
                    onClick={() => setExpandedDirector(director)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Read Full Bio
                    <HiOutlineArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              href="/why-yugo-metals"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
            >
              View Full Board Profiles
              <HiOutlineArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Bio modal */}
      {expandedDirector && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setExpandedDirector(null)}
        >
          <div
            className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpandedDirector(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <HiOutlineX className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row">
              {/* Photo */}
              <div className="relative w-full sm:w-72 h-64 sm:h-auto flex-shrink-0 bg-gray-100">
                <Image
                  src={expandedDirector.image}
                  alt={expandedDirector.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-secondary-900 mb-1">
                  {expandedDirector.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-5">
                  {expandedDirector.position}
                </p>
                <div
                  className="prose prose-sm max-w-none text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: expandedDirector.bio }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
