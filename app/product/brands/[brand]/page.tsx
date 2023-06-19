import dynamic from "next/dynamic";
const BrandsController = dynamic(() => import("@/components/BrandsController"));

type Props = {
  params: {
    brand: string;
  };
};

const BrandProducts = ({ params }: Props) => {
  return <BrandsController brand={params.brand} />;
};

export default BrandProducts;
