import { useContext } from "react"
import { features } from "../data"
import { ThemeContext } from "../context/ThemeContext"

const Features = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <main className="mt-40">
      <div className="flex justify-center items-center gap-6 relative text-center flex-col lg:flex-row">
        <div className="max-w-sm border-t-1 border-l-1 w-full h-12  border-border"></div>
        <h1 className="primary_heading h-20">why hardhat</h1>
        <div className="max-w-sm border-t-1 border-r-1 w-full h-12  border-border"></div>
      </div>
      <div className="flex flex-col gap-40">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`flex justify-center items-center flex-wrap gap-10 ${
              feature.reverse ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="max-w-md w-full flex flex-col items-start gap-10">
              <div>
                <h1 className="secondary_heading">{feature.title1}</h1>
                <p className="mt-5 text-muted text-base md:text-lg">{feature.description1}</p>
              </div>
              <div>
                <h1 className="secondary_heading">{feature.title2}</h1>
                <p className="mt-5 text-muted text-base md:text-lg">{feature.description2}</p>
              </div>
              <div>
                <button className="btn btn_primary btn">{feature.buttonText}</button>
              </div>
            </div>
            <div className="max-w-md w-full">
              <img
                src={theme === "dark" ? feature.imageDark : feature.imageLight}
                alt={feature.title1}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Features
