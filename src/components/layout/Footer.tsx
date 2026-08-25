import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, Heart, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [isOnline, setIsOnline] = useState<boolean>(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Info */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-semibold text-slate-700 dark:text-slate-300">
            Português Intermediário — Guia de Gramática e Recursos
          </p>
          <p>
            Companheiro de estudos para o curso <em>Língua Portuguesa e Cultura Brasileira para Estrangeiros (IFRS/Rede e-Tec)</em>.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <button onClick={() => onNavigate('/')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Início
          </button>
          <button onClick={() => onNavigate('/gramatica')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Gramática A–Z
          </button>
          <button onClick={() => onNavigate('/recursos')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Recursos Externos
          </button>
          <button onClick={() => onNavigate('/certificado')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Metas & Checklist
          </button>
        </div>

        {/* Right: PWA & Offline Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          {isOnline ? (
            <>
              <Wifi className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400">Online & PWA Caching</span>
            </>
          ) : (
            <>
              <WifiOff className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400">Modo Offline Ativo</span>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};
