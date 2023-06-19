"use client";

import { CURRENCY } from "@/lib/currency";
import getPriceFormat from "@/lib/getPriceFormat";
import { getTotal, qty, remove } from "@/store/cartSlice";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { LockClosedIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { RootState } from "@/store/store";
import { Dispatch, SetStateAction, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const stripePromise = import("@stripe/stripe-js").then((module) => {
  const loadStripe = module.loadStripe;
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
});

const cartDrawer = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const { cartTotalAmount, cartItems } = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useDispatch();
  const { data: session } = useSession();

  const totalAmount = getPriceFormat(cartTotalAmount, CURRENCY.INR);

  const itemQuantityHandler = async (product: Product, quantity: string) => {
    if (quantity === "0" || quantity === "") quantity = "1";
    dispatch(
      qty({
        product,
        quantity: parseInt(quantity === "" ? "1" : quantity),
      })
    );
    dispatch(getTotal());
  };

  const removeItemHandler = async (product: Product) => {
    dispatch(remove(product));
  };

  const handlePayment = async () => {
    if (!session) {
      setIsVisible(false);
      router.push("/login");
      return;
    }

    const stripe = await stripePromise;
    const { data: sessionId } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/stripe`,
      {
        cartItems,
        email: session?.user?.email,
      }
    );

    if (!sessionId) return;

    // // const { sessionId } = await response.json();
    const result = await stripe?.redirectToCheckout({ sessionId });
    if (result?.error) alert(result.error.message);
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems.length]);

  return cartItems.length > 0 ? (
    <div
      aria-label="modal"
      aria-modal={isVisible}
      className={`fixed top-0 left-0 w-full h-full z-50 overflow-auto  justify-center md:justify-end  p-3 lg:p-6 ${
        isVisible ? "flex" : "hidden"
      } backdrop-brightness-50`}
    >
      <div
        aria-label="modal-content"
        className={` w-full md:w-[70%] lg:w-[40%] bg-white rounded-lg p-5 lg:p-10 flex flex-col justify-around`}
      >
        <div className="h-[60%] flex flex-col gap-5">
          <div className="text-lg font-bold flex justify-between">
            <div className="w-[60%] flex justify-start items-center gap-2 ">
              <span aria-label="cart"> Cart</span>
              <span
                aria-describedby={`${cartItems.length} cart items`}
                className="bg-blue-700 text-white font-bold rounded-[50%] px-3 py-1  text-center scale-[.70] flex items-center"
              >
                {cartItems.length ?? 0}
              </span>
            </div>
            <div>
              <XMarkIcon
                onClick={() => setIsVisible(false)}
                className="w-6 h-6 text-gray-800 cursor-pointer"
              />
            </div>
          </div>
          {cartItems?.map((item: Product) => {
            const { dropped_price, images, cartQuantity, id } = item;

            const itemPrice = getPriceFormat(dropped_price, CURRENCY.INR);
            return (
              <div className="flex gap-4" key={id}>
                <div>
                  <img
                    className=" w-24 h-24 object-cover"
                    src={images?.[0]}
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
                      type="number"
                      onBlur={(e) => {
                        let quantity = e.target.value;
                        if (!quantity || quantity === "0")
                          quantity = e.target.value = "1";
                        itemQuantityHandler(item, quantity);
                      }}
                      defaultValue={cartQuantity}
                      aria-label="change quantity"
                      min={1}
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
              <div>{totalAmount || 0}</div>
            </div>
            <div className="flex flex-col gap-1 text-gray-500 text-sm">
              <div>Tax included and shipping calculated at checkout</div>
            </div>
          </div>
          {/* row 2  */}
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
              onClick={handlePayment}
            >
              <LockClosedIcon className="w-4 h-4" />
              CHECKOUT
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
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
        <div className="text-lg font-bold flex justify-end">
          <div>
            <XMarkIcon
              onClick={() => setIsVisible(false)}
              className="w-6 h-6 text-gray-800 cursor-pointer"
            />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-5">
            {/* cart icon  */}
            <div
              role="button"
              className="relative scale-125"
              aria-controls="cart-drawer"
            >
              <p role="button" aria-label="open cart drawer">
                <svg
                  role="presentation"
                  strokeWidth="1.5"
                  focusable="false"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                >
                  <path
                    d="M11 7H3.577A2 2 0 0 0 1.64 9.497l2.051 8A2 2 0 0 0 5.63 19H16.37a2 2 0 0 0 1.937-1.503l2.052-8A2 2 0 0 0 18.422 7H11Zm0 0V1"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </p>
              <span className="absolute bg-blue-700 text-white font-bold rounded-[50%] px-2 left-3 bottom-2 text-center scale-[.85]">
                {cartItems.length ?? 0}
              </span>
            </div>

            {/* cart empty msg  */}
            <div className="text-xl font-extrabold tracking-widest">
              Your cart is empty
            </div>
            {/* continue shoppping button */}
            <div
              role="button"
              className="bg-[#3C07FF] px-12 py-4 rounded-full text-white text-sm tracking-wider font-bold"
            >
              <Link href="/">CONTINUE SHOPPING</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cartDrawer;
