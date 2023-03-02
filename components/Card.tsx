"use client";

import { add } from "@/store/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

type Props = {
  product: Products;
};

function Card({ product }: Props) {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add(product));
  };

  return (
    <div className="w-full h-[30rem] border border-gray-300 rounded-lg px-2 py-2 object-contain flex flex-col justify-between items-center gap-2 bg-white">
      <div className="w-full h-full flex justify-center items-center">
        <Image
          key={product.id}
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center text-center gap-2">
        <h4 className="text-xs">{product.title}</h4>
        <h5>${product.price}</h5>
        <button
          onClick={() => handleAdd()}
          className="w-full h-10 bg-[#a0a832] py-2 rounded-lg"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
