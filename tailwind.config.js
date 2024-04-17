/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainDark: "#292929",
        mainBlue: "#007AFF",
        background: "#f6f6f6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
