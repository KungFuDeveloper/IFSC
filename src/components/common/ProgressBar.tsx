import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  color?: 'emerald' | 'amber' | 'blue';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completed,
  total,
  showText = true,
  size = 'md',
  label = 'Progresso',
  color = 'emerald'
}) => {
  const percentage = total > 0 ? Math.min(100, Math.round((completed / total) * 100)) : 0;

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };

  const colorClasses = {
    emerald: 'bg-emerald-600 dark:bg-emerald-500',
    amber: 'bg-amber-500 dark:bg-amber-400',
    blue: 'bg-blue-600 dark:bg-blue-500'
  };

  return (
    <div className="w-full">
      {showText && (
        <div className="flex justify-between items-center text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
          <span>{label}</span>
          <span className="font-semibold text-slate-900 dark:text-white">
            {completed} / {total} ({percentage}%)
          </span>
        </div>
      )}
      <div className={`w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden ${heightClasses[size]}`}>
        <div
          className={`${heightClasses[size]} ${colorClasses[color]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};
