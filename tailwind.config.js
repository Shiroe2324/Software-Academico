/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/**/*.html", "./src/scripts/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

