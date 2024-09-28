import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { weather } from '@/models/weather';
import { Current } from '@/models/weather/current';
import { Unit_current } from '@/models/weather/current/units';
import { Daily } from '@/models/weather/daily';
import { Unit_daily } from '@/models/weather/daily/units';
import { Hourly } from '@/models/weather/hourly';
import { Unit_hourly } from '@/models/weather/hourly/units';
import { TDateISO } from '@/types/iso';

const TodaysHighlight = ({ data }: { data: weather }) => {


  const [nowIndex, setNowIndex] = useState<number>(0)


  const [dataModel, setDataModel] = useState<Current>()
  const [unitDataModel, setUnitDataModel] = useState<Unit_current>()

  const [dataModelDaily, setDataModelDaily] = useState<Daily>()
  const [unitDataModelDaily, setUnitDataModelDaily] = useState<Unit_daily>()

  const [dataModelHourly, setDataModelHourly] = useState<Hourly>()
  const [unitDataModelHourly, setUnitDataModelHourly] = useState<Unit_hourly>()

  useEffect(() => {

    const result = new Current(data.current)
    setDataModel(result)
    const resultUnit = new Unit_current(data.current_units)
    setUnitDataModel(resultUnit)

    const resultDaily = new Daily(data.daily)
    setDataModelDaily(resultDaily)
    const resultUnitDaily = new Unit_daily(data.daily_units)
    setUnitDataModelDaily(resultUnitDaily)

    const resultHourly = new Hourly(data.hourly)
    setDataModelHourly(resultHourly)
    const resultUnitHourly = new Unit_hourly(data.hourly_units)
    setUnitDataModelHourly(resultUnitHourly)

  }, [data])


  useEffect(() => {
    const currentDate = new Date();

    // Format the date and hours but set minutes to '00'
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');

    const formatted = `${year}-${month}-${day}T${hours}:00`; // Always set minutes to '00'
    if (dataModelHourly) {
      const index = dataModelHourly.time.findIndex((item) => item === formatted);
      if (index !== -1) {
        setNowIndex(index);
      }
    }

  }, [dataModelHourly])

  return (
    <div className="bg-card-800 rounded-2xl p-4 text-white">
      <h3 className="text-xl font-medium ">Today’s Highlight</h3>
      <div className="mt-2 h-[calc(100%-2.5rem)] w-[calc(100%-2rem)] grid grid-cols-[30%,30%,40%] grid-rows-2 gap-4">
        <div className="bg-card-500 rounded-lg p-3 h-full flex flex-col justify-between items-end">
          <div className="flex justify-end w-full gap-1 items-center">
            <Image src="/assets/images/weather/solar_wind-linear.svg" width={24} height={24} alt="" />
            <p className=' text-xs lg:text-sm xl:text-base'>Wind Status</p>
          </div>
          <p className='text-2xl'>{dataModelHourly?.wind_speed_10m[nowIndex]}

            <span className="text-xs px-1">
              {unitDataModelHourly?.wind_gusts_10m}
            </span>

          </p>
          <span>{dataModelHourly?.time[nowIndex]?.split("T")[1]}</span>
        </div>

        <div className="bg-card-500 rounded-lg p-3 h-full flex flex-col justify-between items-end">
          <div className="flex justify-end w-full gap-1 items-center">
            <Image src="/assets/images/weather/carbon_humidity.svg" width={24} height={24} alt="" />
            <p className=' text-xs lg:text-sm xl:text-base'>Humidity</p>
          </div>
          <p className='text-2xl'>{dataModel?.relative_humidity_2m}

            <span className="text-xs px-1">
              {unitDataModel?.relative_humidity_2m}
            </span>

          </p>
          <span>
            {dataModel && (dataModel?.relative_humidity_2m < 30
              ? 'Humidity is too low'
              : dataModel?.relative_humidity_2m <= 50
                ? 'Humidity is good'
                : 'Humidity is too high')}
          </span>
        </div>
        <div className="bg-card-500 rounded-lg p-3">
          <div className="flex items-center justify-between h-full w-full">
            <Image src="/assets/images/weather/sunrise.svg" width={64} height={64} alt="" />
            <div className="flex flex-col items-start justify-center gap-2">
              <p>Sunrise </p>
              <p className='text-2xl font-semibold'>{dataModelDaily?.sunrise[0]?.split("T")[1]} <span>AM</span></p>

            </div>
          </div>
        </div>
        <div className="bg-card-500 rounded-lg p-3 h-full flex flex-col justify-between items-end">
          <div className="flex justify-end w-full gap-1 items-center">
            <Image src="/assets/images/weather/hugeicons_uv-02.svg" width={24} height={24} alt="" />
            <p className=' text-xs lg:text-sm xl:text-base'>UV Index</p>
          </div>
          <p className='text-2xl'>{dataModelDaily?.uv_index_max[0]}

            <span className="text-xs px-1">
              {unitDataModelDaily?.uv_index_max || "uv"}
            </span>

          </p>

          <span>Moderate UV</span>
        </div>
        <div className="bg-card-500 rounded-lg p-3 h-full flex flex-col justify-between items-end">
          <div className="flex justify-end w-full gap-1 items-center">
            <Image src="/assets/images/weather/ri_eye-line.svg" width={24} height={24} alt="" />
            <p className=' text-xs lg:text-sm xl:text-base'>Visibility</p>
          </div>
          <p className='text-2xl'>{dataModelHourly?.visibility[nowIndex]}

            <span className="text-xs px-1">
              {unitDataModelHourly?.visibility}
            </span>

          </p>

          <span>{dataModelHourly?.time[nowIndex]?.split("T")[1]}</span>
        </div>
        <div className="bg-card-500 rounded-lg p-3">
          <div className="flex items-center justify-between h-full w-full">
            <Image src="/assets/images/weather/sunset.svg" width={64} height={64} alt="" />
            <div className="flex flex-col items-start justify-center gap-2">
              <p>Sunset</p>
              <p className='text-2xl font-semibold'>{dataModelDaily?.sunset[0]?.split("T")[1]} <span>PM</span></p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default TodaysHighlight