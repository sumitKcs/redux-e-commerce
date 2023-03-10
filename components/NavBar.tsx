"use client";

import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function NavBar() {
  //subscribing the state to monitor changes
  const { cartItems } = useSelector((state: RootState) => state.cart);
  return (
    <header>
      <nav className="w-full grid grid-cols-4 grid-rows-1 gap-5 py-5 border border-gray-300 px-5 text-sm md:text-lg">
        <span>Pika Store</span>
        <Link
          href="/"
          className="hover:text-blue-700 flex justify-end items-center"
        >
          Home
        </Link>
        <Link
          href="/cart"
          className="hover:text-blue-700 flex justify-start items-center"
        >
          cart
        </Link>
        <div className=" flex justify-end items-center">
          <span className=" inline-flex ">
            <Link href="/cart">
              <ShoppingCartIcon className="w-6 h-6 text-blue-600" />
            </Link>
            <span className="mx-2 px-1 flex justify-center items-center">
              {cartItems.length}
            </span>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
