/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#030516',
        'accent': '#60A6E7',
        'darkGray': '#A5A0A8',
        'accent2': '#0c2645',
        'accent3': '#B3D0F2',
      },
      animation: {
        'infinite-scroll-left': 'infinite-left 25s linear infinite',
        'infinite-scroll-right': 'infinite-right 25s linear infinite',
      },
      keyframes: {
        'infinite-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-right': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        }
      } 
    },
  },
  plugins: [],
}