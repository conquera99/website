const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#002776',
          800: '#003da5',
          700: '#0052d4',
          600: '#0066ff',
          500: '#007bff',
          400: '#3182ce',
          300: '#63b3ed',
          200: '#b3d4fc',
          100: '#e6f6ff',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
