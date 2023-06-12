"use client";

import { useGetAllProductsQuery } from "@/store/apiSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import SearchItemBox from "./SearchItemBox";

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
      className={`fixed top-0 left-0 w-full lg:h-full z-50 overflow-hidden justify-center md:justify-end p-3 lg:p-6 ${
        isVisible ? "flex" : "hidden"
      } backdrop-brightness-50`}
    >
      <div
        aria-label="modal-content"
        className={` w-full md:w-[70%] lg:w-full bg-white rounded-lg p-5 lg:p-10 flex flex-col overflow-scroll`}
      >
        <div className="w-full h-[60%] flex flex-col gap-5 ">
          <div className="w-full text-lg font-bold flex justify-between">
            <div className="w-full">
              <input
                type="text"
                placeholder="Search for..."
                className="bg-white w-full font-extrabold focus:outline-transparent focus:ring-transparent"
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
              searchedProducts.map((product) => (
                <SearchItemBox product={product} setIsVisible={setIsVisible} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDrawer;
