import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const OtherCountries = () => {
  return (
    <div className="bg-card-800 rounded-2xl p-4 max-h-[50vh]">
          <h3 className="text-xl font-medium text-white">Others Countries</h3>
          <Swiper
            direction="vertical"
              spaceBetween={16}
              slidesPerView={2.2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="mt-3 w-full flex flex-col gap-4 h-[calc(100%-2.5rem)]"
            >
              {[1, 2, 3, 4, 5, 6, 7]?.map((item, index) => (
                <SwiperSlide
                  className="bg-card-500 rounded-2xl w-full"
                  key={item}
                ></SwiperSlide>
              ))}
            </Swiper>
        </div>
  )
}

export default OtherCountries