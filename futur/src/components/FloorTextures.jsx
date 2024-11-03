import React, { useContext } from 'react'
import floor from '../assets/floor1.jpg'
import floor2 from '../assets/floor2.png'
import { useTexture } from '@react-three/drei'
import { MeshContext } from '../context/MeshContext'

const FloorTextures = () => {
    const { chooseTexture } = useContext(MeshContext);
  return (
    <div>
       <img src={floor} className='w-[10rem] cursor-pointer' onClick={() => chooseTexture(floor)}/>
       <img src={floor2} className='w-[10rem] cursor-pointer' onClick={() => chooseTexture(floor2)}/>
    </div>
  )
}

export default FloorTextures
