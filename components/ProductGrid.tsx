"use client";

import { useGetProductGridQuery } from "@/store/apiSlice";
import Link from "next/link";

const ProductGrid = () => {
  const { data: products } = useGetProductGridQuery();
  console.log("product grid", products);
  return (
    <section className="container h-[90svh]  mx-auto mb-5 grid grid-cols-2 product-grid md:scale-y-[.80] md:scale-x-95 cursor-pointer gap-3 p-4 md:px-10 ">
      {products
        ? products?.map((product: any) => (
            <Link
              href={`product/${product?.slug}`}
              className="relative w-full flex justify-center grid-item overflow-hidden rounded-2xl drop-shadow-xl transition-transform duration-200 ease-out"
              key={product?.slug}
            >
              <div className="w-full h-full background ">
                <img
                  className={`animate w-full h-full rounded-2xl object-cover zoom-in`}
                  src={`https:${product?.grid_image}width=1500`}
                  alt=""
                  srcSet={`
            https:${product?.grid_image}width=200 200w,
            https:${product?.grid_image}width=300 300w
            https:${product?.grid_image}width=400 400w
            https:${product?.grid_image}width=500 500w
            https:${product?.grid_image}width=600 600w
            https:${product?.grid_image}width=700 700w
            https:${product?.grid_image}width=800 800w
            https:${product?.grid_image}width=1000 1000w
            https:${product?.grid_image}width=1200 1200w
            https:${product?.grid_image}width=1400 1400w
            `}
                  loading="lazy"
                  sizes="(max-width: 699px) 100vw, min(780px, 50vw)"
                />
              </div>
              <div className="absolute top-0  text-white  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
                <p className="mt-10 mx-10 flex justify-center items-center  text-center ">
                  {product?.grid_text}
                </p>
              </div>
            </Link>
          ))
        : Array(4)
            .fill(0)
            .map((item, idx) => (
              <div
                key={idx}
                className=" w-full grid-item rounded-2xl drop-shadow-xl background"
              ></div>
            ))}
    </section>
  );
};

export default ProductGrid;
