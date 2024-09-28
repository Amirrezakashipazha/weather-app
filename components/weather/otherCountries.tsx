import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Image from 'next/image';

const OtherCountries = () => {

  const [state, setState] = useState<string>('See All')

  const continents = ["Africa", "Antarctica", "Asia", "Europe", "North America", "South America", "Australia", "See All"]
  return (
    <div className="bg-card-800 rounded-2xl p-4 max-h-[50vh]">
      <div className="flex w-full justify-between items-center">
        <h3 className="text-xl font-medium text-white">Others Countries</h3>

        <Menu>
          <MenuHandler>
            <Button className='flex items-center gap-1 font-normal'>
              {state}
              <Image src="/assets/images/weather/arrow.svg" width={16} height={16} alt="arrow" />
            </Button>
          </MenuHandler>
          <MenuList className='min-w-0 max-h-[230px] overflowY-scroll'>
            {continents.map((item, index) =>

              <MenuItem value={index} key={index} onClick={(e) => setState(e.currentTarget.textContent || 'See All')}>{item}</MenuItem>
            )

            }
          </MenuList>
        </Menu>
      </div>
      <Swiper
        direction="vertical"
        spaceBetween={16}
        slidesPerView={2.2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
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