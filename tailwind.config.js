const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        '96px': 'repeat(auto-fill, 96px)',
      },
      colors: {
        primary: colors.violet['700'],
      },
      fontSize: {
        xl: '1.375rem', // 22px
        '2xl': '1.5625rem', // 25px
        '3xl': '1.875rem', // 30px
        '4xl': '2.5rem', // 40px
        '5xl': '3.125rem', // 50px
        '6xl': '3.75rem', // 60px
        '7xl': '4.375rem', // 70px
      },
      spacing: {
        250: '250px',
        350: '350px',
        '5vw': '5vw', // pull featured sections and navbar in the margin
        '8vw': '8vw', // positions hero img inside the margin
        '10vw': '10vw',
        '100vw': '100vw',
        '100vh': '100vh',
      },
    },
  },
};
