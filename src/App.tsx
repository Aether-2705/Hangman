import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import type { Difficulty } from './hooks/useGame';

function App() {
  const [gameState, setGameState] = useState<'menu' | 'playing'>('menu');
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const handleStartGame = (diff: Difficulty) => {
    setDifficulty(diff);
    setGameState('playing');
  };

  const handleGoHome = () => {
    setGameState('menu');
  };

  return (
    <div className="font-sans text-notebook-text dark:text-darknotebook-text min-h-screen transition-colors duration-300 relative overflow-hidden">
      {/* Subtle paper texture overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {gameState === 'menu' ? (
        <Home onStartGame={handleStartGame} onToggleTheme={toggleTheme} isDark={isDark} />
      ) : (
        <Game difficulty={difficulty} onHome={handleGoHome} />
      )}
    </div>
  );
}

export default App;

