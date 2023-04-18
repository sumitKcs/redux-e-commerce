"use client";

import { ScrollCarousel, ProductCard } from "@/components";
import { useGetAllProductsQuery } from "@/store/apiSlice";

const FeaturedProducts = () => {
  const { data: products } = useGetAllProductsQuery();
  return (
    <div className="w-full relative">
      <ScrollCarousel>
        {products?.map((item: any) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default FeaturedProducts;
