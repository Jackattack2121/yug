'use client'

interface CoryStartersProps {
  starters: string[]
  onSelect: (starter: string) => void
}

export default function CoryStarters({ starters, onSelect }: CoryStartersProps) {
  return (
    <div className="flex flex-col gap-2 px-4 py-3">
      <p className="text-xs text-secondary-400 font-montserrat font-medium uppercase tracking-wide mb-1">
        Suggested questions
      </p>
      {starters.map((starter) => (
        <button
          key={starter}
          onClick={() => onSelect(starter)}
          className="text-left px-4 py-2.5 text-sm font-montserrat text-primary-600 border border-primary-200 rounded-full hover:bg-primary-50 hover:border-primary-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-1"
        >
          {starter}
        </button>
      ))}
    </div>
  )
}
