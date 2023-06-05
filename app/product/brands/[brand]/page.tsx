import { BrandsController } from "../../../../components";
type Props = {
  params: {
    brand: string;
  };
};

const BrandProducts = ({ params }: Props) => {
  return <BrandsController brand={params.brand} />;
};

export default BrandProducts;
