"use client";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
// import { add, remove, sub } from "@/store/cartSlice";
import CheckoutButton from "../../../components/CheckoutButton";

function cart() {
  const product = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <section className="w-full bg-[#f7f7f5] flex flex-col justify-start mb-40">
      {/* <div className="flex flex-col justify-center items-center w-screen gap-5 mt-5">
        {product.map((item, key) => {
          return (
            <div
              key={key}
              className="w-full sm:w-[90%] p-2 h-auto border flex flex-col justify-center items-center md:grid grid-cols-5 border-gray-300 gap-5 bg-white rounded-lg "
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
              <div className=" flex justify-center items-center">
                {item.price * item.cartQuantity}
              </div>
              <div className=" flex justify-start items-center gap-2">
                <div className=" bg-blue-500 w-8 h-8 flex justify-center items-center">
                  <MinusIcon
                    onClick={() => dispatch(sub(item))}
                    className="w-5 h-5 text-white"
                  />
                </div>
                {item.cartQuantity}
                <div className="bg-blue-500 w-8 h-8 flex justify-center items-center">
                  <PlusIcon
                    onClick={() => dispatch(add(item))}
                    className="w-5 h-5 text-white"
                  />
                </div>
                <div className="flex justify-center items-center absolute right-10 sm:relative sm:left-10">
                  <TrashIcon
                    onClick={() => dispatch(remove(item))}
                    className="w-8 h-8 text-red-700"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      <div className="w-full fixed bottom-0 left-0 bg-white">
        <CheckoutButton />
      </div>
    </section>
  );
}

export default cart;
