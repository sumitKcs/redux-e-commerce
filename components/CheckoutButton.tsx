"use client";

import { getTotal, removeAll } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import axios from "axios";
import updateCartDataToFirestore from "@/lib/updateCartDataToFirestore";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckoutButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    dispatch(getTotal());
  }, []);

  /**stripe checkout code start */

  const handlePayment = async () => {
    if (!session) return router.push("/login");

    const stripe = await stripePromise;
    const { data: sessionId } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/stripe`,
      {
        cartItems,
        email: session?.user?.email,
      }
    );

    if (!sessionId) return;

    // // const { sessionId } = await response.json();
    console.log("checkout response: " + sessionId);
    const result = await stripe?.redirectToCheckout({ sessionId });
    if (result?.error) alert(result.error.message);
    updateCartDataToFirestore([], session?.user?.email!);
    localStorage.removeItem("cart");
    dispatch(removeAll());
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
