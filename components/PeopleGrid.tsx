import React from "react";

const PeopleGrid = () => {
  return (
    <section className="container mx-auto mb-5 people-grid md:scale-y-[.80] md:scale-x-95 cursor-pointer">
      {/* cell 1  */}
      <div className="flex justify-center people-1 overflow-hidden rounded-2xl">
        <div className=" w-full drop-shadow-xl transition-transform duration-200 ease-out">
          <img
            className="w-full h-full rounded-2xl object-cover zoom-in"
            src="//cdn.shopify.com/s/files/1/0153/8863/files/1_4380d956-8343-49a8-bc17-21155000885e.jpg?v=1676882405&amp;width=1500"
            alt=""
            srcSet="//cdn.shopify.com/s/files/1/0153/8863/files/1_4380d956-8343-49a8-bc17-21155000885e.jpg?v=1676882405&amp;width=200 200w, //cdn.shopify.com/s/files/1/0153/8863/files/1_4380d956-8343-49a8-bc17-21155000885e.jpg?v=1676882405&amp;width=300 300w, //cdn.shopify.com/s/files/1/0153/8863/files/1_4380d956-8343-49a8-bc17-21155000885e.jpg?v=1676882405&amp;width=400 400w, //cdn.shopify.com/s/files/1/0153/8863/files/1_4380d956-8343-49a8-bc17-21155000885e.jpg?v=1676882405&amp;width=500 500w, //cdn.shopify.com/s/files/1/0153/8863/files/1_4380d956-8343-49a8-bc17-21155000885e.jpg?v=1676882405&amp;width=600 600w, //cdn.shopify.com/s/files/1/0153/8863/files/1_4380d956-8343-49a8-bc17-21155000885e.jpg?v=1676882405&amp;width=700 700w, //cdn.shopify.com/s/files/1/0153/8863/files/1_4380d956-8343-49a8-bc17-21155000885e.jpg?v=1676882405&amp;width=800 800w, //cdn.shopify.com/s/files/1/0153/8863/files/1_4380d956-8343-49a8-bc17-21155000885e.jpg?v=1676882405&amp;width=1000 1000w, //cdn.shopify.com/s/files/1/0153/8863/files/1_4380d956-8343-49a8-bc17-21155000885e.jpg?v=1676882405&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/0153/8863/files/1_4380d956-8343-49a8-bc17-21155000885e.jpg?v=1676882405&amp;width=1400 1400w"
            width="1500"
            height="1500"
            loading="lazy"
            sizes="(max-width: 699px) 100vw, min(390px, 25vw)"
          />
        </div>
      </div>

      {/* cell 2 & 3 */}

      {/* cell 4  */}
      <div className="flex justify-center people-2 overflow-hidden ">
        <div className="relative w-full drop-shadow-xl overflow-hidden transition-transform duration-200 ease-out rounded-2xl">
          <img
            className="w-full h-full rounded-2xl object-cover zoom-in"
            src="//cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=3000"
            alt=""
            srcSet="//cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=200 200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=300 300w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=400 400w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=500 500w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=600 600w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=700 700w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=800 800w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1000 1000w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1400 1400w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1600 1600w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1800 1800w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2000 2000w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2200 2200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2400 2400w"
            width="3000"
            height="1500"
            loading="lazy"
            sizes="(max-width: 699px) 100vw, min(780px, 50vw)"
          ></img>
        </div>
      </div>

      {/* cell 4  */}
      <div className="flex justify-center people-3 overflow-hidden ">
        <div className="relative w-full drop-shadow-xl overflow-hidden transition-transform duration-200 ease-out rounded-2xl">
          <img
            className="w-full h-full rounded-2xl object-cover zoom-in"
            src="//cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=3000"
            alt=""
            srcSet="//cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=200 200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=300 300w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=400 400w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=500 500w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=600 600w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=700 700w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=800 800w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1000 1000w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1400 1400w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1600 1600w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1800 1800w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2000 2000w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2200 2200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2400 2400w"
            width="3000"
            height="1500"
            loading="lazy"
            sizes="(max-width: 699px) 100vw, min(780px, 50vw)"
          ></img>
        </div>
      </div>
      {/* cell 5 */}
      <div className="flex justify-center people-4 overflow-hidden gap-5 ">
        <div className="relative w-full drop-shadow-xl overflow-hidden transition-transform duration-200 ease-out rounded-2xl">
          <img
            className="w-full h-full rounded-2xl object-cover zoom-in"
            src="//cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=3000"
            alt=""
            srcSet="//cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=200 200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=300 300w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=400 400w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=500 500w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=600 600w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=700 700w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=800 800w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1000 1000w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1400 1400w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1600 1600w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1800 1800w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2000 2000w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2200 2200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2400 2400w"
            width="3000"
            height="1500"
            loading="lazy"
            sizes="(max-width: 699px) 100vw, min(780px, 50vw)"
          ></img>
        </div>
        {/* cell 6  */}

        <div className="flex justify-center item-3 overflow-hidden ">
          <div className="relative w-full drop-shadow-xl overflow-hidden transition-transform duration-200 ease-out rounded-2xl">
            <img
              className="w-full h-full rounded-2xl object-cover zoom-in"
              src="//cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=3000"
              alt=""
              srcSet="//cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=200 200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=300 300w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=400 400w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=500 500w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=600 600w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=700 700w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=800 800w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1000 1000w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1400 1400w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1600 1600w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1800 1800w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2000 2000w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2200 2200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2400 2400w"
              width="3000"
              height="1500"
              loading="lazy"
              sizes="(max-width: 699px) 100vw, min(780px, 50vw)"
            ></img>
          </div>
        </div>
      </div>
      {/* cell 7  */}

      <div className="flex justify-center people-5 overflow-hidden ">
        <div className="relative w-full drop-shadow-xl overflow-hidden transition-transform duration-200 ease-out rounded-2xl">
          <img
            className="w-full h-full rounded-2xl object-cover zoom-in"
            src="//cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=3000"
            alt=""
            srcSet="//cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=200 200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=300 300w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=400 400w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=500 500w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=600 600w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=700 700w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=800 800w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1000 1000w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1400 1400w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1600 1600w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=1800 1800w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2000 2000w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2200 2200w, //cdn.shopify.com/s/files/1/0153/8863/files/4_3d8aec33-0c30-48b5-952d-1f58934f49a0.jpg?v=1676882012&amp;width=2400 2400w"
            width="3000"
            height="1500"
            loading="lazy"
            sizes="(max-width: 699px) 100vw, min(780px, 50vw)"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default PeopleGrid;
