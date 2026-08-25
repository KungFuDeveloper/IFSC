import React from 'react';
import { ModuleVocabulary } from '../../data/types';
import { AudioButton } from '../common/AudioButton';
import { PhraseCard } from './PhraseCard';
import { Compass, MessageCircle, Sparkles, BookMarked } from 'lucide-react';

interface VocabSectionProps {
  vocabulary: ModuleVocabulary;
}

export const VocabSection: React.FC<VocabSectionProps> = ({ vocabulary }) => {
  return (
    <section className="space-y-8 animate-in fade-in duration-200">
      {/* Cultural Notes Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-amber-500/10 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
        <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm sm:text-base">
          <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>Contexto Cultural Brasileiro: {vocabulary.situationTitle}</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {vocabulary.culturalNotes}
        </p>
      </div>

      {/* Situational Dialogue (if available) */}
      {vocabulary.dialogue && vocabulary.dialogue.length > 0 && (
        <div className="space-y-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>Diálogo em Situação Real</span>
          </h3>

          <div className="space-y-3">
            {vocabulary.dialogue.map((line, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800"
              >
                <div className="space-y-1 flex-1">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                    {line.speaker}:
                  </span>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    "{line.text}"
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    "{line.translation}"
                  </p>
                </div>
                <AudioButton text={line.text} size="sm" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Thematic Vocabulary Words Grid */}
      <div className="space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookMarked className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>Vocabulário Temático Chave</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {vocabulary.thematicWords.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-emerald-700 dark:text-emerald-400">
                    {item.word}
                  </h4>
                  <AudioButton text={item.word} size="sm" />
                </div>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  {item.translation}
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Exemplo: </span>
                    {item.example}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Useful Phrases */}
      {vocabulary.usefulPhrases && vocabulary.usefulPhrases.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>Expressões e Frases Úteis do Cotidiano</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {vocabulary.usefulPhrases.map((phrase, idx) => (
              <PhraseCard key={idx} item={phrase} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
