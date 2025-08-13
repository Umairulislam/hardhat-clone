import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { testimonials } from "../data"

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto mt-40 border-l-1 border-r-1 border-border relative p-2 md:p-10">
      <span className="absolute left-0 top-0 w-10 border-t-1 pl-5 border-border"></span>
      <span className="absolute right-0 top-0 w-10 border-t-1 pl-5 border-border"></span>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="swiper-container"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col md:flex-row items-center p-4 md:p-8">
              <div className="md:w-1/3 flex flex-col gap-6 items-center text-center">
                <div>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-full w-32 h-32"
                  />
                </div>
                <div>
                  <h3 className="text-sm">{testimonial.name},</h3>
                  <p className="text-sm mt-1">{testimonial.designation}</p>
                </div>
                <div>
                  <img src={testimonial.companyLogo} alt="Company logo" className="w-28 mx-auto" />
                </div>
              </div>

              <div className="md:w-2/4 mt-10 md:mt-0 md:ml-10">
                <p className="text-sm md:text-base text-muted">{testimonial.message}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="absolute left-0 bottom-0 w-10 border-t-1 pl-5 border-border"></span>
      <span className="absolute right-0 bottom-0 w-10 border-t-1 pl-5 border-border"></span>
    </section>
  )
}

export default Testimonials
