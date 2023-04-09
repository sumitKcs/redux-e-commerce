'use client'

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"


export enum STATUSES {
    IDLE = 'idle',
    ERROR ='error',
    LOADING = 'loading'
}

type Props = {
    data: Banner[];
    status: string
}

const initialState: Props = {
    data:[],
    status: STATUSES.IDLE
}

export const fetchProducts = createAsyncThunk('products/getAll',async () => {
    const response = await fetch('http://localhost:3000/api/banner')
    const data = await response.json()
    return data
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
            // const productsWithCartQuatity = action.payload.map((product: { cartQuantity: number; }) => {
            //     product.cartQuantity = 0
            //     return product
            // })
            // state.data = productsWithCartQuatity
            state.data = action.payload
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
