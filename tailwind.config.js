module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    scrollbar: ['dark', 'rounded'],
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
