/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#f1c40f',
      },
      fontFamily: {
        custom: ['Helvetica', 'sans'],
      },
    },
  },
  plugins: [],
}

