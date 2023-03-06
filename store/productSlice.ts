'use client'

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import Products from "@/components/Products";

export enum STATUSES {
    IDLE = 'idle',
    ERROR ='error',
    LOADING = 'loading'
}

type Props = {
    data: Products[];
    status: string
}

const initialState: Props = {
    data: [],
    status: STATUSES.IDLE
}

export const fetchProducts = createAsyncThunk('products/getAll',async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();  
    return data;
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            const productsWithCartQuatity = action.payload.map((product: { cartQuantity: number; }) => {
                product.cartQuantity = 0
                return product
            })
            state.data = productsWithCartQuatity
            state.status = STATUSES.IDLE
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = STATUSES.ERROR
        })
    }
})


// Action creators are generated for each case reducer function
// export const {setProducts} = productSlice.actions
export default productSlice.reducer
