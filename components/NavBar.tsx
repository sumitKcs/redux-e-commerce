"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useGetDealsQuery, useGetMenuQuery } from "@/store/apiSlice";
import MenuItem from "./MenuItem";
import dynamic from "next/dynamic";
const MenuDrawer = dynamic(() => import("./MenuDrawer"));
const SearchDrawer = dynamic(() => import("./SearchDrawer"));
const CartDrawer = dynamic(() => import("./cartDrawer"));

function NavBar() {
  const router = useRouter();
  const { data: session } = useSession();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const [cartModal, setCartModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const { data: menu } = useGetMenuQuery();
  const { data: deals } = useGetDealsQuery();

  return (
    <nav className="nav-sticky">
      <div className=" w-full grid grid-cols-3 py-4 lg:py-10 bg-[#F8F9F8] lg:grid-cols-4">
        {/* //mobile menu  start*/}
        <div className="lg:hidden px-4 flex justify-start items-center gap-4">
          <Bars3Icon
            onClick={() => setMenuModal(!menuModal)}
            className="w-8 h-8"
          />
          <span
            onClick={() => {
              setSearchModal(!searchModal);
            }}
          >
            {/* search icon  */}
            <svg
              role="presentation"
              strokeWidth="1.5"
              focusable="false"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <circle
                cx="11"
                cy="10"
                r="7"
                fill="none"
                stroke="currentColor"
              ></circle>
              <path
                d="m16 15 3 3"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </div>
        {/* //mobile menu end */}

        {/* logo */}

        <div className="flex justify-center items-center">
          <Link href="/" aria-label="website logo" tabIndex={1}>
            <svg width="150px" height="40px" viewBox="0 0 362.1 73.7">
              <path
                fill="#3C07FF"
                d="M226.2,31.5c0,4.1,0,8,0,12c-1.9,0-3.8,0-5.7,0c0-11.7,0-23.3,0-35c1.9,0,3.7,0,5.6,0 c0,0.5,0.1,1,0.1,1.6c3.3-3,7-3.4,10.9-2.2c4.3,1.3,6.9,4.4,8.1,8.6c1.3,4.6,0.8,9.1-2.1,13C239.2,34.7,231.7,35.6,226.2,31.5z M226.1,20.7c0.2,0.9,0.2,1.9,0.5,2.8c1,2.9,2.9,4.7,6,5c2.7,0.2,4.9-0.8,6.2-3.2c1.8-3.1,1.8-6.2-0.1-9.3 c-2.2-3.5-6.5-4.2-9.7-1.7C227,16,226.2,18.1,226.1,20.7zM342.5,23.6c1.1,2.6,2.8,4,5.3,4.5c2.9,0.6,5.6,0.1,7.7-2.3c1.7,0.9,3.5,1.8,5.3,2.8 c-1.6,2.2-3.6,3.9-6.2,4.7c-5.2,1.6-10.2,1.1-14.2-2.8c-4-3.9-4.9-8.7-3.4-13.9c1.5-5.1,5-8.3,10.3-9.2 c7.5-1.4,14.3,4.1,14.7,11.7c0.1,1.2-0.1,2.5-0.2,3.7c0,0.7-0.4,0.9-1.1,0.9c-5.7,0-11.4,0-17.1,0 C343.4,23.6,343.1,23.6,342.5,23.6z M356.1,18.3c0.1-2.9-2.8-5.2-6.5-5.4c-3.7-0.1-6.9,2.3-7,5.4 C347.2,18.3,351.7,18.3,356.1,18.3zM273.8,32.9c-1.9,0-3.7,0-5.7,0c0-0.3,0-0.6,0-1c0-4,0-8.1,0-12.1c0-1.2-0.2-2.5-0.5-3.7 c-0.5-1.9-1.8-3-3.7-3.5c-4.2-0.9-7.5,1.6-7.6,5.9c-0.1,4.4,0,8.8,0,13.2c0,0.4,0,0.7,0,1.1c-1.9,0-3.8,0-5.7,0 c0-10.8,0-21.7,0-32.6c1.9,0,3.7,0,5.6,0c0,3.1,0,6.3,0,9.6c1.5-1.5,3.2-2.3,5-2.5c3.6-0.4,7.1-0.1,9.8,2.8 c1.8,1.9,2.4,4.4,2.6,6.9c0.2,3,0.2,6,0.2,9C273.8,28.3,273.8,30.5,273.8,32.9zM304.8,20.6c0,7.5-6,13.5-13.4,13.5c-7.5,0-13.5-6-13.5-13.4c0-7.5,6-13.5,13.5-13.5 C298.8,7.2,304.8,13.2,304.8,20.6z M291.4,28.4c4.3,0,7.7-3.5,7.7-7.8c0-4.3-3.5-7.7-7.8-7.6c-4.3,0-7.7,3.5-7.7,7.7 C283.6,25,287.1,28.4,291.4,28.4zM314.9,8.5c0,0.4,0,0.8,0.1,1.4c1.4-1.4,3.1-2.2,5-2.4c3.6-0.4,7.1-0.1,9.8,2.8c1.8,1.9,2.4,4.4,2.6,6.9 c0.2,2.9,0.2,5.8,0.2,8.8c0,2.3,0,4.6,0,7c-1.9,0-3.7,0-5.7,0c0-0.3,0-0.6,0-0.9c0-4,0-8.1,0-12.1c0-1.3-0.2-2.6-0.5-3.9 c-0.5-1.8-1.7-2.8-3.5-3.2c-4.3-1-7.7,1.5-7.8,5.9c-0.1,4.4,0,8.7,0,13.1c0,0.4,0,0.7,0,1.2c-1.9,0-3.7,0-5.7,0 c0-8.1,0-16.2,0-24.4C311.1,8.5,313,8.5,314.9,8.5zM209.1,32.9c0-0.6,0-1.1,0-1.6c-0.7,0.5-1.4,1.2-2.3,1.6c-2,1.1-4.2,1.4-6.4,1.1 c-2.8-0.4-5.2-1.6-7.2-3.6c-1.8-1.9-3-4.2-3.4-6.8c-0.7-4.1-0.2-8,2.2-11.5c1.9-2.8,4.7-4.3,8-4.8c2.8-0.4,5.4,0.1,7.8,1.4 c0.5,0.3,0.9,0.7,1.4,1c0-3.2,0-6.3,0-9.6c1.9,0,3.8,0,5.7,0c0,10.9,0,21.7,0,32.6C212.9,32.9,211.1,32.9,209.1,32.9z M209.1,20.3c0-1.7-0.6-3.6-2-5.2c-2.8-3.1-7.9-3-10.3,0.4c-2.2,3-2.1,7.6,0.2,10.5c1.8,2.3,4.8,3.1,7.4,2.1 C207.3,26.9,209.1,24.1,209.1,20.3zM123.4,0.3c1.9,0,3.8,0,5.7,0c0,10.9,0,21.7,0,32.6c-1.9,0-3.8,0-5.7,0c0-4.6,0-9.2,0-13.7 c-4.8,0-9.5,0-14.3,0c0,4.6,0,9.1,0,13.7c-1.9,0-3.8,0-5.7,0c0-10.9,0-21.7,0-32.6c1.9,0,3.8,0,5.7,0c0,4.5,0,9,0,13.5 c4.8,0,9.5,0,14.3,0C123.4,9.3,123.4,4.8,123.4,0.3zM157.7,28.7c-0.8,0.8-1.5,1.6-2.3,2.3c-3.2,2.7-7,3.5-11,3c-2.6-0.3-4.9-1.4-6.9-3.2 c-2.1-1.9-3.4-4.2-3.9-6.9c-0.9-4.2-0.2-8.2,2.5-11.7c2-2.7,4.8-4.3,8.1-4.8c3-0.5,5.9,0,8.6,1.5c3.2,1.9,5.1,4.7,5.9,8.2 c0.5,2.2,0.5,4.3-0.1,6.5c-6.4,0-12.7,0-19.1,0c0.9,2.3,2.5,3.8,4.8,4.4c3.1,0.8,5.9,0.3,8.2-2.2 C154.1,26.8,155.8,27.7,157.7,28.7z M153,18.3c-0.2-2.2-1.3-3.7-3.2-4.6c-1.3-0.7-2.8-0.9-4.3-0.8c-2.3,0.2-4.2,1.1-5.4,3.1 c-0.4,0.7-0.7,1.4-0.8,2.3C143.9,18.3,148.4,18.3,153,18.3zM179,17.2c-0.2-2.3-1.8-4-4.1-4.3c-3.2-0.5-6.2,0-9,1.6c0,0-0.1,0-0.2,0.1c-0.8-1.5-1.6-3-2.5-4.6 c0.8-0.4,1.6-0.8,2.4-1.2c2.7-1,5.4-1.7,8.3-1.6c2.1,0.1,4.2,0.4,6,1.6c1.7,1.1,2.9,2.7,3.7,4.5c0.8,1.8,1.2,3.7,1.3,5.6 c0.1,4.6,0.1,9.1,0.2,13.7c0,0.1,0,0.2,0,0.3c-1.9,0-3.8,0-5.7,0c0-0.8,0-1.7,0-2.6c-0.4,0.5-0.8,0.9-1.2,1.3 c-2.2,1.9-4.7,2.7-7.6,2.5c-2-0.2-3.8-0.7-5.5-2c-3.4-2.6-4.2-7.8-1.7-11.3c1.5-2.1,3.6-3.3,6.1-3.8c1.6-0.3,3.2-0.4,4.8-0.2 C175.9,16.9,177.4,17.1,179,17.2z M172.1,28.6c0.4,0,1-0.1,1.5-0.2c3.3-0.5,5.5-2.9,5.7-6.1c0-0.4-0.1-0.5-0.5-0.6 c-2.2-0.4-4.4-0.6-6.6-0.4c-1.3,0.1-2.5,0.5-3.5,1.4c-1.4,1.2-1.5,3.4-0.2,4.7C169.5,28.4,170.7,28.6,172.1,28.6z"
              ></path>
              <path
                fill="#3C07FF"
                d="M214.3,63.3c-6.3,0-12.6,0-19,0c0.9,2.3,2.5,3.7,4.8,4.4c2.8,0.8,6.4,0.1,8.1-2.2 c1.7,0.9,3.5,1.8,5.4,2.8c-0.8,0.8-1.5,1.6-2.3,2.3c-3.2,2.7-6.9,3.4-10.9,2.9c-2.6-0.3-4.9-1.4-6.8-3.1 c-2.1-1.9-3.4-4.2-3.9-6.9c-0.9-4.2-0.2-8.2,2.5-11.6c2-2.7,4.7-4.3,8.1-4.8c3-0.5,5.9,0,8.5,1.5c3.1,1.8,5,4.6,5.8,8.2 C215,58.9,214.9,61.4,214.3,63.3z M195.3,58c4.6,0,9.1,0,13.7,0c-0.2-2.2-1.3-3.7-3.2-4.6c-2.4-1.1-4.8-1.1-7.1,0.1 C196.7,54.4,195.7,55.9,195.3,58zM103.7,72.4c0-0.8,0-1.5,0-2.3c0-1,0-2,0-3c0-0.2,0.1-0.5,0.3-0.7c5.3-6.8,10.6-13.6,15.9-20.4 c0.1-0.1,0.1-0.2,0.3-0.4c-5.5,0-10.9,0-16.4,0c0-1.9,0-3.8,0-5.7c7.8,0,15.6,0,23.5,0c0,0.1,0,0.3,0,0.4c0,1.6,0,3.3,0,4.9 c0,0.2-0.1,0.5-0.2,0.7c-5.2,6.8-10.5,13.5-15.8,20.3c-0.1,0.1-0.2,0.3-0.4,0.5c5.5,0,10.9,0,16.4,0c0,1.9,0,3.8,0,5.7 C119.4,72.4,111.6,72.4,103.7,72.4zM157.7,60.3c0,7.4-6,13.4-13.4,13.4c-7.4,0-13.4-6-13.4-13.4c0-7.6,6-13.4,13.4-13.4 C151.8,46.9,157.7,52.9,157.7,60.3z M144.4,68c4.3,0,7.7-3.5,7.7-7.7c0-4.3-3.4-7.7-7.7-7.7c-4.2,0-7.7,3.5-7.7,7.7 C136.6,64.5,140.1,68,144.4,68zM185.4,72.5c-1.9,0-3.8,0-5.7,0c0-0.2,0-0.4,0-0.6c0-4,0-8,0-12c0-1.2-0.1-2.4-0.3-3.6 c-0.5-2.4-2.1-3.8-4.6-4c-1.5-0.1-3,0-4.3,0.9c-1.5,1-2.3,2.6-2.5,4.4c-0.1,0.6-0.1,1.2-0.1,1.7c0,4.2,0,8.4,0,12.6 c0,0.2,0,0.4,0,0.6c-1.9,0-3.8,0-5.6,0c0-8.1,0-16.2,0-24.3c1.9,0,3.7,0,5.6,0c0,0.5,0,0.9,0,1.5c0.3-0.3,0.4-0.5,0.6-0.7 c1.4-1.2,3-1.8,4.8-2c2.2-0.2,4.5,0,6.6,0.9c2.4,1,3.8,2.9,4.6,5.3c0.7,2.2,0.9,4.5,0.9,6.8c0,4,0,8,0,12.1 C185.4,72.2,185.4,72.3,185.4,72.5z"
              ></path>
              <path
                fill="#3C07FF"
                d="M53.3,14.2l1-14.2L27.4,7.5c-1.4,5.3-2.1,12.5,0.5,20.1c0.7-0.2,1.4-0.3,2.1-0.4 c7.9-0.7,14.9,5.2,15.6,13.1s-5.2,14.9-13.1,15.6c-7.9,0.7-14.9-5.2-15.6-13.1c-0.4-4.1,1-7.9,3.6-10.8c-2.6-4-6-10.9-5.9-19.7 C3.3,20-2.6,34.1,1.1,48c4.6,17.6,22.6,28.2,40.2,23.6c14-3.6,23.5-15.7,24.5-29.4l6.8-4.9L53.3,14.2zM22.5,40.7l12.5-6.2c0.6-0.3,0.9-1,0.6-1.6c-0.3-0.6-1-0.9-1.6-0.6l-12.5,6.2c-0.6,0.3-0.9,1-0.6,1.6 C21.1,40.7,21.9,41,22.5,40.7zM38.8,42.4l-12.5,6.2c-0.6,0.3-0.9,1-0.6,1.6c0.3,0.6,1,0.9,1.6,0.6l12.5-6.2c0.6-0.3,0.9-1,0.6-1.6 C40.2,42.4,39.5,42.1,38.8,42.4zM20.1,46.8c0.3,0.6,1,0.9,1.6,0.6L40.6,38c0.6-0.3,0.9-1,0.6-1.6c-0.3-0.6-1-0.9-1.6-0.6l-18.9,9.3 C20.1,45.4,19.8,46.2,20.1,46.8z"
              ></path>
              <path
                fill="#3C07FF"
                d="M53.2,14.2l1-14.2L27.4,7.5C26,12.8,25.3,20,27.8,27.6c0.7-0.2,1.4-0.3,2.1-0.4c7.9-0.7,14.8,5.1,15.5,13 c0.7,7.9-5.1,14.8-13,15.5c-7.9,0.7-14.8-5.1-15.5-13c-0.4-4.1,1-7.9,3.5-10.7c-2.6-4-6-10.9-5.9-19.6C3.3,20-2.6,34,1.1,47.9 C5.6,65.5,23.6,76,41.1,71.4c13.9-3.6,23.4-15.7,24.5-29.3l6.8-4.9L53.2,14.2z"
              ></path>
            </svg>
          </Link>
        </div>

        {/* nav links  - menu bar*/}

        <div className="lg:flex justify-center items-center gap-10 text-sm hidden col-start-2 col-span-2 text-black opacity-95">
          {deals &&
            deals.map((item: any, idx) => (
              <div
                key={idx}
                className=" hover:opacity-60 hover:cursor-pointer text-red-500 text-base font-bold"
              >
                {item.deal}
              </div>
            ))}

          {menu &&
            menu.map((item: { menu: string }) => (
              <MenuItem key={item.menu} item={item.menu} />
            ))}
        </div>

        {/* icons  */}
        <div className=" flex justify-center items-center gap-5 text-gray-600 cursor-pointer">
          <span
            tabIndex={6}
            onClick={() => {
              setSearchModal(!searchModal);
            }}
            className="hidden lg:flex"
          >
            <svg
              role="presentation"
              strokeWidth="1.5"
              focusable="false"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <circle
                cx="11"
                cy="10"
                r="7"
                fill="none"
                stroke="currentColor"
              ></circle>
              <path
                d="m16 15 3 3"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
          <p
            tabIndex={7}
            onClick={() =>
              session?.user?.email
                ? router.push("/account")
                : router.push("/login")
            }
          >
            <svg
              role="presentation"
              strokeWidth="1.5"
              focusable="false"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <circle
                cx="11"
                cy="7"
                r="4"
                fill="none"
                stroke="currentColor"
              ></circle>
              <path
                d="M3.5 19c1.421-2.974 4.247-5 7.5-5s6.079 2.026 7.5 5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
              ></path>
            </svg>
          </p>
          {/* cart icon  */}
          <div
            tabIndex={8}
            role="button"
            onClick={() => setCartModal(!cartModal)}
            className="relative "
          >
            <p role="button" aria-label="open cart drawer">
              <svg
                role="presentation"
                strokeWidth="1.5"
                focusable="false"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <path
                  d="M11 7H3.577A2 2 0 0 0 1.64 9.497l2.051 8A2 2 0 0 0 5.63 19H16.37a2 2 0 0 0 1.937-1.503l2.052-8A2 2 0 0 0 18.422 7H11Zm0 0V1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </p>
            <span className="absolute bg-blue-700 text-white font-bold rounded-[50%] px-2 left-3 bottom-2 text-center scale-[.85]">
              {cartItems.length ?? 0}
            </span>
          </div>
        </div>
      </div>
      <CartDrawer isVisible={cartModal} setIsVisible={setCartModal} />
      <SearchDrawer isVisible={searchModal} setIsVisible={setSearchModal} />
      <MenuDrawer isVisible={menuModal} setIsVisible={setMenuModal} />
    </nav>
  );
}

export default NavBar;
