import React from "react";
import { ProductList } from "../../../../components";
type Props = {
  params: {
    price: string;
  };
};

const PriceProducts = ({ params }: Props) => {
  return <ProductList category={params.price} />;
};

export default PriceProducts;
