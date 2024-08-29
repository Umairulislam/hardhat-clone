// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF", // Yellow color used in Hardhat
        secondary: "#121212", // Dark background color
        darkBackground: "#181A1F", // Background color for dark mode
        lightBackground: "#FFFFFF", // Light background for light mode
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
        sm: "640px", // Small screen
        md: "768px", // Medium screen
        lg: "1024px", // Large screen
        xl: "1280px", // Extra large screen
        "2xl": "1536px", // 2XL screen
      },
      spacing: {
        18: "4.5rem", // Custom spacing
        22: "5.5rem", // Custom spacing
      },
      border: {
        darkBorder: "1px solid #121212", // Dark border color
        lightBorder: "1px solid #FFFFFF", // Light border color
      },
      borderRadius: {
        xl: "1rem", // Custom border radius
      },
      zIndex: {
        "-10": "-10", // Custom negative z-index
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
