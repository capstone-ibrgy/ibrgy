/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'arimo': ['Arimo'],
      },
      scale: {
        '-100': '-1',
      }
    },
  },
  plugins: [],
}

