type Props = {
  params: {
    slug: string;
  };
};

const ProductDetails = ({ params }: Props) => {
  return <div className="text-black">{params.slug}</div>;
};

export default ProductDetails;
