import React from 'react'

const TodaysHighlight = () => {
  return (
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
  )
}

export default TodaysHighlight