"use client";

import { CURRENCY } from "@/lib/currency";
import getPriceFormat from "@/lib/getPriceFormat";
import Link from "next/link";
import { RatingStar } from "rating-star";

const ProductView = ({ products }: { products: Product[] | undefined }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-screen p-10">
      {products &&
        products.map((product) => {
          const PRICE = getPriceFormat(product.dropped_price, CURRENCY.INR);
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="flex flex-col justify-center items-center w-full text-center bg-white p-4"
            >
              <div>
                <img
                  src={`https:${product?.images[0]}&width=1160`}
                  alt={"heaphone banner"}
                  srcSet={`
              https:${product?.images[0]}&width=200 200w,
              https:${product?.images[0]}&width=300 300w,
              https:${product?.images[0]}&width=400 400w,
              https:${product?.images[0]}&width=500 500w,
              https:${product?.images[0]}&width=600 600w,
              https:${product?.images[0]}&width=700 700w,
              https:${product?.images[0]}&width=800 800w,
              https:${product?.images[0]}&width=900 900w,
              https:${product?.images[0]}&width=1000 1000w,
              https:${product?.images[0]}&width=1200 1200w,
              https:${product?.images[0]}&width=1400 1400w,
              https:${product?.images[0]}&width=1600 1600w,
              https:${product?.images[0]}&width=1800 1800w,
              https:${product?.images[0]}&width=2000 2000w,
              
              `}
                  width="1160"
                  height="1160"
                  loading="lazy"
                  sizes="(max-width: 699px) calc(100vw / 2 - 40px), (max-width: 1200px) calc(100vw / 3 - 64px), calc(min(100vw - 96px, 1440px) / 4 - (24px / 4 * 3))"
                />
              </div>
              <div className="font-bold text-black opacity-90">
                {product.sku}
              </div>
              <div className="text-xs">{product.type}</div>
              <div className="text-blue-700 font-bold">{PRICE}</div>
              <div>
                <RatingStar
                  id={`${product.id}`}
                  size={18}
                  rating={Number(product.stars)}
                />
                <span>{product.stars}</span>
                <span>({product.total_ratings})</span>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default ProductView;
