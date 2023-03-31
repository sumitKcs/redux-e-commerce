import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[80%]">
      <img
        src="https://cdn.shopify.com/s/files/1/0153/8863/files/Lypertek_Z3_Homepage_Desktop.jpg?v=1680094040&width=800"
        className="w-full  object-cover  h-full lg:h-auto lg:object-cover-contain"
      />
      <div className="text-[#FEFEFF] relative z-10 bottom-[38rem] px-4 md:w-1/3 md:float-right md:text-right md:mr-14">
        <p className=" text-extrabold tracking-widest">
          OUR BEST SELLING TWS JUST GOT CHEAPER!
        </p>
        <br />
        <p className="text-3xl font-extrabold tracking-wider md:text-5xl">
          Price Drop Alert: LYPERTEK PurePlay Z3 Now at ₹ 5,999
        </p>
        <br />
        <button className="bg-[#FEFEFF] py-4 px-6 rounded-full text-black  font-bold  text-sm tracking-widest ">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Banner;
