"use client";

import { useGetBannerQuery } from "@/store/apiSlice";
import Link from "next/link";
import { useState } from "react";

const Banner = () => {
  const { data: products } = useGetBannerQuery();
  const [index, setIndex] = useState(0);
  const [isDesktopBannerLoaded, setIsDesktopBannerLoaded] = useState(false);
  const [isMobileBannerLoaded, setIsMobileBannerLoaded] = useState(false);

  const product = products?.[index];

  const handlePrev = () => {
    if (products?.length) {
      index === 0
        ? setIndex(products?.length - 1)
        : setIndex((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (products?.length) {
      index === products?.length - 1
        ? setIndex(0)
        : setIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full h-full z-0">
      <div className="carousel w-full h-full">
        <div
          className={`carousel-item relative w-full h-fit md:min-h-[30vh] lg:min-h-[90svh] background`}
        >
          {/* desktop image */}
          {product?.banner_image?.desktop && (
            <img
              className={`${
                !isDesktopBannerLoaded ? "md:hidden " : "md:block animate"
              } w-full object-cover h-full lg:h-auto hidden`}
              src={`https:${product?.banner_image?.desktop}&width=2160`}
              alt={product?.banner_text}
              srcSet={`
                https:${product?.banner_image?.desktop}&width=200 200w,
                https:${product?.banner_image?.desktop}&width=300 300w,
                https:${product?.banner_image?.desktop}&width=400 400w,
                https:${product?.banner_image?.desktop}&width=500 500w,
                https:${product?.banner_image?.desktop}&width=600 600w,
                https:${product?.banner_image?.desktop}&width=700 700w,
                https:${product?.banner_image?.desktop}&width=800 800w,
                https:${product?.banner_image?.desktop}&width=900 900w,
                https:${product?.banner_image?.desktop}&width=1000 1000w,
                https:${product?.banner_image?.desktop}&width=1200 1200w,
                https:${product?.banner_image?.desktop}&width=1400 1400w,
                https:${product?.banner_image?.desktop}&width=1600 1600w,
                https:${product?.banner_image?.desktop}&width=1800 1800w,
                https:${product?.banner_image?.desktop}&width=2000 2000w,
                
                `}
              loading="eager"
              sizes="100vw"
              width="1200"
              height="1600"
              onLoad={() => setIsDesktopBannerLoaded(true)}
            ></img>
          )}

          {/* mobile image  */}
          <img
            className={`${
              isMobileBannerLoaded ? "hidden" : "block"
            } w-full object-cover h-full lg:h-auto md:hidden ease-in duration-700 `}
            src="/assets/banner/Lypertek_Z3_Homepage_Mobile.webp"
            alt={product?.banner_text}
            width="1600"
            height="800"
            loading="eager"
            sizes="100vw"
          ></img>
          {product?.banner_image?.mobile && (
            <img
              className={`${
                !isMobileBannerLoaded ? "hidden" : "block animate"
              } w-full object-cover h-full lg:h-auto md:hidden ease-in duration-700`}
              src={`https:${product?.banner_image?.mobile}&width=1200`}
              alt={product?.banner_text}
              srcSet={`
                https:${product?.banner_image?.mobile}&width=200 200w,
                https:${product?.banner_image?.mobile}&width=300 300w,
                https:${product?.banner_image?.mobile}&width=400 400w,
                https:${product?.banner_image?.mobile}&width=500 500w,
                https:${product?.banner_image?.mobile}&width=600 600w,
                https:${product?.banner_image?.mobile}&width=700 700w,
                https:${product?.banner_image?.mobile}&width=800 800w,
                https:${product?.banner_image?.mobile}&width=900 900w,
                https:${product?.banner_image?.mobile}&width=1000 1000w,
                https:${product?.banner_image?.mobile}&width=1200 1200w,
                
                `}
              width="1200"
              height="1600"
              loading="eager"
              sizes="100vw"
              onLoad={() => setIsMobileBannerLoaded(true)}
            ></img>
          )}

          <div className="text-[#FEFEFF] absolute z-1 top-0 mt-10 md:right-0 md:mt-[20%] px-4 md:w-[30%]  md:text-right md:mr-14 ">
            <p className=" text-extrabold tracking-widest">
              {product?.banner_slogan}
            </p>
            <br />
            <p className="text-3xl font-extrabold tracking-wider md:text-4xl lg:text:5xl">
              {product?.banner_text}
            </p>
            <br />
            <Link href={`product/${product?.slug}`}>
              {product && (
                <button className="bg-[#FEFEFF] py-4 px-6 rounded-full text-black  font-bold  text-sm tracking-widest ">
                  BUY NOW
                </button>
              )}
            </Link>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* previous slide  */}
            <button onClick={handlePrev} className="btn btn-circle">
              ❮
            </button>
            {/* next slide  */}
            <button onClick={handleNext} className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
