/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        butter: {
          50: '#fffef0',
          100: '#fffbd1',
          200: '#fff7a3',
          300: '#ffef6b',
          400: '#ffe030',
          500: '#ffd700',
          600: '#e6b800',
          700: '#cc9900',
        },
        rose: {
          // DEFAULT = token do design (text-rose, border-rose); a escala numérica
          // continua sendo usada pelas seções antigas (text-rose-500 etc.)
          DEFAULT: 'var(--rose)',
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
        // Tokens do design (definidos em globals.css, mudam com o tema claro/escuro)
        ground: 'var(--ground)',
        surface: {
          DEFAULT: 'var(--surface)',
          2: 'var(--surface-2)',
        },
        ink: 'var(--ink)',
        body: 'var(--body)',
        muted: 'var(--muted)',
        tulip: 'var(--tulip)',
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
      animation: {
        'slide-right': 'slideRight 8s linear infinite',
        'slide-left': 'slideLeft 8s linear infinite',
        'slide-down': 'slideDown 8s linear infinite',
        'slide-up': 'slideUp 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'spin-slow': 'spin 10s linear infinite',
        'spin-slower': 'spin 15s linear infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'scroll': 'scroll 2s ease-in-out infinite',
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      }
    },
  },
  plugins: [],
}
