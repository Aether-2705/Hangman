import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface HangmanFigureProps {
  wrongCount: number;
}

export const HangmanFigure: React.FC<HangmanFigureProps> = ({ wrongCount }) => {
  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        pathLength: { type: "spring", duration: 1, bounce: 0 }, 
        opacity: { duration: 0.1 } 
      }
    }
  };

  return (
    <div className="flex justify-center my-6">
      <svg height="250" width="200" className="stroke-notebook-text dark:stroke-darknotebook-text stroke-[4px] fill-transparent stroke-linecap-round stroke-linejoin-round">
        {/* Gallows base */}
        <motion.line x1="10" y1="240" x2="190" y2="240" variants={draw} initial="hidden" animate="visible" />
        {/* Gallows pole */}
        <motion.line x1="50" y1="240" x2="50" y2="20" variants={draw} initial="hidden" animate="visible" />
        {/* Gallows top */}
        <motion.line x1="50" y1="20" x2="150" y2="20" variants={draw} initial="hidden" animate="visible" />
        {/* Gallows rope */}
        <motion.line x1="150" y1="20" x2="150" y2="50" variants={draw} initial="hidden" animate="visible" />

        {/* Head */}
        {wrongCount >= 1 && (
          <motion.circle cx="150" cy="70" r="20" variants={draw} initial="hidden" animate="visible" />
        )}
        {/* Body */}
        {wrongCount >= 2 && (
          <motion.line x1="150" y1="90" x2="150" y2="160" variants={draw} initial="hidden" animate="visible" />
        )}
        {/* Left Arm */}
        {wrongCount >= 3 && (
          <motion.line x1="150" y1="110" x2="120" y2="140" variants={draw} initial="hidden" animate="visible" />
        )}
        {/* Right Arm */}
        {wrongCount >= 4 && (
          <motion.line x1="150" y1="110" x2="180" y2="140" variants={draw} initial="hidden" animate="visible" />
        )}
        {/* Left Leg */}
        {wrongCount >= 5 && (
          <motion.line x1="150" y1="160" x2="120" y2="210" variants={draw} initial="hidden" animate="visible" />
        )}
        {/* Right Leg */}
        {wrongCount >= 6 && (
          <motion.line x1="150" y1="160" x2="180" y2="210" variants={draw} initial="hidden" animate="visible" />
        )}
      </svg>
    </div>
  );
};
