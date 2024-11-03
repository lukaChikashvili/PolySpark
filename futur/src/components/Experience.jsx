import React from 'react'
import { OrbitControls } from '@react-three/drei'

const Experience = () => {
  return (
    <>

    <OrbitControls makeDefault />
        <mesh rotation={[-Math.PI / 2, 0, 0]} >
          <planeGeometry args={[10, 10, 64, 64]} />
          <meshStandardMaterial wireframe = {true}/>
        </mesh>
    </>
  )
}

export default Experience
