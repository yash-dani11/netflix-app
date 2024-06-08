/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'movie-poster':"url(assets/cover.jpeg)"
        
      }
    },
  },
  plugins: [],
}

