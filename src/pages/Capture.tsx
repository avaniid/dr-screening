import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Camera, Upload } from 'lucide-react';

export function Capture() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-4">
        <button
          onClick={() => navigate('/patient-details')}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800"
          aria-label="Back to patient details"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold">Capture Retina</h1>
      </div>

      {/* Main capture area */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-6">
        {/* Instructional text */}
        <p className="mb-8 text-center text-sm text-slate-400">
          Position the eye inside the circle.
        </p>

        {/* Circular guide frame */}
        <div className="relative mb-8">
          <div className="h-64 w-64 rounded-full border-2 border-dashed border-slate-500 sm:h-72 sm:w-72" />
          {/* Corner accent ticks */}
          <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-teal-400" />
          <div className="absolute bottom-0 left-1/2 h-4 w-px -translate-x-1/2 bg-teal-400" />
          <div className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-teal-400" />
          <div className="absolute right-0 top-1/2 h-px w-4 -translate-y-1/2 bg-teal-400" />
        </div>

        {/* Checkmark hints */}
        <div className="mb-8 space-y-2.5">
          <div className="flex items-center gap-2.5 text-sm text-slate-300">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
              <Check className="h-3.5 w-3.5" />
            </span>
            Good lighting
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-300">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
              <Check className="h-3.5 w-3.5" />
            </span>
            Hold phone steady
          </div>
        </div>

        {/* Capture button */}
        <button className="flex h-18 w-18 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/15 transition-all hover:bg-white/20 active:scale-95">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg">
            <Camera className="h-6 w-6" />
          </span>
        </button>

        {/* or + Upload */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-slate-500">or</span>
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800">
            <Upload className="h-4 w-4" />
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
}
