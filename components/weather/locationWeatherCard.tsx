import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'

const LocationWeatherCard = () => {
    const [tempatoreUnit, setTempatoreUnit] = useState<boolean>(true)

    return (
        <div className="bg-card-800 rounded-2xl p-4 max-h-[50vh]">
            <div className=" w-full flex items-start justify-between">
                <div className="py-1 px-4 rounded-xl bg-card-500 flex justify-between text-white">
                    Dhaka, Bangladesh
                </div>
                <Button className="bg-card-500" onClick={() => setTempatoreUnit(!tempatoreUnit)}>{tempatoreUnit ? "C" : "F"}</Button>
            </div>
        </div>
    )
}

export default LocationWeatherCard