"use client";

import {
  useGetAllProductsQuery,
  useGetCategoryBannersQuery,
} from "@/store/apiSlice";
import { useMemo } from "react";

const headphones = () => {
  const { data: categoryBanner } = useGetCategoryBannersQuery();
  console.log("headphone banner: ", categoryBanner.headphones);
  const headphoneBanner = categoryBanner.headphones;

  const { data: allProducts } = useGetAllProductsQuery();
  const headphones = useMemo(
    () =>
      allProducts?.filter(
        (product) => product.category.toLowerCase() === "headphones"
      ),
    [allProducts]
  );
  return (
    <div className="w-screen h-full">
      {/* desktop image */}
      <img
        className="w-full object-cover h-full lg:h-auto hidden md:block ease-in duration-700"
        src={`${headphoneBanner?.desktop}&width=3200`}
        alt={"heaphone banner"}
        srcSet={`
                ${headphoneBanner?.desktop}&width=200 200w,
                ${headphoneBanner?.desktop}&width=300 300w,
                ${headphoneBanner?.desktop}&width=400 400w,
                ${headphoneBanner?.desktop}&width=500 500w,
                ${headphoneBanner?.desktop}&width=600 600w,
                ${headphoneBanner?.desktop}&width=700 700w,
                ${headphoneBanner?.desktop}&width=800 800w,
                ${headphoneBanner?.desktop}&width=900 900w,
                ${headphoneBanner?.desktop}&width=1000 1000w,
                ${headphoneBanner?.desktop}&width=1200 1200w,
                ${headphoneBanner?.desktop}&width=1400 1400w,
                ${headphoneBanner?.desktop}&width=1600 1600w,
                ${headphoneBanner?.desktop}&width=1800 1800w,
                ${headphoneBanner?.desktop}&width=2000 2000w,
                
                `}
        width="2160"
        height="1080"
        loading="eager"
        sizes="100vw"
      ></img>

      {/* mobile image  */}
      <img
        className="w-full object-cover h-full lg:h-auto md:hidden ease-in duration-700"
        src={`${headphoneBanner?.mobile}&width=1300`}
        alt={"headphone banner"}
        srcSet={`
                ${headphoneBanner?.mobile}&width=200 200w,
                ${headphoneBanner?.mobile}&width=300 300w,
                ${headphoneBanner?.mobile}&width=400 400w,
                ${headphoneBanner?.mobile}&width=500 500w,
                ${headphoneBanner?.mobile}&width=600 600w,
                ${headphoneBanner?.mobile}&width=700 700w,
                ${headphoneBanner?.mobile}&width=800 800w,
                ${headphoneBanner?.mobile}&width=900 900w,
                ${headphoneBanner?.mobile}&width=1000 1000w,
                ${headphoneBanner?.mobile}&width=1200 1200w,
                
                `}
        width="1200"
        height="1600"
        loading="eager"
        sizes="100vw"
      ></img>
    </div>
  );
};

export default headphones;
