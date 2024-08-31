import React from "react"
import { brands } from "../constants"

const BrandSection = () => {
  return (
    <main className="mt-40">
      <h1 className="text-center secondary-heading">
        Trusted by top teams
      </h1>

      <div className="overflow-hidden">
        {/* First Row */}
        <div className="animate-leftScroll flex space-x-8">
          {brands.slice(0, brands.length / 3).map((brand, index) => (
            <img
              key={index}
              src={brand.icon}
              alt={brand.name}
              className="h-12"
            />
          ))}
        </div>

        {/* Second Row */}
        <div className="animate-rightScroll flex space-x-8 mt-8">
          {brands
            .slice(brands.length / 3, (brands.length / 3) * 2)
            .map((brand, index) => (
              <img
                key={index}
                src={brand.icon}
                alt={brand.name}
                className="h-12"
              />
            ))}
        </div>

        {/* Third Row */}
        <div className="animate-leftScroll flex space-x-8 mt-8">
          {brands.slice((brands.length / 3) * 2).map((brand, index) => (
            <img
              key={index}
              src={brand.icon}
              alt={brand.name}
              className="h-12"
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default BrandSection
