/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "primary-bg": "#2a3447",
        "light-bg": "#384256",
        "dark-bg": "#222b3c",
        "light-color": "#ddd",
      },
    },
  },
  plugins: [],
};
