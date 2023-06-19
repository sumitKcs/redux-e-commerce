"use client";

import {
  useGetAllProductsQuery,
  useGetBrandBannersQuery,
} from "@/store/apiSlice";
import dynamic from "next/dynamic";
import { useMemo } from "react";
const ProductContainer = dynamic(() => import("./ProductContainer"));

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
  const brandBanner = useMemo(
    () =>
      banners?.filter(
        (banner: any) => banner.brand.toLowerCase() === brand.toLowerCase()
      ),
    [banners]
  );
  return (
    <ProductContainer
      bannerText={brand}
      bannerImages={brandBanner?.[0]?.images}
      products={products}
    />
  );
};

export default BrandsController;
