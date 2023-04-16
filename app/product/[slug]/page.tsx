"use client";

import { ScrollCarousel } from "@/components";
import { useGetProductBySlugQuery } from "@/store/apiSlice";

type Props = {
  params: {
    slug: string;
  };
};

const ProductDetails = ({ params }: Props) => {
  const slug = params.slug;
  const { data: product } = useGetProductBySlugQuery(slug);
  console.log("slug", product?.[0]?.images);
  if (product?.[0]?.images?.length === 0) {
    return <p className="text-7xl text-black">no images</p>;
  }
  return (
    <div>
      <ScrollCarousel>
        {product?.[0]?.images?.map((image) => (
          <img src={image} />
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default ProductDetails;
