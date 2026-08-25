import React, { useState, useMemo } from 'react';
import { GRAMMAR_A_Z_INDEX } from '../data/grammarIndex';
import { AZGlossaryItem } from '../components/grammar/AZGlossaryItem';
import { SpellCheck, Search, Filter, Sparkles, BookOpen } from 'lucide-react';

interface AZGrammarPageProps {
  onNavigate: (path: string) => void;
}

export const AZGrammarPage: React.FC<AZGrammarPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedLetter, setSelectedLetter] = useState<string>('Todas');

  const categories = useMemo(() => {
    const set = new Set<string>();
    GRAMMAR_A_Z_INDEX.forEach(item => set.add(item.category));
    return ['Todos', ...Array.from(set).sort()];
  }, []);

  const alphabet = useMemo(() => {
    const letters = new Set<string>();
    GRAMMAR_A_Z_INDEX.forEach(item => {
      const firstChar = item.term.charAt(0).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (/[A-Z]/.test(firstChar)) {
        letters.add(firstChar);
      }
    });
    return ['Todas', ...Array.from(letters).sort()];
  }, []);

  const filteredItems = useMemo(() => {
    return GRAMMAR_A_Z_INDEX.filter(item => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.shortDefinition.toLowerCase().includes(q) ||
        item.keywords.some(k => k.toLowerCase().includes(q));

      const matchesCat = selectedCategory === 'Todos' || item.category === selectedCategory;

      const firstChar = item.term.charAt(0).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const matchesLetter = selectedLetter === 'Todas' || firstChar === selectedLetter;

      return matchesQuery && matchesCat && matchesLetter;
    }).sort((a, b) => a.term.localeCompare(b.term, 'pt-BR'));
  }, [searchQuery, selectedCategory, selectedLetter]);

  const handleNavigateToTopic = (moduleId: number, topicId: string) => {
    onNavigate(`/modulo/${moduleId}#${topicId}`);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <SpellCheck className="w-5 h-5" />
          <span>Índice Remissivo de Gramática</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Gramática de A–Z
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Glossário e índice completo de todos os tópicos gramaticais do curso intermediário, organizados em ordem alfabética. Clique em qualquer tópico para ir direto à explicação detalhada no respectivo módulo.
        </p>

        {/* Search & Filter Bar */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar por termo, regra ou palavra-chave (ex: crase, porquês, regência)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              aria-label="Filtrar por categoria gramatical"
              className="py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'Todos' ? 'Todas as Categorias' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Letter selector bar */}
        <div className="flex flex-wrap gap-1 pt-2">
          {alphabet.map(letter => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedLetter === letter
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-slate-700'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </section>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>{filteredItems.length} tópicos encontrados</span>
        {(searchQuery || selectedCategory !== 'Todos' || selectedLetter !== 'Todas') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Todos');
              setSelectedLetter('Todas');
            }}
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* Topics Grid */}
      {filteredItems.length === 0 ? (
        <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
          <BookOpen className="w-8 h-8 mx-auto text-slate-400" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            Nenhum tópico gramatical encontrado
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Tente buscar com outro termo ou redefinir os filtros.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredItems.map(entry => (
            <AZGlossaryItem
              key={entry.id}
              entry={entry}
              onNavigateToTopic={handleNavigateToTopic}
            />
          ))}
        </div>
      )}
    </div>
  );
};
