import { Banner, NavBar } from "@/components";
import Products from "@/components/Products";
import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <Banner />
      <main className="w-full flex justify-center items-center  bg-[#f7f7f5]">
        <Products />
      </main>
    </div>
  );
};

export default Home;
