import React from "react";
import { ProductList } from "../../../../components";
type Props = {
  params: {
    brands: string;
  };
};

const BrandProducts = ({ params }: Props) => {
  return <ProductList category={params.brands} />;
};

export default BrandProducts;
