"use client";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { add, sub } from "@/store/cartSlice";

function cart() {
  const product = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log("product:", product);
  return (
    <section className="w-screen bg-[#f7f7f5] h-[100svh]">
      <div className="flex flex-col justify-center items-center w-[100svh] gap-5">
        {product.map((item, key) => {
          return (
            <div
              key={key}
              className="w-full p-2 h-auto border flex flex-col justify-center items-center md:grid grid-cols-5 border-gray-300 gap-5 bg-white rounded-lg "
            >
              <div className="py-2 px-2 flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex justify-start items-center text-center">
                {item.title}
              </div>
              <div className=" flex justify-start items-center">
                {item.price}
              </div>
              <div className=" flex justify-start items-center gap-2">
                <div className=" bg-blue-700 w-8 h-8 flex justify-center items-center">
                  <MinusIcon
                    onClick={() => dispatch(sub(item))}
                    className="w-5 h-5 text-white"
                  />
                </div>
                {item.cartQuantity}
                <div className="bg-blue-700 w-8 h-8 flex justify-center items-center">
                  <PlusIcon
                    onClick={() => dispatch(add(item))}
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div className="flex justify-center items-center absolute right-10 sm:relative sm:left-10">
                  <TrashIcon className="w-8 h-8 text-red-700" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default cart;
