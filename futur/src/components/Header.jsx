import React from 'react'

const Header = () => {
  return (
    <div className="w-full border-[0.5px] border-gray-500 p-4 rounded-md mt-2 header flex items-center justify-between gap-12">
      <div className="flex">
        <h1 className="w-[13rem] text-white bg-black px-12 py-[2px] rounded-md text-xl shadow-lg text-center">PolySpark</h1>
      </div>

      <div className="w-full flex-1 flex items-center justify-center gap-4 buttons">
        <button className="bg-white w-full rounded-md py-1 shadow-lg shadow-black cutout-button   ">
            
      Figures
           
        </button>

        <button className="bg-white w-full rounded-md py-1 shadow-lg shadow-black cutout-button  ">Models</button>
        <button className="bg-white w-full rounded-md py-1 shadow-lg shadow-black cutout-button  ">Gallery</button>
        <button className="bg-white w-full rounded-md py-1 shadow-lg shadow-black cutout-button  ">Pricing</button>
        
      </div>

      <div className="w-[13rem] flex text-center">
        sfhsfsf
      </div>
    </div>
  );
}

export default Header;
