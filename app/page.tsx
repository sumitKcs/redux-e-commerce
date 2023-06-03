import {
  Banner,
  ProductGrid,
  ImpactText,
  FeaturedCollection,
  StartHere,
  PeopleGrid,
  Testimonials,
  Newsletter,
  Footer,
} from "@/components";

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
