"use client";

import { useGetProductGridQuery } from "@/store/apiSlice";
import Link from "next/link";
import React, { useState } from "react";

const ProductGrid = () => {
  const { data: products } = useGetProductGridQuery();
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <section className="container h-[90svh]  mx-auto mb-5 grid grid-cols-2 product-grid md:scale-y-[.80] md:scale-x-95 cursor-pointer gap-3 p-4 md:px-10 ">
      {products
        ? products?.map((product) => (
            <Link
              href={`product/${product?.slug}`}
              className="relative w-full flex justify-center grid-item overflow-hidden rounded-2xl drop-shadow-xl transition-transform duration-200 ease-out"
              key={product.id}
            >
              <div className="w-full h-full background ">
                <img
                  className={`${
                    !isLoaded ? "hidden" : "block animate"
                  } w-full h-full rounded-2xl object-cover zoom-in`}
                  src={`${product?.grid_image}width=1500`}
                  alt=""
                  srcSet={`
            ${product?.grid_image}width=1500,
            ${product?.grid_image}width=200 200w,
            ${product?.grid_image}width=300 300w
            ${product?.grid_image}width=400 400w
            ${product?.grid_image}width=500 500w
            ${product?.grid_image}width=600 600w
            ${product?.grid_image}width=700 700w
            ${product?.grid_image}width=800 800w
            ${product?.grid_image}width=1000 1000w
            ${product?.grid_image}width=1200 1200w
            ${product?.grid_image}width=1400 1400w
            `}
                  loading="lazy"
                  sizes="(max-width: 699px) 100vw, min(780px, 50vw)"
                  onLoad={() => setIsLoaded(true)}
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
            .map((item) => (
              <div className=" w-full grid-item rounded-2xl drop-shadow-xl background"></div>
            ))}
    </section>
  );
};

export default ProductGrid;
