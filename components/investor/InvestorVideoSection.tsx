'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import VideoPlayer from '@/components/ui/VideoPlayer'

const VIDEOS = [
  {
    title: 'Sinjakovo Project',
    subtitle: 'Gold & Antimony — Republic of Srpska',
    src: '/new_images/sinjakovo.mp4',
  },
  {
    title: 'Sockovac Project',
    subtitle: 'Nickel & Cobalt — Republic of Srpska',
    src: '/new_images/sojokovac.mp4',
  },
]

export default function InvestorVideoSection() {
  return (
    <AnimatedSection delay={0.1}>
      <div className="bg-white border border-gray-200 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-secondary-900 uppercase tracking-wider font-montserrat">
            Videos
          </h2>
        </div>

        {/* Video list */}
        <div className="flex flex-col divide-y divide-gray-100">
          {VIDEOS.map((video) => (
            <VideoPlayer
              key={video.src}
              src={video.src}
              label={video.title}
              sublabel={video.subtitle}
              buttonSize="sm"
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
