"use client";

import { useEffect } from "react";
import Card from "./Card";
import { fetchProducts } from "@/store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { STATUSES } from "@/store/productSlice";
import Skeleton from "./Skeleton";

function Products() {
  const { data: products, status } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (products.length === 0) {
    return (
      <section className="flex justify-center items-center bg-[#f7f7f5]">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-4 mt-5 lg:grid-cols-5 sm:grid-cols-2">
          {Array(20)
            .fill("")
            .map((e, key) => (
              <Skeleton key={key} />
            ))}
        </div>
      </section>
    );
  }
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

export default Products;
