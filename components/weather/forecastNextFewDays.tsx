import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { temperatureDaily } from "@/models/weather/daily/index";
import { SkeletonSimpleCard } from "../skeleton";

const CardDay = ({
  weekName,
  temperature,
}: {
  weekName: string;
  temperature: number;
}) => {
  return (
    <div className="p-3 flex flex-col justify-between items-center h-full">
      <div className="w-full">
        <p className="text-center text-white text-sm mb-2">{weekName}</p>
        <div className="bg-gradient-to-r from-transparent via-gray-500 to-transparent h-[2px] w-full"></div>
      </div>
      <div className=""></div>

      <p className="text-center text-white text-md">{temperature}°C</p>
    </div>
  );
};

const ForecastNextFewDays = ({ data }: { data?: temperatureDaily }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  const [week, setWeek] = useState<string[]>([]);

  useEffect(() => {
    setWeek([
      "Today",
      ...daysOfWeek.filter((value, index, array) => {
        return index > currentDate.getDay();
      }),
      ...daysOfWeek.filter((value, index, array) => {
        return index < currentDate.getDay();
      }),
    ]);
  }, []);

  useEffect(() => console.log(week), [week]);

  return (
    <div className="bg-card-800 rounded-2xl p-4">
      <h3 className="text-xl font-medium text-white">7 Day Forecast</h3>

      {data ? (
        <Swiper
          spaceBetween={16}
          slidesPerView={5.2}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          className="h-[calc(100%-48px)] mt-5"
        >
          {[1, 2, 3, 4, 5, 6, 7]?.map((item, index) => (
            <SwiperSlide className="bg-card-500 rounded-2xl" key={index}>
              <CardDay
                weekName={week[index]}
                temperature={data.temperature.average[index]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex gap-3 h-[calc(100%-48px)] mt-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonSimpleCard key={index} className="h-full"/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForecastNextFewDays;
