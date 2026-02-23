import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import StatsBar from '@/components/ui/StatsBar'
import InvestorDisclaimer from '@/components/investor/InvestorDisclaimer'
import CommodityBadge from '@/components/projects/CommodityBadge'
import ProspectSection from '@/components/projects/ProspectSection'
import ProjectTimeline from '@/components/projects/ProjectTimeline'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectVideoSection from '@/components/projects/ProjectVideoSection'
import { createPageMetadata } from '@/lib/metadata'
import WebPageJsonLd from '@/components/seo/WebPageJsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { ALL_PROJECTS, getProjectBySlug, PROJECT_SLUGS } from '@/lib/project-data'

export async function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string; locale: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Project Not Found' }

  return createPageMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/projects/${params.slug}`,
    locale: params.locale,
  })
}

export default function ProjectPage({ params }: { params: { slug: string; locale: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const otherProjects = ALL_PROJECTS.filter((p) => p.slug !== project.slug)

  return (
    <>
      <WebPageJsonLd title={project.seoTitle} description={project.seoDescription} path={`/projects/${params.slug}`} locale={params.locale} />
      <BreadcrumbJsonLd path={`/projects/${params.slug}`} locale={params.locale} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="relative container pb-16 text-white">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-display mb-3">
                {project.name}
              </h1>
              <p className="text-lg md:text-xl opacity-80 font-josefin">
                {project.totalArea} across {project.tenements.length} tenement{project.tenements.length > 1 ? 's' : ''} in {project.location}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar
        background="blue"
        stats={[
          { value: project.totalArea, label: 'Total Area' },
          { value: String(project.tenements.length), label: 'Tenements' },
          { value: String(project.prospects.length), label: 'Prospects' },
          { value: project.ownership, label: 'Ownership' },
        ]}
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="grid md:grid-cols-5 gap-12">
                {/* Overview text */}
                <div className="md:col-span-3">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
                    Project Overview
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat mb-8">
                    {project.name}
                  </h2>
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-josefin">
                    {project.overview.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Tenement details */}
                <div className="md:col-span-2">
                  <div className="bg-gray-50 p-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-900 mb-4">
                      Tenement Details
                    </h3>
                    <div className="space-y-4">
                      {project.tenements.map((t) => (
                        <div key={t.name} className="pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-secondary-900">{t.name}</span>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 ${
                              t.status === 'Granted'
                                ? 'text-emerald-700 bg-emerald-50'
                                : 'text-amber-700 bg-amber-50'
                            }`}>
                              {t.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">{t.area}</p>
                          <div className="flex flex-wrap gap-1">
                            {t.commodities.map((c) => (
                              <CommodityBadge key={c} commodity={c} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Prospect Sections */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
                Exploration Targets
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat mb-12">
                Prospects &amp; Results
              </h2>
            </AnimatedSection>
            {project.prospects.map((prospect, i) => (
              <AnimatedSection key={prospect.name} delay={i * 0.05}>
                <ProspectSection prospect={prospect} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Site Photography */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="bg-secondary-900">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {project.galleryImages.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <img
                  src={src}
                  alt={`${project.name} site photography ${i + 1}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                  style={{ objectPosition: 'center 35%' }}
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Project Video */}
      {project.videoSrc && (
        <ProjectVideoSection
          videoSrc={project.videoSrc}
          projectName={project.name}
        />
      )}

      {/* Project Timeline */}
      <ProjectTimeline
        items={project.timeline}
        title={`${project.name.replace(' Project', '')} Timeline`}
        subtitle={`Planned 2025/2026 exploration activities for the ${project.name}`}
      />

      {/* Explore More */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
                Explore More
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat">
                Our Other Projects
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
              >
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Disclaimer */}
      <InvestorDisclaimer forwardLooking competentPerson sharePrice={false} notAdvice={false} />
      {project.hasHistoricalDisclaimer && (
        <section className="py-4 bg-gray-50 border-t border-gray-200">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong className="text-gray-500">Historical Results Disclaimer:</strong> The historical drilling results from 1969–1970 referenced on this page are sourced from historical reports and have not been verified by modern JORC-compliant methods. The company plans twin-drilling to confirm these results. Cobalt was not analysed in the historical drilling programs.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
