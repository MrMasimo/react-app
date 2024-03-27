import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    isLoading: false
}

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        addPhotos: (state, action) => {
            state.list = action.payload;
        },
        deletePhotoById: (state, action) => {
            const {id} = action.payload
            state.list = state.list.filter(photo => photo.id !== id)
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
    }
})

export const { addPhotos, deletePhotoById, setIsLoading} = photosSlice.actions
export default photosSlice.reducer