"use client";

import { useGetPeopleGridQuery } from "@/store/apiSlice";
import React from "react";

const PeopleGrid = () => {
  const { data: people } = useGetPeopleGridQuery();
  return (
    <section className="container mx-auto mb-5 lg:mb-0 grid grid-cols-2 people-grid md:scale-y-[.85] md:scale-x-95 scursor-pointer gap-3 md:gap-4 lg:gap-5 mt-10">
      {/* cell 1  */}

      {people?.map((person) => (
        <div
          className=" flex  person drop-shadow-xl overflow-hidden transition-transform duration-200 ease-out rounded-2xl "
          key={person.id}
        >
          <img
            className="w-full h-fullrounded-2xl object-cover zoom-in"
            src={`${person?.person_image}width=1500`}
            alt=""
            srcSet={`
            ${person?.person_image}width=1500,
            ${person?.person_image}width=200 200w,
            ${person?.person_image}width=300 300w
            ${person?.person_image}width=400 400w
            ${person?.person_image}width=500 500w
            ${person?.person_image}width=600 600w
            ${person?.person_image}width=700 700w
            ${person?.person_image}width=800 800w
            ${person?.person_image}width=1000 1000w
            ${person?.person_image}width=1200 1200w
            ${person?.person_image}width=1400 1400w
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
