/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        red: '4px 4px 8px #ff0000', // Define el borde rojo.
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Instala este plugin con `npm install tailwindcss-textshadow`
  ],
}