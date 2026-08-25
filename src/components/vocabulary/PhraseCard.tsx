import React from 'react';
import { UsefulPhrase } from '../../data/types';
import { AudioButton } from '../common/AudioButton';
import { MessageSquareQuote } from 'lucide-react';

interface PhraseCardProps {
  item: UsefulPhrase;
}

export const PhraseCard: React.FC<PhraseCardProps> = ({ item }) => {
  return (
    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-start justify-between gap-3 group">
      <div className="space-y-1 flex-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
          {item.situation}
        </span>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          {item.phrase}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          "{item.translation}"
        </p>
      </div>
      <AudioButton text={item.phrase} size="sm" />
    </div>
  );
};
