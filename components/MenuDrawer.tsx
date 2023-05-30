"use client";

import { useGetAllProductsQuery } from "@/store/apiSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import ChevronCircleWithText from "./ChevronCircleWithText";
import SearchItemBox from "./SearchItemBox";

const MenuDrawer = ({
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
      className={`fixed top-0 h-screen w-screen z-50 overflow-hidden justify-center md:justify-end p-10 lg:p-6 ${
        isVisible ? "flex" : "hidden"
      } backdrop-brightness-50`}
    >
      <div
        aria-label="modal-content"
        className={`absolute bottom-0 w-full md:w-[70%] lg:w-full bg-white rounded-lg p-5 lg:p-10 flex justify-center items-center`}
      >
        <div className="w-full h-[60%] flex flex-col gap-2 ">
          <div className="w-full text-lg font-bold flex justify-between">
            <div className="w-full flex flex-col justify-start">
              <Link href="/products/sale" className="text-2xl font-extrabold">
                <div className="flex justify-between group items-center">
                  <div className="border border-black">On Sale</div>

                  <div className="border border-black">
                    <ChevronCircleWithText
                      text=""
                      style="h-1 gap-1"
                    ></ChevronCircleWithText>
                  </div>
                </div>
              </Link>
              <Link href="/products/sale" className="text-2xl font-extrabold">
                <div className="flex justify-between group items-center">
                  <div>Categories</div>

                  <div>
                    <ChevronCircleWithText text=""></ChevronCircleWithText>
                  </div>
                </div>
              </Link>
              <Link href="/products/sale" className="text-2xl font-extrabold">
                <div className="flex justify-between group items-center">
                  <div>Brands</div>

                  <div>
                    <ChevronCircleWithText text=""></ChevronCircleWithText>
                  </div>
                </div>
              </Link>
              <Link href="/products/sale" className="text-2xl font-extrabold">
                <div className="flex justify-between group items-center">
                  <div>Price</div>

                  <div>
                    <ChevronCircleWithText text=""></ChevronCircleWithText>
                  </div>
                </div>
              </Link>
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
              searchedProducts.map((product) => (
                <SearchItemBox product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;
