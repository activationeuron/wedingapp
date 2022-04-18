const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        head: ['Pacifico'],
        prim: ['El Messiri'],
      },
    },
  },
  plugins: [],
};
