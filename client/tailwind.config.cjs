/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        custom1: '#00072d',
        custom2: '#001e5e',
        custom3: '#0a2472',
        custom4: '#0e6ba8',
        custom5: '#a6e1fa',
      },
      fontFamily: {
        sans: ['Inter'],
      },
      maxWidth: {
        custom: '900px', // Add this line
      },
      plugins: [],
    },
  },
};
