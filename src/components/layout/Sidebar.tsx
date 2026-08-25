import React from 'react';
import { X, CheckCircle2, Circle, BookOpen, Layers } from 'lucide-react';
import { ALL_MODULES } from '../../data/modulesData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentModuleId?: number;
  onSelectModule: (id: number) => void;
  completedModules: number[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  currentModuleId,
  onSelectModule,
  completedModules
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer / Sidebar container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } lg:static lg:z-0 lg:h-[calc(100vh-4rem)] lg:sticky lg:top-16`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="font-bold text-slate-900 dark:text-white text-base">
              Módulos do Curso (1–18)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Module List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {ALL_MODULES.map(mod => {
            const isSelected = currentModuleId === mod.id;
            const isCompleted = completedModules.includes(mod.id);

            return (
              <button
                key={mod.id}
                onClick={() => {
                  onSelectModule(mod.id);
                  onClose();
                }}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 group ${
                  isSelected
                    ? 'bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700/80 shadow-sm'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-transparent'
                }`}
              >
                {/* Status icon / number badge */}
                <div className="shrink-0 mt-0.5">
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                        isSelected
                          ? 'border-emerald-600 text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/50'
                          : 'border-slate-300 dark:border-slate-600 text-slate-500 group-hover:border-slate-400'
                      }`}
                    >
                      {mod.id}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-xs sm:text-sm font-semibold truncate ${
                      isSelected
                        ? 'text-emerald-900 dark:text-emerald-200'
                        : 'text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white'
                    }`}
                  >
                    Módulo {mod.id}: {mod.thematicContext}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {mod.grammarTopics.map(g => g.title).join(' • ')}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-[11px] text-slate-500 dark:text-slate-400 text-center">
          {completedModules.length} de 18 módulos concluídos
        </div>
      </aside>
    </>
  );
};
