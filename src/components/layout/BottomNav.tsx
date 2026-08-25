import React from 'react';
import { Home, Layers, SpellCheck, ExternalLink, Award } from 'lucide-react';

interface BottomNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenModulePicker?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentPath,
  onNavigate,
  onOpenModulePicker
}) => {
  const isModulePage = currentPath.startsWith('/modulo/');

  const navItems = [
    { label: 'Início', path: '/', icon: Home },
    {
      label: 'Módulos',
      path: '/modulos-menu',
      icon: Layers,
      action: onOpenModulePicker,
      active: isModulePage
    },
    { label: 'A–Z', path: '/gramatica', icon: SpellCheck },
    { label: 'Recursos', path: '/recursos', icon: ExternalLink },
    { label: 'Metas', path: '/certificado', icon: Award }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass-nav border-t pb-[env(safe-area-inset-bottom,0px)] shadow-lg">
      <div className="flex items-center justify-around h-16 px-1 max-w-md mx-auto">
        {navItems.map(item => {
          const isActive = item.active ?? (currentPath === item.path);
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              onClick={() => {
                if (item.action) {
                  item.action();
                } else {
                  onNavigate(item.path);
                }
              }}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-center transition-colors touch-target ${
                isActive
                  ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div className={`p-1 rounded-full transition-transform ${isActive ? 'scale-110 bg-emerald-50 dark:bg-emerald-950/60' : ''}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
