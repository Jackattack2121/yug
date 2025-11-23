'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'
import { cn } from '@/lib/utils'
import gsap from 'gsap'

interface HeaderProps {
  projects?: Array<{ id?: string; name: string; slug: string }>;
}

export default function Header({ projects: initialProjects = [] }: HeaderProps) {
  // Use projects passed from HeaderWrapper - no need to fetch
  const projects = initialProjects.length > 0 ? initialProjects : [
    { name: 'Mick Well REE Project', slug: 'mick-well' },
    { name: 'Arthur River: LK1 REE Project', slug: 'arthur-river' },
    { name: 'Chalby Chalby Lithium Project', slug: 'chalby-chalby' },
    { name: 'NSW Projects', slug: 'nsw-projects' },
  ];

  // Build navigation with dynamic projects
  const navigation = [
    {
      name: 'Why Yugo Metals',
      href: '/why-yugo-metals',
    },
    {
      name: 'Company',
      href: '/company',
      submenu: [
        { name: 'Board of Directors', href: '/company/board-of-directors' },
        { name: 'Corporate Directory', href: '/company/corporate-directory' },
        { name: 'Corporate Governance', href: '/company/corporate-governance' },
        { name: 'Corporate Responsibility', href: '/company/corporate-responsibility' },
      ],
    },
    {
      name: 'Projects',
      href: '/projects',
      submenu: projects.map((p) => ({
        name: p.name,
        href: `/projects/${p.slug}`,
      })),
    },
  {
    name: 'Prospectus',
    href: '/prospectus',
  },
  {
    name: 'Investors',
    href: '/investors',
    submenu: [
      { name: 'Investor Centre', href: '/investors' },
      { name: 'ASX Announcements', href: '/investors/asx-announcements' },
      { name: 'Financial Reports', href: '/investors/financial-reports' },
      { name: 'Presentations', href: '/investors/presentations' },
      { name: 'Share Information', href: '/investors/share-information' },
      { name: 'Investor Calendar', href: '/investors/calendar' },
      { name: 'Media Coverage', href: '/investors/media' },
      { name: 'Fact Sheet', href: '/investors/fact-sheet' },
      { name: 'ESG', href: '/investors/esg' },
      { name: 'Contact IR Team', href: '/investors/contact' },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.to('.mobile-menu', {
        x: 0,
        duration: 0.4,
        ease: 'power3.out',
      })
    } else {
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.4,
        ease: 'power3.in',
      })
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-48 h-16">
              {/* Color logo for scrolled state (white background) */}
              <img
                src="/yugo/images/logo-color.png"
                alt="Yugo Metals"
                className={cn(
                  'h-16 w-auto object-contain transition-all duration-300',
                  scrolled ? 'opacity-100' : 'opacity-0'
                )}
              />
              {/* White logo for transparent header */}
              <img
                src="/yugo/images/logo-white.png"
                alt="Yugo Metals"
                className={cn(
                  'absolute top-0 left-0 h-16 w-auto object-contain transition-all duration-300',
                  scrolled ? 'opacity-0' : 'opacity-100'
                )}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary-500',
                    scrolled ? 'text-gray-900' : 'text-white',
                    pathname === item.href && 'text-primary-500'
                  )}
                >
                  {item.name}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white shadow-lg rounded-lg py-2 min-w-[250px]">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            'block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors',
                            pathname === subItem.href && 'bg-primary-50 text-primary-600'
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className={cn('w-6 h-6', scrolled ? 'text-gray-900' : 'text-white')} />
            ) : (
              <HiMenu className={cn('w-6 h-6', scrolled ? 'text-gray-900' : 'text-white')} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="mobile-menu fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl lg:hidden translate-x-full z-50"
      >
        <div className="flex justify-between items-center p-6 border-b">
          <img
            src="/yugo/images/logo-color.png"
            alt="Yugo Metals"
            className="h-12 w-auto object-contain"
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX className="w-6 h-6 text-gray-900" />
          </button>
        </div>
        
        <nav className="p-6 space-y-4 overflow-y-auto max-h-[calc(100vh-100px)]">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  'block py-2 text-base font-semibold uppercase tracking-wider text-gray-900 hover:text-primary-600 transition-colors',
                  pathname === item.href && 'text-primary-600'
                )}
                onClick={() => !item.submenu && setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              
              {item.submenu && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={cn(
                        'block py-1 text-sm text-gray-700 hover:text-primary-600 transition-colors',
                        pathname === subItem.href && 'text-primary-600 font-semibold'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}

