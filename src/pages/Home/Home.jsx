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

const Home = () => {
  return (
    <main>
      <section className="custom-padding">
        <HeroSection />
        <ToolSection />
        <WhyHardhat />
        <CommunitySection />
        <LandingBanner />
        <BrandSection />
        <TestimonialSecton />
        <NomicFoundation />
      </section>
      <section>
        <EthereumFoundation />
        <Footer />
      </section>
    </main>
  )
}

export default Home
