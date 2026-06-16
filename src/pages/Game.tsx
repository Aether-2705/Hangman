import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../hooks/useGame';
import type { Difficulty } from '../hooks/useGame';
import { HangmanFigure } from '../components/game/HangmanFigure';
import { WordDisplay } from '../components/game/WordDisplay';
import { Keyboard } from '../components/game/Keyboard';
import { Button } from '../components/common/Button';

interface GameProps {
  difficulty: Difficulty;
  onHome: () => void;
}

export const Game: React.FC<GameProps> = ({ difficulty, onHome }) => {
  const {
    wordData,
    guesses,
    status,
    wrongCount,
    maxAttempts,
    guess,
    resetGame
  } = useGame(difficulty);

  const isLost = status === 'lost';
  const isWon = status === 'won';

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto min-h-screen p-4 md:p-8">
      <div className="w-full flex justify-between items-center mb-4">
        <Button variant="secondary" onClick={onHome} className="text-sm px-4 py-1">
          &larr; Menu
        </Button>
        <div className="flex flex-col items-end">
          <span className="font-hand text-xl font-bold">{wordData.category}</span>
          <span className="text-sm opacity-70">Attempts left: {maxAttempts - wrongCount}</span>
        </div>
      </div>

      <HangmanFigure wrongCount={wrongCount} />
      <WordDisplay word={wordData.word} guesses={guesses} isLost={isLost} />
      
      <AnimatePresence mode="wait">
        {status === 'playing' ? (
          <motion.div 
            key="keyboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <Keyboard guesses={guesses} word={wordData.word} onGuess={guess} disabled={status !== 'playing'} />
          </motion.div>
        ) : (
          <motion.div
            key="end-screen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6 mt-8 p-8 rough-border bg-notebook-bg dark:bg-darknotebook-bg"
          >
            <h2 className={`text-5xl font-bold font-hand ${isWon ? 'text-notebook-success dark:text-darknotebook-success' : 'text-notebook-error dark:text-darknotebook-error'}`}>
              {isWon ? 'You Survived!' : 'Game Over!'}
            </h2>
            <p className="text-xl">
              The word was <span className="font-bold">{wordData.word}</span>
            </p>
            <div className="flex gap-4">
              <Button onClick={() => resetGame()}>Play Again</Button>
              <Button variant="secondary" onClick={onHome}>Back to Menu</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
