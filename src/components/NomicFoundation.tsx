import { useContext } from "react"
import { nomicFoundationDark, nomicFoundationLight } from "../assets"
import { ThemeContext } from "../context/ThemeContext"

const NomicFoundation = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <section className="mt-40 pb-32">
      <div className="flex justify-center items-center gap-5 flex-wrap">
        <h1 className="text-2xl font-light">Built by</h1>
        <img
          src={theme === "dark" ? nomicFoundationDark : nomicFoundationLight}
          alt="nomic foundation"
          className="w-52"
        />
      </div>
    </section>
  )
}

export default NomicFoundation
