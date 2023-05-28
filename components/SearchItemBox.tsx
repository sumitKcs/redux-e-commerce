import React from "react";
import Link from "next/link";
import Image from "next/image";
import getPriceFormat from "@/lib/getPriceFormat";
import { CURRENCY } from "@/lib/currency";

const SearchItemBox = ({ product }: { product: Product }) => {
  const price = getPriceFormat(product.price, CURRENCY.INR);
  return (
    <Link href={`/product/${product.slug}`}>
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
    </Link>
  );
};

export default SearchItemBox;
