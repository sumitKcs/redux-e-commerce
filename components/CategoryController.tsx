"use client";

import {
  useGetAllProductsQuery,
  useGetCategoryBannersQuery,
} from "@/store/apiSlice";
import { useMemo } from "react";
import dynamic from "next/dynamic";
const ProductContainer = dynamic(() => import("./ProductContainer"));

const CategoryController = ({ category }: { category: string }) => {
  const { data: banners } = useGetCategoryBannersQuery();
  const { data: allProducts } = useGetAllProductsQuery();
  category = decodeURIComponent(category);

  const products = useMemo(
    () =>
      allProducts?.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      ),
    [allProducts]
  );

  const categoryBanner = useMemo(
    () =>
      banners?.filter(
        (banner: any) =>
          banner.category.toLowerCase() === category.toLowerCase()
      ),
    [banners]
  );

  console.log("banner data", categoryBanner);

  return (
    <ProductContainer
      bannerText={category}
      bannerImages={categoryBanner?.[0]?.images}
      products={products}
    />
  );
};

export default CategoryController;
