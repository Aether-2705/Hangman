import React, { useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const KEYS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

interface KeyboardProps {
  guesses: Set<string>;
  word: string;
  onGuess: (letter: string) => void;
  disabled?: boolean;
}

export const Keyboard: React.FC<KeyboardProps> = ({ guesses, word, onGuess, disabled }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;
      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        onGuess(key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onGuess, disabled]);

  return (
    <div className="flex flex-col gap-2 items-center w-full max-w-lg mt-8">
      {KEYS.map((row, i) => (
        <div key={i} className="flex gap-1 md:gap-2 justify-center w-full">
          {row.map(key => {
            const isGuessed = guesses.has(key);
            const isCorrect = isGuessed && word.includes(key);
            const isWrong = isGuessed && !word.includes(key);

            return (
              <button
                key={key}
                disabled={isGuessed || disabled}
                onClick={() => onGuess(key)}
                className={twMerge(
                  clsx(
                    "flex-1 md:flex-none md:w-10 h-12 flex items-center justify-center font-bold text-xl rounded-md transition-colors rough-border",
                    !isGuessed && "hover:bg-notebook-text hover:text-notebook-bg dark:hover:bg-darknotebook-text dark:hover:text-darknotebook-bg cursor-pointer",
                    isCorrect && "bg-notebook-success text-white dark:bg-darknotebook-success border-transparent",
                    isWrong && "bg-notebook-error text-white dark:bg-darknotebook-error border-transparent opacity-50",
                    isGuessed && "cursor-not-allowed"
                  )
                )}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};
