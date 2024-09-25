"use client";
import useFetch, { Entry } from "@/hooks/useFetch";
import Image from "next/image";
import { useEffect } from "react";

import DialogDefault from "./dialog";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { weather } from "@/models/weather";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function Home() {
  const entry: Entry = {
    url: "https://api.open-meteo.com/v1/forecast?latitude=36.9339&longitude=50.65556&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,pressure_msl,surface_pressure,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,evapotranspiration,et0_fao_evapotranspiration,vapour_pressure_deficit,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration",
  };
  const { data, loading, error } = useFetch<weather>(entry);

  useEffect(() => {
    if (data) {
      const result = new weather(data);
      console.log(data);
      console.log(result.get_weather());
    }
    // console.log(data, loading, error);
  }, [data, loading, error]);

  return (
    <div className="grid w-[calc(100%-1rem)] h-full grid-cols-[45%,55%] gap-4">
      <div
        className="grid h-[calc(100%-1rem)] gap-4"
        style={{ gridTemplateRows: "45% 55%", gridTemplateColumns: "100%"  }}
      >
        <div className="bg-card-800 rounded-2xl p-4 max-h-[50vh]">
          <div className=" w-full flex items-start justify-between">
            <div className="py-1 px-4 rounded-xl bg-card-500 flex justify-between text-white">
              Dhaka, Bangladesh
            </div>
            <Menu>
              <MenuHandler className="bg-card-500">
                <Button className="bg-card-500">C</Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>C</MenuItem>
                <MenuItem>F</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="bg-card-800 rounded-2xl p-4 max-h-[50vh]">
          <h3 className="text-xl font-medium text-white">Others Countries</h3>
          {/* <div className="mt-3 w-full flex flex-col gap-4 h-[calc(100%-2.5rem)]">
            <div className="bg-card-500 rounded-2xl w-full h-[127px]"></div>
            <div className="bg-card-500 rounded-2xl w-full h-[127px]"></div>
          </div> */}
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
      </div>

      <div
        className="grid h-[calc(100%-1rem)] gap-4"
        style={{ gridTemplateRows: "55% 45%", gridTemplateColumns: "100%" }}
      >
        <div className="bg-card-800 rounded-2xl p-4">
          <h3 className="text-xl font-medium text-white">Today’s Highlight</h3>
          <div className="mt-2 h-[calc(100%-2.5rem)] w-[calc(100%-2rem)] grid grid-cols-[30%,30%,40%] grid-rows-2 gap-4">
            <div className="bg-card-500 rounded-lg "></div>
            <div className="bg-card-500 rounded-lg "></div>
            <div className="bg-card-500 rounded-lg "></div>
            <div className="bg-card-500 rounded-lg "></div>
            <div className="bg-card-500 rounded-lg "></div>
            <div className="bg-card-500 rounded-lg "></div>
            
          </div>
        
        
        </div>
        <div className="bg-card-800 rounded-2xl p-4">
          <h3 className="text-xl font-medium text-white">10 Day Forecast</h3>
     
            <Swiper
            
              spaceBetween={16}
              slidesPerView={3.5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="h-full mt-5"
            >
              {[1, 2, 3, 4, 5, 6, 7]?.map((item, index) => (
                <SwiperSlide
                  className="bg-card-500 rounded-2xl !h-[calc(100%-3rem)]"
                  key={item}
                ></SwiperSlide>
              ))}
            </Swiper>
   
        </div>
      </div>
    </div>
  );
}
