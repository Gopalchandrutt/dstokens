const { filterTokensByType } = require("./utils/fns");
const tokens = require("./src/assets/style/global.json");

const colors = filterTokensByType("color", tokens);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
