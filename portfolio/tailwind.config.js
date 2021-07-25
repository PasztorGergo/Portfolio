module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color:{
        primary:{
          light:'#74EBFF',
          DEFAULT:'#2CB9F0',
          dark:'#0089BD'
        },
        secondary:{
          light:'#FFFF54',
          DEFAULT:'#ffd705',
          dark:'#c7a600'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss')('./tailwind.config.js'),
  require('autoprefixer')],
}
