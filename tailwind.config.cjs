/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ee9789",
      },
    },
    fontFamily:{
      sans: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
};
