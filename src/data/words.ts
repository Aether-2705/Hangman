export const CATEGORIES = {
  Animals: [
    { word: 'ELEPHANT', difficulty: 'Easy' },
    { word: 'KANGAROO', difficulty: 'Medium' },
    { word: 'CHAMELEON', difficulty: 'Hard' },
    { word: 'PLATYPUS', difficulty: 'Hard' },
    { word: 'GIRAFFE', difficulty: 'Medium' },
    { word: 'PENGUIN', difficulty: 'Easy' }
  ],
  Countries: [
    { word: 'CANADA', difficulty: 'Easy' },
    { word: 'BRAZIL', difficulty: 'Medium' },
    { word: 'SWITZERLAND', difficulty: 'Hard' },
    { word: 'JAPAN', difficulty: 'Medium' },
    { word: 'EGYPT', difficulty: 'Easy' }
  ],
  Movies: [
    { word: 'INCEPTION', difficulty: 'Medium' },
    { word: 'TITANIC', difficulty: 'Easy' },
    { word: 'GLADIATOR', difficulty: 'Easy' },
    { word: 'INTERSTELLAR', difficulty: 'Hard' },
    { word: 'AVATAR', difficulty: 'Medium' }
  ],
  Programming: [
    { word: 'JAVASCRIPT', difficulty: 'Medium' },
    { word: 'TYPESCRIPT', difficulty: 'Hard' },
    { word: 'PYTHON', difficulty: 'Easy' },
    { word: 'REACT', difficulty: 'Easy' },
    { word: 'TAILWIND', difficulty: 'Medium' },
    { word: 'VERCEL', difficulty: 'Medium' }
  ],
  Space: [
    { word: 'GALAXY', difficulty: 'Easy' },
    { word: 'NEBULA', difficulty: 'Medium' },
    { word: 'ASTEROID', difficulty: 'Medium' },
    { word: 'SUPERNOVA', difficulty: 'Hard' },
    { word: 'UNIVERSE', difficulty: 'Easy' }
  ]
};

export const getCategories = () => Object.keys(CATEGORIES);
export const getRandomWord = (difficulty: 'Easy' | 'Medium' | 'Hard' | 'All') => {
  const categories = getCategories();
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const words = CATEGORIES[randomCategory as keyof typeof CATEGORIES];
  
  const filteredWords = difficulty === 'All' ? words : words.filter(w => w.difficulty === difficulty);
  const pool = filteredWords.length > 0 ? filteredWords : words;
  
  const randomWord = pool[Math.floor(Math.random() * pool.length)];
  
  return { category: randomCategory, ...randomWord };
};