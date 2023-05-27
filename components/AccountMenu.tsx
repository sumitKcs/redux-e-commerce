"use client";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AccountMenu = () => {
  const router = useRouter();
  return (
    <nav role={"menubar"} className=" .nav-sticky">
      <div
        role={"menuitem"}
        className=" w-full flex items-center justify-center gap-10 bg-[#efefef] text-sm text-black opacity-95 py-7"
      >
        <Link href="/account" className={`hover:opacity-60 font-semibold`}>
          Orders
        </Link>

        <span
          onClick={() => {
            signOut();
            router.push("/");
          }}
          className=" hover:opacity-60  font-semibold cursor-pointer"
        >
          Logout
        </span>
      </div>
    </nav>
  );
};

export default AccountMenu;
