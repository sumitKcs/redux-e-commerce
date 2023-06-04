import { ImageBanner, ProductView } from "../";

type Props = {
  bannerImages: {
    desktop: string;
    mobile: string;
  };
  products: Product[] | undefined;
  category: string;
};

const headphones = ({ bannerImages, products, category }: Props) => {
  return (
    <main className="w-screen h-auto bg-[#f9f9f9]">
      <div className="flex flex-col gap-10 w-screen justify-center items-center text-center">
        <div className="w-screen">
          <ImageBanner
            desktopImage={bannerImages?.desktop}
            mobileImage={bannerImages?.mobile}
          />
        </div>
        <div className=" text-5xl font-bold text-black opacity-80 capitalize">
          {category}
        </div>
        <div className="text-lg">{products?.length || 0} Products</div>
        <div className="w-screen">
          <ProductView products={products} />
        </div>
      </div>
    </main>
  );
};

export default headphones;
