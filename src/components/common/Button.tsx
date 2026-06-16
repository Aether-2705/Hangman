import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
  return (
    <button
      className={twMerge(
        clsx(
          "px-6 py-2 rounded-md font-hand text-2xl font-bold transition-all rough-border hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variant === 'primary' && "bg-notebook-accent text-white dark:bg-darknotebook-accent",
          variant === 'secondary' && "bg-transparent text-notebook-text dark:text-darknotebook-text hover:bg-notebook-text hover:text-notebook-bg dark:hover:bg-darknotebook-text dark:hover:text-darknotebook-bg",
          variant === 'danger' && "bg-notebook-error text-white dark:bg-darknotebook-error",
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
};