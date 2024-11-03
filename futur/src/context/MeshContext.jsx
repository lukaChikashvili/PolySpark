import { createContext, useState } from "react";



export const MeshContext = createContext();

const MeshProvider = ({children}) => {

    const [modal, setModal] = useState(false);

    return (
        <MeshContext.Provider value = {{ modal, setModal }}>
            {children}
        </MeshContext.Provider>
    )
}



export default MeshProvider