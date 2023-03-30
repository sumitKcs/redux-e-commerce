import { collection } from "@firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react";
import { db } from "@/firebase";
import React from "react";

const CartItemContext = React.createContext("");

const context = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const [snapShot] = useCollection(
    collection(db, "user", session?.user?.email!, "cart")
  );

  const cartItem = snapShot?.docs.map((doc) => doc.data());
  console.log(cartItem);
  return (
    <CartItemContext.Provider value={""}>{children}</CartItemContext.Provider>
  );
};

export default context;
