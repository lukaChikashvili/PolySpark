import React from 'react'
import portal from '../assets/portal.jpg'

const Sidebar = () => {
  return (
    <div className='w-1/4 border-[0.5px] border-gray-500 h-screen rounded-md flex flex-col gap-6 items-center px-4 '>
        <div className='w-full  mt-[1rem]'>
           <button className='w-full electric-button p-2 text-black'>Publish</button>
        </div>

        <div>
          <img src = {portal} className='rounded-md shadow-lg bg-black' />
        </div>

        <div>
           <h2 className='text-white'>About</h2>
           <p className='text-white'>
           PolySpark is a powerful 3D software designed for creators, artists, and 
           developers who want to bring their visions to life. 
           </p>
        </div>

        <div>
           <div>
             links
           </div>
        </div>
    </div>
  )
}

export default Sidebar
