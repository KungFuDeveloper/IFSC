import React, { useState } from 'react';
import { PracticeExercise } from '../../data/types';
import { CheckCircle2, XCircle, HelpCircle, Check, Sparkles } from 'lucide-react';

interface ExerciseCardProps {
  exercise: PracticeExercise;
  index: number;
  userAnswer?: number;
  onAnswer: (answerIndex: number, isCorrect: boolean) => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  index,
  userAnswer,
  onAnswer
}) => {
  const [showHint, setShowHint] = useState(false);
  const isAnswered = userAnswer !== undefined;
  const isCorrect = isAnswered && userAnswer === exercise.correctAnswer;

  const handleSelect = (optIndex: number) => {
    if (isAnswered) return;
    const correct = optIndex === exercise.correctAnswer;
    onAnswer(optIndex, correct);
  };

  return (
    <div
      className={`p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border transition-all shadow-sm space-y-4 ${
        isAnswered
          ? isCorrect
            ? 'border-emerald-300 dark:border-emerald-700/80 bg-emerald-50/20 dark:bg-emerald-950/20'
            : 'border-rose-300 dark:border-rose-700/80 bg-rose-50/20 dark:bg-rose-950/20'
          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      {/* Question Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center justify-center border border-slate-200 dark:border-slate-700">
            {index + 1}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Exercício {index + 1}
          </span>
        </div>

        {exercise.hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-xs text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-medium"
            type="button"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{showHint ? 'Ocultar dica' : 'Ver dica'}</span>
          </button>
        )}
      </div>

      {/* Hint Alert */}
      {showHint && exercise.hint && (
        <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-200">
          💡 <strong>Dica:</strong> {exercise.hint}
        </div>
      )}

      {/* Question Prompt */}
      <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
        {exercise.question}
      </p>

      {/* Options List */}
      {exercise.options && (
        <div className="space-y-2 pt-1">
          {exercise.options.map((opt, optIdx) => {
            const isSelected = userAnswer === optIdx;
            const isCorrectOption = optIdx === exercise.correctAnswer;

            let optionStyle =
              'border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200';

            if (isAnswered) {
              if (isCorrectOption) {
                optionStyle =
                  'border-emerald-500 bg-emerald-100/70 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-100 font-semibold';
              } else if (isSelected && !isCorrect) {
                optionStyle =
                  'border-rose-500 bg-rose-100/70 dark:bg-rose-950/70 text-rose-900 dark:text-rose-100';
              } else {
                optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
              }
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelect(optIdx)}
                disabled={isAnswered}
                type="button"
                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 touch-target ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-md border flex items-center justify-center text-[10px] font-bold shrink-0 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span>{opt}</span>
                </div>

                {isAnswered && (
                  <div>
                    {isCorrectOption ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Explanation Box upon answering */}
      {isAnswered && (
        <div
          className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed mt-4 animate-in fade-in duration-200 ${
            isCorrect
              ? 'bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800'
              : 'bg-rose-100/70 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border border-rose-300 dark:border-rose-800'
          }`}
        >
          <div className="flex items-center gap-2 font-bold mb-1">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Excelente! Resposta Correta!</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>Explicação da Resposta Correta:</span>
              </>
            )}
          </div>
          <p>{exercise.explanation}</p>
        </div>
      )}
    </div>
  );
};
