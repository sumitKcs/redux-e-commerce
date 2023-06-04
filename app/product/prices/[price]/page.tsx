import { PricesController } from "../../../../components";
type Props = {
  params: {
    price: string;
  };
};

const PriceProducts = ({ params }: Props) => {
  return <PricesController category={params.price} />;
};

export default PriceProducts;
