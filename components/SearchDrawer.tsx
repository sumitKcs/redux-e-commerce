"use client";

import { CURRENCY } from "@/lib/currency";
import getPriceFormat from "@/lib/getPriceFormat";
import { useGetAllProductsQuery } from "@/store/apiSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const SearchDrawer = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const [searchedProducts, setSearchedProducts] = useState<
    Product[] | undefined
  >();

  const { data: products } = useGetAllProductsQuery();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      const searchInput = e.target.value;
      const result = matchedProducts(searchInput);
      setSearchedProducts(result);
      console.log("searched products:", result);
    }, 500);
  };

  const matchedProducts = (searchInput: string) =>
    products?.filter((product) =>
      product.sku.toLowerCase().includes(searchInput.toLowerCase())
    );
  console.log("matched products: " + searchedProducts);
  return (
    <div
      aria-label="modal"
      aria-modal={isVisible}
      className={`fixed top-0 left-0 w-full lg:h-full z-50 overflow-auto justify-center md:justify-end p-3 lg:p-6 ${
        isVisible ? "flex" : "hidden"
      } backdrop-brightness-50`}
    >
      <div
        aria-label="modal-content"
        className={` w-full md:w-[70%] lg:w-full bg-white rounded-lg p-5 lg:p-10 flex flex-col overflow-scroll`}
      >
        <div className="h-[60%] flex flex-col gap-5 ">
          <div className="text-lg font-bold flex justify-between">
            <div>
              <input
                type="text"
                placeholder="Search for..."
                className="font-extrabold focus:outline-transparent 
                "
                onChange={handleSearch}
              />
            </div>
            <div>
              <XMarkIcon
                onClick={() => setIsVisible(false)}
                className="w-6 h-6 text-gray-800 cursor-pointer"
              />
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-5">
            {searchedProducts &&
              searchedProducts.map((product) => {
                const price = getPriceFormat(product.price, CURRENCY.INR);
                return (
                  <div className="flex justify-start gap-10  items-center">
                    <div>
                      <Image
                        src={`https:${product.images[0]}`}
                        alt={product.sku}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="mr-10">
                      <div className="font-bold">{product.sku}</div>
                      <div className="text-blue-700 font-bold">{price}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDrawer;
