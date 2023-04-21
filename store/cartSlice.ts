"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  cartItems: Product[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
} = {
  cartItems: localStorage?.getItem("cart")
    ? JSON.parse(localStorage?.getItem("cart")!)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Product>) {
      let itemIndex = -1;
      if (state.cartItems.length != 0) {
        itemIndex = state.cartItems.findIndex(
          (item) => item.slug === action.payload.slug
        );
      }
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // dec(state, action: PayloadAction<{ product: Product; quantity: number }>) {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.slug === action.payload.product.slug
    //   );
    //   if (state.cartItems[itemIndex].cartQuantity! > 1) {
    //     state.cartItems[itemIndex].cartQuantity! -= 1;
    //   }
    //   localStorage.setItem("cart", JSON.stringify(state.cartItems));
    // },
    qty(state, action: PayloadAction<{ product: Product; quantity: number }>) {
      let itemIndex = -1;

      itemIndex = state.cartItems.findIndex(
        (item) => item.slug === action.payload.product.slug
      );
      if (state.cartItems[itemIndex].cartQuantity! <= 0) {
        state.cartItems[itemIndex].cartQuantity! = 0;
      } else {
        state.cartItems[itemIndex].cartQuantity! = action.payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    remove(state, action: PayloadAction<Product>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeAll(state) {
      state.cartItems = [];
    },
    getTotal(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, item) => {
          const { price, cartQuantity } = item;
          const itemTotal = price * cartQuantity!;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity!;
          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );

      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, qty, remove, removeAll, getTotal } = cartSlice.actions;
export default cartSlice.reducer;
