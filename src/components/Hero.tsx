import { useContext } from "react"
import { ethereumDark, ethereumLight, heHead, sheHead, heEyes, sheEyes } from "../assets"
import { Link } from "react-router"
import { ThemeContext } from "../context/ThemeContext"

const Hero = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <section className="flex justify-center items-center gap-10 flex-wrap">
      <div className="max-w-xl">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest">
          Flexible. Extensible. Fast.
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-10 tracking-wide">
          Ethereum development environment for professionals
        </h2>
        <button className="btn btn_primary mt-10">
          <Link to="/hardhat-runner/docs/getting-started/overview">Get Started</Link>
        </button>
      </div>

      <figure className="max-w-xl">
        <div className="relative animate_up_down">
          <img src={theme === "dark" ? ethereumDark : ethereumLight} alt="ethereum" />
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
      </figure>
    </section>
  )
}

export default Hero
