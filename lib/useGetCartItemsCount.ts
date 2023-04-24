"use client";

import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";

const useGetCartItemsCount = () => {
  const { data: session } = useSession();
  const [value] = useCollection(
    session && collection(db, "users", session?.user?.email!, "cart")
  );

  let localStorageLength;

  if (localStorage.getItem("cart")) {
    try {
      localStorageLength = JSON.parse(localStorage.getItem("cart")!).length;
    } catch (err) {
      localStorageLength = "undefined";
      localStorage.removeItem("cart");
    }
  }

  return localStorageLength ?? value?.docs[0]?.data().items.length;
};

export default useGetCartItemsCount;
