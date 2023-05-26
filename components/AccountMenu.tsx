"use client";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const AccountMenu = () => {
  const [orderActive, setOrderActive] = useState(true);
  const [addressesActive, setAddressesActive] = useState(false);

  useEffect(() => {
    if (
      typeof window !== undefined &&
      window.location.href.includes("addresses")
    ) {
      setAddressesActive(true);
      setOrderActive(false);
    } else {
      setOrderActive(true);
      setAddressesActive(false);
    }
  }, []);

  return (
    <nav role={"menubar"} className=" .nav-sticky">
      <div
        role={"menuitem"}
        className=" w-full flex items-center justify-center gap-10 bg-[#efefef] text-sm text-black opacity-95 py-7"
      >
        <Link
          href="/account"
          className={`hover:opacity-60 font-semibold ${
            orderActive && "text-[#3c07ff] font-extrabold"
          } `}
        >
          Orders
        </Link>
        {/* <Link
          href="/account/addresses"
          className={`hover:opacity-60 font-semibold ${
            addressesActive && "text-blue-900"
          } `}
        >
          Addresses
        </Link> */}
        <span
          onClick={() => signOut()}
          className=" hover:opacity-60  font-semibold cursor-pointer"
        >
          Logout
        </span>
      </div>
    </nav>
  );
};

export default AccountMenu;
