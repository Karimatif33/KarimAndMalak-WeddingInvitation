export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f6f1eb",
        text: "#2d2a26",
        soft: "#e9e2db",
        purple: "#a78bfa",
        gold: "#c6a15b",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        arabic: ["Aref Ruqaa", "serif"],
        english: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};