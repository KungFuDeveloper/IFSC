import React, { useState } from 'react';
import { PracticeExercise } from '../../data/types';
import { ExerciseCard } from './ExerciseCard';
import { ProgressBar } from '../common/ProgressBar';
import { Award, RotateCcw, CheckCircle, Sparkles } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface QuizContainerProps {
  moduleId: number;
  exercises: PracticeExercise[];
  onCompleteModule?: () => void;
}

interface ModuleQuizState {
  answers: Record<number, number>; // exerciseIndex -> selectedOption
  score: number;
  isFinished: boolean;
}

export const QuizContainer: React.FC<QuizContainerProps> = ({
  moduleId,
  exercises,
  onCompleteModule
}) => {
  const [quizProgress, setQuizProgress] = useLocalStorage<Record<number, ModuleQuizState>>(
    'portugues_quiz_progress',
    {}
  );

  const currentModuleState = quizProgress[moduleId] || {
    answers: {},
    score: 0,
    isFinished: false
  };

  const answeredCount = Object.keys(currentModuleState.answers).length;
  const isFinished = answeredCount === exercises.length;

  const handleAnswer = (index: number, answerIndex: number, isCorrect: boolean) => {
    const updatedAnswers = {
      ...currentModuleState.answers,
      [index]: answerIndex
    };

    let calculatedScore = 0;
    exercises.forEach((ex, idx) => {
      if (updatedAnswers[idx] === ex.correctAnswer) {
        calculatedScore += 1;
      }
    });

    const finished = Object.keys(updatedAnswers).length === exercises.length;

    setQuizProgress(prev => ({
      ...prev,
      [moduleId]: {
        answers: updatedAnswers,
        score: calculatedScore,
        isFinished: finished
      }
    }));

    if (finished && onCompleteModule) {
      onCompleteModule();
    }
  };

  const handleReset = () => {
    setQuizProgress(prev => {
      const copy = { ...prev };
      delete copy[moduleId];
      return copy;
    });
  };

  const percentage = exercises.length > 0 ? Math.round((currentModuleState.score / exercises.length) * 100) : 0;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Quiz Header & Progress */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Pratique & Fixação — Módulo {moduleId}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Resolva as questões para testar seus conhecimentos gramaticais e contextuais.
            </p>
          </div>

          {answeredCount > 0 && (
            <button
              onClick={handleReset}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 self-start sm:self-auto transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar Quiz</span>
            </button>
          )}
        </div>

        <ProgressBar
          completed={answeredCount}
          total={exercises.length}
          label="Progresso das Questões"
        />

        {/* Completion Result Card */}
        {isFinished && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-green-500/10 border border-emerald-300 dark:border-emerald-700 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-sm">
                {percentage}%
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  {percentage >= 70 ? '🎉 Parabéns! Módulo Concluído!' : '📚 Prática Concluída!'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Você acertou <strong>{currentModuleState.score}</strong> de <strong>{exercises.length}</strong> questões.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exercises List */}
      <div className="space-y-4">
        {exercises.map((exercise, idx) => (
          <ExerciseCard
            key={exercise.id || idx}
            exercise={exercise}
            index={idx}
            userAnswer={currentModuleState.answers[idx]}
            onAnswer={(ansIdx, correct) => handleAnswer(idx, ansIdx, correct)}
          />
        ))}
      </div>
    </div>
  );
};
