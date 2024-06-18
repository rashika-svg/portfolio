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
        'inconsolata': ['Inconsolata', 'monospace'],
      },
      animation: {
        move: 'move 4s ease-in-out infinite'
      },
      keyframes: {
        move: {
          '0% 100%': { transform: 'rotate(0)' },
          '50%': {
            transform: 'rotate(-20deg)',
            color: 'yellow'
          },
        }
      },
    },
  },
  plugins: [],
}

