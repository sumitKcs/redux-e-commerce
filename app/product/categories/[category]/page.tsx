import React from "react";
import { ProductList } from "../../../../components";
type Props = {
  params: {
    category: string;
  };
};

const CategoryProducts = ({ params }: Props) => {
  return <ProductList category={params.category} />;
};

export default CategoryProducts;
