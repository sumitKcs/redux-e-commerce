"use client";

import { db } from "@/firebase";
import { collection, query, where } from "firebase/firestore";``
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";

const useOrderData = () => {
  const { data: session } = useSession();
  const [value] = useCollection(session && collection(db, "orders", session?.user?.email!, ));

  return value?.docs[0]?.data().cart ?? [];
};

export default useOrderData;
