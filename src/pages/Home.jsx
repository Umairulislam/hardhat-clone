import React from "react"
import { HeroSection, ToolSection, FeatureSection } from "../components"

const Home = ({ isDarkMode }) => {
  console.log(isDarkMode)
  return (
    <main className="custom-padding">
      <HeroSection isDarkMode={isDarkMode} />
      <ToolSection isDarkMode={isDarkMode} />
      <FeatureSection isDarkMode={isDarkMode} />
    </main>
  )
}

export default Home
