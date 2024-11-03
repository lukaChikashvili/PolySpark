import React, { useContext, useEffect, useRef, useState } from 'react'
import { Html, OrbitControls, TransformControls, useGLTF, useTexture } from '@react-three/drei'
import { MeshContext } from '../context/MeshContext'
import * as THREE from 'three'
import { Move, RefreshCw, Scale3D } from 'lucide-react'

const Experience = () => {
    
  const { selectedTexture, wallTexture } = useContext(MeshContext);

  const floorTexture = useTexture(selectedTexture);
  const wallTextureImg = useTexture(wallTexture);

  const [selectPicture, setSelectPicture] = useState(false);

  const [picturePosition, setPicturePosition] = useState(new THREE.Vector3(-9.9, 5, 0));
  const [pictureScale, setPictureScale] = useState(new THREE.Vector3(1, 1, 1));
  

  const [mode, setMode] = useState('');


  // import sofa model
  const sofa = useGLTF('./sofa.glb');


  const pictureRef = useRef(null);
  const controlsRef = useRef(null);

  
  const prevPosition = useRef(picturePosition.clone());
  const prevScale = useRef(pictureScale.clone());

  useEffect(() => {
    const savedPosition = localStorage.getItem('picturePosition');
    const savedScale = localStorage.getItem('pictureScale');

    if (savedPosition) {
      const parsedPosition = new THREE.Vector3(...JSON.parse(savedPosition));
      setPicturePosition(parsedPosition);
      prevPosition.current = parsedPosition.clone(); 
    }
    if (savedScale) {
      const parsedScale = new THREE.Vector3(...JSON.parse(savedScale));
      setPictureScale(parsedScale);
      prevScale.current = parsedScale.clone(); 
    }
  }, []);

  const handlePicture = () => {
    setSelectPicture(true);
  };

  const chooseMode = (mode) => {
    setMode(mode);
  };

  const updateStates = () => {
    if (pictureRef.current) {
      const newPosition = pictureRef.current.position.clone();
      const newScale = pictureRef.current.scale.clone();

      
      if (!prevPosition.current.equals(newPosition)) {
        setPicturePosition(newPosition);
        prevPosition.current = newPosition.clone(); 
      }
      if (!prevScale.current.equals(newScale)) {
        setPictureScale(newScale);
        prevScale.current = newScale.clone(); 
      }

     
      localStorage.setItem('picturePosition', JSON.stringify([newPosition.x, newPosition.y, newPosition.z]));
      localStorage.setItem('pictureScale', JSON.stringify([newScale.x, newScale.y, newScale.z]));
    }
  };

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

      {/* picture */}
    
    { mode ? (
      <TransformControls mode={mode} ref={controlsRef} onChange={updateStates} >
         <mesh ref={pictureRef}
            position={picturePosition}
            rotation={[0, Math.PI / 2, 0]}
            scale={pictureScale}
            onClick={handlePicture}>
      <planeGeometry args={[5, 5]} />
      <meshStandardMaterial color={selectPicture ? "red" : "#fff"} />
    </mesh>
      </TransformControls>
    ) : (
      <mesh ref={pictureRef}
      rotation={[0, Math.PI / 2, 0]}
      position={picturePosition}
      scale={pictureScale}
      onClick={handlePicture}>
      <planeGeometry args={[5, 5]} />
      <meshStandardMaterial color={selectPicture ? "red" : "#fff"} />
    </mesh>
    )}
    
   
     
    {selectPicture && <Html>
         <div className='flex items-center gap-6 absolute -left-[12rem]'>
        
             <p className='flex items-center underline-offset-8 gap-4 text-xl text-white cursor-pointer duration-500 ease hover:underline hover:-translate-y-2' onClick={() => chooseMode("translate")}><Move /> Position</p>
             <p className='flex items-center underline-offset-8 gap-4 text-xl text-white cursor-pointer duration-500 ease hover:underline hover:-translate-y-2' onClick={() => chooseMode("rotate")}><RefreshCw /> Rotation</p>
             <p className='flex items-center underline-offset-8 gap-4 text-xl text-white cursor-pointer duration-500 ease hover:underline hover:-translate-y-2' onClick={() => chooseMode("scale")}><Scale3D /> Scale</p>

<span className='cursor-pointer' onClick={() => setSelectPicture(false)}>X</span>
             
         </div>
      </Html>}
     


    
 
    </>
  )
}


export default Experience