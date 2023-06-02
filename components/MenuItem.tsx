"use client";

import {
  useGetCategoriesQuery,
  useGetBrandsQuery,
  useGetPricesQuery,
} from "@/store/apiSlice";
import { useState } from "react";

const MenuItem = ({ item }: { item: string }) => {
  const { data: categories } = useGetCategoriesQuery();
  const { data: brands } = useGetBrandsQuery();
  const { data: prices } = useGetPricesQuery();
  const [isCategories, setIsCategories] = useState(false);
  const [isBrands, setIsBrands] = useState(false);
  const [isPrices, setIsPrices] = useState(false);

  document.body.addEventListener("click", () => {
    setIsCategories(false);
    setIsBrands(false);
    setIsPrices(false);
  });

  switch (item) {
    case "Categories": {
      return (
        <div className="relative flex flex-col justify-center items-center hover:opacity-60 hover:cursor-pointer font-semibold z-50">
          <div role="listitem" onClick={() => setIsCategories(!isCategories)}>
            {" "}
            {item}
          </div>
          {isCategories && (
            <div className="absolute top-5 flex flex-col gap-2 bg-gray-200 border border-gray-500 p-2 opacity-80">
              {categories &&
                categories.map((category) => <div>{category}</div>)}
            </div>
          )}
        </div>
      );
    }
    case "Brands": {
      return (
        <div className="relative flex flex-col justify-center items-center hover:opacity-60 hover:cursor-pointer font-semibold">
          <div role="listitem" onClick={() => setIsBrands(!isBrands)}>
            {" "}
            {item}
          </div>
          {isBrands && (
            <div className="absolute top-5 flex flex-col gap-2 bg-gray-200 border border-gray-500 p-2 opacity-80">
              {brands && brands.map((brand) => <div>{brand}</div>)}
            </div>
          )}
        </div>
      );
    }
    case "Prices": {
      return (
        <div className="relative flex flex-col justify-center items-center hover:opacity-60 hover:cursor-pointer font-semibold">
          <div role="listitem" onClick={() => setIsPrices(!isPrices)}>
            {" "}
            {item}
          </div>
          {isPrices && (
            <div className="absolute top-5 flex flex-col gap-2 bg-gray-200 border border-gray-500 p-2 opacity-80 w-56">
              {prices && prices.map((price) => <div>{price}</div>)}
            </div>
          )}
        </div>
      );
    }
    case "Info": {
      return (
        <div className="relative flex flex-col justify-center items-center hover:opacity-60 hover:cursor-pointer font-semibold">
          {item}
        </div>
      );
    }
    default:
      return null;
  }
};

export default MenuItem;
