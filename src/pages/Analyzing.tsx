export function Analyzing() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-6 text-white">
      {/* Spinner */}
      <div className="relative mb-8 h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-slate-700" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-teal-400" />
      </div>

      {/* Heading */}
      <h1 className="mb-2 text-xl font-semibold">Analyzing retina...</h1>

      {/* Supporting text */}
      <div className="mb-8 space-y-1 text-center">
        <p className="text-sm text-slate-400">Checking retinal features</p>
        <p className="text-sm text-slate-400">Generating explanation</p>
      </div>

      {/* Progress bar */}
      <div className="h-2 w-full max-w-xs overflow-hidden rounded-full bg-slate-700">
        <div className="h-full w-1/3 animate-pulse rounded-full bg-teal-400" />
      </div>

      {/* Footer note */}
      <p className="mt-10 text-xs text-slate-500">
        Please keep the device connected until analysis is complete.
      </p>
    </div>
  );
}
