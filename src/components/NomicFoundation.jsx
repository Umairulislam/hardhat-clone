import React from "react"
import { nomicFoundationDark, nomicFoundationLight } from "../assets"

const NomicFoundation = ({ isDarkMode }) => {
  return (
    <section className="mt-40 pb-32">
      <div className="flex justify-center items-center gap-5">
        <h1 className="text-xl">Built by</h1>
        <img
          src={isDarkMode ? nomicFoundationLight : nomicFoundationDark}
          alt="nomic foundation"
          className="w-44"
        />
      </div>
    </section>
  )
}

export default NomicFoundation
