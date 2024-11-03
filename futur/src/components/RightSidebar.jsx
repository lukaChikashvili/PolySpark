
import { MousePointer2 } from 'lucide-react';
import React, { useContext } from 'react'
import { MeshContext } from '../context/MeshContext.jsx';


const RightSidebar = () => {
  const { modal, setModal } = useContext(MeshContext);

  const showModal = () => {
    setModal(!modal);
  }

  return (
    <>
    <div className='relative w-1/4 border-[0.5px] border-gray-500 h-screen rounded-md flex flex-col items-center '>
        <p className='text-white text-md mt-[1rem] px-12 py-2 bg-pink-700 cursor-pointer  rounded-md shadow-lg shadow-black flex items-center gap-2 ' onClick={showModal}><MousePointer2 />Choose Floor</p>
    </div>

     {modal && <div className='absolute  bg-black opacity-80 w-[61.6rem] left-[17rem] h-screen '>
          ssfs
      </div>}
    </>
  )
}

export default RightSidebar
