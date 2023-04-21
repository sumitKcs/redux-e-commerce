"use client";

import { CURRENCY } from "@/lib/currency";
import useGetCartItems from "@/lib/useGetCartItems";
import useGetCartItemsCount from "@/lib/useGetCartItemsCount";
import usePriceFormat from "@/lib/usePriceFormat";
import { getTotal, qty, remove } from "@/store/cartSlice";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase";
import { LockClosedIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { RootState } from "@/store/store";
import { Dispatch, SetStateAction, useEffect } from "react";
import Link from "next/link";

const cartDrawer = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const { cartTotalAmount } = useSelector((state: RootState) => state.cart);
  const totalAmount = usePriceFormat(cartTotalAmount, CURRENCY.INR);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const cartItemsCount = useGetCartItemsCount();

  const cartItems = useGetCartItems();
  console.log("cartDrawer: ", cartItems);

  const itemQuantityHandler = async (product: Product, quantity: string) => {
    dispatch(
      qty({
        product,
        quantity: parseInt(quantity),
      })
    );

    if (localStorage.getItem("docIdToDelete")) {
      try {
        const lastCartId = localStorage.getItem("docIdToDelete");
        const ref = doc(
          db,
          "users",
          session?.user?.email!,
          "cart",
          lastCartId!
        );
        await deleteDoc(ref);
      } catch (err) {
        localStorage.removeItem("docIdToDelete");
      }
    }
    if (localStorage.getItem("cart")) {
      const items = JSON.parse(localStorage?.getItem("cart")!);

      let docId = await addDoc(
        collection(db, "users", session?.user?.email!, "cart"),
        {
          items,
          timestamp: serverTimestamp(),
        }
      );

      localStorage.setItem("docIdToDelete", docId.id);
    }
  };

  const removeItemHandler = async (product: Product) => {
    dispatch(remove(product));
    if (localStorage.getItem("docIdToDelete")) {
      try {
        const lastCartId = localStorage.getItem("docIdToDelete");
        const ref = doc(
          db,
          "users",
          session?.user?.email!,
          "cart",
          lastCartId!
        );
        await deleteDoc(ref);
      } catch (err) {
        localStorage.removeItem("docIdToDelete");
      }
    }
    if (localStorage.getItem("cart")) {
      const items = JSON.parse(localStorage?.getItem("cart")!);

      let docId = await addDoc(
        collection(db, "users", session?.user?.email!, "cart"),
        {
          items,
          timestamp: serverTimestamp(),
        }
      );

      localStorage.setItem("docIdToDelete", docId.id);
    }
  };
  useEffect(() => {
    dispatch(getTotal());
  }, []);
  return (
    <div
      aria-label="modal"
      aria-modal={isVisible}
      className={`fixed top-0 left-0 w-full h-full z-50 overflow-auto  justify-center md:justify-end  p-3 lg:p-6 ${
        isVisible ? "flex" : "hidden"
      } backdrop-brightness-50`}
    >
      <div
        aria-label="modal-content"
        className={` w-full md:w-[70%] lg:w-[40%] bg-white rounded-lg p-5 lg:p-10 flex flex-col `}
      >
        <div className="h-[60%] flex flex-col gap-5">
          <div className="text-lg font-bold flex justify-between">
            <div className="w-[60%] flex justify-start items-center gap-2 ">
              <span aria-label="cart"> Cart</span>
              <span
                aria-describedby={`${cartItemsCount} cart items`}
                className="bg-blue-700 text-white font-bold rounded-[50%] px-3 py-1  text-center scale-[.70] flex items-center"
              >
                {cartItemsCount}
              </span>
            </div>
            <div>
              <XMarkIcon
                onClick={() => setIsVisible(false)}
                className="w-6 h-6 text-gray-800 cursor-pointer"
              />
            </div>
          </div>
          {cartItems?.items?.map((item: Product) => {
            const {
              dropped_price,
              images,
              sku,
              selling_price,
              price,
              cartQuantity,
            } = item;

            const itemPrice = usePriceFormat(dropped_price, CURRENCY.INR);
            return (
              <div className="flex gap-4">
                <div>
                  <img
                    className=" w-24 h-24 object-cover"
                    src={images[0]}
                    alt={item.sku}
                  />
                </div>
                <div className="w-full flex flex-col md:flex-row md:justify-between gap-3 ">
                  <div className="flex flex-col">
                    <div className="text-sm font-bold">{item.sku}</div>
                    <div className="text-gray-500">{itemPrice}</div>
                  </div>
                  <div className="flex md:flex-col gap-2 items-end">
                    <input
                      className="border border-gray-300 w-10 text-center text-gray-500 text-xs focus:outline-none rounded-md px-[.8rem] py-[.5rem]"
                      type="text"
                      onChange={(e) =>
                        itemQuantityHandler(item, e.target.value)
                      }
                      defaultValue={cartQuantity}
                      aria-label="item quantity edit input box"
                    />

                    <span
                      onClick={() => removeItemHandler(item)}
                      className=" text-xs text-gray-500 underline cursor-pointer"
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="flex flex-col gap-5">
          {/* row 1 */}
          <div className="flex flex-col gap-1 mt-5">
            <div className="flex justify-between font-extrabold text-lg">
              <div>Total</div>
              <div>{totalAmount}</div>
            </div>
            <div className="flex flex-col gap-1 text-gray-500 text-sm">
              <div>Tax included and shipping calculated at checkout</div>
              <div className="underline">Add order note</div>
            </div>
          </div>
          {/* row 2  */}
          <div className="flex flex-col gap-1">
            <div className="text-gray-500 text-sm">
              <input className="mr-2" aria-label="checkbox" type="checkbox" />
              For ₹ 50 please wrap the products in this order. Gift message
              (free and optional):
            </div>
            <div>
              <textarea className="border border-gray-300" />
            </div>
          </div>
          {/* row 3  */}
          <div className="flex justify-evenly text-white gap-4 text-xs font-bold opacity-90 tracking-widest">
            <div
              className="w-[50%] bg-gray-900 px-12 py-4 rounded-full hover:scale-95 text-center"
              role="button"
              aria-labelledby="view cart button "
            >
              <Link href="/product/cart"> VIEW CART</Link>
            </div>
            <div
              className="w-[50%] bg-blue-700 px-12 py-4 rounded-full flex justify-center items-center gap-1 hover:bg-gray-900 hover:scale-95"
              role="button"
              aria-labelledby="checkout button"
            >
              <LockClosedIcon className="w-4 h-4" />
              CHECKOUT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cartDrawer;
