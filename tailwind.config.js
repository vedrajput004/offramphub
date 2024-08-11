/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#7ACAF1",
        woodSmoke: "#0B0C14",
        cinder: "#151515",
        balticSea: "#262626",
      },
      padding: {
        110: '110px'
      }
    },
  },
  plugins: [],
}

