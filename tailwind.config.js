// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables class-based dark mode

  theme: {
    extend: {
      colors: {
        primary: "#FFF100", // Yellow color used button
        secondary: "#20232A", // Dark background color on community section
        tertiary: "#CCB200", // Yellow color for text in plugins
        darkBackground: "#181A1F", // Background color for dark mode
        lightBackground: "#FFFFFF", // Background color for light mode
        darkText: "#181A1F", // Light text for dark mode
        lightText: "#FFFFFF", // Dark text for light mode
        accent: "#6641FF", // Purple accent color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Primary font family
        mono: ["Fira Code", "monospace"], // Monospace font for code snippets
      },
      screens: {
        xs: "480px", // Extra small screen
        sm: "640px", // small screen
        md: "768px", // Medium screen
        lg: "1024px", // Large screen
        xl: "1280px", // Extra large screen
      },
      border: {
        darkBorder: "1px solid #121212", // Dark border color
        lightBorder: "1px solid #FFFFFF", // Light border color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
