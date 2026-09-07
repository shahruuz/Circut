/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        kraft: {
          DEFAULT: '#DCC9A3',
          light: '#EEE3CB',
          dark: '#B9A077',
        },
        ink: {
          DEFAULT: '#211C16',
          soft: '#4A4038',
        },
        coral: {
          DEFAULT: '#FF5A46',
          dark: '#E1432F',
          light: '#FFD9D2',
        },
        teal: {
          DEFAULT: '#1F6F78',
          dark: '#154F56',
          light: '#D6EBEA',
        },
        mustard: {
          DEFAULT: '#F0AC2E',
          dark: '#C98A18',
          light: '#FBE4B5',
        },
      },
      fontFamily: {
        display: ['var(--font-baloo)', 'system-ui', 'sans-serif'],
        body: ['var(--font-work)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sticker: '1.25rem',
      },
      boxShadow: {
        cut: '6px 6px 0 0 rgba(33,28,22,1)',
        'cut-sm': '4px 4px 0 0 rgba(33,28,22,1)',
        'cut-coral': '6px 6px 0 0 rgba(225,67,47,1)',
      },
      backgroundImage: {
        perf: 'repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(33,28,22,0.35) 6px, rgba(33,28,22,0.35) 8px)',
      },
    },
  },
  plugins: [],
};
