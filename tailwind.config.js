/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Bebas': ['BebasNeue-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}