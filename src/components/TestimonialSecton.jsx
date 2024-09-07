import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { testimonials } from "../constants"

const TestimonialCarousel = () => {
  return (
    <main className="max-w-6xl mx-auto mt-40 border-l-2 border-r-2 border-slate-700 relative p-2 md:p-10">
      <span className="absolute left-0 top-0 w-10 border-t-2 pl-5 border-slate-700"></span>
      <span className="absolute right-0 top-0 w-10 border-t-2 pl-5 border-slate-700"></span>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="swiper-container"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <section className="flex flex-col md:flex-row items-center p-4 md:p-8 mx-4">
              {/* Left Side: Avatar, Name, Designation */}
              <div className="md:w-1/3 flex flex-row md:flex-col gap-4 items-center text-center">
                <div>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-full w-32 h-32"
                  />
                </div>
                <div>
                  <h3 className="text-sm">{testimonial.name},</h3>
                  <p className="text-sm ">{testimonial.designation}</p>
                  <img
                    src={testimonial.companyLogo}
                    alt="Company logo"
                    className="w-20 h-20 mx-auto"
                  />
                </div>
              </div>
              {/* Right Side: Message */}
              <div className="md:w-2/4 mt-10 md:mt-0 md:ml-10">
                <p className="text-sm md:text-base text-gray-500 ">
                  {testimonial.message}
                </p>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="absolute left-0 bottom-0 w-10 border-t-2 pl-5 border-slate-700"></span>
      <span className="absolute right-0 bottom-0 w-10 border-t-2 pl-5 border-slate-700"></span>
    </main>
  )
}

export default TestimonialCarousel
