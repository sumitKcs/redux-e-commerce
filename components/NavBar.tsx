"use client";

import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import { collection } from "@firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { signOut, useSession } from "next-auth/react";
import { db } from "@/firebase";

function NavBar() {
  //subscribing the state to monitor changes
  const { data: session } = useSession();
  const [value] = useCollection(
    session && collection(db, "users", session?.user?.email!, "cart")
  );
  const cartItem = value?.docs.map((doc) => doc.id)?.["0"];
  console.log("cartItemDoc: ", cartItem);

  return (
    <header>
      <nav className="w-full grid grid-cols-4 grid-rows-1 gap-5 py-5 border border-gray-300 px-5 text-sm md:text-lg bg-white">
        <span>Pika Store</span>
        <Link
          href="/"
          className="hover:text-blue-700 flex justify-end items-center"
        >
          Home
        </Link>
        <Link
          href="/product/cart"
          className="hover:text-blue-700 flex justify-start items-center"
        >
          cart
        </Link>
        <div className="flex justify-end items-center gap-2">
          {/* <div className=" inline-flex ">
            <Link href="/product/cart">
              <ShoppingCartIcon className="w-6 h-6 text-blue-600" />
            </Link>
            <span className="mx-2 px-1 flex justify-center items-center">
              {cartItem?.items?.length}
            </span>
          </div> */}
          <div className="w-10 h-full">
            <Image
              className="w-10 h-10 rounded-full"
              src={session?.user?.image!}
              alt="user image"
              height={50}
              width={50}
              onClick={() => signOut()}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
