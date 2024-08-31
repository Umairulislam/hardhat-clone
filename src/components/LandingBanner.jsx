import React from "react"

const LandingBanner = () => {
  return (
    <section className="mt-40 flex flex-col justify-center items-center gap-10 max-w-lg mx-auto text-center">
      <div>
        <h1 className="secondary-heading">
          Hardhat is next- generation Ethereum tooling
        </h1>
        <p className="mt-5 text-lg">
          Experience the new way of building Ethereum software.
        </p>
      </div>
      <button className="btn btn-primary">Get Started</button>
    </section>
  )
}

export default LandingBanner
