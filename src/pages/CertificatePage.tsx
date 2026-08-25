import React from 'react';
import { CERTIFICATE_MILESTONES } from '../data/certificateMilestones';
import { ALL_MODULES } from '../data/modulesData';
import { ProgressBar } from '../components/common/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  Award,
  CheckCircle2,
  Circle,
  AlertCircle,
  FileCheck,
  RotateCcw,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

interface CertificatePageProps {
  completedModules: number[];
  onToggleCompleteModule: (id: number) => void;
  onNavigate: (path: string) => void;
}

export const CertificatePage: React.FC<CertificatePageProps> = ({
  completedModules,
  onToggleCompleteModule,
  onNavigate
}) => {
  const [checklistState, setChecklistState] = useLocalStorage<Record<string, boolean>>(
    'portugues_checklist_milestones',
    {}
  );

  const totalMilestones = CERTIFICATE_MILESTONES.length;
  const completedMilestonesCount = CERTIFICATE_MILESTONES.filter(
    ms => checklistState[ms.id]
  ).length;

  const toggleMilestone = (id: string) => {
    setChecklistState(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleResetChecklist = () => {
    if (window.confirm('Deseja realmente resetar o checklist de metas?')) {
      setChecklistState({});
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <GraduationCap className="w-5 h-5" />
          <span>Metas Pessoais de Estudo & Certificação</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Checklist do Certificado do Curso
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Acompanhe o cumprimento das metas do curso <em>"Língua Portuguesa e Cultura Brasileira para Estrangeiros — Nível Intermediário"</em> (IFRS/Rede e-Tec).
        </p>

        {/* Disclaimer Alert */}
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200 mt-2">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold">Aviso de Controle de Estudo</h4>
            <p className="leading-relaxed">
              Este aplicativo é o seu guia pessoal de estudo. O certificado oficial é emitido exclusivamente no ambiente virtual Moodle do IFRS aos alunos matriculados que atingirem nota final igual ou superior a 60% nas avaliações do curso.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Progress Overview */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-slate-900 dark:text-white text-lg">
            Progresso Geral das Metas
          </h2>
          {completedMilestonesCount > 0 && (
            <button
              onClick={handleResetChecklist}
              className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1 font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Resetar Checklist</span>
            </button>
          )}
        </div>

        <ProgressBar
          completed={completedMilestonesCount}
          total={totalMilestones}
          label="Metas Concluídas"
          size="lg"
        />
      </section>

      {/* Interactive Milestones List */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Metas de Aprendizagem e Requisitos
        </h3>

        <div className="space-y-3">
          {CERTIFICATE_MILESTONES.map(ms => {
            const isChecked = !!checklistState[ms.id];

            return (
              <div
                key={ms.id}
                onClick={() => toggleMilestone(ms.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                  isChecked
                    ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {isChecked ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600 hover:text-slate-400" />
                  )}
                </div>

                <div className="space-y-1 flex-1">
                  <h4
                    className={`text-sm sm:text-base font-bold ${
                      isChecked
                        ? 'text-emerald-900 dark:text-emerald-200 line-through'
                        : 'text-slate-900 dark:text-slate-100'
                    }`}
                  >
                    {ms.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ms.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 18 Modules Rapid Completion Matrix */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Módulos Estudados ({completedModules.length}/18)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Clique nos números para marcar ou desmarcar rapidamente o estudo de cada módulo:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-18 gap-2 pt-2">
          {ALL_MODULES.map(mod => {
            const isDone = completedModules.includes(mod.id);
            return (
              <button
                key={mod.id}
                onClick={() => onToggleCompleteModule(mod.id)}
                className={`py-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 touch-target ${
                  isDone
                    ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400/40'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
                title={`Módulo ${mod.id}: ${mod.thematicContext}`}
              >
                <span>{mod.id}</span>
                {isDone && <CheckCircle2 className="w-3 h-3" />}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
