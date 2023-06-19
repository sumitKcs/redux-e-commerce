"use client";

import {
  useGetAllProductsQuery,
  useGetPriceBannersQuery,
} from "@/store/apiSlice";
import { useMemo } from "react";
import dynamic from "next/dynamic";
const ProductContainer = dynamic(() => import("./ProductContainer"));

enum PRICES {
  UNDER_THREE_THOUSANDS = "best under rs. 3,000",
  UNDER_FIVE_THOUSANDS = "best under rs. 5,000",
  UNDER_TEN_THOUSANDS = "best under rs. 10,000",
  UNDER_TWENTY_THOUSANDS = "best under rs. 20,000",
  UNDER_FOURTY_THOUSANDS = "best under rs. 40,000",
}

const PricesController = ({ price }: { price: string }) => {
  const { data: banners } = useGetPriceBannersQuery();
  const { data: allProducts } = useGetAllProductsQuery();
  price = decodeURIComponent(price);
  let priceBanner = useMemo(
    () =>
      banners?.filter(
        (banner: any) => banner.price.toLowerCase() === price.toLowerCase()
      ),
    [banners]
  );
  priceBanner = priceBanner?.[0]?.images;
  let products;

  switch (price.toLowerCase()) {
    case PRICES.UNDER_THREE_THOUSANDS: {
      products = useMemo(
        () => allProducts?.filter((product) => product.dropped_price <= 3000),
        [allProducts, price]
      );
      return (
        <ProductContainer
          bannerText={price}
          bannerImages={priceBanner}
          products={products}
        />
      );
    }
    case PRICES.UNDER_FIVE_THOUSANDS: {
      products = useMemo(
        () => allProducts?.filter((product) => product.dropped_price <= 5000),
        [allProducts, price]
      );
      return (
        <ProductContainer
          bannerText={price}
          bannerImages={priceBanner}
          products={products}
        />
      );
    }
    case PRICES.UNDER_TEN_THOUSANDS: {
      products = useMemo(
        () => allProducts?.filter((product) => product.dropped_price <= 10000),
        [allProducts, price]
      );
      return (
        <ProductContainer
          bannerText={price}
          bannerImages={priceBanner}
          products={products}
        />
      );
    }
    case PRICES.UNDER_TWENTY_THOUSANDS: {
      products = useMemo(
        () => allProducts?.filter((product) => product.dropped_price <= 20000),
        [allProducts, price]
      );
      return (
        <ProductContainer
          bannerText={price}
          bannerImages={priceBanner}
          products={products}
        />
      );
    }
    case PRICES.UNDER_FOURTY_THOUSANDS: {
      products = useMemo(
        () => allProducts?.filter((product) => product.dropped_price <= 40000),
        [allProducts, price]
      );
      return (
        <ProductContainer
          bannerText={price}
          bannerImages={priceBanner}
          products={products}
        />
      );
    }
  }
  return (
    <ProductContainer
      bannerText={price}
      bannerImages={priceBanner}
      products={products}
    />
  );
};

export default PricesController;
