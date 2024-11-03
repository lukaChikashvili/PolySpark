import React, { useContext } from 'react'
import wall from '../assets/wallTextures/wall.png'
import wall2 from '../assets/wallTextures/wall2.png'
import wall3 from '../assets/wallTextures/wall3.png'
import wall4 from '../assets/wallTextures/wall4.png'
import wall5 from '../assets/wallTextures/wall5.png'
import wall6 from '../assets/wallTextures/wall6.png'
import { MeshContext } from '../context/MeshContext'

const WallTextures = () => {

    const { changeWallTexture } = useContext(MeshContext);

    const images = [
        {
            id: 1,
            img: wall,
            onClick: () => changeWallTexture(wall)
        },

        {
            id: 2,
            img: wall2,
            onClick: () => changeWallTexture(wall2)
        },

        {
            id: 3,
            img: wall3,
            onClick: () => changeWallTexture(wall3)
        },

        {
            id: 4,
            img: wall4,
            onClick: () => changeWallTexture(wall4)
        },

        {
            id: 5,
            img: wall5,
            onClick: () => changeWallTexture(wall5)
        },

        {
            id: 6,
            img: wall6,
            onClick: () => changeWallTexture(wall6)
        },
    ]
  return (
    <div className=' gap-8  grid grid-cols-3 p-4 place-items-center mt-[3rem] '>
        {images.map((value) => (
            <div className='' key={value.id}>
              <img src = {value.img} onClick={value.onClick} className='cursor-pointer w-[16rem] img' />
            </div>
        ))}
    </div>
  )
}

export default WallTextures
