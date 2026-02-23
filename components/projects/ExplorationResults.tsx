import type { ExplorationResult } from '@/lib/project-data'

interface ExplorationResultsProps {
  results: ExplorationResult[]
  asxReferences: { date: string; title: string }[]
}

export default function ExplorationResults({ results, asxReferences }: ExplorationResultsProps) {
  if (results.length === 0) return null

  return (
    <div className="bg-secondary-900 text-white p-6 md:p-8">
      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-4">
        Exploration Results
      </h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-2 pr-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                Sample / Method
              </th>
              <th className="text-left py-2 pr-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                Grade
              </th>
              <th className="text-right py-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                ASX Reference
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className={`py-3 pr-4 text-white/90 ${result.isSubInterval ? 'pl-4 text-white/70' : ''}`}>
                  {result.isSubInterval && (
                    <span className="text-primary-400 mr-1">incl.</span>
                  )}
                  {result.interval}
                </td>
                <td className="py-3 pr-4 font-semibold text-white">
                  {result.grades}
                </td>
                <td className="py-3 text-right text-white/50 text-xs">
                  {result.asxDate && (
                    <time dateTime={result.asxDate}>{result.asxDate}</time>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {asxReferences.length > 0 && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">
            ASX Announcement References
          </p>
          {asxReferences.map((ref, i) => (
            <p key={i} className="text-xs text-white/50">
              <time dateTime={ref.date} className="text-white/40">{ref.date}</time>
              {' — '}
              <span>{ref.title}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
