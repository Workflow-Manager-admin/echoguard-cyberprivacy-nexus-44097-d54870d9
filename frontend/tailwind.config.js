module.exports = {
  darkMode: 'class', // Enable dark mode via class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8A2BE2",
        secondary: "#00FF7F",
        accent: "#00BFFF",
        // optional: alias for dark mode background and text
        background: {
          DEFAULT: "#121212",
          light: "#23272f"
        },
        text: {
          DEFAULT: "#ffffff",
          secondary: "rgba(255,255,255,0.7)"
        },
        border: "rgba(255,255,255,0.1)"
      },
    },
  },
  plugins: [],
}
