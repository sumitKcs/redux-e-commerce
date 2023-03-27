import getStripe from "@/lib/getStripe";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const Payment = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  React.useEffect(() => {
    async function stripe() {
      const stripe = await getStripe();
      const response = await fetch("api/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItems),
      });

      if (response.status === 500) return;

      const data = await response.json();
      stripe.redirectToCheckout({ sessionId: data.id });
    }
    stripe();
  }, []);
  return <main>Payment</main>;
};

export default Payment;
