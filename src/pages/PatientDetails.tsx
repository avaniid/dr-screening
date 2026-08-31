import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Eye, EyeOff } from 'lucide-react';

type Eye = 'left' | 'right' | null;

export function PatientDetails() {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState('');
  const [age, setAge] = useState('');
  const [eye, setEye] = useState<Eye>(null);

  const isValid = patientId.trim() !== '' && age.trim() !== '' && eye !== null;

  return (
    <div className="mx-auto max-w-lg space-y-6">
      {/* Back + heading */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100"
          aria-label="Back to dashboard"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-semibold text-slate-800">New Screening</h1>
      </div>

      {/* Patient information */}
      <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          Patient Information
        </h2>

        <div className="space-y-4">
          {/* Patient ID */}
          <div>
            <label htmlFor="patient-id" className="mb-1.5 block text-sm font-medium text-slate-700">
              Patient ID
            </label>
            <input
              id="patient-id"
              type="text"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter patient ID"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            />
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="mb-1.5 block text-sm font-medium text-slate-700">
              Age
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
              min={0}
              max={150}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            />
          </div>

          {/* Screening eye */}
          <div>
            <span className="mb-1.5 block text-sm font-medium text-slate-700">Screening eye</span>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setEye('left')}
                className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                  eye === 'left'
                    ? 'border-teal-500 bg-teal-50 text-teal-700 ring-1 ring-teal-500'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Eye className="h-4 w-4" />
                Left Eye
              </button>
              <button
                onClick={() => setEye('right')}
                className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                  eye === 'right'
                    ? 'border-teal-500 bg-teal-50 text-teal-700 ring-1 ring-teal-500'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <EyeOff className="h-4 w-4" />
                Right Eye
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Continue button */}
      <div className="flex justify-end">
        <button
          onClick={() => navigate('/capture')}
          disabled={!isValid}
          className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
            isValid
              ? 'bg-teal-600 text-white shadow-sm hover:bg-teal-700 hover:shadow-md active:scale-[0.98]'
              : 'cursor-not-allowed bg-slate-100 text-slate-400'
          }`}
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
