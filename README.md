# Hand-drawn Hangman

A portfolio-quality Hangman game with a charming hand-drawn notebook aesthetic, built using React, Vite, and Tailwind CSS.

## Features
- **Hand-drawn Aesthetic**: Notebook paper theme with handwritten fonts and sketchy UI elements.
- **Smooth Animations**: Powered by Framer Motion for elegant drawing reveals and page transitions.
- **Game Logic**: Prevents duplicate guesses, supports physical keyboard inputs, and includes win/loss states.
- **Word Categories**: Five different categories (Animals, Countries, Movies, Programming, Space) with varying difficulty levels.
- **Dark Mode**: Toggleable dark theme that simulates chalk on dark paper, persisted via `localStorage`.
- **Statistics Tracking**: Keep track of games played, wins, and losses over time.
- **Responsive Design**: Fully mobile-friendly layout.

## Installation Steps

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser (usually `http://localhost:5173`).

## Development Commands
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the production-ready application.
- `npm run preview`: Locally preview the production build.

## Deployment to Vercel
This project is configured out-of-the-box for Vercel. 

1. Install the Vercel CLI (optional) or push your code to a GitHub repository.
2. Import the project in your Vercel Dashboard.
3. Vercel will automatically detect the **Vite** framework.
4. The Build Command (`npm run build`) and Output Directory (`dist`) will be configured automatically.
5. Click **Deploy**. No modifications are required!

Enjoy playing!