import {createContext, useContext, useState} from "react";

const context = createContext({})

export const usePhotosContext = () => useContext(context)

export const PhotosProvider = ({children}) => {
    const [photos, setPhotos] = useState([])

    return <context.Provider value={{photos, setPhotos}}>{children}</context.Provider>
}