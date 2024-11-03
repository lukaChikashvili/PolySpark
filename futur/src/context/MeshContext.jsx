import { createContext, useState } from "react";
import floor from '../assets/floor1.jpg'



export const MeshContext = createContext();

const MeshProvider = ({children}) => {

    const [modal, setModal] = useState(false);
    const [selectedTexture, setSelectedTexture] = useState(floor);

    const chooseTexture = (img) => {
      setSelectedTexture(img);
  
      
    }

    return (
        <MeshContext.Provider value = {{ modal, setModal, setSelectedTexture, selectedTexture, chooseTexture }}>
            {children}
        </MeshContext.Provider>
    )
}



export default MeshProvider