"use client";

import { db } from "@/firebase";
import { collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const getCartItems = (email: string) => {
  const [value] = useCollection(
    query(collection(db, "cart"), where("email", "==", email))
  );
  console.log("cart data from hooks: ", value?.docs[0]?.data().cart);
  return value?.docs[0]?.data().cart ?? [];
};

export default getCartItems;
