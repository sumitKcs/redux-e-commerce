"use client";

import { useSession } from "next-auth/react";
import { useGetOrdersQuery } from "@/store/apiSlice";
import OrdersList from "@/components/OrdersList";

const Account = () => {
  const { data: session } = useSession();
  const { data: orders } = useGetOrdersQuery();
  console.log("orders data: ", orders);
  const userFullName = session?.user?.name;
  const userFirstName = userFullName?.split(" ")[0];

  return (
    <section className="flex justify-center items-center h-auto">
      <div className="w-screen px-5 md:w-[80%] lg:w-[50%]">
        <div className="font-bold mt-5 mb-5 flex justify-center items-center">{`Hello ${userFirstName}`}</div>
        <div className="flex justify-center items-center bg-[#e6e6e6] font-bold text-sm py-3 rounded-md">
          <p>My Orders</p>
        </div>
        <OrdersList orders={orders} />
      </div>
    </section>
  );
};

export default Account;
