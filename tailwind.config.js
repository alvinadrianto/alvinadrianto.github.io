/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0F2046',
      },
      fontFamily: {
        'pixelify-sans': ['"Pixelify Sans"', 'sans-serif'],
        caveat: ['"Caveat"', 'cursive'],
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
