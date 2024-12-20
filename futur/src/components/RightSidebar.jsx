
import { MousePointer2, X } from 'lucide-react';
import React, { useContext } from 'react'
import { MeshContext } from '../context/MeshContext.jsx';
import FloorTextures from './FloorTextures.jsx';
import WallTextures from './WallTextures.jsx';


const RightSidebar = () => {
  const { modal, setModal, wall, setWall } = useContext(MeshContext);
  

  const showModal = () => {
    setModal(!modal);
  }

  return (
    <>
    <div className='relative w-1/4 border-[0.5px] border-gray-500 h-screen rounded-md flex flex-col items-center '>
        <p className='text-white text-md mt-[1rem] px-12 py-2 bg-pink-700 cursor-pointer  rounded-md shadow-lg shadow-black flex items-center gap-2 ' onClick={showModal}>{modal ? <X /> : <MousePointer2 />}Choose Floor</p>
        <p className='text-white text-md mt-[1rem] px-12 py-2 bg-pink-700 cursor-pointer  rounded-md shadow-lg shadow-black flex items-center gap-2 ' onClick={() => setWall(!wall)}>{wall ? <X /> : <MousePointer2 />}Choose Wall</p>
    </div>

     {modal && <div className='absolute  bg-black opacity-80 w-[61.6rem] left-[17rem] h-screen '>
         <FloorTextures />
      </div>}

      {wall && 
      <div className='absolute  bg-black opacity-80 w-[61.6rem] left-[17rem] h-screen '>
      <WallTextures />
   </div>}
      
    </>
  )
}

export default RightSidebar
