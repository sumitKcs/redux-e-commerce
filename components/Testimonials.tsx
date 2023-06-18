"use client";

import { useState } from "react";
import { useGetTestimononialsQuery } from "@/store/apiSlice";

const Testimonials = () => {
  const { data: reviewData } = useGetTestimononialsQuery();
  const [index, setIndex] = useState(0);

  return (
    <section className="w-full md:w-[90%] h-[50%] bg-white text-black testimonials-gradient flex flex-col justify-center items-center px-8 py-10 lg:py-24 lg:px-40  text-center gap-10 sm:mx-5 mt-10 mb-10 sm:rounded-3xl">
      {/* rating  */}
      <div className="flex justify-center items-center gap-2 ">
        {Array(reviewData?.[index].rating)
          .fill("")
          .map((e, key) => (
            <svg
              key={key}
              className="text-warning"
              role="presentation"
              fill="none"
              focusable="false"
              width="15"
              height="15"
              viewBox="0 0 15 15"
            >
              <path
                d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z"
                fill="currentColor"
              ></path>
            </svg>
          ))}
      </div>

      {/* comment  */}
      <div className="text-2xl md:text-3xl font-semibold opacity-70 lg:w-[80%] flex flex-col justify-center items-center gap-10 h-52">
        {reviewData?.[index]?.comment || "Getting Reviews..."}
        {/* //headphonezone logo-black */}
        <div>
          <img
            className=" max-w-[145px]"
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_2_copy_2.png?v=1676892876&amp;width=301"
            alt=""
            srcSet="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_2_copy_2.png?v=1676892876&amp;width=145 145w, //cdn.shopify.com/s/files/1/0153/8863/files/Artboard_2_copy_2.png?v=1676892876&amp;width=290 290w"
            width="301"
            height="91"
            loading="eager"
            sizes="145px"
          />

          {/* // reviewer name  */}
          <div className="text-gray-700 text-base">
            {reviewData?.[index]?.name}
          </div>
        </div>
      </div>

      {/* navigation button  */}
      <div className="flex gap-10">
        <button
          onClick={() =>
            setIndex((prev) => (index > 0 ? prev - 1 : reviewData?.length! - 1))
          }
          className="btn btn-circle bg-transparent border-gray-400 text-black"
        >
          ❮
        </button>
        <div className="flex justfiy-evenly items-center gap-5">
          {reviewData?.map((review) => (
            <span
              key={review.id}
              className={`bg-gray-500 rounded-full p-[2px] ${
                index === parseInt(review.id) - 1 && "p-[4px] bg-black"
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={() =>
            setIndex((prev) => (index < reviewData?.length! - 1 ? prev + 1 : 0))
          }
          className="btn btn-circle bg-transparent border-gray-400 text-black"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
