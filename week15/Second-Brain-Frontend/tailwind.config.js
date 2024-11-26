/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#e0dbfe",
          400: "#7859b5",
          500: "#3e38a7",
          600: "#6200df"
        }
      }
    },
  },
  plugins: [],
}

