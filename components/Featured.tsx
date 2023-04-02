import React from "react";

const Featured = () => {
  return (
    <section className="container mx-auto mb-5  feature-grid md:scale-y-[.80] md:scale-x-95">
      <div className="flex justify-center group  item item-1 ">
        <div className="relative w-full drop-shadow-xl group-hover:scale-105  transition-transform duration-200 ease-out">
          <img
            className="w-full h-full rounded-2xl object-cover  "
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/VmodaCrossfade2Wireless_1b26e891-eac3-4b66-9f38-becd63f5829b.jpg?v=1676363664&width=700"
            alt=""
          />
          <div className="absolute top-0  text-white  text-2xl md:text-4xl font-bold ">
            <p className="mt-10 mx-10 flex justify-center items-center  text-center ">
              V-MODA Crossfade 2 Wireless Codex Edition
            </p>
          </div>
        </div>
      </div>

      {/* cell 2 */}

      <div className=" w-full item item-2 flex  justify-center items-center gap-4 ">
        <div className="relative  drop-shadow-xl group transition-transform duration-200 ease-out">
          <img
            className="w-full h-full rounded-2xl object-cover group-hover:scale-105"
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/ZE3000.jpg?v=1676367536&width=400"
            alt=""
          />
          <div className="absolute top-0  text-white  text-2xl md:text-4xl font-bold ">
            <p className="mt-10 mx-10 flex justify-center items-center  text-center ">
              Final Ze3000
            </p>
          </div>
        </div>

        {/* cell 3 */}
        <div className="relative drop-shadow-xl group  transition-transform duration-200 ease-out">
          <img
            className="w-full h-full rounded-2xl  object-cover group-hover:scale-105"
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/Fiiobtr5.jpg?v=1676369219&width=400"
            alt=""
          />
          <div className="absolute top-0  text-white  text-2xl md:text-4xl font-bold ">
            <p className="mt-10 mx-10 flex justify-center items-center  text-center ">
              FiiO BRT5
            </p>
          </div>
        </div>
      </div>

      {/* cell 4  */}
      <div className="flex justify-center item item-3 group ">
        <div className="relative w-full drop-shadow-xl group-hover:scale-105   transition-transform duration-200 ease-out">
          <img
            className="w-full h-full rounded-2xl object-cover "
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Truthear-ZERO-Drop-Banner-01.jpg?v=1675945400&width=700"
            alt=""
          />
          <div className="w-full h-full absolute top-0  text-white  text-2xl md:text-4xl font-bold  py-10 ">
            <p className="wifull h-full  mx-10 flex justify-center md:justify-start items-end  text-center  my-auto">
              Truthear Zero
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
