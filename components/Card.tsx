"use client";

import { add } from "@/store/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { useSession } from "next-auth/react";
import { RootState } from "@/store/store";

type Props = {
  product: Product;
};

function Card({ product }: Props) {
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const cartItem = useSelector((state: RootState) => state.cart.cartItems);

  const handleAdd = async () => {
    dispatch(add(product));
    const item = JSON.parse(localStorage.getItem("cart")!);
    setIsAddedToCart(true);
  };
  const imageHandle = () => {
    setIsLoaded(true);
  };

  return (
    <div className="w-full h-[30rem] border border-gray-300 rounded-lg px-2 py-2 object-contain flex flex-col justify-between items-center gap-2 bg-white">
      <div
        className={`w-full h-full justify-center items-center ${
          isLoaded ? "flex" : "hidden"
        } `}
      >
        <img
          alt={product?.sku}
          width={150}
          height={150}
          decoding="async"
          onLoad={imageHandle}
          src={product?.images[0]}
        />
      </div>
      <div
        className={`w-full h-full flex justify-center items-center ${
          isLoaded ? "hidden" : "flex"
        } `}
      >
        <Loader width="w-[50px]" height="h-50px" />
      </div>

      <div className="w-full flex flex-col justify-center items-center text-center gap-2">
        <h4 className="text-xs">{product.sku}</h4>
        <h5>${product.price}</h5>

        <button
          className={`bg-blue-500  hover:bg-blue-700 ${
            isAddedToCart && "hidden"
          } text-white font-bold py-2 px-4 rounded`}
          onClick={handleAdd}
        >
          Add to Cart
        </button>
        <button
          className={`bg-green-700  ${
            !isAddedToCart && "hidden"
          } text-white font-bold py-2 px-4 rounded`}
          onClick={handleAdd}
        >
          Added
        </button>
      </div>
    </div>
  );
}

export default Card;
