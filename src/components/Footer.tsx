import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { ethereumFoundationDark, ethereumFoundationLight } from "../assets"

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  const date = new Date().getFullYear()
  return (
    <footer className="mt-20 py-12 bg-bg-dark text-white dark:bg-bg-light dark:text-black">
      <div className="flex flex-col text-center justify-center items-center gap-20 flex-wrap">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <h1 className="text-xl font-light">Suppported by</h1>
          <img
            src={theme === "dark" ? ethereumFoundationDark : ethereumFoundationLight}
            alt="Ethereum Foundation"
            className="w-52"
          />
        </div>
        <div className="text-center">
          <span className="border-t-1 border-border px-24"></span>
          <p className="text-muted font-medium text-sm">
            Copyright {date} Nomic Foundation | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
