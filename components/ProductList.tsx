"use client";

import {
  useGetAllProductsQuery,
  useGetCategoryBannersQuery,
} from "@/store/apiSlice";
import { useMemo } from "react";
import { Headphones } from ".";

const Products = ({ category }: { category: string }) => {
  const { data: categoryBanner } = useGetCategoryBannersQuery();
  const { data: allProducts } = useGetAllProductsQuery();

  category = decodeURIComponent(category);

  switch (category) {
    case "headphones": {
      const headphonesBanner = categoryBanner?.headphones;
      const headphones = useMemo(
        () =>
          allProducts?.filter(
            (product) => product.category.toLowerCase() === "headphones"
          ),
        [allProducts]
      );
      return (
        <Headphones
          category={category}
          bannerImages={headphonesBanner}
          products={headphones}
        />
      );
    }
    case "in-ears": {
      const inEarsBanner = categoryBanner?.inEars;
      const inEars = useMemo(
        () =>
          allProducts?.filter(
            (product) => product.category.toLowerCase() === "in-ears"
          ),
        [allProducts]
      );
      return (
        <Headphones
          category={category}
          bannerImages={inEarsBanner}
          products={inEars}
        />
      );
    }
    case "wireless": {
      const wirelessBanner = categoryBanner?.wireless;
      const wireless = useMemo(
        () =>
          allProducts?.filter(
            (product) => product.category.toLowerCase() === "wireless"
          ),
        [allProducts]
      );
      return (
        <Headphones
          category={category}
          bannerImages={wirelessBanner}
          products={wireless}
        />
      );
    }
    case "dacs & amps": {
      const dacsAndAmpsBanner = categoryBanner?.dacsAndAmps;
      const dacsAndAmps = useMemo(
        () =>
          allProducts?.filter(
            (product) => product.category.toLowerCase() === "dacs & amps"
          ),
        [allProducts]
      );
      return (
        <Headphones
          category={category}
          bannerImages={dacsAndAmpsBanner}
          products={dacsAndAmps}
        />
      );
    }
    case "hi-res audio players": {
      const hiResAudioPlayersBanner = categoryBanner?.hiResAudioPlayers;
      const hiResAudioPlayers = useMemo(
        () =>
          allProducts?.filter(
            (product) =>
              product.category.toLowerCase() === "hi-res audio players"
          ),
        [allProducts]
      );
      return (
        <Headphones
          category={category}
          bannerImages={hiResAudioPlayersBanner}
          products={hiResAudioPlayers}
        />
      );
    }
    case "accessories": {
      const accessoriesBanner = categoryBanner?.accessories;
      const accessories = useMemo(
        () =>
          allProducts?.filter(
            (product) => product.category.toLowerCase() === "accessories"
          ),
        [allProducts]
      );
      return (
        <Headphones
          category={category}
          bannerImages={accessoriesBanner}
          products={accessories}
        />
      );
    }
    case "home audio": {
      const homeAudioBanner = categoryBanner?.homeAudio;
      const homeAudio = useMemo(
        () =>
          allProducts?.filter(
            (product) => product.category.toLowerCase() === "home audio"
          ),
        [allProducts]
      );
      return (
        <Headphones
          category={category}
          bannerImages={homeAudioBanner}
          products={homeAudio}
        />
      );
    }
    default:
      return null;
  }
};

export default Products;
