'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import gsap from 'gsap'

interface Project {
  title: string
  slug: string
  location: string
  type: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Doboj Project',
    slug: 'doboj',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Nickel, Copper, Cobalt',
    image: '/images/project-doboj.jpg',
  },
  {
    title: 'Jezero Project',
    slug: 'jezero',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Precious Metals',
    image: '/images/project-jezero.jpg',
  },
  {
    title: 'Sočkovac Project',
    slug: 'sockovac',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Base Metals',
    image: '/images/project-sockovac.jpg',
  },
  {
    title: 'Sinjakovo Project',
    slug: 'sinjakovo',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Copper, Cobalt',
    image: '/images/project-sinjakovo.jpg',
  },
  {
    title: 'Čajniče Project',
    slug: 'cajnice',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Nickel, Precious Metals',
    image: '/images/project-cajnice.jpg',
  },
]

export default function ProjectPicker() {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (panelRef.current) {
      if (isOpen) {
        gsap.to(panelRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        })
      } else {
        gsap.to(panelRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power3.in',
        })
      }
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-primary-600 transition-colors"
      >
        <span>Pick a Project</span>
        <svg
          className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Panel */}
      <div
        ref={panelRef}
        className="absolute left-0 right-0 top-full bg-secondary-900 text-white overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="container py-12">
          <p className="text-sm uppercase tracking-wider opacity-60 mb-8">
            Bosnia and Herzegovina Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                onClick={() => setIsOpen(false)}
                className="group"
              >
                <div className="relative h-48 mb-4 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all"></div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm opacity-80">{project.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

