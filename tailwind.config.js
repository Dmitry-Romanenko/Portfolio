/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm-576': '576px',
      },
      colors: {
        gradientStart: '#f7a6d7',
        gradientEnd: '#ec6cc0',
        primary: {
          'blossom-light': '#e756b8',
          blossom: '#ec6cc0',
          'blossom-dark': '#f081c8',
          'petal-light': '#f394d0',
          petal: '#f7a6d7',
          'petal-dark': '#f9b8df',
        },
        surface: {
          'nightfall-deep': '#251a20',
          nightfall: '#3a2f35',
          twilight: '#4f454b',
          dusk: '#665d62',
          'misty-morning': '#7e767a',
          cloudy: '#969093',
        },
      },
    },
    boxShadow: {
      glow: '0 4px 20px rgba(236, 108, 192, 0.6)',
      'burger-glow': '0 2px 10px rgba(236, 108, 192, 0.6)',
      'circle-glow': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
    },
  },
  plugins: [],
};
