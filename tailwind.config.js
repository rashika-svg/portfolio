/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'allura': ['Allura', 'cursive'],
        'raleway': ['Raleway', 'sans-serif'],
        'amatic': ['Amatic SC', 'cursive'],
        'lavishly': ['Lavishly Yours', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'moirai-one': ['Moirai One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

