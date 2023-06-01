"use client";

import { useRouter } from "next/navigation";

function Category() {
  const router = useRouter();
  return router.push("/");
}

export default Category;
