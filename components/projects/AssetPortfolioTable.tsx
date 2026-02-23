import { TENEMENT_TABLE, type Commodity, COMMODITY_NAMES } from '@/lib/project-data'

const COMMODITY_ORDER: Commodity[] = ['Au', 'Ag', 'Cu', 'Co', 'Ni', 'Zn', 'Pb', 'Sb']

export default function AssetPortfolioTable() {
  return (
    <div className="bg-secondary-900 text-white p-6 md:p-10">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-2">
          Asset Portfolio
        </p>
        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
          Tenement &times; Commodity Matrix
        </h3>
        <p className="text-sm text-white/60 mt-2">
          Five 100%-owned tenements across three projects covering 190km²
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                Tenement
              </th>
              <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                Project
              </th>
              <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                Area
              </th>
              <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                Status
              </th>
              {COMMODITY_ORDER.map((c) => (
                <th key={c} className="text-center py-3 px-2 text-xs font-semibold uppercase tracking-wider text-white/60" title={COMMODITY_NAMES[c]}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TENEMENT_TABLE.map((row) => (
              <tr key={row.tenement} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 pr-4 font-semibold text-white">
                  {row.tenement}
                </td>
                <td className="py-3 pr-4 text-white/70">
                  {row.project}
                </td>
                <td className="py-3 pr-4 text-white/70">
                  {row.area}
                </td>
                <td className="py-3 pr-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 ${
                    row.status === 'Granted'
                      ? 'text-emerald-400 bg-emerald-400/10'
                      : 'text-amber-400 bg-amber-400/10'
                  }`}>
                    {row.status}
                  </span>
                </td>
                {COMMODITY_ORDER.map((c) => (
                  <td key={c} className="py-3 px-2 text-center">
                    {row.commodities[c] ? (
                      <svg className="w-4 h-4 text-primary-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-white/10">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-white/20">
              <td className="py-3 pr-4 font-bold text-white">Total</td>
              <td className="py-3 pr-4 text-white/70">3 Projects</td>
              <td className="py-3 pr-4 font-bold text-white">190km²</td>
              <td className="py-3 pr-4" />
              <td colSpan={8} className="py-3 text-center text-xs text-white/50">
                8 target commodities
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
