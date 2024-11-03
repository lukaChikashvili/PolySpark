import React, { useContext } from 'react'
import { OrbitControls, useTexture } from '@react-three/drei'
import { MeshContext } from '../context/MeshContext'
import * as THREE from 'three'

const Experience = () => {
    
  const { selectedTexture, wallTexture } = useContext(MeshContext);

  const floorTexture = useTexture(selectedTexture);
  const wallTextureImg = useTexture(wallTexture)

  return (
    <>

    <OrbitControls makeDefault />
        <mesh rotation={[-Math.PI / 2, 0, 0]} >
          <planeGeometry args={[20, 20, 64, 64]} />
          <meshStandardMaterial  map={floorTexture} side={THREE.DoubleSide}/>
        </mesh>

        <mesh position={[-10, 5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial map = {wallTextureImg} />
      </mesh>

      <mesh position={[10, 5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial map = {wallTextureImg} />
      </mesh>

      <mesh position={[0, 5, -10]} rotation={[0, 0, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial map = {wallTextureImg}/>
      </mesh>

      <mesh position={[0, 5, 10]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial map = {wallTextureImg} />
      </mesh>
    </>
  )
}

export default Experience
