import React from "react"
import {
  ethereumDark,
  ethereumLight,
  heHead,
  sheHead,
  heEyes,
  sheEyes,
} from "../assets"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const HeroSection = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <main className="flex justify-center items-center gap-10 flex-wrap">
      <section className="max-w-xl">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide">
          Flexible. Extensible. Fast.
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-10">
          Ethereum development environment for professionals
        </h2>
        <button className="btn btn-primary mt-10">
          <Link to="/hardhat-runner/docs/getting-started/overview">
            Get Started
          </Link>
        </button>
      </section>
      <section className="max-w-xl">
        <div className="relative w-92 animate-up-down">
          <img src={isDarkMode ? ethereumLight : ethereumDark} alt="ethereum" />
          <div className="absolute top-32 right-6">
            <img src={heHead} alt="heHead" />
          </div>
          <div className="absolute top-60 right-20">
            <img src={heEyes} alt="heEyes" />
          </div>
          <div className="absolute top-32 left-6">
            <img src={sheHead} alt="sheHead" />
          </div>
          <div className="absolute top-60 left-20">
            <img src={sheEyes} alt="sheEyes" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HeroSection
