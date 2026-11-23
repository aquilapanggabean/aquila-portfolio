/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#090B10', // Deep luxury obsidian with slight warm blue undertone
          surface: '#10141D', // Rich surface
          card: '#151B27', // Elevated card
          border: '#232C3D', // Elegant subtle border
          hairline: '#182130',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
          dim: '#94A3B8',
        },
        accent: {
          emerald: '#10B981',
          emeraldLight: '#34D399',
          amber: '#F59E0B',
          amberLight: '#FBBF24',
          cyan: '#06B6D4',
          purple: '#A855F7',
          rose: '#F43F5E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Syne"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'glow-amber': '0 0 35px -5px rgba(245, 158, 11, 0.25)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'modal-pop': 'modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        modalPop: {
          '0%': { opacity: '0', transform: 'scale(0.96) translateY(16px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
