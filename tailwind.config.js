/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#f4f4f4',
        'bg-dark': '#1a1a1a',
        'primary-light': '#ffffff',
        'primary-dark': '#2c2c2c'
      }
    }
  },
  darkMode: 'class'
};