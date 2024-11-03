import { useScroll } from '@react-three/drei'
import React, { useState } from 'react'

const RightSidebar = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  }

  return (
    <>
    <div className='relative w-1/4 border-[0.5px] border-gray-500 h-screen rounded-md flex flex-col items-center '>
        <p className='text-white text-xl mt-[1rem] px-12 py-2 bg-pink-700 cursor-pointer  rounded-md shadow-lg shadow-black ' onClick={showModal}>Choose Floor</p>
    </div>

     {modal && <div className='absolute  bg-black opacity-80 w-[61.6rem] left-[17rem] h-screen '>
          ssfs
      </div>}
    </>
  )
}

export default RightSidebar
