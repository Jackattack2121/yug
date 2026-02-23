'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SAMPLE_VIDEOS } from '@/lib/investor-data'
import type { InvestorVideo } from './types'
import { HiOutlinePlay, HiOutlineArrowRight } from 'react-icons/hi'
import { Link } from '@/i18n/navigation'

interface VideoCardProps {
  video: InvestorVideo
  featured?: boolean
  onClick: () => void
}

function VideoCard({ video, featured, onClick }: VideoCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative block w-full text-left overflow-hidden ${featured ? 'aspect-video' : 'aspect-video'}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`${featured ? 'w-16 h-16' : 'w-10 h-10'} rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all shadow-lg`}>
          <HiOutlinePlay className={`${featured ? 'w-7 h-7' : 'w-5 h-5'} text-secondary-900 ml-0.5`} />
        </div>
      </div>

      {/* Duration badge */}
      <span className="absolute top-3 right-3 bg-black/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
        {video.duration}
      </span>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className={`${featured ? 'text-sm' : 'text-xs'} font-semibold text-white leading-snug line-clamp-2`}>
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
  )
}

export default function InvestorVideoSection() {
  const [activeVideo, setActiveVideo] = useState<InvestorVideo | null>(null)
  const videos = SAMPLE_VIDEOS

  const featured = videos[0]
  const recent = videos.slice(1, 3)

  return (
    <AnimatedSection delay={0.1}>
      <div className="bg-white border border-gray-200 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-secondary-900 uppercase tracking-wider font-montserrat">
            Videos
          </h2>
          <Link
            href="/investors/media"
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
          >
            All Videos
            <HiOutlineArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured video */}
        <div className="px-4 pt-4 pb-2">
          {featured && (
            <VideoCard
              video={featured}
              featured
              onClick={() => setActiveVideo(featured)}
            />
          )}
        </div>

        {/* Disclaimer */}
        <p className="px-4 pb-2 text-[10px] text-gray-400 leading-relaxed">
          Videos are produced for informational purposes and should be read in conjunction with the relevant ASX announcements.
        </p>

        {/* Recent videos grid */}
        <div className="grid grid-cols-2 gap-2 px-4 pb-4">
          {recent.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => setActiveVideo(video)}
            />
          ))}
        </div>

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
      </div>
    </AnimatedSection>
  )
}
