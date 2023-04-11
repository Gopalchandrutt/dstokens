const { filterTokensByType, flatIt } = require("./utils/fns");
const tokens = require("./src/assets/style/global.json");

const colors = filterTokensByType("color", tokens);
const btnSize = flatIt(filterTokensByType("sizing", tokens));
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors,
      height: btnSize,
    },
  },
  plugins: [],
};
