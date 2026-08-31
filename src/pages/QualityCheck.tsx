import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, X, AlertTriangle, Camera, RefreshCw } from 'lucide-react';

export function QualityCheck() {
  const navigate = useNavigate();
  const passed = true;

  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-4">
        <button
          onClick={() => navigate('/capture')}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800"
          aria-label="Back to capture"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold">Image Check</h1>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pb-6">
        {passed ? (
          <div className="flex flex-1 flex-col">
            {/* Image preview placeholder */}
            <div className="mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-2xl bg-slate-800 text-sm text-slate-500">
              Retina Image
            </div>

            {/* Image quality checks */}
            <div className="mx-auto mt-7 w-full max-w-xs">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                Image Quality
              </h2>
              <div className="space-y-2.5">
                {['Brightness — Good', 'Sharpness — Good', 'Position — Good'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-slate-800/60 px-4 py-3 text-sm"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* Confirmation box */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-teal-500/30 bg-teal-500/10 px-4 py-3.5 text-sm font-semibold text-teal-300">
                <Check className="h-5 w-5 shrink-0" />
                Image is suitable
              </div>
            </div>

            {/* Bottom buttons */}
            <div className="mt-auto flex gap-3 pt-6">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-600 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800">
                <RefreshCw className="h-4 w-4" />
                Retake
              </button>
              <button
                onClick={() => navigate('/analyzing')}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-700 active:scale-[0.98]"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Failure state */
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
              <AlertTriangle className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold text-white">Image needs to be retaken</h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              The image is too blurry. Please hold the phone steady and capture the eye again.
            </p>
            <button
              onClick={() => navigate('/capture')}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.98]"
            >
              <Camera className="h-5 w-5" />
              Retake
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
