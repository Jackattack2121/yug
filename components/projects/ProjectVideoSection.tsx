'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import VideoPlayer from '@/components/ui/VideoPlayer'

interface Props {
  videoSrc: string
  projectName: string
}

export default function ProjectVideoSection({ videoSrc, projectName }: Props) {
  return (
    <section className="section-padding bg-secondary-900">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-2">
              Project Video
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-10">
              {projectName} — Site Footage
            </h2>

            <VideoPlayer
              src={videoSrc}
              buttonSize="lg"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
