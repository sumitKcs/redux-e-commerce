"use client";

import { ScrollCarousel, ProductCard } from "@/components";
import { useGetAllProductsQuery } from "@/store/apiSlice";

const FeaturedProducts = () => {
  const { data: products } = useGetAllProductsQuery();
  return (
    <div className="w-full relative">
      <ScrollCarousel>
        {!products
          ? Array(10)
              .fill(0)
              .map((item, idx) => <ProductCardSkeleton key={idx} />)
          : products.map((item: any) => (
              <ProductCard product={item} key={item.id} />
            ))}
      </ScrollCarousel>
    </div>
  );
};

export default FeaturedProducts;

const ProductCardSkeleton = () => {
  return (
    <div className="w-full flex flex-col justify-start p-5 animate-pulse">
      <div className="w-full  h-[250px] mb-2 bg-gray-200"></div>

      <div className="flex flex-col justify-start items-center gap-2 animate-pulse">
        <div className=" uppercase font-semibold text-sm tracking-widest bg-gray-200 w-[90%] h-8 "></div>
        <div className=" text-xs bg-gray-200 w-[60%] h-8"></div>

        {/* <div>
          <ul className="flex gap-1">
            <li
              className="cursor-pointer"
              data-tooltip="Balanced Sound Signature: A neutral sound that doesn't emphasise on one frequency. Genres: Everything if you're a purist!"
              title="Balanced Sound Signature: A neutral sound that doesn't emphasise on one frequency. Genres: Everything if you're a purist!"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  fill="#444"
                  d="M15 5.2h5V18h-5zM7.5 8.1h5V18h-5zM0 5.2h5V18H0z"
                ></path>
              </svg>
            </li>
            <li
              className="cursor-pointer"
              data-tooltip="Comes With Microphone &amp; Remote"
              title="Comes With Microphone &amp; Remote"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M13.6 6.6v2.6c0 2-1.7 3.6-3.7 3.5-1.9 0-3.4-1.6-3.5-3.5V3.8C6.4 2 7.9.5 9.7.4c1.9-.1 3.6 1.2 3.8 3 .1.7 0 1.3.1 2v1.2z"
                  fill="#444"
                ></path>
                <path
                  d="M10.7 18.5h2c.2 0 .4 0 .6.1.2 0 .3.2.3.4s-.1.3-.3.4c-.2.1-.4.1-.6.1H7.2c-.2 0-.4 0-.6-.1-.1-.1-.2-.2-.3-.4 0-.2.1-.3.3-.4.2-.1.4-.1.6-.1h1.9v-3.3c-.3-.1-.6-.1-.9-.2-2.5-.7-4.3-3-4.3-5.6v-1c0-.4.3-.8.7-.8.4 0 .8.3.8.7v.9c0 2.2 1.7 4.1 3.9 4.3 2.2.2 4.3-1.1 4.8-3.2.1-.5.1-1.1.1-1.7v-.5c.1-.4.4-.6.8-.6s.7.3.7.7c.4 3.1-1.6 6-4.7 6.7-.2 0-.4.1-.5.1.2 1.3.2 2.4.2 3.5z"
                  fill="#444"
                ></path>
              </svg>
            </li>
            <li
              className="cursor-pointer"
              data-tooltip="Built like tank to last you a long, long time"
              title="Built like tank to last you a long, long time"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M19.4 7.2H4.6v4.7h10c2.7 0 4.8-2.1 4.8-4.7zM3.5 10.9h.3V8H.6c0 1.6 1.3 2.9 2.9 2.9zM17.6 16v2.1h-4c0-1.5-1.3-2.8-2.8-2.8-1.5 0-2.8 1.2-2.8 2.8H4v-2c0-1.2 1.2-1.2 1.5-1.2.3 0 .6 0 1.1-.2.9-.4 1.1-1.3 1.1-1.9H14c0 1.5 1 2.1 2.3 2.1 1.3-.1 1.3 1.1 1.3 1.1zM13 2.3l-1.7 3c-.1.2-.3.2-.4.1l-1.5-.8c-.2-.1-.2-.3-.1-.4l1.4-2.6.7-.5c.2-.2.6-.2.8-.1l.5.3c.4.2.5.7.3 1zm3.2 3.5c-.2.3-.6.4-.9.2l-2.8-1.6.6-1.1 2.8 1.6c.3.2.4.6.3.9z"
                  fill="#444"
                ></path>
              </svg>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};
