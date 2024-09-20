/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#3238f2'
      },
      fontFamily: {
        display: ['Rubik', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      screens: {
        'custom-sm': '670px',
      }
    },
  },
  plugins: [],
};
