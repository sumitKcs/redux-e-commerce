type Props = {
  desktopImage: string;
  mobileImage: string;
  text?: string;
};
const ImageBanner = ({ desktopImage, mobileImage, text }: Props) => {
  return (
    <div className="w-screen h-full">
      {/* desktop image */}
      <img
        className="w-full object-cover h-full lg:h-auto hidden md:block ease-in duration-700"
        src={`${desktopImage}&width=3200`}
        alt={"heaphone banner"}
        srcSet={`
              ${desktopImage}&width=200 200w,
              ${desktopImage}&width=300 300w,
              ${desktopImage}&width=400 400w,
              ${desktopImage}&width=500 500w,
              ${desktopImage}&width=600 600w,
              ${desktopImage}&width=700 700w,
              ${desktopImage}&width=800 800w,
              ${desktopImage}&width=900 900w,
              ${desktopImage}&width=1000 1000w,
              ${desktopImage}&width=1200 1200w,
              ${desktopImage}&width=1400 1400w,
              ${desktopImage}&width=1600 1600w,
              ${desktopImage}&width=1800 1800w,
              ${desktopImage}&width=2000 2000w,
              
              `}
        width="2160"
        height="1080"
        loading="eager"
        sizes="100vw"
      ></img>

      {/* mobile image  */}
      <img
        className="w-full object-cover h-full lg:h-auto md:hidden ease-in duration-700"
        src={`${mobileImage}&width=1300`}
        alt={"headphone banner"}
        srcSet={`
              ${mobileImage}&width=200 200w,
              ${mobileImage}&width=300 300w,
              ${mobileImage}&width=400 400w,
              ${mobileImage}&width=500 500w,
              ${mobileImage}&width=600 600w,
              ${mobileImage}&width=700 700w,
              ${mobileImage}&width=800 800w,
              ${mobileImage}&width=900 900w,
              ${mobileImage}&width=1000 1000w,
              ${mobileImage}&width=1200 1200w,
              
              `}
        width="1200"
        height="1600"
        loading="eager"
        sizes="100vw"
      ></img>
    </div>
  );
};

export default ImageBanner;
