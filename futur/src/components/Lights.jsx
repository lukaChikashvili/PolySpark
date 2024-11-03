import React from 'react'

const Lights = () => {
  return (
  <>
     <directionalLight
    castShadow
    position={ [ 4, 4, 1 ] }
    intensity={ 1.5 }
    shadow-mapSize={ [ 1024, 1024 ] }
    shadow-camera-near={ 1 }
    shadow-camera-far={ 10 }
    shadow-camera-top={ 10 }
    shadow-camera-right={ 10 }
    shadow-camera-bottom={ - 10 }
    shadow-camera-left={ - 10 }
/>

<ambientLight intensity={3} />

<pointLight
        position={[0, 2, 5]}
        intensity={15}
        distance={30}
        decay={1}
        color={'purple'}
        castShadow
      />
  </>
  )
}

export default Lights
