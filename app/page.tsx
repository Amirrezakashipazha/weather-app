"use client";
import useFetch, { Entry } from "@/hooks/useFetch";
import Image from "next/image";
import { useEffect, useState } from "react";

import DialogDefault from "./dialog";

import { weather } from "@/models/weather";

import { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import LocationWeatherCard from "@/components/weather/locationWeatherCard";
import OtherCountries from "@/components/weather/otherCountries";
import TodaysHighlight from "@/components/weather/todaysHighlight";
import ForecastNextFewDays from "@/components/weather/forecastNextFewDays";



export default function Home() {

  const [dataModel,setDataModel]=useState<weather>()
  
  
  
  
  const entry: Entry = {
    url: "https://api.open-meteo.com/v1/forecast?latitude=36.9339&longitude=50.65556&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,pressure_msl,surface_pressure,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,evapotranspiration,et0_fao_evapotranspiration,vapour_pressure_deficit,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration",
  };
  const { data, loading, error } = useFetch<weather>(entry);

  useEffect(() => {
    if (data) {
      const result = new weather(data);
      setDataModel(result);
    }
    // console.log(data, loading, error);
  }, [data, loading, error]);

  return (
    <div className="grid w-[calc(100%-1rem)] h-full grid-cols-[45%,55%] gap-4">
      <div
        className="grid h-[calc(100%-1rem)] gap-4"
        style={{ gridTemplateRows: "45% 55%", gridTemplateColumns: "100%"  }}
      >
      <LocationWeatherCard data={data}/>
       <OtherCountries/>
      </div>

      <div
        className="grid h-[calc(100%-1rem)] gap-4"
        style={{ gridTemplateRows: "55% 45%", gridTemplateColumns: "100%" }}
      >
    <TodaysHighlight data={data}/>
    <ForecastNextFewDays data={dataModel?.getTemperature()}/>
      </div>
    </div>
  );
}
