module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '1700px',
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ['dark', 'rounded'],
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('daisyui'),
  ],
}
