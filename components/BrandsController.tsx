"use client";

import {
  useGetAllProductsQuery,
  useGetBrandBannersQuery,
} from "@/store/apiSlice";
import { useMemo } from "react";
import { ProductContainer } from ".";

const BrandsController = ({ brand }: { brand: string }) => {
  const { data: banners } = useGetBrandBannersQuery();
  const { data: allProducts } = useGetAllProductsQuery();

  brand = decodeURIComponent(brand);

  const products = useMemo(
    () =>
      allProducts?.filter(
        (product) => product.brand.toLowerCase() === brand.toLowerCase()
      ),
    [allProducts, brand]
  );
  const brandBanner = banners?.[brand.toUpperCase()];
  return (
    <ProductContainer
      bannerText={brand}
      bannerImages={brandBanner}
      products={products}
    />
  );
};

export default BrandsController;
