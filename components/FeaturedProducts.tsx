import { ProductData } from "@/lib/ProductData";
import { ScrollCarousel, ProductCard } from "@/components";

const FeaturedProducts = () => {
  return (
    <div className="w-full relative">
      <ScrollCarousel>
        {ProductData.map((item: any) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default FeaturedProducts;
