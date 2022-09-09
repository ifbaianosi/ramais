/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {colors: {
      primary: {
        50: '#F8FCF8',
        200: '#DAF1DD',
        500: '#3FA14C'
      },
      secundary: {
        50: '#F5D6D6',
        500: '#CF3034'
      }
    },}, 
  },
  plugins: [], 
}
