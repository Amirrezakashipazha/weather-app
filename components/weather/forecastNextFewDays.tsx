import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


const CardDay = ({ weekName,temperature }: { weekName: string,temperature:number }) => {


  return (
    <div className='p-3'>
      <p className="text-center text-white text-sm mb-2">
        {weekName}
      </p>
      <div className="bg-gradient-to-r from-transparent via-gray-500 to-transparent h-[2px] w-full"></div>
      <div className=""></div>

      <div className="">
        {temperature}
      </div>
    </div>

  )
}


const ForecastNextFewDays = ({data}:{data:any}) => {

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  const [week, setWeek] = useState<string[]>([])


  useEffect(() => {
    setWeek(["Today", ...daysOfWeek.filter((value, index, array) => {
      return index > currentDate.getDay()
    }), ...daysOfWeek.filter((value, index, array) => {
      return index < currentDate.getDay()
    }),])
  }, [])

  useEffect(() => console.log(week), [week])

  return (
    <div className="bg-card-800 rounded-2xl p-4">
      <h3 className="text-xl font-medium text-white">7 Day Forecast</h3>

      <Swiper
        spaceBetween={16}
        slidesPerView={5.5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="h-[calc(100%-48px)] mt-5"
      >
        {[1, 2, 3, 4, 5, 6, 7]?.map((item, index) => (
          <SwiperSlide
            className="bg-card-500 rounded-2xl"
            key={index}
          >
            <CardDay weekName={week[index]} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default ForecastNextFewDays