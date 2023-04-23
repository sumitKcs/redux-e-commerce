"use client";

import { db } from "@/firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
interface Props {
  id?: string;
  name?: string;
  email?: string;
  image?: string;
  emailVerified?: boolean;
}
const updateCartDataToFirestore = async (
  cartData: Product[],
  email: String
) => {
  try {
    const user = await getDocs(collection(db, "users"));
    const data = user.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const matchedUser = data.filter((item: Props) => {
      return item?.email === email;
    });
    await updateDoc(doc(db, "users", matchedUser[0]?.id!), {
      cart: cartData,
    });
  } catch (err) {
    console.log("error updating cart data to firestore ", err);
  }
};

export default updateCartDataToFirestore;
