'use client'

import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CommodityBadge from './CommodityBadge'
import type { Project } from '@/lib/project-data'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <Link href={`/projects/${project.slug}`}>
        <div className="group bg-secondary-900 text-white overflow-hidden hover:shadow-2xl transition-all duration-500">
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.cardImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-black/40 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Commodity badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.commodities.slice(0, 5).map((c) => (
                <CommodityBadge key={c} commodity={c} />
              ))}
              {project.commodities.length > 5 && (
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/50 bg-white/10">
                  +{project.commodities.length - 5}
                </span>
              )}
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-primary-400 transition-colors mb-2">
              {project.name}
            </h3>

            {/* Stats */}
            <p className="text-xs text-white/60 mb-3">
              {project.tenements.length} tenement{project.tenements.length > 1 ? 's' : ''} &middot; {project.totalArea} &middot; {project.ownership} owned
            </p>

            {/* Headline result */}
            <p className="text-sm text-white/80 mb-4 italic font-josefin">
              &ldquo;{project.headlineResult}&rdquo;
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 text-primary-400 font-semibold uppercase tracking-wider text-xs">
              <span>Explore Project</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  )
}
