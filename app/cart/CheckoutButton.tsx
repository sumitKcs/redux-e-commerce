import { getTotal } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckoutButton = () => {
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, []);

  /**stripe checkout code start */

  const handlePayment = async () => {
    const stripe = await stripePromise;
    const response = await fetch("api/stripe", {
      method: "POST",
      body: JSON.stringify(cartItems),
    });

    if (!response) return;

    const { sessionId } = await response.json();
    console.log("checkout response: " + sessionId);
    const result = await stripe?.redirectToCheckout({ sessionId });
    if (result?.error) alert(result.error.message);
  };

  /**stripe checkout code end*/
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
    <div className="w-full flex h-10 justify-evenly items-center gap-5 py-10">
      <div>Total Items: {cartTotalQuantity}</div>
      <div>Total Price: ${cartTotalAmount.toFixed(2)}</div>

      <button
        role="link"
        onClick={handlePayment}
        className={`sm:w-28 h-10 bg-blue-500 text-bold px-5 text-white `}
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutButton;
