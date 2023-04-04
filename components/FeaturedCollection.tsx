import Link from "next/link";
import React from "react";
import { ChevronCircleWithText, GrdientHeading } from "@/components";
import NewProductList from "./FeaturedProducts";

const text = "View all";

const FeaturedCollection = () => {
  return (
    <>
      <div className="w-[90%] container mx-auto  mt-10">
        <GrdientHeading />
        <ChevronCircleWithText text={text} />
      </div>
      <NewProductList />
    </>
  );
};

export default FeaturedCollection;
