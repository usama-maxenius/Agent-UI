/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppin: ['Poppin', 'sans-serif'],
        IBM_sans: ['IBM Plex', 'sans'],
        IBM_serif: ['IBM Plex', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        gray: '#16161680',
        blue: '#2541B2',
        darkBlack: '#161616',
        lightGray: '#FAFAFA',
        red: '#FF0000',
        gray100: '#888888',
        green: '#2FBE68',
        midGray: '#F5F5F5',
      },
      fontSize: {
        small: '10px',
        cta: '22px',
      },
      borderRadius: {
        box: '8px',
      },
      width: {
        7: '26px',
      },
      height: {
        7: '26px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
