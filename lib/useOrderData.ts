"use client";

import { db } from "@/firebase";
import { collection, query, where } from "firebase/firestore";
``;
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";

const useOrderData = () => {
  const { data: session } = useSession();
  const [value] = useCollection(
    session && collection(db, "orders", session?.user?.email!, "orderId")
  );
  const orders = value?.docs.map((order) => order.data());
  return orders ?? [];
};

export default useOrderData;
