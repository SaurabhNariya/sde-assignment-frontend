/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D5BFF",
        textMain: "#1C2340",
        lightText: "#6F7590",
        cardBorder: "#EBECF0",
      },
    },
  },
  plugins: [],
}
