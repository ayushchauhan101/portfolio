/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {},
    extend: {
      backgroundImage: {
        'charlie-brown': "url('./src/img/charlie-brown.svg')",
        'brick-wall': "url(./src/img/brick-wall.svg)"
      }
    },
  },
  plugins: [],
}

