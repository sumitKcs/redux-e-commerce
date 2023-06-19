import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"));

const page = () => {
  return <About />;
};

export default page;
