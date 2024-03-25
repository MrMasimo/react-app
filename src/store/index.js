import { configureStore } from "@reduxjs/toolkit";
import photosReducer from './photosSlice/index'

export const store = configureStore({
    reducer: {
        photos: photosReducer,
    },
    devTools: true,
})