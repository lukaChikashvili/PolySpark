import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Lights from './Lights'
const CanvasPage = () => {
  return (
   <Canvas className='h-full border-[0.5px] border-gray-500 rounded-md'>
    <Lights />
       <Experience />
   </Canvas>
  )
}

export default CanvasPage
