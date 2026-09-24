/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Nunito Sans", "sans-serif"],
        hand: ["Caveat", "cursive"]
      },
      colors: {
        paper: "#F5EFE3",
        ink: "#2F2A26",
        brown: "#765A49",
        blue: "#AFC6D5",
        blush: "#D8A9A3",
        red: "#A9544F"
      }
    }
  },
  plugins: []
};