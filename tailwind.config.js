/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        'font-secondary': '#9197B3',
        'purple': '#848BE3',
        'bg-primary': '#F8F7FD',
        'bg-secondary': '#EEEEFA',
        'hover': '#FF0000',

      },
      fontSize: {
        'giga': '70rem',
      }
    },
  },
  plugins: [],
}

