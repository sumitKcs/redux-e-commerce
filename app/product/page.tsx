import {
  Banner,
  MediaGrid,
  ImpactText,
  NavBar,
  Products,
  FeaturedCollection,
  StartHere,
} from "@/components";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <main className="w-full flex flex-col justify-center items-center  bg-white">
        <ImpactText />
        <MediaGrid />
        <FeaturedCollection />
        <StartHere />
        <Products />
      </main>
    </>
  );
};

export default Home;
