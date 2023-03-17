"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/payment");
  };
  return (
    <main className="w-screen flex justify-center items-center p-10">
      <form className="w-screen text-lg flex flex-col justify-center items-start">
        <label htmlFor="addressline1" className="mb-5">
          Address Line 1
        </label>
        <input
          type="text"
          name="addressline1"
          className="w-full md:w-[50%] h-10 focus:outline-transparent rounded-lg mb-5"
          required
        />
        <label htmlFor="addressline1" className="mb-5">
          Address Line 2
        </label>
        <input
          type="text"
          name="addressline1"
          className="w-full  md:w-[50%] h-10 focus:outline-transparent rounded-lg mb-5"
        />
        <label htmlFor="addressline1" className="mb-5">
          Address Line 3
        </label>
        <input
          type="text"
          name="addressline1"
          className="w-full  md:w-[50%] h-10 focus:outline-transparent rounded-lg"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-10 bg-blue-500 px-5 py-2 rounded-lg text-white"
        >
          Proceed to Payment
        </button>
      </form>
    </main>
  );
};

export default Checkout;
