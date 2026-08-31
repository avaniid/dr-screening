import { useLanguage } from '@/i18n/LanguageContext';

export function PlaceholderPage({ pageKey }: { pageKey: string }) {
  const { t } = useLanguage();
  const title = t.pages[pageKey] ?? pageKey;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
      <p className="mt-2 text-sm text-slate-500">This page is under construction.</p>
    </div>
  );
}
