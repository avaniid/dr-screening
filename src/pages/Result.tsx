import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, AlertTriangle, ShieldAlert } from 'lucide-react';

type View = 'original' | 'overlay';

export function Result() {
  const navigate = useNavigate();
  const [view, setView] = useState<View>('overlay');
  const lowConfidence = false;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/90 px-4 py-3.5 backdrop-blur">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-base font-semibold text-slate-800">Screening Result</h1>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
          Patient #104
        </span>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {/* Image area */}
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-slate-200 bg-slate-200/60 text-sm text-slate-400">
              Retina Image + Heatmap Overlay
            </div>

            {/* Segmented control */}
            <div className="inline-flex w-full rounded-xl bg-slate-100 p-1">
              <button
                onClick={() => setView('original')}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  view === 'original'
                    ? 'bg-white text-slate-800 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Original
              </button>
              <button
                onClick={() => setView('overlay')}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  view === 'overlay'
                    ? 'bg-white text-slate-800 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Overlay
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Screening Result
            </h2>

            {/* Severity badge */}
            <div className="mb-4 inline-flex items-center gap-3 rounded-2xl bg-yellow-400/15 px-4 py-3 ring-1 ring-inset ring-yellow-400/30">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-white">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-yellow-700">
                MODERATE DR
              </span>
            </div>

            {/* Warning line */}
            <div className="mb-5 flex items-center gap-2 text-sm text-amber-600">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              Specialist review recommended
            </div>

            {/* Confidence */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Confidence</span>
                <span className="text-sm font-semibold text-slate-800">87%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[87%] rounded-full bg-teal-500" />
              </div>
            </div>

            {lowConfidence ? (
              /* Low-confidence banner */
              <div className="mb-6 rounded-2xl border border-amber-300 bg-amber-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-amber-700">
                  <ShieldAlert className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-semibold">Low confidence result</span>
                </div>
                <p className="text-sm leading-relaxed text-amber-800">
                  The model isn't confident about this result. We recommend a manual review by a
                  specialist rather than relying on this screening alone.
                </p>
              </div>
            ) : (
              <>
                {/* Why flagged */}
                <div className="mb-5">
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Why was this flagged?
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Highlighted regions show areas that influenced the AI result.
                  </p>
                </div>

                {/* Possible findings */}
                <div className="mb-6">
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Possible Findings
                  </h3>
                  <ul className="space-y-2">
                    {['Abnormal retinal regions', 'Possible bleeding'].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Bottom button */}
            <div className="mt-auto pt-2">
              {lowConfidence ? (
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50">
                  Request Manual Review
                </button>
              ) : (
                <button
                  onClick={() => navigate('/recommendation')}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-700 active:scale-[0.99]"
                >
                  View Recommendation
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
