"use client";

import { useGetPeopleGridQuery } from "@/store/apiSlice";
import Loader from "./Loader";

const PeopleGrid = () => {
  const { data: people } = useGetPeopleGridQuery();
  return (
    <section className="container mx-auto mb-5 lg:mb-0 grid grid-cols-2 people-grid md:scale-y-[.85] md:scale-x-95 gap-3 md:gap-4 lg:gap-5 mt-10">
      {/* cell 1  */}

      {!people
        ? Array(6)
            .fill(0)
            .map((item, idx) => (
              <div
                className="h-[350px] bg-gray-200 flex justify-center items-center person drop-shadow-xl overflow-hidden rounded-2xl"
                key={idx}
              >
                <Loader width="w-10" height="h-10" />
              </div>
            ))
        : people?.map((person) => (
            <div
              className={`h-[350px] flex justify-center items-center person drop-shadow-xl overflow-hidden rounded-2xl animate bg-gray-200`}
              key={person.id}
            >
              <img
                className={`w-full h-full rounded-2xl object-cover zoom-in`}
                src={`https:${person?.person_image}width=1500`}
                alt="people image"
                srcSet={`
            https:${person?.person_image}width=1500,
            https:${person?.person_image}width=200 200w,
            https:${person?.person_image}width=300 300w
            https:${person?.person_image}width=400 400w
            https:${person?.person_image}width=500 500w
            https:${person?.person_image}width=600 600w
            https:${person?.person_image}width=700 700w
            https:${person?.person_image}width=800 800w
            https:${person?.person_image}width=1000 1000w
            https:${person?.person_image}width=1200 1200w
            https:${person?.person_image}width=1400 1400w
            `}
                width="1500"
                height="1500"
                loading="lazy"
                sizes="(max-width: 699px) 100vw, min(390px, 25vw)"
              />
            </div>
          ))}
    </section>
  );
};

export default PeopleGrid;
