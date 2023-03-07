'use client'

import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: {cartItems: Products[], cartTotalQuantity: number, cartTotalAmount: number } = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,


}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action: PayloadAction<Products>) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            }else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
            }
           
        },
        sub(state, action: PayloadAction<Products>) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if(state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
            }
        },
        remove(state, action: PayloadAction<Products>) {
             state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        }
        // remove(state, action: PayloadAction<number>) {
        //     return state.cartItems.filter(item => item.id !== action.payload)
        // }
    } ,
})


// Action creators are generated for each case reducer function
export const {add, sub, remove} = cartSlice.actions
export default cartSlice.reducer
