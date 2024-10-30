import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
const CanvasPage = () => {
  return (
   <Canvas className='h-full'>
       <Experience />
   </Canvas>
  )
}

export default CanvasPage
