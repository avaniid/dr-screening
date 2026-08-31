import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Eye, History, FileText, Settings as SettingsIcon, Wifi, WifiOff, Activity } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import type { Language } from '@/i18n/translations';

const navItems = [
  { to: '/', labelKey: 'dashboard', icon: LayoutDashboard },
  { to: '/screening', labelKey: 'screening', icon: Eye },
  { to: '/history', labelKey: 'history', icon: History },
  { to: '/referrals', labelKey: 'referrals', icon: FileText },
  { to: '/settings', labelKey: 'settings', icon: SettingsIcon },
] as const;

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { language, setLanguage, t } = useLanguage();
  const isOnline = useOnlineStatus();

  return (
    <div className="flex h-full flex-col bg-slate-800 text-slate-100">
      {/* App name header */}
      <div className="flex items-center gap-3 border-b border-slate-700/60 px-5 py-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300">
          <Activity className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-lg font-semibold leading-tight tracking-tight">{t.appName}</h1>
          <p className="truncate text-xs text-slate-400">{t.appTagline}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map(({ to, labelKey, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-teal-500/15 text-teal-300'
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
              }`
            }
          >
            <Icon className="h-5 w-5 shrink-0" />
            <span>{t[labelKey]}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer: language toggle + online status */}
      <div className="space-y-3 border-t border-slate-700/60 px-5 py-4">
        <div className="flex items-center gap-1 rounded-lg bg-slate-700/50 p-1">
          {(['EN', 'HI'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`flex-1 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                language === lang
                  ? 'bg-slate-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs">
          {isOnline ? (
            <>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-slate-300">{t.online}</span>
              <Wifi className="ml-auto h-3.5 w-3.5 text-slate-500" />
            </>
          ) : (
            <>
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
              <span className="text-slate-400">{t.offline}</span>
              <WifiOff className="ml-auto h-3.5 w-3.5 text-slate-600" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
