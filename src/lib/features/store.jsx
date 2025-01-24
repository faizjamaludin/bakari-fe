import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/categorySlice'
import { posApi } from './api/posApi'

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        [posApi.reducerPath]: posApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(posApi.middleware)
})