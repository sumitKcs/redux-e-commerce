"use client";
import Image from "next/image";
import getPriceFormat from "@/lib/getPriceFormat";
import { CURRENCY } from "@/lib/currency";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

const SearchItemBox = ({
  product,
  setIsVisible,
}: {
  product: Product;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const price = getPriceFormat(product.price, CURRENCY.INR);
  const router = useRouter();
  const productClickHandler = () => {
    setIsVisible(false);
    router.push(`/product/${product.slug}`);
  };
  return (
    <div onClick={productClickHandler}>
      <div className="flex justify-start gap-10  items-center group">
        <div>
          <Image
            src={`https:${product.images[0]}`}
            alt={product.sku}
            width={100}
            height={100}
          />
        </div>
        <div className="mr-10">
          <div className="font-bold group-hover:border-b-2 border-black">
            {product.sku}
          </div>
          <div className="text-blue-700 font-bold">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchItemBox;
