import { Activity, Menu } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function MobileTopBar({ onMenuClick }: { onMenuClick: () => void }) {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 md:hidden">
      <button
        onClick={onMenuClick}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15 text-teal-600">
          <Activity className="h-5 w-5" />
        </div>
        <span className="text-sm font-semibold text-slate-800">{t.appName}</span>
      </div>
    </div>
  );
}
