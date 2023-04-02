import {
  Banner,
  Featured,
  ImpactText,
  NavBar,
  NewProducts,
} from "@/components";
import Products from "@/components/Products";
import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <Banner />

      <main className="w-full flex flex-col justify-center items-center  bg-white">
        <ImpactText />
        <Featured />
        <NewProducts />
        <Products />
      </main>
    </div>
  );
};

export default Home;
