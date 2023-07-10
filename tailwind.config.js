/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
    ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'shadow-blue': '#7B8FA1'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
