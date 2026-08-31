import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

type Severity = 'No DR' | 'Mild' | 'Moderate' | 'Severe' | 'Proliferative';

const severityStyles: Record<Severity, string> = {
  'No DR': 'bg-emerald-100 text-emerald-700',
  Mild: 'bg-lime-100 text-lime-700',
  Moderate: 'bg-yellow-100 text-yellow-700',
  Severe: 'bg-orange-100 text-orange-700',
  Proliferative: 'bg-red-100 text-red-700',
};

type Row = {
  patient: string;
  date: string;
  result: Severity;
  referral: string;
};

const rows: Row[] = [
  { patient: '#104', date: 'Aug 28', result: 'Moderate', referral: 'Pending' },
  { patient: '#103', date: 'Aug 28', result: 'No DR', referral: '—' },
  { patient: '#102', date: 'Aug 27', result: 'Mild', referral: 'Created' },
];

export function History() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filtered = rows.filter((r) =>
    r.patient.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h1 className="mb-5 text-xl font-semibold text-slate-800">Screening History</h1>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search patient ID"
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white sm:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3">Patient</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Result</th>
                <th className="px-4 py-3">Referral</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((row) => (
                <tr key={row.patient} className="transition-colors hover:bg-slate-50">
                  <td className="px-4 py-3.5 font-medium text-slate-800">{row.patient}</td>
                  <td className="px-4 py-3.5 text-slate-600">{row.date}</td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${severityStyles[row.result]}`}
                    >
                      {row.result}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-slate-600">{row.referral}</td>
                  <td className="px-4 py-3.5 text-right">
                    <button
                      onClick={() => navigate('/result')}
                      className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700"
                    >
                      View
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-slate-400">No patients found.</p>
          )}
        </div>

        {/* Mobile cards */}
        <div className="space-y-3 sm:hidden">
          {filtered.map((row) => (
            <div key={row.patient} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium text-slate-800">{row.patient}</span>
                <button
                  onClick={() => navigate('/result')}
                  className="inline-flex items-center gap-1 text-sm font-medium text-teal-600"
                >
                  View
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
              <dl className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-400">Date</dt>
                  <dd className="text-slate-700">{row.date}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-400">Result</dt>
                  <dd>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${severityStyles[row.result]}`}
                    >
                      {row.result}
                    </span>
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-400">Referral</dt>
                  <dd className="text-slate-700">{row.referral}</dd>
                </div>
              </dl>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-slate-400">No patients found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
