'use client'

import { useEffect, useState } from 'react'
import { HiOutlineTrendingUp, HiOutlineTrendingDown, HiOutlineExternalLink } from 'react-icons/hi'
import { getASXSharePrice, formatAUD, formatVolume, type ASXSharePrice } from '@/lib/asx-rss'

export default function SharePriceWidget({ ticker = 'YUG' }: { ticker?: string }) {
  const [priceData, setPriceData] = useState<ASXSharePrice | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        setLoading(true)
        const data = await getASXSharePrice(ticker)
        setPriceData(data)
        setError(null)
      } catch (err) {
        setError('Unable to load share price')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPrice()
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchPrice, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [ticker])

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg p-6 text-white animate-pulse">
        <div className="h-8 bg-white/20 rounded w-32 mb-4"></div>
        <div className="h-12 bg-white/20 rounded w-48 mb-2"></div>
        <div className="h-6 bg-white/20 rounded w-24"></div>
      </div>
    )
  }

  if (error || !priceData) {
    return (
      <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg p-6 text-white">
        <p className="text-sm opacity-75">{error || 'Data unavailable'}</p>
      </div>
    )
  }

  const isPositive = priceData.change >= 0

  return (
    <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg p-6 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold opacity-90">ASX:{ticker}</span>
            <span className="text-xs bg-white/20 px-2 py-1 rounded">20-min delay</span>
          </div>
          <h3 className="text-2xl font-bold mt-1">Yugo Metals</h3>
        </div>
        {isPositive ? (
          <HiOutlineTrendingUp className="w-8 h-8 text-accent-yellow" />
        ) : (
          <HiOutlineTrendingDown className="w-8 h-8 text-red-400" />
        )}
      </div>

      {/* Price */}
      <div className="mb-4">
        <div className="text-5xl font-bold">{formatAUD(priceData.price)}</div>
        <div className="flex items-center space-x-3 mt-2">
          <span
            className={`text-lg font-semibold flex items-center ${
              isPositive ? 'text-accent-yellow' : 'text-red-400'
            }`}
          >
            {isPositive ? '+' : ''}
            {formatAUD(priceData.change)}
          </span>
          <span
            className={`text-lg font-semibold px-2 py-1 rounded ${
              isPositive ? 'bg-accent-yellow/20' : 'bg-red-400/20'
            }`}
          >
            {isPositive ? '+' : ''}
            {priceData.changePercent.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-white/20">
        <div>
          <div className="text-sm opacity-75">Open</div>
          <div className="text-lg font-semibold">{formatAUD(priceData.open)}</div>
        </div>
        <div>
          <div className="text-sm opacity-75">Volume</div>
          <div className="text-lg font-semibold">{formatVolume(priceData.volume)}</div>
        </div>
        <div>
          <div className="text-sm opacity-75">High</div>
          <div className="text-lg font-semibold">{formatAUD(priceData.high)}</div>
        </div>
        <div>
          <div className="text-sm opacity-75">Low</div>
          <div className="text-lg font-semibold">{formatAUD(priceData.low)}</div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/20">
        <span className="text-xs opacity-75">
          Updated: {new Date(priceData.lastUpdated).toLocaleTimeString('en-AU', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
        <a
          href={`https://www.asx.com.au/markets/company/${ticker}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-sm font-semibold hover:text-accent-yellow transition-colors"
        >
          <span>View on ASX</span>
          <HiOutlineExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

