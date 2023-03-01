"use client";

import { useEffect, useState } from "react";

function Productts() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="flex justify-center items-center">
      <div>Products</div>
    </section>
  );
}

export default Productts;
