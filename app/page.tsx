import dynamic from "next/dynamic";

import { Banner } from "@/components";

const ImpactText = dynamic(() => import("@/components/ImpactText"));
const ProductGrid = dynamic(() => import("@/components/ProductGrid"));
const FeaturedCollection = dynamic(
  () => import("@/components/FeaturedCollection")
);
const StartHere = dynamic(() => import("@/components/StartHere"));
const PeopleGrid = dynamic(() => import("@/components/PeopleGrid"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Newsletter = dynamic(() => import("@/components/Newsletter"));

const Home = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center  bg-white">
      <Banner />
      <ImpactText />
      <ProductGrid />
      <FeaturedCollection />
      <StartHere />
      <PeopleGrid />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
