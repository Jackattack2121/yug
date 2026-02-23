'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { getCategoryStyle } from './types'
import type { ASXAnnouncement } from '@/lib/asx-rss'
import { HiOutlineExternalLink, HiOutlineArrowRight } from 'react-icons/hi'

interface AnnouncementItemProps {
  announcement: ASXAnnouncement
}

function AnnouncementItem({ announcement }: AnnouncementItemProps) {
  const style = getCategoryStyle(announcement.category)
  const date = new Date(announcement.date)
  const formattedDate = date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <a
      href={announcement.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors px-2 -mx-2"
    >
      {/* Date column */}
      <div className="flex-shrink-0 w-16 text-center pt-0.5">
        <p className="text-2xl font-bold text-secondary-900 leading-none">
          {date.getDate()}
        </p>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-0.5">
          {date.toLocaleDateString('en-AU', { month: 'short' })}
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${style.bgColor} ${style.color}`}>
            {announcement.category}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug">
          {announcement.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1">{formattedDate}</p>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0 pt-2">
        <HiOutlineExternalLink className="w-4 h-4 text-gray-300 group-hover:text-primary-600 transition-colors" />
      </div>
    </a>
  )
}

export default function InvestorAnnouncements() {
  const t = useTranslations('investors.announcements')
  const [announcements, setAnnouncements] = useState<ASXAnnouncement[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const res = await fetch('/api/announcements?limit=8')
        const data = await res.json()
        setAnnouncements(data.announcements || [])
      } catch {
        setAnnouncements([])
      } finally {
        setLoading(false)
      }
    }
    fetchAnnouncements()
  }, [])

  return (
    <AnimatedSection>
      <div className="bg-white border border-gray-200 h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-secondary-900 uppercase tracking-wider font-montserrat">
            {t('title')}
          </h2>
          <Link
            href="/investors/asx-announcements"
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
          >
            View All
            <HiOutlineArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Content */}
        <div className="px-6 py-2">
          {loading ? (
            <div className="space-y-4 py-4">
              {[...Array(5)].map((_, i) => (
                <div key={`skel-${i}`} className="flex gap-4 animate-pulse">
                  <div className="w-16 h-10 bg-gray-100 rounded" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-100 rounded w-20" />
                    <div className="h-4 bg-gray-100 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : announcements.length > 0 ? (
            <div>
              {announcements.slice(0, 6).map((a) => (
                <AnnouncementItem key={`${a.title}-${a.date}`} announcement={a} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-sm text-gray-500">{t('noAnnouncements')}</p>
              <a
                href="https://www.asx.com.au/markets/company/YUG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-semibold mt-2"
              >
                {t('viewOnAsx')}
                <HiOutlineExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}
