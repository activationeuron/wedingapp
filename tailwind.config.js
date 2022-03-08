const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        head: ['Pacifico'],
        tan: ['Sacramento'],
        prim: ['Philosopher'],
      },
    },
  },
  plugins: [],
};
