module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'blue-0': '#03045E',
        'blue-1': '#023E8A',
        'blue-2': '0077B6',
        'blue-3': '#0096C7',
        'blue-4': '#00B4D8',
        'blue-5': '#48CAE4',
        'blue-6': '90E0EF',
        'blue-7': '#ADE8F4',
        'blue-8': '#CAF0F8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
