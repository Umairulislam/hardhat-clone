import React from "react"
import { useSelector } from "react-redux"

const Footer = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  const date = new Date().getFullYear()
  return (
    <footer className={`${isDarkMode ? "dark-mode" : "light-mode"} py-10`}>
      <div className=" text-center">
        <span className="border-t-2 border-gray-500 px-24"></span>
        <p className="text-gray-500 text-sm">
          Copyright {date} Nomic Foundation | Privacy Policy
        </p>
      </div>
    </footer>
  )
}

export default Footer
