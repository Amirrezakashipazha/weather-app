"use client"
import {
  Select, Option,
  Input,
  Switch,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import React, { ReactElement, ReactNode, useEffect, useRef, useState } from 'react'
import { ThemeProvider } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import useFetch, { Entry } from "@/hooks/useFetch";
import { Countries, CountrySummaryInformation } from "@/models/countries";

const Layout = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuCountries, setOpenMenuCountries] = useState(false);

  const inputCountries = useRef<any>(null)

  const [dataModelCountries, setDataModelCountries] = useState<Countries>();
  const [selectedCountry, setSelectedCountry] = useState<CountrySummaryInformation>();
  const [dataSelect, setDataSelect] = useState<CountrySummaryInformation[]>();
  const [search, setSearch] = useState<string>('');

  const entry: Entry = {
    url: "https://restcountries.com/v3.1/all"
  };
  const { data, loading, error } = useFetch<Countries['data']>(entry);

  useEffect(() => {
    if (inputCountries?.current) {
      inputCountries?.current?.focus()
      console.log(inputCountries);
    }
    setSearch('')
  }, [openMenuCountries])

  useEffect(() => {
    if (data && data?.length > 0) {
      const result = new Countries(data)
      setDataModelCountries(result)
      setDataSelect(result.getSummaryInformation())
    }
  }, [data])


  useEffect(() => {
    if (data) {
      const result = new Countries(data)
      if (search) {
        setDataSelect(result.getSummaryInformation().filter(item => item.name.common.toLowerCase().includes(search.toLowerCase()) || item.name.official.toLowerCase().includes(search.toLowerCase())) || [])
      } else {
        setDataSelect(result.getSummaryInformation())
      }

    }

  }, [search])


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
            <div className="">
              <div className="flex items-center justify-center gap-4 ![&>div>lable]:after-none">
                <div className="select-search-countries [&>div>ul]:bg-card-800 relative">
                  {dataModelCountries?.data && <Select value={selectedCountry?.name.common} onClick={() => setOpenMenuCountries(!openMenuCountries)} label="Search your location" className="gap-2 bg-card-800 min-w-[333px] border-none rounded-[999px] text-white pt-8 [&>span]:ml-2">
                    <div className=" sticky top-0  right-0 after:absolute after:-top-[12px] after:right-0 after:w-full after:h-3 after:bg-card-800
                     before:absolute before:bottom-0 before:right-0 before:w-full before:h-[8px] before:bg-card-800">
                      <input className="
                     
                    w-full h-8 border text-white border-gray-600 rounded-md px-3 mb-2 bg-card-800" ref={inputCountries} onKeyUp={(e) => setSearch((e.target as HTMLInputElement).value)} />

                    </div>
                    {
                      dataSelect && dataSelect?.length > 0 ?
                        dataSelect.map((item, index) =>
                          <Option key={index} onClick={() => setSelectedCountry(item)} className="bg-card-800 border-gray-700 text-white">
                            <div className="flex items-center gap-1">
                              <img src={item.flag} alt="" className="w-6 h-full" />
                              {item.name.common}
                            </div>
                          </Option>

                        )
                        : <Option className="text-white">no result</Option>
                    }

                  </Select>}
                </div>
                <Switch crossOrigin="anonymous" />
                <Menu open={openMenu} handler={setOpenMenu}>
                  <MenuHandler>
                    <div className="cursor-pointer h-12 min-w-12 flex items-center gap-2 " onClick={() => setOpenMenu(!openMenu)}>
                      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                      <ChevronDownIcon
                        color="white"
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                          }`}
                      />
                    </div>
                  </MenuHandler>
                  <MenuList className="bg-card-800 border-gray-700 text-white">
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>Menu Item 3</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
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