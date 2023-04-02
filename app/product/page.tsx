import { Banner, Featured, ImpactText, NavBar } from "@/components";
import Products from "@/components/Products";
import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <Banner />

      <main className="w-full flex flex-col justify-center items-center  bg-[#f7f7f5]">
        <ImpactText />
        <Featured />
        <Products />
      </main>
    </div>
  );
};

export default Home;
