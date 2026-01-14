/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "scholar-heading": "#0077B6",
        "scholar-body": "#334155",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
