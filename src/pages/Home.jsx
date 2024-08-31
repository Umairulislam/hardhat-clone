import React from "react"
import {
  HeroSection,
  ToolSection,
  WhyHardhat,
  CommunitySection,
  LandingBanner,
  BrandSection,
} from "../components"

const Home = ({ isDarkMode }) => {
  console.log(isDarkMode)
  return (
    <main className="custom-padding">
      <HeroSection isDarkMode={isDarkMode} />
      <ToolSection isDarkMode={isDarkMode} />
      <WhyHardhat isDarkMode={isDarkMode} />
      <CommunitySection isDarkMode={isDarkMode} />
      <LandingBanner isDarkMode={isDarkMode} />
      <BrandSection />
    </main>
  )
}

export default Home
