import { PricesController } from "../../../../components";
type Props = {
  params: {
    price: string;
  };
};

const PriceProducts = ({ params }: Props) => {
  return <PricesController price={params.price} />;
};

export default PriceProducts;
