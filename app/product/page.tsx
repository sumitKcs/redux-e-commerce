import { NavBar } from "@/components";
import Products from "@/components/Products";
import React from "react";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="w-full flex justify-center items-center  bg-[#f7f7f5]">
        <Products />
      </main>
    </>
  );
};

export default Home;
