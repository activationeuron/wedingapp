const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        prim: ['Pacifico'],
        head: ['El Messiri'],
      },
    },
  },
  plugins: [],
};
