import React from 'react';
import { GrammarIndexEntry } from '../../data/types';
import { ArrowRight, BookOpen, Bookmark } from 'lucide-react';

interface AZGlossaryItemProps {
  entry: GrammarIndexEntry;
  onNavigateToTopic: (moduleId: number, topicId: string) => void;
}

export const AZGlossaryItem: React.FC<AZGlossaryItemProps> = ({ entry, onNavigateToTopic }) => {
  return (
    <div
      onClick={() => onNavigateToTopic(entry.moduleId, entry.topicId)}
      className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/80 dark:hover:border-emerald-500/80 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            {entry.category}
          </span>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
            Módulo {entry.moduleId}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {entry.term}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {entry.shortDefinition}
        </p>

        {/* Keywords tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {entry.keywords.slice(0, 4).map((kw, i) => (
            <span
              key={i}
              className="text-[10px] px-1.5 py-0.5 rounded bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400"
            >
              #{kw}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
        <span>Ir para a explicação completa</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};
