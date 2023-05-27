"use client";

import { db } from "@/firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import getCartItems from "./getCartItems";
interface Props {
  id?: string;
  name?: string;
  email?: string;
  image?: string;
  emailVerified?: boolean;
}
const updateCartDataToFirestore = async (
  cartData: Product[] | [],
  email: string
) => {
  try {
    // const user = await getDocs(collection(db, "users"));
    // const data = user.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // const matchedUser = data.filter((item: Props) => {
    //   return item?.email === email;
    // });
    // await updateDoc(doc(db, "users", matchedUser[0]?.id!), {
    //   cart: cartData,
    // });
    const cartItems = getCartItems(email);
    if (cartItems.length === 0) {
      await addDoc(collection(db, "cart"), {
        cart: cartData,
        email,
      });
    } else {
      const cart = await getDocs(collection(db, "cart"));
      const data = cart.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const matchedUser = data.filter((item: Props) => {
        return item?.email === email;
      });
      await updateDoc(doc(db, "users", matchedUser[0]?.id!), {
        cart: cartData,
        email,
      });
    }
  } catch (err) {
    console.log("error updating cart data to firestore ", err);
  }
};

export default updateCartDataToFirestore;
