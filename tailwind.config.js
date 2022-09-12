/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppin: ['Poppin', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        gray: '#16161680',
        blue: '#2541B2',
        darkBlack: '#161616',
        lightGray: '#FAFAFA',
      },
      fontSize: {
        small: '10px',
      },
    },
  },
  plugins: [],
};
