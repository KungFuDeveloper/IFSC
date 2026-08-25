import React from 'react';
import { GrammarTopic } from '../../data/types';
import { AudioButton } from '../common/AudioButton';
import { Info, AlertCircle, BookOpen } from 'lucide-react';

interface GrammarCardProps {
  topic: GrammarTopic;
}

export const GrammarCard: React.FC<GrammarCardProps> = ({ topic }) => {
  return (
    <article
      id={topic.id}
      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-7 shadow-sm scroll-mt-20 space-y-6"
    >
      {/* Header */}
      <div className="space-y-2 border-b border-slate-100 dark:border-slate-800/80 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
            {topic.category}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          {topic.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {topic.summary}
        </p>
      </div>

      {/* Rules & Tables */}
      {topic.rules.map((rule, idx) => (
        <div key={idx} className="space-y-3 bg-slate-50 dark:bg-slate-950/40 rounded-xl p-4 sm:p-5 border border-slate-200/70 dark:border-slate-800/60">
          <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{rule.title}</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {rule.description}
          </p>

          {/* Table */}
          {rule.table && (
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-3">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    {rule.table.headers.map((h, i) => (
                      <th key={i} className="p-2.5 sm:p-3">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {rule.table.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-2.5 sm:p-3 text-slate-700 dark:text-slate-300">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Bullet points */}
          {rule.items && rule.items.length > 0 && (
            <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-2">
              {rule.items.map((it, itIdx) => (
                <li key={itIdx} className="leading-relaxed">
                  {it}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* Example Sentences */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Exemplos em Contexto (Português & Inglês)
        </h4>
        <div className="space-y-2.5">
          {topic.examples.map((ex, exIdx) => (
            <div
              key={exIdx}
              className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30"
            >
              <div className="space-y-1 flex-1">
                <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100">
                  {ex.pt}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
                  "{ex.en}"
                </p>
                {ex.highlight && (
                  <span className="inline-block text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-900/50 px-2 py-0.5 rounded">
                    Destaque: {ex.highlight}
                  </span>
                )}
              </div>
              <AudioButton text={ex.pt} size="sm" />
            </div>
          ))}
        </div>
      </div>

      {/* Contrast notes / Pitfalls */}
      {topic.contrastNotes && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className="font-semibold text-amber-800 dark:text-amber-300">
              Atenção / Variação Linguística & Pegadinhas:
            </h5>
            <p className="leading-relaxed">{topic.contrastNotes}</p>
          </div>
        </div>
      )}
    </article>
  );
};
