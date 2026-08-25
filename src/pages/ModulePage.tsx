import React, { useState, useEffect } from 'react';
import { getModuleById, ALL_MODULES } from '../data/modulesData';
import { GrammarCard } from '../components/grammar/GrammarCard';
import { VocabSection } from '../components/vocabulary/VocabSection';
import { QuizContainer } from '../components/practice/QuizContainer';
import {
  BookOpen,
  MessageSquare,
  Award,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  Share2,
  Check
} from 'lucide-react';

interface ModulePageProps {
  moduleId: number;
  onNavigate: (path: string) => void;
  completedModules: number[];
  onToggleComplete: (id: number) => void;
}

export const ModulePage: React.FC<ModulePageProps> = ({
  moduleId,
  onNavigate,
  completedModules,
  onToggleComplete
}) => {
  const [activeTab, setActiveTab] = useState<'gramatica' | 'vocabulario' | 'pratique'>('gramatica');
  const [copied, setCopied] = useState(false);

  const moduleData = getModuleById(moduleId);
  const isCompleted = completedModules.includes(moduleId);

  const prevModuleId = moduleId > 1 ? moduleId - 1 : null;
  const nextModuleId = moduleId < ALL_MODULES.length ? moduleId + 1 : null;

  // Handle hash scrolling
  useEffect(() => {
    const hash = window.location.hash.split('#')[2] || window.location.hash.split('#')[1];
    if (hash && hash.startsWith('m')) {
      setActiveTab('gramatica');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [moduleId]);

  if (!moduleData) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Módulo não encontrado</h2>
        <button
          onClick={() => onNavigate('/')}
          className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-medium"
        >
          Voltar para o Início
        </button>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Module Header Banner */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80">
              Módulo {moduleData.id} de {ALL_MODULES.length}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{moduleData.estimatedMinutes} min de estudo</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium flex items-center gap-1.5"
              title="Copiar link do módulo"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Compartilhar'}</span>
            </button>

            <button
              onClick={() => onToggleComplete(moduleData.id)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                isCompleted
                  ? 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Módulo Concluído' : 'Marcar como Concluído'}</span>
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {moduleData.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {moduleData.subtitle}
          </p>
        </div>

        {/* Thematic Situation Tag */}
        <div className="pt-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Contexto Temático: <strong className="text-slate-800 dark:text-slate-200">{moduleData.thematicContext}</strong>
          </span>
        </div>
      </section>

      {/* Tabs Navigation (Sticky on Mobile) */}
      <div className="sticky top-16 z-30 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md py-2 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center gap-2 max-w-xl mx-auto p-1 bg-slate-200/70 dark:bg-slate-900 rounded-2xl">
          <button
            onClick={() => setActiveTab('gramatica')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 touch-target ${
              activeTab === 'gramatica'
                ? 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Gramática ({moduleData.grammarTopics.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('vocabulario')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 touch-target ${
              activeTab === 'vocabulario'
                ? 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Vocabulário & Situação</span>
          </button>

          <button
            onClick={() => setActiveTab('pratique')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 touch-target ${
              activeTab === 'pratique'
                ? 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Pratique ({moduleData.practice.length})</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <main className="space-y-6">
        {activeTab === 'gramatica' && (
          <div className="space-y-6">
            {moduleData.grammarTopics.map(topic => (
              <GrammarCard key={topic.id} topic={topic} />
            ))}
          </div>
        )}

        {activeTab === 'vocabulario' && (
          <VocabSection vocabulary={moduleData.vocabulary} />
        )}

        {activeTab === 'pratique' && (
          <QuizContainer
            moduleId={moduleData.id}
            exercises={moduleData.practice}
            onCompleteModule={() => onToggleComplete(moduleData.id)}
          />
        )}
      </main>

      {/* Module Pager Buttons (Previous / Next) */}
      <div className="flex items-center justify-between gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
        {prevModuleId ? (
          <button
            onClick={() => onNavigate(`/modulo/${prevModuleId}`)}
            className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 shadow-sm transition-all touch-target"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Módulo {prevModuleId}</span>
          </button>
        ) : (
          <div />
        )}

        {nextModuleId ? (
          <button
            onClick={() => onNavigate(`/modulo/${nextModuleId}`)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-xs sm:text-sm font-bold text-white shadow-md transition-all touch-target"
          >
            <span>Módulo {nextModuleId}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => onNavigate('/certificado')}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-xs sm:text-sm font-bold text-white shadow-md transition-all touch-target"
          >
            <span>Ver Metas Finais</span>
            <Award className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
