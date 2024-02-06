/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#00CD8F',
        'secondary-gray':'#D3D6E0',
        'secondary-blue' : '#1D1B27'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

