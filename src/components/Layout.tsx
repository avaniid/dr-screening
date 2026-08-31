import { useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { MobileTopBar } from './MobileTopBar';
import { useState } from 'react';

const fullscreenRoutes = ['/capture', '/quality-check', '/analyzing'];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isFullscreen = fullscreenRoutes.includes(location.pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (isFullscreen) {
    return <div className="min-h-screen bg-slate-50">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop / tablet sidebar — fixed */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 md:block">
        <Sidebar />
      </aside>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-64">
            <Sidebar onNavigate={() => setDrawerOpen(false)} />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="md:pl-64">
        <MobileTopBar onMenuClick={() => setDrawerOpen(true)} />
        <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
