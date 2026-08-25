import React from 'react';
import { ALL_MODULES, getTotalPracticeCount } from '../data/modulesData';
import { ProgressBar } from '../components/common/ProgressBar';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  SpellCheck,
  ExternalLink,
  Award,
  Layers,
  Search
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  completedModules: number[];
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  completedModules,
  onOpenSearch
}) => {
  const totalModules = ALL_MODULES.length;
  const completedCount = completedModules.length;
  const totalPracticeCount = getTotalPracticeCount();

  return (
    <div className="space-y-8 sm:space-y-12 animate-in fade-in duration-200">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-950 text-white p-6 sm:p-10 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-emerald-100">
              Nível Intermediário (B1/B2)
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90">
              IFRS / Rede e-Tec Brasil
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Português Intermediário
            <span className="block text-emerald-300 text-lg sm:text-2xl font-medium mt-1">
              Guia de Gramática, Cultura e Recursos de Estudo
            </span>
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl">
            Seu guia de estudo autônomo e prático com todos os 18 módulos estruturados: explicações gramaticais claras, exemplos comentados com áudio, vocabulário do dia a dia brasileiro e exercícios com gabarito.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('/modulo/1')}
              className="px-5 py-3 rounded-xl bg-white text-emerald-900 font-bold text-sm hover:bg-emerald-50 shadow-md transition-all active:scale-95 flex items-center gap-2 touch-target"
            >
              <span>Começar no Módulo 1</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenSearch}
              className="px-4 py-3 rounded-xl bg-emerald-600/40 hover:bg-emerald-600/60 border border-emerald-400/40 text-white text-sm font-semibold transition-all flex items-center gap-2 touch-target"
            >
              <Search className="w-4 h-4" />
              <span>Buscar Tópico...</span>
            </button>

            <button
              onClick={() => onNavigate('/gramatica')}
              className="px-4 py-3 rounded-xl bg-emerald-600/40 hover:bg-emerald-600/60 border border-emerald-400/40 text-white text-sm font-semibold transition-all flex items-center gap-2 touch-target"
            >
              <SpellCheck className="w-4 h-4" />
              <span>Índice A–Z</span>
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      </section>

      {/* Progress & Milestone Snapshot Card */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="font-bold text-slate-900 dark:text-white text-lg">
                Seu Progresso de Estudo
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Acompanhe seu avanço nos 18 módulos e na resolução dos mais de {totalPracticeCount} exercícios práticos.
            </p>
            <ProgressBar
              completed={completedCount}
              total={totalModules}
              label="Módulos Concluídos"
              size="lg"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-center">
              <span className="block text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                18
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Módulos
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-center">
              <span className="block text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {totalPracticeCount}+
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Exercícios
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-center col-span-2 sm:col-span-1">
              <span className="block text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                35+
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Tópicos A–Z
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 18 Modules Grid */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Grade Curricular dos 18 Módulos
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {completedCount} de {totalModules} concluídos
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {ALL_MODULES.map(mod => {
            const isCompleted = completedModules.includes(mod.id);

            return (
              <div
                key={mod.id}
                onClick={() => onNavigate(`/modulo/${mod.id}`)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between hover:shadow-md ${
                  isCompleted
                    ? 'bg-emerald-50/30 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/80'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600'
                }`}
              >
                <div className="space-y-3">
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Módulo {mod.id}
                    </span>

                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Concluído</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{mod.estimatedMinutes} min</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Context */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {mod.thematicContext}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {mod.subtitle}
                  </p>

                  {/* Grammar Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {mod.grammarTopics.map(g => (
                      <span
                        key={g.id}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60"
                      >
                        {g.title}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span>Estudar Módulo {mod.id}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fast Navigation Banners */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          onClick={() => onNavigate('/gramatica')}
          className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200 dark:border-blue-800/60 cursor-pointer hover:border-blue-400 transition-all space-y-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            <SpellCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 transition-colors">
            Gramática de A–Z
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Consulte qualquer tópico gramatical em ordem alfabética direta, sem depender da sequência dos módulos.
          </p>
        </div>

        <div
          onClick={() => onNavigate('/recursos')}
          className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-200 dark:border-amber-800/60 cursor-pointer hover:border-amber-400 transition-all space-y-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold">
            <ExternalLink className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-amber-600 transition-colors">
            Recursos Externos
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Dicionários, conjugadores, podcasts brasileiros, áudios e links de apoio organizados por habilidade.
          </p>
        </div>

        <div
          onClick={() => onNavigate('/certificado')}
          className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-200 dark:border-emerald-800/60 cursor-pointer hover:border-emerald-400 transition-all space-y-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 transition-colors">
            Metas do Certificado
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Checklist pessoal para acompanhar o cumprimento dos requisitos e média para certificação no IFRS.
          </p>
        </div>
      </section>
    </div>
  );
};
