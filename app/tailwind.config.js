const { filterTokensByType, flatIt } = require("./utils/fns");
const tokens = require("./src/assets/style/global.json");

const colors = filterTokensByType("color", tokens);
// const buttonColor = filterTokensByType("color", tokens);
const btnSize = flatIt(filterTokensByType("sizing", tokens));
const spacing = flatIt(filterTokensByType("spacing", tokens));
/** @type {import('tailwindcss').Config} */
console.log(colors);
console.log(btnSize);
console.log(spacing);
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors,
      height: btnSize,
      padding: spacing,
    },
  },
  plugins: [],
};
