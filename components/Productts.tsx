"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "./Card";

function Productts() {
  const [products, setProducts] = useState<Array<Products>>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="flex justify-center items-center bg-[#f7f7f5]">
      <div className=" grid grid-cols-1 gap-5 md:grid-cols-4 mt-5 lg:grid-cols-5 sm:grid-cols-2">
        {products?.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}

export default Productts;
