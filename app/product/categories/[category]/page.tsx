import React from "react";
import { CategoryController } from "../../../../components";
type Props = {
  params: {
    category: string;
  };
};

const CategoryProducts = ({ params }: Props) => {
  return <CategoryController category={params.category} />;
};

export default CategoryProducts;
