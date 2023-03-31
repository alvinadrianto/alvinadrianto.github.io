/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        blackmatte: '#1f1f1f',
        turquoise: '#05fdd8',
        darkerblackmatte: '#181818',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      fredoka: ['Fredoka', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
