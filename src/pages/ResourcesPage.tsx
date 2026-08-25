import React, { useState, useMemo } from 'react';
import { LEARNING_RESOURCES } from '../data/resourcesData';
import {
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Volume2,
  FileText,
  Radio,
  Sparkles,
  Globe
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (path: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Recursos', icon: Globe },
    { id: 'pronuncia', label: 'Pronúncia & Fonética', icon: Volume2 },
    { id: 'escrita', label: 'Escrita & Dicionários', icon: FileText },
    { id: 'conversacao', label: 'Conversação & Podcasts', icon: Radio },
    { id: 'cultura', label: 'Cultura & Sociedade', icon: Sparkles }
  ];

  const filteredResources = useMemo(() => {
    if (selectedCategory === 'todos') return LEARNING_RESOURCES;
    return LEARNING_RESOURCES.filter(r => r.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <ExternalLink className="w-5 h-5" />
          <span>Curadoria de Materiais Complementares</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Recursos Externos de Estudo
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Seleção criteriosa de ferramentas de referência, dicionários, acervos fonéticos e podcasts brasileiros para complementar a sua prática de português intermediário.
        </p>

        {/* Skill Category Selector */}
        <div className="flex flex-wrap gap-2 pt-3">
          {categories.map(cat => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all touch-target ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredResources.map(res => (
          <div
            key={res.id}
            className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {res.skillName}
                </span>

                {res.verified ? (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Link Verificado</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Requer Verificação Manual</span>
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {res.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {res.description}
              </p>

              {res.notes && (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300">Nota: </strong>
                  {res.notes}
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 hover:bg-emerald-100 text-emerald-800 dark:text-emerald-300 font-bold text-xs border border-emerald-200 dark:border-emerald-800/80 transition-colors"
              >
                <span>Acessar Recurso Externo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
