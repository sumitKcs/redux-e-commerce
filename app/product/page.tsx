import {
  Banner,
  ProductGrid,
  ImpactText,
  Products,
  FeaturedCollection,
  StartHere,
  Header,
  PeopleGrid,
  Testimonials,
  Newsletter,
  Footer,
} from "@/components";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <main className="w-full flex flex-col justify-center items-center  bg-white">
        <ImpactText />
        <ProductGrid />
        <FeaturedCollection />
        <StartHere />
        <PeopleGrid />
        <Testimonials />
        <Newsletter />
        {/* <Products /> */}
      </main>
    </>
  );
};

export default Home;
