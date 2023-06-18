"use client";

import {
  useGetCategoriesQuery,
  useGetBrandsQuery,
  useGetPricesQuery,
} from "@/store/apiSlice";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    return () => {
      document.body.removeEventListener("click", () => {});
    };
  }, []);

  switch (item) {
    case "Categories": {
      return (
        <div
          onKeyUp={(e) => {
            if (e.code == "Enter" || e.keyCode == 13) {
              setIsCategories(!isCategories);
              setIsBrands(false);
              setIsPrices(false);
            }
          }}
          id={item}
          tabIndex={2}
          className="relative flex flex-col justify-center items-center  hover:cursor-pointer font-semibold"
        >
          <div
            onClick={() => setIsCategories(!isCategories)}
            className="hover:opacity-60"
          >
            <div className="flex justify-center items-center">
              <div>{item}</div>
              <div>
                <ChevronDownIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
          {isCategories && (
            <div className="absolute top-7 flex flex-col gap-2 bg-white p-2 rounded-lg w-44 ">
              {categories &&
                categories.map((category: { category: string }) => (
                  <Link
                    id={category.category}
                    href={`/product/categories/${category.category.toLowerCase()}`}
                    className="hover:underline opacity-90"
                  >
                    {category.category}
                  </Link>
                ))}
            </div>
          )}
        </div>
      );
    }
    case "Brands": {
      return (
        <div
          onKeyUp={(e) => {
            if (e.code == "Enter" || e.keyCode == 13) {
              setIsBrands(!isBrands);
              setIsCategories(false);
              setIsPrices(false);
            }
          }}
          tabIndex={3}
          className="relative flex flex-col justify-center items-center  hover:cursor-pointer font-semibold"
        >
          <div
            onClick={() => setIsBrands(!isBrands)}
            className="hover:opacity-60"
          >
            <div className="flex justify-center items-center">
              <div>{item}</div>
              <div>
                <ChevronDownIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
          {isBrands && (
            <div className="absolute top-7 flex flex-col gap-2 bg-white p-2 rounded-lg w-44 ">
              {brands &&
                brands.map((brand: { brand: string }) => (
                  <Link
                    id={brand.brand}
                    href={`/product/brands/${brand.brand.toLowerCase()}`}
                    className="hover:underline opacity-90"
                  >
                    {brand.brand}
                  </Link>
                ))}
            </div>
          )}
        </div>
      );
    }
    case "Prices": {
      return (
        <div
          onKeyUp={(e) => {
            if (e.code == "Enter" || e.keyCode == 13) {
              setIsPrices(!isPrices);
              setIsCategories(false);
              setIsBrands(false);
            }
          }}
          tabIndex={4}
          className="relative flex flex-col justify-center items-center  hover:cursor-pointer font-semibold"
        >
          <div
            onClick={() => setIsPrices(!isPrices)}
            className="hover:opacity-60"
          >
            <div className="flex justify-center items-center">
              <div>{item}</div>
              <div>
                <ChevronDownIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
          {isPrices && (
            <div className="absolute top-7 flex flex-col gap-2 bg-white p-2 w-56 rounded-lg">
              {prices &&
                prices.map((price: { price: string }) => (
                  <Link
                    id={price.price}
                    href={`/product/prices/${price.price.toLowerCase()}`}
                    className="hover:underline opacity-90"
                  >
                    {price.price}
                  </Link>
                ))}
            </div>
          )}
        </div>
      );
    }
    case "Info": {
      return (
        <Link
          tabIndex={5}
          href={`/about`}
          className="relative flex flex-col justify-center items-center hover:opacity-60 hover:cursor-pointer font-semibold"
        >
          {item}
        </Link>
      );
    }
    default:
      return null;
  }
};

export default MenuItem;
