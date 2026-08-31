import { useNavigate } from 'react-router-dom';
import { Plus, Eye, FileText, Clock, ArrowRight, WifiOff } from 'lucide-react';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';

type Severity = 'No DR' | 'Mild' | 'Moderate' | 'Severe' | 'Proliferative';

const severityStyles: Record<Severity, string> = {
  'No DR': 'bg-green-100 text-green-700 ring-green-600/20',
  'Mild': 'bg-lime-100 text-lime-700 ring-lime-600/20',
  'Moderate': 'bg-yellow-100 text-yellow-700 ring-yellow-600/20',
  'Severe': 'bg-orange-100 text-orange-700 ring-orange-600/20',
  'Proliferative': 'bg-red-100 text-red-700 ring-red-600/20',
};

const stats = [
  { label: 'Screened', value: 24, icon: Eye, accent: 'text-teal-600 bg-teal-50' },
  { label: 'Referrals', value: 6, icon: FileText, accent: 'text-blue-600 bg-blue-50' },
  { label: 'Pending', value: 3, icon: Clock, accent: 'text-amber-600 bg-amber-50' },
];

const recentScreenings: { id: number; date: string; result: Severity }[] = [
  { id: 104, date: 'Today', result: 'Moderate' },
  { id: 103, date: 'Today', result: 'No DR' },
  { id: 102, date: 'Yesterday', result: 'Mild' },
];

export function Dashboard() {
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();

  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  })();

  return (
    <div className="space-y-6">
      {/* Offline banner */}
      {!isOnline && (
        <div className="flex items-center gap-3 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800 ring-1 ring-amber-200">
          <WifiOff className="h-5 w-5 shrink-0 text-amber-600" />
          <span>No internet — screenings will be saved and synced later.</span>
        </div>
      )}

      {/* Greeting + primary action */}
      <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-blue-600 px-6 py-7 text-white shadow-sm sm:px-8 sm:py-8">
        <h1 className="text-xl font-semibold sm:text-2xl">
          {greeting} — Ready to screen a patient?
        </h1>
        <p className="mt-1.5 text-sm text-teal-50/90">
          Start a new screening session in just a few steps.
        </p>
        <button
          onClick={() => navigate('/patient-details')}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-700 shadow-sm transition-all hover:bg-teal-50 hover:shadow-md active:scale-[0.98] sm:text-base"
        >
          <Plus className="h-5 w-5" />
          Start New Screening
        </button>
      </div>

      {/* TODAY stats */}
      <section>
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
          Today
        </h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {stats.map(({ label, value, icon: Icon, accent }) => (
            <div
              key={label}
              className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${accent}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-slate-800">{value}</p>
              <p className="text-xs font-medium text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT SCREENINGS */}
      <section>
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
          Recent Screenings
        </h2>
        <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
          {recentScreenings.map((screening, index) => (
            <div
              key={screening.id}
              className={`flex items-center justify-between px-4 py-3.5 transition-colors hover:bg-slate-50 sm:px-5 ${
                index !== recentScreenings.length - 1 ? 'border-b border-slate-100' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                  #{screening.id}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Patient #{screening.id}
                  </p>
                  <p className="text-xs text-slate-400">{screening.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${severityStyles[screening.result]}`}
                >
                  {screening.result}
                </span>
                <button
                  className="flex items-center gap-0.5 text-xs font-medium text-teal-600 hover:text-teal-700"
                >
                  View
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
