/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6'
      },

      purple: {
        500: '#a855f7',
        600: '#9333ea'
      }
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)'
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    }
  },
  plugins: []
};
