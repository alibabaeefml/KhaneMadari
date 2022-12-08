/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      '2xl': '1280px',
    },
    colors: {
      golden: "#C19746",
      navy: "#292C67",
      yellow: "#FFDC7B",
      white: "#fff",
    },
    fontFamily: {
      farhang: ["farhang"],
    },
    extend: {},
  },
  plugins: [],
};
