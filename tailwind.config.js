/** @type {import('tailwindcss').Config} */
const withAnimations = require("animated-tailwindcss");

module.exports = withAnimations({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        wavefirst: "url('../public/wavefirst.svg')",
        wave2: "url('../public/waves2.svg')",
        wavethird: "url('../public/wavethird.svg')",
        wavesviolet: "url('../public/wavesviolet.svg')",
        wavesorange: "url('../public/wavesviolet.svg')",
        blob: "url('../public/blob.svg')",
        wavesteps: "url('../public/wavesteps.svg')",
      },
      animation: {
        wiggle: "wiggle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
});
