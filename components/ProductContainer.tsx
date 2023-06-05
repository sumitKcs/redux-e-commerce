import { ImageBanner, ProductView } from ".";

type Props = {
  bannerImages: {
    desktop: string | undefined;
    mobile: string | undefined;
  };
  products: Product[] | undefined;
  bannerText: string;
};

const ProductContainer = ({ bannerImages, products, bannerText }: Props) => {
  return (
    <main className="w-screen h-auto bg-[#f9f9f9] pb-20">
      <div className="flex flex-col gap-10 w-screen justify-center items-center text-center">
        <div className="w-screen">
          <ImageBanner
            text={bannerText}
            desktopImage={bannerImages?.desktop}
            mobileImage={bannerImages?.mobile}
          />
        </div>
        <div className=" text-5xl font-bold text-black opacity-80 capitalize">
          {bannerText}
        </div>
        <div className="text-lg">
          {products?.length || 0}
          {products?.length === 1 ? " product" : " products"}
        </div>
        <div className="w-screen">
          {!products?.length ? (
            <div className="text-2xl h-80">
              Currently, No Products For this Category
            </div>
          ) : (
            <ProductView products={products} />
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductContainer;
