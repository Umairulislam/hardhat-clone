import Marquee from "react-fast-marquee"
import { brands } from "../data"

const Brands = () => {
  return (
    <section className="mt-40">
      <h1 className="text-center secondary_heading">Trusted by top teams</h1>
      <div className="mt-24 flex flex-col items-center gap-10">
        <Marquee speed={80} pauseOnHover>
          <div className="flex items-center gap-12">
            {brands.slice(0, 12).map((brand) => (
              <img src={brand.icon} alt={brand.name} key={brand.icon} />
            ))}
          </div>
        </Marquee>
        <Marquee speed={80} pauseOnHover direction="right">
          <div className="flex items-center gap-12">
            {brands.slice(12, 24).map((brand) => (
              <img src={brand.icon} alt={brand.name} key={brand.icon} />
            ))}
          </div>
        </Marquee>
        <Marquee speed={80} pauseOnHover>
          <div className="flex items-center gap-12">
            {brands.slice(24, 36).map((brand) => (
              <img src={brand.icon} alt={brand.name} key={brand.icon} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default Brands
