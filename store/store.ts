'use client'

import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import cartReducer from './cartSlice'
import productReducer from './productSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  })

  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch

