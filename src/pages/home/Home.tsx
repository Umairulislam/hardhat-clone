import {
  Banner,
  Brands,
  Community,
  Features,
  Hero,
  Tools,
  Testimonials,
  NomicFoundation,
  Footer,
} from "../../components"

const home = () => {
  return (
    <main className="pt-40">
      <section className="container mx-auto section_padding">
        <Hero />
        <Tools />
        <Features />
        <Community />
        <Banner />
        <Brands />
        <Testimonials />
        <NomicFoundation />
      </section>
      <Footer />
    </main>
  )
}

export default home
