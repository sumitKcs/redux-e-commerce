"use client";

import {
  useGetAllProductsQuery,
  useGetCategoryBannersQuery,
} from "@/store/apiSlice";
import { useMemo } from "react";
import { ProductContainer } from ".";

enum PRICES {
  UNDER_ONE_THOUSAND = "best under rs. 1,000",
  UNDER_TWO_THOUSANDS = "best under rs. 2,000",
  UNDER_TEN_THOUSANDS = "best under rs. 10,000",
  UNDER_TWENTY_THOUSANDS = "best under rs. 20,000",
  UNDER_FOURTY_THOUSANDS = "best under rs. 40,000",
}

const PricesController = ({ category }: { category: string }) => {
  const { data: categoryBanner } = useGetCategoryBannersQuery();
  const { data: allProducts } = useGetAllProductsQuery();

  const price = decodeURIComponent(category);

  switch (price) {
    case PRICES.UNDER_ONE_THOUSAND: {
      const banner = categoryBanner?.headphones;
      const products = useMemo(
        () => allProducts?.filter((product) => product.dropped_price <= 1000),
        [allProducts]
      );
      return (
        <ProductContainer
          bannerText={price}
          bannerImages={banner}
          products={products}
        />
      );
    }
    case PRICES.UNDER_TWO_THOUSANDS: {
      const banner = categoryBanner?.headphones;
      const products = useMemo(
        () => allProducts?.filter((product) => product.dropped_price <= 2000),
        [allProducts]
      );
      return (
        <ProductContainer
          bannerText={price}
          bannerImages={banner}
          products={products}
        />
      );
    }
    case PRICES.UNDER_TEN_THOUSANDS: {
      const banner = categoryBanner?.headphones;
      const products = useMemo(
        () => allProducts?.filter((product) => product.dropped_price <= 10000),
        [allProducts]
      );
      return (
        <ProductContainer
          bannerText={price}
          bannerImages={banner}
          products={products}
        />
      );
    }
    case PRICES.UNDER_TWENTY_THOUSANDS: {
      const banner = categoryBanner?.headphones;
      const products = useMemo(
        () => allProducts?.filter((product) => product.dropped_price <= 20000),
        [allProducts]
      );
      return (
        <ProductContainer
          bannerText={price}
          bannerImages={banner}
          products={products}
        />
      );
    }
    case PRICES.UNDER_FOURTY_THOUSANDS: {
      const banner = categoryBanner?.headphones;
      const products = useMemo(
        () => allProducts?.filter((product) => product.dropped_price <= 40000),
        [allProducts]
      );
      return (
        <ProductContainer
          bannerText={price}
          bannerImages={banner}
          products={products}
        />
      );
    }

    default:
      return <div>{decodeURIComponent(category)}</div>;
  }
};

export default PricesController;
