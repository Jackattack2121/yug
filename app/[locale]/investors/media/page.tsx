'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SAMPLE_VIDEOS } from '@/lib/investor-data'
import type { InvestorVideo } from '@/components/investor/types'
import SubscriptionForm from '@/components/investor/SubscriptionForm'
import { HiOutlinePlay } from 'react-icons/hi'

export default function MediaPage() {
  const t = useTranslations('investors.media')
  const [activeVideo, setActiveVideo] = useState<InvestorVideo | null>(null)
  const videos = SAMPLE_VIDEOS

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary-900 py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/lush-mountain-forest-in-bosnia-aerial-shot-2025-09-09-00-26-14-utc.jpg)' }}
        />
        <div className="absolute inset-0 bg-primary-600/60" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-heading-lg text-white mb-4">{t('heroTitle')}</h1>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {t('heroSubtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
                Video Gallery
              </p>
              <h2 className="text-3xl font-bold text-secondary-900 font-montserrat">
                Latest Videos
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <AnimatedSection key={video.id} delay={i * 0.05}>
                <button
                  onClick={() => setActiveVideo(video)}
                  className="group relative block w-full text-left overflow-hidden aspect-video border border-gray-200"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all shadow-lg">
                      <HiOutlinePlay className="w-6 h-6 text-secondary-900 ml-0.5" />
                    </div>
                  </div>

                  {/* Duration */}
                  <span className="absolute top-3 right-3 bg-black/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    {video.duration}
                  </span>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2">
                      {video.title}
                    </h3>
                    <time dateTime={video.publishedAt} className="text-[10px] text-white/60 mt-1 block">
                      {new Date(video.publishedAt).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          {videos.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500">No videos available yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-12 bg-primary-600">
        <div className="container max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white font-montserrat mb-3">
              Stay Updated
            </h2>
            <p className="text-sm text-white/80 mb-6">
              Subscribe to receive notifications when new videos and media content are published.
            </p>
            <SubscriptionForm variant="inline" className="max-w-md mx-auto [&_input]:border-white/30 [&_input]:bg-white/10 [&_input]:text-white [&_input]:placeholder-white/50 [&_button]:bg-white [&_button]:text-primary-600" />
          </AnimatedSection>
        </div>
      </section>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              &times;
            </button>
            <div className="flex items-center justify-center h-full text-white">
              <div className="text-center px-8">
                <HiOutlinePlay className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-semibold mb-2">{activeVideo.title}</p>
                <p className="text-sm text-white/60">Video player will connect to CoreConnect when available</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
