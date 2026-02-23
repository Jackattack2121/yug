'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface Stat {
  value: string
  label: string
  sublabel?: string
}

interface StatsBarProps {
  stats: Stat[]
  variant?: 'horizontal' | 'grid'
  background?: 'dark' | 'light' | 'blue'
  className?: string
}

/**
 * Parse a stat value into a numeric part and suffix.
 * e.g. "5" → { num: 5, suffix: "" }
 *      "100%" → { num: 100, suffix: "%" }
 *      "3+" → { num: 3, suffix: "+" }
 *      "EU" → null (not numeric)
 */
function parseNumericValue(value: string): { num: number; suffix: string } | null {
  const match = value.match(/^(\d+)(.*)?$/)
  if (!match) return null
  return { num: parseInt(match[1], 10), suffix: match[2] || '' }
}

function CountUpValue({ value, triggered }: { value: string; triggered: boolean }) {
  const parsed = parseNumericValue(value)
  const numRef = useRef(parsed?.num ?? 0)
  const suffixRef = useRef(parsed?.suffix ?? '')
  const isNumeric = parsed !== null
  const [displayValue, setDisplayValue] = useState(isNumeric ? '0' + suffixRef.current : value)

  useEffect(() => {
    if (!triggered || !isNumeric) return

    const num = numRef.current
    const suffix = suffixRef.current
    const duration = 1800 // ms
    const startTime = performance.now()

    // Ease-out cubic for a satisfying deceleration
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    let rafId: number

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const current = Math.round(easedProgress * num)

      setDisplayValue(current + suffix)

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(rafId)
  }, [triggered, isNumeric])

  return <>{displayValue}</>
}

export default function StatsBar({ stats, variant = 'horizontal', background = 'dark', className }: StatsBarProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  const backgrounds = {
    dark: 'bg-secondary-900 text-white',
    light: 'bg-gray-50 text-gray-900',
    blue: 'bg-primary-600 text-white',
  }

  // Determine grid columns based on number of stats
  const count = stats.length
  const gridCols =
    variant === 'horizontal'
      ? count === 4
        ? 'grid-cols-2 md:grid-cols-4'
        : count === 3
          ? 'grid-cols-2 md:grid-cols-3'
          : `grid-cols-2 md:grid-cols-${Math.min(count, 4)}`
      : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4'

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={cn('py-16 md:py-20', backgrounds[background], className)}>
      <div className="container">
        <div className={cn('grid gap-8 md:gap-12', gridCols)}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: triggered ? 1 : 0,
                transform: triggered ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 tracking-tight">
                <CountUpValue value={stat.value} triggered={triggered} />
              </div>
              <div className="text-sm md:text-base uppercase tracking-wider font-semibold opacity-80">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-xs md:text-sm mt-1 opacity-60">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
