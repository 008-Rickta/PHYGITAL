/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: '#FAF8F5',
          card: '#F2ECE4',
          soft: '#EAE1D5',
        },
        cocoa: {
          DEFAULT: '#4A3525',
          secondary: '#7A583E',
          muted: '#9B7C62',
        },
        terracotta: {
          DEFAULT: '#C77B5A',
          dark: '#AD6343',
          light: '#E6B29B',
        },
        sage: {
          DEFAULT: '#A5B49A',
          dark: '#7D9070',
          light: '#D3DEC9',
        },
        sun: {
          DEFAULT: '#E8C878',
          dark: '#D4AC4B',
          light: '#F7E7B9',
        },
      },
      fontFamily: {
        display: ['"Fredoka"', '"Nunito"', 'ui-rounded', 'system-ui', 'sans-serif'],
        sans: ['"Nunito"', 'ui-rounded', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        storybook: '1.5rem',
        pill: '9999px',
      },
      boxShadow: {
        storybook: '0 10px 28px -8px rgba(74, 53, 37, 0.12), 0 4px 10px -4px rgba(74, 53, 37, 0.06)',
        tactile: '0 4px 0 0 rgba(74, 53, 37, 0.18)',
      },
    },
  },
  plugins: [],
};
