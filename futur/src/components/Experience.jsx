import React, { useContext } from 'react'
import { OrbitControls, useTexture } from '@react-three/drei'
import { MeshContext } from '../context/MeshContext'

const Experience = () => {
    
  const { selectedTexture } = useContext(MeshContext);

  const floorTexture = useTexture(selectedTexture);

  return (
    <>

    <OrbitControls makeDefault />
        <mesh rotation={[-Math.PI / 2, 0, 0]} >
          <planeGeometry args={[20, 20, 64, 64]} />
          <meshStandardMaterial  map={floorTexture}/>
        </mesh>
    </>
  )
}

export default Experience
