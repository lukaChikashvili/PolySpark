import React from 'react'
import { OrbitControls } from '@react-three/drei'

const Experience = () => {
  return (
    <>

    <OrbitControls makeDefault />
      <mesh >
         <boxGeometry />
         <meshStandardMaterial color="red"/>
      </mesh>
    </>
  )
}

export default Experience
