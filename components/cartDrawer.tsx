"use client";

import { CURRENCY } from "@/lib/currency";
import useGetCartItems from "@/lib/useGetCartItems";
import useGetCartItemsCount from "@/lib/useGetCartItemsCount";
import usePriceFormat from "@/lib/usePriceFormat";
import { qty } from "@/store/cartSlice";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const cartDrawer = ({ isVisible }: { isVisible: boolean }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
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
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 overflow-auto  justify-center p-3 ${
        isVisible ? "flex" : "hidden"
      } backdrop-brightness-50`}
    >
      <div
        aria-label="modal"
        aria-modal={isVisible}
        className={` w-full bg-white rounded-lg p-5 flex flex-col `}
      >
        <div className="h-[60%] flex flex-col gap-5">
          <div
            aria-label="modal-content"
            className="text-lg font-bold flex justify-between"
          >
            <div className="flex justify-start gap-4">
              <span aria-label="cart"> Cart</span>
              <span
                aria-describedby={`${cartItemsCount} cart items`}
                className="bg-blue-700 text-white font-bold rounded-[50%] px-2  text-center scale-[.80]"
              >
                {cartItemsCount}
              </span>
            </div>
            <div>x</div>
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
                  <img className=" w-24 h-24" src={images[0]} alt={item.sku} />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <div className="text-sm font-bold">{item.sku}</div>
                    <div className="text-gray-500">{itemPrice}</div>
                  </div>
                  <div className="flex gap-2 items-end">
                    <input
                      className="border border-gray-300 w-10 text-center text-gray-500 text-xs focus:outline-none rounded-md px-[.8rem] py-[.5rem]"
                      type="text"
                      onChange={(e) =>
                        itemQuantityHandler(item, e.target.value)
                      }
                      defaultValue={cartQuantity}
                      aria-label="item quantity edit input box"
                    />

                    <span className=" text-xs text-gray-500 underline">
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
              <div>total Price</div>
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
              <textarea className="border border-gray-500" />
            </div>
          </div>
          {/* row 3  */}
          <div className="flex justify-evenly text-white">
            <div
              className="bg-gray-900 px-12 py-3 rounded-full hover:px-11"
              role="button"
              aria-labelledby="view cart button "
            >
              VIEW CART
            </div>
            <div
              className="bg-blue-700 px-12 py-3 rounded-full flex justify-center items-center gap-1 hover:px-11"
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
