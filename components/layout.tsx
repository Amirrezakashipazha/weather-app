"use client"
import React, { ReactNode } from 'react'
import { ThemeProvider } from "@material-tailwind/react";

const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <ThemeProvider>
    <div className='flex gap-4 h-[calc(100vh-48px)] w-[calc(100%-10px)]'>
      <div className="bg-card-800 h-full rounded-3xl min-w-[84px]">

      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between w-full">
          <div className="text-white text-sm">
            <p>Hi, Kajal</p>
            <h3 className='text-xl font-medium'>Good Morning</h3>
          </div>
          <div className=""></div>
        </div>
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    </div>
     </ThemeProvider>
  )
}

export default Layout