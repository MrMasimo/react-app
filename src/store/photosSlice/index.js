import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
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
    }
})

export const { addPhotos, deletePhotoById} = photosSlice.actions
export default photosSlice.reducer