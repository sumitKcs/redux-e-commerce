"use client";

import { useGetProductGridQuery } from "@/store/apiSlice";
import Link from "next/link";
import React from "react";

const ProductGrid = () => {
  const { data: products } = useGetProductGridQuery();
  console.log("grid", products);
  return (
    <section className="container mx-auto mb-5 grid grid-cols-2 product-grid md:scale-y-[.80] md:scale-x-95 cursor-pointer gap-3 p-4 md:px-10 ">
      {/* cell 1  */}
      {products?.map((product) => (
        <Link
          href={`product/${product?.slug}`}
          className="relative w-full flex justify-center grid-item overflow-hidden rounded-2xl drop-shadow-xl transition-transform duration-200 ease-out"
          key={product.id}
        >
          <img
            className="w-full h-full rounded-2xl object-cover zoom-in"
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
            width="1500"
            height="1500"
            loading="lazy"
            sizes="(max-width: 699px) 100vw, min(780px, 50vw)"
          />
          <div className="absolute top-0  text-white  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
            <p className="mt-10 mx-10 flex justify-center items-center  text-center ">
              {product?.grid_text}
            </p>
          </div>
        </Link>
      ))}

      {/* cell 2 & 3 */}

      {/* <div className=" w-full item-2 flex  justify-center items-center gap-4 ">
       
        <div className="relative  drop-shadow-xl  transition-transform duration-200 ease-out overflow-hidden rounded-2xl">
          <img
            className="w-full h-full rounded-2xl object-cover zoom-in"
            src="//cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&amp;width=1500"
            alt=""
            srcSet="//cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&amp;width=200 200w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&amp;width=300 300w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&amp;width=400 400w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&amp;width=500 500w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&amp;width=600 600w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&amp;width=700 700w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&amp;width=800 800w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&amp;width=1000 1000w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&amp;width=1400 1400w"
            width="1500"
            height="1500"
            loading="lazy"
            sizes="(max-width: 699px) 100vw, min(390px, 25vw)"
          ></img>
          <div className="absolute top-0  text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
            <p className="mt-10 mx-10 flex justify-center items-center  text-center ">
              Final Ze3000
            </p>
          </div>
        </div>

    
        <div className="relative drop-shadow-xl transition-transform duration-200 ease-out overflow-hidden rounded-2xl">
          <img
            className="w-full h-full rounded-2xl object-cover zoom-in"
            src="//cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&amp;width=1500"
            alt=""
            srcSet="//cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&amp;width=200 200w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&amp;width=300 300w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&amp;width=400 400w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&amp;width=500 500w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&amp;width=600 600w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&amp;width=700 700w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&amp;width=800 800w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&amp;width=1000 1000w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&amp;width=1200 1200w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&amp;width=1400 1400w"
            width="1500"
            height="1500"
            loading="lazy"
            sizes="(max-width: 699px) 100vw, min(390px, 25vw)"
          ></img>
          <div className="absolute top-0 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
            <p className="mt-10 mx-10 flex justify-center items-center  text-center ">
              FiiO BRT5
            </p>
          </div>
        </div>
      </div> */}

      {/* cell 4  */}
      {/* <div className="flex justify-center item-3 overflow-hidden ">
        <div className="relative w-full drop-shadow-xl overflow-hidden transition-transform duration-200 ease-out rounded-2xl">
          <img
            className="w-full h-full rounded-2xl object-cover zoom-in"
            src="//cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Truthear-ZERO-Drop-Banner-01.jpg?v=1675945400&amp;width=1180"
            alt=""
            srcSet="//cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Truthear-ZERO-Drop-Banner-01.jpg?v=1675945400&amp;width=200 200w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Truthear-ZERO-Drop-Banner-01.jpg?v=1675945400&amp;width=300 300w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Truthear-ZERO-Drop-Banner-01.jpg?v=1675945400&amp;width=400 400w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Truthear-ZERO-Drop-Banner-01.jpg?v=1675945400&amp;width=500 500w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Truthear-ZERO-Drop-Banner-01.jpg?v=1675945400&amp;width=600 600w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Truthear-ZERO-Drop-Banner-01.jpg?v=1675945400&amp;width=700 700w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Truthear-ZERO-Drop-Banner-01.jpg?v=1675945400&amp;width=800 800w, 
            //cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Truthear-ZERO-Drop-Banner-01.jpg?v=1675945400&amp;width=1000 1000w"
            width="1180"
            height="700"
            loading="lazy"
            sizes="(max-width: 699px) 100vw, min(780px, 50vw)"
          />
          <div className=" absolute bottom-10 left-10 text-white  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  ">
            <p className="">Truthear Zero</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ProductGrid;
