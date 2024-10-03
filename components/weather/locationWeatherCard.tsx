import { weather } from "@/models/weather";
import { Current } from "@/models/weather/current";
import { Unit_current } from "@/models/weather/current/units";
import { Daily } from "@/models/weather/daily";
import { Unit_daily } from "@/models/weather/daily/units";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SkeletonContent } from "../skeleton";

const LocationWeatherCard = ({ data }: { data?: weather }) => {
  const [tempatoreUnit, setTempatoreUnit] = useState<boolean>(true);

  const [dataModel, setDataModel] = useState<Current>();
  const [unitDataModel, setUnitDataModel] = useState<Unit_current>();

  const [dataModelDaily, setDataModelDaily] = useState<Daily>();
  const [unitDataModelDaily, setUnitDataModelDaily] = useState<Unit_daily>();

  const getFormattedDate = () => {
    const today = new Date();

    const weekdayOptions: Intl.DateTimeFormatOptions = {
      weekday: "long",
    };
    const weekday = today.toLocaleDateString("en-US", weekdayOptions);

    const day = String(today.getDate()).padStart(2, "0");
    const month = today.toLocaleString("en-US", { month: "short" });
    const year = today.getFullYear();
    const fullDate = `${day} ${month}, ${year}`;

    return { weekday, fullDate };
  };

  useEffect(() => {
    if (data) {
      const result = new Current(data.current);
      setDataModel(result);
      const resultDaily = new Daily(data.daily);
      setDataModelDaily(resultDaily);
      const resultUnitDaily = new Unit_daily(data.daily_units);
      setUnitDataModelDaily(resultUnitDaily);
    }
  }, [data]);

  return (
    <div className="bg-card-800 rounded-2xl p-4 max-h-[50vh] text-white relative">
      <div className=" w-full flex items-start justify-between">
        <Button className="py-1 px-4 rounded-xl bg-card-500 flex justify-between items-center font-normal">
          <Image
            src="/assets/images/weather/location.svg"
            width={24}
            height={24}
            alt="location"
            className="mr-2"
          />
          <p>Dhaka, Bangladesh</p>
        </Button>
        <Button
          className="bg-card-500"
          onClick={() => setTempatoreUnit(!tempatoreUnit)}
        >
          {tempatoreUnit ? "C" : "F"}
        </Button>
      </div>
      <div className="">
        <div className="absolute top-14 left-4">
          <p className="text-4xl font-medium">{getFormattedDate().weekday}</p>
          <span className="text-base">{getFormattedDate().fullDate}</span>
        </div>

        <div className="absolute bottom-4 right-4 flex flex-col gap-11 min-w-[150px]">
          {data?
            <>
              <div className="flex flex-col items-end">
                <p className="font-medium text-4xl">
                  {Math.round(dataModelDaily?.temperature_2m_max[0] || 0)}
                  {unitDataModelDaily?.temperature_2m_max}
                </p>
                <p className="font-medium text-2xl text-gray-500">
                  /{Math.round(dataModelDaily?.temperature_2m_min[0] || 0)}
                  {unitDataModelDaily?.temperature_2m_min}
                </p>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <p>Heavy Rain</p>
                <span className="text-base">
                  Feels like {dataModel?.apparent_temperature || 0}°
                </span>
              </div>
            </>:
            <SkeletonContent lines={4} className="max-w-[150px] flex flex-col items-end"/>
          }
        </div>
      </div>
    </div>
  );
};

export default LocationWeatherCard;
