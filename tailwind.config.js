/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        colors: {
          primary: "#00D991",
        },
      },
    },
  },
  plugins: [],
};
