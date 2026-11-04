/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Tokens do design (definidos em globals.css, mudam com o tema claro/escuro)
      colors: {
        ground: 'var(--ground)',
        surface: {
          DEFAULT: 'var(--surface)',
          2: 'var(--surface-2)',
        },
        ink: 'var(--ink)',
        body: 'var(--body)',
        muted: 'var(--muted)',
        tulip: 'var(--tulip)',
        rose: 'var(--rose)',
        gold: 'var(--gold)',
        leaf: 'var(--leaf)',
        line: {
          DEFAULT: 'var(--line)',
          soft: 'var(--line-soft)',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        karla: ['var(--font-karla)', 'Segoe UI', 'system-ui', 'sans-serif'],
        hand: ['var(--font-caveat)', 'cursive'],
      },
      boxShadow: {
        soft: 'var(--shadow)',
      },
      backgroundImage: {
        tile: 'var(--tile)',
      },
    },
  },
  plugins: [],
}
