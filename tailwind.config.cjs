const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['pages/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: colors.cyan
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
