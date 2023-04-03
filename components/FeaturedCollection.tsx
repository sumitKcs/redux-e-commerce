import Link from "next/link";
import React from "react";
import { ProductCard } from ".";
import NewProductList from "./ProductCard";

const FeaturedCollection = () => {
  return (
    <>
      <div className="w-[90%] container mx-auto  mt-10">
        <div className="lg:max-w-[55%]">
          <span className="text-gradient text-3xl md:text-5xl font-extrabold tracking-wider ">
            Hot New Launches, Fresh off the Boat
          </span>
        </div>
        <div className="group flex justify-start lg:justify-end items-center gap-5 py-5">
          <Link href="/view-all" className=" group-hover:underline">
            <span className="text-sm">View all</span>
          </Link>
          <span>
            <svg
              role="presentation"
              focusable="false"
              width="5"
              height="8"
              className="group-hover:bg-black group-hover:text-white text-black w-6 h-6 rounded-full bg-gray-200 p-2 "
              viewBox="0 0 5 8"
            >
              <path
                d="m.75 7 3-3-3-3"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <ProductCard />
    </>
  );
};

export default FeaturedCollection;
