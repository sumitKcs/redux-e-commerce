"use client";

import React, { useRef } from "react";

const ScrollCarousel = ({ children }: { children: React.ReactNode }) => {
  const scroller = useRef<HTMLDivElement>(null);
  const handleLeftScroll = () => {
    const scrollerContainer = scroller.current as HTMLDivElement;
    scrollerContainer.scrollLeft -= 200;
  };
  const handleRightScroll = () => {
    const scrollerContainer = scroller.current as HTMLDivElement;
    scrollerContainer.scrollLeft += 180;
  };
  return (
    <section className="group">
      <div
        className="w-full relative product-scroller snaps-inline"
        id="scroller"
        ref={scroller}
      >
        {children}
      </div>
      <div className="absolute  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 hidden group-hover:flex ">
        <button onClick={handleLeftScroll} className="btn btn-circle">
          ❮
        </button>
        <button onClick={handleRightScroll} className="btn btn-circle">
          ❯
        </button>
      </div>
    </section>
  );
};

export default ScrollCarousel;
