"use client";

import {
  useGetAllProductsQuery,
  useGetCategoryBannersQuery,
} from "@/store/apiSlice";
import { useMemo } from "react";
import ImageBanner from "../ImageBanner";

const headphones = () => {
  const { data: categoryBanner } = useGetCategoryBannersQuery();
  console.log("headphone banner: ", categoryBanner);
  const headphoneBanner = categoryBanner?.headphones;

  const { data: allProducts } = useGetAllProductsQuery();
  const headphones = useMemo(
    () =>
      allProducts?.filter(
        (product) => product.category.toLowerCase() === "headphones"
      ),
    [allProducts]
  );
  return (
    <>
      <ImageBanner
        desktopImage={headphoneBanner?.desktop}
        mobileImage={headphoneBanner?.mobile}
      />
    </>
  );
};

export default headphones;
