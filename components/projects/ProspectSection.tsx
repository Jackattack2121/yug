import type { Prospect } from '@/lib/project-data'
import CommodityBadge from './CommodityBadge'
import ExplorationResults from './ExplorationResults'

interface ProspectSectionProps {
  prospect: Prospect
  index: number
}

export default function ProspectSection({ prospect, index }: ProspectSectionProps) {
  return (
    <div className={`${index > 0 ? 'mt-16 pt-16 border-t border-gray-200' : ''}`}>
      {/* Heading + badges */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {prospect.commodities.map((c) => (
            <CommodityBadge key={c} commodity={c} />
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 uppercase tracking-tight">
          {prospect.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl font-josefin">
        {prospect.description}
      </p>

      {/* Exploration Results Table */}
      {prospect.results.length > 0 && (
        <div className="mb-8">
          <ExplorationResults
            results={prospect.results}
            asxReferences={prospect.asxReferences}
          />
        </div>
      )}

      {/* Image placeholders */}
      {prospect.images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {prospect.images.map((img, i) => (
            <div key={i} className="relative bg-gray-100 aspect-[4/3] flex items-center justify-center">
              {/* TODO: Replace with actual images extracted from investor presentation */}
              <div className="text-center p-4">
                <div className="text-gray-400 text-sm mb-1">{img.alt}</div>
                {img.todoPage && (
                  <div className="text-gray-300 text-xs">
                    Investor presentation p{img.todoPage}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Next Steps */}
      {prospect.nextSteps.length > 0 && (
        <div className="bg-primary-50 border-l-4 border-primary-600 p-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-900 mb-3">
            Planned Next Steps
          </h4>
          <ul className="space-y-2">
            {prospect.nextSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <svg className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-3 italic">
            Timeline reflects planned activities as disclosed in October 2025 investor presentation. Actual timing may vary.
          </p>
        </div>
      )}
    </div>
  )
}
