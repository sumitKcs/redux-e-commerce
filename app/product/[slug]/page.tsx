"use client";

import { RatingStar } from "rating-star";
import { useGetProductBySlugQuery } from "@/store/apiSlice";
import getPriceFormat from "@/lib/getPriceFormat";
import { InformationCircleIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { CURRENCY } from "@/lib/currency";
import { useDispatch } from "react-redux";
import { add } from "@/store/cartSlice";

type Props = {
  params: {
    slug: string;
  };
};

const ProductDetails = ({ params }: Props) => {
  const dispatch = useDispatch();
  const slug = params.slug;
  const { data: product } = useGetProductBySlugQuery(slug);

  const MRP = getPriceFormat(product ? product?.[0]?.price : 0, CURRENCY.INR);

  const selling_price = getPriceFormat(
    product ? product[0]?.selling_price : 0,
    CURRENCY.INR
  );
  const dropped_price = getPriceFormat(
    product ? product[0]?.dropped_price : 0,
    CURRENCY.INR
  );

  const handleAddToCart = async (product: Product | undefined) => {
    if (product) dispatch(add(product));
  };

  return !product ? (
    <ProductDetailsSkeleton />
  ) : (
    <div className=" w-full h-full grid grid-cols-1 md:grid-cols-2 md:px-16 ">
      {/* product image  */}
      <div>
        {<img src={product?.[0]?.images?.[0]} className="p-10 animate" />}
      </div>
      {/* product details */}
      <div className="flex flex-col justify-start gap-3 px-5 py-5 ">
        <p className=" text-sm text-gray-500 font-bold tracking-wider animate">
          {product?.[0]?.brand}
        </p>
        <p className="text-4xl font-bold">{product?.[0]?.sku}</p>
        <p className="text-sm text-gray-500 font-bold tracking-wider animate">
          {product?.[0]?.category}
        </p>
        <div className="ml-[-10px] flex items-center text-sm">
          <span>
            <RatingStar id="123" size={18} rating={product?.[0]?.stars} />
          </span>
          <span className=" tracking-wider">
            <span>{product?.[0]?.stars}</span>{" "}
            <span>({product?.[0]?.total_ratings})</span>
          </span>
        </div>
        {/* price details  */}
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            {selling_price === dropped_price ? (
              <div className="flex gap-4 items-center">
                <p className=" text-blue-700 text-3xl font-extrabold">
                  {selling_price}
                </p>
                <p className=" line-through text-gray-500">MRP: {MRP}</p>
              </div>
            ) : (
              <>
                <p className=" line-through text-gray-500">MRP: {MRP}</p>

                <p className=" line-through text-gray-500">
                  Selling Price: {selling_price}
                </p>

                <p>
                  Dropped Price:
                  <span className="text-lg text-blue-700 font-extrabold">
                    {dropped_price}
                  </span>
                </p>
              </>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-500">Is our price too high?</p>
          </div>
        </div>
        {/* EMI deatils  */}
        <div className="mt-5 text-xs flex flex-col gap-2 text-gray-500 font-bold tracking-wider">
          <p className="flex items-center gap-1">
            <span> Or ₹ 542 (Snapmint/Simp/bajaj/Zest/Cards)</span>
            <span>
              <InformationCircleIcon className="w-4 text-black" />
            </span>
          </p>
          <p className="flex items-center gap-1">
            Includes GST of ₹ 915
            <span>
              <InformationCircleIcon className="w-4 text-black" />
            </span>
          </p>
        </div>
        <br />
        <hr />
        <br />
        {/* add to cart button  */}
        <div className="flex justify-center items-center">
          {product?.[0] && (
            <button
              onClick={() => handleAddToCart(product?.[0])}
              className="w-full bg-blue-700 text-white text-xs font-bold py-4 rounded-full"
            >
              ADD TO CART
            </button>
          )}
        </div>
        {/* talk to headphone guru  */}
        <div className="flex justify-center items-center  text-xs mt-5">
          <p className="border-b-2 border-black hover:border-0">
            CONFUSED? TALK TO A HEADPHONE GURU
          </p>
        </div>
        {/* delivery and shipping  */}
        <div className="space-y-3 ">
          <p className="text-sm font-bold ">DELIVERY & SHIPPING</p>
          {/* zip code input  */}
          <div className="flex justify-start">
            <span className="bg-gray-200 rounded-full text-xs  px-3 font-bold">
              <input
                className="focus:outline-none bg-gray-200 rounded-full py-2 text-xs "
                type="text"
                placeholder="40001"
                defaultValue={40001}
              />
              <button>CHANGE</button>
            </span>
          </div>
          {/* expected delivery date */}
          <div className="grid grid-flow-col tracking-wider">
            {/* col 1  */}
            <div className="flex flex-col">
              <div className="text-xs text-gray-500">Delivered by</div>
              <div className="text-xs text-gray-900">
                Tue, Apr 18th - Wed, Apr 19th
              </div>
            </div>
            {/* col 2  */}
            <div className="flex flex-col">
              <div className="text-xs text-gray-500">Ships in </div>
              <div className="text-xs text-gray-900">24 Hours</div>
            </div>
            {/* col 3  */}
            <div className="flex flex-col">
              <div className="text-xs text-gray-900">Cash on </div>
              <div className="text-xs text-gray-900">Delivery</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="space-y-3 ">
          <p className="text-sm font-bold ">RETURNS & WARANTY</p>

          {/* expected delivery date */}
          <div className="grid grid-flow-col tracking-wider">
            {/* col 1  */}
            <div className="flex flex-col">
              <div className="text-xs text-gray-900">7 Day </div>
              <div className="text-xs text-gray-900 flex items-center">
                Easy Exchange <InformationCircleIcon className="w-4" />
              </div>
            </div>
            {/* col 2  */}
            <div className="flex flex-col">
              <div className="text-xs text-gray-900">7 Day Replacement </div>
              <div className="text-xs text-gray-900 flex items-center">
                Guarantee <InformationCircleIcon className="w-4" />
              </div>
            </div>
            {/* col 3  */}
            <div className="flex flex-col">
              <div className="text-xs text-gray-900">1 Year </div>
              <div className="text-xs text-gray-900 flex items-center">
                Warranty <InformationCircleIcon className="w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

const ProductDetailsSkeleton = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 md:px-16 animate-pulse">
      {/* product image  */}
      <div className="bg-gray-200 flex justify-center items-center rounded-xl">
        <PhotoIcon className="w-12 h-12" />
      </div>
      {/* product details */}
      <div className="flex flex-col justify-start gap-3 px-5 py-5">
        {/* brand  */}
        <div className="bg-gray-200 w-20 h-4 rounded-sm"></div>
        {/* sku  */}
        <div className="bg-gray-200 w-80 h-12 rounded-sm"></div>
        {/* category  */}
        <div className="bg-gray-200 w-64 h-4 rounded-sm"></div>
        {/* rating  */}
        <div className="bg-gray-200 w-32 h-14 rounded-sm"></div>
        {/* price details  */}
        <div className="bg-gray-200 w-44 h-5 rounded-sm"></div>
        {/* EMI deatils  */}
        <div className="bg-gray-200 w-44 h-20 rounded-sm"></div>
        <br />
        <hr />
        <br />
        {/* add to cart button  */}
        <div className="bg-gray-200 w-full h-12 rounded-sm px-10"></div>
        {/* talk to headphone guru  */}
        <div className="bg-gray-200 w-80 h-4 rounded-sm"></div>

        {/* delivery and shipping  */}
        <div className="bg-gray-200 w-80 h-20 rounded-sm"></div>
        <hr />
        <div className="bg-gray-200 w-80 h-20 rounded-sm"></div>
      </div>
    </div>
  );
};
