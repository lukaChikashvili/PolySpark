import { createContext, useState } from "react";
import floor from '../assets/floorTextures/floor1.jpg'
import wallImg from '../assets/wallTextures/wall.png'


export const MeshContext = createContext();

const MeshProvider = ({children}) => {

    const [modal, setModal] = useState(false);
    const [selectedTexture, setSelectedTexture] = useState(floor);
    
    // wall texture
    const [wallTexture, setWallTexture] = useState(wallImg);


    // wall modal
    const [wall, setWall] = useState(false);

    const chooseTexture = (img) => {
      setSelectedTexture(img);
  

    }

    // change wall texture
    const changeWallTexture = (img) => {
      setWallTexture(img);
    }

    return (
        <MeshContext.Provider value = {{ modal, setModal, setSelectedTexture,
         selectedTexture, chooseTexture , wall, setWall, wallTexture, setWallTexture, changeWallTexture}}>
            {children}
        </MeshContext.Provider>
    )
}



export default MeshProvider