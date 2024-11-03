import React, { useContext } from 'react'
import floor from '../assets/floorTextures/floor1.jpg'
import floor2 from '../assets/floorTextures/floor2.png'
import floor3 from '../assets/floorTextures/floor3.png'
import floor4 from '../assets/floorTextures/floor4.png'
import floor5 from '../assets/floorTextures/floor5.png'
import floor6 from '../assets/floorTextures/floor6.png'
import { useTexture } from '@react-three/drei'
import { MeshContext } from '../context/MeshContext'

const FloorTextures = () => {
    const { chooseTexture } = useContext(MeshContext);

    const images = [
        {
            id: 1,
            img: floor,
            onClick: () => chooseTexture(floor)
        },


        {
            id: 2,
            img: floor2,
            onClick: () => chooseTexture(floor2)
        },

        {
            id: 3,
            img: floor3,
            onClick: () => chooseTexture(floor3)
        },


        {
            id: 4,
            img: floor4,
            onClick: () => chooseTexture(floor4)
        },

        {
            id: 5,
            img: floor5,
            onClick: () => chooseTexture(floor5)
        },


        {
            id: 6,
            img: floor6,
            onClick: () => chooseTexture(floor6)
        },


        

    ]
  return (
    <div className=' gap-8  grid grid-cols-3 p-4 place-items-center mt-[3rem] '>
        {images.map((value) => (
            <div className=''>
              <img src = {value.img} onClick={value.onClick} className='cursor-pointer w-[16rem]' />
            </div>
        ))}
    </div>
  )
}

export default FloorTextures
