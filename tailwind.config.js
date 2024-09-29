/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Atau sesuai lokasi file HTML kamu
    './src/**/*.{js,html}', // Pastikan sesuai dengan struktur folder
  ],
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
    },
  },
  plugins: [],
};
