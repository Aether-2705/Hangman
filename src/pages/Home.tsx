import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import type { Difficulty } from '../hooks/useGame';
import { useStats } from '../hooks/useStats';

interface HomeProps {
  onStartGame: (difficulty: Difficulty) => void;
  onToggleTheme: () => void;
  isDark: boolean;
}

export const Home: React.FC<HomeProps> = ({ onStartGame, onToggleTheme, isDark }) => {
  const { stats } = useStats();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="absolute top-4 right-4">
        <Button variant="secondary" onClick={onToggleTheme} className="!px-4 !py-2 text-sm">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </div>

      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col items-center max-w-md w-full"
      >
        <h1 className="text-6xl md:text-8xl font-bold font-hand mb-8 text-center leading-tight">
          Hand-drawn <br/> Hangman
        </h1>

        <div className="flex flex-col gap-4 w-full px-8 p-8 rough-border mb-8 bg-notebook-bg dark:bg-darknotebook-bg">
          <h2 className="text-2xl font-bold font-hand text-center mb-2">Select Difficulty</h2>
          <Button onClick={() => onStartGame('Easy')}>Easy</Button>
          <Button onClick={() => onStartGame('Medium')}>Medium</Button>
          <Button onClick={() => onStartGame('Hard')}>Hard</Button>
          <Button variant="secondary" onClick={() => onStartGame('All')}>Any Word</Button>
        </div>

        <div className="w-full flex justify-center gap-8 text-sm opacity-70">
          <div className="flex flex-col items-center">
            <span className="font-bold">{stats.played}</span>
            <span>Played</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-notebook-success dark:text-darknotebook-success">{stats.wins}</span>
            <span>Wins</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-notebook-error dark:text-darknotebook-error">{stats.losses}</span>
            <span>Losses</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
