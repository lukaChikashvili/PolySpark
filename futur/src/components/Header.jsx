import React from 'react'
import { CircleHelp, Headphones, Languages, Menu } from 'lucide-react'

const Header = () => {
  return (
    <div className="w-full border-[0.5px] border-gray-500 p-4 rounded-md mt-2 header flex items-center justify-between gap-12">
      <div className="flex">
        <h1 className="w-[14rem] text-white bg-black px-12 py-[2px] rounded-md text-xl shadow-lg text-center">PolySpark</h1>
      </div>

      <div className="w-full flex-1 flex items-center justify-center gap-4 buttons">
        <button className="bg-white w-full rounded-md py-1 shadow-lg shadow-black cutout-button   ">
            
      Furniture
           
        </button>

        <button className=" w-full rounded-md py-1 shadow-lg shadow-black cutout-button   ">3D Text</button>
        <button className="bg-white w-full rounded-md py-1 shadow-lg shadow-black cutout-button  ">Textures</button>
        <button className="bg-white w-full rounded-md py-1 shadow-lg shadow-black cutout-button  ">Animation</button>
        
      </div>

      <div className="w-[13rem] flex text-center items-center justify-center gap-4 text-white">
  <CircleHelp className="icon-hover cursor-pointer p-2 w-10 h-10 shadow shadow-[#00e6e6] rounded-full" />
  <Languages className="icon-hover cursor-pointer p-2 w-10 h-10 shadow shadow-[#00e6e6] rounded-full" />
  <Headphones className="icon-hover cursor-pointer p-2 w-10 h-10 shadow shadow-[#00e6e6] rounded-full" />
  <Menu className="icon-hover cursor-pointer p-2 w-10 h-10 shadow shadow-[#00e6e6] rounded-full" />
</div>
    </div>
  );
}

export default Header;
