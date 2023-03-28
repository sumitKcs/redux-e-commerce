"use client";
import { removeAll } from "@/store/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { showFireworks } from "@/lib/util";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  React.useEffect(() => {
    //clearing all cart items
    localStorage.clear();
    dispatch(removeAll());
    showFireworks();
    
  }, []);

  return (
    <div className="w-screen h-[calc(100%-20%)] flex justify-center items-center ">
      <div className=" flex flex-col justify-center items-center gap-5  p-14 rounded-xl bg-gray-200">
        <h2 className="text-xl font-bold text-green-700">
          Thanks for choosing Mzone
        </h2>
        <p className="text-3xl font-extrabold text-blue-900 ">
          Your order has been placed successfully!
        </p>
        <p className="text-4xl">🎉🎉🎉</p>
        <button
          onClick={() => router.push("/")}
          className="text-lg  bg-purple-400 px-10 py-2 rounded-xl text-white"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
