import {
  Banner,
  ProductGrid,
  ImpactText,
  FeaturedCollection,
  StartHere,
  Header,
  PeopleGrid,
  Testimonials,
  Newsletter,
  Footer,
  StoreProvider,
} from "@/components";

const Home = () => {
  return (
    <StoreProvider>
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
        <Footer />
      </main>
    </StoreProvider>
  );
};

export default Home;
