"use client";

import { useGetMobileMenuQuery } from "@/store/apiSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import ChevronCircleWithText from "./ChevronCircleWithText";

const MenuDrawer = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data: mobileMenuItems } = useGetMobileMenuQuery();
  console.log("mobileMenu:", mobileMenuItems);
  return (
    <div
      aria-label="modal"
      aria-modal={isVisible}
      className={`fixed top-0 h-[100dvh] w-screen z-50 overflow-hidden justify-center md:justify-end p-10 lg:p-6 ${
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
              {mobileMenuItems &&
                mobileMenuItems?.map((menuItem: string) => {
                  return (
                    <Link
                      href="/products/sale"
                      className="text-2xl font-extrabold"
                    >
                      <div className="flex justify-between group items-center">
                        <div>{menuItem}</div>

                        <div>
                          <ChevronCircleWithText text=""></ChevronCircleWithText>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
            <div>
              <XMarkIcon
                onClick={() => setIsVisible(false)}
                className="w-6 h-6 text-gray-800 cursor-pointer"
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;
