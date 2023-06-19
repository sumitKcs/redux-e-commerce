import dynamic from "next/dynamic";
const PricesController = dynamic(() => import("@/components/PricesController"));

type Props = {
  params: {
    price: string;
  };
};

const PriceProducts = ({ params }: Props) => {
  return <PricesController price={params.price} />;
};

export default PriceProducts;
