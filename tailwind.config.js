module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        backgroundLight: "#f9fafb",
        backgroundDark: "#1a1a1a",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
