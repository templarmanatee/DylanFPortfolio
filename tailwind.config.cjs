/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"]
      },
      display: ["group-hover"],
      background: ["bg-sky-100"]
    },
  },
  plugins: [],
}