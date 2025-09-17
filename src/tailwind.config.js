/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ethioBlue: "#0033A0",
        ethioRed: "#E30613",
        ethioGray: "#F2F2F2",
        ethioDarkGray: "#4B4B4B",
      },
      fontFamily: {
        ethio: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
