import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, ArrowRight, FileText, Sparkles } from 'lucide-react';
import { ALL_MODULES } from '../../data/modulesData';
import { GRAMMAR_A_Z_INDEX } from '../../data/grammarIndex';

interface SearchResult {
  id: string;
  type: 'module' | 'grammar' | 'vocab';
  title: string;
  subtitle: string;
  moduleId: number;
  topicId?: string;
  badge: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut Cmd/Ctrl + K and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or shortcut
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const list: SearchResult[] = [];

    // 1. Match in Grammar A-Z Index
    GRAMMAR_A_Z_INDEX.forEach(entry => {
      const matchTerm = entry.term.toLowerCase().includes(q);
      const matchDef = entry.shortDefinition.toLowerCase().includes(q);
      const matchKeyword = entry.keywords.some(k => k.toLowerCase().includes(q));
      if (matchTerm || matchDef || matchKeyword) {
        list.push({
          id: `grammar-${entry.id}`,
          type: 'grammar',
          title: entry.term,
          subtitle: entry.shortDefinition,
          moduleId: entry.moduleId,
          topicId: entry.topicId,
          badge: entry.category
        });
      }
    });

    // 2. Match in Modules
    ALL_MODULES.forEach(mod => {
      const matchTitle = mod.title.toLowerCase().includes(q);
      const matchSub = mod.subtitle.toLowerCase().includes(q);
      const matchContext = mod.thematicContext.toLowerCase().includes(q);

      if (matchTitle || matchSub || matchContext) {
        list.push({
          id: `module-${mod.id}`,
          type: 'module',
          title: mod.title,
          subtitle: mod.thematicContext,
          moduleId: mod.id,
          badge: `Módulo ${mod.id}`
        });
      }

      // 3. Match in Vocabulary
      mod.vocabulary.thematicWords.forEach((word, idx) => {
        if (word.word.toLowerCase().includes(q) || word.translation.toLowerCase().includes(q)) {
          list.push({
            id: `vocab-${mod.id}-${idx}`,
            type: 'vocab',
            title: `${word.word} — ${word.translation}`,
            subtitle: `Vocabulário do Módulo ${mod.id} (${mod.vocabulary.situationTitle})`,
            moduleId: mod.id,
            badge: 'Vocabulário'
          });
        }
      });
    });

    return list.slice(0, 15);
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (item: SearchResult) => {
    onClose();
    if (item.topicId) {
      onNavigate(`/modulo/${item.moduleId}#${item.topicId}`);
    } else {
      onNavigate(`/modulo/${item.moduleId}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar regra gramatical, módulo, vocabulário (ex: crase, porquês, hotel)..."
            className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="overflow-y-auto p-3 space-y-1.5 divide-y divide-slate-100 dark:divide-slate-800/60">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-500 dark:text-slate-400 space-y-3">
              <Sparkles className="w-8 h-8 mx-auto text-emerald-500 opacity-80" />
              <p className="text-sm">Digite qualquer tópico para pesquisar em todos os 18 módulos.</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2 px-4">
                {['Crase', 'Porquês', 'Imperativo', 'Dígrafos', 'Regência', 'Hífen', 'Pretérito Imperfeito'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-700 dark:text-slate-300 hover:text-emerald-600 border border-slate-200 dark:border-slate-700"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-10 text-center text-slate-500 dark:text-slate-400">
              <p className="text-sm">Nenhum resultado encontrado para "{query}".</p>
              <p className="text-xs mt-1 text-slate-400">Tente buscar por termos mais gerais ou consulte a Gramática de A–Z.</p>
            </div>
          ) : (
            results.map(item => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="group flex items-start justify-between p-3 rounded-xl hover:bg-emerald-50/70 dark:hover:bg-emerald-950/40 cursor-pointer transition-colors"
              >
                <div className="space-y-1 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-md font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {item.badge}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 mt-2 transition-transform group-hover:translate-x-1" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
