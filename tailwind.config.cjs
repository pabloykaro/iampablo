/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.tsx',
  './index.html'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Ubuntu, sans-serif'
      },
      colors:{
        bgtemplate: '#09090A',
        orangecard: '#F2C94C'
      }
    },
  },
  plugins: [],
}
