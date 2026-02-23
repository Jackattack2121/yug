'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Link } from '@/i18n/navigation'
import { HiOutlineMail, HiOutlineArrowRight } from 'react-icons/hi'

export default function BoardOfDirectors() {
  const t = useTranslations('company.board')

  const directors = [
    {
      name: t('director1Name'),
      position: t('director1Position'),
      bio: t.raw('director1Bio') as string,
      image: '/images/director-1.jpg',
      email: 'hello@yugometals.com',
    },
    {
      name: t('director2Name'),
      position: t('director2Position'),
      bio: t.raw('director2Bio') as string,
      image: '/images/director-2.jpg',
      email: 'Petar@yugometals.com',
    },
    {
      name: t('director3Name'),
      position: t('director3Position'),
      bio: t.raw('director3Bio') as string,
      image: '/images/director-3.jpg',
      email: 'hello@yugometals.com',
    },
    {
      name: t('director4Name'),
      position: t('director4Position'),
      bio: t.raw('director4Bio') as string,
      image: '/images/director-4.jpg',
      email: 'hello@yugometals.com',
    },
    {
      name: t('director5Name'),
      position: t('director5Position'),
      bio: t.raw('director5Bio') as string,
      image: '/images/director-5.jpg',
      email: 'hello@yugometals.com',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary-900 py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/three-contemporary-builders-in-uniform-2025-03-16-04-36-05-utc.jpg)' }}
        />
        <div className="absolute inset-0 bg-primary-600/60" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-300 mb-3">
                Leadership
              </p>
              <h1 className="text-heading-lg text-white mb-4">
                {t('title')}
              </h1>
              <p className="text-base text-white/80 max-w-2xl">
                {t('description')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Directors */}
      <section className="section-padding bg-white">
        <div className="container max-w-5xl">
          <div className="space-y-16">
            {directors.map((director, index) => (
              <AnimatedSection key={director.name} delay={index * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                  {/* Photo */}
                  <div className="md:col-span-1">
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                      <Image
                        src={director.image}
                        alt={`${director.name} — ${director.position}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3">
                    <h2 className="text-2xl font-bold text-secondary-900 mb-1">
                      {director.name}
                    </h2>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-5">
                      {director.position}
                    </p>
                    <div
                      className="prose prose-sm max-w-none text-gray-600 leading-relaxed mb-6"
                      dangerouslySetInnerHTML={{ __html: director.bio }}
                    />
                    <a
                      href={`mailto:${director.email}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <HiOutlineMail className="w-4 h-4" />
                      Contact via IR
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Back link */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <Link
                href="/why-yugo-metals"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
              >
                Back to About Yugo Metals
                <HiOutlineArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
