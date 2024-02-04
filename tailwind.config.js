/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        mainbackground: '#363636',
        second: '#202020',
        third: '#8F43EE',
        fouth: '#929292',
        fifth: '#FF4B4B',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nautigal: ['The Nautigal', 'cursive'],
      },
    },
  },
  plugins: [],
};
