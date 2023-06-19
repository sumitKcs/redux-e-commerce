type Props = {
  desktopImage: string | undefined;
  mobileImage: string | undefined;
  text?: string;
};
const ImageBanner = ({ desktopImage, mobileImage, text }: Props) => {
  return (
    <div className="relative w-screen h-full">
      {/* desktop image */}
      {desktopImage && (
        <img
          className="w-full object-cover h-full lg:h-auto hidden md:block ease-in duration-700"
          src={`https:${desktopImage}&width=3200`}
          alt={"heaphone banner"}
          srcSet={`
              https:${desktopImage}&width=200 200w,
              https:${desktopImage}&width=300 300w,
              https:${desktopImage}&width=400 400w,
              https:${desktopImage}&width=500 500w,
              https:${desktopImage}&width=600 600w,
              https:${desktopImage}&width=700 700w,
              https:${desktopImage}&width=800 800w,
              https:${desktopImage}&width=900 900w,
              https:${desktopImage}&width=1000 1000w,
              https:${desktopImage}&width=1200 1200w,
              https:${desktopImage}&width=1400 1400w,
              https:${desktopImage}&width=1600 1600w,
              https:${desktopImage}&width=1800 1800w,
              https:${desktopImage}&width=2000 2000w,
              
              `}
          width="2160"
          height="1080"
          loading="eager"
          sizes="100vw"
        ></img>
      )}

      {/* mobile image  */}
      {mobileImage && (
        <img
          className="w-full object-cover h-full lg:h-auto md:hidden ease-in duration-700"
          src={`https:${mobileImage}&width=1300`}
          alt={"headphone banner"}
          srcSet={`
              https:${mobileImage}&width=200 200w,
              https:${mobileImage}&width=300 300w,
              https:${mobileImage}&width=400 400w,
              https:${mobileImage}&width=500 500w,
              https:${mobileImage}&width=600 600w,
              https:${mobileImage}&width=700 700w,
              https:${mobileImage}&width=800 800w,
              https:${mobileImage}&width=900 900w,
              https:${mobileImage}&width=1000 1000w,
              https:${mobileImage}&width=1200 1200w,
              
              `}
          width="1200"
          height="1600"
          loading="eager"
          sizes="100vw"
        ></img>
      )}

      <div className=" capitalize text-5xl font-bold text-white absolute top-[50%] left-10">
        {text}
      </div>
    </div>
  );
};

export default ImageBanner;
