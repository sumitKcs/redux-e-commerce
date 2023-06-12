"use client";

import {
  useGetAllProductsQuery,
  useGetCategoryBannersQuery,
} from "@/store/apiSlice";
import { useMemo } from "react";
import { ProductContainer } from ".";

const CategoryController = ({ category }: { category: string }) => {
  const { data: banners } = useGetCategoryBannersQuery();
  const { data: allProducts } = useGetAllProductsQuery();

  const products = useMemo(
    () =>
      allProducts?.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      ),
    [allProducts]
  );

  category = decodeURIComponent(category);
  const categoryBanner = banners?.[category];

  return (
    <ProductContainer
      bannerText={category}
      bannerImages={categoryBanner}
      products={products}
    />
  );
};

export default CategoryController;