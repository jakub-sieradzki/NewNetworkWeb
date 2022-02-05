module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '1700px',
      },
      width: {
        'lg-login': '450px',
      },
      height: {
        'lg-editProfile': '700px;',
      },
      flexGrow: {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
      },
      scale: {        
        '101': '1.01',
        '102': '1.02',
      }
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
