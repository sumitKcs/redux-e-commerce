'use client'
import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: Products[] = []


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action: PayloadAction<Products>) {
            state.push(action.payload)
        },
        remove(state, action: PayloadAction<number>) {
            return state.filter(item => item.id !== action.payload)
        }
    } ,
})


// Action creators are generated for each case reducer function
export const {add, remove} = cartSlice.actions
export default cartSlice.reducer
