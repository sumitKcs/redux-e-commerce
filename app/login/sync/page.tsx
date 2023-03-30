"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { serverTimestamp, addDoc, collection } from "@firebase/firestore";
import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { doc, updateDoc } from "firebase/firestore";

import React from "react";

const syncDb = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [value] = useCollection(
    session && collection(db, "users", session?.user?.email!, "cart")
  );
  const cartItemDataId = value?.docs.map((doc) => doc.id)?.["0"];
  console.log("cartItemDoc: ", cartItemDataId);

  const addCartItemsToDB = async () => {
    const cartId = localStorage.getItem("cartId");
    const storageItem = JSON.parse(localStorage.getItem("cart")!);
    if (!cartId && !cartItemDataId) {
      if (storageItem) {
        const cartObj = {
          items: [...storageItem],
          timestamp: serverTimestamp(),
        };
        const cartDoc = await addDoc(
          collection(db, "users", session?.user?.email!, "cart"),
          cartObj
        );
        localStorage.setItem("cartId", cartDoc.id);
        console.log("inserting data");
      } else {
        const id = cartId || cartItemDataId;
        const docRef = doc(db, "users", session?.user?.email!, "cart", id!);
        const cartObj = {
          items: [...storageItem],
          timestamp: serverTimestamp(),
        };

        await updateDoc(docRef, cartObj);
        if (cartId === undefined && cartItemDataId !== undefined)
          localStorage.setItem("cartId", cartItemDataId);
          console.log("updating data");
      }
    }
  };

  if (session) {
    addCartItemsToDB();
    router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/product/cart`);
  }
  return (
    <div className="w-full h-[100svh] flex justify-center items-center text-3xl">
      Syncing...
    </div>
  );
};

export default syncDb;
