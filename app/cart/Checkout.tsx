import { RootState } from "@/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  if (cartItems?.length < 1) {
    return (
      <div
        className={`flex justify-center items-center text-black text-center text-lg `}
      >
        Your cart is empty.
      </div>
    );
  }
  return (
    <button
      className={`w-full sm:w-28 h-10 bg-blue-700 px-5 text-white sm:rounded-lg`}
    >
      Checkout
    </button>
  );
};

export default Checkout;
