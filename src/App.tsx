import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/common/SearchModal';
import { HomePage } from './pages/HomePage';
import { ModulePage } from './pages/ModulePage';
import { AZGrammarPage } from './pages/AZGrammarPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { CertificatePage } from './pages/CertificatePage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ALL_MODULES } from './data/modulesData';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1);
      return hash || '/';
    }
    return '/';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [completedModules, setCompletedModules] = useLocalStorage<number[]>(
    'portugues_completed_modules',
    []
  );

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPath(hash || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCompleteModule = (id: number) => {
    setCompletedModules(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  // Route matching
  const cleanPath = currentPath.split('#')[0] || '/';
  const isModuleRoute = cleanPath.startsWith('/modulo/');
  const currentModuleId = isModuleRoute ? parseInt(cleanPath.replace('/modulo/', ''), 10) : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-emerald-500 selection:text-white pb-safe">
      {/* Top Header Bar */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
        completedModulesCount={completedModules.length}
        totalModulesCount={ALL_MODULES.length}
        onNavigate={navigate}
        currentPath={cleanPath}
      />

      {/* Main Container Layout */}
      <div className="flex-1 flex w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 gap-8">
        {/* Responsive Desktop Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          currentModuleId={currentModuleId}
          onSelectModule={id => navigate(`/modulo/${id}`)}
          completedModules={completedModules}
        />

        {/* Dynamic Route Content */}
        <main className="flex-1 min-w-0">
          {cleanPath === '/' && (
            <HomePage
              onNavigate={navigate}
              completedModules={completedModules}
              onOpenSearch={() => setIsSearchOpen(true)}
            />
          )}

          {isModuleRoute && currentModuleId && (
            <ModulePage
              moduleId={currentModuleId}
              onNavigate={navigate}
              completedModules={completedModules}
              onToggleComplete={toggleCompleteModule}
            />
          )}

          {cleanPath === '/gramatica' && (
            <AZGrammarPage onNavigate={navigate} />
          )}

          {cleanPath === '/recursos' && (
            <ResourcesPage onNavigate={navigate} />
          )}

          {cleanPath === '/certificado' && (
            <CertificatePage
              completedModules={completedModules}
              onToggleCompleteModule={toggleCompleteModule}
              onNavigate={navigate}
            />
          )}
        </main>
      </div>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigate}
      />

      {/* Mobile Sticky Thumb Bottom Navigation */}
      <BottomNav
        currentPath={cleanPath}
        onNavigate={navigate}
        onOpenModulePicker={() => setIsSidebarOpen(true)}
      />

      {/* Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
