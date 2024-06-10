/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'movie-poster':"url(assets/cover.jpeg)",
        'error-poster':"url(assets/errorbg.png)"
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

