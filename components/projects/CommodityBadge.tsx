import { cn } from '@/lib/utils'
import { type Commodity, COMMODITY_COLORS, COMMODITY_NAMES } from '@/lib/project-data'

interface CommodityBadgeProps {
  commodity: Commodity
  size?: 'sm' | 'md'
  showName?: boolean
}

export default function CommodityBadge({ commodity, size = 'sm', showName = false }: CommodityBadgeProps) {
  const colors = COMMODITY_COLORS[commodity]
  return (
    <span
      className={cn(
        'inline-block font-bold uppercase tracking-wider',
        colors.bg,
        colors.text,
        size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'
      )}
    >
      {showName ? COMMODITY_NAMES[commodity] : commodity}
    </span>
  )
}
