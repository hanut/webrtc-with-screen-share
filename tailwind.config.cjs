const tailwindColors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...tailwindColors,
      "black-op-50": "rgba(0,0,0,0.5)",
    },
    extend: {
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
