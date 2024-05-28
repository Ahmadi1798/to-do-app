/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {
      varyLightGray: "hsl(0, 0%, 98%)",
      varyLightGrayishBlue: "hsl(236, 33%, 92%)",
      lightGrayishBlue: "hsl(233, 11%, 84%)",
      darkGrayishBlue: "hsl(236, 9%, 61%)",
      veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      veryDarkBlue: "hsl(235, 21%, 11%)",
      veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
      lightGrayishBlue: "hsl(234, 39%, 85%)",
      lightGrayishBlueHover: "hsl(236, 33%, 92%)",
      darkGrayishBlue1: "hsl(234, 11%, 52%)",
      veryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
      fromGradient: "hsl(192, 100%, 67%)",
      toGradient: "hsl(280, 87%, 65%)",
      brightBlue: "hsl(220, 98%, 61%)",
    },

    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
