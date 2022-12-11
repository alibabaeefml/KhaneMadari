/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views"],
  theme: {
    extend: {
      container: {
        center: true,
      },

      colors: {
        golden: "#C19746",
        navy: "#292C67",
        yellow: "#FFDC7B",
        white: "#fff",
        black: "#000",
      },
      fontFamily: {
        farhang: ["farhang"],
      },
      screens: {
        xxs: "300px",
        xs: "500px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
