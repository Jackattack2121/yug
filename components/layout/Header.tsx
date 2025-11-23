'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import ProjectPicker from './ProjectPicker'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  // Check if we're on the homepage
  const isHomepage = pathname === '/'

  const navigation = [
    { name: 'About', href: '/why-yugo-metals' },
    { name: 'Investors', href: '/investors' },
    { name: 'ESG', href: '/investors/esg' },
    { name: 'Contact', href: '/contact' },
  ]

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
      document.body.style.overflow = 'hidden'
    } else {
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.4,
        ease: 'power3.in',
      })
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Determine if header should be solid (scrolled or not on homepage)
  const isSolid = scrolled || !isHomepage

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[60] transition-all duration-300',
        isSolid ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 md:h-12 w-auto transition-all">
              <Image
                src="/yugo_logo.png"
                alt="Yugo Metals"
                width={150}
                height={48}
                className={cn(
                  'h-10 md:h-12 w-auto object-contain transition-all duration-300',
                  !isSolid && 'brightness-0 invert'
                )}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative z-50">
              <ProjectPicker isSolid={isSolid} />
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary-600',
                  isSolid ? 'text-gray-900' : 'text-white',
                  pathname === item.href && 'text-primary-600'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className={cn('w-6 h-6', isSolid ? 'text-gray-900' : 'text-white')} />
            ) : (
              <HiMenu className={cn('w-6 h-6', isSolid ? 'text-gray-900' : 'text-white')} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu fixed top-0 right-0 bottom-0 w-full max-w-sm bg-secondary-900 text-white shadow-2xl lg:hidden translate-x-full z-50">
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <div className="relative h-10 w-auto">
            <Image
              src="/yugo_logo.png"
              alt="Yugo Metals"
              width={120}
              height={40}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-100px)]">
          <div>
            <p className="text-xs uppercase tracking-wider opacity-60 mb-4">Navigation</p>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block py-3 text-base font-semibold uppercase tracking-wider hover:text-primary-400 transition-colors',
                  pathname === item.href && 'text-primary-400'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-wider opacity-60 mb-4">Projects</p>
            <div className="space-y-2">
              <Link
                href="/projects/doboj"
                className="block py-2 text-sm hover:text-primary-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Doboj Project
              </Link>
              <Link
                href="/projects/jezero"
                className="block py-2 text-sm hover:text-primary-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Jezero Project
              </Link>
              <Link
                href="/projects/sockovac"
                className="block py-2 text-sm hover:text-primary-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sočkovac Project
              </Link>
              <Link
                href="/projects/sinjakovo"
                className="block py-2 text-sm hover:text-primary-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sinjakovo Project
              </Link>
              <Link
                href="/projects/cajnice"
                className="block py-2 text-sm hover:text-primary-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Čajniče Project
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-xs text-gray-400 mb-2">Contact</p>
            <a href="mailto:info@lykosmetals.com" className="text-sm hover:text-primary-400 transition-colors">
              info@lykosmetals.com
            </a>
          </div>
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
