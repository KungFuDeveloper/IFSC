import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  className = '',
  size = 'md',
  label = 'Ouvir pronúncia'
}) => {
  const { speak, stop, isPlaying, currentText } = useSpeech();
  const isThisPlaying = isPlaying && currentText === text.trim();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isThisPlaying) {
      stop();
    } else {
      speak(text);
    }
  };

  const sizeClasses = {
    sm: 'p-1 text-xs',
    md: 'p-1.5 text-sm',
    lg: 'p-2.5 text-base'
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`inline-flex items-center gap-1.5 rounded-lg text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/60 transition-all active:scale-95 ${sizeClasses[size]} ${className}`}
      title={label}
      aria-label={label}
    >
      {isThisPlaying ? (
        <>
          <VolumeX className={`${iconSizes[size]} text-amber-500 animate-pulse`} />
          <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Parar</span>
        </>
      ) : (
        <>
          <Volume2 className={`${iconSizes[size]}`} />
          <span className="text-xs font-medium sr-only sm:not-sr-only">Áudio</span>
        </>
      )}
    </button>
  );
};
