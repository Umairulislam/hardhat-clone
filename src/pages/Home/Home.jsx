import React from "react"
import {
  HeroSection,
  ToolSection,
  WhyHardhat,
  CommunitySection,
  LandingBanner,
  BrandSection,
  TestimonialSecton,
  NomicFoundation,
  EthereumFoundation,
  Footer,
} from "../../components"

const Home = ({ isDarkMode }) => {
  return (
    <main>
      <section className="custom-padding">
        <HeroSection isDarkMode={isDarkMode} />
        <ToolSection isDarkMode={isDarkMode} />
        <WhyHardhat isDarkMode={isDarkMode} />
        <CommunitySection isDarkMode={isDarkMode} />
        <LandingBanner isDarkMode={isDarkMode} />
        <BrandSection />
        <TestimonialSecton />
        <NomicFoundation isDarkMode={isDarkMode} />
      </section>
      <section>
        <EthereumFoundation isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </section>
    </main>
  )
}

export default Home
