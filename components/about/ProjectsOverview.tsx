'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineArrowRight } from 'react-icons/hi'

const PROJECTS = [
  {
    name: 'Doboj',
    location: 'Republic of Srpska',
    commodity: 'Ni, Cu, Co',
    stage: 'Active Exploration',
    image: '/images/project-doboj.jpg',
    href: '/projects/doboj',
  },
  {
    name: 'Jezero',
    location: 'Republic of Srpska',
    commodity: 'Precious Metals',
    stage: 'Active Exploration',
    image: '/images/project-jezero.jpg',
    href: '/projects/jezero',
  },
  {
    name: 'Sockovac',
    location: 'Republic of Srpska',
    commodity: 'Base Metals',
    stage: 'Active Exploration',
    image: '/images/project-sockovac.jpg',
    href: '/projects/sockovac',
  },
  {
    name: 'Sinjakovo',
    location: 'Republic of Srpska',
    commodity: 'Cu, Co',
    stage: 'Active Exploration',
    image: '/images/project-sinjakovo.jpg',
    href: '/projects/sinjakovo',
  },
  {
    name: 'Cajnice',
    location: 'Republic of Srpska',
    commodity: 'Au, Sb',
    stage: 'Active Exploration',
    image: '/images/project-cajnice.jpg',
    href: '/projects/cajnice',
  },
]

export default function ProjectsOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
                Portfolio
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat">
                Our Projects
              </h2>
              <p className="text-base text-gray-600 mt-2 max-w-xl">
                Five 100%-owned exploration projects targeting critical metals across Bosnia and Herzegovina.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
            >
              View All Projects
              <HiOutlineArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROJECTS.map((project, i) => (
            <AnimatedSection key={project.name} delay={i * 0.05}>
              <Link
                href={project.href}
                className="group block bg-white border border-gray-200 overflow-hidden hover:border-primary-600 hover:shadow-md transition-all"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} project — ${project.commodity}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-wider text-white/80 bg-black/30 px-2 py-0.5 rounded">
                    {project.commodity}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 mt-0.5">{project.location}</p>
                  <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {project.stage}
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
