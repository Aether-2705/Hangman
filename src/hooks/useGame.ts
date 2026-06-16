import { useState, useCallback, useEffect } from 'react';
import { getRandomWord } from '../data/words';
import { useStats } from './useStats';

export type GameStatus = 'playing' | 'won' | 'lost';
export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'All';

export const useGame = (difficulty: Difficulty) => {
  const { updateStats } = useStats();
  const [wordData, setWordData] = useState(() => getRandomWord(difficulty));
  const [guesses, setGuesses] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<GameStatus>('playing');
  const maxAttempts = 6;

  const resetGame = useCallback((newDifficulty?: Difficulty) => {
    setWordData(getRandomWord(newDifficulty || difficulty));
    setGuesses(new Set());
    setStatus('playing');
  }, [difficulty]);

  const guess = useCallback((letter: string) => {
    if (status !== 'playing') return;
    
    const upperLetter = letter.toUpperCase();
    if (guesses.has(upperLetter)) return;

    setGuesses(prev => {
      const next = new Set(prev).add(upperLetter);
      return next;
    });
  }, [guesses, status]);

  // Check win/loss conditions
  useEffect(() => {
    if (status !== 'playing') return;

    const wordLetters = new Set(wordData.word.split(''));
    let correctCount = 0;
    let wrongCount = 0;

    guesses.forEach(g => {
      if (wordLetters.has(g)) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    // Check if won
    let hasWon = true;
    wordLetters.forEach(l => {
      if (!guesses.has(l)) hasWon = false;
    });

    if (hasWon) {
      setStatus('won');
      updateStats(true);
    } else if (wrongCount >= maxAttempts) {
      setStatus('lost');
      updateStats(false);
    }
  }, [guesses, wordData.word, status, updateStats]);

  const wrongCount = Array.from(guesses).filter(g => !wordData.word.includes(g)).length;

  return {
    wordData,
    guesses,
    status,
    wrongCount,
    maxAttempts,
    guess,
    resetGame
  };
};