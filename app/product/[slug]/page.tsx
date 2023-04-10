type Props = {
  params: {
    slug: string;
  };
};

const ProductDetails = ({ params }: Props) => {
  return <div className="text-black font-lg">{params.slug}</div>;
};

export default ProductDetails;
