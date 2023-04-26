"use client";

import { db } from "@/firebase";
import { collection, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";

const useGetCartItemsCount = () => {
  const { data: session } = useSession();
  const [value] = useCollection(
    session &&
      query(collection(db, "users"), where("cart", "==", session?.user?.email))
  );
  return value?.docs[0]?.data().items.length;
};

export default useGetCartItemsCount;
