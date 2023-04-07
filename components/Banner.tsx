"use client";

import { banner_data } from "@/lib/ProductData";
import Link from "next/link";
import { useState, useEffect } from "react";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const { banner_image, banner_text, banner_slogan, slug } = banner_data[index];

  const handlePrev = () => {
    index === 0
      ? setIndex(banner_data.length - 1)
      : setIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    index === banner_data.length - 1
      ? setIndex(0)
      : setIndex((prev) => prev + 1);
  };
  useEffect(() => {
    const timeRef = setInterval(() => {
      let sliderIndex = index + 1;
      if (index === banner_data.length - 1) sliderIndex = 0;

      setIndex(sliderIndex);
    }, 3000);

    return () => {
      clearInterval(timeRef);
    };
  }, [index]);

  return (
    <div className="w-full h-full">
      <div className="carousel w-full h-full">
        <div className="carousel-item relative w-full">
          {/* desktop image */}
          <Link href={`product/${slug}`}>
            <img
              className="w-full object-cover h-full lg:h-auto hidden md:block "
              src={`${banner_image.desktop}&width=2160`}
              alt={banner_text}
              srcSet={`
                ${banner_image.desktop}&width=200 200w,
                ${banner_image.desktop}&width=300 300w,
                ${banner_image.desktop}&width=400 400w,
                ${banner_image.desktop}&width=500 500w,
                ${banner_image.desktop}&width=600 600w,
                ${banner_image.desktop}&width=700 700w,
                ${banner_image.desktop}&width=800 800w,
                ${banner_image.desktop}&width=900 900w,
                ${banner_image.desktop}&width=1000 1000w,
                ${banner_image.desktop}&width=1200 1200w,
                ${banner_image.desktop}&width=1400 1400w,
                ${banner_image.desktop}&width=1600 1600w,
                ${banner_image.desktop}&width=1800 1800w,
                ${banner_image.desktop}&width=2000 2000w,
                
                `}
              width="2160"
              height="1080"
              loading="eager"
              sizes="100vw"
            ></img>
          </Link>

          {/* mobile image  */}
          <Link href={`product/${slug}`}>
            <img
              className="w-full object-cover h-full lg:h-auto  md:hidden "
              src={`${banner_image.mobile}&width=1200`}
              alt={banner_text}
              srcSet={`
                ${banner_image.mobile}&width=200 200w,
                ${banner_image.mobile}&width=300 300w,
                ${banner_image.mobile}&width=400 400w,
                ${banner_image.mobile}&width=500 500w,
                ${banner_image.mobile}&width=600 600w,
                ${banner_image.mobile}&width=700 700w,
                ${banner_image.mobile}&width=800 800w,
                ${banner_image.mobile}&width=900 900w,
                ${banner_image.mobile}&width=1000 1000w,
                ${banner_image.mobile}&width=1200 1200w,
                
                `}
              width="1200"
              height="1600"
              loading="eager"
              sizes="100vw"
            ></img>
          </Link>

          <div className="text-[#FEFEFF] absolute z-99999 top-0 mt-10 md:right-0 md:mt-[20%] px-4 md:w-[30%]  md:text-right md:mr-14 ">
            <p className=" text-extrabold tracking-widest">{banner_slogan}</p>
            <br />
            <p className="text-3xl font-extrabold tracking-wider md:text-4xl lg:text:5xl ">
              {banner_text}
            </p>
            <br />
            <button className="bg-[#FEFEFF] py-4 px-6 rounded-full text-black  font-bold  text-sm tracking-widest ">
              BUY NOW
            </button>
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
