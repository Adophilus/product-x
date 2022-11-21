const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{pages,components}/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDEEE8',
          100: '#FBE1D5',
          200: '#F7C0A6',
          300: '#F4A27C',
          400: '#F08451',
          500: '#EC6324',
          600: '#CA4C12',
          700: '#96380D',
          800: '#632509',
          900: '#341304'
        },
        secondary: {
          50: '#FEFDFB',
          100: '#FBFAF4',
          200: '#F8F6ED',
          300: '#F4F1E2',
          400: '#F1EEDA',
          500: '#EDE9D0',
          600: '#D5CC90',
          700: '#BBAD4E',
          800: '#817631',
          900: '#3F3A18'
        },
        cyan: colors.cyan
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
