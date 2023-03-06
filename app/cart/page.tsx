"use client";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { add, sub } from "@/store/cartSlice";

function cart() {
  const product = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log("product:", product);
  return (
    <section className="w-screen bg-[#f7f7f5] h-screen">
      <div className="flex flex-col justify-center items-center w-full p-1 gap-5">
        {product.map((item, key) => {
          return (
            <div
              key={key}
              className="w-full border grid grid-cols-5 border-gray-300 gap-5 md:gap-5 bg-white rounded-lg"
            >
              <div className="py-2 px-2 flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex justify-start items-center ">
                {item.title}
              </div>
              <div className=" flex justify-start items-center">
                {item.price}
              </div>
              <div className=" flex justify-start items-center gap-2">
                <div className="bg-blue-700 w-8 h-8 flex justify-center items-center">
                  <MinusIcon
                    onClick={() => dispatch(sub(item))}
                    className="w-5 h-5 bg-blue-700 text-white p-0.2"
                  />
                </div>
                {item.cartQuantity}
                <div className="bg-blue-700 w-8 h-8 flex justify-center items-center">
                  <PlusIcon
                    onClick={() => dispatch(add(item))}
                    className="w-5 h-5   text-white"
                  />
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <button className="w-20 h-10 p-2 bg-red-700 font-bold text-white text-lg rounded-lg text-center">
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default cart;
