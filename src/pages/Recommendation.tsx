import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Check, Plus, Home } from 'lucide-react';

type ReferralStatus = 'none' | 'created';

export function Recommendation() {
  const navigate = useNavigate();
  const [referral, setReferral] = useState<ReferralStatus>('none');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-slate-200 bg-white/90 px-4 py-3.5 backdrop-blur">
        <button
          onClick={() => navigate('/result')}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100"
          aria-label="Back to result"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-base font-semibold text-slate-800">Recommendation</h1>
      </div>

      <div className="mx-auto max-w-lg px-4 py-6">
        {/* Heading */}
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
          Recommendation
        </h2>

        {/* Risk level badge */}
        <div className="mb-4 inline-flex items-center gap-3 rounded-2xl bg-yellow-400/15 px-4 py-3 ring-1 ring-inset ring-yellow-400/30">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-white">
            <AlertTriangle className="h-5 w-5" />
          </span>
          <span className="text-base font-bold tracking-tight text-yellow-700">
            MODERATE RISK
          </span>
        </div>

        {/* Body text */}
        <p className="mb-6 text-sm leading-relaxed text-slate-600">
          Possible retinal changes were detected. Please refer the patient to an eye specialist for
          further examination.
        </p>

        {/* Referral status */}
        <div className="mb-6">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            Referral status
          </h3>
          <div className="space-y-2.5">
            <button
              onClick={() => setReferral('none')}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-medium transition-all ${
                referral === 'none'
                  ? 'border-teal-500 bg-teal-50 text-teal-700 ring-1 ring-teal-500'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                  referral === 'none' ? 'border-teal-500 bg-teal-500' : 'border-slate-300'
                }`}
              >
                {referral === 'none' && <Check className="h-3 w-3 text-white" />}
              </span>
              Not referred
            </button>
            <button
              onClick={() => setReferral('created')}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-medium transition-all ${
                referral === 'created'
                  ? 'border-teal-500 bg-teal-50 text-teal-700 ring-1 ring-teal-500'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                  referral === 'created' ? 'border-teal-500 bg-teal-500' : 'border-slate-300'
                }`}
              >
                {referral === 'created' && <Check className="h-3 w-3 text-white" />}
              </span>
              Referral created
            </button>
          </div>
        </div>

        {/* Add to Referral Queue */}
        <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-700 active:scale-[0.99]">
          <Plus className="h-4 w-4" />
          Add to Referral Queue
        </button>

        {/* Finish Screening */}
        <button
          onClick={() => navigate('/')}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
        >
          <Home className="h-4 w-4" />
          Finish Screening
        </button>
      </div>
    </div>
  );
}
