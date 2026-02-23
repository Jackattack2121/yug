'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Set this to false to disable the coming soon page and show the real website
export const COMING_SOON_ENABLED = true

// Fixed launch target time — set this to exactly when you want the countdown to end
// February 23, 2026 at 20:05 UTC = Feb 24, 6:35 AM ACDT (10 hours from 8:35 PM ACDT)
const LAUNCH_TARGET = new Date('2026-02-23T20:05:00Z').getTime()

function formatTimeUnit(value: number): string {
  return value.toString().padStart(2, '0')
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const target = LAUNCH_TARGET

    const tick = () => {
      const now = Date.now()
      const diff = Math.max(0, target - now)

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ hours, minutes, seconds })
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[9999] bg-secondary-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-secondary-900 overflow-hidden">
      {/* Subtle animated background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, #2563eb 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, #1d4ed8 0%, transparent 50%)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Logo */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <Image
            src="/yugo_logo.png"
            alt="Yugo Metals"
            width={220}
            height={70}
            className="h-14 md:h-18 lg:h-20 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
            priority
          />
        </div>

        {/* Divider line */}
        <div className="w-24 h-1 bg-primary-600 mb-12 md:mb-16 animate-fade-in" />

        {/* Coming Soon text */}
        <div className="text-center mb-14 md:mb-20 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none mb-6">
            New Website
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-primary-500 leading-none">
            Coming Soon...
          </h1>
        </div>

        {/* Countdown timer */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10 mb-14 md:mb-20">
          {/* Hours */}
          <div className="text-center">
            <div className="relative">
              <div className="bg-secondary-800/80 border border-secondary-700/50 backdrop-blur-sm rounded-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 min-w-[80px] sm:min-w-[100px] md:min-w-[130px]">
                <span className="text-4xl sm:text-5xl md:text-7xl font-black text-white tabular-nums tracking-tight">
                  {formatTimeUnit(timeLeft.hours)}
                </span>
              </div>
            </div>
            <span className="block mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-secondary-400">
              Hours
            </span>
          </div>

          {/* Separator */}
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-600 -mt-6">:</div>

          {/* Minutes */}
          <div className="text-center">
            <div className="relative">
              <div className="bg-secondary-800/80 border border-secondary-700/50 backdrop-blur-sm rounded-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 min-w-[80px] sm:min-w-[100px] md:min-w-[130px]">
                <span className="text-4xl sm:text-5xl md:text-7xl font-black text-white tabular-nums tracking-tight">
                  {formatTimeUnit(timeLeft.minutes)}
                </span>
              </div>
            </div>
            <span className="block mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-secondary-400">
              Minutes
            </span>
          </div>

          {/* Separator */}
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-600 -mt-6">:</div>

          {/* Seconds */}
          <div className="text-center">
            <div className="relative">
              <div className="bg-secondary-800/80 border border-secondary-700/50 backdrop-blur-sm rounded-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 min-w-[80px] sm:min-w-[100px] md:min-w-[130px]">
                <span className="text-4xl sm:text-5xl md:text-7xl font-black text-white tabular-nums tracking-tight">
                  {formatTimeUnit(timeLeft.seconds)}
                </span>
              </div>
            </div>
            <span className="block mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-secondary-400">
              Seconds
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-secondary-400 text-sm sm:text-base md:text-lg font-josefin tracking-wider text-center max-w-lg animate-fade-in">
          Unlocking Europe&apos;s Critical Metals Potential
        </p>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 py-6 text-center">
        <p className="text-secondary-500 text-xs sm:text-sm font-montserrat tracking-wider uppercase">
          Yugo Metals &bull; ASX: YUG
        </p>
      </div>
    </div>
  )
}
