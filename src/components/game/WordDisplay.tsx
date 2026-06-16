import React from 'react';
import { motion } from 'framer-motion';

interface WordDisplayProps {
  word: string;
  guesses: Set<string>;
  isLost: boolean;
}

export const WordDisplay: React.FC<WordDisplayProps> = ({ word, guesses, isLost }) => {
  return (
    <div className="flex gap-2 flex-wrap justify-center mt-8 mb-8">
      {word.split('').map((letter, i) => {
        const isGuessed = guesses.has(letter);
        const shouldReveal = isLost && !isGuessed;

        return (
          <div
            key={i}
            className="w-10 h-12 md:w-12 md:h-14 flex items-end justify-center pb-1 border-b-4 border-notebook-text dark:border-darknotebook-text"
          >
            {(isGuessed || isLost) && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-3xl md:text-4xl font-bold font-hand ${
                  shouldReveal ? 'text-notebook-error dark:text-darknotebook-error' : ''
                }`}
              >
                {letter}
              </motion.span>
            )}
          </div>
        );
      })}
    </div>
  );
};