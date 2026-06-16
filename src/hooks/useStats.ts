import { useState, useEffect } from 'react';

export interface GameStats {
  played: number;
  wins: number;
  losses: number;
}

export const useStats = () => {
  const [stats, setStats] = useState<GameStats>(() => {
    const saved = localStorage.getItem('hangman_stats');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return { played: 0, wins: 0, losses: 0 };
      }
    }
    return { played: 0, wins: 0, losses: 0 };
  });

  useEffect(() => {
    localStorage.setItem('hangman_stats', JSON.stringify(stats));
  }, [stats]);

  const updateStats = (won: boolean) => {
    setStats(prev => ({
      played: prev.played + 1,
      wins: prev.wins + (won ? 1 : 0),
      losses: prev.losses + (won ? 0 : 1),
    }));
  };

  const clearStats = () => {
    setStats({ played: 0, wins: 0, losses: 0 });
  };

  return { stats, updateStats, clearStats };
};