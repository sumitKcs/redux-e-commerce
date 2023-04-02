import React from "react";

const Featured = () => {
  return (
    <div className="container mx-auto mb-5  feature-grid md:scale-y-[.80] md:scale-x-95">
      <div className="flex justify-center group item item-1 ">
        <div className="relative w-full drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
          <img
            className="w-full h-full rounded-2xl object-cover "
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/VmodaCrossfade2Wireless_1b26e891-eac3-4b66-9f38-becd63f5829b.jpg?v=1676363664&width=700"
            alt=""
          />
          <div className="absolute top-0  text-white  text-2xl font-bold">
            <p className="flex justify-center items-center  text-center">
              V-MODA Crossfade 2 Wireless Codex Edition
            </p>
          </div>
        </div>
      </div>

      {/* cell 2 */}

      <div className=" w-full item item-2 flex  justify-center items-center gap-4 ">
        <div className="relative  drop-shadow-xl  transition-transform duration-200 ease-out">
          <img
            className="w-full h-full rounded-2xl object-cover "
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&width=400"
            alt=""
          />
          <p className="absolute left-0 text-red  text-2xl font-bold">
            <p className="flex justify-center items-center p-10 text-center">
              Final Ze3000
            </p>
          </p>
        </div>

        {/* cell 3 */}
        <div className="relative drop-shadow-xl   transition-transform duration-200 ease-out">
          <img
            className="w-full h-full rounded-2xl  object-cover group-hover:scale-105"
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&width=400"
            alt=""
          />
        </div>
      </div>

      {/* <div>
            <p>FiiO BRT5</p>
          </div> */}

      {/* cell 4  */}
      <div className="flex justify-center item item-3  group">
        <div className="relative w-full drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
          <img
            className="w-full h-full rounded-2xl object-cover group-hover:scale-105"
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Truthear-ZERO-Drop-Banner-01.jpg?v=1675945400&width=700"
            alt=""
          />
        </div>
      </div>

      {/* <div>
            <p>Truthear Zer</p>
          </div> */}
    </div>
  );
};

export default Featured;
