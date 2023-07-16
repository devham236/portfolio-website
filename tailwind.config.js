/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: "#ff5a30",
        dark_blue: "#00011f",
        light_tc: "#000",
        dark_tc: "#fff",
      },
      screens: {
        sm: "200px",
      },
    },
  },
  plugins: [],
}
